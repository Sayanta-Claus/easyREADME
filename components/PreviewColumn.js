// import { TAB } from "@/utils/constants";
// import Link from "next/link";
// import ReactMarkdown from "react-markdown";
// import remarkGfm from "remark-gfm";
// import RawPreview from "./RawPreview";

// export const PreviewColumn = ({
//   selectedSectionSlugs,
//   getTemplate,
//   selectedTab,
// }) => {
//   selectedSectionSlugs = [...new Set(selectedSectionSlugs)];
//   const markdown = selectedSectionSlugs.reduce((acc, section) => {
//     const template = getTemplate(section);
//     if (template) {
//       return `${acc}${template?.markdown}`;
//     } else {
//       return acc;
//     }
//   }, ``);

//   const showPreview = selectedTab == TAB.PREVIEW;

//   return (
//     <div
//       className={`h-full preview-width md:w-auto border border-gray-500 rounded-md p-6 preview bg-white full-screen overflow-x-scroll md:overflow-x-auto ${
//         showPreview ? "overflow-y-scroll" : "overflow-hidden"
//       }`}
//     >
//       {showPreview ? (
//         <ReactMarkdown
//           remarkPlugins={[remarkGfm]}
//           children={markdown}
//           renderers={{
//             link: (props) => (
//               <Link href={props.href} target="__blank">
//                 {props.children}
//               </Link>
//             ),
//           }}
//         />
//       ) : (
//         <RawPreview text={markdown} />
//       )}
//     </div>
//   );
// };

// import { TAB } from "@/utils/constants";
// import ReactMarkdown from "react-markdown";
// import remarkGfm from "remark-gfm";
// import RawPreview from "./RawPreview";

// export const PreviewColumn = ({
//   selectedSectionSlugs,
//   getTemplate,
//   selectedTab,
// }) => {
//   // Ensure unique section slugs
//   selectedSectionSlugs = [...new Set(selectedSectionSlugs)];

//   // Combine markdown from selected sections
//   const markdown = selectedSectionSlugs.reduce((acc, section) => {
//     const template = getTemplate(section);
//     return template ? `${acc}\n\n${template.markdown}` : acc;
//   }, "");

//   return (
//     <div
//       className="h-full w-[30%] min-w-[280px] max-w-[450px] overflow-y-auto border-l border-gray-300 bg-white"
//     >
//       <div className="p-4 h-full">
//         {selectedTab === TAB.PREVIEW ? (
//           <div className="prose max-w-none prose-a:text-blue-600 prose-img:rounded-md">
//             <ReactMarkdown
//               remarkPlugins={[remarkGfm]}
//               components={{
//                 a: ({ href, children }) => (
//                   <a
//                     href={href}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-blue-600 underline"
//                   >
//                     {children}
//                   </a>
//                 ),
//               }}
//             >
//               {markdown}
//             </ReactMarkdown>
//           </div>
//         ) : (
//           <RawPreview text={markdown} />
//         )}
//       </div>
//     </div>
//   );
// };



// import { TAB } from "@/utils/constants";
// import Link from "next/link";
// import ReactMarkdown from "react-markdown";
// import remarkGfm from "remark-gfm";
// import RawPreview from "./RawPreview";

// export const PreviewColumn = ({
//   selectedSectionSlugs,
//   getTemplate,
//   selectedTab,
// }) => {
//   selectedSectionSlugs = [...new Set(selectedSectionSlugs)];

//   const markdown = selectedSectionSlugs.reduce((acc, section) => {
//     const template = getTemplate(section);
//     if (template) {
//       return `${acc}${template?.markdown}`;
//     } else {
//       return acc;
//     }
//   }, ``);

//   const showPreview = selectedTab === TAB.PREVIEW;

//   return (
//     <div
//       className={`h-full w-full overflow-y-auto bg-white p-4 rounded-md border border-gray-300`}
//     >
//       {showPreview ? (
//         <ReactMarkdown
//           remarkPlugins={[remarkGfm]}
//           components={{
//             a: ({ href, children }) => (
//               <Link href={href} target="_blank" rel="noopener noreferrer">
//                 {children}
//               </Link>
//             ),
//           }}
//         >
//           {markdown}
//         </ReactMarkdown>
//       ) : (
//         <RawPreview text={markdown} />
//       )}
//     </div>
//   );
// };






import { TAB } from "@/utils/constants";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import RawPreview from "./RawPreview";

export const PreviewColumn = ({
  selectedSectionSlugs,
  getTemplate,
  selectedTab,
}) => {
  selectedSectionSlugs = [...new Set(selectedSectionSlugs)];

  const markdown = selectedSectionSlugs.reduce((acc, section) => {
    const template = getTemplate(section);
    return template ? `${acc}${template.markdown}` : acc;
  }, "");

  const showPreview = selectedTab === TAB.PREVIEW;

  return (
    <div
      className={`h-full w-full overflow-y-auto bg-white p-4 rounded-md border border-gray-300 preview`}
    >
      {showPreview ? (
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            h1: ({ children }) => (
              <h1 className="text-4xl font-bold mt-4 mb-2">{children}</h1>
            ),
            h2: ({ children }) => (
              <h2 className="text-3xl font-semibold mt-4 mb-2">{children}</h2>
            ),
            h3: ({ children }) => (
              <h3 className="text-2xl font-semibold mt-4 mb-2">{children}</h3>
            ),
            p: ({ children }) => (
              <p className="text-base leading-relaxed mb-4">{children}</p>
            ),
            a: ({ href, children }) => (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                {children}
              </a>
            ),
            ul: ({ children }) => (
              <ul className="list-disc list-inside mb-4">{children}</ul>
            ),
            ol: ({ children }) => (
              <ol className="list-decimal list-inside mb-4">{children}</ol>
            ),
            li: ({ children }) => <li className="mb-1">{children}</li>,
            code: ({ children }) => (
              <code className="bg-gray-100 px-1 rounded text-sm">{children}</code>
            ),
            pre: ({ children }) => (
              <pre className="bg-gray-100 p-4 rounded overflow-x-auto mb-4">
                {children}
              </pre>
            ),
          }}
        >
          {markdown}
        </ReactMarkdown>
      ) : (
        <RawPreview text={markdown} />
      )}
    </div>
  );
};

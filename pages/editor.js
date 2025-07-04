// import { DownloadModal } from "@/components/DownloadModal";
// import EditorPreviewContainer from "@/components/EditorPreviewContainer";
// import { Nav } from "@/components/Nav";
// import { SectionsColumn } from "@/components/SectionsColumn";
// import { sectionTemplates } from "@/data/section-templates";
// import useLocalStorage from "@/hooks/useLocalStorage";
// import { useTranslation } from "next-i18next";
// import { serverSideTranslations } from "next-i18next/serverSideTranslations";
// import Head from "next/head";
// import { useEffect, useState } from "react";

// export default function Editor({ sectionTemplate }) {
//   const { t } = useTranslation("editor");
//   const [markdown, setMarkdown] = useState("");
//   const [selectedSectionSlugs, setSelectedSectionSlugs] = useState([]);
//   const [sectionSlugs, setSectionSlugs] = useState(
//     sectionTemplates.map((t) => t.slug)
//   );
//   const [focusedSectionSlug, setFocusedSectionSlug] = useState(null);
//   const [showModal, setShowModal] = useState(false);
//   const [templates, setTemplates] = useState(sectionTemplates);
//   const [showDrawer, toggleDrawer] = useState(false);
//   const { backup } = useLocalStorage();

//   useEffect(() => {
//     if (backup) {
//       setTemplates(backup);
//     }
//   }, [backup]);

//   const getTemplate = (slug) => {
//     return templates.find((t) => t.slug === slug);
//   };

//   useEffect(() => {
//     setFocusedSectionSlug(null);
//   }, []);

//   useEffect(() => {
//     let currentSlugList = localStorage.getItem("current-slug-list");
//     if (
//       currentSlugList.indexOf("title-and-description") == -1 &&
//       selectedSectionSlugs.indexOf("title-and-description") > -1
//     ) {
//       selectedSectionSlugs.splice(
//         selectedSectionSlugs.indexOf("title-and-description"),
//         1
//       );
//     }
//     setFocusedSectionSlug(
//       localStorage.getItem("current-slug-list").split(",")[0]
//     );
//     localStorage.setItem("current-slug-list", selectedSectionSlugs);
//   }, [selectedSectionSlugs]);
//   const drawerClass = showDrawer ? "" : "-translate-x-full md:transform-none";
//   return (
//     <div className="w-full h-full">
//       <Head></Head>
//       <Nav
//         selectedSectionSlugs={selectedSectionSlugs}
//         setShowModal={setShowModal}
//         getTemplate={getTemplate}
//         onMenuClick={() => {}}
//         isDrawerOpen={showDrawer}
//       ></Nav>
//       {showModal && <DownloadModal setShowModal={setShowModal} />}
//       <div className="flex md:px-6 md:pt-6">
//         <div
//           className={`flex flex-0 drawer-height absolute md:static p-6 md:p-0 bg-white md:bg-transparent shadow md:shadow-none z-10 md:z-0 transform transition-transform duration-500 ease-in-out ${drawerClass}`}
//         >
//           <SectionsColumn
//             selectedSectionSlugs={selectedSectionSlugs}
//             setSelectedSectionSlugs={setSelectedSectionSlugs}
//             sectionSlugs={sectionSlugs}
//             setSectionSlugs={setSectionSlugs}
//             setFocusedSectionSlug={setFocusedSectionSlug}
//             focusesSectionSlug={focusedSectionSlug}
//             templates={templates}
//             originalTemplate={sectionTemplate}
//             setTemplates={setTemplates}
//             getTemplate={getTemplate}
//           />
//         </div>
//         <EditorPreviewContainer
//           templates={templates}
//           setTemplates={setTemplates}
//           getTemplate={getTemplate}
//           focusedSectionSlug={focusedSectionSlug}
//           setFocusedSectionSlug={setFocusedSectionSlug}
//           selectedSectionSlugs={selectedSectionSlugs}
//           setSelectedSectionSlugs={setSelectedSectionSlugs}
//         />
//       </div>
//     </div>
//   );
// }

// export const getStaticProps = async ({ locale }) => {
//   const sectionTemplate = sectionTemplates;
//   const i18n = await serverSideTranslations(locale, ["editor"]);
//   return {
//     props: {
//       sectionTemplate,
//       ...i18n,
//     },
//   };
// };







import { DownloadModal } from "@/components/DownloadModal";
import EditorPreviewContainer from "@/components/EditorPreviewContainer";
import { Nav } from "@/components/Nav";
import { SectionsColumn } from "@/components/SectionsColumn";
import { sectionTemplates } from "@/data/section-templates";
import useLocalStorage from "@/hooks/useLocalStorage";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import { useEffect, useState } from "react";

export default function Editor({ sectionTemplate }) {
  const { t } = useTranslation("editor");
  const [markdown, setMarkdown] = useState("");
  const [selectedSectionSlugs, setSelectedSectionSlugs] = useState([]);
  const [sectionSlugs, setSectionSlugs] = useState(
    sectionTemplates.map((t) => t.slug)
  );
  const [focusedSectionSlug, setFocusedSectionSlug] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [templates, setTemplates] = useState(sectionTemplates);
  const [showDrawer, toggleDrawer] = useState(false);
  const { backup } = useLocalStorage();

  useEffect(() => {
    if (backup) {
      setTemplates(backup);
    }
  }, [backup]);

  const getTemplate = (slug) => {
    return templates.find((t) => t.slug === slug);
  };

  useEffect(() => {
    setFocusedSectionSlug(null);
  }, []);

  useEffect(() => {
    let currentSlugList = localStorage.getItem("current-slug-list");
    if (
      currentSlugList &&
      currentSlugList.indexOf("title-and-description") === -1 &&
      selectedSectionSlugs.indexOf("title-and-description") > -1
    ) {
      selectedSectionSlugs.splice(
        selectedSectionSlugs.indexOf("title-and-description"),
        1
      );
    }
    setFocusedSectionSlug(
      currentSlugList?.split(",")[0] || null
    );
    localStorage.setItem("current-slug-list", selectedSectionSlugs);
  }, [selectedSectionSlugs]);

  // const drawerClass = showDrawer ? "" : "-translate-x-full md:transform-none";
const drawerClass = showDrawer ? "" : "md:translate-x-0 -translate-x-full";

  return (
    <div className="w-full h-screen flex flex-col">
      <Head>
        <title>Editor</title>
      </Head>

      {/* Top Navigation */}
      <Nav
        selectedSectionSlugs={selectedSectionSlugs}
        setShowModal={setShowModal}
        getTemplate={getTemplate}
        onMenuClick={() => toggleDrawer(!showDrawer)}
        isDrawerOpen={showDrawer}
      />

      {showModal && <DownloadModal setShowModal={setShowModal} />}

      {/* Main 3-column layout */}
      <div className="flex flex-1 overflow-hidden">
        {/* LEFT: Sections Drawer */}
       <div
  className={`w-[20%] min-w-[240px] max-w-[300px] absolute md:static bg-white z-10 md:z-0 shadow transform transition-transform duration-300 ease-in-out ${drawerClass}`}
>
          <div className="h-full p-4 overflow-y-auto">
            <SectionsColumn
              selectedSectionSlugs={selectedSectionSlugs}
              setSelectedSectionSlugs={setSelectedSectionSlugs}
              sectionSlugs={sectionSlugs}
              setSectionSlugs={setSectionSlugs}
              setFocusedSectionSlug={setFocusedSectionSlug}
              focusesSectionSlug={focusedSectionSlug}
              templates={templates}
              originalTemplate={sectionTemplate}
              setTemplates={setTemplates}
              getTemplate={getTemplate}
            />
          </div>
        </div>

        {/* CENTER + RIGHT: Editor and Preview */}
        <div className="flex-1 h-full overflow-hidden">
          <EditorPreviewContainer
            templates={templates}
            setTemplates={setTemplates}
            getTemplate={getTemplate}
            focusedSectionSlug={focusedSectionSlug}
            setFocusedSectionSlug={setFocusedSectionSlug}
            selectedSectionSlugs={selectedSectionSlugs}
            setSelectedSectionSlugs={setSelectedSectionSlugs}
          />
        </div>
      </div>
    </div>
  );
}

export const getStaticProps = async ({ locale }) => {
  const sectionTemplate = sectionTemplates;
  const i18n = await serverSideTranslations(locale, ["editor"]);
  return {
    props: {
      sectionTemplate,
      ...i18n,
    },
  };
};

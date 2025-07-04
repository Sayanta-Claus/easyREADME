import "@/styles/globals.css";
import { appWithTranslation } from "next-i18next";
import NextNProgress from "nextjs-progressbar";
import colors from 'tailwindcss/colors';

const App = ({ Component, pageProps }) => {
  return (
    <>
      <NextNProgress color={colors.green[500]} height={4} />
      <Component {...pageProps} />;
    </>
  );
};

export default appWithTranslation(App);
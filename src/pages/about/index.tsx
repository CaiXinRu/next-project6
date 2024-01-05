import { useTranslation } from "next-i18next";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function About() {
  const { t } = useTranslation("about");

  return (
    <main>
      <h1>{t("WHAT_UP")}</h1>
    </main>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const translationsProps = await serverSideTranslations(locale ?? "en", [
    "common",
    "about",
  ]);

  return {
    props: {
      ...translationsProps,
    },
  };
};

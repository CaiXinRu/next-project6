import { useTranslation } from "next-i18next";
import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Home() {
  const { t } = useTranslation();
  const router = useRouter();

  const changeLanguage = (locale: any) => {
    router.push(router.pathname, router.asPath, { locale });
  };

  return (
    <main>
      <h1>{t("HELLO_WORLD")}</h1>
      <h1>{t("WELCOME_MESSAGE")}</h1>

      <div className="btn">
        <button onClick={() => changeLanguage("en")}>En</button>
        <button onClick={() => changeLanguage("zh")}>Zh</button>
      </div>
    </main>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const translationsProps = await serverSideTranslations(locale ?? "en", [
    "common",
  ]);

  return {
    props: {
      ...translationsProps,
    },
  };
};

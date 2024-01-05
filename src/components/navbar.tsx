import { useRouter } from "next/router";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const router = useRouter();

  const changeLanguage = (locale: any) => {
    router.push(router.pathname, router.asPath, { locale });
  };
  return (
    <>
      <div>
        <Button onClick={() => changeLanguage("en")}>En</Button>
        <Button onClick={() => changeLanguage("zh")}>Zh</Button>
      </div>
      <div>
        <Button onClick={() => router.push("/about")}>to about</Button>
      </div>
      <div>
        <Button onClick={() => router.push("/")}>go back</Button>
      </div>
    </>
  );
}

import ActionsButtons from "@/components/ActionsButtons";
import Bio from "@/components/Bio";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SocialLink from "@/components/SocialLinks";

export default function Home() {
  return (
    <>
      <Header />
      <main className="px-4">
        <Bio />
        <SocialLink />
        <ActionsButtons />
      </main>
      <Footer />x
    </>
  );
}

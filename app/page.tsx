import Nav from "@/src/components/ui/Nav";
import {
  Hero,
  Statement,
  Problem,
  Solution,
  Services,
  Authority,
  SocialProof,
  Partnership,
  BusinessModel,
  FinalCTA,
  Footer,
  WhatsappFloating,
} from "@/src/components/sections";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Statement />
      <Problem />
      <Solution />
      <Services />
      <Authority />
      <SocialProof />
      <Partnership />
      <BusinessModel />
      <FinalCTA />
      <Footer />
      <WhatsappFloating />
    </main>
  );
}

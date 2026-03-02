import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import HowItWorks from "@/components/HowItWorks";
import Advantages from "@/components/Advantages";
import SecuritySection from "@/components/SecuritySection";
import FooterCTA from "@/components/FooterCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>JetJoin — Платформа авиа-доставки | Зарабатывай на перелётах</title>
        <meta
          name="description"
          content="JetJoin соединяет путешественников и отправителей для быстрой доставки посылок авиарейсами. Зарабатывайте до $300 за рейс. Доставка за 3–12 часов в любую точку мира."
        />
        <meta name="keywords" content="авиадоставка, доставка посылок, попутная доставка, заработок на перелётах, JetJoin" />
        <link rel="canonical" href="https://jetjoin.com" />

        <meta property="og:title" content="JetJoin — Платформа авиа-доставки" />
        <meta property="og:description" content="Зарабатывай на каждом перелёте. Отправляй быстрее, чем курьерские службы." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://jetjoin.com" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="JetJoin — Платформа авиа-доставки" />
        <meta name="twitter:description" content="Доставка посылок авиарейсами за 3–12 часов" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "JetJoin",
            url: "https://jetjoin.com",
            description: "Платформа авиа-доставки, соединяющая путешественников и отправителей",
            sameAs: [],
          })}
        </script>
      </Helmet>

      <Navbar />
      <main>
        <HeroSection />
        <StatsSection />
        {/* <HowItWorks />
        <Advantages />
        <SecuritySection />
        <FooterCTA /> */}
        <Footer />
      </main>
    </>
  );
};

export default Index;

import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Contexte } from "@/components/site/Contexte";
import { Matrix } from "@/components/site/Matrix";
import { DecisionTree } from "@/components/site/DecisionTree";
import { Kpis } from "@/components/site/Kpis";
import { Diagnostic } from "@/components/site/Diagnostic";
import { Checklist } from "@/components/site/Checklist";
import { Sources } from "@/components/site/Sources";
import { About } from "@/components/site/About";
import { Footer } from "@/components/site/Footer";
import { PrintGuide } from "@/components/site/PrintGuide";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "IA × Content Marketing — La Boîte à Outils du Marketeur" },
      {
        name: "description",
        content:
          "Framework décisionnel pour arbitrer entre IA et expertise humaine en content marketing. Guide opérationnel issu d'une recherche doctorale.",
      },
      { property: "og:title", content: "IA × Content Marketing — La Boîte à Outils du Marketeur" },
      {
        property: "og:description",
        content:
          "Matrice, arbre décisionnel, KPIs, auto-diagnostic et checklist pour piloter l'IA dans votre stratégie de contenu.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

function Index() {
  useReveal();
  return (
    <div className="min-h-screen bg-paper text-ink">
      <Nav />
      <main className="screen-only">
        <Hero />
        <Contexte />
        <Matrix />
        <DecisionTree />
        <Kpis />
        <Diagnostic />
        <Checklist />
        <Sources />
        <About />
      </main>
      <div className="screen-only"><Footer /></div>
      <PrintGuide />
    </div>
  );
}

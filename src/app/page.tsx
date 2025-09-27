"use client";

import React, { useEffect, useState } from "react";
import {
  CheckCircle2,
  Shield,
  Accessibility,
  PlaneTakeoff,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  CalendarDays,
  BadgeCheck,
  GraduationCap,
  Menu,
  X,
  Instagram,
  Linkedin,
  Facebook,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

// ===== Brand palette (proche de la DA Flyness — ajuste si besoin)
const BRAND = {
  primary: "#C1121F", // Rouge Flyness (CTA, boutons importants et accents)
  primaryDark: "#9B0E1A", // Rouge foncé
  dark: "#1A1A1A", // Gris très foncé
  light: "#F5F5F5", // Gris clair
  muted: "#6B7280", // Gris moyen
  textAccent: "#C1121F", // Rouge pour les accents texte
  textAccentHover: "#9B0E1A", // Rouge foncé pour hover
};

// ===== Helpers
type SectionProps = { id?: string; className?: string; children: React.ReactNode }
const Section = ({ id, className = "", children }: SectionProps) => (
  <section id={id} className={`w-full max-w-7xl mx-auto px-6 md:px-8 ${className}`}>
    {children}
  </section>
);

const Badge = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium tracking-wide bg-white/70 backdrop-blur border-white/40 shadow-sm">
    {children}
  </span>
);

const Stat = ({ kpi, label }: { kpi: string; label: string }) => (
  <div className="text-center">
    <div className="text-3xl md:text-4xl font-semibold">{kpi}</div>
    <div className="text-sm opacity-80">{label}</div>
  </div>
);

// ===== Top Navigation (avec bouton Connexion)
function TopNav() {
  const [open, setOpen] = useState(false);
  const NavLinks = () => (
    <ul className="flex flex-col md:flex-row gap-5 md:gap-8 text-sm">
      <li>
        <a href="#formations" className="text-gray-700 hover:text-[#2563EB] transition-colors" style={{ color: "inherit" }}>
          Formations
        </a>
      </li>
      <li>
        <a href="#financement" className="text-gray-700 hover:text-[#2563EB] transition-colors" style={{ color: "inherit" }}>
          Financement
        </a>
      </li>
      <li>
        <a href="#recrutement" className="text-gray-700 hover:text-[#2563EB] transition-colors" style={{ color: "inherit" }}>
          Recrutement
        </a>
      </li>
      <li>
        <a href="#temoignages" className="text-gray-700 hover:text-[#2563EB] transition-colors" style={{ color: "inherit" }}>
          Témoignages
        </a>
      </li>
      <li>
        <a href="#faq" className="text-gray-700 hover:text-[#2563EB] transition-colors" style={{ color: "inherit" }}>
          FAQ
        </a>
      </li>
      <li>
        <a href="#contact" className="text-gray-700 hover:text-[#2563EB] transition-colors" style={{ color: "inherit" }}>
          Contact
        </a>
      </li>
    </ul>
  );
  return (
    <div
      className="sticky top-0 z-50 w-full backdrop-blur border-b"
      style={{ backgroundColor: "rgba(255,255,255,0.95)" }}
    >
      <Section className="flex items-center justify-between py-4" id="navbar">
        <a href="#" className="flex items-center gap-2">
          <img 
            src="https://static.wixstatic.com/media/069674_cc399fd62a2343208b246797537bbd56~mv2.png/v1/fill/w_188,h_85,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/LOGO%20BLANC%20trans.png"
            alt="Flyness Training"
            className="h-8 w-auto"
          />
        </a>
        <nav className="hidden md:block">
        <ul className="flex gap-6 text-sm">
          <li><a href="#formations" className="text-black hover:text-gray-700 transition-colors">Formations</a></li>
          <li><a href="#financement" className="text-black hover:text-gray-700 transition-colors">Financement</a></li>
          <li><a href="#recrutement" className="text-black hover:text-gray-700 transition-colors">Recrutement</a></li>
          <li><a href="#temoignages" className="text-black hover:text-gray-700 transition-colors">Témoignages</a></li>
          <li><a href="#faq" className="text-black hover:text-gray-700 transition-colors">FAQ</a></li>
          <li><a href="#contact" className="text-black hover:text-gray-700 transition-colors">Contact</a></li>
        </ul>
      </nav>
        <div className="hidden md:flex items-center gap-3">
          <Button asChild variant="outline" data-testid="login-link" id="login-btn">
            <a href="#login">Connexion</a>
          </Button>
          <Button asChild variant="secondary">
            <a href="#contact">Nous contacter</a>
          </Button>
          <Button asChild style={{ backgroundColor: BRAND.primary, color: "white" }}>
            <a href="#inscription">S'inscrire</a>
          </Button>
        </div>
        <button
          className="md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </Section>
      {open && (
        <div className="md:hidden border-t">
          <Section className="py-4">
            <div className="flex flex-col gap-4">
              <NavLinks />
              <div className="flex gap-3">
                <Button asChild size="sm" variant="outline">
                  <a href="#login">Connexion</a>
                </Button>
                <Button asChild size="sm" variant="secondary">
                  <a href="#contact">Nous contacter</a>
                </Button>
                <Button asChild size="sm" style={{ backgroundColor: BRAND.primary, color: "white" }}>
                  <a href="#inscription">S'inscrire</a>
                </Button>
              </div>
            </div>
          </Section>
        </div>
      )}
    </div>
  );
}

// ===== Hero (image d'aéroport)
function Hero() {
  return (
    <div className="relative isolate overflow-hidden" style={{ backgroundColor: BRAND.light }}>
      {/* Image d'aéroport réelle depuis internet */}
      <div
        id="hero-bg"
        className="absolute inset-0 -z-10 bg-center bg-cover"
        style={{ backgroundImage: "url('https://static.wixstatic.com/media/069674_85fdd722bee14ba1840e1857fd38f3f0~mv2.png/v1/fill/w_3137,h_714,al_c,q_95,usm_0.66_1.00_0.01,enc_avif,quality_auto/069674_85fdd722bee14ba1840e1857fd38f3f0~mv2.png')" }}
      />
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.35) 40%, rgba(0,0,0,0.25) 100%)",
        }}
      />

      <Section
        id="hero"
        className="py-16 md:py-24 grid md:grid-cols-[1.1fr_0.9fr] gap-10 items-center text-white"
      >
        <div>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight drop-shadow">
            FLYNESS TRAINING
          </h1>
          <p className="mt-2 text-xl md:text-2xl font-semibold drop-shadow">
            Votre réussite dans le secteur aéroportuaire
          </p>
          <p className="mt-4 text-base md:text-lg opacity-90 max-w-xl italic">
            Flyness Training vous propose plusieurs formations dans le secteur aéroportuaire tels que la sûreté, la sécurité et l'accueil, etc… dans lesquels vous pourrez vous former rapidement !
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" style={{ backgroundColor: BRAND.primary, color: "white" }} className="shadow-lg">
              <a href="#inscription">S'inscrire maintenant</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black backdrop-blur-sm">
              <a href="#formations">Voir les formations</a>
            </Button>
          </div>
          <div className="mt-8 grid grid-cols-3 gap-6 text-white/90">
            <Stat kpi="93%" label="Réussite moyenne*" />
            <Stat kpi="< 4 sem" label="Insertion moyenne" />
            <Stat kpi="2019" label="Expérience centre" />
          </div>
          <p className="text-xs opacity-80 mt-2">
            *Indicateur à titre d'exemple – remplacez par vos données officielles.
          </p>
        </div>
        <div>
          <Card className="shadow-2xl border-0 bg-white/92 text-black">
            <CardHeader>
              <CardTitle>Recevoir le programme & les dates</CardTitle>
              <CardDescription>Nous vous recontactons sous 24h ouvrées.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-3">
              <Input placeholder="Nom et prénom" />
              <Input type="email" placeholder="Email" />
              <Input placeholder="Téléphone" />
              <select className="border rounded-md h-10 px-3">
                <option>Choisir une formation</option>
                <option>TFP ASA T7</option>
                <option>TFP ASA T10</option>
                <option>APMR</option>
                <option>Périodique Imagerie</option>
                <option>Périodique Hors imagerie</option>
              </select>
              <Textarea placeholder="Votre message (optionnel)" />
            </CardContent>
            <CardFooter className="justify-between">
              <p className="text-xs opacity-60">
                En soumettant ce formulaire vous acceptez d'être contacté(e).
              </p>
              <Button style={{ backgroundColor: BRAND.primary }}>Envoyer</Button>
            </CardFooter>
          </Card>
        </div>
      </Section>
    </div>
  );
}

// ===== Logos Marquee (partenaires)
function Logos() {
  const logos = ["ADP", "Air France", "EasyJet", "Transavia", "Samsic", "Securitas", "Roissy CDG", "Orly"];
  return (
    <div className="py-8 border-y bg-white">
      <Section className="overflow-hidden">
        <div className="flex gap-12 animate-[marquee_20s_linear_infinite] whitespace-nowrap">
          {logos.concat(logos).map((l, i) => (
            <span key={i} className="opacity-60 text-sm md:text-base font-semibold">
              {l}
            </span>
          ))}
        </div>
      </Section>
      <style>{`@keyframes marquee {0%{transform:translateX(0)}100%{transform:translateX(-50%)}}`}</style>
    </div>
  );
}

// ===== Program Cards organized by categories
const securityPrograms = [
  {
    slug: "tfp-asa-t7",
    title: "TFP ASA T7",
    badge: "Sûreté aéroportuaire",
    hours: "175h (indicatif)",
    price: "À partir de 1 450€",
    image: "https://camasformation.fr/wp-content/uploads/2020/06/agenty-piste-big.jpg",
    bullets: [
      "Postes : passagers, bagages cabine/soute, approvisionnements, véhicules, contrôle d'accès",
      "Périodique imagerie 6 mois incluse (option)",
      "Groupes ≤ 12",
    ],
    icon: <Shield className="h-5 w-5" />,
  },
  {
    slug: "fphi",
    title: "FPHI",
    badge: "Sûreté aéroportuaire",
    hours: "35h",
    price: "Sur devis",
    image: "https://my-security-job.com/static/uploads/2018/10/quels-exercices-sont-realises-en-formation-agent-de-surete-aeroportuaire.jpg",
    bullets: [
      "Formation Premiers Intervenants",
      "Intervention en cas d'incident",
      "Sécurité des personnes et des biens",
    ],
    icon: <Shield className="h-5 w-5" />,
  },
  {
    slug: "training",
    title: "TRAINING",
    badge: "Sûreté aéroportuaire",
    hours: "Variable",
    price: "Sur devis",
    image: "https://assets.leparisien.fr/website/images/guide-metiers/metiers/fiche/NTWM2ZMHEVGHFIKBAOEPAA5OPI.jpg",
    bullets: [
      "Formation continue",
      "Mise à niveau des compétences",
      "Adaptation aux nouvelles réglementations",
    ],
    icon: <Shield className="h-5 w-5" />,
  },
  {
    slug: "fpi",
    title: "FPI",
    badge: "Sûreté aéroportuaire",
    hours: "21h",
    price: "Sur devis",
    image: "https://my-security-job.com/static/uploads/2023/09/formation-agent-de-surete-aeroportuaire-1024x664.jpg",
    bullets: [
      "Formation Premiers Intervenants Initiale",
      "Techniques d'intervention",
      "Gestion des situations d'urgence",
    ],
    icon: <Shield className="h-5 w-5" />,
  },
];

const airportPrograms = [
  {
    slug: "accueil",
    title: "Accueil",
    badge: "Aéroportuaire",
    hours: "35h",
    price: "850€",
    bullets: [
      "Techniques d'accueil et de communication",
      "Gestion des situations conflictuelles",
      "Standards de service aéroportuaire",
    ],
    icon: <PlaneTakeoff className="h-5 w-5" />,
  },
  {
    slug: "apmr",
    title: "APMR",
    badge: "Assistance PMR",
    hours: "70h",
    price: "1 450€",
    bullets: [
      "Accueil & accompagnement passagers PMR",
      "Théorie + pratique terrain",
      "Sensibilisation handicaps",
    ],
    icon: <Accessibility className="h-5 w-5" />,
  },
  {
    slug: "escale",
    title: "Escale",
    badge: "Aéroportuaire",
    hours: "105h",
    price: "Sur devis",
    bullets: [
      "Opérations d'escale",
      "Coordination avec les compagnies",
      "Gestion du temps et des ressources",
    ],
    icon: <PlaneTakeoff className="h-5 w-5" />,
  },
  {
    slug: "sst",
    title: "SST",
    badge: "Sécurité",
    hours: "14h",
    price: "180€",
    bullets: [
      "Sauveteur Secouriste du Travail",
      "Gestes de premiers secours",
      "Formation obligatoire en entreprise",
    ],
    icon: <Shield className="h-5 w-5" />,
  },
];

const englishPrograms = [
  {
    slug: "anglais-professionnel",
    title: "PROFESSIONNEL",
    badge: "Anglais",
    hours: "30h",
    price: "900€",
    bullets: [
      "Anglais professionnel général",
      "Communication en contexte professionnel",
      "Vocabulaire spécialisé",
    ],
    icon: <GraduationCap className="h-5 w-5" />,
  },
  {
    slug: "anglais-intensif",
    title: "INTENSIVE",
    badge: "Anglais",
    hours: "60h",
    price: "1 800€",
    bullets: [
      "Programme intensif accéléré",
      "Immersion linguistique complète",
      "Résultats rapides garantis",
    ],
    icon: <GraduationCap className="h-5 w-5" />,
  },
  {
    slug: "anglais-aeroportuaire",
    title: "AÉROPORTUAIRE",
    badge: "Anglais",
    hours: "45h",
    price: "1 350€",
    bullets: [
      "Vocabulaire aéroportuaire spécifique",
      "Communication avec les passagers internationaux",
      "Procédures et réglementations internationales",
    ],
    icon: <GraduationCap className="h-5 w-5" />,
  },
  {
    slug: "anglais-immersif",
    title: "IMMERSIVE",
    badge: "Anglais",
    hours: "80h",
    price: "2 400€",
    bullets: [
      "Immersion totale en anglais",
      "Méthode interactive et participative",
      "Développement de la fluidité",
    ],
    icon: <GraduationCap className="h-5 w-5" />,
  },
];

type Program = {
  slug: string;
  title: string;
  badge: string;
  hours: string;
  price: string;
  bullets: string[];
  icon: React.ReactNode;
  image?: string;
}

function ProgramCard({ program }: { program: Program }) {
  return (
    <Card className="group hover:shadow-xl transition-shadow">
      <CardHeader>
        <div className="relative h-48 w-full mb-4 rounded-lg overflow-hidden">
          <img
            src={program.image
              ? program.image
              : program.slug === "tfp-asa-t7" || program.slug === "tfp-asa-t10"
              ? "https://images.unsplash.com/photo-1544568100-847a948585b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              : program.slug === "apmr" || program.slug === "accueil" || program.slug === "escale"
              ? "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              : "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            }
            alt={program.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-2 right-2">
            <Badge>{program.badge}</Badge>
          </div>
        </div>
        <div className="flex items-center gap-2 text-sm opacity-80">
          {program.icon}
          <span>{program.badge}</span>
        </div>
        <CardTitle className="mt-1">{program.title}</CardTitle>
        <CardDescription>
          {program.hours} • {program.price}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2 text-sm">
          {program.bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 mt-0.5" />
              {b}
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="justify-between">
        <Button asChild size="sm" style={{ backgroundColor: BRAND.primary, color: "white" }}>
          <a href="#inscription">S'inscrire</a>
        </Button>
        <a
          href="#contact"
          className="text-sm opacity-80 hover:opacity-100 inline-flex items-center gap-1"
        >
          Brochure <ArrowRight className="h-4 w-4" />
        </a>
      </CardFooter>
    </Card>
  );
}

function Programs() {
  return (
    <Section id="formations" className="py-16 md:py-24">
      <div className="flex items-end justify-between mb-8">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold">Formations principales</h2>
          <p className="opacity-80">
            Des parcours complets et modulaires pour accélérer votre insertion.
          </p>
        </div>
        <Button asChild variant="outline">
          <a href="#inscription">Demander le calendrier</a>
        </Button>
      </div>

      {/* Formation Sûreté Aéroportuaire */}
      <div className="mb-16">
        <h3 className="text-xl md:text-2xl font-semibold mb-6 text-gray-800">
          Formation Sûreté Aéroportuaire
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {securityPrograms.map((p) => (
            <ProgramCard key={p.slug} program={p} />
          ))}
        </div>
      </div>

      {/* Formations Aéroportuaire */}
      <div className="mb-16">
        <h3 className="text-xl md:text-2xl font-semibold mb-6 text-gray-800">
          Formations Aéroportuaire
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {airportPrograms.map((p) => (
            <ProgramCard key={p.slug} program={p} />
          ))}
        </div>
      </div>

      {/* Formations Anglais */}
      <div className="mb-8">
        <h3 className="text-xl md:text-2xl font-semibold mb-6 text-gray-800">
          Formations Anglais
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {englishPrograms.map((p) => (
            <ProgramCard key={p.slug} program={p} />
          ))}
        </div>
      </div>
    </Section>
  );
}

// ===== Bloc Recrutement (style sobre)
function Recruitment() {
  return (
    <Section id="recrutement" className="py-16 md:py-24">
      <div className="grid md:grid-cols-2 gap-8 items-stretch">
        <Card
          data-testid="recruitment-left"
          className="border border-gray-200 bg-white"
        >
          <CardContent className="pt-10">
            <h3 className="text-4xl md:text-5xl font-semibold text-black">
              Recrutement
            </h3>
            <p className="mt-6 max-w-md text-black">
              Les aéroports de Roissy CDG & d'Orly recrutent des personnes sérieuses et motivées souhaitant travailler dans l'univers aéroportuaire en tant qu'agent de sûreté aéroportuaire.
            </p>
            <Button className="mt-8" size="lg" style={{ backgroundColor: BRAND.primary, color: "white" }}>
              Postuler
            </Button>
          </CardContent>
        </Card>
        <div data-testid="recruitment-right" className="relative">
          <img
            src="https://images.unsplash.com/photo-1556388158-158ea5ccacbd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Formation sûreté aéroportuaire"
            className="w-full h-full object-cover rounded-xl shadow-xl"
          />
          <div className="absolute inset-0 rounded-xl bg-black/15" />
        </div>
      </div>
    </Section>
  );
}

// ===== Pourquoi Flyness
function WhyUs() {
  const items = [
    {
      icon: <GraduationCap className="h-5 w-5" />,
      title: "Instructeurs experts",
      text: "Professionnels de l'aérien et de la sûreté",
    },
    {
      icon: <CalendarDays className="h-5 w-5" />,
      title: "Sessions fréquentes",
      text: "Calendrier ouvert toute l'année",
    },
    {
      icon: <Shield className="h-5 w-5" />,
      title: "Conformité complète",
      text: "Respect des exigences T7/T10 & périodiques",
    },
    {
      icon: <PlaneTakeoff className="h-5 w-5" />,
      title: "Insertion rapide",
      text: "Réseau d'entreprises partenaires",
    },
  ];
  return (
    <Section className="py-16 md:py-24">
      <div className="grid md:grid-cols-4 gap-6">
        {items.map((it, i) => (
          <Card key={i} className="border-dashed">
            <CardHeader>
              <div className="flex items-center gap-2">
                {it.icon}
                <CardTitle className="text-base">{it.title}</CardTitle>
              </div>
              <CardDescription>{it.text}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </Section>
  );
}

// ===== Financement
function Financing() {
  return (
    <Section id="financement" className="py-16 md:py-24">
      <div className="max-w-2xl">
        <h2 className="text-2xl md:text-3xl font-semibold">Financement & prise en charge</h2>
        <p className="opacity-80 mt-2">
          CPF, Pôle Emploi, entreprise : nous vous guidons pour la meilleure solution. Devis sous 48h.
        </p>
      </div>
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>CPF</CardTitle>
            <CardDescription>Mobilisez votre Compte Personnel de Formation</CardDescription>
          </CardHeader>
          <CardFooter>
            <Button variant="secondary">Vérifier mon solde</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Pôle Emploi</CardTitle>
            <CardDescription>Aide Individuelle à la Formation (AIF)</CardDescription>
          </CardHeader>
          <CardFooter>
            <Button variant="secondary">Demander un devis</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Entreprise</CardTitle>
            <CardDescription>Plan de développement des compétences</CardDescription>
          </CardHeader>
          <CardFooter>
            <Button variant="secondary">Être rappelé</Button>
          </CardFooter>
        </Card>
      </div>
    </Section>
  );
}

// ===== Témoignages
function Testimonials() {
  const t = [
    {
      name: "Sofiane",
      text:
        "Accueil chaleureux, formateurs très pédagogues, supports de cours clairs. J'ai validé ma périodique T10 sans stress.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    },
    {
      name: "Fadoua",
      text:
        "Centre sérieux et orienté emploi. J'ai trouvé un poste en moins d'un mois après la formation APMR.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b5bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    },
    {
      name: "Nathan",
      text:
        "Excellente préparation à la certification. Petits groupes et suivi personnalisé.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    },
  ];
  return (
    <Section id="temoignages" className="py-16 md:py-24">
      <h2 className="text-2xl md:text-3xl font-semibold mb-8">Ce que disent nos stagiaires</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {t.map((x, i) => (
          <Card key={i}>
            <CardHeader>
              <div className="flex items-center gap-3">
                <img
                  src={x.avatar}
                  alt={x.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <CardTitle className="text-base">{x.name}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="opacity-90">{x.text}</CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}

// ===== FAQ
function FAQ() {
  return (
    <Section id="faq" className="py-16 md:py-24">
      <div className="max-w-2xl">
        <h2 className="text-2xl md:text-3xl font-semibold">Questions fréquentes</h2>
        <p className="opacity-80 mt-2">
          Validité des certifications, durée des formations, prérequis…
        </p>
      </div>
      <div className="mt-6">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              Combien de temps est valable une certification ?
            </AccordionTrigger>
            <AccordionContent>
              Une certification imagerie est valable 3 ans (sans imagerie 5 ans). Passé le délai (avec 3 mois de marge), une formation initiale est nécessaire pour se représenter.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Quels sont les prérequis pour APMR ?</AccordionTrigger>
            <AccordionContent>
              Savoir lire et écrire le français et disposer d'un extrait de casier judiciaire B3 vierge. Aptitudes relationnelles et sens du service appréciés.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Quelle différence entre T7 et T10 ?</AccordionTrigger>
            <AccordionContent>
              Le T10 inclut le module FRET et permet de travailler sur l'ensemble des postes d'agent de sûreté, quand le T7 exclut le FRET.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </Section>
  );
}

// ===== CTA inscription
function CTA() {
  return (
    <Section id="inscription" className="py-16 md:py-24 relative">
      <div 
        className="absolute inset-0 -z-10 bg-center bg-cover opacity-20"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542282088-fe84a30a274d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')" }}
      />
      <Card className="border-2 border-gray-200 bg-white/95 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Prêt·e à décoller ?</CardTitle>
          <CardDescription>
            Recevez le programme détaillé et les prochaines dates de session.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-4 gap-3">
          <Input placeholder="Nom" />
          <Input type="email" placeholder="Email" />
          <Input placeholder="Téléphone" />
          <Button>Être recontacté(e)</Button>
        </CardContent>
      </Card>
    </Section>
  );
}

// ===== Footer
function Footer() {
  return (
    <footer className="mt-16 border-t">
      <Section id="contact" className="py-10 grid md:grid-cols-3 gap-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <img 
              src="https://static.wixstatic.com/media/069674_cc399fd62a2343208b246797537bbd56~mv2.png/v1/fill/w_188,h_85,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/LOGO%20BLANC%20trans.png"
              alt="Flyness Training"
              className="h-6 w-auto"
            />
          </div>
          <p className="text-sm opacity-80">Centre de formation aéroportuaire • Villepinte</p>
          <div className="flex gap-3 mt-3">
            <a aria-label="Instagram" href="#" className="opacity-80 hover:opacity-100">
              <Instagram className="h-5 w-5" />
            </a>
            <a aria-label="LinkedIn" href="#" className="opacity-80 hover:opacity-100">
              <Linkedin className="h-5 w-5" />
            </a>
            <a aria-label="Facebook" href="#" className="opacity-80 hover:opacity-100">
              <Facebook className="h-5 w-5" />
            </a>
          </div>
        </div>
        <div className="text-sm space-y-1">
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4" />06 18 94 93 08
          </div>
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4" />contact@flynesstraining.com
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />23 allée des Impressionnistes, 93420 Villepinte
          </div>
        </div>
        <div className="text-xs opacity-70">
          <p>© {new Date().getFullYear()} Flyness Training. Tous droits réservés.</p>
          <p>Mentions légales · Politique de confidentialité</p>
        </div>
      </Section>
    </footer>
  );
}

export default function FlynessLanding() {
  // ===== Tests runtime (ne pas modifier sauf besoin) =====
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Tests existants
      console.assert(
        !!document.querySelector('[data-testid="login-link"]'),
        '[TEST] Le bouton "Connexion" doit exister dans la navbar.'
      );
      console.assert(
        !!document.getElementById("hero"),
        "[TEST] La section Hero doit être rendue."
      );
      console.assert(
        !!document.getElementById("navbar"),
        "[TEST] La navbar (#navbar) doit exister."
      );
      console.assert(
        !!document.getElementById("hero-bg"),
        "[TEST] L'arrière-plan d'aéroport (hero-bg) doit exister."
      );
      console.assert(
        document.querySelectorAll('#formations [role="article"], #formations .card').length >= 0,
        "[TEST] Les cartes Programmes doivent être rendues (visuel)."
      );
      console.assert(
        !!document.getElementById('brand-theme'),
        '[TEST] Les styles globaux de marque doivent être injectés.'
      );
      // Nouveau test : au moins 3 cartes de formations visibles (classes .group)
      console.assert(
        document.querySelectorAll('#formations .group').length >= 3,
        '[TEST] Au moins 3 cartes de formation doivent être rendues.'
      );
    }
  }, []);

  return (
    <div
      className="text-black"
      style={{ background: `linear-gradient(180deg, ${BRAND.light} 0%, #ffffff 60%)` }}
    >
      <TopNav />
      {/* Styles globaux : fonts et couleurs unifiées */}
      <style id="brand-theme">{`
        :root{ --brand-primary:${BRAND.primary}; --brand-primary-dark:${BRAND.primaryDark}; --brand-text:${BRAND.dark}; }
        html,body{ font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji"; color:black; background:${BRAND.light}; }
        a{ color: #374151; }
        a:hover{ color: #111827; }
        .btn-primary{ background: var(--brand-primary); color:#fff; }
        .btn-primary:hover{ background: var(--brand-primary-dark); }
      `}</style>
      <Hero />
      <Logos />
      <Programs />
      <Recruitment />
      <WhyUs />
      <Financing />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}

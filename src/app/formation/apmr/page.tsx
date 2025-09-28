"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Clock,
  Euro,
  Users,
  CheckCircle2,
  Download,
  Calendar,
  MapPin,
  Phone,
  Mail,
  GraduationCap,
  Shield,
  Accessibility,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const BRAND = {
  primary: "#C1121F",
  primaryDark: "#9B0E1A",
  dark: "#1A1A1A",
  light: "#F5F5F5",
  muted: "#6B7280",
};

type SectionProps = {
  id?: string;
  className?: string;
  children: React.ReactNode;
};

const Section = ({ id, className = "", children }: SectionProps) => (
  <section
    id={id}
    className={`w-full max-w-7xl mx-auto px-6 md:px-8 ${className}`}
  >
    {children}
  </section>
);

const Badge = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium tracking-wide bg-white/70 backdrop-blur border-white/40 shadow-sm">
    {children}
  </span>
);

export default function APMRBrochure() {
  const programModules = [
    {
      title: "Théorie et pratique APMR",
      duration: "35h",
      content: [
        "Accueil et accompagnement des personnes à mobilité réduite",
        "Techniques de manutention et d'assistance",
        "Utilisation des équipements d'assistance (fauteuils roulants, etc.)",
        "Communication adaptée selon les types de handicap",
        "Procédures d'embarquement et de débarquement",
      ],
    },
    {
      title: "Sûreté aéroportuaire",
      duration: "14h",
      content: [
        "Réglementation de la sûreté aéroportuaire",
        "Contrôle d'accès et vérification d'identité",
        "Procédures de sécurité en zone réservée",
        "Gestion des situations d'urgence",
      ],
    },
    {
      title: "Marchandises dangereuses",
      duration: "7h",
      content: [
        "Identification des marchandises dangereuses",
        "Procédures de manipulation et de transport",
        "Réglementation IATA/ICAO",
        "Mesures de sécurité et d'urgence",
      ],
    },
    {
      title: "Sécurité sur piste",
      duration: "7h",
      content: [
        "Règles de circulation en zone piste",
        "Signalisation et balisage aéroportuaire",
        "Procédures de sécurité FOD (Foreign Object Debris)",
        "Communication radio et phraséologie",
      ],
    },
    {
      title: "SST (Sauveteur Secouriste du Travail)",
      duration: "14h",
      content: [
        "Gestes de premiers secours",
        "Prévention des risques professionnels",
        "Utilisation du matériel de secours",
        "Conduite à tenir en cas d'accident",
      ],
    },
    {
      title: "Anglais aéroportuaire",
      duration: "7h",
      content: [
        "Vocabulaire technique aéroportuaire",
        "Communication avec les passagers internationaux",
        "Phrases types pour l'assistance PMR",
        "Compréhension des annonces en anglais",
      ],
    },
  ];

  const prerequisites = [
    "Savoir lire et écrire le français",
    "Casier judiciaire B3 vierge (moins de 3 mois)",
    "Aptitudes relationnelles et sens du service",
    "Capacité physique pour la manutention",
    "Motivation pour le secteur aéroportuaire",
  ];

  const objectives = [
    "Maîtriser l'accueil et l'accompagnement des personnes à mobilité réduite",
    "Connaître la réglementation de la sûreté aéroportuaire",
    "Savoir utiliser les équipements d'assistance PMR",
    "Communiquer efficacement avec tous types de passagers",
    "Appliquer les procédures de sécurité en environnement aéroportuaire",
  ];

  const careerOpportunities = [
    "Agent d'assistance PMR dans les aéroports",
    "Agent d'escale spécialisé PMR",
    "Accompagnateur de personnes handicapées",
    "Agent de sûreté aéroportuaire (avec formation complémentaire)",
    "Superviseur d'équipe PMR",
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header avec navigation */}
      <header className="bg-white border-b sticky top-0 z-50">
        <Section className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="https://static.wixstatic.com/media/069674_cc399fd62a2343208b246797537bbd56~mv2.png/v1/fill/w_188,h_85,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/LOGO%20BLANC%20trans.png"
              alt="Flyness Training"
              width={188}
              height={85}
              className="h-8 w-auto"
              priority
            />
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/#formations" className="text-gray-700 hover:text-gray-900">
              Formations
            </Link>
            <Link href="/#contact" className="text-gray-700 hover:text-gray-900">
              Contact
            </Link>
            <Button asChild variant="outline">
              <Link href="/inscription/apmr">S'inscrire</Link>
            </Button>
          </nav>
        </Section>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="absolute inset-0 bg-black/20" />
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
          }}
        />
        <Section className="relative py-16 md:py-24">
          <div className="max-w-4xl">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6"
            >
              <ArrowLeft className="h-4 w-4" />
              Retour aux formations
            </Link>
            <div className="flex items-center gap-2 mb-4">
              <Accessibility className="h-6 w-6" />
              <Badge>Assistance PMR</Badge>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Formation APMR
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Accompagnement aux Personnes à Mobilité Réduite
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5" />
                <div>
                  <div className="font-semibold">70 heures</div>
                  <div className="text-sm text-white/80">Durée totale</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Euro className="h-5 w-5" />
                <div>
                  <div className="font-semibold">1 450€</div>
                  <div className="text-sm text-white/80">Tarif formation</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Users className="h-5 w-5" />
                <div>
                  <div className="font-semibold">12 stagiaires max</div>
                  <div className="text-sm text-white/80">Effectif réduit</div>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                style={{ backgroundColor: BRAND.primary, color: "white" }}
                className="shadow-lg"
              >
                <Link href="/inscription/apmr">S'inscrire maintenant</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                <Link href="#programme">Voir le programme</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                <a href="#" download>
                  <Download className="h-4 w-4 mr-2" />
                  Télécharger la brochure
                </a>
              </Button>
            </div>
          </div>
        </Section>
      </section>

      {/* Description et objectifs */}
      <Section className="py-16">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Description de la formation</h2>
            <p className="text-lg text-gray-700 mb-6">
              La formation APMR (Accompagnement aux Personnes à Mobilité Réduite) vous prépare à devenir un professionnel de l'assistance aux passagers en situation de handicap dans l'environnement aéroportuaire.
            </p>
            <p className="text-gray-700 mb-6">
              Cette formation complète combine théorie et pratique pour vous donner toutes les compétences nécessaires à l'exercice de ce métier essentiel dans le secteur aéroportuaire.
            </p>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-blue-600" />
                Certification
              </h3>
              <p className="text-sm text-gray-700">
                À l'issue de la formation, vous obtiendrez une attestation de formation APMR reconnue par les compagnies aériennes et les gestionnaires d'aéroports.
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-6">Objectifs pédagogiques</h3>
            <ul className="space-y-3">
              {objectives.map((objective, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{objective}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Programme détaillé */}
      <section id="programme" className="bg-white py-16">
        <Section>
          <h2 className="text-3xl font-bold mb-8 text-center">Programme détaillé</h2>
          <div className="grid gap-6">
            {programModules.map((module, index) => (
              <Card key={index} className="border-l-4 border-l-blue-600">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl">{module.title}</CardTitle>
                    <Badge>{module.duration}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="grid md:grid-cols-2 gap-2">
                    {module.content.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>
      </section>

      {/* Prérequis et débouchés */}
      <Section className="py-16">
        <div className="grid md:grid-cols-2 gap-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-blue-600" />
                Prérequis
              </CardTitle>
              <CardDescription>
                Conditions d'accès à la formation
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {prerequisites.map((prerequisite, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{prerequisite}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-green-600" />
                Débouchés professionnels
              </CardTitle>
              <CardDescription>
                Métiers accessibles après la formation
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {careerOpportunities.map((career, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{career}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Informations pratiques */}
      <section className="bg-gray-100 py-16">
        <Section>
          <h2 className="text-3xl font-bold mb-8 text-center">Informations pratiques</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-blue-600" />
                  Planning
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <div className="font-semibold">Durée totale</div>
                  <div className="text-sm text-gray-600">70 heures sur 2 semaines</div>
                </div>
                <div>
                  <div className="font-semibold">Horaires</div>
                  <div className="text-sm text-gray-600">9h00 - 17h00</div>
                </div>
                <div>
                  <div className="font-semibold">Sessions</div>
                  <div className="text-sm text-gray-600">Toute l'année</div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-blue-600" />
                  Lieu de formation
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <div className="font-semibold">Flyness Training</div>
                  <div className="text-sm text-gray-600">
                    23 allée des Impressionnistes<br />
                    93420 Villepinte
                  </div>
                </div>
                <div>
                  <div className="font-semibold">Accès</div>
                  <div className="text-sm text-gray-600">RER B - Villepinte</div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-blue-600" />
                  Contact
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span className="text-sm">06 18 94 93 08</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span className="text-sm">contact@flynesstraining.com</span>
                </div>
                <Button asChild size="sm" className="w-full">
                  <Link href="/#contact">Nous contacter</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </Section>
      </section>

      {/* CTA final */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <Section className="text-center">
          <h2 className="text-3xl font-bold mb-4">Prêt à commencer votre formation APMR ?</h2>
          <p className="text-xl mb-8 text-white/90">
            Rejoignez nos prochaines sessions et lancez votre carrière dans l'assistance aéroportuaire
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              style={{ backgroundColor: BRAND.primary, color: "white" }}
              className="shadow-lg"
            >
              <Link href="/inscription/apmr">S'inscrire maintenant</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
              <Link href="/#contact">Demander des informations</Link>
            </Button>
          </div>
        </Section>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <Section>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <Image
                src="https://static.wixstatic.com/media/069674_cc399fd62a2343208b246797537bbd56~mv2.png/v1/fill/w_188,h_85,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/LOGO%20BLANC%20trans.png"
                alt="Flyness Training"
                width={188}
                height={85}
                className="h-8 w-auto mb-4"
              />
              <p className="text-gray-400 text-sm">
                Centre de formation aéroportuaire spécialisé dans la sûreté, l'APMR et l'anglais aéroportuaire.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Formations</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/formation/apmr" className="hover:text-white">APMR</Link></li>
                <li><Link href="/formation/tfp-asa-t7" className="hover:text-white">TFP ASA T7</Link></li>
                <li><Link href="/formation/tfp-asa-t10" className="hover:text-white">TFP ASA T10</Link></li>
                <li><Link href="/formation/sst" className="hover:text-white">SST</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  06 18 94 93 08
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  contact@flynesstraining.com
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  23 allée des Impressionnistes, 93420 Villepinte
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>© {new Date().getFullYear()} Flyness Training. Tous droits réservés.</p>
          </div>
        </Section>
      </footer>
    </div>
  );
}
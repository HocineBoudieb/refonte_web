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
  Award,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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

export default function TFPASAT10Brochure() {
  const programModules = [
    {
      title: "Module Sûreté (140h)",
      duration: "140h",
      content: [
        "Réglementation de la sûreté de l'aviation civile",
        "Menaces et vulnérabilités dans l'aviation",
        "Procédures de contrôle d'accès",
        "Inspection/filtrage des personnes et des bagages",
        "Contrôle des véhicules et du fret",
        "Gestion des situations d'urgence",
        "Communication et relations humaines",
        "Utilisation des équipements de détection",
        "Contrôle de sûreté du fret et du courrier",
        "Procédures spécifiques T10",
      ],
    },
    {
      title: "Module Tronc Commun (35h)",
      duration: "35h",
      content: [
        "Environnement aéroportuaire et acteurs",
        "Géographie aéroportuaire",
        "Réglementation du transport aérien",
        "Sécurité sur piste et circulation",
        "Prévention des risques professionnels",
        "Développement durable",
        "Anglais aéroportuaire de base",
      ],
    },
    {
      title: "SST - Sauveteur Secouriste du Travail (14h)",
      duration: "14h",
      content: [
        "Protéger, examiner, faire alerter",
        "Secourir une victime qui saigne abondamment",
        "Secourir une victime qui s'étouffe",
        "Secourir une victime qui se plaint de malaise",
        "Secourir une victime qui ne répond pas mais respire",
        "Secourir une victime qui ne répond pas et ne respire pas",
        "Secourir une victime qui se plaint d'une plaie qui ne saigne pas abondamment",
        "Secourir une victime qui se plaint d'une brûlure",
      ],
    },
  ];

  const prerequisites = [
    "Être âgé de 18 ans minimum",
    "Savoir lire et écrire le français",
    "Casier judiciaire B3 vierge (moins de 3 mois)",
    "Aptitude médicale compatible avec le poste",
    "Motivation pour le secteur de la sûreté aéroportuaire",
    "Capacité à porter des charges (fret et courrier)",
  ];

  const objectives = [
    "Maîtriser la réglementation de la sûreté aéroportuaire",
    "Effectuer les contrôles de sûreté selon les procédures T10",
    "Contrôler le fret et le courrier aérien",
    "Utiliser les équipements de détection et de contrôle",
    "Gérer les situations d'urgence et les incidents",
    "Communiquer efficacement avec les équipes et partenaires",
    "Appliquer les gestes de premiers secours",
  ];

  const careerOpportunities = [
    "Agent de sûreté aéroportuaire T10 (fret et courrier)",
    "Contrôleur d'accès en zone réservée",
    "Agent de sûreté fret et messagerie",
    "Superviseur d'équipe de sûreté fret",
    "Responsable sûreté dans une compagnie de fret",
    "Formateur en sûreté aéroportuaire (avec expérience)",
  ];

  const certificationInfo = [
    "Titre à Finalité Professionnelle reconnu par l'État (niveau 3)",
    "Certification RNCP (Répertoire National des Certifications Professionnelles)",
    "Habilitation préfectorale pour travailler en zone réservée",
    "Certificat SST valable 24 mois",
    "Spécialisation fret et courrier aérien",
    "Possibilité de VAE (Validation des Acquis de l'Expérience)",
  ];

  const specificities = [
    "Formation spécialisée dans le contrôle du fret et du courrier",
    "Apprentissage des procédures spécifiques T10",
    "Manipulation d'équipements de contrôle fret",
    "Gestion des marchandises dangereuses",
    "Procédures de traçabilité et documentation",
    "Travail en équipe dans un environnement logistique",
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
              <Link href="/inscription/tfp-asa-t10">S'inscrire</Link>
            </Button>
          </nav>
        </Section>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-red-900 to-red-700 text-white">
        <div className="absolute inset-0 bg-black/20" />
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
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
              <Shield className="h-6 w-6" />
              <Badge>Sûreté Aéroportuaire - Fret</Badge>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              TFP ASA T10
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Titre à Finalité Professionnelle Agent de Sûreté Aéroportuaire Typologie 10
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5" />
                <div>
                  <div className="font-semibold">189 heures</div>
                  <div className="text-sm text-white/80">Durée totale</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Euro className="h-5 w-5" />
                <div>
                  <div className="font-semibold">2 890€</div>
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
                <Link href="/inscription/tfp-asa-t10">S'inscrire maintenant</Link>
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

      {/* Description et spécificités */}
      <Section className="py-16">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Description de la formation</h2>
            <p className="text-lg text-gray-700 mb-6">
              Le TFP ASA T10 (Titre à Finalité Professionnelle Agent de Sûreté Aéroportuaire Typologie 10) est une formation certifiante spécialisée dans la sûreté du fret et du courrier aérien.
            </p>
            <p className="text-gray-700 mb-6">
              Cette formation vous prépare aux métiers de la sûreté dans l'environnement du fret aéroportuaire, avec une expertise dans le contrôle et la sécurisation des marchandises et du courrier.
            </p>
            <div className="bg-red-50 p-6 rounded-lg">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <Award className="h-5 w-5 text-red-600" />
                Spécialisation fret et courrier
              </h3>
              <p className="text-sm text-gray-700">
                Formation spécialisée dans le contrôle de sûreté du fret et du courrier aérien, secteur en forte demande.
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-6">Spécificités T10</h3>
            <ul className="space-y-3">
              {specificities.map((specificity, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{specificity}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Objectifs pédagogiques */}
      <section className="bg-white py-16">
        <Section>
          <h2 className="text-3xl font-bold mb-8 text-center">Objectifs pédagogiques</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <ul className="space-y-3">
              {objectives.slice(0, Math.ceil(objectives.length / 2)).map((objective, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{objective}</span>
                </li>
              ))}
            </ul>
            <ul className="space-y-3">
              {objectives.slice(Math.ceil(objectives.length / 2)).map((objective, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{objective}</span>
                </li>
              ))}
            </ul>
          </div>
        </Section>
      </section>

      {/* Programme détaillé */}
      <section id="programme" className="py-16">
        <Section>
          <h2 className="text-3xl font-bold mb-8 text-center">Programme détaillé</h2>
          <div className="grid gap-6">
            {programModules.map((module, index) => (
              <Card key={index} className="border-l-4 border-l-red-600">
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

      {/* Certification */}
      <section className="bg-gray-100 py-16">
        <Section>
          <div className="bg-gradient-to-r from-red-50 to-orange-50 p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-6 text-center">Certification et reconnaissance</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Award className="h-5 w-5 text-red-600" />
                  Titre professionnel
                </h3>
                <ul className="space-y-3">
                  {certificationInfo.map((info, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{info}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Modalités d'évaluation</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Épreuves théoriques</h4>
                    <p className="text-sm text-gray-600">QCM sur la réglementation et les procédures de sûreté fret</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Épreuves pratiques</h4>
                    <p className="text-sm text-gray-600">Contrôle de fret et manipulation d'équipements spécialisés</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Dossier professionnel</h4>
                    <p className="text-sm text-gray-600">Présentation d'un projet professionnel devant un jury</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </section>

      {/* Prérequis et débouchés */}
      <Section className="py-16">
        <div className="grid md:grid-cols-2 gap-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-red-600" />
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
      <section className="bg-white py-16">
        <Section>
          <h2 className="text-3xl font-bold mb-8 text-center">Informations pratiques</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-red-600" />
                  Planning
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <div className="font-semibold">Durée totale</div>
                  <div className="text-sm text-gray-600">189 heures sur 5 semaines</div>
                </div>
                <div>
                  <div className="font-semibold">Horaires</div>
                  <div className="text-sm text-gray-600">9h00 - 17h00</div>
                </div>
                <div>
                  <div className="font-semibold">Sessions</div>
                  <div className="text-sm text-gray-600">Toute l'année</div>
                </div>
                <div>
                  <div className="font-semibold">Examen</div>
                  <div className="text-sm text-gray-600">En fin de formation</div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-red-600" />
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
                <div>
                  <div className="font-semibold">Équipements</div>
                  <div className="text-sm text-gray-600">Matériel professionnel de contrôle fret</div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-red-600" />
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
      <section className="bg-gradient-to-r from-red-900 to-red-700 text-white py-16">
        <Section className="text-center">
          <h2 className="text-3xl font-bold mb-4">Prêt à obtenir votre TFP ASA T10 ?</h2>
          <p className="text-xl mb-8 text-white/90">
            Spécialisez-vous dans la sûreté du fret et du courrier aérien
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              style={{ backgroundColor: BRAND.primary, color: "white" }}
              className="shadow-lg"
            >
              <Link href="/inscription/tfp-asa-t10">S'inscrire maintenant</Link>
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
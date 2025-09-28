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
  Heart,
  AlertTriangle,
  Activity,
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

export default function SSTBrochure() {
  const programModules = [
    {
      title: "Protéger",
      duration: "3h",
      content: [
        "Reconnaître les dangers persistants",
        "Supprimer ou isoler le danger",
        "Soustraire la victime du danger",
        "Examiner la victime",
        "Faire alerter ou alerter",
        "Secourir la victime",
      ],
    },
    {
      title: "Examiner",
      duration: "2h",
      content: [
        "Recherche de signes vitaux",
        "Reconnaissance des détresses vitales",
        "Priorisation des gestes de secours",
        "Évaluation de l'état de conscience",
        "Contrôle des fonctions vitales",
        "Identification des traumatismes",
      ],
    },
    {
      title: "Faire alerter - Alerter",
      duration: "1h30",
      content: [
        "Organisation des secours",
        "Numéros d'urgence",
        "Transmission d'informations",
        "Accueil des secours",
        "Chaîne de secours interne",
        "Procédures d'évacuation",
      ],
    },
    {
      title: "Secourir",
      duration: "7h30",
      content: [
        "Victime qui saigne abondamment",
        "Victime qui s'étouffe",
        "Victime qui se plaint de sensations pénibles",
        "Victime qui se plaint de brûlures",
        "Victime qui se plaint d'une douleur",
        "Victime qui ne répond pas mais respire",
        "Victime qui ne répond pas et ne respire pas",
        "Utilisation du défibrillateur automatisé externe",
      ],
    },
  ];

  const prerequisites = [
    "Aucun prérequis nécessaire",
    "Aptitude physique à effectuer les gestes de secours",
    "Âge minimum : 14 ans",
    "Compréhension de la langue française",
    "Motivation pour porter secours",
  ];

  const objectives = [
    "Maîtriser la conduite à tenir et les gestes de premiers secours",
    "Savoir qui et comment alerter dans l'entreprise ou à l'extérieur",
    "Repérer les situations dangereuses dans son entreprise",
    "Participer à la mise en œuvre d'actions de prévention",
    "Protéger en cas d'accident",
    "Examiner la victime et faire alerter",
    "Secourir la victime jusqu'à l'arrivée des secours spécialisés",
  ];

  const targetAudience = [
    "Tout salarié d'entreprise",
    "Membres du CHSCT/CSE",
    "Responsables sécurité",
    "Équipiers de première intervention",
    "Personnel d'accueil",
    "Agents de sécurité",
  ];

  const certificationInfo = [
    "Certificat SST valable 24 mois",
    "Reconnaissance par la CNAM-TS",
    "Équivalence PSC1 (Prévention et Secours Civiques)",
    "Obligation de recyclage tous les 24 mois",
    "Carte de Sauveteur Secouriste du Travail",
  ];

  const emergencySituations = [
    "Hémorragies externes",
    "Obstruction des voies aériennes",
    "Malaises et aggravation de maladie",
    "Brûlures thermiques et chimiques",
    "Traumatismes (fractures, entorses)",
    "Arrêt cardio-respiratoire",
    "Perte de connaissance",
    "Plaies graves",
  ];

  const benefits = [
    "Sauver des vies en entreprise",
    "Réduire la gravité des accidents",
    "Améliorer la sécurité au travail",
    "Développer les réflexes de secours",
    "Participer à la prévention des risques",
    "Valoriser son profil professionnel",
  ];

  const specificities = [
    "Formation certifiante reconnue",
    "Approche pratique et interactive",
    "Mises en situation réalistes",
    "Matériel pédagogique professionnel",
    "Formateurs certifiés INRS",
    "Adaptation au contexte aéroportuaire",
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
              <Link href="/inscription/sst">S'inscrire</Link>
            </Button>
          </nav>
        </Section>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-red-900 to-orange-700 text-white">
        <div className="absolute inset-0 bg-black/20" />
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80')",
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
              <Heart className="h-6 w-6" />
              <Badge>Sauveteur Secouriste du Travail</Badge>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              SST
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Formation Sauveteur Secouriste du Travail
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5" />
                <div>
                  <div className="font-semibold">14 heures</div>
                  <div className="text-sm text-white/80">2 jours de formation</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Euro className="h-5 w-5" />
                <div>
                  <div className="font-semibold">280€</div>
                  <div className="text-sm text-white/80">Formation certifiante</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Users className="h-5 w-5" />
                <div>
                  <div className="font-semibold">10 stagiaires max</div>
                  <div className="text-sm text-white/80">Formation pratique</div>
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
                <Link href="/inscription/sst">S'inscrire maintenant</Link>
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

      {/* Description et importance */}
      <Section className="py-16">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Sauveteur Secouriste du Travail</h2>
            <p className="text-lg text-gray-700 mb-6">
              La formation SST permet d'acquérir les compétences nécessaires pour porter les premiers secours à toute victime d'un accident du travail ou d'un malaise, dans l'attente de l'arrivée des secours spécialisés.
            </p>
            <p className="text-gray-700 mb-6">
              Cette formation répond à une obligation réglementaire et permet de développer des réflexes de prévention et de secours essentiels en milieu professionnel.
            </p>
            <div className="bg-red-50 p-6 rounded-lg">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <Heart className="h-5 w-5 text-red-600" />
                Mission vitale
              </h3>
              <p className="text-sm text-gray-700">
                Être capable de sauver des vies et de réduire les conséquences d'accidents du travail.
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-6">Spécificités de la formation</h3>
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

      {/* Situations d'urgence */}
      <section className="bg-white py-16">
        <Section>
          <h2 className="text-3xl font-bold mb-8 text-center">Situations d'urgence couvertes</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {emergencySituations.map((situation, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <AlertTriangle className="h-8 w-8 text-red-600 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">{situation}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>
      </section>

      {/* Objectifs pédagogiques */}
      <section className="py-16">
        <Section>
          <h2 className="text-3xl font-bold mb-8 text-center">Objectifs de la formation</h2>
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
      <section id="programme" className="bg-gray-100 py-16">
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
          
          <div className="mt-8 bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Méthodes pédagogiques</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Apprentissage pratique</h4>
                <p className="text-sm text-gray-600">70% de pratique avec mises en situation réelles</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Matériel professionnel</h4>
                <p className="text-sm text-gray-600">Mannequins, défibrillateurs, matériel de secours</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Évaluation continue</h4>
                <p className="text-sm text-gray-600">Contrôle des gestes et des connaissances</p>
              </div>
            </div>
          </div>
        </Section>
      </section>

      {/* Public cible et prérequis */}
      <Section className="py-16">
        <div className="grid md:grid-cols-2 gap-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-red-600" />
                Public concerné
              </CardTitle>
              <CardDescription>
                Tout personnel d'entreprise
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {targetAudience.map((audience, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{audience}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

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
        </div>
      </Section>

      {/* Certification et bénéfices */}
      <section className="bg-gray-100 py-16">
        <Section>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-r from-red-50 to-orange-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Award className="h-6 w-6 text-red-600" />
                Certification
              </h2>
              <ul className="space-y-3">
                {certificationInfo.map((info, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{info}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <GraduationCap className="h-6 w-6 text-green-600" />
                Bénéfices
              </h2>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>
      </section>

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
                  <div className="font-semibold">Durée</div>
                  <div className="text-sm text-gray-600">14 heures (2 jours)</div>
                </div>
                <div>
                  <div className="font-semibold">Horaires</div>
                  <div className="text-sm text-gray-600">9h00 - 17h00</div>
                </div>
                <div>
                  <div className="font-semibold">Fréquence</div>
                  <div className="text-sm text-gray-600">Sessions mensuelles</div>
                </div>
                <div>
                  <div className="font-semibold">Évaluation</div>
                  <div className="text-sm text-gray-600">Épreuves certificatives</div>
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
                  <div className="text-sm text-gray-600">Salle de formation, mannequins, DAE</div>
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

      {/* Obligation légale */}
      <section className="bg-orange-50 py-16">
        <Section>
          <div className="bg-white p-8 rounded-lg border-l-4 border-l-red-500">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Activity className="h-6 w-6 text-red-600" />
              Obligation réglementaire
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold mb-3">Code du travail</h3>
                <p className="text-gray-700 mb-4">
                  Article R4224-15 : "Un membre du personnel reçoit la formation de secouriste nécessaire pour donner les premiers secours en cas d'urgence dans chaque atelier où sont accomplis des travaux dangereux et chaque chantier employant vingt travailleurs au moins pendant plus de quinze jours."
                </p>
                <p className="text-sm text-gray-600">
                  La présence d'un SST est obligatoire dans certaines entreprises.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-3">Recommandations</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    1 SST pour 15 salariés minimum
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    Présence permanente sur les lieux de travail
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    Recyclage obligatoire tous les 24 mois
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    Formation continue recommandée
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Section>
      </section>

      {/* CTA final */}
      <section className="bg-gradient-to-r from-red-900 to-orange-700 text-white py-16">
        <Section className="text-center">
          <h2 className="text-3xl font-bold mb-4">Devenez Sauveteur Secouriste du Travail</h2>
          <p className="text-xl mb-8 text-white/90">
            Acquérez les compétences pour sauver des vies et améliorer la sécurité au travail
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              style={{ backgroundColor: BRAND.primary, color: "white" }}
              className="shadow-lg"
            >
              <Link href="/inscription/sst">S'inscrire à la formation SST</Link>
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
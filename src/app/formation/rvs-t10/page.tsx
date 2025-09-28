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
  RefreshCw,
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

export default function RVST10Brochure() {
  const programModules = [
    {
      title: "Révision des connaissances T10",
      duration: "7h",
      content: [
        "Mise à jour de la réglementation sûreté",
        "Évolutions des procédures de contrôle fret",
        "Nouvelles menaces et vulnérabilités",
        "Technologies de détection récentes",
        "Procédures d'urgence actualisées",
        "Retour d'expérience terrain",
        "Cas pratiques et mises en situation",
        "Évaluation des acquis",
      ],
    },
  ];

  const prerequisites = [
    "Être titulaire du TFP ASA T10 en cours de validité",
    "Justifier d'une activité professionnelle dans le domaine",
    "Casier judiciaire B3 vierge (moins de 3 mois)",
    "Aptitude médicale compatible avec le poste",
    "Maîtrise des procédures de base T10",
  ];

  const objectives = [
    "Actualiser ses connaissances réglementaires",
    "Maîtriser les évolutions des procédures T10",
    "Intégrer les nouvelles technologies de contrôle",
    "Renforcer les bonnes pratiques de sûreté",
    "Maintenir son niveau de compétence",
    "Valider le maintien de ses acquis",
  ];

  const targetAudience = [
    "Agents de sûreté T10 en activité",
    "Contrôleurs d'accès zone fret",
    "Superviseurs d'équipes de sûreté fret",
    "Responsables sûreté en entreprise de fret",
    "Formateurs en sûreté aéroportuaire",
  ];

  const certificationInfo = [
    "Attestation de recyclage valable 5 ans",
    "Maintien de l'habilitation préfectorale",
    "Conformité aux exigences réglementaires",
    "Reconnaissance par les employeurs du secteur",
    "Traçabilité de la formation continue",
  ];

  const specificities = [
    "Formation obligatoire tous les 5 ans",
    "Mise à jour des connaissances réglementaires",
    "Focus sur les évolutions technologiques",
    "Retour d'expérience des professionnels",
    "Adaptation aux nouveaux enjeux sécuritaires",
    "Maintien de l'employabilité",
  ];

  const benefits = [
    "Maintien de la certification professionnelle",
    "Actualisation des compétences techniques",
    "Conformité réglementaire garantie",
    "Échange avec d'autres professionnels",
    "Amélioration des pratiques professionnelles",
    "Sécurisation du parcours professionnel",
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
              <Link href="/inscription/rvs-t10">S'inscrire</Link>
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
              <RefreshCw className="h-6 w-6" />
              <Badge>Recyclage - Sûreté Fret</Badge>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              RVS T10
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Recyclage et Validation des Savoirs - Agent de Sûreté Aéroportuaire T10
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5" />
                <div>
                  <div className="font-semibold">7 heures</div>
                  <div className="text-sm text-white/80">Formation courte</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Euro className="h-5 w-5" />
                <div>
                  <div className="font-semibold">350€</div>
                  <div className="text-sm text-white/80">Tarif recyclage</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Users className="h-5 w-5" />
                <div>
                  <div className="font-semibold">15 stagiaires max</div>
                  <div className="text-sm text-white/80">Groupe réduit</div>
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
                <Link href="/inscription/rvs-t10">S'inscrire maintenant</Link>
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
            <h2 className="text-3xl font-bold mb-6">Pourquoi le recyclage RVS T10 ?</h2>
            <p className="text-lg text-gray-700 mb-6">
              Le RVS T10 (Recyclage et Validation des Savoirs) est une formation obligatoire tous les 5 ans pour maintenir votre certification d'agent de sûreté aéroportuaire spécialisé dans le fret.
            </p>
            <p className="text-gray-700 mb-6">
              Cette formation vous permet de rester à jour sur les évolutions réglementaires, les nouvelles procédures et les technologies émergentes dans le domaine de la sûreté du fret aérien.
            </p>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <Award className="h-5 w-5 text-blue-600" />
                Formation obligatoire
              </h3>
              <p className="text-sm text-gray-700">
                Le recyclage est une obligation réglementaire pour maintenir votre habilitation et votre employabilité dans le secteur.
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-6">Spécificités du recyclage</h3>
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
          <h2 className="text-3xl font-bold mb-8 text-center">Objectifs du recyclage</h2>
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
          <h2 className="text-3xl font-bold mb-8 text-center">Programme de recyclage</h2>
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
          
          <div className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Méthodes pédagogiques</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Théorie actualisée</h4>
                <p className="text-sm text-gray-600">Présentation des évolutions réglementaires et procédurales</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Cas pratiques</h4>
                <p className="text-sm text-gray-600">Mises en situation basées sur l'expérience terrain</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Échanges</h4>
                <p className="text-sm text-gray-600">Partage d'expériences entre professionnels</p>
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
                <Users className="h-5 w-5 text-blue-600" />
                Public concerné
              </CardTitle>
              <CardDescription>
                Professionnels devant effectuer leur recyclage
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
                Conditions d'accès au recyclage
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
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Award className="h-6 w-6 text-blue-600" />
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
                  <Calendar className="h-5 w-5 text-blue-600" />
                  Planning
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <div className="font-semibold">Durée</div>
                  <div className="text-sm text-gray-600">7 heures (1 jour)</div>
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
                  <div className="text-sm text-gray-600">QCM de validation</div>
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
                <div>
                  <div className="font-semibold">Équipements</div>
                  <div className="text-sm text-gray-600">Salle équipée, supports actualisés</div>
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

      {/* Rappel réglementaire */}
      <section className="bg-yellow-50 py-16">
        <Section>
          <div className="bg-white p-8 rounded-lg border-l-4 border-l-yellow-500">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <RefreshCw className="h-6 w-6 text-yellow-600" />
              Rappel réglementaire
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold mb-3">Obligation de recyclage</h3>
                <p className="text-gray-700 mb-4">
                  Conformément à la réglementation en vigueur, tout agent de sûreté aéroportuaire doit effectuer un recyclage tous les 5 ans pour maintenir sa certification.
                </p>
                <p className="text-sm text-gray-600">
                  Le non-respect de cette obligation entraîne la suspension de l'habilitation préfectorale.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-3">Planification recommandée</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    Anticiper 6 mois avant l'échéance
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    Vérifier les dates de validité
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    Organiser avec l'employeur
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    Prévoir le financement
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Section>
      </section>

      {/* CTA final */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <Section className="text-center">
          <h2 className="text-3xl font-bold mb-4">Maintenez votre certification T10</h2>
          <p className="text-xl mb-8 text-white/90">
            Effectuez votre recyclage obligatoire dans les délais
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              style={{ backgroundColor: BRAND.primary, color: "white" }}
              className="shadow-lg"
            >
              <Link href="/inscription/rvs-t10">S'inscrire au recyclage</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
              <Link href="/#contact">Vérifier mon échéance</Link>
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
                <li><Link href="/formation/rvs-t10" className="hover:text-white">RVS T10</Link></li>
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
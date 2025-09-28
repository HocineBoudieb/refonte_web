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
  Eye,
  Scan,
  Monitor,
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

export default function FPIBrochure() {
  const programModules = [
    {
      title: "Révision des fondamentaux",
      duration: "2h",
      content: [
        "Rappel de la réglementation imagerie",
        "Évolutions technologiques récentes",
        "Nouvelles menaces identifiées",
        "Procédures de sécurité actualisées",
        "Normes de qualité d'image",
        "Protocoles d'urgence",
      ],
    },
    {
      title: "Techniques d'interprétation avancées",
      duration: "3h",
      content: [
        "Analyse d'images complexes",
        "Détection d'objets dissimulés",
        "Reconnaissance de matières suspectes",
        "Interprétation des densités",
        "Cas d'images ambiguës",
        "Techniques de discrimination",
      ],
    },
    {
      title: "Mise en pratique",
      duration: "2h",
      content: [
        "Exercices sur simulateur",
        "Analyse d'images réelles",
        "Cas pratiques variés",
        "Évaluation des performances",
        "Correction et amélioration",
        "Validation des acquis",
      ],
    },
  ];

  const prerequisites = [
    "Être titulaire d'une certification imagerie en cours de validité",
    "Justifier d'une activité professionnelle dans le domaine",
    "Casier judiciaire B3 vierge (moins de 3 mois)",
    "Aptitude visuelle certifiée",
    "Maîtrise des équipements d'imagerie de base",
  ];

  const objectives = [
    "Actualiser ses connaissances en imagerie de sûreté",
    "Maîtriser les nouvelles technologies d'imagerie",
    "Améliorer ses techniques d'interprétation",
    "Maintenir son niveau de performance",
    "Intégrer les évolutions réglementaires",
    "Valider le maintien de ses compétences",
  ];

  const targetAudience = [
    "Opérateurs d'imagerie de sûreté",
    "Agents de contrôle aux rayons X",
    "Superviseurs d'équipes imagerie",
    "Formateurs en imagerie de sûreté",
    "Responsables sûreté utilisant l'imagerie",
  ];

  const certificationInfo = [
    "Attestation de formation périodique",
    "Maintien de la certification imagerie",
    "Conformité aux exigences réglementaires",
    "Reconnaissance par les employeurs",
    "Traçabilité de la formation continue",
  ];

  const technologies = [
    "Rayons X conventionnels",
    "Scanners multi-vues",
    "Détection automatique d'explosifs",
    "Imagerie 3D avancée",
    "Intelligence artificielle d'assistance",
    "Systèmes de double contrôle",
  ];

  const benefits = [
    "Maintien de la certification professionnelle",
    "Amélioration des performances de détection",
    "Maîtrise des nouvelles technologies",
    "Réduction des erreurs d'interprétation",
    "Conformité réglementaire garantie",
    "Évolution de carrière facilitée",
  ];

  const specificities = [
    "Formation obligatoire périodique",
    "Focus sur les évolutions technologiques",
    "Exercices pratiques intensifs",
    "Mise à jour des procédures",
    "Évaluation continue des performances",
    "Adaptation aux nouveaux équipements",
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
              <Link href="/inscription/fpi">S'inscrire</Link>
            </Button>
          </nav>
        </Section>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-900 to-indigo-700 text-white">
        <div className="absolute inset-0 bg-black/20" />
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
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
              <Eye className="h-6 w-6" />
              <Badge>Formation Périodique - Imagerie</Badge>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              FPI
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Formation Périodique Imagerie - Opérateur de Sûreté
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5" />
                <div>
                  <div className="font-semibold">7 heures</div>
                  <div className="text-sm text-white/80">Formation intensive</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Euro className="h-5 w-5" />
                <div>
                  <div className="font-semibold">450€</div>
                  <div className="text-sm text-white/80">Formation spécialisée</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Users className="h-5 w-5" />
                <div>
                  <div className="font-semibold">12 stagiaires max</div>
                  <div className="text-sm text-white/80">Groupe restreint</div>
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
                <Link href="/inscription/fpi">S'inscrire maintenant</Link>
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
            <h2 className="text-3xl font-bold mb-6">Formation Périodique Imagerie</h2>
            <p className="text-lg text-gray-700 mb-6">
              La Formation Périodique Imagerie (FPI) est essentielle pour maintenir et améliorer les compétences des opérateurs d'imagerie de sûreté dans l'interprétation des images de contrôle.
            </p>
            <p className="text-gray-700 mb-6">
              Cette formation vous permet de rester à jour sur les évolutions technologiques, d'améliorer vos techniques d'analyse et de maintenir un niveau de performance optimal dans la détection de menaces.
            </p>
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <Scan className="h-5 w-5 text-purple-600" />
                Expertise technique
              </h3>
              <p className="text-sm text-gray-700">
                Formation spécialisée pour les professionnels de l'imagerie de sûreté aéroportuaire.
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

      {/* Technologies couvertes */}
      <section className="bg-white py-16">
        <Section>
          <h2 className="text-3xl font-bold mb-8 text-center">Technologies d'imagerie couvertes</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {technologies.map((tech, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <Monitor className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">{tech}</h3>
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
              <Card key={index} className="border-l-4 border-l-purple-600">
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
          
          <div className="mt-8 bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Méthodes pédagogiques</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Théorie actualisée</h4>
                <p className="text-sm text-gray-600">Présentation des évolutions technologiques et réglementaires</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Pratique intensive</h4>
                <p className="text-sm text-gray-600">Exercices sur simulateurs et équipements réels</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Évaluation continue</h4>
                <p className="text-sm text-gray-600">Suivi des performances et amélioration personnalisée</p>
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
                <Users className="h-5 w-5 text-purple-600" />
                Public concerné
              </CardTitle>
              <CardDescription>
                Professionnels de l'imagerie de sûreté
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
            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Award className="h-6 w-6 text-purple-600" />
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
                  <Calendar className="h-5 w-5 text-purple-600" />
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
                  <div className="text-sm text-gray-600">Sessions bimensuelles</div>
                </div>
                <div>
                  <div className="font-semibold">Évaluation</div>
                  <div className="text-sm text-gray-600">Tests pratiques</div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-purple-600" />
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
                  <div className="text-sm text-gray-600">Simulateurs d'imagerie, équipements professionnels</div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-purple-600" />
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

      {/* Importance de la formation continue */}
      <section className="bg-indigo-50 py-16">
        <Section>
          <div className="bg-white p-8 rounded-lg border-l-4 border-l-purple-500">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Eye className="h-6 w-6 text-purple-600" />
              L'importance de la formation continue en imagerie
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold mb-3">Évolution technologique</h3>
                <p className="text-gray-700 mb-4">
                  Les technologies d'imagerie évoluent rapidement. Cette formation vous permet de maîtriser les dernières innovations et d'optimiser vos performances de détection.
                </p>
                <p className="text-sm text-gray-600">
                  L'intelligence artificielle et les nouveaux algorithmes transforment l'analyse d'images.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-3">Maintien des compétences</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    Amélioration continue des performances
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    Adaptation aux nouvelles menaces
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    Maîtrise des équipements récents
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    Conformité aux standards internationaux
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Section>
      </section>

      {/* CTA final */}
      <section className="bg-gradient-to-r from-purple-900 to-indigo-700 text-white py-16">
        <Section className="text-center">
          <h2 className="text-3xl font-bold mb-4">Perfectionnez vos compétences en imagerie</h2>
          <p className="text-xl mb-8 text-white/90">
            Rejoignez notre formation périodique imagerie pour rester au top de votre expertise
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              style={{ backgroundColor: BRAND.primary, color: "white" }}
              className="shadow-lg"
            >
              <Link href="/inscription/fpi">S'inscrire à la FPI</Link>
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
                <li><Link href="/formation/fpi" className="hover:text-white">FPI</Link></li>
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
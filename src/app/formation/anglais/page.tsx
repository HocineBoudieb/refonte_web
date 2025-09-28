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
  Star,
  Globe,
  Headphones,
  MessageCircle,
  BookOpen,
  Award,
  Calendar,
  MapPin,
  Phone,
  Mail,
  Target,
  Briefcase,
  GraduationCap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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
    className={`w-full max-w-6xl mx-auto px-6 md:px-8 ${className}`}
  >
    {children}
  </section>
);

const modules = [
  {
    title: "Anglais Aéroportuaire Niveau 1",
    duration: "40 heures",
    description: "Bases de l'anglais aéroportuaire pour débutants",
    topics: [
      "Vocabulaire aéroportuaire de base",
      "Phrases essentielles pour l'accueil",
      "Nombres, heures et dates",
      "Directions et orientation",
      "Situations d'urgence simples",
    ],
  },
  {
    title: "Anglais Aéroportuaire Niveau 2",
    duration: "40 heures",
    description: "Perfectionnement pour situations complexes",
    topics: [
      "Communication avec les passagers",
      "Gestion des réclamations",
      "Procédures de sécurité en anglais",
      "Annonces et informations",
      "Situations d'urgence avancées",
    ],
  },
  {
    title: "Anglais Technique Aviation",
    duration: "30 heures",
    description: "Anglais spécialisé pour les professionnels",
    topics: [
      "Terminologie technique aviation",
      "Communication radio",
      "Documentation technique",
      "Maintenance et sécurité",
      "Réglementation internationale",
    ],
  },
  {
    title: "Préparation TOEIC Aviation",
    duration: "50 heures",
    description: "Préparation spécialisée au TOEIC secteur aviation",
    topics: [
      "Méthodologie TOEIC",
      "Compréhension orale aviation",
      "Compréhension écrite spécialisée",
      "Tests blancs et corrections",
      "Stratégies d'examen",
    ],
  },
];

const objectives = [
  "Maîtriser le vocabulaire aéroportuaire essentiel",
  "Communiquer efficacement avec les passagers internationaux",
  "Comprendre et transmettre les consignes de sécurité",
  "Gérer les situations d'urgence en anglais",
  "Obtenir une certification reconnue (TOEIC)",
  "Améliorer ses perspectives d'évolution professionnelle",
];

const careerOpportunities = [
  {
    title: "Agent d'Escale International",
    description: "Accueil et assistance des passagers internationaux",
    icon: Users,
  },
  {
    title: "Superviseur Opérations",
    description: "Coordination des équipes multinationales",
    icon: Target,
  },
  {
    title: "Agent de Sûreté International",
    description: "Contrôles de sécurité pour vols internationaux",
    icon: Award,
  },
  {
    title: "Formateur Aviation",
    description: "Formation du personnel aux standards internationaux",
    icon: GraduationCap,
  },
];

const testimonials = [
  {
    name: "Marie L.",
    position: "Agent d'escale CDG",
    content: "Grâce à cette formation, j'ai pu évoluer vers les vols internationaux. L'approche pratique m'a vraiment aidée.",
    rating: 5,
  },
  {
    name: "Ahmed K.",
    position: "Superviseur sûreté",
    content: "Formation très complète qui m'a permis d'obtenir mon TOEIC avec un excellent score. Recommandé !",
    rating: 5,
  },
  {
    name: "Sophie M.",
    position: "Agent APMR",
    content: "Les formateurs sont excellents et les mises en situation très réalistes. J'ai gagné en confiance.",
    rating: 5,
  },
];

export default function AnglaisFormation() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
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
          </nav>
        </Section>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-indigo-700 text-white py-16">
        <Section>
          <Link
            href="/#formations"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            Retour aux formations
          </Link>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Globe className="h-10 w-10" />
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                  Formations Anglais
                </Badge>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Anglais Aéroportuaire
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Maîtrisez l'anglais professionnel du secteur aéroportuaire avec nos formations 
                spécialisées, du niveau débutant à la préparation TOEIC.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                  <Clock className="h-5 w-5" />
                  <span>30-50 heures</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                  <Euro className="h-5 w-5" />
                  <span>À partir de 800€</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                  <Users className="h-5 w-5" />
                  <span>Tous niveaux</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-blue-900 hover:bg-gray-100"
                >
                  <Link href="/inscription/anglais">S'inscrire maintenant</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-900"
                >
                  <Link href="#programme">Voir le programme</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">4</div>
                    <div className="text-white/80 text-sm">Niveaux disponibles</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">95%</div>
                    <div className="text-white/80 text-sm">Taux de réussite</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">500+</div>
                    <div className="text-white/80 text-sm">Stagiaires formés</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">TOEIC</div>
                    <div className="text-white/80 text-sm">Certification</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </section>

      {/* Programme détaillé */}
      <section id="programme" className="py-16">
        <Section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Programme de Formation</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nos formations d'anglais aéroportuaire sont conçues pour répondre aux besoins 
              spécifiques des professionnels du secteur aérien.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {modules.map((module, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl mb-2">{module.title}</CardTitle>
                      <CardDescription className="text-base">
                        {module.description}
                      </CardDescription>
                    </div>
                    <Badge variant="outline" className="ml-4">
                      {module.duration}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {module.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>
      </section>

      {/* Objectifs */}
      <section className="py-16 bg-white">
        <Section>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Objectifs de la Formation</h2>
              <p className="text-lg text-gray-600 mb-8">
                À l'issue de nos formations d'anglais aéroportuaire, vous serez capable de :
              </p>
              <ul className="space-y-4">
                {objectives.map((objective, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Target className="h-6 w-6 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{objective}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
              <div className="text-center mb-6">
                <Award className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Certification TOEIC</h3>
                <p className="text-gray-600">
                  Préparez-vous au TOEIC avec notre formation spécialisée aviation
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                  <span className="font-medium">Score moyen obtenu</span>
                  <span className="text-blue-600 font-bold">785/990</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                  <span className="font-medium">Taux de réussite</span>
                  <span className="text-green-600 font-bold">95%</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                  <span className="font-medium">Validité</span>
                  <span className="text-gray-700 font-bold">2 ans</span>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </section>

      {/* Méthodes pédagogiques */}
      <section className="py-16">
        <Section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Méthodes Pédagogiques</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une approche interactive et pratique pour un apprentissage efficace
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardContent className="pt-6">
                <Headphones className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Écoute Active</h3>
                <p className="text-gray-600 text-sm">
                  Exercices d'écoute avec situations réelles d'aéroport
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <MessageCircle className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Expression Orale</h3>
                <p className="text-gray-600 text-sm">
                  Jeux de rôle et mises en situation professionnelles
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <BookOpen className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Supports Spécialisés</h3>
                <p className="text-gray-600 text-sm">
                  Manuels et ressources dédiés au secteur aéroportuaire
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <Globe className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Immersion</h3>
                <p className="text-gray-600 text-sm">
                  Environnement d'apprentissage 100% en anglais
                </p>
              </CardContent>
            </Card>
          </div>
        </Section>
      </section>

      {/* Débouchés professionnels */}
      <section className="py-16 bg-white">
        <Section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Débouchés Professionnels</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              L'anglais aéroportuaire ouvre de nombreuses opportunités de carrière
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {careerOpportunities.map((opportunity, index) => {
              const IconComponent = opportunity.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <IconComponent className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">{opportunity.title}</h3>
                    <p className="text-gray-600 text-sm">{opportunity.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </Section>
      </section>

      {/* Témoignages */}
      <section className="py-16">
        <Section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Témoignages</h2>
            <p className="text-xl text-gray-600">
              Ce que disent nos anciens stagiaires
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.position}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>
      </section>

      {/* Informations pratiques */}
      <section className="py-16 bg-white">
        <Section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Informations Pratiques</h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <Card>
              <CardHeader>
                <CardTitle>Prérequis et Public</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Prérequis :</h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Niveau A1 minimum en anglais (débutant accepté)</li>
                    <li>• Motivation pour l'apprentissage des langues</li>
                    <li>• Projet professionnel dans l'aéroportuaire</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Public concerné :</h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Agents d'escale et de sûreté</li>
                    <li>• Personnel aéroportuaire</li>
                    <li>• Demandeurs d'emploi</li>
                    <li>• Salariés en reconversion</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Modalités et Tarifs</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-blue-600 mb-1">Niveau 1</div>
                    <div className="text-sm text-gray-600 mb-2">40h - Débutant</div>
                    <div className="text-lg font-semibold">800€</div>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-blue-600 mb-1">Niveau 2</div>
                    <div className="text-sm text-gray-600 mb-2">40h - Intermédiaire</div>
                    <div className="text-lg font-semibold">850€</div>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-blue-600 mb-1">Technique</div>
                    <div className="text-sm text-gray-600 mb-2">30h - Spécialisé</div>
                    <div className="text-lg font-semibold">750€</div>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-blue-600 mb-1">TOEIC</div>
                    <div className="text-sm text-gray-600 mb-2">50h - Préparation</div>
                    <div className="text-lg font-semibold">1200€</div>
                  </div>
                </div>
                <div className="text-sm text-gray-600">
                  <p>• Financement possible : CPF, OPCO, Pôle Emploi</p>
                  <p>• Sessions en présentiel ou distanciel</p>
                  <p>• Groupes de 6 à 12 participants maximum</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </Section>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-indigo-700 text-white">
        <Section>
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">
              Prêt à Maîtriser l'Anglais Aéroportuaire ?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Rejoignez nos formations d'anglais spécialisées et boostez votre carrière 
              dans le secteur aéroportuaire international.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-blue-900 hover:bg-gray-100"
              >
                <Link href="/inscription/anglais">S'inscrire maintenant</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-900"
              >
                <Link href="/#contact">Demander des informations</Link>
              </Button>
            </div>
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
"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ChevronDown,
  ChevronUp,
  HelpCircle,
  Search,
  Clock,
  CreditCard,
  Award,
  Users,
  BookOpen,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

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

type FAQItem = {
  id: string;
  question: string;
  answer: string;
  category: string;
  keywords: string[];
};

const faqData: FAQItem[] = [
  // Formations générales
  {
    id: "duree-formations",
    question: "Quelle est la durée des formations ?",
    answer: "La durée varie selon la formation : APMR (50h), TFP ASA T7 (35h), TFP ASA T10 (35h), RVS T10 (14h), FPI (7h), SST (14h), Anglais (20-40h selon le niveau). Toutes les formations incluent théorie et pratique.",
    category: "general",
    keywords: ["durée", "temps", "heures", "formation"]
  },
  {
    id: "prerequis-formations",
    question: "Y a-t-il des prérequis pour suivre les formations ?",
    answer: "Les prérequis varient : âge minimum 18 ans, maîtrise du français écrit et oral, casier judiciaire vierge pour les formations sûreté. Certaines formations nécessitent une expérience préalable ou des certifications spécifiques.",
    category: "general",
    keywords: ["prérequis", "conditions", "âge", "casier"]
  },
  {
    id: "modalites-formation",
    question: "Quelles sont les modalités de formation ?",
    answer: "Nos formations se déroulent en présentiel dans nos locaux à Villepinte. Nous proposons des sessions inter-entreprises (groupes mixtes) et intra-entreprises (groupes dédiés à votre entreprise). Certains modules peuvent être complétés par de l'e-learning.",
    category: "general",
    keywords: ["modalités", "présentiel", "inter", "intra", "e-learning"]
  },
  {
    id: "certification-qualiopi",
    question: "Êtes-vous certifié Qualiopi ?",
    answer: "Oui, Flyness Training est certifié Qualiopi depuis 2021. Cette certification atteste de la qualité de nos processus de formation et nous permet de proposer des formations éligibles aux financements publics et paritaires.",
    category: "general",
    keywords: ["qualiopi", "certification", "qualité", "agréé"]
  },
  
  // Financement
  {
    id: "cpf-eligible",
    question: "Mes formations sont-elles éligibles au CPF ?",
    answer: "Oui, la plupart de nos formations sont éligibles au CPF (Compte Personnel de Formation) : APMR, TFP ASA, SST, Anglais. Nous vous accompagnons dans vos démarches sur Mon Compte Formation.",
    category: "financement",
    keywords: ["cpf", "compte personnel formation", "éligible", "financement"]
  },
  {
    id: "prix-formations",
    question: "Quels sont les tarifs des formations ?",
    answer: "Nos tarifs varient selon la formation : APMR (1 890€), TFP ASA T7 (1 350€), TFP ASA T10 (1 350€), RVS T10 (590€), FPI (350€), SST (290€), Anglais (800-1 600€). Tarifs dégressifs pour les groupes. Devis gratuit sur demande.",
    category: "financement",
    keywords: ["prix", "tarif", "coût", "devis"]
  },
  {
    id: "financement-entreprise",
    question: "Comment financer les formations pour mon entreprise ?",
    answer: "Plusieurs options : OPCO (Opérateur de Compétences), plan de développement des compétences, CPF, financement direct. Nous vous accompagnons dans le montage du dossier de financement et les démarches administratives.",
    category: "financement",
    keywords: ["entreprise", "opco", "financement", "plan formation"]
  },
  {
    id: "paiement-echelonne",
    question: "Puis-je payer en plusieurs fois ?",
    answer: "Oui, nous proposons des facilités de paiement : paiement en 2 ou 3 fois sans frais pour les particuliers, échéancier personnalisé pour les entreprises. Contactez-nous pour étudier votre situation.",
    category: "financement",
    keywords: ["paiement", "échelonné", "plusieurs fois", "facilités"]
  },
  
  // Inscriptions
  {
    id: "inscription-formation",
    question: "Comment m'inscrire à une formation ?",
    answer: "Inscription en ligne sur notre site, par téléphone (06 18 94 93 08) ou par email (contact@flynesstraining.com). Nous vous enverrons un devis et un programme détaillé. L'inscription est confirmée après signature de la convention.",
    category: "inscription",
    keywords: ["inscription", "s'inscrire", "démarches", "procédure"]
  },
  {
    id: "delai-inscription",
    question: "Quel est le délai pour s'inscrire ?",
    answer: "Inscription possible jusqu'à 15 jours avant le début de la formation (délai légal). Pour les formations CPF, prévoir 11 jours ouvrés minimum. Nous recommandons de s'inscrire 1 mois à l'avance pour garantir votre place.",
    category: "inscription",
    keywords: ["délai", "inscription", "avance", "place"]
  },
  {
    id: "planning-sessions",
    question: "Quand ont lieu les prochaines sessions ?",
    answer: "Nous organisons des sessions chaque mois pour nos formations principales. Le planning est disponible sur notre site et mis à jour régulièrement. Possibilité d'organiser des sessions dédiées pour les groupes de 6 personnes minimum.",
    category: "inscription",
    keywords: ["planning", "sessions", "dates", "calendrier"]
  },
  {
    id: "annulation-report",
    question: "Puis-je annuler ou reporter ma formation ?",
    answer: "Annulation gratuite jusqu'à 15 jours avant le début. Report possible selon les places disponibles. En cas d'annulation tardive, des frais peuvent s'appliquer selon nos conditions générales de vente.",
    category: "inscription",
    keywords: ["annulation", "report", "annuler", "reporter"]
  },
  
  // Certifications
  {
    id: "validite-certificats",
    question: "Quelle est la validité des certificats ?",
    answer: "APMR : 5 ans, TFP ASA : 5 ans, RVS : 3 ans, FPI : 3 ans, SST : 2 ans, Anglais : pas de limite. Des formations de recyclage sont obligatoires pour maintenir la validité des certifications sûreté.",
    category: "certification",
    keywords: ["validité", "certificat", "durée", "recyclage"]
  },
  {
    id: "reconnaissance-certificats",
    question: "Mes certificats sont-ils reconnus partout ?",
    answer: "Oui, nos certificats sont reconnus au niveau national et européen. Ils respectent les réglementations DGAC, OACI et européennes. Ils sont acceptés dans tous les aéroports français et européens.",
    category: "certification",
    keywords: ["reconnaissance", "national", "européen", "dgac"]
  },
  {
    id: "recyclage-formations",
    question: "Quand dois-je faire mon recyclage ?",
    answer: "Le recyclage doit être effectué avant l'expiration du certificat : SST tous les 2 ans, RVS et FPI tous les 3 ans, APMR et TFP ASA tous les 5 ans. Nous vous envoyons des rappels automatiques.",
    category: "certification",
    keywords: ["recyclage", "renouvellement", "expiration", "rappel"]
  },
  
  // Formations spécifiques
  {
    id: "difference-t7-t10",
    question: "Quelle différence entre TFP ASA T7 et T10 ?",
    answer: "T7 : contrôle d'accès, inspection filtrage passagers et bagages. T10 : inspection filtrage véhicules, marchandises et approvisionnements. Le T10 inclut le T7. Choisissez selon votre poste visé.",
    category: "formations",
    keywords: ["t7", "t10", "différence", "tfp asa"]
  },
  {
    id: "apmr-debouches",
    question: "Quels débouchés après la formation APMR ?",
    answer: "Agent d'assistance PMR en aéroport, compagnies aériennes, assistance aéroportuaire, services spécialisés. Secteur en forte demande avec de nombreuses opportunités d'emploi dans toute la France.",
    category: "formations",
    keywords: ["apmr", "débouchés", "emploi", "métier"]
  },
  {
    id: "anglais-niveau",
    question: "Quel niveau d'anglais pour les formations ?",
    answer: "Nous proposons 3 niveaux : débutant (A1-A2), intermédiaire (B1-B2), avancé (C1). Test de positionnement gratuit pour déterminer votre niveau. Formation adaptée au vocabulaire aéroportuaire et aviation.",
    category: "formations",
    keywords: ["anglais", "niveau", "test", "positionnement"]
  },
  {
    id: "sst-entreprise",
    question: "La formation SST est-elle obligatoire en entreprise ?",
    answer: "Oui, le Code du travail impose au moins un SST par groupe de 15 salariés dans les ateliers où sont effectués des travaux dangereux. Formation initiale 14h + recyclage 7h tous les 2 ans.",
    category: "formations",
    keywords: ["sst", "obligatoire", "entreprise", "code travail"]
  },
  
  // Pratique
  {
    id: "lieu-formation",
    question: "Où se déroulent les formations ?",
    answer: "Dans nos locaux modernes à Villepinte (93), à proximité de l'aéroport Roissy CDG. Salles équipées, matériel pédagogique récent, parking gratuit. Accès facile en transport en commun (RER B).",
    category: "pratique",
    keywords: ["lieu", "adresse", "villepinte", "roissy"]
  },
  {
    id: "materiel-fourni",
    question: "Le matériel pédagogique est-il fourni ?",
    answer: "Oui, tout le matériel est inclus : supports de cours, équipements de démonstration, accès plateforme e-learning, certificats. Vous repartez avec vos supports papier et accès numérique.",
    category: "pratique",
    keywords: ["matériel", "supports", "fourni", "inclus"]
  },
  {
    id: "repas-hebergement",
    question: "Les repas et l'hébergement sont-ils inclus ?",
    answer: "Les repas ne sont pas inclus mais nous avons une cafétéria sur site et de nombreux restaurants à proximité. Pour l'hébergement, nous pouvons vous recommander des hôtels partenaires avec tarifs préférentiels.",
    category: "pratique",
    keywords: ["repas", "hébergement", "restauration", "hôtel"]
  },
  {
    id: "groupe-taille",
    question: "Combien de personnes par groupe de formation ?",
    answer: "Maximum 12 personnes par groupe pour garantir un suivi personnalisé et des conditions d'apprentissage optimales. Minimum 6 personnes pour maintenir la session (sauf formations intra-entreprise).",
    category: "pratique",
    keywords: ["groupe", "taille", "nombre", "personnes"]
  }
];

const categories = [
  { id: "all", name: "Toutes", icon: HelpCircle },
  { id: "general", name: "Général", icon: BookOpen },
  { id: "financement", name: "Financement", icon: CreditCard },
  { id: "inscription", name: "Inscription", icon: Users },
  { id: "certification", name: "Certification", icon: Award },
  { id: "formations", name: "Formations", icon: BookOpen },
  { id: "pratique", name: "Pratique", icon: Clock },
];

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const filteredFAQ = faqData.filter(item => {
    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;
    const matchesSearch = searchTerm === "" || 
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.keywords.some(keyword => keyword.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

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
            <Link href="/contact" className="text-gray-700 hover:text-gray-900">
              Contact
            </Link>
            <Link href="/faq" className="text-blue-600 font-medium">
              FAQ
            </Link>
          </nav>
        </Section>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-indigo-700 text-white py-16">
        <Section>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            Retour à l'accueil
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <HelpCircle className="h-8 w-8" />
            <h1 className="text-4xl md:text-5xl font-bold">
              Questions fréquentes
            </h1>
          </div>
          <p className="text-xl text-white/90 max-w-2xl">
            Trouvez rapidement les réponses à vos questions sur nos formations, 
            les modalités d'inscription, le financement et bien plus encore.
          </p>
        </Section>
      </section>

      {/* Search and Filters */}
      <Section className="py-8">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Rechercher dans les questions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            
            {/* Category filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category.id)}
                    className="flex items-center gap-2"
                  >
                    <Icon className="h-4 w-4" />
                    {category.name}
                  </Button>
                );
              })}
            </div>
          </div>
          
          {/* Results count */}
          <div className="mt-4 text-sm text-gray-600">
            {filteredFAQ.length} question{filteredFAQ.length > 1 ? 's' : ''} trouvée{filteredFAQ.length > 1 ? 's' : ''}
            {searchTerm && ` pour "${searchTerm}"`}
            {selectedCategory !== "all" && ` dans la catégorie "${categories.find(c => c.id === selectedCategory)?.name}"`}
          </div>
        </div>
      </Section>

      {/* FAQ Content */}
      <Section className="pb-16">
        {filteredFAQ.length === 0 ? (
          <Card>
            <CardContent className="p-12 text-center">
              <HelpCircle className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Aucune question trouvée</h3>
              <p className="text-gray-600 mb-6">
                Essayez de modifier vos critères de recherche ou contactez-nous directement.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button onClick={() => { setSearchTerm(""); setSelectedCategory("all"); }}>
                  Réinitialiser les filtres
                </Button>
                <Button asChild variant="outline">
                  <Link href="/contact">Nous contacter</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-4">
            {filteredFAQ.map((item) => (
              <Card key={item.id}>
                <Collapsible
                  open={openItems.includes(item.id)}
                  onOpenChange={() => toggleItem(item.id)}
                >
                  <CollapsibleTrigger asChild>
                    <CardHeader className="cursor-pointer hover:bg-gray-50 transition-colors">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-left text-lg">
                          {item.question}
                        </CardTitle>
                        {openItems.includes(item.id) ? (
                          <ChevronUp className="h-5 w-5 text-gray-500" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-gray-500" />
                        )}
                      </div>
                    </CardHeader>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <CardContent className="pt-0">
                      <div className="prose prose-sm max-w-none">
                        <p className="text-gray-700 leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    </CardContent>
                  </CollapsibleContent>
                </Collapsible>
              </Card>
            ))}
          </div>
        )}
      </Section>

      {/* Contact CTA */}
      <section className="bg-blue-50 py-16">
        <Section>
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Vous ne trouvez pas votre réponse ?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Notre équipe est là pour répondre à toutes vos questions spécifiques. 
              N'hésitez pas à nous contacter pour un accompagnement personnalisé.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="bg-blue-100 p-3 rounded-lg w-fit mx-auto mb-4">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Téléphone</h3>
                  <p className="text-gray-600">06 18 94 93 08</p>
                  <p className="text-sm text-gray-500 mt-1">
                    Lun-Ven : 9h-18h
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="bg-blue-100 p-3 rounded-lg w-fit mx-auto mb-4">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Email</h3>
                  <p className="text-gray-600">contact@flynesstraining.com</p>
                  <p className="text-sm text-gray-500 mt-1">
                    Réponse sous 24h
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="bg-blue-100 p-3 rounded-lg w-fit mx-auto mb-4">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Adresse</h3>
                  <p className="text-gray-600">23 allée des Impressionnistes</p>
                  <p className="text-gray-600">93420 Villepinte</p>
                </CardContent>
              </Card>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/contact">Nous contacter</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/#formations">Voir nos formations</Link>
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
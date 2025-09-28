"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  GraduationCap,
  Briefcase,
  CreditCard,
  FileText,
  CheckCircle2,
  AlertCircle,
  Shield,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
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
    className={`w-full max-w-4xl mx-auto px-6 md:px-8 ${className}`}
  >
    {children}
  </section>
);

interface FormData {
  // Informations personnelles
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  birthDate: string;
  birthPlace: string;
  nationality: string;
  address: string;
  city: string;
  postalCode: string;
  
  // Informations professionnelles
  currentSituation: string;
  company: string;
  position: string;
  experience: string;
  
  // Formation
  sessionChoice: string;
  urgency: string;
  
  // Financement
  financingMethod: string;
  employerName: string;
  
  // Motivation
  motivation: string;
  goals: string;
  
  // Acceptation
  acceptTerms: boolean;
  acceptDataProcessing: boolean;
  acceptCommercial: boolean;
}

export default function TFPASAT10Registration() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    birthDate: "",
    birthPlace: "",
    nationality: "Française",
    address: "",
    city: "",
    postalCode: "",
    currentSituation: "",
    company: "",
    position: "",
    experience: "",
    sessionChoice: "",
    urgency: "",
    financingMethod: "",
    employerName: "",
    motivation: "",
    goals: "",
    acceptTerms: false,
    acceptDataProcessing: false,
    acceptCommercial: false,
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (field: keyof FormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    // Validation des champs obligatoires
    if (!formData.firstName.trim()) newErrors.firstName = "Le prénom est obligatoire";
    if (!formData.lastName.trim()) newErrors.lastName = "Le nom est obligatoire";
    if (!formData.email.trim()) newErrors.email = "L'email est obligatoire";
    if (!formData.phone.trim()) newErrors.phone = "Le téléphone est obligatoire";
    if (!formData.birthDate) newErrors.birthDate = "La date de naissance est obligatoire";
    if (!formData.address.trim()) newErrors.address = "L'adresse est obligatoire";
    if (!formData.city.trim()) newErrors.city = "La ville est obligatoire";
    if (!formData.postalCode.trim()) newErrors.postalCode = "Le code postal est obligatoire";
    if (!formData.currentSituation) newErrors.currentSituation = "La situation actuelle est obligatoire";
    if (!formData.sessionChoice) newErrors.sessionChoice = "Le choix de session est obligatoire";
    if (!formData.financingMethod) newErrors.financingMethod = "Le mode de financement est obligatoire";
    if (!formData.motivation.trim()) newErrors.motivation = "La motivation est obligatoire";
    if (!formData.acceptTerms) newErrors.acceptTerms = "Vous devez accepter les conditions générales";
    if (!formData.acceptDataProcessing) newErrors.acceptDataProcessing = "Vous devez accepter le traitement des données";

    // Validation de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = "Format d'email invalide";
    }

    // Validation du téléphone
    const phoneRegex = /^[0-9+\s-()]{10,}$/;
    if (formData.phone && !phoneRegex.test(formData.phone)) {
      newErrors.phone = "Format de téléphone invalide";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Simulation d'envoi
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log("Données d'inscription TFP ASA T10:", formData);
      setIsSubmitted(true);
    } catch (error) {
      console.error("Erreur lors de l'envoi:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Section className="text-center py-16">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto">
            <CheckCircle2 className="h-16 w-16 text-green-600 mx-auto mb-4" />
            <h1 className="text-2xl font-bold mb-4">Inscription envoyée !</h1>
            <p className="text-gray-600 mb-6">
              Votre demande d'inscription au TFP ASA T10 a été envoyée avec succès. 
              Nous vous contacterons dans les plus brefs délais.
            </p>
            <div className="space-y-3">
              <Button asChild className="w-full">
                <Link href="/formation/tfp-asa-t10">Retour à la formation</Link>
              </Button>
              <Button asChild variant="outline" className="w-full">
                <Link href="/">Retour à l'accueil</Link>
              </Button>
            </div>
          </div>
        </Section>
      </div>
    );
  }

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
      <section className="bg-gradient-to-r from-red-900 to-red-700 text-white py-12">
        <Section>
          <Link
            href="/formation/tfp-asa-t10"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            Retour à la formation TFP ASA T10
          </Link>
          <div className="flex items-center gap-2 mb-4">
            <Shield className="h-6 w-6" />
            <Badge variant="secondary">Inscription TFP ASA T10</Badge>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Inscription TFP ASA T10
          </h1>
          <p className="text-lg text-white/90">
            Titre à Finalité Professionnelle Agent de Sûreté Aéroportuaire Typologie 10
          </p>
        </Section>
      </section>

      {/* Formulaire d'inscription */}
      <Section className="py-12">
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Informations personnelles */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5 text-red-600" />
                Informations personnelles
              </CardTitle>
              <CardDescription>
                Renseignez vos informations personnelles
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">Prénom *</Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange("firstName", e.target.value)}
                    className={errors.firstName ? "border-red-500" : ""}
                  />
                  {errors.firstName && (
                    <p className="text-sm text-red-600 mt-1">{errors.firstName}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="lastName">Nom *</Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange("lastName", e.target.value)}
                    className={errors.lastName ? "border-red-500" : ""}
                  />
                  {errors.lastName && (
                    <p className="text-sm text-red-600 mt-1">{errors.lastName}</p>
                  )}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className={errors.email ? "border-red-500" : ""}
                  />
                  {errors.email && (
                    <p className="text-sm text-red-600 mt-1">{errors.email}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="phone">Téléphone *</Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className={errors.phone ? "border-red-500" : ""}
                  />
                  {errors.phone && (
                    <p className="text-sm text-red-600 mt-1">{errors.phone}</p>
                  )}
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="birthDate">Date de naissance *</Label>
                  <Input
                    id="birthDate"
                    type="date"
                    value={formData.birthDate}
                    onChange={(e) => handleInputChange("birthDate", e.target.value)}
                    className={errors.birthDate ? "border-red-500" : ""}
                  />
                  {errors.birthDate && (
                    <p className="text-sm text-red-600 mt-1">{errors.birthDate}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="birthPlace">Lieu de naissance</Label>
                  <Input
                    id="birthPlace"
                    value={formData.birthPlace}
                    onChange={(e) => handleInputChange("birthPlace", e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="nationality">Nationalité</Label>
                  <Select value={formData.nationality} onValueChange={(value) => handleInputChange("nationality", value)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Française">Française</SelectItem>
                      <SelectItem value="Européenne">Européenne</SelectItem>
                      <SelectItem value="Autre">Autre</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="address">Adresse *</Label>
                <Input
                  id="address"
                  value={formData.address}
                  onChange={(e) => handleInputChange("address", e.target.value)}
                  className={errors.address ? "border-red-500" : ""}
                />
                {errors.address && (
                  <p className="text-sm text-red-600 mt-1">{errors.address}</p>
                )}
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="city">Ville *</Label>
                  <Input
                    id="city"
                    value={formData.city}
                    onChange={(e) => handleInputChange("city", e.target.value)}
                    className={errors.city ? "border-red-500" : ""}
                  />
                  {errors.city && (
                    <p className="text-sm text-red-600 mt-1">{errors.city}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="postalCode">Code postal *</Label>
                  <Input
                    id="postalCode"
                    value={formData.postalCode}
                    onChange={(e) => handleInputChange("postalCode", e.target.value)}
                    className={errors.postalCode ? "border-red-500" : ""}
                  />
                  {errors.postalCode && (
                    <p className="text-sm text-red-600 mt-1">{errors.postalCode}</p>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Informations professionnelles */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Briefcase className="h-5 w-5 text-red-600" />
                Informations professionnelles
              </CardTitle>
              <CardDescription>
                Votre situation professionnelle actuelle
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="currentSituation">Situation actuelle *</Label>
                <Select value={formData.currentSituation} onValueChange={(value) => handleInputChange("currentSituation", value)}>
                  <SelectTrigger className={errors.currentSituation ? "border-red-500" : ""}>
                    <SelectValue placeholder="Sélectionnez votre situation" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="emploi">En emploi</SelectItem>
                    <SelectItem value="chomage">Demandeur d'emploi</SelectItem>
                    <SelectItem value="etudiant">Étudiant</SelectItem>
                    <SelectItem value="reconversion">En reconversion</SelectItem>
                    <SelectItem value="autre">Autre</SelectItem>
                  </SelectContent>
                </Select>
                {errors.currentSituation && (
                  <p className="text-sm text-red-600 mt-1">{errors.currentSituation}</p>
                )}
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="company">Entreprise actuelle</Label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) => handleInputChange("company", e.target.value)}
                    placeholder="Si en emploi"
                  />
                </div>
                <div>
                  <Label htmlFor="position">Poste actuel</Label>
                  <Input
                    id="position"
                    value={formData.position}
                    onChange={(e) => handleInputChange("position", e.target.value)}
                    placeholder="Si en emploi"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="experience">Expérience dans la sûreté/sécurité</Label>
                <Select value={formData.experience} onValueChange={(value) => handleInputChange("experience", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionnez votre niveau d'expérience" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="aucune">Aucune expérience</SelectItem>
                    <SelectItem value="moins-1an">Moins d'1 an</SelectItem>
                    <SelectItem value="1-3ans">1 à 3 ans</SelectItem>
                    <SelectItem value="3-5ans">3 à 5 ans</SelectItem>
                    <SelectItem value="plus-5ans">Plus de 5 ans</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Choix de formation */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-red-600" />
                Choix de formation
              </CardTitle>
              <CardDescription>
                Préférences pour votre formation TFP ASA T10
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="sessionChoice">Session souhaitée *</Label>
                <Select value={formData.sessionChoice} onValueChange={(value) => handleInputChange("sessionChoice", value)}>
                  <SelectTrigger className={errors.sessionChoice ? "border-red-500" : ""}>
                    <SelectValue placeholder="Choisissez une session" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="janvier-2024">Janvier 2024</SelectItem>
                    <SelectItem value="fevrier-2024">Février 2024</SelectItem>
                    <SelectItem value="mars-2024">Mars 2024</SelectItem>
                    <SelectItem value="avril-2024">Avril 2024</SelectItem>
                    <SelectItem value="mai-2024">Mai 2024</SelectItem>
                    <SelectItem value="juin-2024">Juin 2024</SelectItem>
                    <SelectItem value="flexible">Flexible</SelectItem>
                  </SelectContent>
                </Select>
                {errors.sessionChoice && (
                  <p className="text-sm text-red-600 mt-1">{errors.sessionChoice}</p>
                )}
              </div>

              <div>
                <Label htmlFor="urgency">Urgence de la formation</Label>
                <Select value={formData.urgency} onValueChange={(value) => handleInputChange("urgency", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Niveau d'urgence" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="tres-urgent">Très urgent (moins d'1 mois)</SelectItem>
                    <SelectItem value="urgent">Urgent (1-2 mois)</SelectItem>
                    <SelectItem value="normal">Normal (2-3 mois)</SelectItem>
                    <SelectItem value="flexible">Flexible (plus de 3 mois)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Financement */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="h-5 w-5 text-red-600" />
                Financement
              </CardTitle>
              <CardDescription>
                Mode de financement de votre formation (2 890€)
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="financingMethod">Mode de financement *</Label>
                <Select value={formData.financingMethod} onValueChange={(value) => handleInputChange("financingMethod", value)}>
                  <SelectTrigger className={errors.financingMethod ? "border-red-500" : ""}>
                    <SelectValue placeholder="Choisissez le mode de financement" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cpf">CPF (Compte Personnel de Formation)</SelectItem>
                    <SelectItem value="pole-emploi">Pôle Emploi</SelectItem>
                    <SelectItem value="entreprise">Financement entreprise</SelectItem>
                    <SelectItem value="personnel">Financement personnel</SelectItem>
                    <SelectItem value="region">Financement région</SelectItem>
                    <SelectItem value="autre">Autre</SelectItem>
                  </SelectContent>
                </Select>
                {errors.financingMethod && (
                  <p className="text-sm text-red-600 mt-1">{errors.financingMethod}</p>
                )}
              </div>

              {formData.financingMethod === "entreprise" && (
                <div>
                  <Label htmlFor="employerName">Nom de l'entreprise</Label>
                  <Input
                    id="employerName"
                    value={formData.employerName}
                    onChange={(e) => handleInputChange("employerName", e.target.value)}
                    placeholder="Nom de l'entreprise qui finance"
                  />
                </div>
              )}
            </CardContent>
          </Card>

          {/* Motivation */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-red-600" />
                Motivation et objectifs
              </CardTitle>
              <CardDescription>
                Parlez-nous de votre projet professionnel
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="motivation">Motivation pour cette formation *</Label>
                <Textarea
                  id="motivation"
                  value={formData.motivation}
                  onChange={(e) => handleInputChange("motivation", e.target.value)}
                  placeholder="Expliquez pourquoi vous souhaitez suivre cette formation TFP ASA T10..."
                  className={`min-h-[100px] ${errors.motivation ? "border-red-500" : ""}`}
                />
                {errors.motivation && (
                  <p className="text-sm text-red-600 mt-1">{errors.motivation}</p>
                )}
              </div>

              <div>
                <Label htmlFor="goals">Objectifs professionnels</Label>
                <Textarea
                  id="goals"
                  value={formData.goals}
                  onChange={(e) => handleInputChange("goals", e.target.value)}
                  placeholder="Quels sont vos objectifs après cette formation ? Dans quel type d'entreprise souhaitez-vous travailler ?"
                  className="min-h-[80px]"
                />
              </div>
            </CardContent>
          </Card>

          {/* Acceptation des conditions */}
          <Card>
            <CardHeader>
              <CardTitle>Conditions générales</CardTitle>
              <CardDescription>
                Veuillez lire et accepter les conditions suivantes
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start space-x-2">
                <Checkbox
                  id="acceptTerms"
                  checked={formData.acceptTerms}
                  onCheckedChange={(checked) => handleInputChange("acceptTerms", checked as boolean)}
                  className={errors.acceptTerms ? "border-red-500" : ""}
                />
                <div className="grid gap-1.5 leading-none">
                  <Label htmlFor="acceptTerms" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    J'accepte les conditions générales de vente *
                  </Label>
                  <p className="text-xs text-muted-foreground">
                    En cochant cette case, vous acceptez nos conditions générales de vente et notre règlement intérieur.
                  </p>
                  {errors.acceptTerms && (
                    <p className="text-xs text-red-600">{errors.acceptTerms}</p>
                  )}
                </div>
              </div>

              <div className="flex items-start space-x-2">
                <Checkbox
                  id="acceptDataProcessing"
                  checked={formData.acceptDataProcessing}
                  onCheckedChange={(checked) => handleInputChange("acceptDataProcessing", checked as boolean)}
                  className={errors.acceptDataProcessing ? "border-red-500" : ""}
                />
                <div className="grid gap-1.5 leading-none">
                  <Label htmlFor="acceptDataProcessing" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    J'accepte le traitement de mes données personnelles *
                  </Label>
                  <p className="text-xs text-muted-foreground">
                    Conformément au RGPD, vos données seront utilisées uniquement pour le traitement de votre inscription.
                  </p>
                  {errors.acceptDataProcessing && (
                    <p className="text-xs text-red-600">{errors.acceptDataProcessing}</p>
                  )}
                </div>
              </div>

              <div className="flex items-start space-x-2">
                <Checkbox
                  id="acceptCommercial"
                  checked={formData.acceptCommercial}
                  onCheckedChange={(checked) => handleInputChange("acceptCommercial", checked as boolean)}
                />
                <div className="grid gap-1.5 leading-none">
                  <Label htmlFor="acceptCommercial" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    J'accepte de recevoir des informations commerciales
                  </Label>
                  <p className="text-xs text-muted-foreground">
                    Recevez nos actualités et offres de formation par email (optionnel).
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Bouton de soumission */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting}
              style={{ backgroundColor: BRAND.primary, color: "white" }}
              className="shadow-lg"
            >
              {isSubmitting ? "Envoi en cours..." : "Envoyer ma demande d'inscription"}
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/formation/tfp-asa-t10">Retour à la formation</Link>
            </Button>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <div className="text-sm text-blue-800">
                <p className="font-semibold mb-1">Information importante</p>
                <p>
                  Après envoi de votre demande, nous vous contacterons dans les 48h pour valider votre inscription 
                  et vous communiquer les modalités pratiques de la formation.
                </p>
              </div>
            </div>
          </div>
        </form>
      </Section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-16">
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
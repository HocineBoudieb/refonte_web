"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Clock,
  Euro,
  Users,
  CheckCircle2,
  Calendar,
  MapPin,
  Phone,
  Mail,
  User,
  FileText,
  CreditCard,
  Accessibility,
  AlertCircle,
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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Alert, AlertDescription } from "@/components/ui/alert";

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

type FormData = {
  // Informations personnelles
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  placeOfBirth: string;
  nationality: string;
  address: string;
  postalCode: string;
  city: string;
  
  // Informations professionnelles
  currentSituation: string;
  company?: string;
  jobTitle?: string;
  experience: string;
  
  // Formation
  sessionChoice: string;
  financingMethod: string;
  specialNeeds?: string;
  
  // Documents et acceptation
  hasCleanRecord: boolean;
  acceptsTerms: boolean;
  acceptsDataProcessing: boolean;
  wantsNewsletter: boolean;
  
  // Motivation
  motivation: string;
};

const initialFormData: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  dateOfBirth: "",
  placeOfBirth: "",
  nationality: "Française",
  address: "",
  postalCode: "",
  city: "",
  currentSituation: "",
  company: "",
  jobTitle: "",
  experience: "",
  sessionChoice: "",
  financingMethod: "",
  specialNeeds: "",
  hasCleanRecord: false,
  acceptsTerms: false,
  acceptsDataProcessing: false,
  wantsNewsletter: false,
  motivation: "",
};

export default function APMRInscription() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    // Validation des champs obligatoires
    if (!formData.firstName.trim()) newErrors.firstName = "Le prénom est obligatoire";
    if (!formData.lastName.trim()) newErrors.lastName = "Le nom est obligatoire";
    if (!formData.email.trim()) newErrors.email = "L'email est obligatoire";
    if (!formData.phone.trim()) newErrors.phone = "Le téléphone est obligatoire";
    if (!formData.dateOfBirth) newErrors.dateOfBirth = "La date de naissance est obligatoire";
    if (!formData.address.trim()) newErrors.address = "L'adresse est obligatoire";
    if (!formData.postalCode.trim()) newErrors.postalCode = "Le code postal est obligatoire";
    if (!formData.city.trim()) newErrors.city = "La ville est obligatoire";
    if (!formData.currentSituation) newErrors.currentSituation = "La situation actuelle est obligatoire";
    if (!formData.sessionChoice) newErrors.sessionChoice = "Le choix de session est obligatoire";
    if (!formData.financingMethod) newErrors.financingMethod = "Le mode de financement est obligatoire";
    if (!formData.motivation.trim()) newErrors.motivation = "La lettre de motivation est obligatoire";
    
    // Validation email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = "Format d'email invalide";
    }
    
    // Validation téléphone
    const phoneRegex = /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/;
    if (formData.phone && !phoneRegex.test(formData.phone.replace(/\s/g, ""))) {
      newErrors.phone = "Format de téléphone invalide";
    }
    
    // Validation acceptation des conditions
    if (!formData.hasCleanRecord) newErrors.hasCleanRecord = "Vous devez confirmer avoir un casier judiciaire vierge";
    if (!formData.acceptsTerms) newErrors.acceptsTerms = "Vous devez accepter les conditions générales";
    if (!formData.acceptsDataProcessing) newErrors.acceptsDataProcessing = "Vous devez accepter le traitement des données";

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
      // Simulation d'envoi de formulaire
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log("Données du formulaire:", formData);
      setIsSubmitted(true);
    } catch (error) {
      console.error("Erreur lors de l'envoi:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof FormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Effacer l'erreur si elle existe
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Card className="max-w-md mx-auto">
          <CardHeader className="text-center">
            <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <CheckCircle2 className="h-6 w-6 text-green-600" />
            </div>
            <CardTitle className="text-2xl">Inscription envoyée !</CardTitle>
            <CardDescription>
              Votre demande d'inscription à la formation APMR a été transmise avec succès.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p className="text-sm text-gray-600">
              Nous vous contacterons dans les plus brefs délais pour confirmer votre inscription et vous communiquer les modalités pratiques.
            </p>
            <div className="flex flex-col gap-2">
              <Button asChild>
                <Link href="/formation/apmr">Retour à la formation</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/">Accueil</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
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
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-12">
        <Section>
          <Link
            href="/formation/apmr"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            Retour à la formation APMR
          </Link>
          <div className="flex items-center gap-2 mb-4">
            <Accessibility className="h-6 w-6" />
            <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Inscription</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Inscription Formation APMR
          </h1>
          <p className="text-lg text-white/90 mb-6">
            Accompagnement aux Personnes à Mobilité Réduite
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
        </Section>
      </section>

      {/* Formulaire d'inscription */}
      <Section className="py-12">
        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Informations personnelles */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  Informations personnelles
                </CardTitle>
                <CardDescription>
                  Renseignez vos informations personnelles
                </CardDescription>
              </CardHeader>
              <CardContent className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName">Prénom *</Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange("firstName", e.target.value)}
                    className={errors.firstName ? "border-red-500" : ""}
                  />
                  {errors.firstName && (
                    <p className="text-sm text-red-500">{errors.firstName}</p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="lastName">Nom *</Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange("lastName", e.target.value)}
                    className={errors.lastName ? "border-red-500" : ""}
                  />
                  {errors.lastName && (
                    <p className="text-sm text-red-500">{errors.lastName}</p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className={errors.email ? "border-red-500" : ""}
                  />
                  {errors.email && (
                    <p className="text-sm text-red-500">{errors.email}</p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Téléphone *</Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    placeholder="06 12 34 56 78"
                    className={errors.phone ? "border-red-500" : ""}
                  />
                  {errors.phone && (
                    <p className="text-sm text-red-500">{errors.phone}</p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="dateOfBirth">Date de naissance *</Label>
                  <Input
                    id="dateOfBirth"
                    type="date"
                    value={formData.dateOfBirth}
                    onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}
                    className={errors.dateOfBirth ? "border-red-500" : ""}
                  />
                  {errors.dateOfBirth && (
                    <p className="text-sm text-red-500">{errors.dateOfBirth}</p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="placeOfBirth">Lieu de naissance</Label>
                  <Input
                    id="placeOfBirth"
                    value={formData.placeOfBirth}
                    onChange={(e) => handleInputChange("placeOfBirth", e.target.value)}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="nationality">Nationalité</Label>
                  <Select
                    value={formData.nationality}
                    onValueChange={(value) => handleInputChange("nationality", value)}
                  >
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
                
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="address">Adresse *</Label>
                  <Input
                    id="address"
                    value={formData.address}
                    onChange={(e) => handleInputChange("address", e.target.value)}
                    className={errors.address ? "border-red-500" : ""}
                  />
                  {errors.address && (
                    <p className="text-sm text-red-500">{errors.address}</p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="postalCode">Code postal *</Label>
                  <Input
                    id="postalCode"
                    value={formData.postalCode}
                    onChange={(e) => handleInputChange("postalCode", e.target.value)}
                    className={errors.postalCode ? "border-red-500" : ""}
                  />
                  {errors.postalCode && (
                    <p className="text-sm text-red-500">{errors.postalCode}</p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="city">Ville *</Label>
                  <Input
                    id="city"
                    value={formData.city}
                    onChange={(e) => handleInputChange("city", e.target.value)}
                    className={errors.city ? "border-red-500" : ""}
                  />
                  {errors.city && (
                    <p className="text-sm text-red-500">{errors.city}</p>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Informations professionnelles */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Situation professionnelle
                </CardTitle>
                <CardDescription>
                  Décrivez votre situation actuelle
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label>Situation actuelle *</Label>
                  <RadioGroup
                    value={formData.currentSituation}
                    onValueChange={(value) => handleInputChange("currentSituation", value)}
                    className="grid md:grid-cols-2 gap-4"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="employed" id="employed" />
                      <Label htmlFor="employed">Salarié(e)</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="unemployed" id="unemployed" />
                      <Label htmlFor="unemployed">Demandeur d'emploi</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="student" id="student" />
                      <Label htmlFor="student">Étudiant(e)</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="other" id="other" />
                      <Label htmlFor="other">Autre</Label>
                    </div>
                  </RadioGroup>
                  {errors.currentSituation && (
                    <p className="text-sm text-red-500">{errors.currentSituation}</p>
                  )}
                </div>
                
                {(formData.currentSituation === "employed" || formData.currentSituation === "other") && (
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="company">Entreprise</Label>
                      <Input
                        id="company"
                        value={formData.company || ""}
                        onChange={(e) => handleInputChange("company", e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="jobTitle">Poste occupé</Label>
                      <Input
                        id="jobTitle"
                        value={formData.jobTitle || ""}
                        onChange={(e) => handleInputChange("jobTitle", e.target.value)}
                      />
                    </div>
                  </div>
                )}
                
                <div className="space-y-2">
                  <Label>Expérience dans le secteur aéroportuaire</Label>
                  <RadioGroup
                    value={formData.experience}
                    onValueChange={(value) => handleInputChange("experience", value)}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="none" id="exp-none" />
                      <Label htmlFor="exp-none">Aucune expérience</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="less-1" id="exp-less-1" />
                      <Label htmlFor="exp-less-1">Moins d'1 an</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="1-3" id="exp-1-3" />
                      <Label htmlFor="exp-1-3">1 à 3 ans</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="more-3" id="exp-more-3" />
                      <Label htmlFor="exp-more-3">Plus de 3 ans</Label>
                    </div>
                  </RadioGroup>
                </div>
              </CardContent>
            </Card>

            {/* Choix de formation */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Modalités de formation
                </CardTitle>
                <CardDescription>
                  Choisissez votre session et mode de financement
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="sessionChoice">Session souhaitée *</Label>
                  <Select
                    value={formData.sessionChoice}
                    onValueChange={(value) => handleInputChange("sessionChoice", value)}
                  >
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
                    </SelectContent>
                  </Select>
                  {errors.sessionChoice && (
                    <p className="text-sm text-red-500">{errors.sessionChoice}</p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <Label>Mode de financement *</Label>
                  <RadioGroup
                    value={formData.financingMethod}
                    onValueChange={(value) => handleInputChange("financingMethod", value)}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="cpf" id="cpf" />
                      <Label htmlFor="cpf">CPF (Compte Personnel de Formation)</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="pole-emploi" id="pole-emploi" />
                      <Label htmlFor="pole-emploi">Pôle Emploi</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="company" id="company" />
                      <Label htmlFor="company">Financement entreprise</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="personal" id="personal" />
                      <Label htmlFor="personal">Financement personnel</Label>
                    </div>
                  </RadioGroup>
                  {errors.financingMethod && (
                    <p className="text-sm text-red-500">{errors.financingMethod}</p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="specialNeeds">Besoins spécifiques ou handicap</Label>
                  <Textarea
                    id="specialNeeds"
                    value={formData.specialNeeds || ""}
                    onChange={(e) => handleInputChange("specialNeeds", e.target.value)}
                    placeholder="Décrivez vos éventuels besoins d'adaptation..."
                    rows={3}
                  />
                  <p className="text-sm text-gray-500">
                    Ces informations nous permettront d'adapter la formation à vos besoins.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Motivation */}
            <Card>
              <CardHeader>
                <CardTitle>Lettre de motivation</CardTitle>
                <CardDescription>
                  Expliquez votre motivation pour cette formation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Label htmlFor="motivation">Votre motivation *</Label>
                  <Textarea
                    id="motivation"
                    value={formData.motivation}
                    onChange={(e) => handleInputChange("motivation", e.target.value)}
                    placeholder="Décrivez votre projet professionnel et votre motivation pour la formation APMR..."
                    rows={6}
                    className={errors.motivation ? "border-red-500" : ""}
                  />
                  {errors.motivation && (
                    <p className="text-sm text-red-500">{errors.motivation}</p>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Conditions et validation */}
            <Card>
              <CardHeader>
                <CardTitle>Conditions et validation</CardTitle>
                <CardDescription>
                  Acceptation des conditions et validation du dossier
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Alert>
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>
                    Un casier judiciaire B3 vierge (datant de moins de 3 mois) sera demandé pour valider votre inscription.
                  </AlertDescription>
                </Alert>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="hasCleanRecord"
                      checked={formData.hasCleanRecord}
                      onCheckedChange={(checked) => handleInputChange("hasCleanRecord", checked as boolean)}
                      className={errors.hasCleanRecord ? "border-red-500" : ""}
                    />
                    <Label htmlFor="hasCleanRecord" className="text-sm leading-5">
                      Je certifie avoir un casier judiciaire B3 vierge et m'engage à le fournir lors de l'inscription définitive *
                    </Label>
                  </div>
                  {errors.hasCleanRecord && (
                    <p className="text-sm text-red-500 ml-6">{errors.hasCleanRecord}</p>
                  )}
                  
                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="acceptsTerms"
                      checked={formData.acceptsTerms}
                      onCheckedChange={(checked) => handleInputChange("acceptsTerms", checked as boolean)}
                      className={errors.acceptsTerms ? "border-red-500" : ""}
                    />
                    <Label htmlFor="acceptsTerms" className="text-sm leading-5">
                      J'accepte les{" "}
                      <Link href="#" className="text-blue-600 hover:underline">
                        conditions générales de vente
                      </Link>{" "}
                      et le{" "}
                      <Link href="#" className="text-blue-600 hover:underline">
                        règlement intérieur
                      </Link>{" "}
                      de Flyness Training *
                    </Label>
                  </div>
                  {errors.acceptsTerms && (
                    <p className="text-sm text-red-500 ml-6">{errors.acceptsTerms}</p>
                  )}
                  
                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="acceptsDataProcessing"
                      checked={formData.acceptsDataProcessing}
                      onCheckedChange={(checked) => handleInputChange("acceptsDataProcessing", checked as boolean)}
                      className={errors.acceptsDataProcessing ? "border-red-500" : ""}
                    />
                    <Label htmlFor="acceptsDataProcessing" className="text-sm leading-5">
                      J'accepte le traitement de mes données personnelles conformément à la{" "}
                      <Link href="#" className="text-blue-600 hover:underline">
                        politique de confidentialité
                      </Link>{" "}
                      *
                    </Label>
                  </div>
                  {errors.acceptsDataProcessing && (
                    <p className="text-sm text-red-500 ml-6">{errors.acceptsDataProcessing}</p>
                  )}
                  
                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="wantsNewsletter"
                      checked={formData.wantsNewsletter}
                      onCheckedChange={(checked) => handleInputChange("wantsNewsletter", checked as boolean)}
                    />
                    <Label htmlFor="wantsNewsletter" className="text-sm leading-5">
                      Je souhaite recevoir la newsletter de Flyness Training avec les actualités et nouvelles formations
                    </Label>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Boutons de soumission */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                style={{ backgroundColor: BRAND.primary, color: "white" }}
                className="shadow-lg"
              >
                {isSubmitting ? "Envoi en cours..." : "Envoyer ma candidature"}
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/formation/apmr">Retour à la formation</Link>
              </Button>
            </div>
          </form>
        </div>
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
            <div>
              <h3 className="font-semibold mb-4">Informations</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="#" className="hover:text-white">Conditions générales</Link></li>
                <li><Link href="#" className="hover:text-white">Politique de confidentialité</Link></li>
                <li><Link href="#" className="hover:text-white">Règlement intérieur</Link></li>
                <li><Link href="/#contact" className="hover:text-white">Contact</Link></li>
              </ul>
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
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
  Euro,
  FileText,
  CheckCircle2,
  AlertCircle,
  Upload,
  Shield,
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

type FormData = {
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
  opcoName: string;
  
  // Motivation
  motivation: string;
  goals: string;
  
  // Documents et acceptation
  hasCleanRecord: boolean;
  hasMedicalFitness: boolean;
  acceptsTerms: boolean;
  acceptsDataProcessing: boolean;
  wantsNewsletter: boolean;
};

type FormErrors = {
  [K in keyof FormData]?: string;
};

export default function TFPASAT7Registration() {
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
    opcoName: "",
    motivation: "",
    goals: "",
    hasCleanRecord: false,
    hasMedicalFitness: false,
    acceptsTerms: false,
    acceptsDataProcessing: false,
    wantsNewsletter: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Validation des champs obligatoires
    if (!formData.firstName.trim()) newErrors.firstName = "Le prénom est obligatoire";
    if (!formData.lastName.trim()) newErrors.lastName = "Le nom est obligatoire";
    if (!formData.email.trim()) {
      newErrors.email = "L'email est obligatoire";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Format d'email invalide";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Le téléphone est obligatoire";
    } else if (!/^[0-9\s\-\+\(\)]{10,}$/.test(formData.phone.replace(/\s/g, ""))) {
      newErrors.phone = "Format de téléphone invalide";
    }
    if (!formData.birthDate) newErrors.birthDate = "La date de naissance est obligatoire";
    if (!formData.birthPlace.trim()) newErrors.birthPlace = "Le lieu de naissance est obligatoire";
    if (!formData.address.trim()) newErrors.address = "L'adresse est obligatoire";
    if (!formData.city.trim()) newErrors.city = "La ville est obligatoire";
    if (!formData.postalCode.trim()) {
      newErrors.postalCode = "Le code postal est obligatoire";
    } else if (!/^[0-9]{5}$/.test(formData.postalCode)) {
      newErrors.postalCode = "Le code postal doit contenir 5 chiffres";
    }
    if (!formData.currentSituation) newErrors.currentSituation = "La situation actuelle est obligatoire";
    if (!formData.sessionChoice) newErrors.sessionChoice = "Le choix de session est obligatoire";
    if (!formData.financingMethod) newErrors.financingMethod = "Le mode de financement est obligatoire";
    if (!formData.motivation.trim()) newErrors.motivation = "La motivation est obligatoire";
    
    // Validation des cases à cocher obligatoires
    if (!formData.hasCleanRecord) newErrors.hasCleanRecord = "Cette attestation est obligatoire";
    if (!formData.hasMedicalFitness) newErrors.hasMedicalFitness = "Cette attestation est obligatoire";
    if (!formData.acceptsTerms) newErrors.acceptsTerms = "L'acceptation des conditions est obligatoire";
    if (!formData.acceptsDataProcessing) newErrors.acceptsDataProcessing = "L'acceptation du traitement des données est obligatoire";

    // Validation conditionnelle
    if (formData.financingMethod === "employeur" && !formData.employerName.trim()) {
      newErrors.employerName = "Le nom de l'employeur est obligatoire";
    }
    if (formData.financingMethod === "opco" && !formData.opcoName.trim()) {
      newErrors.opcoName = "Le nom de l'OPCO est obligatoire";
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
      
      console.log("Données du formulaire TFP ASA T7:", formData);
      setIsSubmitted(true);
    } catch (error) {
      console.error("Erreur lors de l'envoi:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const updateFormData = (field: keyof FormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
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
            <CardTitle className="text-green-800">Inscription envoyée !</CardTitle>
            <CardDescription>
              Votre demande d'inscription au TFP ASA T7 a été transmise avec succès.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p className="text-sm text-gray-600">
              Nous vous contacterons dans les plus brefs délais pour confirmer votre inscription et vous communiquer les modalités pratiques.
            </p>
            <div className="space-y-2">
              <Button asChild className="w-full">
                <Link href="/formation/tfp-asa-t7">Retour à la formation</Link>
              </Button>
              <Button asChild variant="outline" className="w-full">
                <Link href="/">Retour à l'accueil</Link>
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
      <section className="bg-gradient-to-r from-red-900 to-red-700 text-white py-12">
        <Section>
          <Link
            href="/formation/tfp-asa-t7"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            Retour à la formation TFP ASA T7
          </Link>
          <div className="flex items-center gap-2 mb-4">
            <Shield className="h-6 w-6" />
            <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Sûreté Aéroportuaire</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Inscription TFP ASA T7
          </h1>
          <p className="text-lg text-white/90">
            Titre à Finalité Professionnelle Agent de Sûreté Aéroportuaire Typologie 7
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
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">Prénom *</Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => updateFormData("firstName", e.target.value)}
                    className={errors.firstName ? "border-red-500" : ""}
                  />
                  {errors.firstName && (
                    <p className="text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle className="h-4 w-4" />
                      {errors.firstName}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Nom *</Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => updateFormData("lastName", e.target.value)}
                    className={errors.lastName ? "border-red-500" : ""}
                  />
                  {errors.lastName && (
                    <p className="text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle className="h-4 w-4" />
                      {errors.lastName}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => updateFormData("email", e.target.value)}
                    className={errors.email ? "border-red-500" : ""}
                  />
                  {errors.email && (
                    <p className="text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle className="h-4 w-4" />
                      {errors.email}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Téléphone *</Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => updateFormData("phone", e.target.value)}
                    placeholder="06 12 34 56 78"
                    className={errors.phone ? "border-red-500" : ""}
                  />
                  {errors.phone && (
                    <p className="text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle className="h-4 w-4" />
                      {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="birthDate">Date de naissance *</Label>
                  <Input
                    id="birthDate"
                    type="date"
                    value={formData.birthDate}
                    onChange={(e) => updateFormData("birthDate", e.target.value)}
                    className={errors.birthDate ? "border-red-500" : ""}
                  />
                  {errors.birthDate && (
                    <p className="text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle className="h-4 w-4" />
                      {errors.birthDate}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="birthPlace">Lieu de naissance *</Label>
                  <Input
                    id="birthPlace"
                    value={formData.birthPlace}
                    onChange={(e) => updateFormData("birthPlace", e.target.value)}
                    className={errors.birthPlace ? "border-red-500" : ""}
                  />
                  {errors.birthPlace && (
                    <p className="text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle className="h-4 w-4" />
                      {errors.birthPlace}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="nationality">Nationalité *</Label>
                  <Select value={formData.nationality} onValueChange={(value) => updateFormData("nationality", value)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Française">Française</SelectItem>
                      <SelectItem value="Union Européenne">Union Européenne</SelectItem>
                      <SelectItem value="Autre">Autre</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">Adresse *</Label>
                <Input
                  id="address"
                  value={formData.address}
                  onChange={(e) => updateFormData("address", e.target.value)}
                  className={errors.address ? "border-red-500" : ""}
                />
                {errors.address && (
                  <p className="text-sm text-red-600 flex items-center gap-1">
                    <AlertCircle className="h-4 w-4" />
                    {errors.address}
                  </p>
                )}
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="city">Ville *</Label>
                  <Input
                    id="city"
                    value={formData.city}
                    onChange={(e) => updateFormData("city", e.target.value)}
                    className={errors.city ? "border-red-500" : ""}
                  />
                  {errors.city && (
                    <p className="text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle className="h-4 w-4" />
                      {errors.city}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="postalCode">Code postal *</Label>
                  <Input
                    id="postalCode"
                    value={formData.postalCode}
                    onChange={(e) => updateFormData("postalCode", e.target.value)}
                    placeholder="75001"
                    className={errors.postalCode ? "border-red-500" : ""}
                  />
                  {errors.postalCode && (
                    <p className="text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle className="h-4 w-4" />
                      {errors.postalCode}
                    </p>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Informations professionnelles */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-red-600" />
                Situation professionnelle
              </CardTitle>
              <CardDescription>
                Décrivez votre situation actuelle
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="currentSituation">Situation actuelle *</Label>
                <Select value={formData.currentSituation} onValueChange={(value) => updateFormData("currentSituation", value)}>
                  <SelectTrigger className={errors.currentSituation ? "border-red-500" : ""}>
                    <SelectValue placeholder="Sélectionnez votre situation" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="demandeur-emploi">Demandeur d'emploi</SelectItem>
                    <SelectItem value="salarie">Salarié</SelectItem>
                    <SelectItem value="etudiant">Étudiant</SelectItem>
                    <SelectItem value="reconversion">En reconversion</SelectItem>
                    <SelectItem value="autre">Autre</SelectItem>
                  </SelectContent>
                </Select>
                {errors.currentSituation && (
                  <p className="text-sm text-red-600 flex items-center gap-1">
                    <AlertCircle className="h-4 w-4" />
                    {errors.currentSituation}
                  </p>
                )}
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="company">Entreprise actuelle (si applicable)</Label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) => updateFormData("company", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="position">Poste actuel (si applicable)</Label>
                  <Input
                    id="position"
                    value={formData.position}
                    onChange={(e) => updateFormData("position", e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="experience">Expérience dans la sûreté/sécurité</Label>
                <Textarea
                  id="experience"
                  value={formData.experience}
                  onChange={(e) => updateFormData("experience", e.target.value)}
                  placeholder="Décrivez votre expérience éventuelle dans le domaine de la sûreté, sécurité ou aéroportuaire..."
                  rows={3}
                />
              </div>
            </CardContent>
          </Card>

          {/* Choix de formation */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-red-600" />
                Choix de session
              </CardTitle>
              <CardDescription>
                Sélectionnez vos préférences de formation
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="sessionChoice">Session souhaitée *</Label>
                <Select value={formData.sessionChoice} onValueChange={(value) => updateFormData("sessionChoice", value)}>
                  <SelectTrigger className={errors.sessionChoice ? "border-red-500" : ""}>
                    <SelectValue placeholder="Sélectionnez une session" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="janvier-2024">Janvier 2024</SelectItem>
                    <SelectItem value="fevrier-2024">Février 2024</SelectItem>
                    <SelectItem value="mars-2024">Mars 2024</SelectItem>
                    <SelectItem value="avril-2024">Avril 2024</SelectItem>
                    <SelectItem value="mai-2024">Mai 2024</SelectItem>
                    <SelectItem value="juin-2024">Juin 2024</SelectItem>
                    <SelectItem value="flexible">Flexible (me contacter)</SelectItem>
                  </SelectContent>
                </Select>
                {errors.sessionChoice && (
                  <p className="text-sm text-red-600 flex items-center gap-1">
                    <AlertCircle className="h-4 w-4" />
                    {errors.sessionChoice}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="urgency">Urgence de la formation</Label>
                <RadioGroup value={formData.urgency} onValueChange={(value) => updateFormData("urgency", value)}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="immediate" id="immediate" />
                    <Label htmlFor="immediate">Immédiate (dans le mois)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="court-terme" id="court-terme" />
                    <Label htmlFor="court-terme">Court terme (1-3 mois)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="moyen-terme" id="moyen-terme" />
                    <Label htmlFor="moyen-terme">Moyen terme (3-6 mois)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="flexible" id="flexible" />
                    <Label htmlFor="flexible">Flexible</Label>
                  </div>
                </RadioGroup>
              </div>
            </CardContent>
          </Card>

          {/* Financement */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Euro className="h-5 w-5 text-red-600" />
                Financement
              </CardTitle>
              <CardDescription>
                Comment souhaitez-vous financer votre formation ? (Tarif : 2 890€)
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="financingMethod">Mode de financement *</Label>
                <Select value={formData.financingMethod} onValueChange={(value) => updateFormData("financingMethod", value)}>
                  <SelectTrigger className={errors.financingMethod ? "border-red-500" : ""}>
                    <SelectValue placeholder="Sélectionnez un mode de financement" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pole-emploi">Pôle Emploi</SelectItem>
                    <SelectItem value="cpf">CPF (Compte Personnel de Formation)</SelectItem>
                    <SelectItem value="employeur">Prise en charge employeur</SelectItem>
                    <SelectItem value="opco">OPCO</SelectItem>
                    <SelectItem value="personnel">Financement personnel</SelectItem>
                    <SelectItem value="autre">Autre (préciser)</SelectItem>
                  </SelectContent>
                </Select>
                {errors.financingMethod && (
                  <p className="text-sm text-red-600 flex items-center gap-1">
                    <AlertCircle className="h-4 w-4" />
                    {errors.financingMethod}
                  </p>
                )}
              </div>

              {formData.financingMethod === "employeur" && (
                <div className="space-y-2">
                  <Label htmlFor="employerName">Nom de l'employeur *</Label>
                  <Input
                    id="employerName"
                    value={formData.employerName}
                    onChange={(e) => updateFormData("employerName", e.target.value)}
                    className={errors.employerName ? "border-red-500" : ""}
                  />
                  {errors.employerName && (
                    <p className="text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle className="h-4 w-4" />
                      {errors.employerName}
                    </p>
                  )}
                </div>
              )}

              {formData.financingMethod === "opco" && (
                <div className="space-y-2">
                  <Label htmlFor="opcoName">Nom de l'OPCO *</Label>
                  <Input
                    id="opcoName"
                    value={formData.opcoName}
                    onChange={(e) => updateFormData("opcoName", e.target.value)}
                    placeholder="Ex: OPCO EP, AFDAS, ATLAS..."
                    className={errors.opcoName ? "border-red-500" : ""}
                  />
                  {errors.opcoName && (
                    <p className="text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle className="h-4 w-4" />
                      {errors.opcoName}
                    </p>
                  )}
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
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="motivation">Motivation pour cette formation *</Label>
                <Textarea
                  id="motivation"
                  value={formData.motivation}
                  onChange={(e) => updateFormData("motivation", e.target.value)}
                  placeholder="Expliquez pourquoi vous souhaitez suivre cette formation TFP ASA T7..."
                  rows={4}
                  className={errors.motivation ? "border-red-500" : ""}
                />
                {errors.motivation && (
                  <p className="text-sm text-red-600 flex items-center gap-1">
                    <AlertCircle className="h-4 w-4" />
                    {errors.motivation}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="goals">Objectifs professionnels</Label>
                <Textarea
                  id="goals"
                  value={formData.goals}
                  onChange={(e) => updateFormData("goals", e.target.value)}
                  placeholder="Quels sont vos objectifs après cette formation ? Dans quel type d'entreprise souhaitez-vous travailler ?"
                  rows={3}
                />
              </div>
            </CardContent>
          </Card>

          {/* Attestations et acceptation */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-red-600" />
                Attestations et conditions
              </CardTitle>
              <CardDescription>
                Confirmez que vous remplissez les conditions requises
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="hasCleanRecord"
                    checked={formData.hasCleanRecord}
                    onCheckedChange={(checked) => updateFormData("hasCleanRecord", checked as boolean)}
                    className={errors.hasCleanRecord ? "border-red-500" : ""}
                  />
                  <div className="space-y-1">
                    <Label htmlFor="hasCleanRecord" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      J'atteste disposer d'un casier judiciaire B3 vierge (moins de 3 mois) *
                    </Label>
                    {errors.hasCleanRecord && (
                      <p className="text-sm text-red-600 flex items-center gap-1">
                        <AlertCircle className="h-4 w-4" />
                        {errors.hasCleanRecord}
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="hasMedicalFitness"
                    checked={formData.hasMedicalFitness}
                    onCheckedChange={(checked) => updateFormData("hasMedicalFitness", checked as boolean)}
                    className={errors.hasMedicalFitness ? "border-red-500" : ""}
                  />
                  <div className="space-y-1">
                    <Label htmlFor="hasMedicalFitness" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      J'atteste être apte médicalement pour exercer en sûreté aéroportuaire *
                    </Label>
                    {errors.hasMedicalFitness && (
                      <p className="text-sm text-red-600 flex items-center gap-1">
                        <AlertCircle className="h-4 w-4" />
                        {errors.hasMedicalFitness}
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="acceptsTerms"
                    checked={formData.acceptsTerms}
                    onCheckedChange={(checked) => updateFormData("acceptsTerms", checked as boolean)}
                    className={errors.acceptsTerms ? "border-red-500" : ""}
                  />
                  <div className="space-y-1">
                    <Label htmlFor="acceptsTerms" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      J'accepte les conditions générales de vente et le règlement intérieur *
                    </Label>
                    {errors.acceptsTerms && (
                      <p className="text-sm text-red-600 flex items-center gap-1">
                        <AlertCircle className="h-4 w-4" />
                        {errors.acceptsTerms}
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="acceptsDataProcessing"
                    checked={formData.acceptsDataProcessing}
                    onCheckedChange={(checked) => updateFormData("acceptsDataProcessing", checked as boolean)}
                    className={errors.acceptsDataProcessing ? "border-red-500" : ""}
                  />
                  <div className="space-y-1">
                    <Label htmlFor="acceptsDataProcessing" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      J'accepte le traitement de mes données personnelles pour le traitement de ma demande *
                    </Label>
                    {errors.acceptsDataProcessing && (
                      <p className="text-sm text-red-600 flex items-center gap-1">
                        <AlertCircle className="h-4 w-4" />
                        {errors.acceptsDataProcessing}
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="wantsNewsletter"
                    checked={formData.wantsNewsletter}
                    onCheckedChange={(checked) => updateFormData("wantsNewsletter", checked as boolean)}
                  />
                  <Label htmlFor="wantsNewsletter" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Je souhaite recevoir les actualités de Flyness Training
                  </Label>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Bouton de soumission */}
          <div className="flex justify-center">
            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting}
              style={{ backgroundColor: BRAND.primary, color: "white" }}
              className="w-full md:w-auto px-12"
            >
              {isSubmitting ? "Envoi en cours..." : "Envoyer ma demande d'inscription"}
            </Button>
          </div>
        </form>
      </Section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-16">
        <Section>
          <div className="text-center">
            <Image
              src="https://static.wixstatic.com/media/069674_cc399fd62a2343208b246797537bbd56~mv2.png/v1/fill/w_188,h_85,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/LOGO%20BLANC%20trans.png"
              alt="Flyness Training"
              width={188}
              height={85}
              className="h-8 w-auto mx-auto mb-4"
            />
            <p className="text-gray-400 text-sm">
              Centre de formation aéroportuaire spécialisé dans la sûreté, l'APMR et l'anglais aéroportuaire.
            </p>
            <div className="mt-4 space-y-2 text-sm text-gray-400">
              <div className="flex items-center justify-center gap-2">
                <Phone className="h-4 w-4" />
                06 18 94 93 08
              </div>
              <div className="flex items-center justify-center gap-2">
                <Mail className="h-4 w-4" />
                contact@flynesstraining.com
              </div>
            </div>
          </div>
        </Section>
      </footer>
    </div>
  );
}
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
  Building,
  FileText,
  CreditCard,
  CheckCircle2,
  AlertCircle,
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
  birthDate: string;
  birthPlace: string;
  address: string;
  city: string;
  postalCode: string;
  nationality: string;
  
  // Informations professionnelles
  currentEmployer: string;
  currentPosition: string;
  workExperience: string;
  currentCertification: string;
  certificationExpiry: string;
  
  // Formation
  preferredDates: string;
  urgency: string;
  
  // Financement
  financingMethod: string;
  employerName: string;
  
  // Motivation
  motivation: string;
  
  // Acceptation
  acceptTerms: boolean;
  acceptDataProcessing: boolean;
};

type FormErrors = {
  [K in keyof FormData]?: string;
};

export default function RVST10Registration() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    birthDate: "",
    birthPlace: "",
    address: "",
    city: "",
    postalCode: "",
    nationality: "Française",
    currentEmployer: "",
    currentPosition: "",
    workExperience: "",
    currentCertification: "",
    certificationExpiry: "",
    preferredDates: "",
    urgency: "",
    financingMethod: "",
    employerName: "",
    motivation: "",
    acceptTerms: false,
    acceptDataProcessing: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (field: keyof FormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

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
    } else if (!/^[0-9+\s-]{10,}$/.test(formData.phone)) {
      newErrors.phone = "Format de téléphone invalide";
    }
    if (!formData.birthDate) newErrors.birthDate = "La date de naissance est obligatoire";
    if (!formData.address.trim()) newErrors.address = "L'adresse est obligatoire";
    if (!formData.city.trim()) newErrors.city = "La ville est obligatoire";
    if (!formData.postalCode.trim()) {
      newErrors.postalCode = "Le code postal est obligatoire";
    } else if (!/^[0-9]{5}$/.test(formData.postalCode)) {
      newErrors.postalCode = "Le code postal doit contenir 5 chiffres";
    }
    
    if (!formData.currentEmployer.trim()) newErrors.currentEmployer = "L'employeur actuel est obligatoire";
    if (!formData.currentPosition.trim()) newErrors.currentPosition = "Le poste actuel est obligatoire";
    if (!formData.currentCertification.trim()) newErrors.currentCertification = "La certification actuelle est obligatoire";
    if (!formData.certificationExpiry) newErrors.certificationExpiry = "La date d'expiration est obligatoire";
    
    if (!formData.financingMethod) newErrors.financingMethod = "Le mode de financement est obligatoire";
    if (formData.financingMethod === "employeur" && !formData.employerName.trim()) {
      newErrors.employerName = "Le nom de l'employeur est obligatoire";
    }
    
    if (!formData.acceptTerms) newErrors.acceptTerms = "Vous devez accepter les conditions générales";
    if (!formData.acceptDataProcessing) newErrors.acceptDataProcessing = "Vous devez accepter le traitement des données";

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
      
      console.log("Données d'inscription RVS T10:", formData);
      setIsSubmitted(true);
    } catch (error) {
      console.error("Erreur lors de l'inscription:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Card className="max-w-md w-full mx-4">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle2 className="h-6 w-6 text-green-600" />
            </div>
            <CardTitle className="text-2xl">Inscription envoyée !</CardTitle>
            <CardDescription>
              Votre demande d'inscription au recyclage RVS T10 a été transmise avec succès.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p className="text-sm text-gray-600">
              Nous vous contacterons dans les plus brefs délais pour confirmer votre inscription et vous communiquer les modalités pratiques.
            </p>
            <div className="flex flex-col gap-2">
              <Button asChild>
                <Link href="/">Retour à l'accueil</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/formation/rvs-t10">Voir la formation</Link>
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
            href="/formation/rvs-t10"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            Retour à la formation RVS T10
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <RefreshCw className="h-6 w-6" />
            <span className="text-sm bg-white/20 px-3 py-1 rounded-full">Recyclage T10</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Inscription RVS T10
          </h1>
          <p className="text-lg text-white/90">
            Recyclage et Validation des Savoirs - Agent de Sûreté Aéroportuaire T10
          </p>
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
                  <User className="h-5 w-5 text-blue-600" />
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
                    onChange={(e) => handleInputChange("lastName", e.target.value)}
                    className={errors.lastName ? "border-red-500" : ""}
                  />
                  {errors.lastName && (
                    <p className="text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle className="h-4 w-4" />
                      {errors.lastName}
                    </p>
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
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className={errors.phone ? "border-red-500" : ""}
                    placeholder="06 12 34 56 78"
                  />
                  {errors.phone && (
                    <p className="text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle className="h-4 w-4" />
                      {errors.phone}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="birthDate">Date de naissance *</Label>
                  <Input
                    id="birthDate"
                    type="date"
                    value={formData.birthDate}
                    onChange={(e) => handleInputChange("birthDate", e.target.value)}
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
                  <Label htmlFor="birthPlace">Lieu de naissance</Label>
                  <Input
                    id="birthPlace"
                    value={formData.birthPlace}
                    onChange={(e) => handleInputChange("birthPlace", e.target.value)}
                  />
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
                    <p className="text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle className="h-4 w-4" />
                      {errors.address}
                    </p>
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
                    onChange={(e) => handleInputChange("postalCode", e.target.value)}
                    className={errors.postalCode ? "border-red-500" : ""}
                    placeholder="75001"
                  />
                  {errors.postalCode && (
                    <p className="text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle className="h-4 w-4" />
                      {errors.postalCode}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
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
              </CardContent>
            </Card>

            {/* Informations professionnelles */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building className="h-5 w-5 text-blue-600" />
                  Informations professionnelles
                </CardTitle>
                <CardDescription>
                  Votre situation professionnelle actuelle
                </CardDescription>
              </CardHeader>
              <CardContent className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="currentEmployer">Employeur actuel *</Label>
                  <Input
                    id="currentEmployer"
                    value={formData.currentEmployer}
                    onChange={(e) => handleInputChange("currentEmployer", e.target.value)}
                    className={errors.currentEmployer ? "border-red-500" : ""}
                  />
                  {errors.currentEmployer && (
                    <p className="text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle className="h-4 w-4" />
                      {errors.currentEmployer}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="currentPosition">Poste actuel *</Label>
                  <Input
                    id="currentPosition"
                    value={formData.currentPosition}
                    onChange={(e) => handleInputChange("currentPosition", e.target.value)}
                    className={errors.currentPosition ? "border-red-500" : ""}
                  />
                  {errors.currentPosition && (
                    <p className="text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle className="h-4 w-4" />
                      {errors.currentPosition}
                    </p>
                  )}
                </div>

                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="workExperience">Expérience professionnelle dans la sûreté</Label>
                  <Textarea
                    id="workExperience"
                    value={formData.workExperience}
                    onChange={(e) => handleInputChange("workExperience", e.target.value)}
                    placeholder="Décrivez votre expérience dans le domaine de la sûreté aéroportuaire..."
                    rows={3}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="currentCertification">Certification T10 actuelle *</Label>
                  <Input
                    id="currentCertification"
                    value={formData.currentCertification}
                    onChange={(e) => handleInputChange("currentCertification", e.target.value)}
                    className={errors.currentCertification ? "border-red-500" : ""}
                    placeholder="Numéro ou référence de votre certification"
                  />
                  {errors.currentCertification && (
                    <p className="text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle className="h-4 w-4" />
                      {errors.currentCertification}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="certificationExpiry">Date d'expiration *</Label>
                  <Input
                    id="certificationExpiry"
                    type="date"
                    value={formData.certificationExpiry}
                    onChange={(e) => handleInputChange("certificationExpiry", e.target.value)}
                    className={errors.certificationExpiry ? "border-red-500" : ""}
                  />
                  {errors.certificationExpiry && (
                    <p className="text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle className="h-4 w-4" />
                      {errors.certificationExpiry}
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Choix de formation */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-blue-600" />
                  Préférences de formation
                </CardTitle>
                <CardDescription>
                  Vos préférences pour le recyclage
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="preferredDates">Dates souhaitées</Label>
                  <Textarea
                    id="preferredDates"
                    value={formData.preferredDates}
                    onChange={(e) => handleInputChange("preferredDates", e.target.value)}
                    placeholder="Indiquez vos préférences de dates ou périodes..."
                    rows={2}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="urgency">Urgence</Label>
                  <Select value={formData.urgency} onValueChange={(value) => handleInputChange("urgency", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionnez le niveau d'urgence" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="normale">Normale</SelectItem>
                      <SelectItem value="urgent">Urgent (certification expire bientôt)</SelectItem>
                      <SelectItem value="tres-urgent">Très urgent (certification expirée)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            {/* Financement */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5 text-blue-600" />
                  Financement
                </CardTitle>
                <CardDescription>
                  Mode de financement de la formation (350€)
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label>Mode de financement *</Label>
                  <Select value={formData.financingMethod} onValueChange={(value) => handleInputChange("financingMethod", value)}>
                    <SelectTrigger className={errors.financingMethod ? "border-red-500" : ""}>
                      <SelectValue placeholder="Sélectionnez le mode de financement" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="employeur">Prise en charge employeur</SelectItem>
                      <SelectItem value="personnel">Financement personnel</SelectItem>
                      <SelectItem value="cpf">CPF (Compte Personnel de Formation)</SelectItem>
                      <SelectItem value="pole-emploi">Pôle Emploi</SelectItem>
                      <SelectItem value="autre">Autre</SelectItem>
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
                    <Label htmlFor="employerName">Nom de l'employeur financeur *</Label>
                    <Input
                      id="employerName"
                      value={formData.employerName}
                      onChange={(e) => handleInputChange("employerName", e.target.value)}
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
              </CardContent>
            </Card>

            {/* Motivation */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-blue-600" />
                  Motivation
                </CardTitle>
                <CardDescription>
                  Pourquoi souhaitez-vous effectuer ce recyclage ?
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Label htmlFor="motivation">Votre motivation</Label>
                  <Textarea
                    id="motivation"
                    value={formData.motivation}
                    onChange={(e) => handleInputChange("motivation", e.target.value)}
                    placeholder="Expliquez vos motivations pour ce recyclage..."
                    rows={4}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Acceptation des conditions */}
            <Card>
              <CardHeader>
                <CardTitle>Conditions générales</CardTitle>
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
                    <Label
                      htmlFor="acceptTerms"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      J'accepte les conditions générales de vente *
                    </Label>
                    <p className="text-xs text-muted-foreground">
                      En cochant cette case, vous acceptez nos conditions générales de vente et notre règlement intérieur.
                    </p>
                    {errors.acceptTerms && (
                      <p className="text-sm text-red-600 flex items-center gap-1">
                        <AlertCircle className="h-4 w-4" />
                        {errors.acceptTerms}
                      </p>
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
                    <Label
                      htmlFor="acceptDataProcessing"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      J'accepte le traitement de mes données personnelles *
                    </Label>
                    <p className="text-xs text-muted-foreground">
                      Conformément au RGPD, vos données seront utilisées uniquement pour le traitement de votre inscription.
                    </p>
                    {errors.acceptDataProcessing && (
                      <p className="text-sm text-red-600 flex items-center gap-1">
                        <AlertCircle className="h-4 w-4" />
                        {errors.acceptDataProcessing}
                      </p>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Boutons de soumission */}
            <div className="flex flex-col sm:flex-row gap-4 justify-end">
              <Button type="button" variant="outline" asChild>
                <Link href="/formation/rvs-t10">Annuler</Link>
              </Button>
              <Button
                type="submit"
                disabled={isSubmitting}
                style={{ backgroundColor: BRAND.primary, color: "white" }}
                className="min-w-[200px]"
              >
                {isSubmitting ? "Envoi en cours..." : "Envoyer l'inscription"}
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
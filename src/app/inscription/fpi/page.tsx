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
  Eye,
  Upload,
  Download,
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
  company: string;
  position: string;
  experience: string;
  currentCertification: string;
  certificationExpiry: string;
  
  // Formation
  sessionDate: string;
  urgency: string;
  specificNeeds: string;
  
  // Financement
  financingMethod: string;
  opcoName: string;
  
  // Motivation
  motivation: string;
  expectations: string;
  
  // Acceptation
  acceptTerms: boolean;
  acceptDataProcessing: boolean;
  acceptCommercial: boolean;
};

export default function FPIRegistration() {
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
    company: "",
    position: "",
    experience: "",
    currentCertification: "",
    certificationExpiry: "",
    sessionDate: "",
    urgency: "",
    specificNeeds: "",
    financingMethod: "",
    opcoName: "",
    motivation: "",
    expectations: "",
    acceptTerms: false,
    acceptDataProcessing: false,
    acceptCommercial: false,
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    // Validation des champs obligatoires
    if (!formData.firstName.trim()) newErrors.firstName = "Le prénom est requis";
    if (!formData.lastName.trim()) newErrors.lastName = "Le nom est requis";
    if (!formData.email.trim()) {
      newErrors.email = "L'email est requis";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Format d'email invalide";
    }
    if (!formData.phone.trim()) newErrors.phone = "Le téléphone est requis";
    if (!formData.birthDate) newErrors.birthDate = "La date de naissance est requise";
    if (!formData.company.trim()) newErrors.company = "L'entreprise est requise";
    if (!formData.position.trim()) newErrors.position = "Le poste est requis";
    if (!formData.currentCertification.trim()) newErrors.currentCertification = "La certification actuelle est requise";
    if (!formData.certificationExpiry) newErrors.certificationExpiry = "La date d'expiration est requise";
    if (!formData.sessionDate) newErrors.sessionDate = "La date de session est requise";
    if (!formData.financingMethod) newErrors.financingMethod = "Le mode de financement est requis";
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
      
      console.log("Données d'inscription FPI:", formData);
      setIsSubmitted(true);
    } catch (error) {
      console.error("Erreur lors de l'inscription:", error);
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
          <CardContent className="pt-6 text-center">
            <CheckCircle2 className="h-16 w-16 text-green-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-2">Inscription confirmée !</h2>
            <p className="text-gray-600 mb-6">
              Votre demande d'inscription à la Formation Périodique Imagerie a été reçue. Nous vous contacterons sous 24h pour confirmer votre session.
            </p>
            <div className="space-y-3">
              <Button asChild className="w-full">
                <Link href="/formation/fpi">Retour à la formation</Link>
              </Button>
              <Button asChild variant="outline" className="w-full">
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
      <section className="bg-gradient-to-r from-purple-900 to-indigo-700 text-white py-12">
        <Section>
          <Link
            href="/formation/fpi"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            Retour à la formation FPI
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <Eye className="h-6 w-6" />
            <span className="text-sm bg-white/20 px-3 py-1 rounded-full">Formation Périodique Imagerie</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Inscription FPI
          </h1>
          <p className="text-lg text-white/90">
            Complétez votre inscription à la Formation Périodique Imagerie
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
                <User className="h-5 w-5 text-purple-600" />
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
                    onChange={(e) => updateFormData("firstName", e.target.value)}
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
                    onChange={(e) => updateFormData("lastName", e.target.value)}
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
                    onChange={(e) => updateFormData("email", e.target.value)}
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
                    onChange={(e) => updateFormData("phone", e.target.value)}
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
                    onChange={(e) => updateFormData("birthDate", e.target.value)}
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
                    onChange={(e) => updateFormData("birthPlace", e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="nationality">Nationalité</Label>
                  <Select value={formData.nationality} onValueChange={(value) => updateFormData("nationality", value)}>
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
                <Label htmlFor="address">Adresse</Label>
                <Input
                  id="address"
                  value={formData.address}
                  onChange={(e) => updateFormData("address", e.target.value)}
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="city">Ville</Label>
                  <Input
                    id="city"
                    value={formData.city}
                    onChange={(e) => updateFormData("city", e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="postalCode">Code postal</Label>
                  <Input
                    id="postalCode"
                    value={formData.postalCode}
                    onChange={(e) => updateFormData("postalCode", e.target.value)}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Informations professionnelles */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building className="h-5 w-5 text-purple-600" />
                Informations professionnelles
              </CardTitle>
              <CardDescription>
                Détails sur votre activité professionnelle actuelle
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="company">Entreprise/Employeur *</Label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) => updateFormData("company", e.target.value)}
                    className={errors.company ? "border-red-500" : ""}
                  />
                  {errors.company && (
                    <p className="text-sm text-red-600 mt-1">{errors.company}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="position">Poste occupé *</Label>
                  <Input
                    id="position"
                    value={formData.position}
                    onChange={(e) => updateFormData("position", e.target.value)}
                    className={errors.position ? "border-red-500" : ""}
                  />
                  {errors.position && (
                    <p className="text-sm text-red-600 mt-1">{errors.position}</p>
                  )}
                </div>
              </div>

              <div>
                <Label htmlFor="experience">Expérience en imagerie de sûreté</Label>
                <Select value={formData.experience} onValueChange={(value) => updateFormData("experience", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionnez votre expérience" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="moins-1an">Moins d'1 an</SelectItem>
                    <SelectItem value="1-3ans">1 à 3 ans</SelectItem>
                    <SelectItem value="3-5ans">3 à 5 ans</SelectItem>
                    <SelectItem value="5-10ans">5 à 10 ans</SelectItem>
                    <SelectItem value="plus-10ans">Plus de 10 ans</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="currentCertification">Certification imagerie actuelle *</Label>
                  <Input
                    id="currentCertification"
                    value={formData.currentCertification}
                    onChange={(e) => updateFormData("currentCertification", e.target.value)}
                    placeholder="Ex: Certification imagerie niveau 2"
                    className={errors.currentCertification ? "border-red-500" : ""}
                  />
                  {errors.currentCertification && (
                    <p className="text-sm text-red-600 mt-1">{errors.currentCertification}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="certificationExpiry">Date d'expiration *</Label>
                  <Input
                    id="certificationExpiry"
                    type="date"
                    value={formData.certificationExpiry}
                    onChange={(e) => updateFormData("certificationExpiry", e.target.value)}
                    className={errors.certificationExpiry ? "border-red-500" : ""}
                  />
                  {errors.certificationExpiry && (
                    <p className="text-sm text-red-600 mt-1">{errors.certificationExpiry}</p>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Choix de formation */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-purple-600" />
                Choix de session
              </CardTitle>
              <CardDescription>
                Sélectionnez votre session de formation préférée
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="sessionDate">Date de session souhaitée *</Label>
                <Select value={formData.sessionDate} onValueChange={(value) => updateFormData("sessionDate", value)}>
                  <SelectTrigger className={errors.sessionDate ? "border-red-500" : ""}>
                    <SelectValue placeholder="Choisissez une date" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2024-02-15">15 février 2024</SelectItem>
                    <SelectItem value="2024-03-01">1er mars 2024</SelectItem>
                    <SelectItem value="2024-03-15">15 mars 2024</SelectItem>
                    <SelectItem value="2024-04-01">1er avril 2024</SelectItem>
                    <SelectItem value="2024-04-15">15 avril 2024</SelectItem>
                    <SelectItem value="2024-05-01">1er mai 2024</SelectItem>
                  </SelectContent>
                </Select>
                {errors.sessionDate && (
                  <p className="text-sm text-red-600 mt-1">{errors.sessionDate}</p>
                )}
              </div>

              <div>
                <Label htmlFor="urgency">Urgence de la formation</Label>
                <RadioGroup value={formData.urgency} onValueChange={(value) => updateFormData("urgency", value)}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="normale" id="normale" />
                    <Label htmlFor="normale">Normale (dans les 3 mois)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="urgente" id="urgente" />
                    <Label htmlFor="urgente">Urgente (dans le mois)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="tres-urgente" id="tres-urgente" />
                    <Label htmlFor="tres-urgente">Très urgente (dans la semaine)</Label>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <Label htmlFor="specificNeeds">Besoins spécifiques ou adaptations</Label>
                <Textarea
                  id="specificNeeds"
                  value={formData.specificNeeds}
                  onChange={(e) => updateFormData("specificNeeds", e.target.value)}
                  placeholder="Décrivez vos besoins particuliers (accessibilité, équipements spécifiques, etc.)"
                  rows={3}
                />
              </div>
            </CardContent>
          </Card>

          {/* Financement */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="h-5 w-5 text-purple-600" />
                Financement
              </CardTitle>
              <CardDescription>
                Mode de financement de votre formation (450€)
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label>Mode de financement *</Label>
                <RadioGroup value={formData.financingMethod} onValueChange={(value) => updateFormData("financingMethod", value)}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="entreprise" id="entreprise" />
                    <Label htmlFor="entreprise">Prise en charge entreprise</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="opco" id="opco" />
                    <Label htmlFor="opco">Financement OPCO</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="cpf" id="cpf" />
                    <Label htmlFor="cpf">CPF (Compte Personnel de Formation)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="personnel" id="personnel" />
                    <Label htmlFor="personnel">Financement personnel</Label>
                  </div>
                </RadioGroup>
                {errors.financingMethod && (
                  <p className="text-sm text-red-600 mt-1">{errors.financingMethod}</p>
                )}
              </div>

              {formData.financingMethod === "opco" && (
                <div>
                  <Label htmlFor="opcoName">Nom de votre OPCO</Label>
                  <Input
                    id="opcoName"
                    value={formData.opcoName}
                    onChange={(e) => updateFormData("opcoName", e.target.value)}
                    placeholder="Ex: OPCO Mobilités, OPCO Atlas..."
                  />
                </div>
              )}

              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Informations tarifaires</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Tarif formation : 450€</li>
                  <li>• Supports pédagogiques inclus</li>
                  <li>• Attestation de formation</li>
                  <li>• Suivi post-formation</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Motivation */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-purple-600" />
                Motivation et attentes
              </CardTitle>
              <CardDescription>
                Partagez vos motivations et objectifs
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="motivation">Pourquoi souhaitez-vous suivre cette formation périodique ?</Label>
                <Textarea
                  id="motivation"
                  value={formData.motivation}
                  onChange={(e) => updateFormData("motivation", e.target.value)}
                  placeholder="Décrivez vos motivations pour cette formation de mise à jour..."
                  rows={4}
                />
              </div>

              <div>
                <Label htmlFor="expectations">Quelles sont vos attentes spécifiques ?</Label>
                <Textarea
                  id="expectations"
                  value={formData.expectations}
                  onChange={(e) => updateFormData("expectations", e.target.value)}
                  placeholder="Quels aspects souhaitez-vous particulièrement approfondir ?"
                  rows={3}
                />
              </div>
            </CardContent>
          </Card>

          {/* Documents requis */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Upload className="h-5 w-5 text-purple-600" />
                Documents requis
              </CardTitle>
              <CardDescription>
                Liste des documents à fournir avant la formation
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-amber-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-amber-600" />
                  Documents à préparer
                </h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    Copie de la certification imagerie en cours de validité
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    Extrait de casier judiciaire B3 (moins de 3 mois)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    Attestation d'aptitude visuelle
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    Justificatif d'activité professionnelle
                  </li>
                </ul>
                <p className="text-xs text-gray-600 mt-3">
                  Ces documents devront être fournis avant le début de la formation.
                </p>
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
                  onCheckedChange={(checked) => updateFormData("acceptTerms", checked as boolean)}
                  className={errors.acceptTerms ? "border-red-500" : ""}
                />
                <div className="grid gap-1.5 leading-none">
                  <Label htmlFor="acceptTerms" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    J'accepte les conditions générales de vente *
                  </Label>
                  <p className="text-xs text-muted-foreground">
                    <Link href="#" className="text-blue-600 hover:underline">
                      Lire les conditions générales
                    </Link>
                  </p>
                </div>
              </div>
              {errors.acceptTerms && (
                <p className="text-sm text-red-600">{errors.acceptTerms}</p>
              )}

              <div className="flex items-start space-x-2">
                <Checkbox
                  id="acceptDataProcessing"
                  checked={formData.acceptDataProcessing}
                  onCheckedChange={(checked) => updateFormData("acceptDataProcessing", checked as boolean)}
                  className={errors.acceptDataProcessing ? "border-red-500" : ""}
                />
                <div className="grid gap-1.5 leading-none">
                  <Label htmlFor="acceptDataProcessing" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    J'accepte le traitement de mes données personnelles *
                  </Label>
                  <p className="text-xs text-muted-foreground">
                    Conformément au RGPD, vos données sont utilisées uniquement pour le traitement de votre inscription.
                  </p>
                </div>
              </div>
              {errors.acceptDataProcessing && (
                <p className="text-sm text-red-600">{errors.acceptDataProcessing}</p>
              )}

              <div className="flex items-start space-x-2">
                <Checkbox
                  id="acceptCommercial"
                  checked={formData.acceptCommercial}
                  onCheckedChange={(checked) => updateFormData("acceptCommercial", checked as boolean)}
                />
                <div className="grid gap-1.5 leading-none">
                  <Label htmlFor="acceptCommercial" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    J'accepte de recevoir des informations commerciales
                  </Label>
                  <p className="text-xs text-muted-foreground">
                    Recevoir nos newsletters et informations sur nos formations (optionnel).
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
              {isSubmitting ? "Inscription en cours..." : "Confirmer l'inscription"}
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/formation/fpi">Retour à la formation</Link>
            </Button>
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
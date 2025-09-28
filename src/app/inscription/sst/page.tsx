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
  GraduationCap,
  Euro,
  FileText,
  CheckCircle2,
  AlertCircle,
  Heart,
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
  workAddress: string;
  workCity: string;
  workPostalCode: string;
  employmentType: string;
  experience: string;
  
  // Formation
  sessionDate: string;
  urgency: string;
  previousSST: string;
  lastSSTDate: string;
  medicalRestrictions: string;
  
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

export default function SSTRegistration() {
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
    workAddress: "",
    workCity: "",
    workPostalCode: "",
    employmentType: "",
    experience: "",
    sessionDate: "",
    urgency: "",
    previousSST: "",
    lastSSTDate: "",
    medicalRestrictions: "",
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
    if (!formData.company.trim()) newErrors.company = "L'entreprise est obligatoire";
    if (!formData.position.trim()) newErrors.position = "Le poste est obligatoire";
    if (!formData.employmentType) newErrors.employmentType = "Le type d'emploi est obligatoire";
    if (!formData.sessionDate) newErrors.sessionDate = "La date de session est obligatoire";
    if (!formData.urgency) newErrors.urgency = "L'urgence est obligatoire";
    if (!formData.previousSST) newErrors.previousSST = "Cette information est obligatoire";
    if (!formData.financingMethod) newErrors.financingMethod = "Le mode de financement est obligatoire";
    if (!formData.motivation.trim()) newErrors.motivation = "La motivation est obligatoire";
    if (!formData.acceptTerms) newErrors.acceptTerms = "Vous devez accepter les conditions générales";
    if (!formData.acceptDataProcessing) newErrors.acceptDataProcessing = "Vous devez accepter le traitement des données";

    // Validation de l'email
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Format d'email invalide";
    }

    // Validation du téléphone
    if (formData.phone && !/^[0-9+\s-]{10,}$/.test(formData.phone)) {
      newErrors.phone = "Format de téléphone invalide";
    }

    // Validation de l'âge (minimum 14 ans)
    if (formData.birthDate) {
      const birthDate = new Date(formData.birthDate);
      const today = new Date();
      const age = today.getFullYear() - birthDate.getFullYear();
      if (age < 14) {
        newErrors.birthDate = "Vous devez avoir au moins 14 ans";
      }
    }

    // Validation conditionnelle
    if (formData.previousSST === "oui" && !formData.lastSSTDate) {
      newErrors.lastSSTDate = "La date de la dernière formation SST est obligatoire";
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
      
      console.log("Données d'inscription SST:", formData);
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
        <Card className="max-w-md mx-auto">
          <CardContent className="pt-6 text-center">
            <CheckCircle2 className="h-16 w-16 text-green-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">Inscription confirmée !</h2>
            <p className="text-gray-600 mb-6">
              Votre demande d'inscription à la formation SST a été envoyée avec succès. 
              Nous vous contacterons sous 48h pour confirmer votre session.
            </p>
            <div className="space-y-3">
              <Button asChild className="w-full">
                <Link href="/formation/sst">Retour à la formation</Link>
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
      <section className="bg-gradient-to-r from-red-900 to-orange-700 text-white py-12">
        <Section>
          <Link
            href="/formation/sst"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            Retour à la formation SST
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <Heart className="h-8 w-8" />
            <h1 className="text-3xl md:text-4xl font-bold">
              Inscription Formation SST
            </h1>
          </div>
          <p className="text-xl text-white/90">
            Sauveteur Secouriste du Travail - 14 heures - 280€
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
                <Building className="h-5 w-5 text-red-600" />
                Informations professionnelles
              </CardTitle>
              <CardDescription>
                Renseignez vos informations professionnelles
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="company">Entreprise *</Label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) => handleInputChange("company", e.target.value)}
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
                    onChange={(e) => handleInputChange("position", e.target.value)}
                    className={errors.position ? "border-red-500" : ""}
                  />
                  {errors.position && (
                    <p className="text-sm text-red-600 mt-1">{errors.position}</p>
                  )}
                </div>
              </div>

              <div>
                <Label htmlFor="workAddress">Adresse de l'entreprise</Label>
                <Input
                  id="workAddress"
                  value={formData.workAddress}
                  onChange={(e) => handleInputChange("workAddress", e.target.value)}
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="workCity">Ville de l'entreprise</Label>
                  <Input
                    id="workCity"
                    value={formData.workCity}
                    onChange={(e) => handleInputChange("workCity", e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="workPostalCode">Code postal de l'entreprise</Label>
                  <Input
                    id="workPostalCode"
                    value={formData.workPostalCode}
                    onChange={(e) => handleInputChange("workPostalCode", e.target.value)}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="employmentType">Type d'emploi *</Label>
                  <Select
                    value={formData.employmentType}
                    onValueChange={(value) => handleInputChange("employmentType", value)}
                  >
                    <SelectTrigger className={errors.employmentType ? "border-red-500" : ""}>
                      <SelectValue placeholder="Sélectionnez" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cdi">CDI</SelectItem>
                      <SelectItem value="cdd">CDD</SelectItem>
                      <SelectItem value="interim">Intérim</SelectItem>
                      <SelectItem value="freelance">Freelance</SelectItem>
                      <SelectItem value="stage">Stage</SelectItem>
                      <SelectItem value="autre">Autre</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.employmentType && (
                    <p className="text-sm text-red-600 mt-1">{errors.employmentType}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="experience">Expérience professionnelle</Label>
                  <Select
                    value={formData.experience}
                    onValueChange={(value) => handleInputChange("experience", value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionnez" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="debutant">Débutant</SelectItem>
                      <SelectItem value="1-3ans">1-3 ans</SelectItem>
                      <SelectItem value="3-5ans">3-5 ans</SelectItem>
                      <SelectItem value="5-10ans">5-10 ans</SelectItem>
                      <SelectItem value="plus10ans">Plus de 10 ans</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Choix de formation */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-red-600" />
                Formation SST
              </CardTitle>
              <CardDescription>
                Informations sur votre formation SST
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="sessionDate">Date de session souhaitée *</Label>
                  <Select
                    value={formData.sessionDate}
                    onValueChange={(value) => handleInputChange("sessionDate", value)}
                  >
                    <SelectTrigger className={errors.sessionDate ? "border-red-500" : ""}>
                      <SelectValue placeholder="Sélectionnez une date" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="2024-02-15">15-16 février 2024</SelectItem>
                      <SelectItem value="2024-03-15">15-16 mars 2024</SelectItem>
                      <SelectItem value="2024-04-15">15-16 avril 2024</SelectItem>
                      <SelectItem value="2024-05-15">15-16 mai 2024</SelectItem>
                      <SelectItem value="2024-06-15">15-16 juin 2024</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.sessionDate && (
                    <p className="text-sm text-red-600 mt-1">{errors.sessionDate}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="urgency">Urgence de la formation *</Label>
                  <Select
                    value={formData.urgency}
                    onValueChange={(value) => handleInputChange("urgency", value)}
                  >
                    <SelectTrigger className={errors.urgency ? "border-red-500" : ""}>
                      <SelectValue placeholder="Sélectionnez" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="immediate">Immédiate (moins d'1 mois)</SelectItem>
                      <SelectItem value="court">Court terme (1-3 mois)</SelectItem>
                      <SelectItem value="moyen">Moyen terme (3-6 mois)</SelectItem>
                      <SelectItem value="long">Long terme (plus de 6 mois)</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.urgency && (
                    <p className="text-sm text-red-600 mt-1">{errors.urgency}</p>
                  )}
                </div>
              </div>

              <div>
                <Label>Avez-vous déjà suivi une formation SST ? *</Label>
                <RadioGroup
                  value={formData.previousSST}
                  onValueChange={(value) => handleInputChange("previousSST", value)}
                  className="mt-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="oui" id="previous-yes" />
                    <Label htmlFor="previous-yes">Oui</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="non" id="previous-no" />
                    <Label htmlFor="previous-no">Non</Label>
                  </div>
                </RadioGroup>
                {errors.previousSST && (
                  <p className="text-sm text-red-600 mt-1">{errors.previousSST}</p>
                )}
              </div>

              {formData.previousSST === "oui" && (
                <div>
                  <Label htmlFor="lastSSTDate">Date de la dernière formation SST *</Label>
                  <Input
                    id="lastSSTDate"
                    type="date"
                    value={formData.lastSSTDate}
                    onChange={(e) => handleInputChange("lastSSTDate", e.target.value)}
                    className={errors.lastSSTDate ? "border-red-500" : ""}
                  />
                  {errors.lastSSTDate && (
                    <p className="text-sm text-red-600 mt-1">{errors.lastSSTDate}</p>
                  )}
                </div>
              )}

              <div>
                <Label htmlFor="medicalRestrictions">Restrictions médicales ou handicap</Label>
                <Textarea
                  id="medicalRestrictions"
                  value={formData.medicalRestrictions}
                  onChange={(e) => handleInputChange("medicalRestrictions", e.target.value)}
                  placeholder="Indiquez toute restriction médicale qui pourrait affecter votre participation aux exercices pratiques"
                  rows={3}
                />
                <p className="text-sm text-gray-500 mt-1">
                  Ces informations resteront confidentielles et nous permettront d'adapter la formation si nécessaire.
                </p>
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
                Mode de financement de votre formation (280€)
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label>Mode de financement *</Label>
                <RadioGroup
                  value={formData.financingMethod}
                  onValueChange={(value) => handleInputChange("financingMethod", value)}
                  className="mt-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="entreprise" id="financing-company" />
                    <Label htmlFor="financing-company">Prise en charge par l'entreprise</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="opco" id="financing-opco" />
                    <Label htmlFor="financing-opco">Financement OPCO</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="personnel" id="financing-personal" />
                    <Label htmlFor="financing-personal">Financement personnel</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="cpf" id="financing-cpf" />
                    <Label htmlFor="financing-cpf">CPF (Compte Personnel de Formation)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="autre" id="financing-other" />
                    <Label htmlFor="financing-other">Autre</Label>
                  </div>
                </RadioGroup>
                {errors.financingMethod && (
                  <p className="text-sm text-red-600 mt-1">{errors.financingMethod}</p>
                )}
              </div>

              {formData.financingMethod === "opco" && (
                <div>
                  <Label htmlFor="opcoName">Nom de votre OPCO *</Label>
                  <Input
                    id="opcoName"
                    value={formData.opcoName}
                    onChange={(e) => handleInputChange("opcoName", e.target.value)}
                    placeholder="Ex: OPCO Atlas, OPCO Mobilités, etc."
                    className={errors.opcoName ? "border-red-500" : ""}
                  />
                  {errors.opcoName && (
                    <p className="text-sm text-red-600 mt-1">{errors.opcoName}</p>
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
                Motivation et attentes
              </CardTitle>
              <CardDescription>
                Parlez-nous de votre motivation pour cette formation
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="motivation">Pourquoi souhaitez-vous suivre cette formation SST ? *</Label>
                <Textarea
                  id="motivation"
                  value={formData.motivation}
                  onChange={(e) => handleInputChange("motivation", e.target.value)}
                  placeholder="Décrivez votre motivation, vos objectifs professionnels, le contexte de votre entreprise..."
                  rows={4}
                  className={errors.motivation ? "border-red-500" : ""}
                />
                {errors.motivation && (
                  <p className="text-sm text-red-600 mt-1">{errors.motivation}</p>
                )}
              </div>

              <div>
                <Label htmlFor="expectations">Quelles sont vos attentes spécifiques ?</Label>
                <Textarea
                  id="expectations"
                  value={formData.expectations}
                  onChange={(e) => handleInputChange("expectations", e.target.value)}
                  placeholder="Situations particulières à aborder, compétences spécifiques à développer..."
                  rows={3}
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
                <Label htmlFor="acceptTerms" className="text-sm leading-5">
                  J'accepte les conditions générales de vente et le règlement intérieur de Flyness Training *
                </Label>
              </div>
              {errors.acceptTerms && (
                <p className="text-sm text-red-600">{errors.acceptTerms}</p>
              )}

              <div className="flex items-start space-x-2">
                <Checkbox
                  id="acceptDataProcessing"
                  checked={formData.acceptDataProcessing}
                  onCheckedChange={(checked) => handleInputChange("acceptDataProcessing", checked as boolean)}
                  className={errors.acceptDataProcessing ? "border-red-500" : ""}
                />
                <Label htmlFor="acceptDataProcessing" className="text-sm leading-5">
                  J'accepte le traitement de mes données personnelles conformément au RGPD *
                </Label>
              </div>
              {errors.acceptDataProcessing && (
                <p className="text-sm text-red-600">{errors.acceptDataProcessing}</p>
              )}

              <div className="flex items-start space-x-2">
                <Checkbox
                  id="acceptCommercial"
                  checked={formData.acceptCommercial}
                  onCheckedChange={(checked) => handleInputChange("acceptCommercial", checked as boolean)}
                />
                <Label htmlFor="acceptCommercial" className="text-sm leading-5">
                  J'accepte de recevoir des informations commerciales de Flyness Training
                </Label>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="flex items-start gap-2">
                  <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5" />
                  <div className="text-sm text-blue-800">
                    <p className="font-semibold mb-1">Information importante :</p>
                    <p>
                      Cette formation SST est certifiante et reconnue par la CNAM-TS. 
                      Le certificat est valable 24 mois et nécessite un recyclage obligatoire.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Bouton de soumission */}
          <div className="flex justify-center pt-6">
            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting}
              style={{ backgroundColor: BRAND.primary, color: "white" }}
              className="min-w-[200px]"
            >
              {isSubmitting ? "Envoi en cours..." : "Envoyer ma demande d'inscription"}
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
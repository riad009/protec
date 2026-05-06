'use client';

import Image from 'next/image';
import { Bell, Home, Building2, Shield, Check, Phone, Smartphone, Camera, Wifi, Lock, Award, Users, Headphones, UserCheck, CalendarClock, Tablet } from 'lucide-react';
import FadeIn from '@/components/animations/FadeIn';
import { StaggerContainer, StaggerItem } from '@/components/animations/StaggerChildren';
import GlassCard from '@/components/ui/GlassCard';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';

interface AlarmPageClientProps {
  dict: any;
  locale: string;
}

const typeIcons = [Home, Building2, Users];
const typeColors = [
  { bg: 'from-brand-600 to-brand-500', shadow: 'shadow-brand-600/20' },
  { bg: 'from-trust-600 to-trust-500', shadow: 'shadow-trust-600/20' },
  { bg: 'from-amber-600 to-amber-500', shadow: 'shadow-amber-600/20' },
];

export default function AlarmPageClient({ dict, locale }: AlarmPageClientProps) {
  const alarmTypes = [
    { ...dict.alarm.types.home, icon: Home, image: '/images/alarm-home.jpg' },
    { ...dict.alarm.types.business, icon: Building2, image: '/images/alarm-business.jpg' },
    { ...dict.alarm.types.smart, icon: Users, image: '/images/alarm-events.jpg' },
  ];

  const whyChooseFeatures = [
    {
      icon: Smartphone,
      title: locale === 'fr' ? 'Contrôle mobile de partout' : 'Mobile control from anywhere',
      emoji: '📱',
      image: '/images/feature-mobile-control.jpg',
      description: locale === 'fr'
        ? "Armez, désarmez et vérifiez l'état de votre système depuis n'importe où dans le monde grâce à notre application mobile. Plus de stress d'oublier d'activer votre alarme en partant."
        : "Arm, disarm, and check your system status from anywhere in the world using our mobile app. No more stress about forgetting to activate your alarm when leaving home.",
    },
    {
      icon: Camera,
      title: locale === 'fr' ? 'Vérification visuelle intégrée' : 'Integrated visual verification',
      emoji: '📷',
      image: '/images/feature-visual-verification.png',
      description: locale === 'fr'
        ? "Nos détecteurs de mouvement avec caméras intégrées vous permettent de voir ce qui se passe en temps réel avant toute intervention. Vérifiez instantanément la situation."
        : "Our motion detectors with built-in cameras allow you to see what is happening in real time before any intervention is triggered. You can verify the situation instantly.",
    },
    {
      icon: Bell,
      title: locale === 'fr' ? 'Alertes instantanées' : 'Instant alerts',
      emoji: '🔔',
      image: '/images/feature-instant-alert.jpg',
      description: locale === 'fr'
        ? "Dès qu'un capteur est déclenché, vous recevez une notification immédiate sur votre téléphone. Vous pouvez alerter les autorités ou un contact de confiance, où que vous soyez."
        : "As soon as a sensor is triggered, you receive an immediate notification on your phone. You can then alert authorities or a trusted contact, wherever you are.",
    },
    {
      icon: Wifi,
      title: locale === 'fr' ? 'Sans fil & installation facile' : 'Wireless & easy installation',
      emoji: '📡',
      image: '/images/feature-wireless.jpg',
      description: locale === 'fr'
        ? "Pas de câbles, pas de travaux. Notre système sans fil s'installe rapidement et proprement dans tout type de propriété, appartement ou villa."
        : "No cables, no construction work. Our wireless system is installed quickly and cleanly in any property, whether it is an apartment or a villa.",
    },
    {
      icon: Lock,
      title: locale === 'fr' ? 'Données 100% sécurisées' : '100% secure data',
      emoji: '🛡️',
      image: '/images/feature-secure-data.jpg',
      description: locale === 'fr'
        ? "Vos données sont cryptées et protégées conformément aux lois suisses sur la vie privée. Votre sécurité ne s'arrête pas à votre porte d'entrée."
        : "Your data is encrypted and protected in compliance with Swiss privacy laws. Your security does not stop at your front door.",
    },
    {
      icon: Award,
      title: locale === 'fr' ? 'Garantie complète 4 ans' : 'Full 4-year warranty',
      emoji: '✅',
      image: '/images/feature-warranty.jpg',
      description: locale === 'fr'
        ? "Tous nos systèmes sont couverts par une garantie complète de 4 ans, incluant pièces et main-d'œuvre. Vous êtes entièrement couvert."
        : "All our systems come with a comprehensive 4-year warranty, including parts and labor. You are fully covered.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute inset-0 dot-pattern opacity-30" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn className="max-w-3xl">
              <Badge variant="default" icon={<Bell className="w-3.5 h-3.5" />}>{dict.alarm.hero.badge}</Badge>
              <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900">
                {locale === 'fr' ? 'Système d\'Alarme' : 'Home Alarm'}{' '}<span className="gradient-text">{locale === 'fr' ? 'Maison' : 'System'}</span>
              </h1>
              <p className="mt-6 text-lg md:text-xl text-gray-500 max-w-2xl leading-relaxed">
                {locale === 'fr'
                  ? "Protégez ce qui compte le plus, même lorsque vous n'êtes pas là."
                  : 'Protect what matters most even when you\'re not there.'}
              </p>
              <p className="mt-4 text-base text-gray-500 max-w-2xl leading-relaxed">
                {locale === 'fr'
                  ? "Chez PROTECSYS, nous installons des systèmes d'alarme sans fil et connectés conçus pour vous offrir une tranquillité d'esprit complète, 24h/24 et 7j/7. Que vous soyez à la maison, au travail ou en vacances, votre propriété reste sous protection constante."
                  : 'At PROTECSYS, we install wireless, connected alarm systems designed to give you complete peace of mind, 24/7. Whether you are at home, at work, or on vacation, your property remains under constant protection.'}
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button href={`/${locale}/devis`} size="lg" icon={<Shield className="w-5 h-5" />}>{dict.common.getQuote}</Button>
                <Button href="tel:+41787083877" size="lg" variant="secondary" icon={<Phone className="w-5 h-5" />}>{dict.common.callUs}</Button>
              </div>
            </FadeIn>
            <FadeIn direction="right" className="hidden lg:block">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
                <Image
                  src="/images/alarm-install-1.png"
                  alt="Installation système d'alarme PROTECSYS"
                  width={600}
                  height={600}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* How it works section */}
      <section className="relative py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn direction="left">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
                <Image
                  src="/images/alarm-install-2.png"
                  alt="Système d'alarme connecté avec smartphone"
                  width={600}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </div>
            </FadeIn>
            <FadeIn direction="right">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {locale === 'fr' ? 'Comment ça marche ?' : 'How does it work?'}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                {locale === 'fr'
                  ? "Notre système d'alarme agit comme le centre de contrôle intelligent de votre sécurité."
                  : 'Our alarm system acts as the intelligent control center of your security.'}
              </p>
              <p className="text-gray-500 leading-relaxed">
                {locale === 'fr'
                  ? "Des capteurs stratégiquement placés — portes, fenêtres, couloirs — surveillent en temps réel chaque zone de votre domicile en permanence. En cas d'intrusion ou d'activité anormale, vous recevez une alerte instantanée directement sur votre smartphone."
                  : 'Strategically placed sensors — doors, windows, hallways — continuously monitor every area of your home in real time. In the event of an intrusion or abnormal activity, you receive an instant alert directly on your smartphone.'}
              </p>
              <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-brand-50 border border-brand-100">
                <span className="text-sm font-semibold text-brand-600">
                  {locale === 'fr' ? 'Simple. Rapide. Efficace.' : 'Simple. Fast. Effective.'}
                </span>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Alarm Image Gallery */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { src: '/images/alarm-install-3.png', alt: 'Installation alarme professionnelle' },
              { src: '/images/alarm-sensor-dog.jpg', alt: 'Détecteur de mouvement pet-immune' },
              { src: '/images/alarm-sensor-cat.png', alt: 'Capteur de mouvement intérieur' },
            ].map((img, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                  <Image src={img.src} alt={img.alt} width={600} height={400} className="w-full h-auto object-cover" />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Monitoring Center Option */}
      <section className="py-20 md:py-28 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 dot-pattern" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6">
              <Headphones className="w-4 h-4 text-brand-400" />
              <span className="text-sm font-medium text-white/90">
                {locale === 'fr' ? 'Vous avez le choix' : 'You have the choice'}
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">
              {locale === 'fr' ? 'Centre de télésurveillance 24/7 ' : '24/7 Monitoring Center '}
              <span className="text-brand-400">{locale === 'fr' ? 'ou gestion autonome' : 'or self-management'}</span>
            </h2>
            <p className="mt-4 text-lg text-white/70">
              {locale === 'fr'
                ? "L'information la plus importante : vous avez le choix de connecter votre système d'alarme à un centre de télésurveillance 24/7 ou de gérer les alarmes vous-même."
                : 'The most important information: you have the option to either connect your alarm system to a 24/7 monitoring center or manage the alarms yourself.'}
            </p>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-8">
            <FadeIn direction="left">
              <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm h-full">
                <div className="w-14 h-14 rounded-2xl bg-brand-600 flex items-center justify-center shadow-lg mb-6">
                  <Headphones className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{locale === 'fr' ? 'Centre de télésurveillance 24/7' : '24/7 Monitoring Center'}</h3>
                <p className="text-white/70 text-sm leading-relaxed mb-4">
                  {locale === 'fr'
                    ? "Connectez votre système à notre centre de télésurveillance professionnel. Des opérateurs qualifiés surveillent votre propriété 24h/24 et interviennent immédiatement en cas d'alerte."
                    : 'Connect your system to our professional monitoring center. Qualified operators monitor your property 24/7 and respond immediately in case of an alert.'}
                </p>
                <ul className="space-y-2">
                  {(locale === 'fr'
                    ? ['Surveillance professionnelle 24h/24', 'Intervention immédiate', 'Contact direct avec les autorités', 'Vérification visuelle en temps réel']
                    : ['Professional 24/7 monitoring', 'Immediate intervention', 'Direct contact with authorities', 'Real-time visual verification']
                  ).map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-white/80">
                      <Check className="w-4 h-4 text-brand-400 flex-shrink-0" />{item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
            <FadeIn direction="right">
              <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm h-full">
                <div className="w-14 h-14 rounded-2xl bg-trust-600 flex items-center justify-center shadow-lg mb-6">
                  <Smartphone className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{locale === 'fr' ? 'Gestion autonome via smartphone' : 'Self-management via smartphone'}</h3>
                <p className="text-white/70 text-sm leading-relaxed mb-4">
                  {locale === 'fr'
                    ? "Gérez votre système d'alarme vous-même depuis votre smartphone. Recevez les alertes, vérifiez la situation et prenez les décisions en toute autonomie."
                    : 'Manage your alarm system yourself from your smartphone. Receive alerts, verify the situation and make decisions independently.'}
                </p>
                <ul className="space-y-2">
                  {(locale === 'fr'
                    ? ['Contrôle total depuis l\'application', 'Notifications instantanées', 'Vérification visuelle personnelle', 'Aucun coût d\'abonnement']
                    : ['Full control from the app', 'Instant notifications', 'Personal visual verification', 'No subscription costs']
                  ).map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-white/80">
                      <Check className="w-4 h-4 text-trust-400 flex-shrink-0" />{item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
          <FadeIn className="mt-10">
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10 max-w-4xl mx-auto">
              <Image src="/images/monitoring-center.jpg" alt="Centre de télésurveillance 24/7" width={1200} height={600} className="w-full h-auto object-cover" />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Alarm Types */}
      <section className="relative py-20 md:py-28">
        <div className="absolute inset-0 section-gradient" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{dict.alarm.types.title}</h2>
          </FadeIn>
          <StaggerContainer className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {alarmTypes.map((type, i) => {
              const Icon = typeIcons[i];
              const colors = typeColors[i];
              return (
                <StaggerItem key={i}>
                  <GlassCard className="h-full overflow-hidden !p-0" gradient>
                    {/* Card Image */}
                    <div className="relative overflow-hidden">
                      <Image
                        src={type.image}
                        alt={type.title}
                        width={600}
                        height={300}
                        className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                      <div className={`absolute top-4 left-4 w-12 h-12 rounded-xl bg-gradient-to-br ${colors.bg} flex items-center justify-center shadow-lg ${colors.shadow}`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    {/* Card Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{type.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{type.description}</p>
                    </div>
                  </GlassCard>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Why Choose PROTECSYS */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              {locale === 'fr' ? 'Pourquoi choisir ' : 'Why choose '}
              <span className="gradient-text">PROTECSYS</span>
              {locale === 'fr' ? ' ?' : '?'}
            </h2>
          </FadeIn>
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {whyChooseFeatures.map((feature, i) => (
              <StaggerItem key={i}>
                <div className="rounded-2xl bg-white border border-gray-100 shadow-sm hover:border-brand-200 hover:shadow-lg transition-all duration-300 h-full group overflow-hidden">
                  {feature.image && (
                    <div className="relative overflow-hidden">
                      <Image src={feature.image} alt={feature.title} width={400} height={250} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-50 to-brand-100 flex items-center justify-center group-hover:from-brand-100 group-hover:to-brand-200 transition-colors duration-300">
                        <span className="text-xl">{feature.emoji}</span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900">{feature.title}</h3>
                    </div>
                    <p className="text-sm text-gray-500 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Tailor-made Installation */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn direction="left">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {locale === 'fr' ? 'Une installation sur mesure, de A à Z' : 'A tailor-made installation, end-to-end'}
              </h2>
              <p className="text-gray-500 leading-relaxed mb-6">
                {locale === 'fr'
                  ? "Chaque maison est différente. C'est pourquoi nos experts visitent votre propriété pour évaluer vos besoins et concevoir un système adapté."
                  : 'Every home is different. That is why our experts visit your property to assess your needs and design a system adapted to your layout.'}
              </p>
              <ul className="space-y-4">
                {dict.alarm.benefits.items.map((item: string, i: number) => (
                  <li key={i} className="flex items-center gap-3 text-gray-600">
                    <div className="w-6 h-6 rounded-full bg-trust-50 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3.5 h-3.5 text-trust-600" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </FadeIn>
            <FadeIn direction="right">
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
                <Image src="/images/alarm-install-3.png" alt="Installation alarme" width={600} height={600} className="w-full h-auto object-cover" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ═══ BUSINESS ALARM SECTION ═══ */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden" id="business-alarm">
        <div className="absolute inset-0 opacity-5 dot-pattern" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="max-w-3xl mb-16">
            <Badge variant="default" icon={<Building2 className="w-3.5 h-3.5" />}>
              {locale === 'fr' ? '🏢 Alarme Entreprise' : '🏢 Business Alarm'}
            </Badge>
            <h2 className="mt-6 text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
              {locale === 'fr' ? 'Système d\'Alarme pour ' : 'Alarm System for '}
              <span className="text-brand-400">{locale === 'fr' ? 'Entreprises & PME' : 'Businesses & SMEs'}</span>
            </h2>
            <p className="mt-6 text-lg text-white/80 leading-relaxed">
              {locale === 'fr'
                ? "Votre entreprise mérite une protection à la hauteur de ses responsabilités. Une intrusion, un vol ou un incident de sécurité peut avoir des conséquences graves : perte de données, arrêt d'activité et dommages matériels."
                : 'Your business deserves protection that matches its level of responsibility. An intrusion, theft, or security incident can have serious consequences: data loss, operational downtime, and material damage.'}
            </p>
            <p className="mt-4 text-base text-white/70 leading-relaxed">
              {locale === 'fr'
                ? "Chez PROTECSYS, nous concevons, installons, maintenons et modernisons des solutions de sécurité adaptées aux besoins et budgets de chaque entreprise."
                : 'At PROTECSYS, we design, install, maintain, and upgrade security solutions tailored to the specific needs and budgets of each business.'}
            </p>
          </FadeIn>

          {/* Business features grid */}
          <StaggerContainer className="grid md:grid-cols-2 gap-6 mb-16">
            {[
              { emoji: '📱', image: '/images/biz-remote-mgmt.jpg', title: locale === 'fr' ? 'Gestion à distance' : 'Remote management', desc: locale === 'fr' ? "Accédez à votre système de sécurité à tout moment depuis votre appareil mobile. Armez/désarmez, vérifiez les alertes et surveillez vos locaux." : "Access your security system anytime from your mobile device. Arm or disarm alarms, check alerts, and monitor your premises." },
              { emoji: '📷', image: '/images/biz-visual-verify.png', title: locale === 'fr' ? 'Vérification visuelle' : 'Visual verification', desc: locale === 'fr' ? "Solution de vérification visuelle primée avec détecteurs à caméras intégrées pour confirmer une alarme avant intervention — réduisant les fausses alarmes." : "Award-winning visual verification solution using detectors with integrated cameras, allowing you to confirm an alarm before taking action — reducing costly false alarms." },
              { emoji: '🔔', image: '/images/biz-alerts-auto.png', title: locale === 'fr' ? 'Alertes & automatisation' : 'Alerts & automation', desc: locale === 'fr' ? "Programmez des horaires d'armement automatiques, des scénarios d'alerte personnalisés et des notifications par zone. Votre système travaille pour vous." : "Set automatic arming schedules, custom alert scenarios, and zone-based notifications. Your system works for you, even outside business hours." },
              { emoji: '✅', image: '/images/biz-warranty.jpg', title: locale === 'fr' ? 'Garantie 4 ans complète' : 'Full 4-year warranty', desc: locale === 'fr' ? "Solutions clé en main avec garantie gratuite de 4 ans, pièces et main-d'œuvre incluses — pas de coûts cachés." : "Turnkey solutions with a free 4-year warranty, including parts and labor — no hidden costs, no surprises." },
            ].map((feat, i) => (
              <StaggerItem key={i}>
                <div className="rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 h-full overflow-hidden">
                  {feat.image && (
                    <div className="relative overflow-hidden">
                      <Image src={feat.image} alt={feat.title} width={600} height={300} className="w-full h-auto object-cover" />
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl">{feat.emoji}</span>
                      <h3 className="text-lg font-bold">{feat.title}</h3>
                    </div>
                    <p className="text-sm text-white/70 leading-relaxed">{feat.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Business CTA */}
          <FadeIn className="text-center">
            <p className="text-lg text-white/80 mb-6">
              {locale === 'fr' ? '📞 Protégez votre entreprise dès aujourd\'hui' : '📞 Protect your business today'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`/${locale}/devis`} className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold rounded-xl bg-white text-gray-900 hover:bg-gray-100 shadow-lg transition-all duration-300 active:scale-[0.98]">
                <Shield className="w-5 h-5" />
                {locale === 'fr' ? 'Audit de sécurité gratuit' : 'Free security audit'}
              </a>
              <a href="tel:+41787083877" className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold rounded-xl border-2 border-white/30 text-white hover:bg-white/10 transition-all duration-300 active:scale-[0.98]">
                <Phone className="w-5 h-5" />
                +41 78 708 38 77
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Installation Process */}
      <section className="relative py-20 md:py-28">
        <div className="absolute inset-0 section-gradient" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{dict.alarm.process.title}</h2>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {dict.alarm.process.steps.map((step: any, i: number) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="relative p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:border-brand-200 hover:shadow-md transition-all duration-300">
                  <div className="w-10 h-10 rounded-full bg-brand-50 flex items-center justify-center mb-4">
                    <span className="text-sm font-bold font-mono text-brand-600">{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <h3 className="text-base font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Request Quote */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-brand-600 to-brand-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 mb-6">
              <Phone className="w-4 h-4 text-white" />
              <span className="text-sm text-white font-medium">
                {locale === 'fr' ? '📞 Demandez votre devis gratuit' : '📞 Request your free quote'}
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {locale === 'fr' ? 'Protégez votre maison dès aujourd\'hui' : 'Protect your home today'}
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              {locale === 'fr'
                ? "Contactez-nous pour des conseils personnalisés sans engagement."
                : 'Contact us for personalized advice with no obligation.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`/${locale}/devis`} className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold rounded-xl bg-white text-brand-600 hover:bg-gray-100 shadow-lg transition-all duration-300 active:scale-[0.98]">
                <Shield className="w-5 h-5" />
                {dict.common.getQuote}
              </a>
              <a href="tel:+41787083877" className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold rounded-xl border-2 border-white/30 text-white hover:bg-white/10 transition-all duration-300 active:scale-[0.98]">
                <Phone className="w-5 h-5" />
                +41 78 708 38 77
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}

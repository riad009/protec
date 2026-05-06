'use client';

import { FileText, Scale, Shield, Building2, CreditCard, Truck, Lock, AlertTriangle, Eye, ShieldCheck, Database, XCircle, Gavel, BookOpen } from 'lucide-react';
import FadeIn from '@/components/animations/FadeIn';
import Badge from '@/components/ui/Badge';

interface TermsPageClientProps {
  dict: any;
  locale: string;
}

const sections = [
  {
    id: 'preambule',
    icon: BookOpen,
    title: 'PRÉAMBULE',
    content: `Les présentes Conditions Générales de Vente (ci-après « CGV ») régissent l'ensemble des relations commerciales entre PROTECSYS GmbH (ci-après « PROTECSYS » ou le « Vendeur ») et tout client professionnel ou particulier (ci-après le « Client »). Toute commande ou signature de contrat implique l'acceptation pleine et entière des présentes CGV, à l'exclusion de tout autre document du Client.

PROTECSYS se réserve le droit de modifier les présentes CGV à tout moment. La version applicable est celle en vigueur au moment de la conclusion du contrat.`,
  },
  {
    id: 'article-1',
    icon: Scale,
    title: 'ARTICLE 1 — CHAMP D\'APPLICATION',
    content: `**1.1 Applicabilité**
Les présentes CGV s'appliquent à toutes les offres, ventes, livraisons de produits et prestations de services proposées par PROTECSYS GmbH. Elles prévalent sur toute condition générale d'achat du Client, même si ces dernières précisent le contraire.

**1.2 Conditions particulières**
Des conditions particulières peuvent être convenues par écrit entre les parties. En cas de contradiction entre des conditions particulières signées et les présentes CGV, les conditions particulières prévalent uniquement sur les points expressément dérogés et pour la durée du contrat concerné.

**1.3 Acceptation**
Toute commande passée auprès de PROTECSYS, qu'elle soit orale, écrite, électronique ou signée, emporte acceptation irrévocable des présentes CGV. Le Client renonce expressément à ses propres conditions générales d'achat.`,
  },
  {
    id: 'article-2',
    icon: FileText,
    title: 'ARTICLE 2 — OFFRES ET COMMANDES',
    content: `**2.1 Valeur des offres**
Les offres établies par PROTECSYS sont valables 30 jours civils à compter de leur date d'émission, sauf mention contraire. Passé ce délai, PROTECSYS est en droit de modifier ou de retirer l'offre sans préavis.

**2.2 Formation du contrat**
Le contrat est formé uniquement lors de la confirmation écrite de la commande par PROTECSYS (par email, courrier ou signature du devis). Aucune commande verbale n'engage PROTECSYS. Les confirmations automatiques de réception ne constituent pas une acceptation de la commande.

**2.3 Erreurs et omissions**
PROTECSYS décline toute responsabilité pour les erreurs typographiques, d'impression ou de calcul figurant dans ses catalogues, listes de prix ou documentation commerciale. Ces documents n'ont qu'une valeur indicative et ne constituent pas une offre contraignante au sens de l'art. 3 CO.

**2.4 Annulation de commande**
Toute annulation de commande par le Client doit être notifiée par écrit. PROTECSYS se réserve le droit de ne pas rembourser les coûts déjà engagés et une indemnité forfaitaire égale à 20 % du montant de la commande, sans préjudice de tout autre dommage prouvable.`,
  },
  {
    id: 'article-3',
    icon: CreditCard,
    title: 'ARTICLE 3 — PRIX ET CONDITIONS DE PAIEMENT',
    content: `**3.1 Prix**
Les prix indiqués sont exprimés en francs suisses (CHF), hors TVA, hors frais de port, d'emballage et d'assurance, sauf mention contraire dans l'offre. PROTECSYS se réserve le droit d'ajuster ses prix en cours d'exercice en cas de variation significative des coûts des matières premières, des coûts logistiques ou de la réglementation fiscale.

**3.2 TVA**
La TVA suisse est facturée au taux en vigueur au jour de la livraison ou de la prestation. Toute modification légale du taux de TVA sera répercutée de plein droit sur la facture.

**3.3 Conditions de paiement**
Sauf accord écrit contraire, le paiement est exigible à 20 jours nets à compter de la date de facturation. Tout retard de paiement entraîne de plein droit et sans mise en demeure préalable :
– Des intérêts moratoires au taux de 5 % par an, conformément à l'art. 104 al. 1 CO ;
– Le remboursement de tous frais de recouvrement engagés par PROTECSYS ;
– La suspension immédiate de toute livraison ou prestation en cours.

**3.4 Compensation interdite**
Le Client n'est pas autorisé à compenser des créances envers PROTECSYS avec d'éventuelles contre-créances, sauf accord écrit de PROTECSYS ou décision judiciaire définitive.

**3.5 Escompte**
Aucun escompte ne peut être accordé pour tout paiement reçu dans les 10 jours, uniquement si cela est expressément précisé dans l'offre ou la facture.`,
  },
  {
    id: 'article-4',
    icon: Truck,
    title: 'ARTICLE 4 — LIVRAISON ET TRANSFERT DES RISQUES',
    content: `**4.1 Délais de livraison**
Les délais de livraison indiqués par PROTECSYS sont fournis à titre indicatif. Ils ne sont contraignants que s'ils ont été confirmés expressément par écrit comme délais fermes. PROTECSYS ne peut être tenue responsable de retards dus à des causes qui lui sont étrangères (force majeure, perturbations logistiques, retards fournisseurs, etc.).

**4.2 Transfert des risques — Incoterms**
Sauf convention écrite contraire, la livraison s'effectue aux conditions EXW (Ex Works) au sens des Incoterms 2020. Les risques de perte, détérioration ou destruction de la marchandise sont transférés au Client dès la mise à disposition des biens dans les locaux de PROTECSYS.

**4.3 Livraisons partielles**
PROTECSYS se réserve le droit d'effectuer des livraisons partielles, chacune donnant lieu à une facturation distincte. Le Client ne peut refuser une livraison partielle pour motif de non-complétude, sauf accord préalable écrit.

**4.4 Réception et vérification**
Le Client est tenu de vérifier la conformité et l'intégrité des marchandises dès leur réception. Tout défaut apparent, manquant ou avarie doit être signalé par écrit à PROTECSYS dans un délai de 5 jours ouvrables à compter de la réception. Passé ce délai, la livraison est réputée conforme et acceptée sans réserve.`,
  },
  {
    id: 'article-5',
    icon: Lock,
    title: 'ARTICLE 5 — RÉSERVE DE PROPRIÉTÉ',
    content: `PROTECSYS conserve la pleine propriété des marchandises livrées jusqu'au paiement intégral du prix de vente, en principal, intérêts et accessoires, conformément aux art. 715 et suivants du Code civil suisse (CCS).

Tant que la réserve de propriété est en vigueur, le Client s'engage à :
– conserver les marchandises avec soin, à les maintenir en bon état et à les assurer contre tout risque à sa propre charge ;
– ne pas aliéner, mettre en gage, grever ou disposer des marchandises sans l'accord écrit préalable de PROTECSYS ;
– informer immédiatement PROTECSYS en cas de procédure de poursuites, saisie ou faillite pouvant affecter les marchandises.

En cas de défaut de paiement, PROTECSYS est en droit de reprendre possession des marchandises sans procédure judiciaire préalable. Les frais de reprise sont à la charge exclusive du Client.`,
  },
  {
    id: 'article-6',
    icon: Shield,
    title: 'ARTICLE 6 — GARANTIE LÉGALE ET COMMERCIALE',
    content: `**6.1 Garantie légale**
PROTECSYS offre la garantie légale pour les défauts de la chose vendue conformément aux art. 197 et suivants du Code des obligations (CO). Le délai de prescription pour les actions en garantie est de deux (2) ans à compter de la livraison.

**6.2 Exclusions de garantie**
La garantie est exclue dans les cas suivants :
– Défauts résultant d'une utilisation non conforme à la destination prévue ;
– Défauts résultant d'une réparation ou modification effectuée par un tiers non autorisé ;
– Usure normale ou détérioration due à une mauvaise utilisation ou un manque d'entretien ;
– Défauts causés par des événements extérieurs (surtension, choc, humidité, etc.) ;
– Produits consommables (batteries, fusibles, filtres, etc.) ;
– Produits dont le numéro de série a été altéré ou supprimé.

**6.3 Recours en garantie**
En cas de défaut reconnu, PROTECSYS se réserve le droit, à son choix exclusif, de (i) réparer le bien défectueux, (ii) remplacer le bien, ou (iii) accorder un avoir.`,
  },
  {
    id: 'article-7',
    icon: AlertTriangle,
    title: 'ARTICLE 7 — RESPONSABILITÉ ET LIMITATION',
    content: `**7.1 Limitation de responsabilité**
La responsabilité de PROTECSYS est strictement limitée au montant de la commande concernée. PROTECSYS n'est en aucun cas responsable des dommages indirects, consécutifs, immatériels subis par le Client ou des tiers.

**7.2 Cas d'exonération**
PROTECSYS est entièrement exonérée de toute responsabilité en cas :
– de force majeure (pandémie, catastrophe naturelle, guerre, embargo, grève générale, cyberattaque, etc.) ;
– de faute ou négligence du Client ou d'un tiers ;
– d'utilisation des produits ou services contraire aux instructions fournies ;
– d'une installation ou mise en service réalisée par une personne non qualifiée.

**7.3 Responsabilité du produit**
La responsabilité du fabricant pour les produits tiers commercialisés par PROTECSYS est régie exclusivement par la loi sur la responsabilité du fait des produits (LRFP).`,
  },
  {
    id: 'article-8',
    icon: Eye,
    title: 'ARTICLE 8 — PROPRIÉTÉ INTELLECTUELLE',
    content: `Tous les droits de propriété intellectuelle afférents aux produits, logiciels, documentations techniques, schémas, plans, marques et savoir-faire fournis ou développés par PROTECSYS restent la propriété exclusive de PROTECSYS GmbH ou de ses fournisseurs respectifs.

Le Client acquiert uniquement un droit d'usage non exclusif, non transférable et limité aux fins contractuelles. Il est strictement interdit au Client de :
– reproduire, décompiler, rétroconcevoir, modifier ou distribuer les logiciels ou la documentation ;
– transférer, céder ou sous-licencier les droits d'usage à des tiers ;
– utiliser les marques ou signes distinctifs de PROTECSYS sans autorisation préalable.

Toute violation des droits de propriété intellectuelle ouvre droit à des dommages-intérêts et peut donner lieu à des poursuites pénales.`,
  },
  {
    id: 'article-9',
    icon: ShieldCheck,
    title: 'ARTICLE 9 — CONFIDENTIALITÉ',
    content: `Chaque partie s'engage à traiter de manière strictement confidentielle toutes les informations techniques, commerciales ou financières de l'autre partie.

Cette obligation de confidentialité s'étend pendant toute la durée du contrat et pour une période de cinq (5) ans après sa résiliation ou son expiration. Elle ne s'applique pas aux informations qui :
– sont ou deviennent publiques sans faute de la partie réceptrice ;
– étaient déjà connues de la partie réceptrice avant la divulgation ;
– doivent être divulguées en vertu d'une obligation légale ou d'une décision judiciaire.`,
  },
  {
    id: 'article-10',
    icon: Database,
    title: 'ARTICLE 10 — PROTECTION DES DONNÉES',
    content: `PROTECSYS traite les données personnelles des Clients conformément à la loi fédérale suisse sur la protection des données (LPD, RS 235.1) et, le cas échéant, au RGPD.

Les données collectées sont traitées aux fins exclusives de :
– l'exécution du contrat et de la gestion administrative ;
– la communication commerciale (avec droit d'opposition à tout moment) ;
– le respect des obligations légales (fiscales, comptables, etc.).

Le Client dispose d'un droit d'accès, de rectification, de suppression et de portabilité de ses données. Ces droits peuvent être exercés en adressant une demande écrite à PROTECSYS GmbH.`,
  },
  {
    id: 'article-11',
    icon: XCircle,
    title: 'ARTICLE 11 — RÉSILIATION',
    content: `**11.1 Résiliation pour justes motifs**
Chaque partie peut résilier le contrat avec effet immédiat, par courrier recommandé, pour justes motifs, notamment :
– violation grave ou répétée des obligations contractuelles ;
– faillite, insolvabilité ou cessation d'activité de l'autre partie ;
– comportement frauduleux ou dol.

**11.2 Conséquences de la résiliation**
En cas de résiliation anticipée imputable au Client, PROTECSYS est en droit de facturer : (i) la totalité des travaux et fournitures réalisés, (ii) les frais engagés et non récupérables, (iii) une indemnité forfaitaire de résiliation de 20 % du solde restant.`,
  },
  {
    id: 'article-12',
    icon: Gavel,
    title: 'ARTICLE 12 — RÈGLEMENT DES LITIGES',
    content: `**12.1 Négociation amiable**
En cas de litige, les parties s'engagent à rechercher une solution amiable dans un délai de 30 jours.

**12.2 Médiation**
À défaut d'accord amiable, les parties pourront recourir à une procédure de médiation auprès d'un médiateur accrédité en Suisse.

**12.3 For judiciaire**
À défaut de résolution, tout litige sera soumis à la compétence exclusive des tribunaux du canton du siège de PROTECSYS, Suisse.`,
  },
  {
    id: 'article-13',
    icon: Scale,
    title: 'ARTICLE 13 — DROIT APPLICABLE',
    content: `Les présentes CGV et tous les contrats conclus avec PROTECSYS sont régis exclusivement par le droit suisse, à l'exclusion des règles de conflit de lois et de la Convention des Nations Unies sur les contrats de vente internationale de marchandises (CVIM / CISG), dont l'application est expressément exclue.`,
  },
  {
    id: 'article-14',
    icon: BookOpen,
    title: 'ARTICLE 14 — DISPOSITIONS DIVERSES',
    content: `**14.1 Intégralité du contrat**
Les présentes CGV constituent l'intégralité de l'accord entre les parties et remplacent tout accord antérieur portant sur le même objet.

**14.2 Divisibilité**
Si une clause venait à être déclarée nulle ou inapplicable, les autres clauses demeurent pleinement en vigueur.

**14.3 Renonciation**
Le fait pour PROTECSYS de ne pas se prévaloir d'un droit ne saurait constituer une renonciation définitive à ce droit.

**14.4 Cession**
PROTECSYS se réserve le droit de céder tout ou partie de ses droits et obligations à un tiers. Le Client ne peut céder ses droits sans accord écrit préalable.

**14.5 Communications**
Toute communication officielle doit être effectuée par écrit, par lettre recommandée ou par email avec confirmation de réception.

**14.6 Langue**
Les présentes CGV sont rédigées en langue française. En cas de traduction, le texte français fait foi.`,
  },
];

export default function TermsPageClient({ dict, locale }: TermsPageClientProps) {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute inset-0 dot-pattern opacity-30" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <Badge variant="info" icon={<Scale className="w-3.5 h-3.5" />}>
              Conformes au droit suisse — CO, LCD, LPD
            </Badge>
            <h1 className="mt-6 text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
              CONDITIONS GÉNÉRALES{' '}
              <span className="gradient-text">DE VENTE</span>
            </h1>
            <p className="mt-6 text-lg text-gray-500 max-w-2xl mx-auto">
              PROTECSYS GmbH — Sécurité & Protection des systèmes
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Company Info Table */}
      <section className="py-8 bg-gray-50 border-y border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { label: 'Société', value: 'PROTECSYS GmbH' },
              { label: 'Siège social', value: 'Hinterbergstrasse 28, 6312 Steinhausen' },
              { label: 'RC / IDE', value: 'CH-170-4013535-4' },
              { label: 'TVA', value: 'CHE-309.993.083' },
              { label: 'Contact', value: 'info@protecsys.ch' },
              { label: 'Version', value: 'Edition 2025 — Entrée en vigueur le 2026' },
            ].map((item, i) => (
              <div key={i} className="p-4 rounded-xl bg-white border border-gray-100 shadow-sm">
                <p className="text-xs text-gray-400 uppercase tracking-wider font-medium">{item.label}</p>
                <p className="text-sm text-gray-900 font-semibold mt-1">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {sections.map((section, i) => {
              const Icon = section.icon;
              return (
                <FadeIn key={section.id} delay={i * 0.03}>
                  <div id={section.id} className="scroll-mt-24">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-brand-600" />
                      </div>
                      <h2 className="text-xl md:text-2xl font-bold text-gray-900">{section.title}</h2>
                    </div>
                    <div className="pl-[52px]">
                      {section.content.split('\n\n').map((paragraph, j) => {
                        if (paragraph.startsWith('**') && paragraph.includes('**\n')) {
                          const [title, ...rest] = paragraph.split('\n');
                          const cleanTitle = title.replace(/\*\*/g, '');
                          return (
                            <div key={j} className="mb-4">
                              <h3 className="text-base font-semibold text-gray-800 mb-1">{cleanTitle}</h3>
                              <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-line">{rest.join('\n')}</p>
                            </div>
                          );
                        }
                        if (paragraph.startsWith('**')) {
                          const cleanTitle = paragraph.replace(/\*\*/g, '');
                          return <h3 key={j} className="text-base font-semibold text-gray-800 mb-2 mt-4">{cleanTitle}</h3>;
                        }
                        return (
                          <p key={j} className="text-sm text-gray-600 leading-relaxed mb-3 whitespace-pre-line">
                            {paragraph}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>

          {/* Footer signature */}
          <div className="mt-16 pt-8 border-t border-gray-200 text-center">
            <p className="text-sm text-gray-500 font-medium">
              PROTECSYS GmbH — Hinterbergstrasse 28 — 6312 Steinhausen, Suisse
            </p>
            <p className="text-xs text-gray-400 mt-1">Version 2025</p>
          </div>
        </div>
      </section>
    </>
  );
}

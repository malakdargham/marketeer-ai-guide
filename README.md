# Content AI Compass

Crée une application web single-page en React + Tailwind CSS intitulée "IA × Content Marketing — La Boîte à Outils du Marketeur". C'est un guide opérationnel interactif issu d'une thèse de doctorat. Le ton est académique mais moderne, le public cible est des marketeurs et un jury de soutenance.

Design System

Typographies : Instrument Serif (titres), DM Sans (corps), JetBrains Mono (formules, badges, labels techniques). Importer via Google Fonts.

Palette :

Fond principal : #f7f5f0 (paper/crème)

Texte principal : #1a1a2e (encre foncé)

Accent principal : #c45d3e (terracotta/rouille)

Accent secondaire : #2a6f6f (teal foncé)

Or/gold : #b8860b

Texte muted : #6b6b7b

Bordures : #d8d4cc

Esthétique : Élégant, minimal, éditorial. Pas de look "template SaaS". Inspiré des magazines design. Coins arrondis (12-16px), ombres subtiles, beaucoup de whitespace. Animations au scroll (fade-up des sections au premier affichage).

Structure — 7 sections avec navigation sticky

Navigation sticky en haut avec les liens : Contexte · Matrice · Arbre décisionnel · KPIs · Auto-diagnostic · Checklist · Sources. Le lien actif se met en surbrillance au scroll.

Section 1 — Hero (plein écran)

Background sombre (gradient de #1a1a2e vers #3a3352) avec un léger radial gradient coloré (terracotta + teal, très subtil, animé lentement)

Badge en haut : "Guide opérationnel — PhD Research" (style monospace, bordure fine, border-radius pill)

Titre principal en Instrument Serif : IA × Content Marketing + retour à la ligne + La Boîte à Outils (en italique, couleur accent-light #e8a890) + retour à la ligne + du Marketeur

Sous-titre : "Framework décisionnel pour arbitrer entre intelligence artificielle et expertise humaine dans votre stratégie de contenu."

Ligne meta en bas : "Malak · Doctorat IA & Content Marketing · USMS Beni Mellal · 2026"

Flèche animée (bounce) en bas invitant au scroll

Section 2 — Matrice décisionnelle (interactive avec onglets)

Titre : "Quand utiliser l'IA, quand garder la main ?"

6 onglets cliquables sous forme de pills/boutons : Idéation · Rédaction · SEO & Distribution · Analytics · Social Media · Email Marketing

Chaque onglet affiche une carte contenant :

Nom du domaine + ratio recommandé (ex: "60% IA · 40% Humain")

Grille en 2 colonnes : colonne gauche "Déléguer à l'IA" (dot teal) / colonne droite "Garder la main" (dot terracotta), chacune avec 3-4 items en liste

Bande KPI en bas : fond crème, avec des tags en monospace listant les KPIs associés

Voici le contenu des 6 onglets :

Idéation (60% IA · 40% Humain)

IA : Génération de sujets via tendances, Analyse de gaps sémantiques, Clustering de mots-clés, Calendrier éditorial automatisé

Humain : Alignement vision stratégique/marque, Priorisation éditoriale, Pertinence culturelle/contextuelle, Arbitrage éthique

KPIs : Taux d'adoption des sujets · Time-to-publish · Volume de contenu/mois

Rédaction (40% IA · 60% Humain)

IA : Premiers jets/outlines, Variantes titres/meta, Reformulation multi-format, Traduction de base

Humain : Voix de marque/ton distinctif, Storytelling émotionnel, Thought leadership, Fact-checking/relecture finale

KPIs : Temps de rédaction/article · Score lisibilité · Taux engagement · Taux détection IA

SEO & Distribution (70% IA · 30% Humain)

IA : Audit technique SEO, Recherche mots-clés/intention, Optimisation on-page, Scheduling multi-canal

Humain : Link building/relations presse, Arbitrage SEO vs UX lecteur, Choix canaux stratégiques

KPIs : Positions SERP · Trafic organique · CTR · Domain Authority

Analytics (80% IA · 20% Humain)

IA : Collecte/nettoyage données, Segmentation prédictive, Détection anomalies, Dashboards automatisés

Humain : Interprétation stratégique, Décisions de pivot/budget, Communication aux stakeholders

KPIs : Précision prédictions · Temps d'analyse gagné · ROI actions data-driven

Social Media (50% IA · 50% Humain)

IA : Social listening/veille, Génération visuels/posts, Programmation/A/B testing, Analyse sentiments

Humain : Community management, Gestion de crise, Collaborations influenceurs, Ton/humour communauté

KPIs : Engagement rate · Reach organique · Sentiment score · Temps de réponse

Email Marketing (65% IA · 35% Humain)

IA : Segmentation dynamique/envoi prédictif, Personnalisation objets/contenus, Scénarios automation, A/B testing continu

Humain : Stratégie séquençage/storytelling, Emails à fort enjeu, Conformité RGPD

KPIs : Open rate · Click-through rate · Conversion rate · Unsubscribe rate

Section 3 — Arbre décisionnel (flowchart vertical)

Titre : "Le processus en 5 questions"

Carte blanche avec 5 étapes verticales reliées par une ligne

Chaque étape a une icône numérotée (1-5) dans un carré arrondi coloré, un titre (question en gras), une description, et des branches (pills colorées : vert-teal "Oui → IA en lead", terracotta "Non → Question suivante", violet "Hybride")

Les 5 questions :

"La tâche est-elle répétitive et à haut volume ?" → Oui = IA en lead / Non = Q2

"Le contenu porte-t-il la voix de marque ou une dimension émotionnelle forte ?" → Oui = Humain en lead / Non = Q3

"Y a-t-il des données structurées à traiter ou des patterns à détecter ?" → Oui = IA analytique en lead / Non = Q4

"Le risque réputationnel ou éthique est-il significatif ?" → Oui = Humain en lead + IA support / Non = Q5

"Mode par défaut : Collaboration hybride" → IA génère → Humain raffine → IA optimise

Section 4 — Tableau de bord KPIs (filtrable)

Titre : "Les indicateurs essentiels"

Filtres en pills : Tous · Efficience · Qualité · Business

Grille responsive de 12 cartes KPI. Chaque carte contient : icône (emoji dans un carré coloré), titre, description courte, formule en monospace sur fond crème

Les 12 KPIs (catégorie entre parenthèses) :

⚡ Content Velocity — contenus_publiés/mois (Efficience)

⏱ Time-to-Publish — date_publish − date_ideation (Efficience)

💰 Coût par Contenu — (coût_IA + coût_humain) / nb_contenus (Efficience)

🔄 Taux d'Automation — tâches_automatisées / tâches_totales × 100 (Efficience)

✍️ Score d'Authenticité — score_éditorial / 10 (Qualité)

🎯 Taux d'Engagement — interactions / impressions × 100 (Qualité)

🔍 Taux de Détection IA — contenus_détectés / contenus_IA × 100 (Qualité)

📏 Taux de Révision — mots_modifiés / mots_générés × 100 (Qualité)

📈 ROI Content Marketing — (revenus − investissement) / investissement × 100 (Business)

🧲 Taux de Conversion Contenu — conversions / visiteurs_contenu × 100 (Business)

🏅 Part de Voix Organique — keywords_top10 / keywords_cibles × 100 (Business)

♻️ Content Reuse Rate — dérivés_produits / contenus_sources (Business)

Couleurs icônes : Efficience = teal bg, Qualité = terracotta bg, Business = gold bg

Section 5 — Auto-diagnostic interactif (scoring)

Titre : "Votre niveau de maturité IA"

Carte blanche avec 6 questions. Chaque question a un label, un hint en gris, et 4 options en pills radio (une seule sélectionnable par question). L'option sélectionnée passe en fond #1a1a2e texte blanc.

Bouton "Calculer mon score" (fond encre, texte blanc, pill)

Au clic : afficher un bloc résultat avec score /100, niveau (Débutant ≤25, Explorateur ≤50, Avancé ≤75, Leader >75), et un texte de recommandation personnalisé

Les 6 questions (chaque réponse vaut 0, 1, 2 ou 3 points) :

Utilisez-vous des outils d'IA pour la création de contenu ? — Jamais / Ponctuellement / Régulièrement / Systématiquement

Exploitez-vous l'IA analytique pour vos décisions éditoriales ? — Jamais / Rarement / Souvent / C'est intégré

Avez-vous un processus de validation humaine du contenu IA ? — Aucun processus / Informel / Documenté / Intégré au workflow

Mesurez-vous l'impact de l'IA sur vos KPIs content ? — Non / Quelques metrics / Dashboard dédié / Optimisation continue

Votre équipe est-elle formée aux outils et limites de l'IA ? — Pas du tout / Auto-formation / Formation initiale / Programme continu

Avez-vous une politique éthique / charte IA pour le contenu ? — Non / En réflexion / Rédigée / Appliquée & auditée

Section 6 — Checklist de déploiement (cochable avec progression)

Titre : "Checklist de déploiement"

Carte blanche avec 4 phases, chacune avec un titre en monospace uppercase (Phase 1 — Diagnostic, Phase 2 — Pilote, Phase 3 — Mesure, Phase 4 — Scale) et des items cochables

Custom checkboxes : carrés arrondis qui passent en teal avec ✓ quand cochés, le texte se barre

Barre de progression en bas : track grise, fill teal, pourcentage en monospace. Se met à jour dynamiquement

Items par phase :

Phase 1 Diagnostic (Sem. 1-2) : Auditer les workflows actuels · Identifier tâches haut volume/faible valeur humaine · Réaliser l'auto-diagnostic maturité IA · Définir KPIs baseline

Phase 2 Pilote (Sem. 3-6) : Sélectionner 2-3 cas d'usage prioritaires · Choisir/configurer outils IA · Mettre en place validation humaine · Produire premier batch hybride · Rédiger charte éthique IA

Phase 3 Mesure (Sem. 7-10) : Comparer KPIs avant/après · Collecter feedback équipe éditoriale · Ajuster ratios IA/Humain · Documenter prompts/templates performants

Phase 4 Scale (Sem. 11+) : Étendre aux autres domaines de la matrice · Former l'ensemble de l'équipe · Automatiser reporting dashboard · Veille IA trimestrielle

Section 7 — Sources / Ancrage académique

Titre : "Ancrage académique"

Liste de 7 références dans des cartes fines avec numéro en monospace + auteur en gras + titre en muted :

Huang & Rust (2021) — A strategic framework for AI in marketing. JAMS.

Davenport et al. (2020) — How AI will change marketing. JAMS.

Holliman & Rowley (2014) — B2B digital content marketing. JRIM.

Pulizzi & Rose (2017) — Killing Marketing. McGraw-Hill.

Content Marketing Institute (2024) — B2B Benchmarks.

McKinsey (2023) — Economic potential of generative AI.

Thèse de doctorat de l'auteure — USMS Beni Mellal, en cours.

Note méthodologique en encadré teal : "Les ratios IA/Humain sont indicatifs, issus du croisement entre littérature académique, benchmarks sectoriels et résultats empiriques."

Footer

Centré, discret : "IA × Content Marketing" en Instrument Serif + "Framework opérationnel issu d'une recherche doctorale · USMS Beni Mellal · 2026" + mention licence

Comportements techniques

Full responsive (mobile-first)

Scroll animations : chaque section fait un fade-up à l'entrée dans le viewport (IntersectionObserver ou Framer Motion)

Navigation sticky avec highlight de la section courante

Transitions douces sur tous les onglets et filtres

Le scoring calcule (total / 18) × 100 et affiche le résultat avec scroll smooth vers le bloc résultat

La checklist met à jour la barre de progression en temps réel

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://marketeer-ai-guide.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/a4cac06b-e92d-4082-b2d5-c0a1caab27f3).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

# MODE D'EMPLOI — Site TF Technics
### Notice complète pour modifier, dépanner et comprendre le site
> Écrit pour être compris par n'importe qui, même sans connaissances en code.

---

## TABLE DES MATIÈRES

1. [C'est quoi ce site ?](#1-cest-quoi-ce-site-)
2. [Les outils nécessaires](#2-les-outils-nécessaires)
3. [Comment lancer le site sur ton ordinateur](#3-comment-lancer-le-site-sur-ton-ordinateur)
4. [La carte du site — où se trouve quoi](#4-la-carte-du-site--où-se-trouve-quoi)
5. [Modifications courantes](#5-modifications-courantes)
   - Changer le numéro de téléphone
   - Changer les textes
   - Ajouter un article de blog
   - Modifier un article de blog existant
   - Ajouter un avis client
   - Ajouter une commune
   - Changer le logo
   - Changer une photo
6. [Mettre le site en ligne après une modification](#6-mettre-le-site-en-ligne-après-une-modification)
7. [Variables secrètes (clés API)](#7-variables-secrètes-clés-api)
8. [Bugs fréquents et solutions](#8-bugs-fréquents-et-solutions)
9. [Lexique — les mots techniques expliqués](#9-lexique--les-mots-techniques-expliqués)

---

## 1. C'est quoi ce site ?

C'est le site web de **TF Technics**, un électricien dépanneur basé à Bruxelles.

**Technologies utilisées :**
- **Next.js** — le moteur du site (comme le moteur d'une voiture, on ne le voit pas mais il fait tout tourner)
- **Tailwind CSS** — ce qui donne le style visuel (couleurs, tailles, espacements)
- **Vercel** — l'hébergement du site (là où le site vit sur internet)
- **Resend** — le service qui envoie les emails quand quelqu'un remplit un formulaire

**URL du site en ligne :** https://mon-super-site-mu.vercel.app

---

## 2. Les outils nécessaires

Avant de toucher quoi que ce soit, tu as besoin de ces programmes installés sur l'ordinateur :

| Outil | À quoi ça sert | Où l'installer |
|-------|---------------|----------------|
| **Node.js** | Faire tourner le site en local | https://nodejs.org (prendre la version LTS) |
| **Git** | Sauvegarder les modifications | https://git-scm.com |
| **VS Code** | Éditeur de fichiers (comme Word, mais pour le code) | https://code.visualstudio.com |
| **Vercel CLI** | Mettre le site en ligne | Dans le terminal : `npm install -g vercel` |

**Pour vérifier que tout est installé**, ouvre le terminal et tape :
```
node --version
git --version
vercel --version
```
Si chaque commande affiche un numéro de version → tout est bon.

---

## 3. Comment lancer le site sur ton ordinateur

**Étape 1 — Ouvrir le dossier du projet**
```
Le dossier du projet est ici :
C:\Users\hilya\Documents\mon-super-site
```

**Étape 2 — Ouvrir le terminal dans ce dossier**
- Dans VS Code : menu Terminal → Nouveau terminal
- Ou : clic droit sur le dossier → "Ouvrir dans le terminal"

**Étape 3 — Lancer le site en mode développement**
```bash
npm run dev
```

**Étape 4 — Voir le site**
Ouvre ton navigateur et va sur : http://localhost:3000

Le site se met à jour automatiquement quand tu modifies un fichier. Pas besoin de redémarrer.

**Pour arrêter le site :** appuie sur `Ctrl + C` dans le terminal.

---

## 4. La carte du site — où se trouve quoi

```
mon-super-site/
│
├── public/                    ← Images et fichiers statiques
│   ├── logo.svg               ← LE LOGO DU SITE
│   └── (tes photos ici)       ← Mettre les photos dans ce dossier
│
├── src/
│   ├── app/                   ← Les PAGES du site (chaque dossier = une URL)
│   │   ├── page.tsx           ← Page d'accueil (https://.../)
│   │   ├── blog/
│   │   │   ├── page.tsx       ← Liste des articles (https://.../blog)
│   │   │   └── [slug]/page.tsx← Un article individuel (https://.../blog/nom-article)
│   │   ├── services/[slug]/   ← Pages de services (https://.../services/...)
│   │   ├── electricien/[commune]/ ← Pages par commune (https://.../electricien/ixelles)
│   │   ├── a-propos/          ← Page À propos
│   │   ├── mentions-legales/  ← Mentions légales
│   │   └── layout.tsx         ← Squelette commun à toutes les pages
│   │
│   ├── components/            ← Les BLOCS visuels réutilisables
│   │   ├── hero/HeroSection.tsx      ← Le grand bandeau en haut avec navigation
│   │   ├── services/ServicesSection.tsx ← Grille des services
│   │   ├── bornes/BornesSection.tsx  ← Section bornes de recharge
│   │   ├── trust/TrustSection.tsx    ← Avis clients + statistiques
│   │   ├── faq/FaqSection.tsx        ← Questions fréquentes
│   │   ├── contact/ContactSection.tsx← Formulaire de contact
│   │   ├── devis/DevisSection.tsx    ← Formulaire de devis
│   │   ├── blog/BlogListPage.tsx     ← Liste des articles du blog
│   │   ├── blog/BlogPostPage.tsx     ← Affichage d'un article
│   │   └── layout/Footer.tsx         ← Bas de page
│   │
│   ├── data/                  ← LES DONNÉES MODIFIABLES (textes, contenu)
│   │   ├── articles.ts        ← ⭐ Articles du blog
│   │   ├── services.ts        ← ⭐ Contenu des pages de services
│   │   ├── communes.ts        ← ⭐ Liste des communes couvertes
│   │   └── faq.ts             ← ⭐ Questions/réponses de la FAQ
│   │
│   ├── i18n/dictionaries/     ← Traductions FR/NL
│   │   ├── fr.ts              ← ⭐ Tous les textes en FRANÇAIS
│   │   └── nl.ts              ← ⭐ Tous les textes en NÉERLANDAIS
│   │
│   └── lib/site.ts            ← ⭐ Configuration globale (téléphone, email, URL)
│
├── .env                       ← Clés secrètes (NE JAMAIS partager ce fichier)
├── .env.example               ← Modèle des clés secrètes (sans les vraies valeurs)
└── MODE-EMPLOI.md             ← CE FICHIER
```

> **Règle simple :** Pour modifier du CONTENU (textes, articles) → aller dans `src/data/` ou `src/i18n/`. Pour modifier l'APPARENCE → aller dans `src/components/`.

---

## 5. Modifications courantes

### Changer le numéro de téléphone

**Fichier à modifier :** `src/lib/site.ts`

```typescript
// Cherche ces lignes et change les valeurs :
phone:    "+32 XXX XX XX XX",   ← numéro affiché
phoneTel: "+32XXXXXXXXX",       ← numéro pour les liens tel: (sans espaces)
```

Ensuite cherche aussi dans :
- `src/i18n/dictionaries/fr.ts` → ligne `phone:`
- `src/i18n/dictionaries/nl.ts` → ligne `phone:`
- `src/components/hero/HeroSection.tsx` → cherche `+32`
- `src/components/blog/BlogPostPage.tsx` → cherche `+32`
- `src/components/communes/CommunePage.tsx` → cherche `+32`

---

### Changer les textes de la page d'accueil

**Fichier à modifier :** `src/i18n/dictionaries/fr.ts`

Ce fichier contient TOUS les textes en français. Exemple :
```typescript
hero: {
  badge: "Intervention en moins de 60 min",   ← changer ça
  title: "Votre électricien\ndépanneur à Bruxelles",  ← changer ça
  subtitle: "Disponible 24h/24...",           ← changer ça
}
```

Pour les textes en néerlandais : même chose dans `src/i18n/dictionaries/nl.ts`

---

### Ajouter un article de blog

**Fichier à modifier :** `src/data/articles.ts`

Copie-colle ce modèle à la fin du tableau `ARTICLES`, avant le `]` final :

```typescript
{
  slug:     "mon-titre-en-minuscules-avec-tirets",
  title:    "Le titre complet de l'article",
  excerpt:  "Un résumé court de 1-2 phrases qui apparaît dans la liste.",
  date:     "2026-05-01",        ← date au format AAAA-MM-JJ
  readTime: 5,                   ← temps de lecture en minutes
  category: "Dépannage",        ← ou "Bornes de recharge", "Conformité", "Sécurité"
  seoTitle: "Titre SEO | TF Technics Bruxelles",
  seoDesc:  "Description pour Google (max 160 caractères).",
  content: [
    { type: "p",  text: "Un paragraphe d'introduction." },
    { type: "h2", text: "Premier sous-titre" },
    { type: "p",  text: "Contenu du premier sous-titre." },
    { type: "ul", items: ["Point 1", "Point 2", "Point 3"] },
    { type: "highlight", text: "Un encadré orange pour mettre en valeur une info importante." },
    { type: "h2", text: "Deuxième sous-titre" },
    { type: "p",  text: "Autre paragraphe." },
    { type: "cta", label: "Appeler TF Technics", href: "tel:+32XXXXXXXXX" },
  ],
},
```

**Types de blocs disponibles :**
- `{ type: "p", text: "..." }` → Paragraphe normal
- `{ type: "h2", text: "..." }` → Titre de section (grand)
- `{ type: "h3", text: "..." }` → Sous-titre (moyen)
- `{ type: "ul", items: ["...", "..."] }` → Liste à puces
- `{ type: "highlight", text: "..." }` → Encadré orange
- `{ type: "cta", label: "Texte bouton", href: "lien" }` → Bouton d'appel à l'action

---

### Modifier un article de blog existant

**Fichier à modifier :** `src/data/articles.ts`

Cherche l'article par son `slug` (ex: `"disjoncteur-saute-que-faire"`) et modifie les champs voulus. Tu peux changer le titre, l'extrait, le contenu, etc.

> ⚠️ Ne change JAMAIS le `slug` d'un article déjà en ligne — Google aurait indexé l'ancienne URL et les visiteurs tomberaient sur une page 404.

---

### Modifier les avis clients

**Fichier à modifier :** `src/components/trust/TrustSection.tsx`

Cherche le tableau `REVIEWS` en haut du fichier :

```typescript
const REVIEWS = [
  {
    name:     "Sophie V.",
    location: "Ixelles",
    date:     "il y a 2 semaines",
    rating:   5,
    text:     "Intervention ultra-rapide...",
    avatar:   "S",          ← première lettre du prénom
  },
  // ... autres avis
];
```

Modifie les valeurs, ou copie-colle un bloc pour en ajouter un nouveau.

Modifie aussi les statistiques plus bas dans le même fichier (`STATS`) :
```typescript
const STATS = [
  { value: "2 500+", label: "Interventions réalisées" },
  { value: "15 ans", label: "D'expérience" },
  { value: "4.9 ★",  label: "Note Google moyenne" },
  { value: "< 60 min", label: "Délai d'intervention" },
];
```

---

### Ajouter une nouvelle commune

**Fichier à modifier :** `src/data/communes.ts`

Copie-colle ce modèle dans le tableau `COMMUNES` :

```typescript
{
  slug:        "nom-commune",           ← URL : /electricien/nom-commune
  name:        "Nom de la Commune",
  region:      "Bruxelles-Capitale",    ← ou "Brabant Wallon" ou "Brabant Flamand"
  postalCodes: ["1000", "1001"],
  seoTitle:    "Électricien Nom-Commune | TF Technics",
  seoDesc:     "Électricien agréé intervenant à Nom-Commune...",
  heroTitle:   "Électricien à Nom-Commune",
  intro:       "TF Technics intervient rapidement à Nom-Commune...",
},
```

---

### Changer le logo

1. Prépare ton nouveau logo au format **SVG** (recommandé) ou PNG
2. Nomme le fichier `logo.svg` (ou `logo.png`)
3. Dépose-le dans le dossier `public/`
4. Écrase l'ancien fichier (même nom)
5. Redéploie le site

Le logo apparaîtra automatiquement dans la navigation et le footer.

---

### Ajouter une photo

1. Télécharge ta photo (JPG ou WebP recommandé, au moins 1200px de large)
2. Dépose-la dans le dossier `public/`
3. Note le nom du fichier (ex: `hero-photo.jpg`)
4. Dans le composant voulu, remplace le nom de fichier existant :

```tsx
// Exemple dans HeroSection.tsx ou BornesSection.tsx :
<Image src="/hero-photo.jpg" alt="Description de la photo" ... />
```

---

## 6. Mettre le site en ligne après une modification

Après chaque modification, il faut **déployer** sur Vercel pour que les changements soient visibles en ligne.

**Étape 1 — Sauvegarder les modifications avec Git**
```bash
git add .
git commit -m "Description de ce que j'ai changé"
```
Exemple de message : `"Ajout article blog sur les bornes de recharge"`

**Étape 2 — Mettre en ligne sur Vercel**
```bash
vercel --prod
```

Attend 1-2 minutes. Quand tu vois `✓ Production: https://...` c'est en ligne.

**Étape 3 — Vérifier**
Va sur https://mon-super-site-mu.vercel.app et vérifie que ta modification est bien visible.

---

## 7. Variables secrètes (clés API)

Ces valeurs sont stockées dans le fichier `.env` à la racine du projet.

> ⚠️ **NE JAMAIS** envoyer ce fichier à quelqu'un, ne JAMAIS le mettre sur GitHub.

```
RESEND_API_KEY=re_xxxx...     ← Clé pour envoyer les emails des formulaires
CONTACT_EMAIL=hilyas707@gmail.com  ← Email qui reçoit les demandes de contact
```

**Si les emails ne s'envoient plus :**
1. Va sur https://resend.com
2. Connecte-toi avec le compte TF Technics
3. Vérifie que la clé API est toujours valide
4. Si elle a expiré, crée-en une nouvelle et mets-la à jour dans Vercel :
   ```bash
   vercel env add RESEND_API_KEY production
   ```
   Puis retape la nouvelle clé quand demandé.

---

## 8. Bugs fréquents et solutions

### Le site ne démarre pas (`npm run dev` plante)

**Cause probable :** Les dépendances ne sont pas installées.
**Solution :**
```bash
npm install
npm run dev
```

---

### Erreur "Module not found" ou "Cannot find module"

**Cause probable :** Un fichier a été supprimé ou renommé par erreur.
**Solution :** Vérifie que le fichier existe bien à l'emplacement indiqué dans le message d'erreur.

---

### Le déploiement Vercel échoue avec "Build error"

**Étape 1 :** Lis attentivement le message d'erreur dans le terminal.
**Étape 2 :** Les erreurs les plus fréquentes :

| Message d'erreur | Cause | Solution |
|-----------------|-------|----------|
| `is defined multiple times` | Import en double dans un fichier | Ouvre le fichier indiqué, cherche la ligne en double, supprime-la |
| `Cannot find module` | Fichier manquant | Vérifie que le fichier existe |
| `Missing API key` | Clé Resend absente | Voir section 7 |
| `Type error` | Faute de frappe dans le code | Lis la ligne indiquée et corrige la syntaxe |

---

### Les emails des formulaires n'arrivent pas

1. Vérifie que `RESEND_API_KEY` est bien configuré (section 7)
2. Vérifie dans le dossier spam de hilyas707@gmail.com
3. Va sur https://resend.com → "Emails" pour voir si les envois apparaissent

---

### Une page affiche "404 - Page introuvable"

**Cause probable :** L'URL ne correspond à aucune page existante.
- Pour les articles de blog : vérifie que le `slug` dans `articles.ts` correspond exactement à l'URL
- Pour les communes : vérifie que le `slug` dans `communes.ts` est correct

---

### Le logo ou une image n'apparaît pas

1. Vérifie que le fichier est bien dans le dossier `public/`
2. Vérifie que le nom du fichier correspond exactement (attention aux majuscules : `Logo.svg` ≠ `logo.svg`)
3. Vide le cache du navigateur : `Ctrl + Shift + R`

---

## 9. Lexique — les mots techniques expliqués

| Mot | Explication simple |
|-----|-------------------|
| **Next.js** | Le moteur qui fait tourner le site. Comme le moteur d'une voiture. |
| **Component** | Un morceau de page réutilisable. Ex : le footer est un component. |
| **Page** | Une URL du site. `/blog` est une page. |
| **Slug** | Le bout de l'URL. Ex : dans `/blog/mon-article`, le slug est `mon-article`. |
| **Deploy / Déployer** | Mettre la nouvelle version du site en ligne sur Vercel. |
| **Build** | La construction du site avant de le mettre en ligne. Prend 1-2 min. |
| **Git** | Système qui garde l'historique de toutes les modifications. |
| **Commit** | Sauvegarder une étape dans Git (comme "Enregistrer sous" dans Word). |
| **npm** | Le gestionnaire de paquets de Node.js. Sert à installer des librairies. |
| **Vercel** | L'hébergeur du site. Comme un serveur dans un datacenter. |
| **API** | Une connexion entre le site et un service externe (ex : Resend pour les emails). |
| **Clé API** | Mot de passe secret pour utiliser un service externe. |
| **JSON-LD** | Du code caché dans la page que Google lit pour mieux comprendre le site (SEO). |
| **SEO** | Référencement naturel — tout ce qui aide le site à apparaître en premier sur Google. |
| **Tailwind** | Système de style visuel. Les classes comme `text-orange-500` donnent la couleur. |
| **.env** | Fichier de configuration avec les mots de passe et clés secrètes. |
| **TypeScript (.ts/.tsx)** | Langage de programmation utilisé dans ce projet. Comme JavaScript mais plus strict. |

---

> **En cas de doute :** ne supprime jamais un fichier sans être sûr de ce que tu fais. Fais toujours un `git commit` avant de modifier quelque chose d'important, comme ça tu peux revenir en arrière avec `git checkout -- nom-du-fichier`.

---

*Document créé le 25 avril 2026 — TF Technics*

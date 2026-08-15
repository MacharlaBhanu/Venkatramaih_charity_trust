# Graph Report - bans  (2026-08-10)

## Corpus Check
- 66 files · ~7,473,828 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 322 nodes · 424 edges · 33 communities (19 shown, 14 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS · INFERRED: 1 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `d7bda7f0`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- [[_COMMUNITY_Contact, CTA & Donation UI|Contact, CTA & Donation UI]]
- [[_COMMUNITY_Decorative & Hero Section Components|Decorative & Hero Section Components]]
- [[_COMMUNITY_Card Components (InitiativeStatStory)|Card Components (Initiative/Stat/Story)]]
- [[_COMMUNITY_App TS Config|App TS Config]]
- [[_COMMUNITY_App Shell & Donation Context|App Shell & Donation Context]]
- [[_COMMUNITY_Package Dependencies|Package Dependencies]]
- [[_COMMUNITY_Node TS Config|Node TS Config]]
- [[_COMMUNITY_Dev Tooling Dependencies|Dev Tooling Dependencies]]
- [[_COMMUNITY_Button Component|Button Component]]
- [[_COMMUNITY_Gallery Page Data|Gallery Page Data]]
- [[_COMMUNITY_Stories Page Data|Stories Page Data]]
- [[_COMMUNITY_Oxlint Rules Config|Oxlint Rules Config]]
- [[_COMMUNITY_ViteReactOxlint Template Concepts|Vite/React/Oxlint Template Concepts]]
- [[_COMMUNITY_Root TS Config|Root TS Config]]
- [[_COMMUNITY_Site Identity & SEO|Site Identity & SEO]]
- [[_COMMUNITY_Asset Cropping Script|Asset Cropping Script]]
- [[_COMMUNITY_Logo Mark Cropping Script|Logo Mark Cropping Script]]
- [[_COMMUNITY_Footer Logo Background Script|Footer Logo Background Script]]
- [[_COMMUNITY_Graphify Workflow Rules|Graphify Workflow Rules]]
- [[_COMMUNITY_Vite Config|Vite Config]]
- [[_COMMUNITY_Gallery.tsx|Gallery.tsx]]
- [[_COMMUNITY_scripts|scripts]]
- [[_COMMUNITY_GetInvolved.tsx|GetInvolved.tsx]]
- [[_COMMUNITY_TransformationStoryCard.tsx|TransformationStoryCard.tsx]]
- [[_COMMUNITY_faqData.ts|faqData.ts]]
- [[_COMMUNITY_InitiativeCard.tsx|InitiativeCard.tsx]]
- [[_COMMUNITY_SectionTitle.tsx|SectionTitle.tsx]]
- [[_COMMUNITY_StoryCard.tsx|StoryCard.tsx]]
- [[_COMMUNITY_generate-social-share.mjs|generate-social-share.mjs]]

## God Nodes (most connected - your core abstractions)
1. `useDonation()` - 19 edges
2. `compilerOptions` - 18 edges
3. `GalleryItem` - 15 edges
4. `compilerOptions` - 15 edges
5. `scripts` - 11 edges
6. `SEO()` - 10 edges
7. `site` - 5 edges
8. `Icon()` - 4 edges
9. `HomeGalleryCategoryKey` - 4 edges
10. `GalleryIconKey` - 4 edges

## Surprising Connections (you probably didn't know these)
- `robots.txt Sitemap Directive` --references--> `Kanneganti Venkataramaiah Charitable Trust Site`  [INFERRED]
  public/robots.txt → index.html
- `Initiatives()` --calls--> `useDonation()`  [EXTRACTED]
  src/pages/Initiatives.tsx → src/context/DonationContext.tsx
- `Stories()` --calls--> `useDonation()`  [EXTRACTED]
  src/pages/Stories.tsx → src/context/DonationContext.tsx
- `DonationModal()` --calls--> `useDonation()`  [EXTRACTED]
  src/components/DonationModal.tsx → src/context/DonationContext.tsx
- `GalleryCardProps` --references--> `GalleryItem`  [EXTRACTED]
  src/components/GalleryCard.tsx → src/data/galleryData.ts

## Import Cycles
- None detected.

## Communities (33 total, 14 thin omitted)

### Community 0 - "Contact, CTA & Donation UI"
Cohesion: 0.24
Nodes (9): faqItems, GetInvolvedIcon, helpOptions, partnershipOptions, processSteps, volunteerBenefits, cardThemes, iconMap (+1 more)

### Community 1 - "Decorative & Hero Section Components"
Cohesion: 0.09
Nodes (18): ContactCardProps, CTASectionProps, DonationModal(), Icon(), IconProps, paths, SocialIcon(), SocialIconProps (+10 more)

### Community 2 - "Card Components (Initiative/Stat/Story)"
Cohesion: 0.13
Nodes (11): iconMap, StatCardProps, homeInitiatives, homeStats, homeStories, impactGlance, heroSlides, Home() (+3 more)

### Community 3 - "App TS Config"
Cohesion: 0.10
Nodes (19): compilerOptions, allowArbitraryExtensions, allowImportingTsExtensions, erasableSyntaxOnly, jsx, lib, module, moduleDetection (+11 more)

### Community 4 - "App Shell & Donation Context"
Cohesion: 0.17
Nodes (10): App(), ImageReveal(), PageMotion(), githubPagesBase, needsBasePath(), PublicAssetFallback(), ScrollToTop(), DonationContext (+2 more)

### Community 5 - "Package Dependencies"
Cohesion: 0.08
Nodes (24): dependencies, framer-motion, gsap, lucide-react, react, react-dom, react-helmet-async, react-router-dom (+16 more)

### Community 6 - "Node TS Config"
Cohesion: 0.12
Nodes (16): compilerOptions, allowImportingTsExtensions, erasableSyntaxOnly, lib, module, moduleDetection, noEmit, noFallthroughCasesInSwitch (+8 more)

### Community 7 - "Dev Tooling Dependencies"
Cohesion: 0.40
Nodes (3): DecoProps, LeafBranch(), PageHeroProps

### Community 8 - "Button Component"
Cohesion: 0.13
Nodes (15): BaseProps, ButtonAsButton, ButtonAsLink, ButtonProps, Variant, variantClass, Initiative, initiatives (+7 more)

### Community 10 - "Stories Page Data"
Cohesion: 0.17
Nodes (10): beforeAfter, changeStories, ChangeStory, featuredStory, gratitudeQuotes, impactStats, journeySteps, transformationStories (+2 more)

### Community 11 - "Oxlint Rules Config"
Cohesion: 0.33
Nodes (5): plugins, rules, react/only-export-components, react/rules-of-hooks, $schema

### Community 12 - "Vite/React/Oxlint Template Concepts"
Cohesion: 0.50
Nodes (3): Expanding the Oxlint configuration, React Compiler, React + TypeScript + Vite

### Community 24 - "Gallery.tsx"
Cohesion: 0.05
Nodes (37): GalleryCursorStyle, GalleryImageProps, GalleryImageVariant, GalleryImageProps, GalleryImageVariant, GalleryLightboxProps, GalleryLightboxProps, GalleryCardProps (+29 more)

### Community 25 - "scripts"
Cohesion: 0.18
Nodes (11): scripts, assets:crop, assets:crop-logo-mark, assets:footer-logo-bg, assets:social-share, assets:transparent-logo, assets:trim-logo, build (+3 more)

### Community 26 - "GetInvolved.tsx"
Cohesion: 0.13
Nodes (13): SEO(), SEOProps, contactMethods, socialLinks, supportTopics, workingHours, aboutCardTones, iconMap (+5 more)

## Knowledge Gaps
- **153 isolated node(s):** `$schema`, `plugins`, `react/rules-of-hooks`, `react/only-export-components`, `name` (+148 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **14 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `useDonation()` connect `Decorative & Hero Section Components` to `Contact, CTA & Donation UI`, `Card Components (Initiative/Stat/Story)`, `App Shell & Donation Context`, `Button Component`, `Stories Page Data`, `Gallery.tsx`?**
  _High betweenness centrality (0.054) - this node is a cross-community bridge._
- **Why does `SEO()` connect `GetInvolved.tsx` to `Contact, CTA & Donation UI`, `Card Components (Initiative/Stat/Story)`, `Button Component`, `Stories Page Data`, `Gallery.tsx`?**
  _High betweenness centrality (0.043) - this node is a cross-community bridge._
- **What connects `$schema`, `plugins`, `react/rules-of-hooks` to the rest of the system?**
  _153 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Decorative & Hero Section Components` be split into smaller, more focused modules?**
  _Cohesion score 0.0907258064516129 - nodes in this community are weakly interconnected._
- **Should `Card Components (Initiative/Stat/Story)` be split into smaller, more focused modules?**
  _Cohesion score 0.1286549707602339 - nodes in this community are weakly interconnected._
- **Should `App TS Config` be split into smaller, more focused modules?**
  _Cohesion score 0.1 - nodes in this community are weakly interconnected._
- **Should `Package Dependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.08 - nodes in this community are weakly interconnected._
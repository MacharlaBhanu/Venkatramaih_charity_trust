# Graph Report - bans  (2026-07-23)

## Corpus Check
- 57 files · ~6,340,606 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 272 nodes · 355 edges · 29 communities (21 shown, 8 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS · INFERRED: 1 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `4e7dfd32`
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
- [[_COMMUNITY_Gallery.tsx|Gallery.tsx]]
- [[_COMMUNITY_Initiatives.tsx|Initiatives.tsx]]
- [[_COMMUNITY_GetInvolved.tsx|GetInvolved.tsx]]
- [[_COMMUNITY_scripts|scripts]]
- [[_COMMUNITY_faqData.ts|faqData.ts]]

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 18 edges
2. `useDonation()` - 15 edges
3. `compilerOptions` - 15 edges
4. `scripts` - 10 edges
5. `SEO()` - 8 edges
6. `site` - 5 edges
7. `Icon()` - 4 edges
8. `rules` - 3 edges
9. `BaseProps` - 3 edges
10. `SocialIcon()` - 3 edges

## Surprising Connections (you probably didn't know these)
- `robots.txt Sitemap Directive` --references--> `Kanneganti Venkataramaiah Charitable Trust Site`  [INFERRED]
  public/robots.txt → index.html
- `DonationModal()` --calls--> `useDonation()`  [EXTRACTED]
  src/components/DonationModal.tsx → src/context/DonationContext.tsx
- `Navbar()` --calls--> `useDonation()`  [EXTRACTED]
  src/components/Navbar.tsx → src/context/DonationContext.tsx
- `Gallery()` --calls--> `useDonation()`  [EXTRACTED]
  src/pages/Gallery.tsx → src/context/DonationContext.tsx
- `GetInvolved()` --calls--> `useDonation()`  [EXTRACTED]
  src/pages/GetInvolved.tsx → src/context/DonationContext.tsx

## Import Cycles
- None detected.

## Communities (29 total, 8 thin omitted)

### Community 0 - "Contact, CTA & Donation UI"
Cohesion: 0.12
Nodes (14): SEO(), SEOProps, contactMethods, socialLinks, supportTopics, workingHours, aboutStats, iconMap (+6 more)

### Community 1 - "Decorative & Hero Section Components"
Cohesion: 0.10
Nodes (14): ContactCardProps, CTASectionProps, DonationModal(), Icon(), IconProps, paths, SocialIcon(), SocialIconProps (+6 more)

### Community 2 - "Card Components (Initiative/Stat/Story)"
Cohesion: 0.10
Nodes (14): iconMap, InitiativeCardProps, SectionTitleProps, iconMap, StatCardProps, StoryCardProps, homeInitiatives, homeStats (+6 more)

### Community 3 - "App TS Config"
Cohesion: 0.10
Nodes (19): compilerOptions, allowArbitraryExtensions, allowImportingTsExtensions, erasableSyntaxOnly, jsx, lib, module, moduleDetection (+11 more)

### Community 4 - "App Shell & Donation Context"
Cohesion: 0.31
Nodes (5): App(), ScrollToTop(), DonationContext, DonationContextType, DonationProvider()

### Community 5 - "Package Dependencies"
Cohesion: 0.09
Nodes (22): dependencies, lucide-react, react, react-dom, react-helmet-async, react-router-dom, sharp, devDependencies (+14 more)

### Community 6 - "Node TS Config"
Cohesion: 0.12
Nodes (16): compilerOptions, allowImportingTsExtensions, erasableSyntaxOnly, lib, module, moduleDetection, noEmit, noFallthroughCasesInSwitch (+8 more)

### Community 7 - "Dev Tooling Dependencies"
Cohesion: 0.40
Nodes (3): DecoProps, LeafBranch(), PageHeroProps

### Community 8 - "Button Component"
Cohesion: 0.32
Nodes (6): BaseProps, ButtonAsButton, ButtonAsLink, ButtonProps, Variant, variantClass

### Community 10 - "Stories Page Data"
Cohesion: 0.20
Nodes (10): icons, TransformationStoryCard(), TransformationStoryCardProps, beforeAfter, featuredStory, gratitudeQuotes, impactStats, journeySteps (+2 more)

### Community 11 - "Oxlint Rules Config"
Cohesion: 0.33
Nodes (5): plugins, rules, react/only-export-components, react/rules-of-hooks, $schema

### Community 12 - "Vite/React/Oxlint Template Concepts"
Cohesion: 0.50
Nodes (3): Expanding the Oxlint configuration, React Compiler, React + TypeScript + Vite

### Community 24 - "Gallery.tsx"
Cohesion: 0.13
Nodes (19): EventHighlightCard(), GalleryCard(), GalleryCardProps, PhotoAlbumCard(), actionItems, albums, categories, EventHighlight (+11 more)

### Community 25 - "Initiatives.tsx"
Cohesion: 0.20
Nodes (10): iconMap, InitiativeDetailCard(), InitiativeDetailCardProps, InitiativeStoryCard(), InitiativeStoryCardProps, Initiative, initiatives, initiativesStats (+2 more)

### Community 26 - "GetInvolved.tsx"
Cohesion: 0.17
Nodes (13): Navbar(), useDonation(), faqItems, GetInvolvedIcon, helpOptions, partnershipOptions, processSteps, volunteerBenefits (+5 more)

### Community 27 - "scripts"
Cohesion: 0.20
Nodes (10): scripts, assets:crop, assets:crop-logo-mark, assets:footer-logo-bg, assets:transparent-logo, assets:trim-logo, build, dev (+2 more)

## Knowledge Gaps
- **122 isolated node(s):** `$schema`, `plugins`, `react/rules-of-hooks`, `react/only-export-components`, `name` (+117 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **8 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `useDonation()` connect `GetInvolved.tsx` to `Decorative & Hero Section Components`, `Card Components (Initiative/Stat/Story)`, `App Shell & Donation Context`, `Stories Page Data`, `Gallery.tsx`, `Initiatives.tsx`?**
  _High betweenness centrality (0.050) - this node is a cross-community bridge._
- **Why does `SEO()` connect `Contact, CTA & Donation UI` to `Card Components (Initiative/Stat/Story)`, `Stories Page Data`, `Gallery.tsx`, `Initiatives.tsx`, `GetInvolved.tsx`?**
  _High betweenness centrality (0.043) - this node is a cross-community bridge._
- **Why does `site` connect `Decorative & Hero Section Components` to `Contact, CTA & Donation UI`?**
  _High betweenness centrality (0.008) - this node is a cross-community bridge._
- **What connects `$schema`, `plugins`, `react/rules-of-hooks` to the rest of the system?**
  _122 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Contact, CTA & Donation UI` be split into smaller, more focused modules?**
  _Cohesion score 0.11688311688311688 - nodes in this community are weakly interconnected._
- **Should `Decorative & Hero Section Components` be split into smaller, more focused modules?**
  _Cohesion score 0.10052910052910052 - nodes in this community are weakly interconnected._
- **Should `Card Components (Initiative/Stat/Story)` be split into smaller, more focused modules?**
  _Cohesion score 0.09666666666666666 - nodes in this community are weakly interconnected._
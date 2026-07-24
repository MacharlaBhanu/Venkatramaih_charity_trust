# Graph Report - bans  (2026-07-07)

## Corpus Check
- 49 files · ~299,149 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 221 nodes · 323 edges · 24 communities (17 shown, 7 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS · INFERRED: 1 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

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

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 18 edges
2. `useDonation()` - 15 edges
3. `compilerOptions` - 15 edges
4. `scripts` - 10 edges
5. `Icon()` - 10 edges
6. `SEO()` - 8 edges
7. `LeafBranch()` - 6 edges
8. `site` - 6 edges
9. `rules` - 3 edges
10. `BaseProps` - 3 edges

## Surprising Connections (you probably didn't know these)
- `robots.txt Sitemap Directive` --references--> `Kanneganti Venkataramaiah Charitable Trust Site`  [INFERRED]
  public/robots.txt → index.html
- `DonationModal()` --calls--> `useDonation()`  [EXTRACTED]
  src/components/DonationModal.tsx → src/context/DonationContext.tsx
- `Navbar()` --calls--> `useDonation()`  [EXTRACTED]
  src/components/Navbar.tsx → src/context/DonationContext.tsx
- `Gallery()` --calls--> `useDonation()`  [EXTRACTED]
  src/pages/Gallery.tsx → src/context/DonationContext.tsx
- `Home()` --calls--> `useDonation()`  [EXTRACTED]
  src/pages/Home.tsx → src/context/DonationContext.tsx

## Import Cycles
- None detected.

## Communities (24 total, 7 thin omitted)

### Community 0 - "Contact, CTA & Donation UI"
Cohesion: 0.16
Nodes (9): ContactCard(), ContactCardProps, CTASectionProps, Icon(), IconProps, paths, SocialIcon(), SocialIconProps (+1 more)

### Community 1 - "Decorative & Hero Section Components"
Cohesion: 0.09
Nodes (21): DecoProps, LeafBranch(), PageHeroProps, SectionTitleProps, SEO(), SEOProps, faqs, eventHighlights (+13 more)

### Community 2 - "Card Components (Initiative/Stat/Story)"
Cohesion: 0.12
Nodes (14): iconMap, InitiativeCardProps, iconMap, StatCardProps, StoryCardProps, homeInitiatives, homeStats, homeStories (+6 more)

### Community 3 - "App TS Config"
Cohesion: 0.10
Nodes (19): compilerOptions, allowArbitraryExtensions, allowImportingTsExtensions, erasableSyntaxOnly, jsx, lib, module, moduleDetection (+11 more)

### Community 4 - "App Shell & Donation Context"
Cohesion: 0.11
Nodes (19): App(), DonationModal(), LogoProps, Navbar(), withCaret, ScrollToTop(), DonationContext, DonationContextType (+11 more)

### Community 5 - "Package Dependencies"
Cohesion: 0.09
Nodes (21): dependencies, lucide-react, react, react-dom, react-helmet-async, react-router-dom, sharp, name (+13 more)

### Community 6 - "Node TS Config"
Cohesion: 0.12
Nodes (16): compilerOptions, allowImportingTsExtensions, erasableSyntaxOnly, lib, module, moduleDetection, noEmit, noFallthroughCasesInSwitch (+8 more)

### Community 7 - "Dev Tooling Dependencies"
Cohesion: 0.18
Nodes (11): devDependencies, autoprefixer, oxlint, postcss, tailwindcss, @types/node, @types/react, @types/react-dom (+3 more)

### Community 8 - "Button Component"
Cohesion: 0.32
Nodes (6): BaseProps, ButtonAsButton, ButtonAsLink, ButtonProps, Variant, variantClass

### Community 10 - "Stories Page Data"
Cohesion: 0.46
Nodes (6): beforeAfter, featuredStory, journeySteps, moreStories, storiesStats, testimonials

### Community 11 - "Oxlint Rules Config"
Cohesion: 0.33
Nodes (5): plugins, rules, react/only-export-components, react/rules-of-hooks, $schema

### Community 12 - "Vite/React/Oxlint Template Concepts"
Cohesion: 0.50
Nodes (3): Expanding the Oxlint configuration, React Compiler, React + TypeScript + Vite

## Knowledge Gaps
- **111 isolated node(s):** `$schema`, `plugins`, `react/rules-of-hooks`, `react/only-export-components`, `name` (+106 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **7 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `useDonation()` connect `App Shell & Donation Context` to `Decorative & Hero Section Components`, `Card Components (Initiative/Stat/Story)`, `Stories Page Data`?**
  _High betweenness centrality (0.025) - this node is a cross-community bridge._
- **Why does `devDependencies` connect `Dev Tooling Dependencies` to `Package Dependencies`?**
  _High betweenness centrality (0.011) - this node is a cross-community bridge._
- **What connects `$schema`, `plugins`, `react/rules-of-hooks` to the rest of the system?**
  _111 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Decorative & Hero Section Components` be split into smaller, more focused modules?**
  _Cohesion score 0.08912655971479501 - nodes in this community are weakly interconnected._
- **Should `Card Components (Initiative/Stat/Story)` be split into smaller, more focused modules?**
  _Cohesion score 0.11594202898550725 - nodes in this community are weakly interconnected._
- **Should `App TS Config` be split into smaller, more focused modules?**
  _Cohesion score 0.1 - nodes in this community are weakly interconnected._
- **Should `App Shell & Donation Context` be split into smaller, more focused modules?**
  _Cohesion score 0.10591133004926108 - nodes in this community are weakly interconnected._
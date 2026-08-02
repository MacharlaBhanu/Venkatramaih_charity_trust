import { Helmet } from 'react-helmet-async';
import { site } from '../data/siteData';

interface SEOProps {
  title: string;
  description?: string;
  path: string;
  breadcrumb?: { name: string; path: string }[];
}

const ogImage = `${site.url}/social-share.png`;

export default function SEO({ title, description, path, breadcrumb }: SEOProps) {
  const desc = description ?? site.description;
  const canonical = `${site.url}${path}`;

  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'NGO',
    name: site.name,
    url: site.url,
    logo: `${site.url}/favicon.svg`,
    description: site.description,
    email: site.emails[0],
    telephone: site.phones[0],
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Plot No. 12, Road No. 3, Banjara Hills',
      addressLocality: 'Hyderabad',
      addressRegion: 'Telangana',
      postalCode: site.address.pincode,
      addressCountry: 'IN',
    },
    sameAs: site.socials.map((s) => s.href),
  };

  const breadcrumbSchema = breadcrumb && {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumb.map((b, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: b.name,
      item: `${site.url}${b.path}`,
    })),
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={desc} />
      <link rel="canonical" href={canonical} />
      <meta name="robots" content="index, follow" />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={site.name} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:secure_url" content={ogImage} />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={`${site.name} logo`} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={`${site.name} logo`} />

      <script type="application/ld+json">{JSON.stringify(orgSchema)}</script>
      {breadcrumbSchema && (
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      )}
    </Helmet>
  );
}

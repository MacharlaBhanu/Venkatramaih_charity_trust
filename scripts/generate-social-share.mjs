import sharp from 'sharp';

const background = 'public/assets/social/share-background.png';
const output = 'public/social-share.png';

const overlay = Buffer.from(`
  <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
    <rect x="154" y="145" width="892" height="340" rx="34" fill="#ffffff" stroke="#dcefeb" stroke-width="2"/>

    <g transform="translate(205 191) scale(4.45)">
      <path d="M32 6c-4 8-4 16 0 24 4-8 4-16 0-24z" fill="#5BBFEF"/>
      <path d="M32 30C24 26 16 26 10 30c6 4 14 6 22 4-2-2-2-4 0-4z" fill="#1689C7"/>
      <path d="M32 30c8-4 16-4 22 0-6 4-14 6-22 4 2-2 2-4 0-4z" fill="#9DE6D0"/>
      <path d="M22 16c-2 8 2 14 10 18-2-8-4-14-10-18z" fill="#6BCDB6"/>
      <path d="M42 16c2 8-2 14-10 18 2-8 4-14 10-18z" fill="#5BBFEF"/>
      <circle cx="32" cy="46" r="4" fill="#1689C7"/>
    </g>

    <text x="490" y="245" fill="#12376d" font-family="Georgia, 'Times New Roman', serif" font-size="42" font-weight="700" letter-spacing="1.2">KANNEGANTI</text>
    <text x="490" y="305" fill="#12376d" font-family="Georgia, 'Times New Roman', serif" font-size="42" font-weight="700" letter-spacing="1.2">VENKATARAMAIAH</text>
    <text x="490" y="365" fill="#12376d" font-family="Georgia, 'Times New Roman', serif" font-size="42" font-weight="700" letter-spacing="1.2">CHARITABLE TRUST</text>
    <line x1="490" y1="392" x2="939" y2="392" stroke="#6bcdb6" stroke-width="3"/>
    <text x="490" y="431" fill="#397269" font-family="Arial, sans-serif" font-size="24" font-weight="600" letter-spacing="0.5">Compassion Today, Better Tomorrow</text>
  </svg>
`);

await sharp(background)
  .resize(1200, 630, { fit: 'cover', position: 'centre' })
  .composite([{ input: overlay, top: 0, left: 0 }])
  .png({ compressionLevel: 9 })
  .toFile(output);

console.log(`wrote ${output} (1200x630)`);

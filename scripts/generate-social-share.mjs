import sharp from 'sharp';

const background = 'public/assets/social/share-background.png';
const homepageLogo = 'public/assets/home/logo_mark.png';
const output = 'public/social-share-v2.png';

const overlay = Buffer.from(`
  <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
    <rect x="154" y="145" width="892" height="340" rx="34" fill="#ffffff" stroke="#dcefeb" stroke-width="2"/>

    <text x="490" y="245" fill="#12376d" font-family="Georgia, 'Times New Roman', serif" font-size="42" font-weight="700" letter-spacing="1.2">KANNEGANTI</text>
    <text x="490" y="305" fill="#12376d" font-family="Georgia, 'Times New Roman', serif" font-size="42" font-weight="700" letter-spacing="1.2">VENKATARAMAIAH</text>
    <text x="490" y="365" fill="#12376d" font-family="Georgia, 'Times New Roman', serif" font-size="42" font-weight="700" letter-spacing="1.2">CHARITABLE TRUST</text>
    <line x1="490" y1="392" x2="939" y2="392" stroke="#6bcdb6" stroke-width="3"/>
    <text x="490" y="431" fill="#397269" font-family="Arial, sans-serif" font-size="24" font-weight="600" letter-spacing="0.5">Compassion Today, Better Tomorrow</text>
  </svg>
`);

// Crop the exact lotus used by the homepage header and upscale it without
// redrawing or changing the official gradients and leaf shapes.
const { data: logoPixels, info: logoInfo } = await sharp(homepageLogo)
  .extract({ left: 130, top: 24, width: 760, height: 566 })
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

for (let i = 0; i < logoPixels.length; i += logoInfo.channels) {
  const high = Math.max(logoPixels[i], logoPixels[i + 1], logoPixels[i + 2]);
  const low = Math.min(logoPixels[i], logoPixels[i + 1], logoPixels[i + 2]);
  const chroma = high - low;
  if (chroma <= 5) logoPixels[i + 3] = 0;
  else if (chroma < 30) logoPixels[i + 3] = Math.round(((chroma - 5) / 25) * 255);
}

const logoMark = await sharp(logoPixels, { raw: logoInfo })
  .trim({ background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .resize({ width: 220, kernel: sharp.kernel.lanczos3 })
  .png()
  .toBuffer();

await sharp(background)
  .resize(1200, 630, { fit: 'cover', position: 'centre' })
  .composite([
    { input: overlay, top: 0, left: 0 },
    { input: logoMark, top: 242, left: 238 },
  ])
  .png({ compressionLevel: 9 })
  .toFile(output);

console.log(`wrote ${output} (1200x630)`);

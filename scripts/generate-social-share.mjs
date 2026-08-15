import sharp from 'sharp';

const background = 'public/assets/social/share-background.png';
const homepageLogo = 'public/assets/home/kvr-logo.png';
const output = 'public/social-share-v2.png';

const overlay = Buffer.from(`
  <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
    <rect x="154" y="145" width="892" height="340" rx="34" fill="#ffffff" stroke="#a8ded7" stroke-width="2"/>
    <line x1="492" y1="192" x2="492" y2="452" stroke="#46bda7" stroke-width="2"/>

    <text x="535" y="245" fill="#12376d" font-family="Georgia, 'Times New Roman', serif" font-size="42" font-weight="700" letter-spacing="1.2">KANNEGANTI</text>
    <text x="535" y="305" fill="#12376d" font-family="Georgia, 'Times New Roman', serif" font-size="42" font-weight="700" letter-spacing="1.2">VENKATARAMAIAH</text>
    <text x="535" y="365" fill="#12376d" font-family="Georgia, 'Times New Roman', serif" font-size="42" font-weight="700" letter-spacing="1.2">CHARITABLE TRUST</text>
    <line x1="535" y1="392" x2="1005" y2="392" stroke="#26b99f" stroke-width="3"/>
    <text x="535" y="431" fill="#17695f" font-family="Arial, sans-serif" font-size="24" font-weight="600" letter-spacing="0.5">Compassion Today, Better Tomorrow</text>
  </svg>
`);

// Crop the exact lotus used by the homepage header and upscale it without
// redrawing or changing the official gradients and leaf shapes.
const { data: logoPixels, info: logoInfo } = await sharp(homepageLogo)
  .extract({ left: 0, top: 0, width: 997, height: 875 })
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
  .resize({ width: 290, kernel: sharp.kernel.lanczos3 })
  .png()
  .toBuffer();

await sharp(background)
  .resize(1200, 630, { fit: 'cover', position: 'centre' })
  .composite([
    { input: overlay, top: 0, left: 0 },
    { input: logoMark, top: 188, left: 215 },
  ])
  .png({ compressionLevel: 9 })
  .toFile(output);

console.log(`wrote ${output} (1200x630)`);

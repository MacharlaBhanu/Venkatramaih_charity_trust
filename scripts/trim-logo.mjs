import sharp from 'sharp';

const dir = 'public/assets/home';

// Trim surrounding transparent/near-uniform padding so the logo renders as large
// as possible within the navbar height.
const meta = await sharp(`${dir}/logo_main_raw.png`)
  .trim({ threshold: 10 })
  .toFile(`${dir}/logo_main.png`);

console.log('trimmed logo_main.png ->', meta.width + 'x' + meta.height);

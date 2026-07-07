import sharp from 'sharp';

const dir = 'public/assets/home';
const src = `${dir}/logo_main.png`;

const { width, height } = await sharp(src).metadata();

// The lotus mark occupies roughly the top ~60% of the logo (above the wordmark).
const markH = Math.round(height * 0.6);
await sharp(src)
  .extract({ left: 0, top: 0, width, height: markH })
  .trim({ threshold: 10 })
  .toFile(`${dir}/logo_mark.png`);

const m = await sharp(`${dir}/logo_mark.png`).metadata();
console.log('logo_mark.png ->', m.width + 'x' + m.height);

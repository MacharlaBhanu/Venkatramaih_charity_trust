import sharp from 'sharp';

const dir = 'public/assets/home';
// Footer background color #EEF8FF
const BG = { r: 0xee, g: 0xf8, b: 0xff };

const { data, info } = await sharp(`${dir}/logo_main_raw.png`)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

const { width, height, channels } = info;
for (let i = 0; i < data.length; i += channels) {
  const r = data[i];
  const g = data[i + 1];
  const b = data[i + 2];
  // Recolor near-white background (and internal white highlights) to footer blue.
  if (Math.min(r, g, b) >= 235) {
    data[i] = BG.r;
    data[i + 1] = BG.g;
    data[i + 2] = BG.b;
    data[i + 3] = 255;
  }
}

await sharp(data, { raw: { width, height, channels } })
  .png()
  .toFile(`${dir}/logo_footer.png`);

console.log('wrote logo_footer.png', `${width}x${height} on #EEF8FF`);

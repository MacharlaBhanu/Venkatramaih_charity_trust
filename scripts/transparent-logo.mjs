import sharp from 'sharp';

const dir = 'public/assets/home';

async function keyWhite(inFile, outFile) {
  const img = sharp(inFile).ensureAlpha();
  const { data, info } = await img.raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;
  for (let i = 0; i < data.length; i += channels) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    const min = Math.min(r, g, b);
    // Near-white -> transparent; soft edge between 236 and 250
    if (min >= 250) {
      data[i + 3] = 0;
    } else if (min >= 236) {
      data[i + 3] = Math.round(((250 - min) / 14) * 255);
    }
  }
  await sharp(data, { raw: { width, height, channels } })
    .png()
    .toFile(`${dir}/${outFile}`);
  console.log('wrote', outFile, `${width}x${height}`);
}

await keyWhite(`${dir}/logo_mark.png`, 'logo_mark.png');
await keyWhite(`${dir}/logo_main.png`, 'logo_main.png');

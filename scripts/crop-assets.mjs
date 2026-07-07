import sharp from 'sharp';

const dir = 'public/assets/home';

// Story assets: photo occupies roughly the top ~55% (title text is baked into the bottom).
// Crop the photo-only region, upscale ~3x for crisper display.
const stories = [
  { in: '09_story_success.png', w: 137, h: 73 },
  { in: '10_story_healthcare.png', w: 148, h: 73 },
  { in: '11_story_empowered.png', w: 150, h: 73 },
];

for (const s of stories) {
  const cropH = Math.round(s.h * 0.55); // photo region
  const out = s.in.replace('.png', '_img.png');
  await sharp(`${dir}/${s.in}`)
    .extract({ left: 0, top: 0, width: s.w, height: cropH })
    .resize({ width: s.w * 3, kernel: 'lanczos3' })
    .toFile(`${dir}/${out}`);
  console.log('cropped', out, `${s.w}x${cropH} -> ${s.w * 3}w`);
}

// Footer logo: lotus + name occupy the top; a partial tagline is baked at the bottom.
// Crop to remove the baked tagline, upscale for crispness.
{
  const w = 138;
  const h = 77;
  const cropH = Math.round(h * 0.74);
  await sharp(`${dir}/03_logo_footer.png`)
    .extract({ left: 0, top: 0, width: w, height: cropH })
    .resize({ width: w * 3, kernel: 'lanczos3' })
    .toFile(`${dir}/03_logo_footer_clean.png`);
  console.log('cropped 03_logo_footer_clean.png', `${w}x${cropH} -> ${w * 3}w`);
}

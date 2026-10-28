const https = require('https');
const fs = require('fs');
const path = require('path');

const images = [
  'images/logo-monogram.webp',
  'images/logo-wordmark.webp',
  'images/logo-trimmed.webp',
  'images/logo-trimmed.png',
  'images/hero.jpg',
  'images/vito.jpg',
  'images/scudo.jpg',
  'images/partners/team.jpg',
  'images/apart/on-board.jpg',
  'images/apart/open-24-7.jpg',
  'images/apart/meet-and-greet.jpg',
  'images/apart/free-cancellation.jpg',
  'images/vito-night.jpg',
  'images/amine.jpg',
  'images/contact.jpg'
];

async function download(urlPath) {
  const fullUrl = 'https://keshmajesticmobility.com/' + urlPath;
  const dest = path.join(__dirname, 'public', urlPath);
  fs.mkdirSync(path.dirname(dest), { recursive: true });

  return new Promise((resolve) => {
    https.get(fullUrl, (res) => {
      if (res.statusCode === 200) {
        const fileStream = fs.createWriteStream(dest);
        res.pipe(fileStream);
        fileStream.on('finish', () => {
          fileStream.close();
          console.log('Downloaded:', urlPath);
          resolve();
        });
      } else {
        console.warn('Failed (status ' + res.statusCode + '):', urlPath);
        resolve();
      }
    }).on('error', (err) => {
      console.error('Error on ' + urlPath + ':', err.message);
      resolve();
    });
  });
}

(async () => {
  for (const img of images) {
    await download(img);
  }
  console.log('All downloads finished!');
})();

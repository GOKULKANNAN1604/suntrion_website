const { Jimp } = require('jimp');

async function processImage() {
  try {
    const image = await Jimp.read('public/favicon.png');
    
    // Convert all "yellow" pixels to "white"
    image.scan(0, 0, image.bitmap.width, image.bitmap.height, function(x, y, idx) {
      var red   = this.bitmap.data[idx + 0];
      var green = this.bitmap.data[idx + 1];
      var blue  = this.bitmap.data[idx + 2];
      
      // If it is yellowish (red>150, green>150, blue<200)
      if (red > 150 && green > 150 && blue < 200) {
        if (Math.abs(red - green) < 40) {
          // Make it white
          this.bitmap.data[idx + 0] = 255;
          this.bitmap.data[idx + 1] = 255;
          this.bitmap.data[idx + 2] = 255;
          this.bitmap.data[idx + 3] = 255;
        }
      }
    });

    let minX = image.bitmap.width;
    let minY = image.bitmap.height;
    let maxX = 0;
    let maxY = 0;

    image.scan(0, 0, image.bitmap.width, image.bitmap.height, function(x, y, idx) {
      var red   = this.bitmap.data[idx + 0];
      var green = this.bitmap.data[idx + 1];
      var blue  = this.bitmap.data[idx + 2];
      // if it is distinctly blue or dark (not white)
      if (red < 240 || green < 240 || blue < 240) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    });

    if (maxX < minX || maxY < minY) {
      console.log('No blue spiral found, using whole image');
      minX = 0; minY = 0; maxX = image.bitmap.width; maxY = image.bitmap.height;
    }

    const spiralWidth = maxX - minX;
    const spiralHeight = maxY - minY;
    
    const size = Math.max(spiralWidth, spiralHeight);
    
    // Add 10% padding on each side to create the white square look
    const padding = Math.floor(size * 0.10);
    const totalSize = size + padding * 2;
    
    // Crop the exact spiral
    image.crop({ x: minX, y: minY, w: spiralWidth, h: spiralHeight });

    // Create a new white square image
    // Note: Jimp in v1 doesn't allow `new Jimp()`. We should use Jimp.create(w, h, color)
    // Actually, creating a new image is easiest by just reading a 1x1 image or resizing a clone and filling it.
    // Let's clone the image, resize it to totalSize x totalSize, and fill it with white.
    const background = image.clone();
    background.resize({ w: totalSize, h: totalSize });
    
    background.scan(0, 0, background.bitmap.width, background.bitmap.height, function(x, y, idx) {
      this.bitmap.data[idx + 0] = 255;
      this.bitmap.data[idx + 1] = 255;
      this.bitmap.data[idx + 2] = 255;
      this.bitmap.data[idx + 3] = 255;
    });
    
    const destX = Math.floor((totalSize - spiralWidth) / 2);
    const destY = Math.floor((totalSize - spiralHeight) / 2);
    
    background.composite(image, destX, destY);

    await background.write('public/favicon.png');
    console.log('Processed image saved successfully!');
  } catch (err) {
    console.error('Error:', err);
  }
}

processImage();

const fs = require('fs');
const path = require('path');
const { cmd } = require('../command');

const pdfStorage = {}; // Temporary storage for images per user

cmd({
  pattern: "pdf",
  desc: "Convert images to PDF",
  category: "convert",
  filename: __filename
}, async (mek, m, { reply, text, isMedia, quoted, mime, sender }) => {
  try {
    const user = sender;
    
    if (!text) {
      return reply('_Reply to any image, get help using ".pdf help" command_');
    }

    if (text.toLowerCase() === "help") {
      return reply(
        `_1. Input images using .pdf image_\n`
        + `_2. Get output PDF using .pdf get_\n`
        + `_3. Added images by mistake? Delete all inputted images using .pdf delete_\n`
        + `_4. All files will be auto-deleted after the output is produced_`
      );
    }

    if (text.toLowerCase() === "image") {
      if (!isMedia || !/image/.test(mime)) {
        return reply("❌ *Please reply to an image with `.pdf image`.*");
      }

      // Download the image
      const media = await conn.downloadMediaMessage(quoted);
      const dir = path.join(__dirname, "pdf_temp", user);
      const filename = `${Date.now()}.jpg`;

      // Create user folder if it doesn't exist
      if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

      // Save the image to the user's folder
      fs.writeFileSync(path.join(dir, filename), media);

      if (!pdfStorage[user]) pdfStorage[user] = [];
      pdfStorage[user].push(filename);

      return reply(`✅ *_Successfully saved image_*\n`
        + `_*Total saved images: ${pdfStorage[user].length}*_\n`
        + `*_After saving all images, use '.pdf get' to get the result. Images will be deleted after conversion!_*`);
    }

    if (text.toLowerCase() === "get") {
      const dir = path.join(__dirname, "pdf_temp", user);
      if (!fs.existsSync(dir) || !pdfStorage[user] || pdfStorage[user].length === 0) {
        return reply("❌ *No images found! Use `.pdf image` to add some.*");
      }

      const pdfPath = path.join(dir, "output.pdf");
      const doc = new PDFDocument({ autoFirstPage: false });

      const stream = fs.createWriteStream(pdfPath);
      doc.pipe(stream);

      // Add each saved image to the PDF
      for (const img of pdfStorage[user]) {
        const imgPath = path.join(dir, img);
        const { width, height } = doc.page;
        doc.addPage({ size: [width, height] });
        doc.image(imgPath, 0, 0, { fit: [width, height] });
      }

      doc.end();

      // Once PDF is created, send it and delete temporary files
      stream.on("finish", async () => {
        await conn.sendMessage(m.chat, { document: fs.readFileSync(pdfPath), mimetype: "application/pdf", fileName: "document.pdf" });
        fs.rmSync(dir, { recursive: true, force: true });
        delete pdfStorage[user];
      });
    }

    if (text.toLowerCase() === "delete") {
      // Delete user's stored images
      const dir = path.join(__dirname, "pdf_temp", user);
      if (fs.existsSync(dir)) fs.rmSync(dir, { recursive: true, force: true });
      delete pdfStorage[user];
      return reply("✅ *All saved images have been deleted!*");
    }

  } catch (error) {
    console.error("Error in .pdf command:", error);
    reply("❌ *An error occurred while executing the PDF command.*");
  }
});
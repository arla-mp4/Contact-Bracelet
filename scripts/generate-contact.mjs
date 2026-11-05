/*
Cat Millwood - Generate downloadable contact card
*/

import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const imagePath = "public/images/cm-contact.svg";
const photoPath = "public/images/cm-contact.png";
const contactPath = "public/contact/cat-millwood.vcf";

// CM - Convert the monogram into a PNG contact photo.
await sharp(imagePath)
  .png()
  .toFile(photoPath);

// CM - Read the PNG and convert it to Base64 for the vCard.
const photo = fs.readFileSync(photoPath).toString("base64");

// CM - Wrap Base64 lines for vCard compatibility.
function wrapBase64(value, width = 72) {
  const lines = value.match(new RegExp(`.{1,${width}}`, "g")) || [];

  return lines
    .map((line, index) => (index === 0 ? line : ` ${line}`))
    .join("\r\n");
}

const contact = [
  "BEGIN:VCARD",
  "VERSION:3.0",
  "N:Millwood;Cat;;;",
  "FN:Cat Millwood",
  "EMAIL;TYPE=INTERNET:caitlinmillwood40@gmail.com",
  "URL:https://catmillwood.com",
  "TITLE:Photographer",
  "NOTE:Creative mind. Tech enthusiast. Photographer.",
  "X-SOCIALPROFILE;TYPE=instagram:https://www.instagram.com/cat.millwood.photography/",
  "X-SOCIALPROFILE;TYPE=linkedin:https://www.linkedin.com/in/cat-millwood-4a694224b/",
  "X-SOCIALPROFILE;TYPE=github:https://github.com/arla-mp4",
  `PHOTO;ENCODING=b;TYPE=PNG:${wrapBase64(photo)}`,
  "END:VCARD"
].join("\r\n");

fs.mkdirSync(path.dirname(contactPath), { recursive: true });
fs.writeFileSync(contactPath, contact + "\r\n", "utf8");

console.log("CM contact card created successfully!");
console.log(`Photo: ${photoPath}`);
console.log(`Contact: ${contactPath}`);
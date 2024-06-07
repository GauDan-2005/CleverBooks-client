const fs = require("fs");
const path = require("path");

// Function to convert a string to camel case
const toCamelCase = (str) => {
  return str
    .toLowerCase()
    .replace(/[-_\s]+(.)?/g, (_, c) => (c ? c.toUpperCase() : ""))
    .replace(/^\w/, (c) => c.toLowerCase())
    .replace(/\.(png|jpe?g|svg|gif)$/i, "");
};

// Directory containing the images
const imagesDir = path.join(__dirname, "..", "assets");

// Output file
const outputFile = path.join(__dirname, "..", "constants", "Image.js");

// Read all files in the images directory
fs.readdir(imagesDir, (err, files) => {
  if (err) {
    return console.error("Unable to read directory:", err);
  }

  // Filter out non-image files
  const imageFiles = files.filter((file) =>
    /\.(png|jpe?g|svg|gif)$/i.test(file)
  );

  // Generate import statements and export object entries
  const imports = imageFiles
    .map((file) => {
      const variableName = toCamelCase(path.basename(file, path.extname(file)));
      return `import ${variableName} from "../assets/${file}";`;
    })
    .join("\n");

  const exports = `const images = {\n  ${imageFiles
    .map((file) => {
      const variableName = toCamelCase(path.basename(file, path.extname(file)));
      return `${variableName},`;
    })
    .join("\n  ")}\n};\n\nexport default images;`;

  // Combine imports and exports
  const content = `${imports}\n\n${exports}`;

  // Write the content to the output file
  fs.writeFile(outputFile, content, (err) => {
    if (err) {
      return console.error("Unable to write file:", err);
    }
    console.log("Image index generated successfully!");
  });
});

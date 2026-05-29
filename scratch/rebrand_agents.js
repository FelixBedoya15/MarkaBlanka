const fs = require('fs');
const path = require('path');

const targets = [
  path.join(__dirname, '../Agentes'),
  path.join(__dirname, '../SOMOSSST_DESIGN_RULES.md')
];

function rebrandContent(content) {
  let result = content;
  
  // Specific replacements first (longest/most specific to shortest/most general)
  result = result.replace(/WAPPY IA/g, 'SomosSST');
  result = result.replace(/Wappy IA/g, 'SomosSST');
  result = result.replace(/WAPPY LTDA/g, 'SomosSST S.A.S.');
  result = result.replace(/Wappy LTDA/g, 'SomosSST S.A.S.');
  result = result.replace(/WAPPY/g, 'SomosSST');
  result = result.replace(/Wappy/g, 'SomosSST');
  
  // Lowercase replacements (primarily for code blocks and IDs)
  result = result.replace(/wappy-card/g, 'somossst-card');
  result = result.replace(/wappy-yt-player/g, 'somossst-yt-player');
  result = result.replace(/wappy_comunidad_email/g, 'somossst_comunidad_email');
  result = result.replace(/wappy_lead_captured/g, 'somossst_lead_captured');
  result = result.replace(/wappy_lead_data/g, 'somossst_lead_data');
  result = result.replace(/wappy_signatures/g, 'somossst_signatures');
  result = result.replace(/wappy-auto-signature/g, 'somossst-auto-signature');
  
  // General lowercase wappy
  result = result.replace(/\bwappy\b/g, 'somossst');

  return result;
}

function processFile(filePath) {
  if (!fs.existsSync(filePath)) return;
  const stat = fs.statSync(filePath);
  
  if (stat.isDirectory()) {
    const files = fs.readdirSync(filePath);
    for (const file of files) {
      processFile(path.join(filePath, file));
    }
  } else if (stat.isFile() && filePath.endsWith('.md')) {
    const content = fs.readFileSync(filePath, 'utf8');
    const rebranded = rebrandContent(content);
    if (content !== rebranded) {
      fs.writeFileSync(filePath, rebranded, 'utf8');
      console.log(`Rebranded: ${filePath}`);
    }
  }
}

console.log('Starting rebranding of markdown files...');
for (const target of targets) {
  processFile(target);
}
console.log('Rebranding complete!');

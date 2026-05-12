const fs = require('fs');
const path = require('path');

// Ensure public/images directory exists
const imagesDir = path.join(__dirname, 'public/images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

const images = [
  {
    src: 'C:\\Users\\LENOVO\\.gemini\\antigravity\\brain\\ac0d45eb-7e92-4822-9d23-c7f96aad286f\\gst_billing_preview_1778577648999.png',
    dest: 'public/images/gst_billing_preview_1778577648999.png'
  },
  {
    src: 'C:\\Users\\LENOVO\\.gemini\\antigravity\\brain\\ac0d45eb-7e92-4822-9d23-c7f96aad286f\\inventory_management_preview_1778577667574.png',
    dest: 'public/images/inventory_management_preview_1778577667574.png'
  },
  {
    src: 'C:\\Users\\LENOVO\\.gemini\\antigravity\\brain\\ac0d45eb-7e92-4822-9d23-c7f96aad286f\\business_marketing_preview_1778577683568.png',
    dest: 'public/images/business_marketing_preview_1778577683568.png'
  },
  {
    src: 'C:\\Users\\LENOVO\\.gemini\\antigravity\\brain\\ac0d45eb-7e92-4822-9d23-c7f96aad286f\\real_time_analytics_preview_1778579404688.png',
    dest: 'public/images/real_time_analytics_preview_1778579404688.png'
  },
  {
    src: 'C:\\Users\\LENOVO\\.gemini\\antigravity\\brain\\ac0d45eb-7e92-4822-9d23-c7f96aad286f\\ai_assistant_preview_1778579422874.png',
    dest: 'public/images/ai_assistant_preview_1778579422874.png'
  },
  {
    src: 'C:\\Users\\LENOVO\\.gemini\\antigravity\\brain\\ac0d45eb-7e92-4822-9d23-c7f96aad286f\\leads_crm_preview_1778579439651.png',
    dest: 'public/images/leads_crm_preview_1778579439651.png'
  },
  {
    src: 'C:\\Users\\LENOVO\\.gemini\\antigravity\\brain\\ac0d45eb-7e92-4822-9d23-c7f96aad286f\\advanced_accounting_preview_1778579455482.png',
    dest: 'public/images/advanced_accounting_preview_1778579455482.png'
  },
  {
    src: 'C:\\Users\\LENOVO\\.gemini\\antigravity\\brain\\ac0d45eb-7e92-4822-9d23-c7f96aad286f\\production_tracking_preview_1778579471889.png',
    dest: 'public/images/production_tracking_preview_1778579471889.png'
  }
];

images.forEach(img => {
  try {
    fs.copyFileSync(img.src, path.join(__dirname, img.dest));
    console.log(`Successfully copied ${path.basename(img.src)} to public/images/`);
  } catch (err) {
    console.error(`Error copying ${path.basename(img.src)}:`, err.message);
  }
});

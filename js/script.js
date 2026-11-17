const WHATSAPP = "918796446612";

const services = [
  { id: "visiting", icon: "💳", title: "Visiting Cards", description: "Premium, standard and creative business cards." },
  { id: "billbook", icon: "📒", title: "Bill Books & Notepads", description: "Invoice books, receipt books and notepads." },
  { id: "sticker", icon: "🏷️", title: "Sticker Printing", description: "Product labels, bottle stickers and custom stickers." },
  { id: "banner", icon: "🖼️", title: "Flex & Banners", description: "Shop banners, flex and advertising designs." },
  { id: "stationery", icon: "✉️", title: "Letterheads & Envelopes", description: "Branded office stationery and envelopes." },
  { id: "gifts", icon: "☕", title: "Mug Printing", description: "Custom gifts and promotional products." },
  { id: "photoframe", icon: "🪞", title: "Photo Frame", description: "Customized photo frames for memories, gifts and special occasions." },
  { id: "bags", icon: "🛍️", title: "Bags Printing", description: "Printed D-cut and non-woven bags." },
  { id: "bottles", icon: "🧴", title: "Bottle Printing", description: "Custom bottle labels and branding." },
  { id: "acrylic", icon: "🪟", title: "Acrylic Sheet", description: "Premium customized acrylic sheets, name plates and decorative designs." },
  { id: "other", icon: "🎨", title: "Other Printing Work", description: "Explore more creative printing projects." }
];

/*
  DEMO IMAGES:
  Replace these sample URLs with links to your actual completed projects.
  The images below are inspiration/demo images, not verified SS PRINTING jobs.
*/
const samples = {
  visiting: [
    { title: "Business Card Inspiration", image: "images/visiting/card-1.jpg" },
    // { title: "Creative Design Inspiration", image: "images/visiting/visiting-card-2.jpg" }
  ],
  billbook: [
    { title: "Office Paperwork Inspiration", image: "images/billbook/billbook-1.jpg" },
    { title: "Notebook Inspiration", image: "images/billbook/billbook-2.jpg" }
  ],
  sticker: [
    { title: "Product Label Inspiration", image: "images/sticker/sticker-1.jpg" },
    { title: "Product Packaging Inspiration", image: "images/sticker/sticker-2.jpg" }
  ],
  banner: [
    { title: "Colourful Advertising Inspiration", image: "images/banner/banner-1.jpg" },
    { title: "Creative Background Inspiration", image: "images/banner/banner-2.jpg" }
  ],
  stationery: [
    { title: "Stationery Inspiration", image: "images/stationery/stationery-1.jpg" }
  ],
  gifts: [
    { title: "Creative Product Inspiration", image: "images/gifts/gifts-1.jpg" },
   { title: "Creative Product Inspiration", image: "images/gifts/gifts-2.jpg" },
   { title: "Creative Product Inspiration", image: "images/gifts/gifts-3.jpg" },
   { title: "Creative Product Inspiration", image: "images/gifts/gifts-4.jpg" },
  ],
   photoframe: [
    { title: "Creative Product Inspiration", image: "images/photoframe/gifts-1.jpg" },
  ],
  bags: [
    { title: "Packaging Inspiration", image: "images/bags/bags-1.jpg" }
  ],
  bottles: [
    { title: "Bottle Product Inspiration", image: "images/bottles/bottles-1.jpg" }
  ],
  acrylic: [
    { title: "Acrylic Sheet Product Inspiration", image: "images/acyric/gifts-1.jpg" }
  ],
  other: [
    { title: "Creative Design Inspiration", image: "images/other/other-1.jpg" }
  ]
};

const serviceGrid = document.getElementById("serviceGrid");

function renderServices() {
  serviceGrid.replaceChildren();

  services.forEach(service => {
    const card = document.createElement("article");
    card.className = "card service-card";

    const icon = document.createElement("div");
    icon.className = "service-icon";
    icon.textContent = service.icon;

    const title = document.createElement("h3");
    title.textContent = service.title;

    const description = document.createElement("p");
    description.textContent = service.description;

    const button = document.createElement("button");
    button.className = "view-btn";
    button.textContent = "View Samples →";
    button.addEventListener("click", () => openGallery(service.id));

    card.append(icon, title, description, button);
    serviceGrid.append(card);
  });
}

function openGallery(id) {
  const service = services.find(item => item.id === id);
  if (!service) return;

  document.getElementById("services").style.display = "none";
  document.getElementById("platforms").style.display = "none";
  document.getElementById("contact").style.display = "none";
  document.querySelector(".cta").style.display = "none";
  document.querySelector(".hero").style.display = "none";

  const page = document.getElementById("galleryPage");
  page.style.display = "block";
  document.getElementById("galleryTitle").textContent = service.title + " Samples";
  document.getElementById("galleryDescription").textContent =
    "Explore the sample designs in " + service.title + ". Contact us to discuss your own order.";

  const grid = document.getElementById("sampleGrid");
  grid.replaceChildren();

  const serviceSamples = samples[id] || [];

  if (serviceSamples.length === 0) {
    const message = document.createElement("p");
    message.className = "empty-message";
    message.textContent = "Samples will be added soon. Please contact us for details.";
    grid.append(message);
  }

  serviceSamples.forEach(sample => {
    const card = document.createElement("article");
    card.className = "sample-card";

    const image = document.createElement("img");
    image.src = sample.image;
    image.alt = sample.title;
    image.loading = "lazy";
    image.addEventListener("click", () => showPreview(sample.image, sample.title));
    image.onerror = () => {
      image.alt = "Sample image unavailable";
      image.style.display = "none";
    };

    const info = document.createElement("div");
    info.className = "sample-info";

    const title = document.createElement("h3");
    title.textContent = sample.title;

    const enquiry = document.createElement("a");
    enquiry.className = "view-btn";
    enquiry.textContent = "Enquire About This";
    enquiry.target = "_blank";
    enquiry.rel = "noopener";
    enquiry.href = whatsappLink("Hello SS PRINTING, I am interested in " +
      service.title + " - " + sample.title + ".");

    info.append(title, enquiry);
    card.append(image, info);
    grid.append(card);
  });

  const mainEnquiry = document.getElementById("galleryEnquiry");
  mainEnquiry.href = whatsappLink("Hello SS PRINTING, I want to enquire about " + service.title + ".");

  history.pushState({ gallery: id }, "", "#work-" + id);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function whatsappLink(message) {
  return "https://wa.me/" + WHATSAPP + "?text=" + encodeURIComponent(message);
}

function showHome() {
  document.querySelector(".hero").style.display = "block";
  document.getElementById("services").style.display = "block";
  document.getElementById("platforms").style.display = "block";
  document.getElementById("contact").style.display = "block";
  document.querySelector(".cta").style.display = "block";
  document.getElementById("galleryPage").style.display = "none";
}

function showPreview(url, title) {
  const preview = document.getElementById("preview");
  const image = document.getElementById("previewImage");
  image.src = url;
  image.alt = title;
  preview.style.display = "flex";
}

function closePreview() {
  document.getElementById("preview").style.display = "none";
  document.getElementById("previewImage").src = "";
}

document.addEventListener("keydown", event => {
  if (event.key === "Escape") closePreview();
});

document.getElementById("previewImage").addEventListener("click", event => {
  event.stopPropagation();
});

window.addEventListener("popstate", event => {
  if (event.state && event.state.gallery) {
    openGallery(event.state.gallery);
  } else {
    showHome();
  }
});

document.getElementById("year").textContent = new Date().getFullYear();
renderServices();



// Disable Right Click
document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
    alert("Right Click is Disabled on SS PRINTING Website!");
});

// Disable Keyboard Shortcuts
document.addEventListener("keydown", function (e) {

    // Disable Ctrl and Command shortcuts
    if (
        (e.ctrlKey || e.metaKey) &&
        ["c", "u", "s", "a", "v", "x", "p"].includes(e.key.toLowerCase())
    ) {
        e.preventDefault();
        alert("This action is restricted on SS PRINTING Website!");
    }

    // Disable F12 and developer tool shortcuts
    if (
        e.key === "F12" ||
        (e.ctrlKey && e.shiftKey &&
        ["i", "j", "c"].includes(e.key.toLowerCase()))
    ) {
        e.preventDefault();
        alert("Developer Tools are Disabled!");
    }
});

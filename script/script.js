const WHATSAPP = "918796446612";

const services = [
  { id: "visiting", icon: "💳", title: "Visiting Cards", description: "Premium, standard and creative business cards." },
  { id: "billbook", icon: "📒", title: "Bill Books & Notepads", description: "Invoice books, receipt books and notepads." },
  { id: "sticker", icon: "🏷️", title: "Sticker Printing", description: "Product labels, bottle stickers and custom stickers." },
  { id: "banner", icon: "🖼️", title: "Flex & Banners", description: "Shop banners, flex and advertising designs." },
  { id: "stationery", icon: "✉️", title: "Letterheads & Envelopes", description: "Branded office stationery and envelopes." },
  { id: "gifts", icon: "☕", title: "T-shirt & Mug Printing", description: "Custom gifts and promotional products." },
  { id: "bags", icon: "🛍️", title: "Bags Printing", description: "Printed D-cut and non-woven bags." },
  { id: "bottles", icon: "🧴", title: "Bottle Printing", description: "Custom bottle labels and branding." },
  { id: "other", icon: "🎨", title: "Other Printing Work", description: "Explore more creative printing projects." }
];

/*
  DEMO IMAGES:
  Replace these sample URLs with links to your actual completed projects.
  The images below are inspiration/demo images, not verified SS PRINTING jobs.
*/
const samples = {
  visiting: [
    { title: "Business Card Inspiration", image: "https://images.unsplash.com/photo-1634942536790-2536a6a2c4a8?auto=format&fit=crop&w=900&q=80" },
    { title: "Creative Design Inspiration", image: "https://images.unsplash.com/photo-1589330694653-ded6df03f754?auto=format&fit=crop&w=900&q=80" }
  ],
  billbook: [
    { title: "Office Paperwork Inspiration", image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=900&q=80" },
    { title: "Notebook Inspiration", image: "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=900&q=80" }
  ],
  sticker: [
    { title: "Product Label Inspiration", image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=900&q=80" },
    { title: "Product Packaging Inspiration", image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=900&q=80" }
  ],
  banner: [
    { title: "Colourful Advertising Inspiration", image: "https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&w=900&q=80" },
    { title: "Creative Background Inspiration", image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=900&q=80" }
  ],
  stationery: [
    { title: "Stationery Inspiration", image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=900&q=80" }
  ],
  gifts: [
    { title: "Creative Product Inspiration", image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=900&q=80" },
    { title: "Merchandise Inspiration", image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80" }
  ],
  bags: [
    { title: "Packaging Inspiration", image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=900&q=80" }
  ],
  bottles: [
    { title: "Bottle Product Inspiration", image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=900&q=80" }
  ],
  other: [
    { title: "Creative Design Inspiration", image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=900&q=80" }
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

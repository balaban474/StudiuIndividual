// Select DOM elements
const fileInput = document.getElementById('fileInput');
const gallery = document.getElementById('gallery');

// Handle file input change event
fileInput.addEventListener('change', (event) => {
  // Clear existing images
  gallery.innerHTML = '';

  // Get selected files
  const files = Array.from(event.target.files);

  // Filter image files and display them
  files
    .filter(file => file.type.startsWith('image/'))
    .forEach(file => {
      const reader = new FileReader();

      // Read file and create image element
      reader.onload = () => {
        const img = document.createElement('img');
        img.src = reader.result;
        img.alt = file.name;
        gallery.appendChild(img);
      };

      reader.readAsDataURL(file);
    });
});

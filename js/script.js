// Mobile Navigation
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));

// Gallery Data
const galleryItems = [
    {
        title: "Kbach Ornamentation",
        khmerTitle: "លំអងក្បាច់",
        description: "Intricate decorative patterns found in Khmer architecture",
        image: "images/painting/kbach-pattern.jpg",
        category: "religious"
    },
    {
        title: "Apsara Celestial Dancers",
        khmerTitle: "អប្សរា",
        description: "Divine dancers from Khmer mythology and temple reliefs",
        image: "images/painting/apsara-painting.jpg",
        category: "mythological"
    },
    {
        title: "Reamker Illustration",
        khmerTitle: "រាមកេរ្ដិ៍",
        description: "Scenes from the Cambodian version of the Ramayana epic",
        image: "images/painting/reamker-illustration.jpg",
        category: "mythological"
    },
    {
        title: "Angkor Landscape",
        khmerTitle: "អង្គរវត្ត",
        description: "Traditional depictions of Angkor Wat and surrounding temples",
        image: "images/painting/angkor-landscape.jpg",
        category: "historical"
    },
    {
        title: "Nature Drawing",
        khmerTitle: "រូបភាពធម្មជាតិ",
        description: "Flora and fauna depicted in traditional Khmer style",
        image: "images/painting/nature-drawing.jpg",
        category: "nature"
    },
    {
        title: "Daily Life Painting",
        khmerTitle: "ជីវភាពប្រចាំថ្ងៃ",
        description: "Scenes from traditional Cambodian village life",
        image: "images/painting/daily-life-painting.jpg",
        category: "historical"
    }
];

// Artists Data
const artists = [
    {
        name: "Vann Nath",
        khmerName: "វ៉ាន់ ណាត",
        specialty: "Painter of the Khmer Rouge period",
        bio: "One of Cambodia's most renowned painters, known for his depictions of life under the Khmer Rouge",
        image: "images/artists/vann-nath.jpg"
    },
    {
        name: "Sovann Phum",
        khmerName: "សុវណ្ណភូមិ",
        specialty: "Traditional mural artist",
        bio: "Master of traditional Khmer mural painting techniques used in temples",
        image: "images/artists/sovann-phum.jpg"
    },
    {
        name: "Sam Phan",
        khmerName: "សំ ផន",
        specialty: "Kbach ornamentation",
        bio: "Specialist in traditional Khmer decorative patterns and motifs",
        image: "images/artists/sam-phan.jpg"
    },
    {
        name: "Sakal Sam",
        khmerName: "សាគល សំ",
        specialty: "Contemporary traditional painting",
        bio: "Blending traditional Khmer themes with modern techniques",
        image: "images/artists/sakal-sam.jpg"
    }
];

// Populate Gallery
function populateGallery() {
    const galleryGrid = document.querySelector('.gallery-grid');
    
    galleryItems.forEach(item => {
        const galleryItem = document.createElement('div');
        galleryItem.classList.add('gallery-item');
        galleryItem.dataset.category = item.category;
        
        galleryItem.innerHTML = `
            <div class="gallery-img" style="background: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('${item.image}') no-repeat center center/cover"></div>
            <div class="gallery-info">
                <h3>${item.khmerTitle}</h3>
                <h3>${item.title}</h3>
                <p>${item.description}</p>
                <div class="gallery-tags">
                    <span class="gallery-tag">${item.category}</span>
                </div>
            </div>
        `;
        
        galleryGrid.appendChild(galleryItem);
    });
}

// Populate Artists
function populateArtists() {
    const artistsGrid = document.querySelector('.artists-grid');
    
    artists.forEach(artist => {
        const artistCard = document.createElement('div');
        artistCard.classList.add('artist-card');
        
        artistCard.innerHTML = `
            <div class="artist-img" style="background: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('${artist.image}') no-repeat center center/cover"></div>
            <div class="artist-info">
                <h3>${artist.khmerName}</h3>
                <h3>${artist.name}</h3>
                <span class="artist-specialty">${artist.specialty}</span>
                <p>${artist.bio}</p>
            </div>
        `;
        
        artistsGrid.appendChild(artistCard);
    });
}

// Filter Gallery
function setupGalleryFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');
            
            const filter = btn.dataset.filter;
            const galleryItems = document.querySelectorAll('.gallery-item');
            
            galleryItems.forEach(item => {
                if (filter === 'all' || item.dataset.category === filter) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
}

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    populateGallery();
    populateArtists();
    setupGalleryFilters();
    
    // Add scroll event listener for navbar
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.khmer-header');
        if (window.scrollY > 50) {
            navbar.style.padding = '0';
            navbar.style.backgroundColor = 'rgba(26, 26, 26, 0.98)';
        } else {
            navbar.style.padding = '0';
            navbar.style.backgroundColor = 'rgba(26, 26, 26, 0.95)';
        }
    });
    
    // Form submission
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for your message. We will get back to you soon!');
            contactForm.reset();
        });
    }
    
    // Newsletter form submission
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for subscribing to our newsletter!');
            newsletterForm.reset();
        });
    }
    
    // Add animation to cultural elements
    const culturalElements = document.querySelectorAll('.cultural-element');
    culturalElements.forEach((element, index) => {
        element.style.animation = `fadeInUp 1s ease ${index * 0.2}s forwards`;
        element.style.opacity = '0';
    });
});
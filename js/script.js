/**
 * Explore India - Tourism Management Website
 * Main JavaScript File
 */

// ============================================
// Destination Data
// ============================================
const destinations = {
    'taj-mahal': {
        id: 'taj-mahal',
        name: 'Taj Mahal',
        state: 'Agra, Uttar Pradesh',
        category: 'historical',
        rating: 4.8,
        price: 2999,
        description: 'An ivory-white marble mausoleum, a symbol of eternal love and UNESCO World Heritage Site.',
        heroImage: 'https://images.pexels.com/photos/5458388/pexels-photo-5458388.jpeg?auto=compress&cs=tinysrgb&w=1920',
        images: [
            'https://images.pexels.com/photos/5458388/pexels-photo-5458388.jpeg?auto=compress&cs=tinysrgb&w=600',
            'https://images.pexels.com/photos/3581364/pexels-photo-3581364.jpeg?auto=compress&cs=tinysrgb&w=600',
            'https://images.pexels.com/photos/2161467/pexels-photo-2161467.jpeg?auto=compress&cs=tinysrgb&w=600'
        ],
        history: 'The Taj Mahal was commissioned in 1632 by Emperor Shah Jahan to house the tomb of his favorite wife, Mumtaz Mahal. This white marble masterpiece took 22 years to complete with the help of 20,000 workers. Considered one of the finest examples of Mughal architecture, it combines elements from Persian, Islamic, and Indian architectural styles.',
        bestTime: 'October to March (Pleasant weather)',
        openingHours: 'Sunrise to Sunset (Closed on Fridays)',
        entryFee: 'Indians: ₹50, Foreigners: ₹1100',
        location: 'Dharmapuri, Forest Colony, Tajganj, Agra, Uttar Pradesh 282001',
        nearbyAttractions: ['Agra Fort', 'Mehtab Bagh', 'Fatehpur Sikri', 'Tomb of I\'timad-ud-Daulah'],
        travelTips: [
            'Visit early morning for the best views and fewer crowds',
            'Book tickets online to avoid long queues',
            'Hire a certified guide for rich historical insights',
            'Carry water and wear comfortable shoes',
            'Photography is allowed but tripods are not permitted'
        ],
        mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.891265766847!2d78.03956781504528!3d27.175144982609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39747121d702ff6d%3A0xdd2a9bf6df4ea16a!2sTaj%20Mahal!5e0!3m2!1sen!2sin!4v1650000000000!5m2!1sen!2sin'
    },
    'golden-temple': {
        id: 'golden-temple',
        name: 'Golden Temple',
        state: 'Amritsar, Punjab',
        category: 'temple',
        rating: 5.0,
        price: 1999,
        description: 'The holiest Gurdwara and the most spiritually significant site of Sikhism.',
        heroImage: 'https://images.pexels.com/photos/3581364/pexels-photo-3581364.jpeg?auto=compress&cs=tinysrgb&w=1920',
        images: [
            'https://images.pexels.com/photos/3581364/pexels-photo-3581364.jpeg?auto=compress&cs=tinysrgb&w=600',
            'https://images.pexels.com/photos/5458388/pexels-photo-5458388.jpeg?auto=compress&cs=tinysrgb&w=600',
            'https://images.pexels.com/photos/2409091/pexels-photo-2409091.jpeg?auto=compress&cs=tinysrgb&w=600'
        ],
        history: 'The Golden Temple, also known as Sri Harmandir Sahib, is the holiest Gurdwara of Sikhism. Founded in 1577 by Guru Ram Das, the fourth Sikh Guru, the current structure was completed in 1604. The temple is covered with real gold foil and the surrounding sacred pool is known for its healing properties.',
        bestTime: 'October to March',
        openingHours: 'Open 24 hours (All days)',
        entryFee: 'Free entry for all',
        location: 'Golden Temple Road, Atta Mandi, Katra Ahluwalia, Amritsar, Punjab 143006',
        nearbyAttractions: ['Jallianwala Bagh', 'Wagah Border', 'Partition Museum', 'Durgiana Temple'],
        travelTips: [
            'Cover your head at all times inside the complex',
            'Wash your feet at the entrance before entering',
            'No photography inside the main sanctum',
            'Volunteer at the community kitchen (Langar)',
            'Best time to visit is early morning or during the Palki ceremony'
        ],
        mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3414.4405559720747!2d74.87546581514708!3d31.6206807813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391963aae36739b3%3A0x3c5b63bfd0e5a0a3!2sGolden%20Temple!5e0!3m2!1sen!2sin!4v1650000000000!5m2!1sen!2sin'
    },
    'mysore-palace': {
        id: 'mysore-palace',
        name: 'Mysore Palace',
        state: 'Mysore, Karnataka',
        category: 'historical',
        rating: 4.5,
        price: 2499,
        description: 'A historical palace and royal residence featuring Indo-Saracenic architecture.',
        heroImage: 'https://images.pexels.com/photos/3581364/pexels-photo-3581364.jpeg?auto=compress&cs=tinysrgb&w=1920',
        images: [
            'https://images.pexels.com/photos/3581364/pexels-photo-3581364.jpeg?auto=compress&cs=tinysrgb&w=600',
            'https://images.pexels.com/photos/2161467/pexels-photo-2161467.jpeg?auto=compress&cs=tinysrgb&w=600',
            'https://images.pexels.com/photos/2409091/pexels-photo-2409091.jpeg?auto=compress&cs=tinysrgb&w=600'
        ],
        history: 'The Palace of Mysore is a historical palace and the royal residence at Mysore in the Indian state of Karnataka. It is the official residence of the Wadiyar dynasty and the seat of the Kingdom of Mysore. The current structure was built between 1897 and 1912 in Indo-Saracenic style.',
        bestTime: 'October to February',
        openingHours: '10:00 AM to 5:30 PM',
        entryFee: 'Indians: ₹70, Foreigners: ₹370',
        location: 'Purandara Dasa Road, Mysore, Karnataka 570001',
        nearbyAttractions: ['Chamundi Hills', 'Brindavan Gardens', 'St. Philomena\'s Church', 'Mysore Zoo'],
        travelTips: [
            'Visit on Sundays for the illuminated palace show',
            'Footwear must be removed inside the palace',
            'Photography is prohibited inside',
            'Hire an audio guide for a self-paced tour',
            'Combine your visit with nearby attractions'
        ],
        mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3898.8354053895!2d76.6555453150817!3d12.365222290961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf70381d5b5%3A0x8e5c3e5b0e5a5!2sMysore%20Palace!5e0!3m2!1sen!2sin!4v1650000000000!5m2!1sen!2sin'
    },
    'varanasi': {
        id: 'varanasi',
        name: 'Varanasi',
        state: 'Varanasi, Uttar Pradesh',
        category: 'temple',
        rating: 4.7,
        price: 1799,
        description: 'One of the oldest living cities, famous for its ghats and spiritual significance.',
        heroImage: 'https://images.pexels.com/photos/5458388/pexels-photo-5458388.jpeg?auto=compress&cs=tinysrgb&w=1920',
        images: [
            'https://images.pexels.com/photos/5458388/pexels-photo-5458388.jpeg?auto=compress&cs=tinysrgb&w=600',
            'https://images.pexels.com/photos/2161467/pexels-photo-2161467.jpeg?auto=compress&cs=tinysrgb&w=600',
            'https://images.pexels.com/photos/1007427/pexels-photo-1007427.jpeg?auto=compress&cs=tinysrgb&w=600'
        ],
        history: 'Varanasi, also known as Kashi, is one of the oldest continuously inhabited cities in the world. Situated on the banks of the Ganges, it is considered the spiritual capital of India. The city has been a cultural and religious center for over 3,000 years.',
        bestTime: 'October to March',
        openingHours: 'Open 24 hours (Ghats)',
        entryFee: 'Varies by temple',
        location: 'Varanasi, Uttar Pradesh 221001',
        nearbyAttractions: ['Kashi Vishwanath Temple', 'Dashashwamedh Ghat', 'Sarnath', 'Ramnagar Fort'],
        travelTips: [
            'Take an early morning boat ride on the Ganges',
            'Witness the evening Ganga Aarti at Dashashwamedh Ghat',
            'Dress modestly when visiting temples',
            'Explore the narrow lanes and hidden temples',
            'Shop for Banarasi silk sarees'
        ],
        mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.694444445!2d82.9925638150005!3d25.317645983845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e34b5d0000000%3A0x8e5c3e5b0e5a5!2sVaranasi!5e0!3m2!1sen!2sin!4v1650000000000!5m2!1sen!2sin'
    },
    'ooty': {
        id: 'ooty',
        name: 'Ooty',
        state: 'Ooty, Tamil Nadu',
        category: 'hill-station',
        rating: 4.4,
        price: 3499,
        description: 'Queen of hill stations, known for tea gardens, botanical gardens, and scenic beauty.',
        heroImage: 'https://images.pexels.com/photos/38287891/pexels-photo-38287891.jpeg?auto=compress&cs=tinysrgb&w=1920',
        images: [
            'https://images.pexels.com/photos/38287891/pexels-photo-38287891.jpeg?auto=compress&cs=tinysrgb&w=600',
            'https://images.pexels.com/photos/35151700/pexels-photo-35151700.jpeg?auto=compress&cs=tinysrgb&w=600',
            'https://images.pexels.com/photos/35166958/pexels-photo-35166958.jpeg?auto=compress&cs=tinysrgb&w=600'
        ],
        history: 'Ooty, officially known as Udhagamandalam, is a town and a municipality in the Nilgiri district of Tamil Nadu. It served as the summer headquarters of the Madras government during British rule and is famously called the Queen of Hill Stations.',
        bestTime: 'April to June, September to November',
        openingHours: 'Open 24 hours',
        entryFee: 'Varies by attraction',
        location: 'Udhagamandalam, Nilgiris, Tamil Nadu 643001',
        nearbyAttractions: ['Ooty Lake', 'Botanical Gardens', 'Doddabetta Peak', 'Avalanche Lake'],
        travelTips: [
            'Book accommodation in advance for summer',
            'Take the toy train for scenic views',
            'Carry warm clothing year-round',
            'Visit tea estates for fresh tea',
            'Try homemade chocolates'
        ],
        mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15623.5687654321!2d76.7333333150005!3d11.410000983845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba5d5a0a5a5a5a%3A0x8e5c3e5b0e5a5!2sOoty!5e0!3m2!1sen!2sin!4v1650000000000!5m2!1sen!2sin'
    },
    'kodaikanal': {
        id: 'kodaikanal',
        name: 'Kodaikanal',
        state: 'Kodaikanal, Tamil Nadu',
        category: 'hill-station',
        rating: 4.3,
        price: 3299,
        description: 'The Princess of Hill Stations, famous for its star-shaped lake and waterfalls.',
        heroImage: 'https://images.pexels.com/photos/2161467/pexels-photo-2161467.jpeg?auto=compress&cs=tinysrgb&w=1920',
        images: [
            'https://images.pexels.com/photos/2161467/pexels-photo-2161467.jpeg?auto=compress&cs=tinysrgb&w=600',
            'https://images.pexels.com/photos/2409091/pexels-photo-2409091.jpeg?auto=compress&cs=tinysrgb&w=600',
            'https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg?auto=compress&cs=tinysrgb&w=600'
        ],
        history: 'Kodaikanal means "The Gift of the Forest" in Tamil. Established in 1845 by American missionaries, this hill station sits at an altitude of 2,133 meters in the Palani Hills. Its famous star-shaped lake was created in 1863.',
        bestTime: 'April to June, September to November',
        openingHours: 'Open 24 hours',
        entryFee: 'Varies by attraction',
        location: 'Kodaikanal, Dindigul, Tamil Nadu 624101',
        nearbyAttractions: ['Kodaikanal Lake', 'Coaker\'s Walk', 'Bryant Park', 'Pillar Rocks'],
        travelTips: [
            'Rent a bicycle to explore the lake area',
            'Visit in winter for misty views',
            'Try homemade chocolates and cheese',
            'Carry warm clothes in winter',
            'Watch sunset at Coaker\'s Walk'
        ],
        mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15718.57654321!2d77.4833333150005!3d10.238057983845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07d5a0a5a5a5a%3A0x8e5c3e5b0e5a5!2sKodaikanal!5e0!3m2!1sen!2sin!4v1650000000000!5m2!1sen!2sin'
    },
    'goa': {
        id: 'goa',
        name: 'Goa',
        state: 'Goa',
        category: 'beach',
        rating: 4.6,
        price: 4999,
        description: 'India\'s beach paradise with pristine beaches, vibrant nightlife, and Portuguese heritage.',
        heroImage: 'https://images.pexels.com/photos/1007427/pexels-photo-1007427.jpeg?auto=compress&cs=tinysrgb&w=1920',
        images: [
            'https://images.pexels.com/photos/1007427/pexels-photo-1007427.jpeg?auto=compress&cs=tinysrgb&w=600',
            'https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg?auto=compress&cs=tinysrgb&w=600',
            'https://images.pexels.com/photos/2409091/pexels-photo-2409091.jpeg?auto=compress&cs=tinysrgb&w=600'
        ],
        history: 'Goa was a Portuguese colony for over 450 years before being incorporated into India in 1961. This unique heritage blends Indian and Portuguese cultures, creating a distinct identity. The state is famous for its beaches, churches, and laid-back atmosphere.',
        bestTime: 'November to February',
        openingHours: 'Open 24 hours (Beaches)',
        entryFee: 'Varies by beach and attraction',
        location: 'Goa',
        nearbyAttractions: ['Calangute Beach', 'Basilica of Bom Jesus', 'Dudhsagar Falls', 'Anjuna Beach'],
        travelTips: [
            'Book early for peak season (December)',
            'Rent scooters to explore',
            'Try water sports at Calangute',
            'Visit spice plantations',
            'Experience the Saturday Night Market'
        ],
        mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62170.588332567!2d73.7787453150005!3d15.299333983845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfc8d5a5a5a5a%3A0x8e5c3e5b0e5a5!2sGoa!5e0!3m2!1sen!2sin!4v1650000000000!5m2!1sen!2sin'
    },
    'kerala-backwaters': {
        id: 'kerala-backwaters',
        name: 'Kerala Backwaters',
        state: 'Alleppey, Kerala',
        category: 'nature',
        rating: 4.9,
        price: 5999,
        description: 'A network of serene canals, lagoons, and lakes offering houseboat experiences.',
        heroImage: 'https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg?auto=compress&cs=tinysrgb&w=1920',
        images: [
            'https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg?auto=compress&cs=tinysrgb&w=600',
            'https://images.pexels.com/photos/1007427/pexels-photo-1007427.jpeg?auto=compress&cs=tinysrgb&w=600',
            'https://images.pexels.com/photos/2161467/pexels-photo-2161467.jpeg?auto=compress&cs=tinysrgb&w=600'
        ],
        history: 'The Kerala backwaters are a network of interconnected canals, rivers, lakes, and inlets along the Malabar Coast. This unique ecosystem has been a transportation route for centuries. Houseboats, originally used as grain barges, now offer luxurious accommodation.',
        bestTime: 'August to February',
        openingHours: 'Open 24 hours',
        entryFee: 'Houseboat packages from ₹5,999/night',
        location: 'Alleppey, Kerala',
        nearbyAttractions: ['Alleppey Beach', 'Kumarakom Bird Sanctuary', 'Vembanad Lake', 'Pathiramanal Island'],
        travelTips: [
            'Book a houseboat overnight experience',
            'Visit during monsoon for scenic views',
            'Try traditional Kerala cuisine on the boat',
            'Carry mosquito repellent',
            'Best time for houseboat is October to March'
        ],
        mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.537654321!2d76.3333458150005!3d9.420000983845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b08d5a0a5a5a5a%3A0x8e5c3e5b0e5a5!2sAlleppey!5e0!3m2!1sen!2sin!4v1650000000000!5m2!1sen!2sin'
    },
    'hampi': {
        id: 'hampi',
        name: 'Hampi',
        state: 'Hampi, Karnataka',
        category: 'historical',
        rating: 4.5,
        price: 2199,
        description: 'UNESCO World Heritage Site with ancient Vijayanagara Empire ruins and boulder landscapes.',
        heroImage: 'https://images.pexels.com/photos/3581364/pexels-photo-3581364.jpeg?auto=compress&cs=tinysrgb&w=1920',
        images: [
            'https://images.pexels.com/photos/3581364/pexels-photo-3581364.jpeg?auto=compress&cs=tinysrgb&w=600',
            'https://images.pexels.com/photos/5458388/pexels-photo-5458388.jpeg?auto=compress&cs=tinysrgb&w=600',
            'https://images.pexels.com/photos/2161467/pexels-photo-2161467.jpeg?auto=compress&cs=tinysrgb&w=600'
        ],
        history: 'Hampi was the capital of the Vijayanagara Empire in the 14th century, one of the largest and wealthiest cities of the medieval world. Today, its ruins stretch across a vast landscape of boulders and ancient monuments, recognized as a UNESCO World Heritage Site.',
        bestTime: 'October to February',
        openingHours: '6:00 AM to 6:00 PM (Monuments)',
        entryFee: 'Indians: ₹35, Foreigners: ₹550',
        location: 'Hampi, Bellary, Karnataka 583239',
        nearbyAttractions: ['Virupaksha Temple', 'Vittala Temple', 'Hampi Bazaar', 'Matanga Hill'],
        travelTips: [
            'Rent a scooter or bicycle to explore',
            'Climb Matanga Hill for sunrise views',
            'Visit Virupaksha Temple first',
            'Carry water and sun protection',
            'Spend at least 2 days for full exploration'
        ],
        mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3851.5687654321!2d76.4633458150005!3d15.335000983845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb5a0a5a5a5a5a%3A0x8e5c3e5b0e5a5!2sHampi!5e0!3m2!1sen!2sin!4v1650000000000!5m2!1sen!2sin'
    },
    'jaipur': {
        id: 'jaipur',
        name: 'Jaipur',
        state: 'Jaipur, Rajasthan',
        category: 'historical',
        rating: 4.7,
        price: 3799,
        description: 'The Pink City, known for magnificent forts, palaces, and vibrant Rajasthani culture.',
        heroImage: 'https://images.pexels.com/photos/3581364/pexels-photo-3581364.jpeg?auto=compress&cs=tinysrgb&w=1920',
        images: [
            'https://images.pexels.com/photos/3581364/pexels-photo-3581364.jpeg?auto=compress&cs=tinysrgb&w=600',
            'https://images.pexels.com/photos/5458388/pexels-photo-5458388.jpeg?auto=compress&cs=tinysrgb&w=600',
            'https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg?auto=compress&cs=tinysrgb&w=600'
        ],
        history: 'Jaipur, founded in 1727 by Maharaja Sawai Jai Singh II, is known as the Pink City due to its distinctly colored buildings. It was one of the first planned cities of India, designed according to Vastu Shastra principles. Today it serves as the capital of Rajasthan.',
        bestTime: 'October to March',
        openingHours: 'Varies by monument (9:00 AM - 5:00 PM)',
        entryFee: 'Varies by monument',
        location: 'Jaipur, Rajasthan 302001',
        nearbyAttractions: ['Amber Fort', 'Hawa Mahal', 'City Palace', 'Jantar Mantar', 'Nahargarh Fort'],
        travelTips: [
            'Visit Amber Fort early morning',
            'Shop at Johari and Bapu Bazaars',
            'Watch the sunset from Nahargarh Fort',
            'Try Rajasthani cuisine at local restaurants',
            'Book an elephant ride at Amber Fort'
        ],
        mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d71926.5687654321!2d75.7833458150005!3d26.912000983845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4d5a0a5a5a5a%3A0x8e5c3e5b0e5a5!2sJaipur!5e0!3m2!1sen!2sin!4v1650000000000!5m2!1sen!2sin'
    }
};

// ============================================
// Preloader
// ============================================
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        setTimeout(() => {
            preloader.classList.add('hidden');
        }, 500);
    }
});

// ============================================
// Dark Mode Toggle
// ============================================
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', savedTheme);
updateDarkModeIcon(savedTheme);

if (darkModeToggle) {
    darkModeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateDarkModeIcon(newTheme);
    });
}

function updateDarkModeIcon(theme) {
    if (darkModeToggle) {
        const icon = darkModeToggle.querySelector('i');
        if (icon) {
            icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
        }
    }
}

// ============================================
// Sticky Navbar
// ============================================
const navbar = document.getElementById('mainNavbar');

window.addEventListener('scroll', () => {
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
});

// ============================================
// Scroll to Top Button
// ============================================
const scrollTopBtn = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
    if (scrollTopBtn) {
        if (window.scrollY > 300) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    }
});

if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ============================================
// Smooth Scrolling for Anchor Links
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const navHeight = navbar ? navbar.offsetHeight : 0;
                const targetPosition = target.offsetTop - navHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// ============================================
// Navbar Active Link
// ============================================
function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

setActiveNavLink();

// ============================================
// Search Filter
// ============================================
const searchInput = document.getElementById('searchInput');

if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase().trim();
        const destinationItems = document.querySelectorAll('.destination-item');

        destinationItems.forEach(item => {
            const name = item.getAttribute('data-name')?.toLowerCase() || '';
            const category = item.getAttribute('data-category')?.toLowerCase() || '';
            const cardText = item.querySelector('.card-text')?.textContent.toLowerCase() || '';
            const cardLocation = item.querySelector('.card-location')?.textContent.toLowerCase() || '';

            const matches = name.includes(searchTerm) ||
                           category.includes(searchTerm) ||
                           cardText.includes(searchTerm) ||
                           cardLocation.includes(searchTerm);

            if (matches) {
                item.classList.remove('hidden');
                item.style.display = '';
            } else {
                item.classList.add('hidden');
                item.style.display = 'none';
            }
        });
    });
}

// ============================================
// Category Filter
// ============================================
const filterButtons = document.querySelectorAll('.btn-filter');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');

        const filterValue = button.getAttribute('data-filter');
        const destinationItems = document.querySelectorAll('.destination-item');

        destinationItems.forEach(item => {
            const category = item.getAttribute('data-category');

            if (filterValue === 'all') {
                item.classList.remove('hidden');
                item.style.display = '';
            } else if (category === filterValue) {
                item.classList.remove('hidden');
                item.style.display = '';
            } else {
                item.classList.add('hidden');
                item.style.display = 'none';
            }
        });
    });
});

// ============================================
// Image Lightbox
// ============================================
let currentImageIndex = 0;
let galleryImages = [];

function initLightbox() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.getElementById('lightbox');

    if (!lightbox) return;

    galleryImages = Array.from(galleryItems).map(item => {
        const img = item.querySelector('img');
        return img ? img.src : '';
    }).filter(src => src);

    galleryItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            currentImageIndex = index;
            openLightbox(galleryImages[index]);
        });
    });

    const closeBtn = lightbox.querySelector('.lightbox-close');
    const prevBtn = lightbox.querySelector('.lightbox-prev');
    const nextBtn = lightbox.querySelector('.lightbox-next');

    if (closeBtn) {
        closeBtn.addEventListener('click', closeLightbox);
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
            updateLightboxImage();
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
            updateLightboxImage();
        });
    }

    // Close on background click
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;

        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') {
            currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
            updateLightboxImage();
        }
        if (e.key === 'ArrowRight') {
            currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
            updateLightboxImage();
        }
    });
}

function openLightbox(src) {
    const lightbox = document.getElementById('lightbox');
    if (!lightbox) return;

    const lightboxImg = lightbox.querySelector('.lightbox-content img');
    if (lightboxImg) {
        lightboxImg.src = src;
    }
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    if (!lightbox) return;

    lightbox.classList.remove('active');
    document.body.style.overflow = '';
}

function updateLightboxImage() {
    const lightbox = document.getElementById('lightbox');
    if (!lightbox) return;

    const lightboxImg = lightbox.querySelector('.lightbox-content img');
    if (lightboxImg && galleryImages[currentImageIndex]) {
        lightboxImg.src = galleryImages[currentImageIndex];
    }
}

// Initialize lightbox when DOM is loaded
document.addEventListener('DOMContentLoaded', initLightbox);

// ============================================
// Booking Form Validation
// ============================================
const bookingForm = document.getElementById('bookingForm');
const successModal = document.getElementById('successModal');

if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form fields
        const fullName = document.getElementById('fullName');
        const email = document.getElementById('email');
        const phone = document.getElementById('phone');
        const destination = document.getElementById('destination');
        const travelDate = document.getElementById('travelDate');
        const persons = document.getElementById('persons');
        const packageType = document.getElementById('packageType');

        let isValid = true;

        // Validate Full Name
        if (!fullName || fullName.value.trim().length < 3) {
            setInvalid(fullName, 'Please enter a valid name (min 3 characters)');
            isValid = false;
        } else {
            setValid(fullName);
        }

        // Validate Email
        if (!email || !validateEmail(email.value)) {
            setInvalid(email, 'Please enter a valid email address');
            isValid = false;
        } else {
            setValid(email);
        }

        // Validate Phone
        if (!phone || !validatePhone(phone.value)) {
            setInvalid(phone, 'Please enter a valid 10-digit phone number');
            isValid = false;
        } else {
            setValid(phone);
        }

        // Validate Destination
        if (!destination || !destination.value) {
            setInvalid(destination, 'Please select a destination');
            isValid = false;
        } else {
            setValid(destination);
        }

        // Validate Travel Date
        if (!travelDate || !travelDate.value) {
            setInvalid(travelDate, 'Please select a travel date');
            isValid = false;
        } else {
            const selectedDate = new Date(travelDate.value);
            const today = new Date();
            today.setHours(0, 0, 0, 0);

            if (selectedDate < today) {
                setInvalid(travelDate, 'Travel date cannot be in the past');
                isValid = false;
            } else {
                setValid(travelDate);
            }
        }

        // Validate Number of Persons
        if (!persons || persons.value < 1 || persons.value > 20) {
            setInvalid(persons, 'Please enter number of persons (1-20)');
            isValid = false;
        } else {
            setValid(persons);
        }

        // Validate Package Type
        if (!packageType || !packageType.value) {
            setInvalid(packageType, 'Please select a package type');
            isValid = false;
        } else {
            setValid(packageType);
        }

        if (isValid) {
            // Show success modal
            if (successModal) {
                successModal.classList.add('active');
            }
            // Reset form
            bookingForm.reset();
            // Clear all validation states
            bookingForm.querySelectorAll('.form-control, .form-select').forEach(field => {
                field.classList.remove('is-valid', 'is-invalid');
            });
        }
    });
}

function setInvalid(field, message) {
    if (!field) return;

    field.classList.add('is-invalid');
    field.classList.remove('is-valid');

    const feedback = field.parentElement.querySelector('.invalid-feedback') ||
                     field.parentElement.parentElement.querySelector('.invalid-feedback');
    if (feedback) {
        feedback.textContent = message;
    }
}

function setValid(field) {
    if (!field) return;

    field.classList.remove('is-invalid');
    field.classList.add('is-valid');
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

function validatePhone(phone) {
    const re = /^[0-9]{10}$/;
    return re.test(String(phone).replace(/\D/g, ''));
}

// Close success modal
const modalCloseBtn = document.querySelector('.modal-close-btn');
if (modalCloseBtn && successModal) {
    modalCloseBtn.addEventListener('click', () => {
        successModal.classList.remove('active');
    });
}

// Close modal on background click
if (successModal) {
    successModal.addEventListener('click', (e) => {
        if (e.target === successModal) {
            successModal.classList.remove('active');
        }
    });
}

// ============================================
// Contact Form Validation
// ============================================
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const fullName = document.getElementById('contactName');
        const email = document.getElementById('contactEmail');
        const subject = document.getElementById('contactSubject');
        const message = document.getElementById('contactMessage');

        let isValid = true;

        if (!fullName || fullName.value.trim().length < 3) {
            setInvalid(fullName, 'Please enter your name');
            isValid = false;
        } else {
            setValid(fullName);
        }

        if (!email || !validateEmail(email.value)) {
            setInvalid(email, 'Please enter a valid email');
            isValid = false;
        } else {
            setValid(email);
        }

        if (!subject || subject.value.trim().length < 3) {
            setInvalid(subject, 'Please enter a subject');
            isValid = false;
        } else {
            setValid(subject);
        }

        if (!message || message.value.trim().length < 10) {
            setInvalid(message, 'Please enter a message (min 10 characters)');
            isValid = false;
        } else {
            setValid(message);
        }

        if (isValid) {
            if (successModal) {
                successModal.classList.add('active');
            }
            contactForm.reset();
            contactForm.querySelectorAll('.form-control, .form-select').forEach(field => {
                field.classList.remove('is-valid', 'is-invalid');
            });
        }
    });
}

// ============================================
// Newsletter Form
// ============================================
const newsletterForm = document.querySelector('.newsletter-form');

if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const emailInput = newsletterForm.querySelector('input[type="email"]');

        if (emailInput && validateEmail(emailInput.value)) {
            alert('Thank you for subscribing to our newsletter!');
            newsletterForm.reset();
        } else {
            alert('Please enter a valid email address.');
        }
    });
}

// ============================================
// Load Destination Details
// ============================================
function loadDestinationDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const destinationId = urlParams.get('id');

    if (!destinationId || !destinations[destinationId]) return;

    const dest = destinations[destinationId];

    // Update page title
    document.title = `${dest.name} - Explore India`;

    // Update hero section
    const heroTitle = document.querySelector('.detail-title');
    const heroMeta = document.querySelector('.detail-meta');
    const heroImage = document.querySelector('.detail-hero');

    if (heroTitle) heroTitle.textContent = dest.name;
    if (heroImage) heroImage.style.backgroundImage = `url('${dest.heroImage}')`;

    if (heroMeta) {
        heroMeta.innerHTML = `
            <div class="detail-meta-item">
                <i class="fas fa-map-marker-alt"></i>
                <span>${dest.state}</span>
            </div>
            <div class="detail-meta-item">
                <i class="fas fa-star"></i>
                <span>${dest.rating} Rating</span>
            </div>
            <div class="detail-meta-item">
                <i class="fas fa-tag"></i>
                <span>From ₹${dest.price.toLocaleString()}</span>
            </div>
            <div class="detail-meta-item">
                <i class="fas fa-layer-group"></i>
                <span>${capitalizeFirst(dest.category)}</span>
            </div>
        `;
    }

    // Update images gallery
    const imageGallery = document.querySelector('.detail-images .row');
    if (imageGallery && dest.images) {
        imageGallery.innerHTML = dest.images.map((img, index) => `
            <div class="col-md-4 mb-3">
                <div class="gallery-item" data-index="${index}">
                    <img src="${img}" alt="${dest.name} Image ${index + 1}" class="img-fluid rounded">
                    <div class="gallery-overlay">
                        <i class="fas fa-search-plus"></i>
                    </div>
                </div>
            </div>
        `).join('');

        // Reinitialize lightbox for new images
        initLightbox();
    }

    // Update history
    const historyCard = document.querySelector('.detail-history p');
    if (historyCard) historyCard.textContent = dest.history;

    // Update info cards
    const bestTimeEl = document.querySelector('[data-info="bestTime"]');
    const openingHoursEl = document.querySelector('[data-info="openingHours"]');
    const entryFeeEl = document.querySelector('[data-info="entryFee"]');
    const locationEl = document.querySelector('[data-info="location"]');

    if (bestTimeEl) bestTimeEl.textContent = dest.bestTime;
    if (openingHoursEl) openingHoursEl.textContent = dest.openingHours;
    if (entryFeeEl) entryFeeEl.textContent = dest.entryFee;
    if (locationEl) locationEl.textContent = dest.location;

    // Update nearby attractions
    const attractionsList = document.querySelector('[data-info="nearbyAttractions"]');
    if (attractionsList && dest.nearbyAttractions) {
        attractionsList.innerHTML = dest.nearbyAttractions.map(attr => `<li>${attr}</li>`).join('');
    }

    // Update travel tips
    const tipsList = document.querySelector('[data-info="travelTips"]');
    if (tipsList && dest.travelTips) {
        tipsList.innerHTML = dest.travelTips.map(tip => `<li>${tip}</li>`).join('');
    }

    // Update map
    const mapContainer = document.querySelector('.map-container iframe');
    if (mapContainer && dest.mapEmbed) {
        mapContainer.src = dest.mapEmbed;
    }

    // Update booking link
    const bookingBtn = document.querySelector('.booking-btn');
    if (bookingBtn) {
        bookingBtn.href = `booking.html?destination=${dest.id}`;
    }
}

function capitalizeFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).replace('-', ' ');
}

// Load destination details on page load
document.addEventListener('DOMContentLoaded', loadDestinationDetails);

// ============================================
// Pre-fill Booking Form with Destination
// ============================================
function prefillBookingDestination() {
    const urlParams = new URLSearchParams(window.location.search);
    const destinationParam = urlParams.get('destination');
    const destinationSelect = document.getElementById('destination');

    if (destinationSelect && destinationParam) {
        // Convert URL param to select option value
        const option = destinationSelect.querySelector(`option[value="${destinationParam}"]`);
        if (option) {
            destinationSelect.value = destinationParam;
        }
    }
}

document.addEventListener('DOMContentLoaded', prefillBookingDestination);

// ============================================
// Stats Counter Animation
// ============================================
function animateStats() {
    const stats = document.querySelectorAll('.stat-number');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const finalValue = parseInt(target.getAttribute('data-count')) || 0;
                const duration = 2000;
                const start = 0;
                const startTime = performance.now();

                function updateCount(currentTime) {
                    const elapsed = currentTime - startTime;
                    const progress = Math.min(elapsed / duration, 1);
                    const easeProgress = 1 - (1 - progress) * (1 - progress);
                    const current = Math.floor(start + (finalValue - start) * easeProgress);

                    target.textContent = current.toLocaleString();

                    if (progress < 1) {
                        requestAnimationFrame(updateCount);
                    } else {
                        target.textContent = finalValue.toLocaleString();
                    }
                }

                requestAnimationFrame(updateCount);
                observer.unobserve(target);
            }
        });
    }, { threshold: 0.5 });

    stats.forEach(stat => observer.observe(stat));
}

document.addEventListener('DOMContentLoaded', animateStats);

// ============================================
// Export destinations data for other pages
// ============================================
window.destinationsData = destinations;

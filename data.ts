import { Product, Feature, Stat, MissionVision, Value, TeamMember, Service, ContactCardInfo, FaqItem } from './types';

export const products: Product[] = [
    { id: 1, name: '9W LED Bulb (Cool White)', description: 'Energy-efficient, long-lasting B22 base LED bulb.', price: '₹150', oldPrice: '₹200', icon: 'fas fa-lightbulb', category: 'Lighting', badge: '25% OFF', rating: 4.7 },
    { id: 2, name: 'PVC Insulated Copper Wire', description: '90m coil of 1.5 sq mm high-quality copper wire.', price: '₹1,200', icon: 'fas fa-tape', category: 'Wiring', badge: 'NEW', rating: 4.9 },
    { id: 3, name: '16A Modular Switch', description: 'Sleek, durable one-way modular switch for modern homes.', price: '₹85', icon: 'fas fa-toggle-on', category: 'Switches', rating: 4.5 },
    { id: 4, name: 'MCB Circuit Breaker', description: '20A Single Pole C-Curve MCB for overload protection.', price: '₹250', icon: 'fas fa-bolt', category: 'Protection', rating: 4.8 },
    { id: 5, name: 'High-Speed Ceiling Fan', description: '1200mm blade sweep with a powerful copper motor.', price: '₹2,500', oldPrice: '₹3,000', icon: 'fas fa-fan', category: 'Appliances', badge: 'SALE', rating: 4.6 },
    { id: 6, name: '16A Universal Power Socket', description: 'Multi-standard socket with safety shutter.', price: '₹120', icon: 'fas fa-plug', category: 'Switches', rating: 4.7 },
    { id: 7, name: 'Flexible Conduit Pipe (20mm)', description: '25m roll of durable PVC conduit for wiring protection.', price: '₹450', icon: 'fas fa-wave-square', category: 'Wiring', rating: 4.4 },
    { id: 8, name: '12W LED Panel Downlight', description: 'Slim, round recessed panel light for false ceilings.', price: '₹550', oldPrice: '₹700', icon: 'far fa-lightbulb', category: 'Lighting', badge: 'HOT', rating: 4.8 },
];

export const featuredProducts = products.slice(0, 3);

export const features: Feature[] = [
    { icon: 'fas fa-shipping-fast', title: 'Fast Delivery', description: 'Get your products delivered to your doorstep quickly and safely' },
    { icon: 'fas fa-shield-alt', title: 'Genuine Products', description: '100% authentic products with manufacturer warranty' },
    { icon: 'fas fa-headset', title: '24/7 Support', description: 'Round-the-clock customer support for all your queries' },
    { icon: 'fas fa-tags', title: 'Best Prices', description: 'Competitive prices and amazing deals on all products' },
];

export const stats: Stat[] = [
    { icon: 'fas fa-users', value: '50,000+', label: 'Happy Customers' },
    { icon: 'fas fa-box', value: '10,000+', label: 'Products Sold' },
    { icon: 'fas fa-award', value: '15+', label: 'Years Experience' },
    { icon: 'fas fa-star', value: '4.8/5', label: 'Customer Rating' },
];

export const missionVision: MissionVision[] = [
    { icon: 'fas fa-bullseye', title: 'Our Mission', text: 'To provide our customers with the highest quality electronics at competitive prices, backed by exceptional customer service and genuine product warranties.' },
    { icon: 'fas fa-eye', title: 'Our Vision', text: 'To become the most trusted and preferred electronics retail destination in India, known for our integrity, quality products, and customer-centric approach.' },
];

export const values: Value[] = [
    { icon: 'fas fa-handshake', title: 'Integrity', text: 'We believe in honest business practices and transparent dealings with our customers.' },
    { icon: 'fas fa-gem', title: 'Quality', text: 'We never compromise on product quality and only deal with genuine, authentic products.' },
    { icon: 'fas fa-heart', title: 'Customer First', text: 'Customer satisfaction is our top priority and we go the extra mile to ensure it.' },
    { icon: 'fas fa-lightbulb', title: 'Innovation', text: 'We constantly evolve and bring the latest technology and products to our customers.' },
];

export const team: TeamMember[] = [
    { name: 'Rajesh Kumar', role: 'Founder & CEO', bio: '15+ years of experience in electronics retail', icon: 'fas fa-user-tie' },
    { name: 'Priya Sharma', role: 'Operations Manager', bio: 'Expert in supply chain and customer relations', icon: 'fas fa-user-tie' },
    { name: 'Amit Patel', role: 'Technical Head', bio: 'Technology enthusiast and product specialist', icon: 'fas fa-user-tie' },
    { name: 'Sneha Desai', role: 'Customer Support Lead', bio: 'Dedicated to ensuring customer satisfaction', icon: 'fas fa-user-tie' },
];

export const services: Service[] = [
    { icon: 'fas fa-shipping-fast', title: 'Fast Delivery', description: 'Quick and safe delivery to your doorstep.', features: ['Same day delivery available', 'Free shipping on orders above ₹5,000', 'Real-time tracking', 'Secure packaging'] },
    { icon: 'fas fa-tools', title: 'Installation Services', description: 'Professional installation for all major appliances.', features: ['Certified technicians', 'Free installation on select products', 'Scheduled at your convenience', 'Quality assured work'] },
    { icon: 'fas fa-wrench', title: 'Repair & Maintenance', description: 'Expert repair services for all devices.', features: ['Genuine spare parts', 'Experienced technicians', '90-day service warranty', 'Doorstep service available'] },
    { icon: 'fas fa-exchange-alt', title: 'Exchange Offers', description: 'Get the best value for your old electronics.', features: ['Fair market value assessment', 'Instant price quote', 'All brands accepted', 'Additional discounts on new purchase'] },
    { icon: 'fas fa-user-tie', title: 'Expert Consultation', description: 'Professional advice to choose the right products.', features: ['Free product consultation', 'Personalized recommendations', 'Product demonstrations', 'Budget-friendly options'] },
    { icon: 'fas fa-credit-card', title: 'Flexible Finance', description: 'Easy EMI options and flexible payment plans.', features: ['0% EMI available', 'Quick approval process', 'Minimal documentation', 'Multiple finance partners'] },
];

export const contactCards: ContactCardInfo[] = [
    { icon: 'fas fa-map-marker-alt', title: 'Visit Our Store', subtitle: 'Come visit us at our showroom', detail: '123 Electronics Street<br>Kolhapur, Maharashtra' },
    { icon: 'fas fa-phone', title: 'Call Us', subtitle: 'Available Mon-Sat, 9AM-8PM', detail: '+91 1234567890<br>+91 0987654321' },
    { icon: 'fas fa-envelope', title: 'Email Us', subtitle: 'We\'ll respond within 24 hours', detail: 'info@electromart.com<br>support@electromart.com' },
    { icon: 'fas fa-clock', title: 'Working Hours', subtitle: 'Our store timings', detail: 'Monday - Saturday<br>9:00 AM - 8:00 PM' },
];

export const faqs: FaqItem[] = [
    { question: "What are your delivery charges?", answer: "We offer free delivery on all orders above ₹5,000. For orders below this amount, delivery charges vary based on location and typically range from ₹100 to ₹300." },
    { question: "Do you provide installation services?", answer: "Yes, we provide professional installation services for all major appliances. Installation is free for select products, and for others, nominal charges apply." },
    { question: "What is your return and exchange policy?", answer: "We offer a 7-day return policy for most products. Items must be in original condition with all accessories and packaging." },
    { question: "Are all products covered under warranty?", answer: "Yes, all our products come with manufacturer warranty. The warranty period varies by product and brand. Extended warranty options are also available." },
    { question: "Do you offer EMI options?", answer: "Yes, we offer flexible EMI options including 0% EMI on select products and credit cards. We work with multiple financial partners to provide easy financing solutions." },
];
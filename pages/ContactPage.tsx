
// import React, { useState } from 'react';
// import { contactCards, faqs } from '../data';
// import { ContactCardInfo, FaqItem as FaqType } from '../types';

// const PageHeader: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => (
//     <div className="bg-gray-700 text-white py-16">
//         <div className="container mx-auto px-4 text-center">
//             <h1 className="text-4xl font-bold">{title}</h1>
//             <p className="text-lg mt-2 text-gray-300">{subtitle}</p>
//         </div>
//     </div>
// );

// const ContactCard: React.FC<{ info: ContactCardInfo }> = ({ info }) => (
//     <div className="bg-white p-6 rounded-lg shadow-md text-center">
//         <div className="bg-blue-100 text-blue-500 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
//             <i className={`${info.icon} text-3xl`}></i>
//         </div>
//         <h3 className="text-xl font-bold mb-2">{info.title}</h3>
//         <p className="text-gray-500 mb-3">{info.subtitle}</p>
//         <div className="text-gray-800" dangerouslySetInnerHTML={{ __html: info.detail }}></div>
//     </div>
// );

// const ContactInfoSection: React.FC = () => (
//     <section className="py-16 bg-gray-100">
//         <div className="container mx-auto px-4">
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//                 {contactCards.map((card, index) => <ContactCard key={index} info={card} />)}
//             </div>
//         </div>
//     </section>
// );

// const ContactFormSection: React.FC = () => {
//     const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//         event.preventDefault();
//         alert('Thank you for contacting us! We will get back to you soon.');
//         (event.target as HTMLFormElement).reset();
//     };

//     return (
//         <section className="py-16">
//             <div className="container mx-auto px-4">
//                 <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col lg:flex-row gap-12">
//                     <div className="lg:w-1/2 space-y-6">
//                         <h2 className="text-3xl font-bold">Get In Touch</h2>
//                         <p className="text-gray-600">Have a question or need assistance? Fill out the form and our team will get back to you as soon as possible.</p>
//                         <div className="space-y-4">
//                             <div className="flex items-start space-x-4">
//                                 <i className="fas fa-headset text-2xl text-blue-500 mt-1"></i>
//                                 <div>
//                                     <h4 className="font-semibold">24/7 Customer Support</h4>
//                                     <p className="text-sm text-gray-600">Our support team is always ready to help you with any queries or concerns.</p>
//                                 </div>
//                             </div>
//                             <div className="flex items-start space-x-4">
//                                 <i className="fas fa-shield-alt text-2xl text-blue-500 mt-1"></i>
//                                 <div>
//                                     <h4 className="font-semibold">100% Genuine Products</h4>
//                                     <p className="text-sm text-gray-600">All products come with manufacturer warranty and our quality guarantee.</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <form className="lg:w-1/2 space-y-4" onSubmit={handleSubmit}>
//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                             <div>
//                                 <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name *</label>
//                                 <input type="text" id="name" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
//                             </div>
//                             <div>
//                                 <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address *</label>
//                                 <input type="email" id="email" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
//                             </div>
//                         </div>
//                         <div>
//                             <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject *</label>
//                             <select id="subject" required className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
//                                 <option value="">Select a subject</option>
//                                 <option value="product">Product Inquiry</option>
//                                 <option value="service">Service Request</option>
//                                 <option value="complaint">Complaint</option>
//                                 <option value="other">Other</option>
//                             </select>
//                         </div>
//                         <div>
//                             <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message *</label>
//                             <textarea id="message" rows={4} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"></textarea>
//                         </div>
//                         <button type="submit" className="w-full bg-blue-500 text-white py-3 px-6 rounded-md font-semibold hover:bg-blue-600 transition-colors duration-300 flex items-center justify-center space-x-2">
//                             <span>Send Message</span>
//                             <i className="fas fa-paper-plane"></i>
//                         </button>
//                     </form>
//                 </div>
//             </div>
//         </section>
//     );
// };

// const FaqItem: React.FC<{ faq: FaqType, isOpen: boolean, onClick: () => void }> = ({ faq, isOpen, onClick }) => (
//     <div className="border-b">
//         <button onClick={onClick} className="w-full flex justify-between items-center text-left py-4 px-2">
//             <h3 className="font-semibold text-lg">{faq.question}</h3>
//             <i className={`fas fa-chevron-down transition-transform duration-300 ${isOpen ? 'transform rotate-180' : ''}`}></i>
//         </button>
//         <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
//             <div className="pb-4 px-2 text-gray-600">
//                 <p>{faq.answer}</p>
//             </div>
//         </div>
//     </div>
// );


// const FaqSection: React.FC = () => {
//     const [openFaq, setOpenFaq] = useState<number | null>(0);

//     const toggleFaq = (index: number) => {
//         setOpenFaq(openFaq === index ? null : index);
//     };

//     return (
//         <section className="py-16 bg-gray-100">
//             <div className="container mx-auto px-4">
//                 <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
//                 <div className="max-w-3xl mx-auto bg-white p-4 rounded-lg shadow-lg">
//                     {faqs.map((faq, index) => (
//                         <FaqItem key={index} faq={faq} isOpen={openFaq === index} onClick={() => toggleFaq(index)} />
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// }

// const MapSection: React.FC = () => (
//     <section className="py-16">
//         <div className="container mx-auto px-4">
//             <h2 className="text-3xl font-bold text-center mb-8">Our Location</h2>

//             <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
//                 <iframe
//                     title="Shop Location"
//                     width="100%"
//                     height="100%"
//                     loading="lazy"
//                     allowFullScreen
//                     referrerPolicy="no-referrer-when-downgrade"
//                     className="border-0"
//                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.7365802643254!2d73.75483991490148!3d18.51568138741764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b8d829d33cb5%3A0x7bbf57c4b6213b6c!2sYour%20Shop%20Name!5e0!3m2!1sen!2sin!4v1700000000000"
//                 ></iframe>
//             </div>
//         </div>
//     </section>
// );
// const ContactPage: React.FC = () => {
//     return (
//         <>
//             <PageHeader title="Contact Us" subtitle="We'd love to hear from you" />
//             <ContactInfoSection />
//             <ContactFormSection />
//             <MapSection />
//             <FaqSection />
//         </>
//     );
// };

// export default ContactPage;
import React, { useState } from 'react';
import { contactCards, faqs } from '../data';
import { ContactCardInfo, FaqItem as FaqType } from '../types';

const PageHeader: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => (
    <div className="bg-gray-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold">{title}</h1>
            <p className="text-lg mt-2 text-gray-300">{subtitle}</p>
        </div>
    </div>
);

const ContactCard: React.FC<{ info: ContactCardInfo }> = ({ info }) => (
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
        <div className="bg-blue-100 text-blue-500 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
            <i className={`${info.icon} text-3xl`}></i>
        </div>
        <h3 className="text-xl font-bold mb-2">{info.title}</h3>
        <p className="text-gray-500 mb-3">{info.subtitle}</p>
        <div className="text-gray-800" dangerouslySetInnerHTML={{ __html: info.detail }}></div>
    </div>
);

const ContactInfoSection: React.FC = () => (
    <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {contactCards.map((card, index) => <ContactCard key={index} info={card} />)}
            </div>
        </div>
    </section>
);

const ContactFormSection: React.FC = () => {

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const form = event.target as HTMLFormElement;

        const contactData = {
            name: (form.elements.namedItem("name") as HTMLInputElement).value,
            email: (form.elements.namedItem("email") as HTMLInputElement).value,
            subject: (form.elements.namedItem("subject") as HTMLSelectElement).value,
            message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
        };

        try {
            const response = await fetch("https://electromart-services.onrender.com/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(contactData),
            });

            if (response.ok) {
                alert("Your message has been sent!");
                form.reset();
            } else {
                alert("❌ Failed to submit the form.");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("⚠️ Server unreachable.");
        }
    };

    return (
        <section className="py-16">
            <div className="container mx-auto px-4">
                <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col lg:flex-row gap-12">

                    <div className="lg:w-1/2 space-y-6">
                        <h2 className="text-3xl font-bold">Get In Touch</h2>
                        <p className="text-gray-600">Fill out the form and will reach out soon.</p>
                    </div>

                    <form className="lg:w-1/2 space-y-4" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Full Name *</label>
                                <input name="name" type="text" required className="w-full border px-3 py-2 rounded-md" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Email Address *</label>
                                <input name="email" type="email" required className="w-full border px-3 py-2 rounded-md" />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Subject *</label>
                            <select name="subject" required className="w-full border px-3 py-2 rounded-md">
                                <option value="">Select subject</option>
                                <option value="product">Product Inquiry</option>
                                <option value="service">Service Request</option>
                                <option value="complaint">Complaint</option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Message *</label>
                            <textarea name="message" rows={4} required className="w-full border px-3 py-2 rounded-md"></textarea>
                        </div>

                        <button type="submit" className="w-full bg-blue-500 text-white py-3 rounded-md">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};


const ContactPage: React.FC = () => {
    return (
        <>
            <PageHeader title="Contact Us" subtitle="We'd love to hear from you" />
            <ContactInfoSection />
            <ContactFormSection />
        </>
    );
};

export default ContactPage;

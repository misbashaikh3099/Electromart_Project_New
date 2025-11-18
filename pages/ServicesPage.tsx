
import React from 'react';
import { Link } from 'react-router-dom';
import { services } from '../data';
import { Service } from '../types';

const PageHeader: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => (
    <div className="bg-gray-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold">{title}</h1>
            <p className="text-lg mt-2 text-gray-300">{subtitle}</p>
        </div>
    </div>
);

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => (
    <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col h-full">
        <div className="text-center mb-6">
            <div className="bg-blue-100 text-blue-500 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <i className={`${service.icon} text-3xl`}></i>
            </div>
            <h3 className="text-2xl font-bold">{service.title}</h3>
            <p className="text-gray-600 mt-2">{service.description}</p>
        </div>
        <ul className="space-y-2 text-gray-700 mb-6 flex-grow">
            {service.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                    <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                    <span>{feature}</span>
                </li>
            ))}
        </ul>
        <Link to="/contact" className="mt-auto block text-center bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300">
            Learn More <i className="fas fa-arrow-right ml-1"></i>
        </Link>
    </div>
);

const ServicesSection: React.FC = () => (
    <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">What We Offer</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <ServiceCard key={index} service={service} />
                ))}
            </div>
        </div>
    </section>
);

const ProcessStep: React.FC<{ number: number, title: string, description: string}> = ({number, title, description}) => (
    <div className="text-center relative px-4">
        <div className="bg-blue-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold shadow-lg">
            {number}
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
    </div>
);


const ProcessSection: React.FC = () => (
    <section className="py-16">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Service Process</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <ProcessStep number={1} title="Contact Us" description="Reach out to us via phone, email, or visit our store to discuss your requirements." />
                <ProcessStep number={2} title="Consultation" description="Our experts will understand your needs and provide personalized recommendations." />
                <ProcessStep number={3} title="Service Delivery" description="We deliver and install your products with professional care and precision." />
                <ProcessStep number={4} title="After-Sales Support" description="Enjoy continuous support and maintenance services for complete peace of mind." />
            </div>
        </div>
    </section>
);

const SupportCard: React.FC<{icon: string, title: string, description: string, info: string}> = ({icon, title, description, info}) => (
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
        <i className={`${icon} text-4xl text-blue-500 mb-4`}></i>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="bg-blue-50 text-blue-600 font-semibold py-2 px-4 rounded-md">{info}</div>
    </div>
);

const SupportSection: React.FC = () => (
    <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Get Support</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <SupportCard icon="fas fa-phone-volume" title="Call Us" description="Speak directly with our support team for immediate assistance" info="+91 1234567890" />
                <SupportCard icon="fas fa-envelope" title="Email Us" description="Send us your queries and we'll respond within 24 hours" info="info@electromart.com" />
                <SupportCard icon="fas fa-comment-dots" title="Live Chat" description="Chat with our customer service representatives in real-time" info="Start Chat Now" />
            </div>
        </div>
    </section>
);


const ServicesPage: React.FC = () => {
    return (
        <>
            <PageHeader title="Our Services" subtitle="Complete solutions for all your electronics needs" />
            <ServicesSection />
            <ProcessSection />
            <SupportSection />
        </>
    );
};

export default ServicesPage;

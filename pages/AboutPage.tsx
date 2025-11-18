import React from 'react';
import { stats, missionVision, values, team } from '../data';
import { Stat, MissionVision, Value, TeamMember } from '../types';

const PageHeader: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => (
    <div className="bg-gray-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold">{title}</h1>
            <p className="text-lg mt-2 text-gray-300">{subtitle}</p>
        </div>
    </div>
);

const AboutSection: React.FC = () => (
    <section className="py-16">
        <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-12">
                <div className="lg:w-1/2 flex justify-center">
                    <div className="bg-blue-500 text-white rounded-full w-64 h-64 flex items-center justify-center">
                        <i className="fas fa-store text-8xl"></i>
                    </div>
                </div>
                <div className="lg:w-1/2 space-y-4">
                    <h2 className="text-3xl font-bold">Your Trusted Electrical Partner</h2>
                    <p className="text-gray-600 leading-relaxed">Founded in 2010, Electromart has been serving customers with the finest selection of electrical hardware and supplies. What started as a small shop in Kolhapur has grown into one of the most trusted names in the electrical retail industry.</p>
                    <p className="text-gray-600 leading-relaxed">We believe in providing not just products, but complete and safe electrical solutions for your home and business. Our commitment to quality, authenticity, and customer satisfaction has made us the preferred choice for thousands of electricians, contractors, and homeowners.</p>
                    <p className="text-gray-600 leading-relaxed">With a team of experienced professionals and partnerships with leading brands worldwide, we ensure that you get the best products at the most competitive prices.</p>
                </div>
            </div>
        </div>
    </section>
);

const StatCard: React.FC<{ stat: Stat }> = ({ stat }) => (
    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <i className={`${stat.icon} text-4xl text-blue-500 mb-4`}></i>
        <div className="text-4xl font-extrabold">{stat.value}</div>
        <div className="text-gray-500 mt-1">{stat.label}</div>
    </div>
);

const StatsSection: React.FC = () => (
    <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                    <StatCard key={index} stat={stat} />
                ))}
            </div>
        </div>
    </section>
);

const MVCard: React.FC<{ item: MissionVision }> = ({ item }) => (
    <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <i className={`${item.icon} text-5xl text-blue-500 mb-4`}></i>
        <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
        <p className="text-gray-600">{item.text}</p>
    </div>
);

const MissionVisionSection: React.FC = () => (
    <section className="py-16">
        <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
                {missionVision.map((item, index) => (
                    <MVCard key={index} item={item} />
                ))}
            </div>
        </div>
    </section>
);

const ValueCard: React.FC<{ value: Value }> = ({ value }) => (
    <div className="text-center p-4">
        <div className="bg-blue-100 text-blue-500 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
            <i className={`${value.icon} text-3xl`}></i>
        </div>
        <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
        <p className="text-gray-600">{value.text}</p>
    </div>
);

const ValuesSection: React.FC = () => (
    <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {values.map((value, index) => (
                    <ValueCard key={index} value={value} />
                ))}
            </div>
        </div>
    </section>
);

const TeamCard: React.FC<{ member: TeamMember }> = ({ member }) => (
    <div className="bg-white rounded-lg shadow-lg text-center p-6 transition-transform transform hover:-translate-y-2">
        <div className="bg-gray-200 rounded-full w-32 h-32 mx-auto mb-4 flex items-center justify-center">
             <i className="fas fa-user-tie text-6xl text-gray-500"></i>
        </div>
        <h3 className="text-xl font-bold">{member.name}</h3>
        <div className="text-blue-500 font-semibold mb-2">{member.role}</div>
        <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
        <div className="flex justify-center space-x-4 text-gray-500">
            <a href="#" className="hover:text-blue-500"><i className="fab fa-linkedin-in"></i></a>
            <a href="#" className="hover:text-blue-500"><i className="fab fa-twitter"></i></a>
            <a href="#" className="hover:text-blue-500"><i className="fas fa-envelope"></i></a>
        </div>
    </div>
);

const TeamSection: React.FC = () => (
    <section className="py-16">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {team.map((member, index) => (
                    <TeamCard key={index} member={member} />
                ))}
            </div>
        </div>
    </section>
);

const AboutPage: React.FC = () => {
    return (
        <>
            <PageHeader title="About Electromart" subtitle="Leading the way in electronics retail since 2010" />
            <AboutSection />
            <StatsSection />
            <MissionVisionSection />
            <ValuesSection />
            <TeamSection />
        </>
    );
};

export default AboutPage;
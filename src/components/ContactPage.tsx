import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, ArrowRight } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    projectType: 'Modular Kitchen',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, phone, email, projectType, message } = formData;
    
    // Construct the email body
    const emailBody = `Name: ${name}
Phone: ${phone}
Email: ${email}
Project Type: ${projectType}

Message:
${message}`;

    const mailtoLink = `mailto:${CONTACT_INFO.email}?subject=New Inquiry from ${name}&body=${encodeURIComponent(emailBody)}`;
    
    // Open the default mail client
    window.location.href = mailtoLink;
  };

  return (
    <section className="bg-white min-h-screen">
      <div className="container mx-auto px-4 py-24">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left Column: Contact Form */}
          <div>
            <span className="text-secondary font-bold tracking-[0.2em] uppercase text-sm mb-4 block">
              Start Your Journey
            </span>
            <h2 className="text-4xl font-bold text-primary mb-6">
              Let's Discuss Your <span className="text-secondary">Project</span>
            </h2>
            <p className="text-gray-600 mb-10 leading-relaxed">
              Ready to upgrade to factory-made precision? Fill out the form below, and our engineering team will get back to you with a consultation slot.
            </p>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Full Name</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-gray-50 border border-gray-200 p-4 rounded-sm focus:outline-none focus:border-secondary transition-colors"
                    placeholder="Hariharan"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Phone Number</label>
                  <input 
                    type="tel" 
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-gray-50 border border-gray-200 p-4 rounded-sm focus:outline-none focus:border-secondary transition-colors"
                    placeholder="+91 90925 66802"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-gray-50 border border-gray-200 p-4 rounded-sm focus:outline-none focus:border-secondary transition-colors"
                  placeholder="hari@gmail.com"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Project Type</label>
                <select 
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full bg-gray-50 border border-gray-200 p-4 rounded-sm focus:outline-none focus:border-secondary transition-colors text-gray-600"
                >
                  <option>Modular Kitchen</option>
                  <option>Full Home Interior</option>
                  <option>Wardrobes</option>
                  <option>Commercial Office</option>
                  <option>Renovation</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Message</label>
                <textarea 
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full bg-gray-50 border border-gray-200 p-4 rounded-sm focus:outline-none focus:border-secondary transition-colors"
                  placeholder="Tell us about your requirements..."
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-primary hover:bg-secondary hover:text-primary text-white font-bold py-4 px-8 rounded-sm transition-all duration-300 uppercase tracking-widest flex items-center justify-center group"
              >
                Send Request
                <Send className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>

          {/* Right Column: Info & Map */}
          <div className="flex flex-col h-full">
            {/* Contact Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
               <div className="bg-gray-50 p-8 border border-gray-100 hover:border-secondary/30 transition-colors group">
                  <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center text-secondary mb-4 group-hover:bg-secondary group-hover:text-primary transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-primary mb-1">Call Us</h4>
                  <p className="text-gray-500 text-sm mb-2">Mon-Sat, 9am - 7pm</p>
                  <div className="flex flex-col">
                    <a href={`tel:${CONTACT_INFO.phone.replace(/\s+/g, '')}`} className="text-lg font-bold text-primary hover:text-secondary transition-colors">{CONTACT_INFO.phone}</a>
                    <a href={`tel:${CONTACT_INFO.phone2.replace(/\s+/g, '')}`} className="text-lg font-bold text-primary hover:text-secondary transition-colors">{CONTACT_INFO.phone2}</a>
                  </div>
               </div>

               <div className="bg-gray-50 p-8 border border-gray-100 hover:border-secondary/30 transition-colors group">
                  <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center text-secondary mb-4 group-hover:bg-secondary group-hover:text-primary transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-primary mb-1">Email Us</h4>
                  <p className="text-gray-500 text-sm mb-2">For quotes & inquiries</p>
                  <a href={`mailto:${CONTACT_INFO.email}`} className="text-md font-bold text-primary hover:text-secondary transition-colors truncate block">{CONTACT_INFO.email}</a>
               </div>

               <div className="col-span-1 md:col-span-2 bg-primary text-white p-8 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2"></div>
                  <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                     <div>
                        <div className="w-10 h-10 bg-white/10 flex items-center justify-center text-secondary mb-4">
                            <MapPin className="w-5 h-5" />
                        </div>
                        <h4 className="font-bold text-xl mb-2">Visit Showroom</h4>
                        <p className="text-gray-300 text-sm leading-relaxed max-w-xs">{CONTACT_INFO.address}</p>
                     </div>
                     <a 
                        href={CONTACT_INFO.mapLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-secondary text-primary px-6 py-3 font-bold text-sm uppercase tracking-wider hover:bg-white transition-colors flex items-center"
                     >
                        Get Directions <ArrowRight className="ml-2 w-4 h-4" />
                     </a>
                  </div>
               </div>
            </div>

            {/* Map */}
            <div className="flex-grow bg-gray-100 rounded-sm overflow-hidden min-h-[300px] border border-gray-200 relative group">
                {/* Placeholder for Theni Map - using generic Theni coordinates */}
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.553932462002!2d77.47644731479463!3d10.008453992844964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b076cb1707010e9%3A0x6b6a6e5454646732!2sTheni%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1625634561234!5m2!1sen!2sin" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={true} 
                    loading="lazy"
                    className="transition-all duration-700 hover:opacity-90 hover:scale-105"
                    title="3L Interio Location"
                ></iframe>
                
                {/* Overlay text if needed */}
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-4 py-2 text-xs font-bold text-primary shadow-lg pointer-events-none">
                    <div className="flex items-center">
                        <Clock className="w-3 h-3 mr-2 text-secondary" />
                        Open: 9:00 AM - 8:00 PM
                    </div>
                </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactPage;
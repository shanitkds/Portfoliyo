import React, { useRef, useState } from 'react';
import emailjs from "emailjs-com";
import './contact.css'
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import "aos/dist/aos.css";

function ContactInfo() {
    const form = useRef();
    const [formData, setFormData] = useState({
        user_name: '',
        email: '',
        number: '',
        subject: '',
        message: ''
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const validateForm = () => {
        const newErrors = {};
        
        if (!formData.user_name.trim()) {
            newErrors.user_name = 'Name is required';
        }
        
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email';
        }
        
        if (!formData.number.trim()) {
            newErrors.number = 'Mobile number is required';
        } else if (!/^[0-9]{10}$/.test(formData.number.replace(/\s/g, ''))) {
            newErrors.number = 'Please enter a valid 10-digit mobile number';
        }
        
        if (!formData.subject.trim()) {
            newErrors.subject = 'Subject is required';
        }
        
        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        } else if (formData.message.trim().length < 10) {
            newErrors.message = 'Message must be at least 10 characters';
        }
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const sentEmail = (e) => {
        e.preventDefault();
        
        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus(null);

        emailjs.sendForm(
            'service_lym7gph',
            'template_qsgstpe',
            form.current,
            '7FfGFcXL8X27OBYlH'
        ).then(() => {
            setSubmitStatus('success');
            form.current.reset();
            setFormData({
                user_name: '',
                email: '',
                number: '',
                subject: '',
                message: ''
            });
            setTimeout(() => setSubmitStatus(null), 5000);
        }, (error) => {
            setSubmitStatus('error');
            console.error('EmailJS Error:', error);
            setTimeout(() => setSubmitStatus(null), 5000);
        }).finally(() => {
            setIsSubmitting(false);
        });
    };

    return (
        <div className="relative overflow-hidden">
            <footer className="bg-gradient-to-br from-[#0a0a0f] via-[#1a1a2e] to-[#16213e] text-white py-12 sm:py-16 px-4 sm:px-6 md:px-8 contat-main relative w-full">
                {/* Premium Animated Background */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-0 left-0 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-[#d4af37] rounded-full mix-blend-soft-light filter blur-3xl opacity-8 animate-blob"></div>
                    <div className="absolute bottom-0 right-0 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-[#6c5ce7] rounded-full mix-blend-soft-light filter blur-3xl opacity-6 animate-blob animation-delay-2000"></div>
                </div>
                
                {/* Premium Grid Overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(212,175,55,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.03)_1px,transparent_1px)] bg-[size:30px_30px] sm:bg-[size:40px_40px] md:bg-[size:50px_50px] pointer-events-none"></div>

                <div className="max-w-6xl mx-auto relative z-10" data-aos="zoom-in-up">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 mt-4 sm:mt-8 text-center" data-aos="fade-down">
                        Contact <span className="bg-gradient-to-r from-[#f4d03f] to-[#d4af37] bg-clip-text text-transparent">Me</span>
                    </h2>
                    <p className="text-center text-gray-200 mb-8 sm:mb-12 text-base sm:text-lg px-4" data-aos="fade-up" data-aos-delay="100">
                        Let's work together to bring your ideas to life
                    </p>
                    
                    {/* Contact Info Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-16 px-4 sm:px-0">
                        <div 
                            className="flex flex-col items-center p-6 bg-white/5 backdrop-blur-md rounded-xl border border-[#d4af37]/20 hover:bg-[#d4af37]/10 hover:border-[#d4af37] transition-all duration-500 transform hover:scale-105 hover:shadow-[0_0_40px_rgba(212,175,55,0.4)]" 
                            data-aos="fade-up" 
                            data-aos-delay="100"
                        >
                            <div className="p-4 bg-gradient-to-br from-[#d4af37] to-[#f4d03f] rounded-full mb-4 transform hover:rotate-12 transition-transform duration-500 shadow-[0_0_20px_rgba(212,175,55,0.3)]">
                                <FaEnvelope className="text-2xl text-white" />
                            </div>
                            <h3 className="font-semibold mb-2 text-lg">Email</h3>
                            <p className="text-sm text-gray-300 hover:text-[#f4d03f] transition-colors">shanith@example.com</p>
                        </div>
                        <div 
                            className="flex flex-col items-center p-6 bg-white/5 backdrop-blur-md rounded-xl border border-[#d4af37]/20 hover:bg-[#d4af37]/10 hover:border-[#d4af37] transition-all duration-500 transform hover:scale-105 hover:shadow-[0_0_40px_rgba(212,175,55,0.4)]" 
                            data-aos="fade-up" 
                            data-aos-delay="200"
                        >
                            <div className="p-4 bg-gradient-to-br from-[#6c5ce7] to-[#0984e3] rounded-full mb-4 transform hover:rotate-12 transition-transform duration-500 shadow-[0_0_20px_rgba(108,92,231,0.3)]">
                                <FaPhone className="text-2xl text-white" />
                            </div>
                            <h3 className="font-semibold mb-2 text-lg">Phone</h3>
                            <p className="text-sm text-gray-300 hover:text-[#f4d03f] transition-colors">+91 1234567890</p>
                        </div>
                        <div 
                            className="flex flex-col items-center p-6 bg-white/5 backdrop-blur-md rounded-xl border border-[#d4af37]/20 hover:bg-[#d4af37]/10 hover:border-[#d4af37] transition-all duration-500 transform hover:scale-105 hover:shadow-[0_0_40px_rgba(212,175,55,0.4)]" 
                            data-aos="fade-up" 
                            data-aos-delay="300"
                        >
                            <div className="p-4 bg-gradient-to-br from-[#d4af37] to-[#f39c12] rounded-full mb-4 transform hover:rotate-12 transition-transform duration-500 shadow-[0_0_20px_rgba(212,175,55,0.3)]">
                                <FaMapMarkerAlt className="text-2xl text-white" />
                            </div>
                            <h3 className="font-semibold mb-2 text-lg">Location</h3>
                            <p className="text-sm text-gray-300 hover:text-[#f4d03f] transition-colors">India</p>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="max-w-3xl mx-auto px-4 sm:px-0">
                        <div className="bg-white/5 backdrop-blur-md rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10 border border-[#d4af37]/20 shadow-[0_0_50px_rgba(212,175,55,0.2)]" data-aos="fade-up" data-aos-delay="200">
                            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center">Send me a message</h3>
                            <form ref={form} onSubmit={sentEmail} className="space-y-4 sm:space-y-5">
                                {/* Name and Email Row */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                                    <div className="space-y-2" data-aos="fade-right" data-aos-delay="300">
                                        <label className="text-sm font-medium text-gray-200">Your Name</label>
                                        <input
                                            name='user_name'
                                            type="text"
                                            placeholder="Enter your name"
                                            value={formData.user_name}
                                            onChange={handleChange}
                                            className={`w-full p-3 sm:p-4 rounded-xl bg-white/10 backdrop-blur-sm border-2 text-sm sm:text-base ${
                                                errors.user_name ? 'border-red-400 shake' : 'border-white/20'
                                            } focus:outline-none focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/50 transition-all duration-300 text-white placeholder-gray-500 hover:bg-white/10`}
                                        />
                                        {errors.user_name && (
                                            <p className="text-red-300 text-sm animate-fade-in">{errors.user_name}</p>
                                        )}
                                    </div>

                                    <div className="space-y-2" data-aos="fade-left" data-aos-delay="300">
                                        <label className="text-sm font-medium text-gray-200">Your Email</label>
                                        <input
                                            type="email"
                                            placeholder="Enter your email"
                                            name='email'
                                            value={formData.email}
                                            onChange={handleChange}
                                            className={`w-full p-4 rounded-xl bg-white/10 backdrop-blur-sm border-2 ${
                                                errors.email ? 'border-red-400 shake' : 'border-white/20'
                                            } focus:outline-none focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/50 transition-all duration-300 text-white placeholder-gray-500 hover:bg-white/10`}
                                        />
                                        {errors.email && (
                                            <p className="text-red-300 text-sm animate-fade-in">{errors.email}</p>
                                        )}
                                    </div>
                                </div>

                                {/* Phone and Subject Row */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    <div className="space-y-2" data-aos="fade-right" data-aos-delay="400">
                                        <label className="text-sm font-medium text-gray-200">Mobile Number</label>
                                        <input
                                            type="text"
                                            placeholder="Enter your mobile number"
                                            name='number'
                                            value={formData.number}
                                            onChange={handleChange}
                                            className={`w-full p-4 rounded-xl bg-white/10 backdrop-blur-sm border-2 ${
                                                errors.number ? 'border-red-400 shake' : 'border-white/20'
                                            } focus:outline-none focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/50 transition-all duration-300 text-white placeholder-gray-500 hover:bg-white/10`}
                                        />
                                        {errors.number && (
                                            <p className="text-red-300 text-sm animate-fade-in">{errors.number}</p>
                                        )}
                                    </div>

                                    <div className="space-y-2" data-aos="fade-left" data-aos-delay="400">
                                        <label className="text-sm font-medium text-gray-200">Subject</label>
                                        <input
                                            type="text" 
                                            placeholder="What's this about?"
                                            name='subject'
                                            value={formData.subject}
                                            onChange={handleChange}
                                            className={`w-full p-4 rounded-xl bg-white/10 backdrop-blur-sm border-2 ${
                                                errors.subject ? 'border-red-400 shake' : 'border-white/20'
                                            } focus:outline-none focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/50 transition-all duration-300 text-white placeholder-gray-500 hover:bg-white/10`}
                                        />
                                        {errors.subject && (
                                            <p className="text-red-300 text-sm animate-fade-in">{errors.subject}</p>
                                        )}
                                    </div>
                                </div>

                                {/* Message Textarea */}
                                <div className="space-y-2" data-aos="fade-up" data-aos-delay="500">
                                    <label className="text-sm font-medium text-gray-200">Your Message</label>
                                    <textarea
                                        placeholder="Tell me about your project or inquiry..."
                                        className={`w-full p-4 rounded-xl bg-white/10 backdrop-blur-sm border-2 ${
                                            errors.message ? 'border-red-400 shake' : 'border-white/20'
                                        } focus:outline-none focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/50 transition-all duration-300 text-white placeholder-gray-500 resize-none hover:bg-white/10 text-sm sm:text-base`}
                                        rows="6"
                                        name='message'
                                        value={formData.message}
                                        onChange={handleChange}
                                    ></textarea>
                                    {errors.message && (
                                        <p className="text-red-300 text-sm animate-fade-in">{errors.message}</p>
                                    )}
                                </div>

                                {/* Submit Button and Status */}
                                <div className="flex flex-col items-center gap-4 pt-2" data-aos="fade-up" data-aos-delay="600">
                                    {submitStatus === 'success' && (
                                        <div className="w-full bg-green-500/20 border-2 border-green-400 text-green-200 px-6 py-3 rounded-xl animate-fade-in flex items-center gap-2">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            Message sent successfully! I'll get back to you soon.
                                        </div>
                                    )}
                                    {submitStatus === 'error' && (
                                        <div className="w-full bg-red-500/20 border-2 border-red-400 text-red-200 px-6 py-3 rounded-xl animate-fade-in flex items-center gap-2">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                            </svg>
                                            Failed to send message. Please try again later.
                                        </div>
                                    )}
                                    <button
                                        type="submit"
                                        className="btn w-full sm:w-auto px-10 py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 transition-all duration-300"
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? (
                                            <span className="flex items-center gap-2">
                                                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                Sending...
                                            </span>
                                        ) : (
                                            'Send Message'
                                        )}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default ContactInfo;

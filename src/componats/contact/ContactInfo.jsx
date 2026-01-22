import React, { useRef, useState } from 'react';
import emailjs from "emailjs-com";
import './contact.css';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaSpinner } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

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
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.user_name.trim()) newErrors.user_name = 'Name is required';
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
        if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
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
        if (!validateForm()) return;

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

    const contactInfo = [
        { icon: <FaPhone />, title: "Phone", value: "+91 9544 5515 94", href: "tel:+919544551594", delay: 0 },
        { icon: <FaEnvelope />, title: "Email", value: "shanithshanzz52@gmail.com", href: "mailto:shanithshanzz52@gmail.com", delay: 0.1 },
        { icon: <FaMapMarkerAlt />, title: "Address", value: "Calicut, Kerala, India", href: "#", delay: 0.2 },
    ];

    const inputClasses = (error) => `
        w-full bg-white/5 border ${error ? 'border-red-500' : 'border-white/10'} 
        rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none 
        focus:border-yellow-500/50 focus:ring-1 focus:ring-yellow-500/50 
        transition-all duration-300 backdrop-blur-sm
    `;

    return (
        <div className="relative overflow-hidden bg-[#0a0a0f] min-h-screen py-20">
            {/* Background Effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] mix-blend-screen opacity-20" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-yellow-500/10 rounded-full blur-[120px] mix-blend-screen opacity-20" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Get In <span className="text-[#d4af37]">Touch</span>
                    </h2>
                    <p className="text-gray-400 max-w-xl mx-auto">
                        Have a project in mind or just want to say hi? I'd love to hear from you.
                    </p>
                </motion.div>

                <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
                    {/* Contact Info Cards */}
                    <div className="w-full lg:w-1/3 flex flex-col gap-6">
                        {contactInfo.map((info, index) => (
                            <motion.a
                                key={index}
                                href={info.href}
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: info.delay }}
                                whileHover={{ scale: 1.02, x: 5 }}
                                className="flex items-center gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 hover:border-[#d4af37]/30 transition-all group"
                            >
                                <div className="p-4 rounded-xl bg-[#d4af37]/10 text-[#d4af37] text-xl group-hover:bg-[#d4af37] group-hover:text-black transition-colors duration-300">
                                    {info.icon}
                                </div>
                                <div>
                                    <h3 className="text-gray-400 text-sm font-medium mb-1">{info.title}</h3>
                                    <p className="text-white font-semibold">{info.value}</p>
                                </div>
                            </motion.a>
                        ))}
                    </div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="w-full lg:w-2/3"
                    >
                        <form ref={form} onSubmit={sentEmail} className="bg-white/5 backdrop-blur-md rounded-3xl p-6 sm:p-8 md:p-10 border border-white/10 shadow-2xl relative overflow-hidden">
                            {/* Decorative line */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent opacity-50" />

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <input
                                        type="text"
                                        name="user_name"
                                        value={formData.user_name}
                                        onChange={handleChange}
                                        placeholder="Your Name"
                                        className={inputClasses(errors.user_name)}
                                    />
                                    {errors.user_name && <p className="text-red-500 text-xs mt-1 ml-1">{errors.user_name}</p>}
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        name="number"
                                        value={formData.number}
                                        onChange={handleChange}
                                        placeholder="Phone Number"
                                        className={inputClasses(errors.number)}
                                    />
                                    {errors.number && <p className="text-red-500 text-xs mt-1 ml-1">{errors.number}</p>}
                                </div>
                            </div>

                            <div className="mb-6">
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Your Email"
                                    className={inputClasses(errors.email)}
                                />
                                {errors.email && <p className="text-red-500 text-xs mt-1 ml-1">{errors.email}</p>}
                            </div>

                            <div className="mb-6">
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    placeholder="Subject"
                                    className={inputClasses(errors.subject)}
                                />
                                {errors.subject && <p className="text-red-500 text-xs mt-1 ml-1">{errors.subject}</p>}
                            </div>

                            <div className="mb-8">
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Your Message..."
                                    rows="5"
                                    className={inputClasses(errors.message)}
                                />
                                {errors.message && <p className="text-red-500 text-xs mt-1 ml-1">{errors.message}</p>}
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-[#d4af37] hover:bg-[#b0912f] text-black font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? <FaSpinner className="animate-spin" /> : <FaPaperPlane />}
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </motion.button>

                            <AnimatePresence>
                                {submitStatus && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0 }}
                                        className={`mt-4 text-center p-3 rounded-lg ${submitStatus === 'success' ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 'bg-red-500/10 text-red-400 border border-red-500/20'}`}
                                    >
                                        {submitStatus === 'success' ? 'Message sent successfully! I will get back to you soon.' : 'Something went wrong. Please try again later.'}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

export default ContactInfo;

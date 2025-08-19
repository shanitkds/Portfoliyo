import React, { useRef } from 'react';
import emailjs from "emailjs-com";
import './contact.css'

function ContactInfo() {
    const form = useRef();

    const sentEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_lym7gph',
            'template_qsgstpe',
            form.current,
            '7FfGFcXL8X27OBYlH'
        ).then(() => {
            alert('Message sent successfully');
            form.current.reset();
        }, (error) => {
            alert('You have an error: ' + error.text);
        });
        console.log(form.current);
    };

    return (
        <div>
            <footer className="bg-[#0067CC] bg-opacity-90 text-white py-8 px-4 contat-main">
                <div className="max-w-4xl mx-auto mb-50" data-aos="zoom-in-up">
                    <h2 className="text-4xl font-semibold mb-4 mt-20">Contact <span>Me</span></h2>
                    <form ref={form} onSubmit={sentEmail} className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                        <input
                            name='user_name'
                            type="text"
                            placeholder="Name"
                            className="p-2 rounded bg-gray-800 bg-opacity-80 border border-gray-700 focus:outline-none"
                        />

                        <input
                            type="email"
                            placeholder="Email"
                            name='email'
                            className="p-2 rounded bg-gray-800 bg-opacity-80 border border-gray-700 focus:outline-none"
                        />

                        <input
                            type="text"
                            placeholder="Mobile Number"
                            name='number'
                            className="p-2 rounded bg-gray-800 bg-opacity-80 border border-gray-700 focus:outline-none"
                        />

                        <input
                            type="text" 
                            placeholder="Email Subject"
                            name='subject'
                            className="p-2 rounded bg-gray-800 bg-opacity-80 border border-gray-700 focus:outline-none"
                        />

                        <textarea
                            placeholder="Your Message"
                            className="p-2 rounded bg-gray-800 bg-opacity-80 border border-gray-700 focus:outline-none col-span-1 sm:col-span-2"
                            rows="4"
                            name='message'
                        ></textarea>

                        <div className="col-span-1 sm:col-span-2 flex justify-center">
                            <button
                                type="submit"
                                className="btn"
                            >
                                Send Message
                            </button>
                        </div>

                    </form>
                </div>
            </footer>
        </div>
    );
}

export default ContactInfo;

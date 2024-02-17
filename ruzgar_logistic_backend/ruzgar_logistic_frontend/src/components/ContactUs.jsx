import React from 'react';

const ContactUs = () => {
    // WhatsApp number in international format and URL-encoded message
    const whatsappNumber = "905331394920";
    const message = encodeURIComponent("Hello, I'm interested in your logistics services. Could you provide more information?");

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
    
    return (
        <div className="container mx-auto text-center p-10 bg-white shadow-lg rounded-lg">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Contact Us</h2>
            <p className="mb-6 text-gray-600">Have any questions? Reach out to us directly through WhatsApp.</p>
            <div className="mb-6 inline-block bg-green-500 hover:bg-green-600 transition-colors duration-300 rounded-full shadow-md">
                <a
                    href="{whatsappUrl}"
                    className="flex items-center justify-center gap-2 p-3 text-xl font-bold text-white"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img src="/whatsapp.svg" alt="WhatsApp" className="w-8 h-8" />
                    +90 (533) 139 4920
                </a>
            </div>
        </div>
    );
    
};

export default ContactUs;

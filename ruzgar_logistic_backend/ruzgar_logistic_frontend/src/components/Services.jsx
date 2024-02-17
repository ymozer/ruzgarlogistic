import React from 'react';

const Services = () => {
    return (
        <div className="container mx-auto p-8">
            <h3 className="text-2xl text-center mb-6">Our Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Example Service */}
                <div className="p-6 shadow-lg rounded-lg">
                    <h4 className="text-xl mb-2">Land Freight</h4>
                    <p className="text-[#182A47]/75">
                        We offer reliable and efficient land freight services, ensuring your goods arrive safely and on time.
                    </p>
                </div>
                <div className="p-6 shadow-lg rounded-lg">
                    <h4 className="text-xl mb-2">Air Freight</h4>
                    <p className="text-[#182A47]/75">
                        Our air freight services are fast and reliable, ensuring your goods arrive safely and on time.
                    </p>
                    </div>
                <div className="p-6 shadow-lg rounded-lg">
                    <h4 className="text-xl mb-2">Ocean Freight</h4>
                    <p className="text-[#182A47]/75">
                        We offer efficient ocean freight services, ensuring your goods arrive safely and on time.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Services;

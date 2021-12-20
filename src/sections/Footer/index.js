import { Link } from 'gatsby'
import React from 'react'
import Paragraph from '../../components/Paragraph'
import ParagraphSm from '../../components/ParagraphSm'

export default function Footer() {
    return (
        <section className="px-6 lg:px-40 pt-20 pb-10 bg-purple-700">
            <main>
                <div className="flex flex-col lg:flex-row items-start space-x-0 lg:space-x-36 mb-14">
                    <div className='w-full lg:w-1/4 mb-16 lg:mb-0'>
                        <Link to="">
                            <img src="/logo2.svg" className='mb-6' alt="" />
                        </Link>
                        <Paragraph light={true} title="The best medicines & biggest brands within 30 minutes at your home. Experience the power of MedCartel today." />
                    </div>
                    <div className="grid grid-cols-3 gap-x-16">
                        <div>
                            <p className='mb-6 text-gray-50 text-base font-medium'>Company</p>
                            <div className="flex flex-col space-y-2">
                                <ParagraphSm title="About Us" light={true} />
                                <ParagraphSm title="Privacy Policy" light={true} />
                                <ParagraphSm title="Term & Conditions" light={true} />
                                <ParagraphSm title="Rider" light={true} /> 
                                <ParagraphSm title="Contact" light={true} /> 
                            </div>
                        </div>
                        <div>
                            <p className='mb-6 text-gray-50 text-base font-medium'>More Links</p>
                            <div className="flex flex-col space-y-2">
                                <ParagraphSm title="About Us" light={true} />
                                <ParagraphSm title="Privacy Policy" light={true} />
                                <ParagraphSm title="Term & Conditions" light={true} />
                                <ParagraphSm title="Rider" light={true} /> 
                                <ParagraphSm title="Contact" light={true} /> 
                            </div>
                        </div>
                        <div>
                            <p className='mb-6 text-gray-50 text-base font-medium'>Contact Details</p>
                            <div className="flex flex-col space-y-2">
                                <ParagraphSm title="About Us" light={true} />
                                <ParagraphSm title="Privacy Policy" light={true} />
                                <ParagraphSm title="Term & Conditions" light={true} />
                                <ParagraphSm title="Rider" light={true} /> 
                                <ParagraphSm title="Contact" light={true} /> 
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="w-full py-4 opacity-20" />
                <span className='text-gray-400 text-sm'>© 2020 UX Theme, All Rights Reserved</span>
            </main>
        </section>
    )
}

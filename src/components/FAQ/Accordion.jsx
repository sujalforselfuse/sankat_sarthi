import React, {useState} from 'react'

const Accordion = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            {/* FAQ's */}

            {/* Accordion box */}

            <div>

                <div id="accordion-open" data-accordion="open">
                    <h2 id={`accordion-open-heading-1`}>
                        <button
                            type="button"
                            className={`flex items-center justify-between w-full p-5 font-medium text-left text-[#007c7c] border border-b-0 border-green-200 rounded-t-xl hover:bg-green-100 ${isOpen ? 'bg-green-100' : ''
                                }`}
                            onClick={toggleAccordion}
                            aria-expanded={isOpen}
                        >
                            <span className="flex items-center">

                                <svg
                                    className={`w-5 h-5 mr-2 shrink-0 ${isOpen ? 'rotate-180' : ''}`}
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>

                                What is Sankat Sarthi?

                            </span>

                        </button>

                    </h2>

                    <div
                        className={`${isOpen ? 'block' : 'hidden'
                            } p-5 border border-b-0 border-green-200`}
                        aria-labelledby={`accordion-open-heading-1`}
                    >
                        <p className="mb-2 text-green-500">
                            Sankat Sarthi is a disaster management app designed to provide real-time alerts, guidance, and assistance during various emergencies. It aims to enhance community resilience by offering tools for risk assessment, emergency planning, and volunteer coordination.
                        </p>
                    </div>
                </div>

                <div id="accordion-open" data-accordion="open">
                    <h2 id={`accordion-open-heading-2`}>
                        <button
                            type="button"
                            className={`flex items-center justify-between w-full p-5 font-medium text-left text-[#007c7c] border border-b-0 border-green-200 rounded-t-xl hover:bg-green-100 ${isOpen ? 'bg-green-100' : ''
                                }`}
                            onClick={toggleAccordion}
                            aria-expanded={isOpen}
                        >
                            <span className="flex items-center">

                                <svg
                                    className={`w-5 h-5 mr-2 shrink-0 ${isOpen ? 'rotate-180' : ''}`}
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>

                                How can 'Sankat Sarthi' help me during a disaster?

                            </span>

                        </button>

                    </h2>

                    <div
                        className={`${isOpen ? 'block' : 'hidden'
                            } p-5 border border-b-0 border-green-200`}
                        aria-labelledby={`accordion-open-heading-2`}
                    >
                        <p className="mb-2 text-green-500">
                            The app provides immediate access to emergency alerts, safety tips, and instructions for evacuation. It can guide you to the nearest shelter, help in signaling for rescue, and connect you with relief services.
                        </p>
                    </div>
                </div>



            </div>
        </>
    )
}

export default Accordion
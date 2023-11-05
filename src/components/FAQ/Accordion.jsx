import React, { useState } from 'react'
import AccordionItem from './AccordionItem';

const AccordionData = [
    {
        id: 1,
        question: "What is Sankat Sarthi?",
        answer:
            "Sankat Sarthi is a disaster management app designed to provide real-time alerts, guidance, and assistance during various emergencies. It aims to enhance community resilience by offering tools for risk assessment, emergency planning, and volunteer coordination.",
    },

    {
        id: 2,
        question: "How can 'Sankat Sarthi' help me during a disaster?",
        answer:
            "The app provides immediate access to emergency alerts, safety tips, and instructions for evacuation. It can guide you to the nearest shelter, help in signaling for rescue, and connect you with relief services.",
    },

    {
        id: 3,
        question: "How does 'Sankat Sarthi' ensure the accuracy of its alerts?",
        answer:
            " We source our information from reliable and official channels, including meteorological data, government advisories, and verified on-ground reports. Our team constantly monitors and updates the information to maintain accuracy.",
    },

    {
        id: 4,
        question: "What is Sankat Sarthi?",
        answer:
            "Sankat Sarthi is a disaster management app designed to provide real-time alerts, guidance, and assistance during various emergencies. It aims to enhance community resilience by offering tools for risk assessment, emergency planning, and volunteer coordination.",
    },

    {
        id: 5,
        question: "What is Sankat Sarthi?",
        answer:
            "Sankat Sarthi is a disaster management app designed to provide real-time alerts, guidance, and assistance during various emergencies. It aims to enhance community resilience by offering tools for risk assessment, emergency planning, and volunteer coordination.",
    },

    {
        id: 6,
        question: "What is Sankat Sarthi?",
        answer:
            "Sankat Sarthi is a disaster management app designed to provide real-time alerts, guidance, and assistance during various emergencies. It aims to enhance community resilience by offering tools for risk assessment, emergency planning, and volunteer coordination.",
    },
];

const Accordion = () => {
    const [openStates, setOpenStates] = useState([false, false, false]);

    const toggleAccordion = (index) => {
        const updatedOpenStates = [...openStates];
        updatedOpenStates[index] = !updatedOpenStates[index];
        setOpenStates(updatedOpenStates);
    };
    return (
        <>
            {/* FAQ's */}

            {/* Accordion box */}

            <div className='flex lg:flex-row flex-col justify-between w-full items-center'>

                {/* Image */}

                <div className='w-1/2'>
                    <img src="https://www.cowin.gov.in/assets/images/faq_Section.svg" alt="" />
                </div>

                {/* Accordions */}

                <div className='w-1/2'>

                    <h1 className="text-center text-[#007c7c] text-3xl font-semibold uppercase mb-10 lg:mt-0 mt-10 lg:text-left">
                        Frequently Asked Questions
                    </h1>

                    {AccordionData.map((data, index) => {
                        return (
                            <AccordionItem
                                key={index}
                                question={data.question}
                                answer={data.answer}
                                isOpen={openStates[index]}
                                onToggle={() => toggleAccordion(index)}
                            />
                        )
                    })}

                </div>


            </div>
        </>
    )
}

export default Accordion
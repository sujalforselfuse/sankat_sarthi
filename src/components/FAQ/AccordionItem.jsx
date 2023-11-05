import React from 'react'
import { AiFillCaretDown } from 'react-icons/ai'

const AccordionItem = ({ question, answer, isOpen, onToggle }) => {
    return (
        <>
            <div id="accordion-open" data-accordion="open" className='w-full'>
                <h2 id="accordion-open-heading-1">
                    <button
                        type="button"
                        className={`flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-green-200 rounded-t-xl`}
                        onClick={onToggle}
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
                            {question}
                        </span>

                        <div>
                            <AiFillCaretDown />
                        </div>
                    </button>
                </h2>
                <div
                    className={`${isOpen ? 'max-h-96 transition-max-h flex' : 'max-h-0 hidden'
                        } overflow-hidden p-5 border border-b-0 border-green-200 w-full`}
                    aria-labelledby="accordion-open-heading-1"
                >
                    <p className="mb-2 text-gray-500">{answer}</p>
                </div>
            </div>
        </>
    )
}

export default AccordionItem
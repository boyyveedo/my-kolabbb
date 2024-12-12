import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';


const Faq = () => {
    const [openIndex, setOpenIndex] = useState(null);

    // FAQ data with line breaks
    const faqData = [
        {
            question: "What is Kolabbb?",
            answer: "Kolabbb is a bridge between creatives, talents, and executives. Kolabbb provides a platform that enables creatives and talents to <br />collaborate.",
        },
        {
            question: "How do I register Kolabbb?",
            answer: "We are at the building phase, but you can sign up for free to our waitlist. This way, you can be the first to start using the platform when we <br />launch.",
        },
        {
            question: "Is Kolabbb free?",
            answer: "Kolabbb is free for both the talent and creatives. Sign up for free to join our waitlist and receive special offers when we launch.",
        },
    ];

    // Toggle function to open/close the FAQ
    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="w-full h-auto flex flex-col items-center justify-center gap-[32px] pt-[20px] pb-[74px] px-4 sm:px-0 bg-neutralSemantic">
            <h2 className="font-[600] text-[32px] sm:text-[48px] leading-[40px] sm:leading-[58px] text-center mb-2 h-[58px] text-neutralPrimary">
                FAQs
            </h2>
            <div className="w-full sm:w-[1076px] max-w-full h-auto space-y-[32px] sm:space-y-[64px] items-center">
                {faqData.map((faq, index) => (
                    <div
                        key={index}
                        className={`relative ${openIndex === index ? 'bg-neutralLight' : 'bg-neutralLemon'} rounded-md`}
                    >
                        <div
                            onClick={() => toggleFaq(index)}
                            className={`cursor-pointer flex justify-between items-center p-4 text-green-900`}
                        >
                            <span className="text-[20px] sm:text-[24px] font-[600] leading-[28px] sm:leading-[32px] font-DM-Sans">
                                {faq.question}
                            </span>
                            <span
                                className={`transition-transform duration-300 ease-in-out text-xl bg-neutralPrimary text-white rounded-full w-[32px] h-[32px] flex justify-center items-center transform ${openIndex === index ? 'rotate-180' : 'rotate-0'}`}
                            >
                                <FontAwesomeIcon icon={openIndex === index ? faTimes : faPlus} />
                            </span>
                        </div>
                        <div
                            className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}
                        >
                            {openIndex === index && (
                                <div
                                    className="p-4 text-neutralPrimary"
                                    dangerouslySetInnerHTML={{ __html: faq.answer }}
                                />
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Faq;

import React, { useState, useRef, useEffect } from 'react';
import videographer from "../assets/videographer.png";
import music_producer from "../assets/music_producer.png";
import Talent from "../assets/Talent.png";
import Creative from "../assets/Creative.png";
import Icon from "../assets/Icon.png";
import { subscribeEmail } from '../Service/api';  // API call to backend
import { RingLoader } from "react-spinners"; // Importing the loader component

const Home = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);  // State to track loading status
    const [isVisible, setIsVisible] = useState(false); // State to handle page transition visibility
    const inputSectionRef = useRef(null);

    // Set page to be visible after component mounts (for transition effect)
    useEffect(() => {
        setIsVisible(true);
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Check if the email is empty
        if (!email) {
            setMessage('Please enter an email address.');
            return;
        }

        setLoading(true);  // Set loading to true when the user submits the form

        try {
            // Call the subscribeEmail function to subscribe the user
            const response = await subscribeEmail(email);

            // Check if the response has a message from the server (in case of success)
            if (response?.data?.message) {
                setMessage(response.data.message);  // Show server's success message
            } else {
                // Set a custom success message after the subscription
                setMessage('Thank you for joining our waitlist!');
            }

            // Clear the email input field after successful subscription
            setEmail('');

        } catch (error) {
            // In case of an error, display the error message
            setMessage(error.message || 'An error occurred. Please try again later.');
        } finally {
            setLoading(false);  // Set loading to false once the request is complete
        }
    };

    return (
        <div className={`w-screen bg-neutralSemantic overflow-x-hidden transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}>
            {/* Main Content (Centered) */}
            <div className=" custom-section hero-container relative w-[1440px] h-[762px] flex justify-center items-center   ">

                {/* Top Left Image */}
                <div className=" mobile-left absolute w-[174.14px] h-[215.25px] top-[150px] left-[72px] rounded-[8px]">
                    <div className="rounded-lg overflow-hidden ">
                        <img
                            src={videographer}
                            alt="Videographer"
                            className="w-full h-full object-cover"
                            loading="lazy"
                        />
                    </div>
                </div>

                {/* Center Content */}
                <div className=" text-content w-[584px] h-[342px] absolute top-[168px] left-[430px] text-center">
                    <h1 className="text-content-main text-[96px] leading-[114px] font-bold tracking-[-1.5%] text-neutralPrimary">
                        Where artists
                        <br /> and creatives collaborate
                    </h1>
                </div>

                {/* Description */}
                <div className="desc w-[507px] h-[72px] absolute top-[542px] left-[467px] text-center">
                    <h4 className="desc-main font-medium text-[28px] leading-[36px]">
                        Find and collaborate with top creatives
                        for your music <br class="mobile-line-break" />  projects on Kolabbb.
                    </h4>
                </div>

                {/* Button */}
                <div className="btn absolute top-[646px] left-[600px] w-[240px] h-[56px] flex items-center justify-center">
                    <button
                        onClick={() => {
                            inputSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="bg-neutralPrimary btn-main text-white text-center font-medium rounded-md px-[12px] py-[16px]"
                    >
                        Get Early Access
                    </button>
                </div>

                {/* Bottom Right Image */}
                <div className="mobile-right absolute w-[174.14px] h-[215.25px] top-[355px] left-[1194px] rounded-[8px]">
                    <div className="rounded-lg overflow-hidden">
                        <img
                            src={music_producer}
                            alt="Music Producer"
                            className="w-full h-full object-cover"
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>


            {/* New Section with Own Background Color */}
            <div className=" w-full bg-neutralPrimary py-[64px] card-div">
                <div className="div-2 flex flex-col items-center gap-reduced w-[80%] sm:w-[769px] mx-auto h-[210px]">
                    {/* Title */}
                    <p className="custom-title text-center font-[700] pb-[40px] text-neutralGreen text-[14px] leading-[20px] tracking-[1.25%] w-[300px] h-[20px]">
                        Reasons to believe in kolabbb
                    </p>

                    {/* Subtitle */}
                    <h2 className="custom-subtitle text-center font-[600] text-[48px] leading-[44px] sm:leading-[58px] text-neutralWhite w-full sm:w-[769px] mb-[2px]">
                        Everything you need for your music's success is right here.
                    </h2>

                    {/* Description */}
                    <div className='cus-des'>
                        <p className="custom-description text-center font-[500]  text-[16px] leading-[24px] tracking-[0.5%] text-white w-[557px] h-[48px]  mt-[2px]">
                            Streamline every step of your collaboration, from
                            connection to creation. Kolabbb makes it faster,
                            easier, and seamless
                        </p>
                    </div>
                </div>

                {/* Card Section */}
                <div className="card-card w-full flex items-center justify-center mt-0 sm:mt-[48px]">
                    <div className="flex gap-[32px] flex-wrap justify-center">
                        {/* Card 1 */}
                        <div className="custom-card w-[90%] sm:w-[347px] h-[272px] py-[64px] px-[24px] bg-neutralLemon rounded-[8px] flex flex-col justify-between shadow-md mb-4 sm:mb-0">
                            {/* Subtitle 1 */}
                            <p className="card-title text-neutralDark font-[600] text-[18px] leading-[26px] text-center">
                                Redefining convenience and efficiency for talent
                            </p>

                            {/* Body 1 */}
                            <p className="card-body text-neutralblack font-[500] text-[14px] tracking-[0.25%] leading-[20px] text-center text-sm">
                                Collaborate with industry heavyweights who
                                provide the perfect creative direction
                                to propel your music career to success.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="custom-card w-[90%] sm:w-[347px] h-[272px] py-[64px] px-[24px] bg-neutralLemon rounded-[8px] flex flex-col justify-between shadow-md mb-4 sm:mb-0">
                            {/* Subtitle 1 */}
                            <p className="card-title text-neutralDark font-[600] text-[18px] tracking-[0.8%] leading-[26px] text-center">
                                Scale your music with the best creatives on Kolabbb
                            </p>

                            {/* Body 1 */}
                            <p className="card-body text-neutralblack font-[500] text-[14px] tracking-[0.25%] pt-[32px] leading-[20px] text-center text-sm">
                                Partner with the best creatives who bring the right vision and expertise to help elevate your music and propel your career toward success.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="custom-card w-[90%] sm:w-[347px] h-[272px] py-[64px] px-[24px] bg-neutralLemon rounded-[8px] flex flex-col justify-between shadow-md">
                            {/* Subtitle 1 */}
                            <p className="card-title text-neutralDark font-[600] text-[18px] h-[52px] w-full tracking-[0.8%] leading-[26px] text-center mx-auto">
                                Easy access to <br /> all creatives
                            </p>

                            {/* Body 1 */}
                            <p className="card-body text-neutralblack font-[500] text-[14px] tracking-[0.25%] leading-[20px] text-center text-sm h-[60px] w-full mx-auto">
                                Kolabbb simplifies the process, connecting you directly with top talent—no third parties, just seamless collaboration.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Button */}
                <div className="  flex justify-center items-center px-[12px] py-[60px]">
                    <button onClick={() => {
                        inputSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
                    }} className="custom-button  custom-button-div w-[240px] h-[56px] border border-neutralGreen rounded-[8px] text-center text-[16px] tracking-[0.5%] font-[600] text-neutralGreen">
                        Sign up to our waitlist
                    </button>
                </div>
            </div>

            {/* Final Section */}
            <div className="custom-container h-[420px] bg-neutralSemantic px-[16px] sm:px-[177.07px] w-full flex items-center justify-center flex-col sm:flex-row">
                <div className="custom-inner-container w-full sm:w-[1085.86px] h-[382px] flex items-center gap-[0] flex-col sm:flex-row">
                    {/* Text Section */}
                    <div className="custom-text-section mobile-text-section w-[80%] sm:w-[480px] h-[174px] mb-[32px] mt-[62px]">
                        <h2 className="custom-heading text-neutralPrimary font-[600] leading-[58px] text-[32px] sm:text-[48px]">
                            The best solution for <br />
                            creatives and talent <br />
                            collaboration
                        </h2>
                    </div>

                    {/* Image Section */}
                    <div className="custom-image-section flex flex-col sm:flex-row items-center justify-center sm:ml-auto">
                        {/* Image 1 */}
                        <div className="custom-image-container flex flex-col items-center w-full sm:w-[221px] mb-[20px] sm:mb-0">
                            <div className="custom-image w-full sm:w-[221px] h-[273.17px] rounded-[10.15px] overflow-hidden mb-[65px]">
                                <img
                                    src={Talent}
                                    alt="Music Producer"
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                />
                            </div>
                            {/* Label for Talent */}
                            <h5 className="custom-label text-[24px] font-[600] w-[71px] h-[32px] leading-[32px] text-neutralPrimary text-center relative top-[-47px]">
                                Talent
                            </h5>
                        </div>

                        {/* Space for the icon */}
                        <div className="custom-icon-section flex items-center justify-center w-[74px] h-[74px] mt-[20px] sm:mt-0">
                            <img
                                src={Icon}
                                alt="Icon"
                                className="w-[74px] h-[74px]"
                            />
                        </div>

                        {/* Image 2 */}
                        <div className="custom-image-container2 flex flex-col items-center w-full sm:w-[220.86px] mt-[20px] sm:mt-0">
                            <div className="custom-image w-full sm:w-[220.86px] h-[273px] rounded-[10.15px] overflow-hidden mt-[70px]">
                                <img
                                    src={Creative}
                                    alt="Creative Collaboration"
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                />
                            </div>
                            {/* Label for Creative */}
                            <h5 className="custom-label text-[24px] font-[600] w-[98px] h-[32px] leading-[32px] text-neutralPrimary text-center">
                                Creative
                            </h5>
                        </div>
                    </div>
                </div>
            </div>

            {/* Final Section */}
            <div className="mobile-container h-[420px] bg-neutralPrimary py-[64px] gap-[24px] w-full flex flex-col items-center justify-around">
                {/* Inner container */}
                <div className="inner-content w-[80%] sm:w-[659px] h-[204px] gap-[16px] flex flex-col items-center">
                    <h2 className="main-heading text-white font-[600]  text-[32px] sm:text-[48px] w-full sm:w-[659px] h-[116px] leading-[58px] text-center">
                        Join us on this creative journey
                    </h2>

                    <div className="description w-[80%] mb-[40px] sm:w-[357px] h-[72px]">
                        <p className="description-text text-neutralWhite font-[500]   text-[14px] sm:text-[16px] leading-[24px] text-center tracking-[0.5%]">
                            Join our waitlist as creative or a musical talent
                            and be the first to know when we launch.<br />
                            Stand a chance to win a prize on launch day.
                        </p>
                    </div>
                </div>

                {/* Input and Button Section */}
                <div ref={inputSectionRef} id="waitlist-input" className=" input-button-section flex items-center gap-[16px] mt-[7px] flex-wrap justify-center">
                    {/* Input Field */}
                    <form noValidate  // Prevent default form validation
                        onSubmit={handleSubmit} className='className="w-full  flex flex-col sm:flex-row gap-4 sm:gap-6'>
                        <input
                            type="email"
                            value={email}
                            placeholder=" Enter email address"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="  input input-field w-full sm:w-[856px] h-[64px] rounded-[8px] px-[12px] py-[16px] border-none bg-neutralIndi text-neutralHue"
                        />

                    </form>
                    {/* Button with loader */}
                    <button
                        type="submit"
                        className="action-button w-full sm:w-[196px] h-[64px] border-neutralGreen rounded-[8px] border-[1px] px-[12px] py-[16px] text-neutralLemon bg-neutralPrimary mt-4 sm:mt-0 flex items-center justify-center"
                        disabled={loading} // Disable button when loading
                    >
                        {loading ? (
                            <RingLoader color="#ffffff" size={30} />  // Spinner will appear centered
                        ) : (
                            "Join the Waitlist"  // Button text when not loading
                        )}
                    </button>
                    <div className="message-container w-full flex justify-center mt-2">
                        {message && <p className="text-center text-neutralLemon">{message}</p>}
                    </div>

                </div>

            </div>

        </div>
    );
};

export default Home;

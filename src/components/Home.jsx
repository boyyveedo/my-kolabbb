import React from 'react';
import videographer from "../assets/videographer.png";
import music_producer from "../assets/music_producer.png";
import Talent from "../assets/Talent.png";
import Creative from "../assets/Creative.png";
import Icon from "../assets/Icon.png";

const Home = () => {
    return (
        <div className="w-screen bg-gray-100 overflow-x-hidden">
            {/* Main Content (Centered) */}
            <div className="flex items-center justify-center h-full sm:h-[786px] px-4 sm:px-0">
                <div className="relative w-full h-[360px] sm:h-[786px] sm:w-[1440px] sm:top-[-70px]">
                    {/* Top Left Image */}
                    <div className="absolute top-[79px] left-[24px] sm:top-[150px] sm:left-[72px] w-[56px] h-[64px] sm:w-[174.14px] sm:h-[215.25px] ">
                        <div className="rounded-lg overflow-hidden">
                            <img
                                src={videographer}
                                alt="Videographer"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Center Content */}
                    <div className="absolute top-[100px] sm:top-[168px] left-[20px] sm:left-[331px] w-[320px] sm:w-[783px] h-auto flex flex-col items-center justify-center">
                        {/* Center Content */}
                        <div className="w-[168px] sm:w-full h-auto">
                            <h1 className="text-[20px] sm:text-[96px] font-bold leading-[28px] sm:leading-[114px] text-neutralPrimary text-center">
                                The best place to grow your Talent as an Artist
                            </h1>
                        </div>

                        {/* Description */}
                        <div className="mt-2 sm:mt-8 w-[152px] sm:w-full h-auto">
                            <p className="text-[10px] sm:text-[28px] font-medium leading-[16px] sm:leading-[36px] tracking-[0.015em] text-center">
                                Find and collaborate with top
                                creatives<br /> for your music projects on Kolabbb.
                            </p>
                        </div>
                    </div>



                    <div className="absolute top-[300px] left-[60px] sm:top-[646px] sm:left-[600px] w-[240px] sm:w-[240px] h-[40px] sm:h-[56px] flex items-center justify-center">
                        <button className="bg-neutralPrimary text-white text-center font-medium rounded-md px-[8px] py-[8px] sm:px-[12px] sm:py-[16px]">
                            Get Early Access
                        </button>
                    </div>

                    {/* Bottom Right Image */}
                    <div className="absolute top-[130px] left-[280px] sm:top-[355px] sm:left-[1194px] w-[56px] h-[64px] sm:w-[174.14px] sm:h-[215.25px] ">
                        <div className="rounded-lg overflow-hidden">
                            <img
                                src={music_producer}
                                alt="Music Producer"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>


            {/* New Section with Own Background Color */}
            <div className="custom-section w-full bg-neutralPrimary py-[64px]">
                <div className="flex flex-col items-center gap-reduced w-[80%] sm:w-[769px] mx-auto h-[210px]">
                    {/* Title */}
                    <p className="custom-title text-center font-[700] text-neutralGreen text-[14px] leading-[20px] tracking-[1.25%] w-full sm:w-[206px] h-[20px]">
                        Reasons to believe in kolabbb
                    </p>

                    {/* Subtitle */}
                    <h2 className="custom-subtitle text-center font-[600] text-[32px] sm:text-[48px] leading-[44px] sm:leading-[58px] text-neutralWhite w-full sm:w-[769px] mb-[2px]">
                        Everything you need for your music's success is right here.
                    </h2>

                    {/* Description */}
                    <p className="custom-description text-center font-[500] text-[14px] sm:text-[16px] leading-[24px] tracking-[0.5%] text-gray-400 w-[557px] h-[48px]  mt-[2px]">
                        Streamline every step of your collaboration, from connection to creation.
                        Kolabbb makes it faster, easier, and seamless

                    </p>

                </div>

                {/* Card Section */}
                <div className="w-full flex items-center justify-center mt-0 sm:mt-[48px]">
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
                                to propel your music career to success.                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="custom-card w-[90%] sm:w-[347px] h-[272px] py-[64px] px-[24px] bg-neutralLemon rounded-[8px] flex flex-col justify-between shadow-md mb-4 sm:mb-0">
                            {/* Subtitle 1 */}
                            <p className="card-title text-neutralDark font-[600] text-[18px] tracking-[0.8%] leading-[26px] text-center">
                                Scale your music with the best creatives on Kolabbb                            </p>

                            {/* Body 1 */}
                            <p className="card-body text-neutralblack font-[500] text-[14px] tracking-[0.25%]  pt-[32px] leading-[20px] text-center text-sm">
                                Partner with the best creatives who bring the right vision and expertise to help elevate your music and propel your career toward success.                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="custom-card w-[90%] sm:w-[347px] h-[272px] py-[64px] px-[24px] bg-neutralLemon rounded-[8px] flex flex-col justify-between shadow-md">
                            {/* Subtitle 1 */}
                            <p className="card-title text-neutralDark font-[600] text-[18px] h-[52px] w-full tracking-[0.8%] leading-[26px] text-center mx-auto">
                                Easy access to <br /> all creatives
                            </p>

                            {/* Body 1 */}
                            <p className="card-body text-neutralblack font-[500] text-[14px] tracking-[0.25%] leading-[20px] text-center text-sm h-[60px] w-full mx-auto">
                                Kolabbb simplifies the process, connecting you directly with top talent—no third parties, just seamless collaboration.                            </p>
                        </div>
                    </div>
                </div>

                {/* Button */}
                <div className="flex justify-center items-center px-[12px] py-[60px]">
                    <button className="custom-button w-[240px] h-[56px] border border-neutralGreen rounded-[8px] text-center text-[16px] tracking-[0.5%] font-[600] text-neutralGreen">
                        Sign up to our waitlist
                    </button>
                </div>
            </div>

            {/* Final Section */}
            <div className="custom-container h-[420px] bg-gray-100 px-[16px] sm:px-[177.07px] w-full flex items-center justify-center flex-col sm:flex-row">
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
                <div className="input-button-section flex items-center gap-[16px] mt-[7px] flex-wrap justify-center">
                    {/* Input Field */}
                    <input
                        type="text"
                        placeholder=" Sign up to get early access"
                        className="input-field w-full sm:w-[856px] h-[64px] rounded-[8px] px-[12px] py-[16px] border-none bg-neutralIndi text-neutralHue"
                    />

                    {/* Button */}
                    <button className="action-button w-full sm:w-[196px] h-[64px] border-neutralGreen rounded-[8px] border-[1px] px-[12px] py-[16px] text-neutralLemon bg-neutralPrimary mt-4 sm:mt-0">
                        Join the Waitlist
                    </button>
                </div>
            </div>

        </div>
    );
};

export default Home;

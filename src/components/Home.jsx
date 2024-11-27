import React from 'react';
import videographer from "../assets/videographer.png";
import music_producer from "../assets/music_producer.png";
import Talent from "../assets/Talent.png";
import Creative from "../assets/Creative.png";
import Icon from "../assets/Icon.png";




const Home = () => {
    return (
        <div className="w-screen bg-gray-100">
            {/* Main Content (Centered) */}
            <div className="flex items-center justify-center  h-[786px]">
                <div className="relative  h-[786px] w-[1440px] top-[-70px]">
                    {/* Top Left Image */}
                    <div className="absolute top-[150px] left-[72px] w-[174.14px] h-[215.25px]">
                        <div className="rounded-lg overflow-hidden">
                            <img
                                src={videographer}
                                alt="Videographer"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Center Content */}
                    <div className="absolute top-[168px] left-[331px] w-[783px] h-[342px] flex items-center justify-center">
                        <h1 className="text-[96px] font-bold leading-[114px] text-neutralPrimary text-center">
                            The best place to grow your Talent as an Artist
                        </h1>
                    </div>
                    <div className="absolute top-[542px] left-[429px] w-[582px] h-[72px] flex items-center justify-center">
                        <p className="text-[28px] font-medium leading-[36px] text-center">
                            Find and collaborate with the best creatives for your music project here at kolabbb
                        </p>
                    </div>
                    <div className="absolute w-[240px] h-[56px] top-[646px] left-[600px] flex items-center justify-center">
                        <button className="bg-neutralPrimary text-white text-center font-medium rounded-md px-[12px] py-[16px]">
                            Sign up to join our waitlist
                        </button>
                    </div>

                    {/* Bottom Right Image */}
                    <div className="absolute top-[355px] left-[1194px] w-[174.14px] h-[215.25px]">
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
            <div className="w-full h-[786px] bg-neutralPrimary py-[64px]">
                <div className="flex flex-col items-center gap-[16px] w-[769px] mx-auto h-[210px]">
                    {/* Title */}
                    <p className="text-center font-[700] text-neutralGreen text-[14px] leading-[20px] tracking-[1.25%] w-[206px] h-[20px]">
                        Reasons to believe in kolabbb
                    </p>

                    {/* Subtitle */}
                    <h2 className="text-center font-[600] text-[48px] leading-[58px] text-neutralWhite w-[769px] h-[174px]">
                        As a creative, all you need for your music to succeed is right here
                    </h2>

                    {/* Description */}
                    <p className="text-center font-[500] text-[16px] leading-[24px] tracking-[0.5%] text-gray-400 w-[399px] h-[24px]">
                        Accelerate your entire creative process in one place
                    </p>
                </div>

                {/* Card Section */}
                <div className="w-full flex items-center justify-center mt-[48px]">
                    <div className="flex gap-[32px]">
                        {/* Card 1 */}
                        <div className="w-[347px] h-[272px] py-[64px] px-[24px] bg-neutralLemon rounded-[8px] flex flex-col justify-between shadow-md">
                            {/* Subtitle 1 */}
                            <p className="text-neutralDark font-[600] text-[18px] leading-[26px] text-center">
                                We enhance convenience and efficiency
                            </p>

                            {/* Body 1 */}
                            <p className="text-neutralblack font-[500] text-[14px] tracking-[0.25%] leading-[20px] text-center text-sm">
                                Hire and collaborate with the best heavyweights that offer the right creative direction that will project your musical career for success.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="w-[347px] h-[272px] py-[64px] px-[24px] bg-neutralLemon rounded-[8px] flex flex-col justify-between shadow-md">
                            {/* Subtitle 1 */}
                            <p className="text-neutralDark font-[600] text-[18px] tracking-[0.8%] leading-[26px] text-center">
                                Scale your music with<br />  the best creatives
                            </p>

                            {/* Body 1 */}
                            <p className="text-neutralblack font-[500] text-[14px] tracking-[0.25%] leading-[20px] text-center text-sm">
                                Hire and collaborate with the best heavyweights that offer the right creative direction that will project your musical career for success.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="w-[347px] h-[272px] py-[64px] px-[24px] bg-neutralLemon rounded-[8px] flex flex-col justify-between shadow-md">
                            {/* Subtitle 1 */}
                            <p className="text-neutralDark font-[600] text-[18px] h-[52px] w-[299px] tracking-[0.8%] leading-[26px] text-center mx-auto">
                                Easy access to <br /> all creatives
                            </p>

                            {/* Body 1 */}
                            <p className="text-neutralblack font-[500] text-[14px] tracking-[0.25%] leading-[20px] text-center text-sm h-[60px] w-[262px] mx-auto">
                                We understand how difficult it is to find certain creatives without third parties. With Kolabbb, it is made easy.
                            </p>
                        </div>

                    </div>

                </div>
                {/* Button */}
                <div className="flex justify-center items-center px-[12px] py-[60px]">
                    <button className="w-[240px] h-[56px] border border-neutralGreen rounded-[8px]  text-center text-[16px] tracking-[0.5%] font-[600] text-neutralGreen">
                        Sign up to our waitlist
                    </button>
                </div>

            </div>
            <div className="h-[420px] bg-gray-100 px-[177.07px] w-full flex items-center justify-around ">
                <div className="w-[1085.86px] h-[382px] flex items-center gap-[0px] "> {/* Increased gap */}
                    {/* Text Section */}
                    <div className="w-[480px] h-[174px] mb-[32px] mt-[62px]">
                        <h2 className="text-neutralPrimary font-[600] leading-[58px] text-[48px]">
                            The easy solution for <br />
                            creatives and talent <br />
                            collaboration
                        </h2>
                    </div>

                    {/* Image Section */}
                    <div className="flex items-center ml-auto"> {/* Align items properly */}
                        {/* Image 1 */}
                        <div className="flex flex-col items-center w-[221px]">
                            <div className="w-[221px] h-[273.17px] rounded-[10.15px] overflow-hidden mb-[65px]">
                                <img
                                    src={Talent}
                                    alt="Music Producer"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            {/* Label for Talent */}
                            <h5 className="text-[24px] font-[600] w-[71px] h-[32px] leading-[32px] text-neutralPrimary text-center relative top-[-47px]">
                                Talent
                            </h5>
                        </div>

                        {/* Space for the icon */}
                        <div
                            className="flex items-center justify-center w-[74px] h-[74px]"
                            style={{ marginTop: '20px' }} // Align icon with the second image
                        >
                            <img
                                src={Icon} // Replace with the correct path to your uploaded icon
                                alt="Icon"
                                className="w-[74px] h-[74px]" // Icon size
                            />
                        </div>

                        {/* Image 2 */}
                        <div className="flex flex-col items-center w-[220.86px]">
                            <div className="w-[220.86px] h-[273px] rounded-[10.15px] overflow-hidden mt-[70px]">
                                <img
                                    src={Creative}
                                    alt="Creative Collaboration"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            {/* Label for Creative */}
                            <h5 className="text-[24px] font-[600] w-[98px] h-[32px] leading-[32px] text-neutralPrimary text-center ">
                                Creative
                            </h5>
                        </div>
                    </div>


                </div>
            </div>
            <div className="h-[420px] bg-neutralPrimary py-[64px] gap-[24px] w-full flex flex-col items-center justify-around">
                {/* Inner container */}
                <div className="w-[659px] h-[204px] gap-[16px] flex flex-col items-center">
                    <h2 className="text-white font-[600] text-[48px] w-[659px] h-[116px] leading-[58px] text-center">
                        Come with us on this<br /> journey
                    </h2>

                    <div className="w-[357px] h-[72px]">
                        <p className="text-neutralWhite font-[500] text-[16px] leading-[24px] text-center tracking-[0.5%]">
                            Join our waitlist as creative or a musical talent
                            and be the first to know when we launch.<br />
                            Stand a chance to win a prize on launch day.
                        </p>
                    </div>
                </div>

                {/* Input and Button Section */}
                <div className="flex items-center gap-[16px] mt-[24px]">
                    {/* Input Field */}
                    <input
                        type="text"
                        placeholder="Sign up to join our waitlist"
                        className="w-[856px] h-[64px] rounded-[8px] px-[12px] py-[16px] border-none bg-neutralIndi text-neutralHue"
                    />

                    {/* Button */}
                    <button className="w-[196px] h-[64px] border-neutralGreen rounded-[8px] border-[1px] px-[12px] py-[16px] text-neutralLemon bg-neutralPrimary">
                        Sign Up
                    </button>
                </div>
            </div>










        </div>
    );
};

export default Home;
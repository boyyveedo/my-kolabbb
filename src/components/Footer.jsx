import Logo from "../assets/Logo.png";

const Footer = () => {
    return (
        <footer className="w-full h-auto flex items-center justify-center flex-col sm:flex-row gap-[32px] sm:gap-[122px] px-[16px] sm:px-[72px] py-[24px] bg-gray-100 text-neutralPrimary">
            {/* Logo Section */}
            <div className="flex items-center justify-center w-full sm:w-auto">
                <img
                    src={Logo}
                    alt="Logo"
                    className="h-auto w-auto pb-[20px] sm:pb-[70px]"
                />
            </div>

            {/* Content Section */}
            <div className="w-full sm:w-[843px] h-auto flex flex-col items-center gap-[32px] sm:gap-[48px] text-center">
                {/* Text Content */}
                <p className="font-[500] text-[16px] sm:text-[22px] pt-[30px] leading-[24px] sm:leading-[28px] text-center w-full sm:w-[843px]">
                    Kolabbb is a company registered in Nigeria (No. 35******), registered address
                    <br />
                    Road
                    <br />
                    Lekki Phase 1 Freedom Way, Lagos, Nigeria.
                </p>

                {/* Links */}
                <div className="flex gap-[16px] justify-center sm:justify-between w-full">
                    <a href="/terms" className="hover:underline">
                        <h5 className="font-semibold text-[18px] sm:text-[24px] leading-[28px] sm:leading-[32px]">
                            Terms and Conditions
                        </h5>
                    </a>
                    <a href="/privacy" className="hover:underline">
                        <h5 className="font-semibold text-[18px] sm:text-[24px] leading-[28px] sm:leading-[32px]">
                            Privacy Policy
                        </h5>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

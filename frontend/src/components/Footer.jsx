import Logo from "../assets/Logo.png";

const Footer = () => {
    return (
        <footer className=" footer w-full h-[162px] pt-[64px] flex justify-center items-center px-8 bg-white">
            {/* Logo Section */}
            <div className="pb-[40px] mr-[500px] footer-logo">
                <img
                    src={Logo}
                    alt="Logo"
                    className="h-[25.12px] w-[111.05px]"
                />
            </div>

            {/* Links */}
            <div className="flex  justify-between gap-[48px] pb-[40px] footer-links">
                <a href="/terms" className="hover:underline footer-link">
                    <h5 className="font-semibold text-[24px] leading-[32px]">
                        Terms and Conditions
                    </h5>
                </a>
                <a href="/privacy" className="hover:underline footer-link">
                    <h5 className="font-semibold text-[24px] leading-[32px]">
                        Privacy Policy
                    </h5>
                </a>
            </div>
        </footer>




    );
};

export default Footer;

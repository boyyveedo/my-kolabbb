import Logo from "../assets/Logo.png";

const Footer = () => {
    return (
        <footer className="w-full h-[292px] flex items-center justify-center gap-[122px] px-[72px] py-[24px] bg-gray-100 text-neutralPrimary">
            {/* Logo Section */}
            <div className="flex items-center justify-center">
                <img
                    src={Logo}
                    alt="Logo"
                    className="h-auto w-auto pb-[70px]"
                />
            </div>

            {/* Content Section */}
            <div className="w-[843px] h-[164px] flex flex-col items-center gap-[48px] text-center">
                {/* Text Content */}
                <p className="font-[500]   text-[22px] pt-[30px] leading-[28px] w-[843px]  h-[84px] text-center">
                    Kolabbb is a company registered in Nigeria (No. 35******), registered address
                    <br />
                    Road
                    <br />
                    Lekki Phase 1 Freedom Way, Lagos, Nigeria.
                </p>

                {/* Links */}
                <div className="flex gap-[16px] justify-between w-full px-10">
                    <a href="/terms" className="hover:underline">
                        <h5 className="font-semibold text-[24px] leading-[32px]">Terms and Conditions</h5>
                    </a>
                    <a href="/privacy" className="hover:underline">
                        <h5 className="font-semibold text-[24px] leading-[32px]">Privacy Policy</h5>
                    </a>
                </div>
            </div>


        </footer>
    );
};

export default Footer;

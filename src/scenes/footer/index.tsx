import Logo from "@/assets/Logo.png";

const Footer = () => {
    return (
        <footer className="bg-primary-100 py-16">
            <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
                <div className="mt-16 basis-1/2 md:mt-0">
                    <img alt="logo" src={Logo} />
                    <p className="my-5">
                        Your fitness journey starts here. Empowering you with expert training, top-notch equipment, and a supportive community to reach your goals.
                    </p>
                    <p>© Evogym All Rights Reserved.</p>
                </div>
                {/* <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Github</p>
          <p className="my-5">Lnkedin</p>
          <p>Leetcode</p>
        </div> */}
                <div className="mt-16 basis-1/4 md:mt-0">
                    <h4 className="font-bold">Links</h4>
                    <a href="https://github.com/Promo-13" className="block my-2 hover:text-gray-700" target="_blank">Github</a>
                    <a href="https://linkedin.com/in/promodhrp" className="block my-2 hover:text-gray-700" target="_blank">LinkedIn</a>
                    {/* <a href="https://discord.com/promo_13" className="block my-2 hover:text-gray-700">Discord</a> */}
                    <a href="https://leetcode.com/u/pro_13" className="block my-2 hover:text-gray-700" target="_blank">Leetcode</a>
                </div>


                <div className="mt-16 basis-1/4 md:mt-0">
                    <h4 className="font-bold">Contact Us</h4>
                    <p className="my-5">Chennai, TamilNadu, India.</p>
                    <p>+91 9876543210</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
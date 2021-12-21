import Image from "next/image";

function Footer() {
  return (
    <div className="font-sans">
      <div className="p-6 md:pt-[8rem] md:pb-0">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <a href="#" className="flex">
            <span className="self-center text-sm text-gray-400">
              Privacy Policy
            </span>
          </a>
          <div className="flex md:order-2">
            <p type="button" className="text-gray-400 text-sm">
              Copyright &copy; MangoChat 2021
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

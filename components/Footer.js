import Image from "next/image";

function Footer() {
  return (
    <div className="font-sans">
      <div class="p-6 md:pt-40 md:pb-0">
        <div class="container flex flex-wrap justify-between items-center mx-auto">
          <a href="#" class="flex">
            <span class="self-center text-sm text-gray-400">
              Privacy Policy
            </span>
          </a>
          <div class="flex md:order-2">
            <p type="button" class="text-gray-400 text-sm">
              Copyright &copy; MangoChat 2021
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

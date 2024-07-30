import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <div className="w-full fixed bottom-0 md:relative lg:h-[75px] shadow flex items-center justify-between bg-[#023047]">
      <Image
        src="/PES.png"
        alt="PES"
        height={50}
        width={40}
        className="my-1 mx-4"
      />
      <div className="text-secondary">
        <p className="text-center text-sm lg:text-base lg:font-semibold">
          Center Of Networking and Evolving Communication Technologies
        </p>
        <p className="text-center text-xs lg:text-base">
          Room 505, 5th Floor, Main Block, PESU EC Campus, Bengaluru - 560100
        </p>
      </div>
      <div className="flex flex-col">
        <Link
          href="/contact"
          className="text-secondary text-sm justify-self-end self-center hover:underline hover:text-[#d0a616] mr-2"
        >
          Contact Us
        </Link>
        <Link
          href="/developers"
          className="text-secondary text-sm justify-self-end self-center hover:underline hover:text-[#d0a616] mr-2"
        >
          Developers
        </Link>
      </div>
    </div>
  );
}

export default Footer;

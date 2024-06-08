import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <div className="w-full lg:h-[75px] shadow flex bg-[#023047]">
      <Image
        src="/PES.png"
        alt="PES"
        height={50}
        width={40}
        className="my-2 mx-4"
      />
      <div className="text-secondary self-center w-full">
        <p className="text-center text-sm lg:text-base lg:font-semibold">
          Center Of Networking and Evolving Communication Technologies
        </p>
        <p className="text-center text-xs lg:text-base">
          6th Floor, Main Block, PESU ECC, Bengaluru - 560100
        </p>
      </div>
      <Link
        href="https://staff.pes.edu/nm1432/"
        className="text-secondary text-sm lg:text-base justify-self-end self-center hover:underline flex-shrink-0 mr-2"
      >
        Contact Us
      </Link>
    </div>
  );
}

export default Footer;

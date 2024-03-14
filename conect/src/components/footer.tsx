import Image from "next/image";

function Footer() {
  return (
    <div className="w-full lg:h-[75px] border-t shadow flex">
      <Image
        src="/PES.png"
        alt="PES"
        height={50}
        width={40}
        className="my-2 mx-4"
      />
      <div className="text-primary self-center w-full">
        <p className="text-center">Center Of Networking and Evolving Communication Technologies</p>
        <hr className="h-1 mt-1 w-[50%] mx-auto"></hr>
        <p className="text-center">6th Floor, Main Block, PESU ECC, Bengaluru - 560100</p>
      </div>
      <p className="text-primary justify-self-end self-center">Contact us at:</p>
    </div>
  );
}

export default Footer;

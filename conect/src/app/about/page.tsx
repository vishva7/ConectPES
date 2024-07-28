import MemberCard from "@/components/memberCard";
import Navbar from "@/components/navbar";

export default function About() {
  return (
    <>
      <Navbar />
      <div className="grid gap-12">
        <div className="px-4 md:px-6 lg:px-8">
          <div className="container py-12 lg:py-12 grid gap-6 lg:gap-8">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                CONECT
              </h1>
              <p className="max-w-prose text-gray-500 md:text-xl/relaxed dark:text-gray-400">
                CONECT is centre of excellence under PES University research
                foundation. This centre is dedicated to research and other
                activities in cutting-edge fields related to Networking and
                Communication domain. We encourage students to implement their
                acquired knowledge for practical application and nurture their
                creative minds for research and innovation.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-4">
                <p className="text-gray-500 md:text-xl/relaxed dark:text-gray-400">
                  We have some hardware and software required in this field. Our
                  students can get knowledge about those and can use for their
                  projects. We also provide technical knowledge and guidance to
                  students to enhance their knowledge and get skill to use them.
                  Currently this centre is open only to any branch student of
                  PES University. We have plan and wish to make it open for
                  students to other universities also.
                </p>
              </div>
              <div className="space-y-4">
                <p className="text-gray-500 md:text-xl/relaxed dark:text-gray-400">
                  Our bigger plan is to make the centre as reputed technological
                  and innovation centre across India. We are supporting and
                  encouraging interdisciplinary collaboration, creativity, and a
                  commitment to excellence. We are in touch with industry and
                  other academia. We are working on problems provided by others
                  independently and collaborative way.
                </p>
              </div>
            </div>
          </div>
          <div className="container py-8 grid gap-6 lg:gap-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">
                Areas of Research
              </h2>
              <p className="max-w-prose text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Our centre focuses on research areas spanning from fundamental
                inquiry to applied research with real-world impact in the field
                of communication and networking. We also encourage students to
                do prototype implementation to get exposure to real work
                experience. Some of our current work area are:
              </p>
              <ul className="grid gap-4 list-disc pl-6 sm:grid-cols-2 md:grid-cols-3 dark:text-gray-400">
                <li>Adaptive Beam Forming for 5G MIMO</li>
                <li>Multiband Antenna Design for 5G</li>
                <li>GNU Software Defined Radio</li>
                <li>SDN Controller Implementation for various scenarios </li>
                <li>Communication Network for IoT Devices</li>
                <li>Modulation Technique Enhancement on FPGA Boards</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

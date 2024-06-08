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
                CONECT is dedicated to pioneering research in cutting-edge
                scientific fields, pushing the boundaries of human knowledge,
                and developing innovative solutions to the world&apos;s most
                pressing challenges.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Mission</h2>
                <p className="text-gray-500 md:text-xl/relaxed dark:text-gray-400">
                  To drive scientific discovery and technological innovation
                  through interdisciplinary collaboration, creativity, and a
                  commitment to excellence.
                </p>
              </div>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Vision</h2>
                <p className="text-gray-500 md:text-xl/relaxed dark:text-gray-400">
                  To be a global leader in advancing knowledge and addressing
                  complex global challenges by leveraging the expertise of our
                  diverse community of researchers and partners.
                </p>
              </div>
            </div>
          </div>
          <div className="container py-12 lg:py-12 grid gap-6 lg:gap-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">
                Areas of Research
              </h2>
              <p className="max-w-prose text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Our center focuses on a wide range of research areas, spanning
                from fundamental scientific inquiry to applied research with
                real-world impact. Some of our key research areas include:
              </p>
              <ul className="grid gap-4 list-disc pl-6 sm:grid-cols-2 md:grid-cols-3 dark:text-gray-400">
                <li>Bioinformatics and Computational Biology</li>
                <li>Materials Science and Engineering</li>
                <li>Renewable Energy Technologies</li>
                <li>Climate Change and Environmental Sustainability</li>
                <li>Health Informatics and Medical Imaging</li>
                <li>Artificial Intelligence and Machine Learning</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

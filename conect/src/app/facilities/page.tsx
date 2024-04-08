export default function Component() {
  return (
    <div className="bg-gray-50/90">
      <div className="w-full py-12">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:gap-8">
            <div className="flex flex-col gap-1">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Research Facilities
              </h1>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed dark:text-gray-400 mt-2">
                Explore our cutting-edge research facilities, each equipped with
                state-of-the-art technology and staffed by experts in their
                field.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 xl:gap-8">
              <div className="flex flex-col gap-1">
                <h2 className="text-2xl font-semibold tracking-tight">
                  Advanced Materials Laboratory
                </h2>
                <p className="max-w-prose text-gray-500 md:text-base/relaxed dark:text-gray-400">
                  The Advanced Materials Laboratory is focused on the synthesis,
                  characterization, and application of novel materials. Our
                  state-of-the-art equipment allows researchers to analyze the
                  structure and properties of materials at the atomic level.
                </p>
                <ul className="grid gap-1 list-disc text-gray-500 md:grid-cols-2 md:text-base dark:text-gray-400 ml-4">
                  <li>Scanning Electron Microscope (SEM)</li>
                  <li>Transmission Electron Microscope (TEM)</li>
                  <li>X-ray Diffraction (XRD) system</li>
                  <li>Atomic Force Microscope (AFM)</li>
                  <li>Energy Dispersive X-ray Spectroscopy (EDS)</li>
                </ul>
              </div>
              <div className="flex flex-col gap-1">
                <h2 className="text-2xl font-semibold tracking-tight">
                  Quantum Computing Research Center
                </h2>
                <p className="max-w-prose text-gray-500 md:text-base/relaxed dark:text-gray-400">
                  The Quantum Computing Research Center is dedicated to
                  advancing the field of quantum information science. Our team
                  of experts collaborates with industry partners to develop
                  quantum algorithms and error-correction techniques.
                </p>
                <div className="grid gap-2 md:grid-cols-2 mt-4">
                  <div>
                    <h3 className="font-semibold">Expertise</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Quantum algorithms, error correction, superconducting
                      qubits
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold">Collaborations</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      IBM, Google, Rigetti Computing, Microsoft
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-200 dark:border-gray-800">
        <div className="container px-4 md:px-6 mb-8">
          <div className="grid gap-6 lg:gap-8">
            <div className="flex flex-col gap-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mt-4">
                Capabilities
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed dark:text-gray-400 mt-4">
                Our research center offers a wide range of capabilities to
                support innovative research across various disciplines. From
                advanced imaging and spectroscopy to high-performance computing,
                we provide the tools and expertise to drive scientific discovery
                and technological breakthroughs.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 xl:gap-8">
              <div className="flex flex-col gap-1">
                <h3 className="text-2xl font-semibold tracking-tight">
                  Imaging and Microscopy
                </h3>
                <p className="max-w-prose text-gray-500 md:text-base/relaxed dark:text-gray-400">
                  Our imaging and microscopy facilities enable researchers to
                  visualize and analyze samples at the micro and nanoscale. We
                  offer a suite of advanced imaging techniques, including
                  confocal microscopy, super-resolution imaging, and
                  cryo-electron microscopy.
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-2xl font-semibold tracking-tight">
                  High-Performance Computing
                </h3>
                <p className="max-w-prose text-gray-500 md:text-base/relaxed dark:text-gray-400">
                  The Quantum Computing Research Center is dedicated to
                  advancing the field of quantum information science. Our team
                  of experts collaborates with industry partners to develop
                  quantum algorithms and error-correction techniques.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

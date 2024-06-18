import Navbar from "@/components/navbar";
import Link from "next/link";

export default function Contact() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col place-content-center">
        <main className="flex-1">
          <section className="w-full lg:h-[calc(100vh-150px)] bg-gray-100">
            <div className="container px-4 md:px-6">
              <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                <div className="flex flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                      Get in Touch
                    </h1>
                    <p className="max-w-[600px] text-gray-500 md:text-xl">
                      Have a question or want to work together? Don't hesitate
                      to reach out.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 min-[400px]:flex-row">
                    <Link
                      href="#"
                      className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
                      prefetch={false}
                    >
                      Email Us
                    </Link>
                  </div>
                </div>
                <div className="grid gap-6">
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Phone</h3>
                    <p className="text-gray-500">
                      +1 (555) 123-4567
                    </p>
                  </div>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Address</h3>
                    <p className="text-gray-500">
                      123 Main St, Anytown USA
                    </p>
                  </div>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Email</h3>
                    <p className="text-gray-500">
                      info@company.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

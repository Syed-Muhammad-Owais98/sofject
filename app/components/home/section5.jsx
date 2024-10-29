import Image from "next/image";
import Section5Img1 from "@/app/assets/home/section5-1.webp";
import Section5Img2 from "@/app/assets/home/section5-2.webp";
import Section5Img3 from "@/app/assets/home/section5-3.webp";
import Section5Img4 from "@/app/assets/home/section5-4.webp";
import ContactForm from "@/app/components/contact-form";

export default function Section5() {
  return (
    <section id="contact" className="py-24 max-sm:py-12 max-w-screen-2xl mx-auto grid grid-cols-[1fr_1.6fr] gap-12 max-md:grid-cols-1 w-full scroll-mt-12">
      <div className="pl-4 max-md:px-4">
        <h2 className="text-4xl font-bold max-sm:text-2xl max-sm:max-w-full">
          Lorem ipsum dolor sit amet consectetur
        </h2>

        <div className="grid grid-cols-2 gap-2 justify-stretch mt-6 w-full min-h-80">
          <div className="flex flex-col gap-2 w-full h-full">
            <div className="h-60 flex-1 basis-4/5 rounded-2xl overflow-hidden">
              <Image width="550" height="840" className="h-full w-full object-center object-cover scale-125 hover:scale-100 transition-transform duration-500" src={Section5Img1} alt="People working in office" />
            </div>
            <div className="h-16 basis-1/5 rounded-2xl overflow-hidden">
              <Image width="550" height="210" className="h-full w-full object-center object-cover scale-125 hover:scale-100 transition-transform duration-500" src={Section5Img2} alt="A man working on his laptop" />
            </div>
          </div>
          <div className="flex flex-col gap-2 w-full h-full">
            <div className="h-16 basis-1/5 rounded-2xl overflow-hidden">
              <Image width="550" height="210" className="h-full w-full object-center object-cover scale-125 hover:scale-100 transition-transform duration-500" src={Section5Img3} alt="A computer screen" />
            </div>
            <div className="h-60 flex-1 basis-4/5 rounded-2xl overflow-hidden">
              <Image width="550" height="840" className="h-full w-full object-center object-cover scale-125 hover:scale-100 transition-transform duration-500" src={Section5Img4} alt="A computer screen" />
            </div>
          </div>
        </div>

        <p className="mt-8 text-sm">
          Lorem ipsum dolor sit amet consectetur. Nam praesent viverra tincidunt vel tortor nullam interdum. Sit id scelerisque nunc integer enim arcu aliquam dictum.
        </p>
      </div>

      <div className="pr-4 flex">
        <div className="bg-secondary text-white p-16 rounded-r-[3rem] w-full max-sm:p-8">
          <h3 className="text-5xl font-bold max-sm:text-2xl">
            Contact us
          </h3>

          <div className="mt-8 min-h-[500px] flex flex-col justify-center">
            <ContactForm submitBtnText="Contact us">
              <div className="flex flex-col gap-4 *:bg-transparent">
                <label className="sr-only">Full name</label>
                <input required type="text" name="name" className="w-full border-b p-4 border-neutral-500 focus-visible:outline-none focus-visible:border-primary" placeholder="Full name *" autoComplete="name" />

                <label className="sr-only">Phone number</label>
                <input required type="text" name="phone" className="w-full border-b p-4 border-neutral-500 focus-visible:outline-none focus-visible:border-primary" placeholder="Phone number *" autoComplete="mobile tel" />

                <label className="sr-only">Email address</label>
                <input required type="email" name="email" className="w-full border-b p-4 border-neutral-500 focus-visible:outline-none focus-visible:border-primary" placeholder="Email *" autoComplete="work email" />

                <label className="sr-only">Project details</label>
                <textarea required name="message" rows={5} className="w-full mt-12 rounded-md border border-neutral-500 focus-visible:outline-none focus-visible:border-primary px-2 py-4 [scrollbar-width:thin] [scrollbar-color:rgb(var(--primary))_transparent] [scrollbar-gutter:stable_both-edges]" placeholder="Message *" />
              </div>
            </ContactForm>
          </div>
        </div>
      </div>
    </section>
  );
}

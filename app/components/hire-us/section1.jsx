import Heading from "@/app/components/heading";
import ContactForm from "@/app/components/contact-form";

export default function Section1() {
  return (
    <section className="py-24 max-sm:py-12">
      <Heading headingText="Lorem ipsum dolor sit amet consectetur. Nam praesent tincidunt vel tortor nullam interdum.">
        <span className="text-primary">Hire</span>
        <span> Us</span>
      </Heading>

      <div className="px-4">
        <div className="mt-12 border border-secondary rounded-lg max-w-screen-lg w-full py-16 px-32 mx-auto max-sm:p-8">
          <h4 className="text-3xl font-semibold max-sm:text-2xl">
            Let’s discuss your project
          </h4>

          <div className="mt-8 min-h-[500px] flex flex-col justify-center">
            <ContactForm submitBtnText="Submit">
              <div className="flex flex-col gap-12 *:bg-transparent *:max-sm:text-sm max-sm:gap-8">
                <label className="sr-only">Full name</label>
                <input required type="text" name="name" className="w-full border-secondary border-b py-2 focus-visible:outline-none focus-visible:border-primary" placeholder="Full name *" autoComplete="name" />

                <label className="sr-only">Phone number</label>
                <input required type="text" name="phone" className="w-full border-secondary border-b py-2 focus-visible:outline-none focus-visible:border-primary" placeholder="Phone number *" autoComplete="mobile tel" />

                <label className="sr-only">Email address</label>
                <input required type="email" name="email" className="w-full border-secondary border-b py-2 focus-visible:outline-none focus-visible:border-primary" placeholder="Email *" autoComplete="work email" />

                <label className="sr-only">Project details</label>
                <textarea required name="message" rows={10} className="w-full rounded-md border border-secondary focus-visible:outline-none focus-visible:border-primary px-2 py-4 [scrollbar-width:thin] [scrollbar-color:rgb(var(--primary))_transparent] [scrollbar-gutter:stable_both-edges]" placeholder="Project scope *" />
              </div>
            </ContactForm>
          </div>
        </div>
      </div>
    </section>
  );
}

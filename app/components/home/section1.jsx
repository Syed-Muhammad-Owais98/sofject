import Heading from "@/app/components/heading";
import ServicesTab from "./services-tab";

export default function Section1() {
  return (
    <section id="services" className="py-24 max-sm:py-12 scroll-mt-12">
      <Heading headingText="We offer a wide range of IT services, including digital marketing, cloud services, POS etc.">
        <span className="text-primary">What</span>
        <span> we have to </span>
        <span className="text-primary">offer</span>
      </Heading>

      <ServicesTab />
    </section>
  );
}

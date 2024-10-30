import Image from "next/image";
import TestimonialCarousel from "./testimonial-carousel";
import TestimonialIcon from "@/app/assets/home/testimonial-icon.svg";
import Section4Img1 from "@/app/assets/home/section4-1.webp";
import Section4Img2 from "@/app/assets/home/section4-2.webp";
import Section4Img3 from "@/app/assets/home/section4-3.webp";
import Section4Img4 from "@/app/assets/home/section4-4.webp";

export default function Section4() {
  return (
    <section id="testimonials" className="py-12 scroll-mt-12">
      <h2 className="uppercase max-w-5xl mx-auto p-4 rounded-md bg-primary text-white text-5xl max-md:text-3xl max-sm:text-2xl max-sm:p-2 font-semibold flex items-center justify-center">
        <span>Testim</span>
        <span className="sr-only">o</span>
        <Image width="40" height="40" className="size-10 inline-block max-md:size-8 max-sm:size-6" src={TestimonialIcon.src} aria-hidden alt="Heart icon" />
        <span>nials</span>
      </h2>

      <div className="mt-8">
        <TestimonialCarousel slides={testimonials} options={{ loop: true }} />
      </div>
    </section>
  );
}

const testimonials = [
  {
    name: 'Trevor Mitchell',
    img: Section4Img1,
    rating: 5,
    paragraph: "Excellent UI/UX designer, brilliantly refined our mobile app with creative and user-friendly designs."
  },
  {
    name: 'Trevor Mitchell',
    img: Section4Img2,
    rating: 4,
    paragraph: "Sofject did a fantastic job! He made our digital marketing product look amazing and easy for everyone to use."
  },
  {
    name: 'Trevor Mitchell',
    img: Section4Img3,
    rating: 4,
    paragraph: "Sofject shows remarkable proficiency in frontend optimization and API integration, leading to improved UI responsiveness and streamlined data management."
  },
  {
    name: 'Trevor Mitchell',
    img: Section4Img4,
    rating: 3,
    paragraph: "Excellent UI/UX designer, brilliantly refined our mobile app with creative and user-friendly designs."
  },
  {
    name: 'Trevor Mitchell',
    img: Section4Img1,
    rating: 4,
    paragraph: "Sofject did a fantastic job! He made our digital marketing product look amazing and easy for everyone to use."
  },
  {
    name: 'Trevor Mitchell',
    img: Section4Img2,
    rating: 3,
    paragraph: "Sofject shows remarkable proficiency in frontend optimization and API integration, leading to improved UI responsiveness and streamlined data management."
  },
]

import localFont from "next/font/local";
import Image from "next/image";
import Section1Img1 from "@/app/assets/about/section1-1.webp";
import Section1Img2 from "@/app/assets/about/section1-2.webp";

const betterGrade = localFont({
  src: "../../fonts/BetterGrade.otf",
  weight: '400',
});

export default function Section1() {
  return (
    <section className="py-24 px-4 max-sm:py-12">
      <div className="max-w-screen-xl mx-auto grid grid-cols-2 gap-6 max-lg:grid-cols-1 justify-items-center">
        <div className="w-full h-full min-h-[500px] relative max-w-lg max-sm:min-h-96 max-sm:max-w-sm">
          <div className="absolute top-0 left-0">
            <Image width="560" height="850" src={Section1Img1.src} className="object-cover w-72 h-96 rounded-lg max-sm:w-48 max-sm:h-64" />
          </div>
          {/* <p className="absolute right-2 top-2 font-medium text-primary before:absolute before:-left-32 before:top-1/2 before:size-2 before:-translate-y-1/2 before:rounded-full before:bg-primary after:absolute after:-left-32 after:top-1/2 after:h-px after:w-28 after:-translate-y-1/2 after:bg-primary">
            <span>Furqan </span>
            <span className="font-bold">Aslam</span>
          </p> */}

          <div className="absolute bottom-0 right-0">
            <Image width="560" height="850" src={Section1Img2.src} className="object-cover w-72 h-96 rounded-lg max-sm:w-48 max-sm:h-64" />
          </div>
          {/* <p className="absolute left-2 bottom-2 text-xs before:absolute before:-right-32 before:top-1/2 before:size-2 before:-translate-y-1/2 before:rounded-full before:bg-primary after:absolute after:-right-32 after:top-1/2 after:h-px after:w-28 after:-translate-y-1/2 after:bg-primary">
            Owner | Designer
            <br />
            | Developer
          </p> */}
        </div>

        <blockquote className="bg-neutral-300/30 self-start text-sm rounded-xl p-10 space-y-5 max-lg:max-w-lg max-sm:text-xs max-sm:p-5">
          <p>
            Sofject is a software development company specializing in website and mobile app design and development. We strive to provide highly proficient, intuitive, and cost-effective software solutions.
          </p>
          <p>
            Since our inception, we have been helping companies across various industries achieve their business goals with impactful, businesscentric software solutions.
          </p>
          <p>
            At Sofject, quality is our top priority. We meticulously address all aspects related to clients' data security and intellectual property protection. We believe transparency is essential for building trust, making it a core value of our culture. This commitment allows us to confidently offer clients clear insights into the development process.
          </p>
          <p>
            With our cutting-edge technologies, Agile Methodologies and in-depth industry knowledge, We support the Digital Transformation of our clientsacross all Business Verticals.
          </p>
          <p className={`${betterGrade.className} text-primary text-6xl text-right`}>
            Sofject
          </p>
        </blockquote>
      </div>
    </section>
  );
}

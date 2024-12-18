import Image from "next/image";
import HeroImage from "@/app/assets/home/hero1.webp";

export default function Header() {
  return (
    <header className="max-w-screen-2xl mx-auto overflow-hidden px-4 pt-24 w-full grid grid-cols-[1fr_1.3fr] gap-x-4 gap-y-6 max-lg:grid-cols-1 max-lg:justify-items-center max-sm:pt-12 pb-20 max-sm:pb-12">
      <div className="flex gap-2 uppercase text-sm max-sm:text-xs col-span-full overflow-hidden justify-self-start">
        <p className="font-medium">Services</p>
        <ul className="text-primary font-extrabold relative transition-transform animate-text-slide1">
          <li className="absolute w-max top-0 left-0">Web app</li>
          <li className="absolute w-max top-8 left-0">Mobile app</li>
          <li className="absolute w-max top-16 left-0">Web design</li>
          <li className="absolute w-max top-24 left-0">Graphic design</li>
          <li className="invisible" aria-hidden>Graphic design</li>
        </ul>
      </div>
      <div className="justify-self-start">
        <h1 className="max-w-lg font-serif text-6xl max-xl:max-w-96 max-xl:text-5xl max-lg:max-w-xl max-sm:text-4xl max-sm:max-w-md">
          <span>Crafting Custom Software Solutions for Your </span>
          <span className="overflow-hidden inline-block align-bottom">
            <span className="text-primary inline-block relative transition-transform animate-text-slide2">
              <span className="invisible" aria-hidden>Business.</span>
              <span className="absolute w-max top-0 left-0">Business.</span>
              <span className="absolute w-max top-16 left-0">School.</span>
              <span className="absolute w-max top-32 left-0">Clients.</span>
            </span>
          </span>
        </h1>
      </div>

      <div className="flex gap-4 max-sm:gap-1 justify-between relative justify-self-stretch">
        <div className="max-w-md shrink-0 basis-3/5 max-sm:text-xs">
          <p>
            Our team of experienced designers and developers work collaboratively to bring your vision to life, ensuring a seamless user experience and robust functionality.
          </p>
          <p className="mt-4">
            Trust us to transform your ideas into powerful, user-friendly software that stands out in the digital landscape.
          </p>
        </div>
        <div className="basis-2/5 relative flex-1">
          <Image src={HeroImage} alt="A person using a computer" priority className="w-full object-contain max-w-80 max-lg:max-w-60 absolute top-1/2 -translate-y-1/2 right-0" />
        </div>
      </div>
    </header>
  );
}

import Image from "next/image";
import Heading from "@/app/components/heading";
import Section2Img1 from "@/app/assets/about/section2-1.jpeg";
import Section2Img2 from "@/app/assets/about/section2-2.jpeg";
import Section2Img3 from "@/app/assets/about/section2-3.jpeg";

export default function Section2() {
  return (
    <section className="py-24 max-sm:py-12">
      <Heading headingText="Our expert IT team combines experience and innovation to deliver tailored solutions.">
        <span className="text-primary">Our</span>
        <span> Team</span>
      </Heading>

      <div className="mt-12 px-4 grid grid-cols-3 gap-6 place-items-center justify-center max-w-screen-lg w-full mx-auto max-sm:gap-2 max-md:grid-cols-2 max-[420px]:grid-cols-1">
        {teamMembers.map((member, i) => (
          <figure key={i} className="w-full h-full aspect-square relative group rounded-xl overflow-hidden">
            <Image width="560" height="560" className="w-full h-full object-cover object-top" alt={`Photo of ${member.name}`} src={member.img.src} />

            <figcaption className="absolute inset-0 bg-primary p-4 text-white flex flex-col justify-center items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 min-[420px]:max-sm:gap-1">
              <p className="font-serif text-4xl md:max-lg:text-2xl max-sm:text-lg text-center">{member.name}</p>
              <p className="md:max-lg:text-sm font-medium max-sm:text-xs text-center">
                {member.position.split(' | ')[0]}
                <br />
                {member.position.split(' | ')[1]}
              </p>
              <p className="text-sm md:max-lg:text-xs max-sm:text-xs">{member.description}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

const teamMembers = [
  {
    name: 'Saad Khalid',
    position: 'Managing Partner | Business Development',
    description: 'Focus on client relationships, identify new business opportunities, and expand market presence. This managing partner will lead sales, marketing, and client engagement efforts.',
    img: Section2Img1,
  },
  {
    name: 'Furqan Aslam',
    position: 'Managing Partner | Technology & Innovations',
    description: 'Drive technological strategy, oversee product development, and lead innovation efforts. Emphasize technical excellence, stay informed on industry trends, and steer software development.',
    img: Section2Img2,
  },
  {
    name: 'Syed Owais',
    position: 'Managing Partner | Operations',
    description: 'Manage daily operations, streamline internal processes, and oversee financial management. Ensure financial stability by managing budgets and optimizing workflows.',
    img: Section2Img3,
  },
]

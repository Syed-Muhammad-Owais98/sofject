'use client';

import { useState } from "react";
import Image from "next/image";
import Heading from "@/app/components/heading";
import Section1Img1 from "@/app/assets/services/section1-1.webp"
import Section1Img2 from "@/app/assets/services/section1-2.webp"
import Section1Img3 from "@/app/assets/services/section1-3.webp"
import Section1Img4 from "@/app/assets/services/section1-4.webp"
import Section1Img5 from "@/app/assets/services/section1-5.webp"
import Section1Img6 from "@/app/assets/services/section1-6.webp"
import Section1Img7 from "@/app/assets/services/section1-7.webp"
import Section1Img8 from "@/app/assets/services/section1-8.webp"
import Section1Img9 from "@/app/assets/home/section3-1.webp"
import Section1Img10 from "@/app/assets/home/section3-2.webp"
import AwardIcon from "@/app/assets/services/award-icon.svg"

export default function Section1() {
  const [selectedTab, setSelectedTab] = useState('Mobile App Development');

  return (
    <section className="py-24 max-sm:py-12">
      <Heading headingText="Our services range from IT to marketing, ensuring your business is secure and efficient.">
        <span className="text-primary">Our</span>
        <span> Services</span>
      </Heading>

      <div className="px-4 mt-12 container mx-auto w-full">
        <div className=" w-full [scrollbar-width:thin] [scrollbar-color:var(--primary)_transparent] py-4 ">
          <div className="grid grid-cols-4 gap-4 [justify-content:safe_center] items-center w-full max-xl:grid-cols-3 max-lg:grid-cols-2 max-sm:items-stretch">
            <TabBtn selectedTab={selectedTab} setSelectedTab={setSelectedTab} tabName="Mobile App Development" />
            <TabBtn selectedTab={selectedTab} setSelectedTab={setSelectedTab} tabName="Web App Development" />
            <TabBtn selectedTab={selectedTab} setSelectedTab={setSelectedTab} tabName="Point of Sale (POS)" />
            <TabBtn selectedTab={selectedTab} setSelectedTab={setSelectedTab} tabName="IOT App development" />
            <TabBtn selectedTab={selectedTab} setSelectedTab={setSelectedTab} tabName="Block Chain Developement" />
            <TabBtn selectedTab={selectedTab} setSelectedTab={setSelectedTab} tabName="Data Scraping Services" />
            <TabBtn selectedTab={selectedTab} setSelectedTab={setSelectedTab} tabName="Digital Marketing" />
            <TabBtn selectedTab={selectedTab} setSelectedTab={setSelectedTab} tabName="UI/UX Developement" />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-14 grid grid-flow-col grid-cols-3 justify-items-center w-full overflow-hidden max-lg:gap-x-0 max-xl:gap-x-16 gap-x-32 gap-y-8 max-lg:grid-cols-2 max-lg:grid-flow-row">
        <div className="row-span-2 max-lg:row-span-1 flex items-center justify-self-end max-lg:justify-self-start">
          <Image width="832" height="1074" src={tabContent[selectedTab].img} className="w-full h-full mx-auto max-lg:w-9/12 rounded-3xl max-sm:rounded-md object-cover" alt="" />
        </div>

        <div className="min-h-64 max-sm:min-h-80">
          <h4 className="font-semibold max-sm:text-sm">{selectedTab}</h4>
          <h5 className="text-primary font-semibold text-3xl max-sm:text-2xl mt-6 max-sm:mt-4">{tabContent[selectedTab].heading}</h5>
          <p className="mt-4 font-medium max-sm:text-xs max-md:text-sm max-md:mt-2">{tabContent[selectedTab].paragraph}</p>
        </div>

        <div className="border-t pt-8 pr-4">
          <ul className="flex flex-col gap-4">
            <li className="grid grid-cols-[24px_1fr] gap-4 max-sm:gap-2 items-center">
              <Image width="24" height="24" src={AwardIcon.src} className="size-6 max-sm:size-5" />
              <h6 className="font-semibold max-sm:text-sm">No compromise on quality</h6>
              <p className="text-sm max-sm:text-xs col-start-2">
                We believe in delivering excellence without compromise. With us, you can trust that quality is always at the forefront of our mission.
              </p>
            </li>
            <li className="grid grid-cols-[24px_1fr] gap-4 max-sm:gap-2 items-center">
              <Image width="24" height="24" src={AwardIcon.src} className="size-6 max-sm:size-5" />
              <h6 className="font-semibold max-sm:text-sm">Tailored Solutions for Every Business</h6>
              <p className="text-sm max-sm:text-xs col-start-2">
                Our tailored solutions are designed to meet the unique needs of every business, regardless of size or industry.
              </p>
            </li>
          </ul>
        </div>

        <div className="row-span-2 max-lg:row-span-1 min-h-[480px] max-sm:min-h-80 w-full relative max-lg:border-t max-lg:pt-8">
          <Image width="512" height="900" src={Section1Img10.src} className="absolute top-1/2 h-4/5 w-auto aspect-[9/16] -translate-x-1/2 -translate-y-1/2 scale-75 rounded-2xl object-cover shadow-md left-3/4 max-lg:top-8 max-lg:translate-y-0 max-sm:rounded-md" />
          <Image width="512" height="900" src={Section1Img9.src} className="absolute top-1/2 h-4/5 w-auto aspect-[9/16] -translate-y-1/2 rounded-2xl object-cover shadow-md left-1/2 -translate-x-1/2 max-lg:top-8 max-lg:translate-y-0 max-sm:rounded-md" />
        </div>

        <div className="col-span-full row-start-3 pt-12">
          <p className="max-sm:text-sm max-w-prose italic">
            We also offer other services which include Software Maintenance and Support, IT Services, DevOps Services, API Development and Integration, Product Prototyping and MVP Development, Enterprise Solutions, Cloud Services, Software Consulting, etc
          </p>
        </div>
      </div>
    </section>
  );
}

const tabContent = {
  'Mobile App Development': {
    heading: 'Innovative Mobile App Solutions',
    paragraph: 'We specialize in creating user-friendly mobile applications tailored to your business needs. Our team combines cutting-edge technology with intuitive design to deliver seamless experiences on both iOS and Android platforms.',
    img: Section1Img1,
  },
  'Web App Development': {
    heading: 'Dynamic Web Application Development',
    paragraph: 'Our web app development services focus on building responsive, scalable, and secure applications. We utilize the latest frameworks to ensure optimal performance and a user-friendly interface that enhances engagement.',
    img: Section1Img2,
  },
  'Point of Sale (POS)': {
    heading: 'Smart Point of Sale Solutions',
    paragraph: 'Transform your retail experience with our advanced POS systems. Designed for efficiency and ease of use, our solutions streamline transactions and inventory management, helping you focus on what matters most—your customers.',
    img: Section1Img3,
  },
  'IOT App development': {
    heading: 'Cutting-Edge IoT Applications',
    paragraph: 'We create innovative IoT applications that connect devices and enhance operational efficiency. Our solutions leverage real-time data to provide actionable insights, driving smarter decision-making for your business.',
    img: Section1Img4,
  },
  'Block Chain Developement': {
    heading: 'Secure Blockchain Solutions',
    paragraph: 'Our blockchain development services offer secure, transparent, and decentralized solutions for various industries. We help businesses harness the power of blockchain technology to enhance security and streamline processes.',
    img: Section1Img5,
  },
  'Data Scraping Services': {
    heading: 'Efficient Data Scraping Solutions',
    paragraph: 'Unlock valuable insights with our data scraping services. We provide reliable and scalable solutions to gather and analyze data from various sources, helping you make informed business decisions quickly.',
    img: Section1Img6,
  },
  'Digital Marketing': {
    heading: 'Comprehensive Digital Marketing Strategies',
    paragraph: 'Our digital marketing services are designed to elevate your online presence and drive engagement. From SEO and content marketing to social media management, we create tailored strategies that deliver results.',
    img: Section1Img7,
  },
  'UI/UX Developement': {
    heading: 'Exceptional UI/UX Design',
    paragraph: 'We prioritize user experience in our UI/UX development process, crafting intuitive and visually appealing interfaces. Our focus on usability ensures that your applications not only look great but also provide seamless interactions.',
    img: Section1Img8,
  },
}

function TabBtn({ tabName, selectedTab, setSelectedTab }) {
  return (
    <button onClick={() => setSelectedTab(tabName)} className={`border border-primary rounded-full py-3.5 px-7 max-sm:py-3 max-sm:px-4 max-sm:text-xs font-bold ${selectedTab === tabName ? 'bg-primary text-white' : 'text-primary'}`}>
      {tabName}
    </button>
  );
}

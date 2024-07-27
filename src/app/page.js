"use client"

import Statistic from "@/components/Statistic";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {

  return (
    <main className="flex w-screen min-h-screen flex-col items-center justify-between">
      {/* First Section */}
      <div className="w-full h-screen relative">
        <Image
          src="/frontpage-bg.jpg"
          alt="Header Image"
          layout="fill"
          objectFit="cover"
          className="contrast-125 saturate-150"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-75">
          <div className="flex flex-col items-center justify-center h-full">
            <h1 className="lg:text-9xl text-5xl font-bold text-white">Flex Social</h1>
            <p className="mt-1 lg:text-5xl font-extralight text-white">where creativitiy meets technology</p>
          </div>
        </div>
      </div>

      {/* Second Section */}
      <div className="relative w-full h-screen">
        <div className="w-full h-[25%] lg:px-48 px-4 flex items-center">
            <p className="text-center font-extralight text-sm lg:text-lg">
            Welcome to Flex Social! We're a dynamic startup dedicated to empowering local businesses with innovative marketing strategies 
            and cutting-edge software solutions. Our friendly team enhances brand visibility and generates leads through engaging content 
            across various platforms. Enjoy free consultations for personalized strategies that align with your goals.
            </p>
        </div>

        <div className="w-full h-[25%] bg-black px-4 xl:px-48 py-4 lg:py-0 grid grid-cols-2 lg:grid-cols-4 gap-x-2 lg:gap-x-6 gap-y-2">
          <Statistic number={21} title="Clients" />
          <Statistic number={470} title="Artworks" />
          <Statistic number={23} title="Software Projects" />
          <Statistic number={100} title="Creativity" />
        </div>

        <div className="w-full flex h-[40%] p-2 lg:p-10 gap-x-1 lg:gap-x-6">
          <div className="w-1/2 h-full hover:bg-red-700 rounded-xl hover:text-black flex justify-center items-center group">
            <div className="w-3/4 transform group-hover:scale-105 lg:group-hover:scale-110 transition-transform duration-300">
              <p className="text-lg lg:text-2xl font-semibold text-right">Social Media Marketing</p>
              <p className="font-extralight mt-2 text-right text-sm lg:text-base">&quot;Boost your brand&apos;s online presence with our innovative strategies and stunning content.&quot;</p>
            </div>
          </div>

          <div className="w-1/2 h-full hover:bg-blue-700 rounded-xl hover:text-black flex justify-center items-center group">
            <div className="w-3/4 transform group-hover:scale-105 lg:group-hover:scale-110 transition-transform duration-300">
              <p className="text-lg lg:text-2xl font-semibold text-left">Software Development</p>
              <p className="font-extralight mt-2 text-left text-sm lg:text-base">&quot;Transform your ideas into powerful solutions with our expert software development services.&quot;</p>
            </div>
          </div>
        </div>

        <div className="w-full h-[10%] bg-[#0c0c0c] px-8 lg:px-48 flex items-center justify-center">
          <p className="text-center font-light text-sm lg:text-2xl">
            Brand Stories Worth Luxe
          </p>
        </div>
      </div>

      <div className="w-full h-screen">
        {/* Contact */}
        <div className="w-full h-[80%] lg:flex">
          <div className="w-full lg:w-1/2 h-[50%] lg:h-full flex items-center justify-center">
            <div className="relative w-[80%] h-[80%] bg-white lg:m-10 overflow-hidden rounded-lg">
              <Image 
                src={"/abstract.jpg"}
                alt="Abstract Image"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>

          <div className="w-full lg:w-1/2 h-[50%] lg:h-full flex items-center justify-center">
            <div>
              <p className="text-center font-light text-lg lg:text-2xl xl:text-3xl">
                Ready to create something amazing together?
              </p>
              <p className="mt-4 text-center font-light text-lg lg:text-2xl xl:text-3xl">
                Contact us for a free consultation.
              </p>
              <div className="flex justify-center mt-8">
                <Button as={Link} href="/contacts/muthula-alwis" className="hidden lg:flex px-20 text-lg rounded-2xl hover:bg-green-500 hover:text-white justify-content items-center" size="lg">Contact Us</Button>
                <Button as={Link} href="/contacts/muthula-alwis" className="lg:hidden px-10 text-sm rounded-lg hover:bg-green-500 hover:text-white" size="sm">Contact Us</Button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="w-full h-[20%]">
          <div className="w-full h-full bg-[#0c0c0c] flex items-center justify-center rounded-t-2xl">
              <div className="text-center mt-6">
                <p className="px-6 pb-4 font-bold text-2xl md:text-4xl text-white">Flex Social</p>
                  <div className='flex items-center mx-6 mb-4'>
                    <p className="text-[#bdbdbd] text-xs lg:text-base">© 2024 Flex Social. All rights reserved.</p>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </main>
  );
}
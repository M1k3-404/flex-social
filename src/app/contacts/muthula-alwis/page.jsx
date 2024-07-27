'use client'

import { Button, Chip } from "@nextui-org/react";
import Image from "next/image";
import { useRef } from "react";
import { BiCopy } from "react-icons/bi";

export default function Page() {
    const phoneRef = useRef();
    const emailRef = useRef();

    const copyToClipboard = (ref) => {
        if (ref.current) {
            navigator.clipboard.writeText(ref.current.innerText)
            .then (() => {
                console.log("Copied to clipboard");
            })
            .catch((error) => {
                console.error("Failed to copy to clipboard", error);
            });
        }
    }

    return (
        <div className="w-screen h-screen overflow-clip bg-black flex justify-center items-center">
            <div className="relative w-[80%] md:w-[60%] xl:w-[30%] h-[90%] bg-[#0c0c0c] rounded-lg overflow-clip">
                <div className="w-full h-[25%] relative bg-white">
                    <Image
                        src={"/contacts/muthula-alwis/banner.jpeg"}
                        alt="Abstract Image"
                        layout="fill"
                        objectFit="cover"
                        className="saturate-150"
                    />
                    <div className="absolute top-0 left-0 w-full h-full bg-black/40" />
                    <div className="w-[25%] aspect-square rounded-full absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/4">
                        <Image
                            src={"/contacts/muthula-alwis/pfp.png"}
                            alt="Muthula Alwis"
                            layout="fill"
                            objectFit="cover"
                            className="rounded-full"
                        />
                    </div>
                </div>
                <p className="text-center font-semibold text-3xl mt-12">Muthula Alwis</p>
                <div className="mt-2 flex justify-center items-center gap-x-1">
                    <Chip size="sm" className="bg-violet-400">Marketing</Chip>
                    <Chip size="sm" className="bg-blue-400">Development</Chip>
                </div>
                <div className="mx-4 mt-4 pt-8 border-t border-white/50">
                    <p className="text-center font-light">Contact</p>
                    <div className="relative bg-neutral-800 rounded-lg text-center py-2 mx-1 md:mx-10 mt-2 overflow-clip">
                        <a href="tel:+94717428128" className="w-[90%]">
                            <p ref={phoneRef} className="font-medium text-sm md:text-base">+94717428128</p>
                        </a>
                        <Button isIconOnly className="absolute top-0 right-0 aspect-square bg-transparent" onClick={() => copyToClipboard(phoneRef)}><BiCopy color="white" /></Button>
                    </div>
                    
                    <p className="text-center font-light mt-6">Email</p>
                    <div className="relative bg-neutral-800 rounded-lg text-center py-2 mx-1 md:mx-10 mt-2 overflow-clip">
                        <a href="mailto:muthula.alwis@gmail.com" className="w-[90%]">
                            <p ref={emailRef} className="font-medium text-sm md:text-base">muthula.alwis@gmail.com</p>
                        </a>
                        <Button isIconOnly className="absolute top-0 right-0 aspect-square bg-transparent" onClick={() => copyToClipboard(emailRef)}><BiCopy color="white" /></Button>
                    </div>
                </div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-4 text-sm opacity-50 w-[80%]">
                    <p className="relative text-center mb-3 font-extralight">Tap to contact directly or press the button to copy the contact details.</p>
                    <p className="relative text-center font-semibold">© Flex Social</p>
                </div>
            </div>
        </div>
    )
}
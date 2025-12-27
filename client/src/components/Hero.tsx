import React from "react";
import { CheckCircleIcon,ArrowRightIcon } from "@heroicons/react/24/outline";
import heroImage from "../assets/hero.png";

export default function Hero(){
    return(
        <main>
            <div className="bg-indigo-100 py-20 px-4
            flex flex-col gap-10
            lg:flex-row">
                <div className="flex flex-col gap-8 items-center
                lg:items-start sm:justify-center">
                    <p className="flex gap-1 w-70 items-center justify-center
                    text-sm text-green-800 font-semibold p-2 rounded-xl bg-green-50
                    ">
                        <CheckCircleIcon className="size-5"/>
                        Trusted by 100,000+ homeowners
                    </p>
                    <p className="text-4xl font-extrabold text-center
                    lg:text-left lg:text-6xl ">
                        Book Trusted Home Services in <span className="text-indigo-600">60 Minutes</span>
                    </p>
                    <p className="text-gray-600 font-semibold text-center
                    lg:text-left lg:text-xl">
                        Plumber • Electrician • Painter • Repair • Cleaning 
                        — Professional service at your doorstep, guaranteed.
                    </p>
                    <div className="flex flex-col gap-4
                    sm:flex-row">
                        <button className="bg-indigo-600 text-white font-bold text-xl py-4 w-70
                        flex gap-2 items-center rounded-xl justify-center">
                            Book a Service
                            <ArrowRightIcon className="size-4"/>
                        </button>
                        <button className="text-indigo-600 border-2 font-bold text-xl py-4 w-70
                        flex gap-1 items-center rounded-xl justify-center">
                            How It Works
                        </button>
                    </div>
                </div>
                <div className="px-6 flex justify-center">
                    <img src={heroImage} alt="heroImage" />
                </div>
            </div>
        </main>
    )
}
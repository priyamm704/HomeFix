import React from "react";
import { WrenchScrewdriverIcon,Bars3Icon,UserIcon } from "@heroicons/react/24/outline";

export default function Navbar(){
    return(
        <header className="flex justify-between items-center p-4 px-3
        ">
            <div className="flex gap-2 items-center px-2">
                <div className="flex items-center p-2 bg-indigo-600 rounded-xl text-white">
                    <WrenchScrewdriverIcon 
                    className="size-6"
                    />
                </div>
                <p className="text-xl font-bold">
                    Home<span className="text-indigo-600">Fix</span>
                </p>
            </div>
            <div className="flex items-center gap-2
            max-md:hidden">
                <a className="p-3 text-gray-400 font-semibold
                hover:text-black focus:text-indigo-600 focus:underline transition"
                href="#">
                    Home
                </a>
                <a className="p-3 text-gray-400 font-semibold
                hover:text-black focus:text-indigo-600 focus:underline transition
                "href="#">
                    Services
                </a>
                <a className="p-3 text-gray-400 font-semibold
                hover:text-black focus:text-indigo-600 focus:underline transition"
                href="#">
                    How It Works
                </a>
            </div>
            <div className="flex items-center gap-2
            max-md:hidden">
                <button className="flex items-center gap-2 p-3 text-sm font-semibold
                hover:bg-green-100 rounded-xl transition hover:text-white
                ">
                    <UserIcon className="size-4"/>
                    Login
                </button>
                <button className="flex items-center p-3 bg-indigo-600 rounded-xl text-white font-semibold text-sm
                hover:bg-indigo-400 transition
                ">
                    Book Now
                </button>
            </div>
            <div className="p-3
            md:hidden
            ">
                <Bars3Icon 
                className="size-6 font-bold"
                />
            </div>
        </header>
    )
}
import React from "react";
import { WrenchScrewdriverIcon } from "@heroicons/react/24/outline";

export default function Footer(){
    return(
        <footer className="bg-black  py-15 px-4">
            <div>
                <div className="flex gap-2 items-center px-2">
                <div className="flex items-center p-2 bg-indigo-600 rounded-xl text-white">
                    <WrenchScrewdriverIcon 
                    className="size-6"
                    />
                </div>
                <p className="text-xl font-bold text-white">
                    Home<span className="text-indigo-600">Fix</span>
                </p>
                </div>
                <p className="text-white p-2">
                    Your trusted partner for all home services. Professional, reliable, and always on time.
                </p>
            </div>
            <div>
                <p>
                    Quick Links
                </p>
                <div className="text-white">
                    <a href="#">
                        Home
                    </a>
                    <a href="#">
                        All Services
                    </a>
                    <a href="#">
                        How It Works
                    </a>
                    <a href="#">
                        About Us
                    </a>
                </div>
            </div>
            <div>
                <p>
                    Quick Links
                </p>
                <div className="text-white">
                    <a href="#">
                        Plumbing
                    </a>
                    <a href="#">
                        Electrical
                    </a>
                    <a href="#">
                        Painting
                    </a>
                    <a href="#">
                        Cleaning
                    </a>
                </div>
            </div>
            <div>
                <p>
                    Quick Links
                </p>
                <div className="text-white">
                    <a href="#">
                        Home
                    </a>
                    <a href="#">
                        All Services
                    </a>
                    <a href="#">
                        How It Works
                    </a>
                    <a href="#">
                        About Us
                    </a>
                </div>
            </div>
        </footer>
    )
}
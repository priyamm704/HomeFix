import React from "react";
import PCard from "./PCard";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function Pservices(){
    return(
        <section className="bg-indigo-100 py-15 px-4">
            <div className="flex flex-col gap-5 items-center mb-6">
                <p className="text-3xl font-extrabold">
                    Popular Services
                </p>
                <p className="text-gray-600 font-semibold text-center">
                    Choose from our wide range of professional home services
                </p>
            </div>
            <div className="grid
            md:grid-cols-2
            xl:grid-cols-4">
                <PCard />
                <PCard />
                <PCard />
                <PCard />
            </div>
                <div className="flex items-center justify-center">
                    <button className="text-indigo-600 border-2 font-semibold py-3 w-55
                        flex gap-1 items-center rounded-xl justify-center
                        hover:text-white hover:bg-indigo-600 transition mt-6
                        border-indigo-600">
                    View All Services <ArrowRightIcon className="size-4"/>
                </button>
                </div>
        </section>
    )
}
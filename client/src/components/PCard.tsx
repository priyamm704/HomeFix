import { WrenchIcon,ClockIcon } from "@heroicons/react/24/outline";
import React from "react";

export default function PCard(){
    return(
        <div className="bg-white  p-6 rounded-xl flex flex-col gap-3 m-4 justify-center 
        group hover:shadow-[0_0_24px_rgba(0,0,0,0.08)]
        transition">
            <div className="flex items-center gap-4">
                <div className="bg-indigo-100 size-14 flex items-center justify-center
            rounded-xl group-hover:scale-110 transition">
                <WrenchIcon className="size-8"/>
            </div>
            <div className="flex flex-col">
                <p className="font-semibold">
                    Plumbing Repair
                </p>
                <div className="flex gap-3">
                    <p className="text-indigo-600 text-sm font-semibold">
                    From $49
                </p>
                <p className="flex items-center gap-1 text-sm text-gray-600 font-semibold">
                    <ClockIcon className="size-4"/><span>60 mins</span>
                </p>
                </div>
            </div>
            </div>
            <button className="text-sm font-semibold text-white bg-green-600 rounded-xl py-2">
                Book Now
            </button>
        </div>
    )
}
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import React from "react";

export default function StepC(){
    return(
        <div className="bg-white p-6 m-4 flex flex-col gap-3 rounded-xl
        hover:shadow-[0_0_28px_rgba(0,0,0,0.12)] group transition relative">
            <div className="bg-indigo-100 size-14 flex items-center justify-center 
            rounded-xl text-indigo-600
            group-hover:scale-110 transition">
                <MagnifyingGlassIcon className="size-8"/>
            </div>
            <p className="font-bold">
                Choose Your Service
            </p>
            <p className="text-sm text-gray-600">
                Browse our catalog and select the service you need.
                From plumbing to cleaning, we've got you covered.
            </p>
            <div className="size-12 absolute bg-indigo-600 rounded-full text-white font-semibold
            top-0 right-0 translate-x-1/2 -translate-y-1/2 flex justify-center items-center">1</div>
        </div>
    )
}
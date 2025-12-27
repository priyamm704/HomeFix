import { ShieldCheckIcon } from "@heroicons/react/24/outline";
import React from "react";

export default function Why(){
    return(
        <section className="bg-indigo-100 py-15 px-4 flex flex-col gap-14 items-center">
        <div className="flex flex-col gap-5 items-center">
            <p className="text-3xl font-extrabold">
                Why Choose HomeFix?
            </p>
            <p className="text-gray-600 font-semibold text-center">
                We're committed to providing the best home service experience
            </p>
        </div>
        <div className="grid gap-10
        sm:grid-cols-2
        xl:grid-cols-4 max-w-250">
            <div className="flex gap-4 justify-center">
                <div className="bg-green-100 text-green-800
                flex justify-center items-center h-13 w-13 rounded-xl
                flex-shrink-0 flex-grow-0">
                    <ShieldCheckIcon className="size-8"/>
                </div>
                <div className="flex flex-col gap-1">
                    <p className="font-bold">
                        Verifid Professionals
                    </p>
                    <p className="text-sm text-gray-600 font-semibold">
                        All service providers are background-checked and certified.
                    </p>
                </div>
            </div>
            <div className="flex gap-4 justify-center">
                <div className="bg-green-100 text-green-800
                flex justify-center items-center h-13 w-13 rounded-xl
                flex-shrink-0 flex-grow-0">
                    <ShieldCheckIcon className="size-8"/>
                </div>
                <div className="flex flex-col gap-1">
                    <p className="font-bold">
                        Verifid Professionals
                    </p>
                    <p className="text-sm text-gray-600 font-semibold">
                        All service providers are background-checked and certified.
                    </p>
                </div>
            </div>
            <div className="flex gap-4 justify-center">
                <div className="bg-green-100 text-green-800
                flex justify-center items-center h-13 w-13 rounded-xl
                flex-shrink-0 flex-grow-0">
                    <ShieldCheckIcon className="size-8"/>
                </div>
                <div className="flex flex-col gap-1">
                    <p className="font-bold">
                        Verifid Professionals
                    </p>
                    <p className="text-sm text-gray-600 font-semibold">
                        All service providers are background-checked and certified.
                    </p>
                </div>
            </div>
            <div className="flex gap-4 justify-center">
                <div className="bg-green-100 text-green-800
                flex justify-center items-center h-13 w-13 rounded-xl
                flex-shrink-0 flex-grow-0">
                    <ShieldCheckIcon className="size-8"/>
                </div>
                <div className="flex flex-col gap-1">
                    <p className="font-bold">
                        Verifid Professionals
                    </p>
                    <p className="text-sm text-gray-600 font-semibold">
                        All service providers are background-checked and certified.
                    </p>
                </div>
            </div>
        </div>
    </section>
    )
}
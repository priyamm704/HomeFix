import React from "react";
import StepC from "./StepC";

export default function Howitw(){
    return(
        <section className="bg-indigo-100 flex flex-col gap-6 py-15 px-4 items-center">
            <div className="flex flex-col gap-4 items-center">
                <p className="text-3xl font-extrabold">
                    How It Works
                </p>
                <p className="text-gray-600 font-semibold">
                    Book your service in 3 simple steps
                </p>
            </div>
            <div className="flex flex-col
            lg:flex-row max-w-250 gap-2">
                <StepC />
                <StepC />
                <StepC />
            </div>
        </section>
    )
}
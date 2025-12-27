import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function Ready(){
    return(
        <section className="bg-indigo-600 py-15 px-4
        flex flex-col items-center gap-10">
            <div className="flex flex-col items-center gap-5">
                <p className="text-3xl font-extrabold text-white">
                    Ready to Get Started?
                </p>
                <p className="text-white text-center">
                    Join thousands of happy customers who trust HomeFix for their home service needs.
                </p>
            </div>
            <button className="bg-green-600 text-white font-bold text-xl py-4 w-80
                        flex gap-2 items-center rounded-xl justify-center">
                            Book Your First Service
                            <ArrowRightIcon className="size-4"/>
                        </button>
        </section>
    )
}
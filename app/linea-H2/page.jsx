"use client";

import Camion from "@/components/Camion"
import TanqueH2 from "../../components/TanqueH2"
import { useState } from "react";



export default function LineaH2() {

    const [pt1, setPt1] = useState(false);
    const [pt2, setPt2] = useState(false);


    return (
        <div className="p-6 space-y-6">
            <h1 className="text-3xl font-bold text-center">
                Línea H2
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <TanqueH2 nombre="Tanque Alfa" setPt1={setPt1} pt1={pt1} setPt2={setPt2} pt2={pt2} />
                <TanqueH2 nombre="Tanque Beta" setPt1={setPt1} pt1={pt1} setPt2={setPt2} pt2={pt2} />
            </div>

            <Camion pt1={pt1} pt2={pt2} />
        </div>
    )
}
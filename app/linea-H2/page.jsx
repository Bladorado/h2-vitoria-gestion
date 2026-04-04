"use client";

import Camion from "@/components/Camion"
import TanqueH2 from "../../components/TanqueH2"
import { useState } from "react";



export default function LineaH2() {


    const [presionAlfa, setPresionAlfa] = useState(0);
    const [presionBeta, setPresionBeta] = useState(0);


    const transferirPresion = (tanque, cantidad) => {

        if (tanque === "Alfa") {

            if (presionAlfa >= cantidad) {
                setPresionAlfa(presionAlfa - cantidad);
                return cantidad;
            } else {
                const cantidadReal = presionAlfa;
                setPresionAlfa(0);
                return cantidadReal;
            }

        } else if (tanque === "Beta") {
            
            if (presionBeta >= cantidad) {
                setPresionBeta(presionBeta - cantidad);
                return cantidad;
            } else {
                const cantidadReal = presionBeta;
                setPresionBeta(0);
                return cantidadReal;
            }
        }
        return 0;
    };


    return (
        <div className="p-6 space-y-6 bg-red-100 w-full">
            <h1 className="text-3xl text-black font-bold text-center">
                Línea H2
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <TanqueH2 nombre="Tanque Alfa" onPresionChange={setPresionAlfa} />
                <TanqueH2 nombre="Tanque Beta" onPresionChange={setPresionBeta} />
            </div>

            <Camion
                presionAlfa={presionAlfa}
                presionBeta={presionBeta}
                onTransferir={transferirPresion} />
        </div>
    )
}
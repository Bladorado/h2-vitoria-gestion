"use client";
import Image from "next/image";
import { useState } from "react";

export default function Camion({  presionAlfa, presionBeta }) {

    const [colorFondo, setColorFondo] = useState("bg-blue-200");
    const [tanque, setTanque] = useState("Alfa");


    
    const obtenerColorFondo = () => {
      
        if (tanque === "Alfa" && presionAlfa > 800) {
            return "bg-red-600"; 
        }
      
        if (tanque === "Beta" && presionBeta > 800) {
            return "bg-blue-600";  
        }
   
        return "bg-blue-200";
    };

    // 👈 Para saber qué presión mostrar
    const presionActual = tanque === "Alfa" ? presionAlfa : presionBeta;

    return (
        <div>
            <main className={`relative w-full h-[300px] ${obtenerColorFondo()} rounded-lg overflow-hidden mb-5`}>
                <Image
                    src="https://images.unsplash.com/photo-1757191377107-f1d78844e769?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Camion"
                    fill
                    className="object-cover  opacity-50"

                />
            </main>

        
            <div className="p-4 text-black">
                <label className="block mb-2 font-bold">Selecciona un tanque:</label>
                <select
                    className="border px-3 py-1 rounded"
                    value={tanque}
                    onChange={(e) => setTanque(e.target.value)}
                >
                    <option value="Alfa">Tanque Alfa</option>
                    <option value="Beta">Tanque Beta</option>
                </select>

                <p className="mt-2 font-bold">
                    Presión del {tanque}: {presionActual} bares
                    {presionActual > 800 && (
                        <span className="text-red-600 ml-2">⚠️ PELIGRO!</span>
                    )}
                </p>

                <p className="mt-4">
                    Tanque seleccionado: {tanque}
                </p>

              

                
            </div>
        </div>
    )
}
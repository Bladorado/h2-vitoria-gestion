"use client";
import Image from "next/image";
import { useState } from "react";

export default function Camion() {

    const [colorFondo, setColorFondo] = useState("bg-blue-200");
     const [tanque, setTanque] = useState("Alfa");

    return (
        <div>
            <main className={`relative w-full h-[300px] ${colorFondo} rounded-lg overflow-hidden mb-5`}>
                <Image
                    src="https://images.unsplash.com/photo-1757191377107-f1d78844e769?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Camion"
                    fill
                    className="object-cover  opacity-50"

                />
            </main>

            <div className="flex gap-7 ">
                <button className="bg-amber-800 text-white p-4 hover:bg-amber-200 hover:text-black" onClick={() => setColorFondo("bg-red-200")}>Rojo</button>
                <button className="bg-blue-800 text-white p-4 hover:bg-amber-200 hover:text-black" onClick={() => setColorFondo("bg-green-200")}>Verde</button>
            </div>

            <div className="p-4">
                <label className="block mb-2 font-bold">Selecciona un tanque:</label>
                <select
                    className="border px-3 py-1 rounded"
                    value={tanque}
                    onChange={(e) => setTanque(e.target.value)}
                >
                    <option value="Alfa">Tanque Alfa</option>
                    <option value="Beta">Tanque Beta</option>
                </select>

                <p className="mt-4">Tanque seleccionado: {tanque}</p>
            </div>
        </div>
    )
}
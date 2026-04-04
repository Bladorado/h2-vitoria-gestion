"use client";
import Image from "next/image";
import { useState } from "react";

export default function Camion({ presionAlfa, presionBeta, onTransferir }) {

    const [tanque, setTanque] = useState("Alfa");
    const [llenado, setLlenado] = useState(0)

    const CAPACIDAD_MAXIMA = 800;

    const obtenerColorFondo = () => {
        // Calcular porcentaje de llenado
        const porcentaje = (llenado / CAPACIDAD_MAXIMA) * 100;

        if (porcentaje >= 100) {
            return "bg-green-700";  
        } else if (porcentaje >= 75) {
            return "bg-green-600";  
        } else if (porcentaje >= 50) {
            return "bg-green-500"; 
        } else if (porcentaje >= 25) {
            return "bg-green-400";  
        } else if (porcentaje > 0) {
            return "bg-green-300";  
        } else {
            return "bg-blue-200";   
        }
    };

    const llenarCamion = () => {
        if (llenado >= CAPACIDAD_MAXIMA) {
            alert("🚛 El camión ya está lleno! (800 bares)");
            return;
        }
        // Calcular cuánto espacio queda en el camión
        const espacioDisponible = CAPACIDAD_MAXIMA - llenado;

        // Obtener la presión del tanque seleccionado
        let presionTanque = tanque === "Alfa" ? presionAlfa : presionBeta;

        // Si el tanque está vacío, no se puede transferir
        if (presionTanque <= 0) {
            alert(`⚠️ El tanque ${tanque} no tiene presión para transferir`);
            return;
        }

        // Calcular cuánto vamos a transferir (mínimo entre espacio disponible y presión del tanque)
        const cantidadATransferir = Math.min(espacioDisponible, presionTanque);

        // Transferir la presión (llamar a la función del padre)
        const cantidadTransferida = onTransferir(tanque, cantidadATransferir);

        // Actualizar el llenado del camión
        setLlenado(llenado + cantidadTransferida);

        // Mostrar mensaje de confirmación
        if (cantidadTransferida > 0) {
            console.log(`✅ Transferidos ${cantidadTransferida} bares del tanque ${tanque} al camión`);
        }
    };

    // 👇 Función para vaciar el camión 
    const vaciarCamion = () => {
        setLlenado(0);
    };


    // Calcular porcentaje para mostrar visualmente
    const porcentajeLlenado = (llenado / CAPACIDAD_MAXIMA) * 100;

    return (
        <div>
            <main className={`relative w-full h-[300px] ${obtenerColorFondo()} rounded-lg overflow-hidden mb-5`}>
                <Image
                    src="https://images.unsplash.com/photo-1757191377107-f1d78844e769?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Camion"
                    fill
                    className="object-cover  opacity-50"

                />


                {/* 👉 BARRA DE PROGRESO (visualización del llenado) */}
                <div className="absolute bottom-0 left-0 right-0 h-8 bg-black bg-opacity-50">
                    <div
                        className="h-full bg-green-500 transition-all duration-300 flex items-center justify-center text-white text-xs font-bold"
                        style={{ width: `${porcentajeLlenado}%` }}
                    >
                        {Math.round(porcentajeLlenado)}%👌
                    </div>
                </div>

                {/* 👉 Indicador de llenado numérico */}
                <div className="absolute top-2 right-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-sm">
                    {llenado} / {CAPACIDAD_MAXIMA} bares  Capacidad Maxima
                </div>
            </main>


           
            <div className="p-4 text-black bg-gray-100 rounded-lg">
                <label className="block mb-2 font-bold">Selecciona un tanque:</label>
                <select
                    className="border px-3 py-1 rounded"
                    value={tanque}
                    onChange={(e) => setTanque(e.target.value)}
                >
                    <option value="Alfa">Tanque Alfa</option>
                    <option value="Beta">Tanque Beta</option>
                </select>

                <div className="mt-4 grid grid-cols-2 gap-3">
                    
                    <button
                        onClick={llenarCamion}
                        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 font-bold transition-colors"
                    >
                        🚛 LLENAR CAMIÓN
                    </button>

                   
                    <button
                        onClick={vaciarCamion}
                        className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors"
                    >
                        🗑️ VACIAR CAMIÓN
                    </button>
                </div>

                <div className="mt-4 p-3 bg-white rounded border">
                    <p className="font-bold">📊 Estado actual en Camión:</p>
                    <p>Tanque seleccionado: <span className="font-bold">{tanque}</span></p>
                    <p>Presión del tanque en Camion: <span className="font-bold">{tanque === "Alfa" ? presionAlfa : presionBeta}</span> bares</p>
                    <p>Llenado del camión: <span className="font-bold">{llenado}</span> / {CAPACIDAD_MAXIMA} bares</p>
                </div>
            </div>
        </div>
    )
}
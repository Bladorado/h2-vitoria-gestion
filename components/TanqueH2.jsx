"use client";


import { useEffect, useState } from "react";

export default function TanqueH2({ nombre, onPresionChange }) {

    const [presion, setPresion] = useState(0);
    const [temperatura, setTemperatura] = useState("Cargando...");
    const [humedad, setHumedad] = useState(null);

    useEffect(() => {
        onPresionChange(presion);
    }, [presion, onPresionChange]);

    const aumentarPresion = () => {
        setPresion(presion + 50);
    };

    const resetearPresion = () => {
        setPresion(0)
    }




    useEffect(() => {
        async function llamarAltiempo() {

            const API_KEY = '5adc3c574dade8c0f8b3d097bd79c3c2'; // Estamos utilizando esta web: https://openweathermap.org/ 
            const lat = 42.85 // Latitud de Vitoria 
            const lon = -2.67 // Longitud 
            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

            const respuesta = await fetch(url)
            const datos = await respuesta.json()
            console.log(datos)
            setTemperatura(datos.main.temp)
            setHumedad(datos.main.humidity);
            // setClima(datos.weather[0].description)
        }

        llamarAltiempo()
    }, []); // El array vacío significa: "Hazlo solo una vez al cargar la página por primera vez"




    return (
        <div className="bg-amber-100 p-3 rounded-2xl">
            <header className="text-black">
                <h1>Tiempo y Humedad</h1>
                <p>Temperatura: 🌡 {temperatura} °C</p>
            </header>

            {humedad !== null && (
                <>
                    <p className="text-black mt-1">Humedad: {humedad}%</p>

                    {humedad >= 80 && (
                        <p className="text-red-600 font-bold">
                            ⚠️ Ambiente demasiado húmedo para pruebas
                        </p>
                    )}
                </>
            )}

            <div className="border text-black p-4 rounded-lg text-center space-y-3 mt-1">
                <h2 className="text-xl font-bold">{nombre}</h2>

                <p className={presion > 700 ? "text-red-500 font-bold" : "text-green-600"}>
                    Presión: En Tanques {presion} bares
                </p>

                {presion > 700 && (
                    <p className="text-red-600 font-bold">
                        ⚠️ PELIGRO: presión alta 🔴
                    </p>
                )}


                <div className="flex justify-center gap-4">
                    <button
                        onClick={aumentarPresion}
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                        Aumentar Presión
                    </button>

                    <button
                        onClick={resetearPresion}
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                        Resetear
                    </button></div>
            </div>


        </div>
    );
}
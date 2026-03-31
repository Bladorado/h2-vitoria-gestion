import Image from "next/image";

export default function Home() {
  return (
    <div className="space-y-8 bg-blue-50 p-4 w-full h-[450px]">
      <header className="border border-blue-900 p-2">
        <h1 className="text-4xl font-extrabold text-slate-800 text-center">Panel General: Planta Vitoria Gestión de Hidrógeno 👨🏻‍🏭</h1>
      </header>
      <main className="relative w-full h-[300px]">
        <Image
          src="https://images.unsplash.com/photo-1706554597282-3cc8f3dfeca3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0"
          alt="hidorgeno"
          fill                    // La imagen se estira hasta llenar el div padre
          sizes="(max-width: 768px) 100vw, 50vw" // Ayuda al navegador a elegir el tamaño óptimo
          className="object-cover rounded-lg" // ¡CRÍTICO! Hace que la imagen se recorte en lugar de deformarse
          priority={false}        // Esta imagen no es urgente (Lazy Loading por defecto)
        />
      </main>
    </div>
  );
}


import TanqueH2 from "../../components/TanqueH2"



export default function LineaH2() {
    return (
        <div className="p-6 space-y-6">
            <h1 className="text-3xl font-bold text-center">
                Línea H2
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <TanqueH2 nombre="Tanque Alfa" />
                <TanqueH2 nombre="Tanque Beta" />
            </div>
        </div>
    )
}
import axios from "axios"
import { useEffect, useState } from "react"
import GuerreroCard from "../components/GuerreroCard"

const Guerreroz = () => {
    const [guerreroz, setGuerreroz] = useState([])
    const [loading, setLoading] = useState(false)
    const [search, setSearch] = useState("")

    useEffect(() => {
        const fetchGuerreroz = async () => {
            try {
                setLoading(true)
                const response = await axios.get("https://dragonball-api.com/api/characters")
                console.log(response.data)                
                const data = Array.isArray(response.data) ? response.data : response.data.items
                setGuerreroz(data)
            }
            catch (err) {
                console.log(err)
            }
            finally {
                setLoading(false)
            }
        }
        fetchGuerreroz()
    }, [])

    useEffect(() => {
        console.log(search)
    }, [search])

    const filteredGuerreroz = guerreroz?.filter(guerrero => guerrero.name.toLowerCase().includes(search.toLowerCase()))

    return (
        <>
            <div className="mt-16 px-10 max-w-5xl flex justify-center items-center mx-auto">
                <input
                    // value={search}
                    type="text"
                    placeholder="Buscar Guerrero"
                    className="w-full rounded-lg border-2 border-gray-400 px-6 py-3 text-gray-700"
                    onChange={(event) => setSearch(event.target.value)}
                />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3  h-screen gap-5 pt-5 px-10 max-w-5xl items-center justify-center align-middle mx-auto">
                {
                    loading ?
                        <div className="flex text-center justify-center items-center text-5xl text-red-600 col-span-2 md:col-span-4 animate-bounce">
                            <div>
                                CARGANDO GUERREROS Z...
                            </div>
                        </div>
                        :
                        filteredGuerreroz?.map((guerrero, index) => {
                            return (
                                <GuerreroCard guerrero={guerrero} key={guerrero.id} />
                            )
                        })
                }

            </div>
        </>
    )
}
export default Guerreroz
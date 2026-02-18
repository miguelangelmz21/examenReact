import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

const GuerrerozDetail = () => {

    const { id } = useParams()
    const [guerrerozUnique, setGuerrerozUnique] = useState(null)

    console.log(id)

    useEffect(() => {
        const fetchGuerrerozUnique = async () => {
            try {
                const response = await axios.get(`https://dragonball-api.com/api/characters/${id}`)
                console.log(response?.data)
                setGuerrerozUnique(response?.data)
            }
            catch (err) {
                console.log(err)
            }
        }

        fetchGuerrerozUnique()
    }, [])

    return (
        <>
            <div className="flex flex-col justify-center items-center h-screen">


                <div className=" rounded-lg bg-white shadow-lg p-5 flex flex-col justify-center items-center gap-5 px-10">
                    <div className="w-full flex justify-start items-start gap-5">
                        <Link to="/guerreroz" className="bg-orange-500 hover:bg-orange-600 hover:scale-105 text-white px-6 py-2 rounded-full cursor-pointer transition duration-300">
                            volver
                        </Link>
                    </div>
                    <img
                        src={guerrerozUnique?.image}
                        alt="Guerrero Z"
                        className="w-40 h-40 object-contain"
                    />
                    <span className="text-gray-300">{`${guerrerozUnique?.id}`}</span>
                    <p className="text-xs text-center max-w-md">{`${guerrerozUnique?.description}`}</p>
                </div>
            </div>
        </>
    )
}

export default GuerrerozDetail
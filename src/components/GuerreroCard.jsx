import { Link } from "react-router-dom"

const GuerreroCard = ({ guerrero }) => {
    return (
        <Link
            to={`/guerreroz/${guerrero.id}`}
        >
            <div className="rounded-xl bg-white shadow-lg p-5 flex flex-col justify-center items-center gap-2 px-10">
                <img
                    src={guerrero.image}
                    alt="guerreromon"
                    className="w-40 h-40 object-contain"
                />
                <span className="text-gray-300">{`#${guerrero.id}`}</span>
                <h2 className="font-bold" >Nombre: {guerrero.name}</h2>
                <h2 className="font-bold" >Ki: {guerrero.ki}</h2>
                <button
                    // style={{
                    //     backgroundColor: 'orange'
                    // }}
                    className="bg-orange-500 hover:scale-105 text-white px-4 py-1 rounded-full cursor-pointer transition duration-300 uppercase"
                >
                    {guerrero.race}
                </button>
            </div>
        </Link>
    )
}

export default GuerreroCard
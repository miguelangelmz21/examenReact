import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
        <div className="w-40 h-40 rounded-full bg-orange-600 mb-5 animate-bounce flex justify-center items-center">
            <div className="w-36 h-36 rounded-full bg-white relative">
                <div className="flex flex-wrap w-16 h-16 justify-center items-center gap-1 opacity-90 absolute top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2">
                    <span className="text-red-700 text-2xl">
                    ★
                    </span>
                    <span className="text-red-700 text-2xl">
                    ★
                    </span>
                    <span className="text-red-700 text-2xl">
                    ★
                    </span>
                    <span className="text-red-700 text-2xl">
                    ★
                    </span>
                </div>      
            </div>
        </div>

      <h1 className="text-5xl font-extrabold text-gray-700 mb-7 text-center">
        Bienvenido Guerrero Z
      </h1>
      <h3 className="text-xl text-center text-gray-700 mb-7">
        Vamos al mundo de Dragon Ball, explora sus estadísticas.
      </h3>
      <Link
        to="/guerreroz"
        className="bg-orange-600 hover:bg-orange-800 hover:scale-105 text-white px-6 py-4 rounded-full cursor-pointer transition duration-300"
      >
        🚀 Ir a Dragon Ball
      </Link>
    </div>
  );
};

export default Home;

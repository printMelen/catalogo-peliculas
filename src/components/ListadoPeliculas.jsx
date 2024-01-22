import { Pelicula } from "./Pelicula"

export const ListadoPeliculas = () => {
  return (
    <div className="md:w-1/2 lg:w-3/5 mt-5 md:mt-0">
        <h2 className="font-bold text-3xl text-center">
            Catálogo
        </h2>

        <p className="text-xl mt-2 text-center mb-2 font-bold">
        Administra {" "} 
        <span className="text-pink-500 bg-gradient-to-r from-pink-200 via-pink-300  to-pink-500 inline-block text-transparent bg-clip-text font-black">
            Películas
        </span>
        </p>
        <div className="md:h-screen md:overflow-y-scroll">
          <Pelicula />
          <Pelicula />
          <Pelicula />
        </div>
    </div>
  )
}

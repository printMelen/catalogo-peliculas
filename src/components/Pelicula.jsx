export const Pelicula = () => {
  return (
    <div className="bg-white shadow-md shadow-white rounded-lg mb-10 py-10 px-5 text-slate-900">
    <p className="font-bold text-gray-700 mb-3 uppercase">Título: {""}
      <span className="font-normal normal-case">
        Los Guardianes de la Galaxia
      </span>
    </p>
    <p className="font-bold text-gray-700 mb-3 uppercase">Calificación: {""}
      <span className="font-normal normal-case">
        Todos los públicos
      </span>
    </p>
    <p className="font-bold text-gray-700 mb-3 uppercase">Argumento: {""}
      <span className="font-normal normal-case">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet quidem commodi modi repudiandae tempore minima, assumenda beatae. Cum, fuga veritatis quidem porro, ipsam inventore omnis neque reiciendis consequuntur rem nisi.
      </span>
    </p>
    <span className="font-bold text-gray-700 mb-3 uppercase">Cartel: {""}
      <figure className="max-w-xs mx-auto">
        <img className="h-auto max-w-xs" src="https://imagizer.imageshack.com/img923/5821/t4WKw3.jpg" alt="imagen" />
      </figure>
    </span>
</div>
  )
}

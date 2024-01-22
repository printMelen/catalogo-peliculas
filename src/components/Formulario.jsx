import { useState } from "react"
import { Error } from "./Error"

export type objetoPelicula = {
    titulo: string,
    calificacion: string,
    argumento: string,
    file: string,
}


interface Props{
    setCatalogo(arg0:objetoPelicula[]):void,
    catalogo: objetoPelicula[]
}



function handleFileEvent(event: any, setFile: Function)
{
    event.preventDefault();
    let files: any;

    if(event.type == "drop" || event.type == "change")
    {
        files = event.dataTransfer?.files ?? event.target.files;

        if(FileReader && files && files.length)
        {
            const preview= document.querySelector("#output")!.querySelector("img");
            let fr = new FileReader();  

            fr.onload = function(){          
                preview!.src=`${fr.result}`;             
                if (preview!.classList.contains("hidden"))
                    preview!.classList.remove("hidden")
                
            }
            fr.readAsDataURL(files[0]);
            document.querySelector("#nombreFichero")!.textContent=files[0].name;
            setFile(files[0].name);
        }       
    }
}



export const Formulario = ({setCatalogo, catalogo}:Props) => {
    const [titulo, setTitulo] = useState('');
    const [calificacion, setCalificacion] = useState('');
    const [argumento, setArgumento] = useState('');
    const [file, setFile] = useState('');
    const [error, setError] = useState(false);
    
    
    const handleSubmit= (e: React.SyntheticEvent): void =>{
        e.preventDefault();

        if ([titulo, calificacion, argumento, file].includes(""))
        {
            setError(true);            
            return;
        }

        setError(false);
        
        setCatalogo( [...catalogo, {titulo, calificacion, argumento, file} ]);

        setTitulo("");
        setCalificacion("");
        setArgumento("");
    }    

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-2">
        <h2 className="font-bold text-3xl text-center">
            Película
        </h2>

        <p className="text-xl mt-2 text-center mb-2 font-bold">
        Añade y edita {" "} 
        <span className="text-pink-500 bg-gradient-to-r from-pink-200 via-pink-300  to-pink-500 inline-block text-transparent bg-clip-text font-black">
            Películas
        </span>
        </p>

        <form 
        className="bg-white shadow-md shadow-white rounded-lg py-10 px-5 text-slate-900"
        onSubmit={handleSubmit}
        >
            {error && 
            <Error setError={setError}>
                <p>Todos los campos son obligatorios</p>
            </Error>    
            }

            <div className="mb-5">
                <label htmlFor="titulo" className="block text-gray-700 font-bold uppercase">
                    Título:
                </label>
                <input
                id="titulo"
                className="border-2 rounded-md w-full p-2 mt-2 placeholder-slate-400"
                type="text"
                placeholder="Nombre de la película"
                value={titulo}
                onChange={(e)=>{setTitulo(e.target.value)}}
                />
            </div>

            <div className="mb-5">
                <label htmlFor="calificacion" className="block text-gray-700 font-bold uppercase">
                Calificación:
                </label>
                <select
                id="calificacion"
                className="border-2 rounded-md w-full p-2 mt-2 placeholder-slate-400"                
                name="calificacion"
                value={calificacion}
                onChange={(e)=>{setCalificacion(e.target.value)}}
                >
                    <option value=""></option>
                    <option value="mayores18">Mayores de 18</option>
                    <option value="mayores16">Mayores de 16</option>
                    <option value="mayores13">Mayores de 13</option>
                    <option value="todos">Todos los públicos</option>
                </select>
            </div>


            <div className="mb-5">
                <label htmlFor="argumento" className="block text-gray-700 font-bold uppercase">
                argumento:
                </label>
                <textarea
                id="argumento"
                className="border-2 rounded-md w-full p-2 mt-2 placeholder-slate-400"
                placeholder="Argumento de la película"
                value={argumento}
                onChange={(e)=>{setArgumento(e.target.value)}}
                />
            </div>

            <div className="mb-5"
            onDragEnter={(e)=>{handleFileEvent(e, setFile)}}
            onDragOver={(e)=>{handleFileEvent(e, setFile)}}
            onDrop={(e)=>{handleFileEvent(e, setFile)}}            
            >
                <label htmlFor="dropzone-file" className="block text-gray-700 font-bold uppercase">
                    Cartel de la película:
                    <div className="flex flex-col items-center justify-center pt-5 pb-6 w-full h-64 border-2
                    border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50">
                        <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                            <path  stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                        </svg>
                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400 text-center">
                            <span className="font-semibold">Click para seleccionar</span> o arrastra un fichero
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                            SVG, PNG, JPG or GIF (MAX. 800x400px)
                        </p>
                        <p id="output" className="flex flex-col justify-center items-center m-3 text-gray-500 h-18 text-xs">
                            <img id="preview" className="hidden object-scale-down h-auto w-16 shadow-lg mb-1" src="" />
                            <span id="nombreFichero"></span>                            
                        </p>
                    </div>
                    <input 
                    id="dropzone-file"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e)=>{handleFileEvent(e, setFile)}}
                    />
                </label>
            </div>

            <div>
                <input
                className="uppercase block bg-rosa font-bold w-full p-3 text-white rounded-lg cursor-pointer hover:bg-pink-600 transition-colors"
                type="submit"
                value="Agregar película"
                />
            </div>
        </form>
    </div>
  )
}

import { ReactNode } from "react"

interface Props {
    setError(arg0: boolean):void,
    mensaje?: string,
    children: ReactNode
}

//export const Error = ({setError, mensaje}:Props) => {
    export const Error = (propiedades:Props) => {
    const {mensaje, children, setError} = propiedades;

    setTimeout(() => {
        //propiedades.setError(false);    
        setError(false);
    }, 5000);

  return (
    <div className="bg-red-600 text-white text-center p-3 uppercase font-bold mb-3 rounded-md">
        { 
        //propiedades.mensaje
        children
        }
    </div>
  )
}

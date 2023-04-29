import React from 'react'
import Formulario from './Formulario'
import Alerta from './Alerta'
import useLetras from '../hooks/useLetras'
import Letra from './Letra'
import Spinner from './Spinner'

const AppLetras = () => {
    const { alerta, letra, cargando } = useLetras()
    return (
        <>
            <header>Búsqureda de letras de canciones</header>
            <Formulario />
            <main>
                {alerta ?
                    <Alerta>{alerta}</Alerta> :
                    letra ?
                        <Letra /> :
                        cargando ? <Spinner /> :
                            <p className='text-center'>
                                Busca las letras de tus caciones favoritas
                            </p>
                }
            </main>
        </>
    )
}

export default AppLetras

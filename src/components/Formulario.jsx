import { useState } from 'react'
import useLetras from '../hooks/useLetras'
const Formulario = () => {
    const { setAlerta,busquedaLetra } = useLetras()
    const [busqueda, setBusqueda] = useState({
        artista: '',
        cancion: ''
    })

    const handleSubmit = e => {
        e.preventDefault()
        if (Object.values(busqueda).includes('')) {
            setAlerta('Ingresa el nombre del artista y la canción')
            return
        }
        busquedaLetra(busqueda)
    }
    return (
        <form
            onClick={handleSubmit}
        >
            <legend>Busca por artistas y canción</legend>
            <div className="form-grid">
                <div className="">
                    <label htmlFor="artista">Artistas</label>
                    <input
                        type="text" name='artista'
                        placeholder='Nombre del artista'
                        value={busqueda.artista}
                        onChange={e => setBusqueda({
                            ...busqueda,
                            [e.target.name]: e.target.value
                        })}
                    />
                </div>

                <div className="">
                    <label htmlFor="cancion">Canción</label>
                    <input
                        type="text" name='cancion'
                        placeholder='Nombre de la canción'
                        value={busqueda.cancion}
                        onChange={e => setBusqueda({
                            ...busqueda,
                            [e.target.name]: e.target.value
                        })}
                    />
                </div>
                <input type="submit" value='Búscar' />

            </div>
        </form>
    )
}

export default Formulario
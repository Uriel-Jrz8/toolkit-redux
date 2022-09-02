import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getPokemons } from './slices/pokemon';







export const PokemonApp = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch( getPokemons() );
    }, [])

    return (
        <>
            <h1>Pokemon</h1>
             <hr/>

            <ul>
                <li>Hola</li>
            </ul>
        </>
    )
}

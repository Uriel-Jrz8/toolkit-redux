import { createSlice } from '@reduxjs/toolkit';

    export const pokemonSlice = createSlice({
        name: 'pokemon',
        initialState: {
             page: 0,
             pokemons: [],
             isLoding: false,
      },
      reducers: {
           startLoadingPokemons: (state, /* action */ ) => {
             state.isLoding = true;
      },
      setPokemons:(state, action) =>{
          console.log(action);
          state.page = action.payload.page;
          state.pokemons = action.page.pokemons;
      }
     }
  });


// Action creators are generated for each case reducer function
export const { startLoadingPokemons, setPokemons } = pokemonSlice.actions;
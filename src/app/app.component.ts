import { Component, OnInit } from '@angular/core'
import { POKEMONS } from '../data/mock-pokemons'
import { Pokemon } from '../shared/models/pokemon'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
    pokemonList: Pokemon[] = POKEMONS
    pokemonSelected: Pokemon | undefined
    pokemonSelectedBySearch: Pokemon[] | undefined

    ngOnInit(): void {
        console.table(this.pokemonList)
    }

    selectPokemon(pokemon: Pokemon) {
        console.log(pokemon)
    }

    selectPokemonBySearch(str: string) {
        if (!str) this.pokemonSelectedBySearch = undefined

        const filteredPokemonList: Pokemon[] = this.pokemonList.filter(
            (pokemon) => pokemon.name.toLowerCase().includes(str.toLowerCase())
        )
        this.pokemonSelectedBySearch = filteredPokemonList
            ? filteredPokemonList
            : undefined
    }
}

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

    ngOnInit(): void {
        console.table(this.pokemonList)
    }

    selectPokemon(pokemonId: string) {
        const pokemon: Pokemon | undefined = this.pokemonList.find(
            (pokemon) => pokemon.id === +pokemonId
        )

        this.pokemonSelected = pokemon ? pokemon : undefined
    }
}

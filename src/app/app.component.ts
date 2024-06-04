import { Component, OnInit } from '@angular/core'
import { POKEMONS } from '../data/mock-pokemons'
import { Pokemon } from '../shared/models/pokemon'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
    pokemonList = POKEMONS

    ngOnInit(): void {
        console.table(this.pokemonList)
        this.selectPokemon(this.pokemonList[0])
    }

    selectPokemon(pokemon: Pokemon) {
        console.log(pokemon)
    }
}

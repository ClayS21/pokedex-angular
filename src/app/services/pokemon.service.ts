import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { Pokemon } from '../types/pokemon.type';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  pokemons: Pokemon[] = [];

  constructor(private httpClient: HttpClient) { 
    this.getPokemons();
  }

  async getPokemons() {
    const request = await firstValueFrom(this.httpClient.get<any>('https://pokeapi.co/api/v2/pokemon?limit=151'));
    this.pokemons = request.results;
  }
}

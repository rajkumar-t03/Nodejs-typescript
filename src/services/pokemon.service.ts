import {Pokemon} from "../models/pokemon.model"
import { WELCOME_MESSAGE } from "../constants/pokeApi.constants";
import { IPokemon } from "../interface/pokeman.interface";

export class PokemonService {
    public getWelcomeMessage() {
      return WELCOME_MESSAGE;
    }

    public findAll(): Promise<IPokemon[]>{
        return Pokemon.find({}).exec();
      }

      public add(pokemon: IPokemon): Promise<IPokemon> {
        const newPokemon = new Pokemon(pokemon);
        return newPokemon.save();
      }
  }

 
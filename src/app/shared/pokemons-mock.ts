import { Pokemon } from './pokemon.model';

//deplacé dans /api 

export const POKEMONS: Pokemon[] = [

    {
      "id": 1,
      "name": "Germignon",
      "type": "Plant",
      "weakness": "Fire",
      "link": "../assets/img/pokemonPhoto/germignon.png",
      "evolution": "Macronium & Méganium"
    },
    {
      "id": 2,
      "name": "Héricendre",
      "type": "Fire",
      "weakness": "Water & Rock",
      "link": "../assets/img/pokemonPhoto/hericendre.png",
      "evolution": "Feurisson & Typhlosion"
    },
    {
      "id": 3,
      "name": "Kaïminus",
      "type": "Water",
      "weakness": "Electric",
      "link": "../assets/img/pokemonPhoto/kaiminus.png",
      "evolution": "Crocrodil & Aligatueur"
    },

];
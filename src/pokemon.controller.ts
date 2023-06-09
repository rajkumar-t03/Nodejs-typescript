import { Request, Response, Router } from "express";
import { PokemonService } from "./services/pokemon.service";

export class PokemonController {
  public router= Router();
  
  constructor(private pokemonService: PokemonService) {
    this.setRoutes();
  }

  public setRoutes() {
    this.router.get("/", this.sayHello);
  }

  private sayHello = (_: Request, res: Response) => {
    const welcomeMessage = this.pokemonService.getWelcomeMessage();
    res.send(welcomeMessage);
  };

  private findAll = async(req: Request, res: Response)=> {
      try{
        const pokemon = await this.pokemonService.findAll();
        res.send(pokemon)

      } catch(error:any) {
        res.status(500).send(error.message);
      }
  }
  
  private add = async (req: Request, res: Response) => {
    try {
      const addPokemonResult = await this.pokemonService.add(req.body);
      res.send(addPokemonResult);
    } catch (e:any) {
      res.status(500).send(e.message);
    }
  }
 
}
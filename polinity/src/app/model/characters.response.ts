import { CharacterModel } from "./character.model";

export class PageableInfoModel {
    count!: number;
    pages!: number;
    next!: string | null;
    prev!: string | null;
  }

export class CharactersResponse {
    info!: PageableInfoModel;
    results!: CharacterModel[];
}
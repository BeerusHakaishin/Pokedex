export class Pokemon {
    id: number;
    name: string;
    type: string;
    weakness: string;
    link: string|undefined;
    evolution: string | undefined;
    
    constructor(id: number, name: string, type: string, weakness: string,link: string|undefined, evolution: string | undefined) {
        (this.id = id),
        (this.name = name),
        (this.type = type),
        (this.weakness = weakness),
        (this.link = link),
        (this.evolution = evolution);
    }
  }
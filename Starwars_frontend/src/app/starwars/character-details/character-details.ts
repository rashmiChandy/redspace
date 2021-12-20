
// Interface for Character Details
export interface CharacterDetails {
    name:string;
    height: string;
    mass: string;
    haircolor:string;
    skinColor:string;
    gender:string;
    birthYear:string;
    homePlanet:HomePlanet,
    films:Film[],
    species:Species[]
}

export interface HomePlanet {
    title:string;
    terrain: string;
    population: string;
}

export interface Film{
    title: string;
    director: string;
    producers: string;
    releaseDate: Date;
}

export interface Species{
    name: string;
    average_lifespan: string;
    classification: string;
    language: string;
}
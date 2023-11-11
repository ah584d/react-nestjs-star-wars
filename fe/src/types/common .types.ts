export interface People {
    name: string;
    height: number;
    mass: number;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: number;
    gender: string;
    homeworld: string;
    films: string[];
    species: [];
    vehicles: string[];
    starships: string[];
    created: Date;
    edited: Date;
    url: string;
}

export interface PeoplePayload {
    count: number;
    next: string;
    previous: string | null;
    results: People[];
}

export interface PlanetsPayload {}

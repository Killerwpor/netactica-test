
export interface Character {
    name: string,
    eye_color: string,
    gender: string,
    films: string[]
}

export interface CharacterWithFilms {
    name: string,
    eye_color: string,
    gender: string,
    films: [{
        name: string,
        opening_crawl: string
    }]
}

export interface Pagination {
    index: number,
    end: number,
}



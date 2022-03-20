export interface Movie {
    title: string,
    episode_id: string,
    opening_crawl: string,
    director: string,
    characters: string[],
    url: string,
}

export interface MoviesApiResponse {
    results: Movie[]
}
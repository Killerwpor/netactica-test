export interface Movie {
    title: string,
    episode_id: string,
    opening_crawl: string,
    director: string,
}

export interface MoviesApiResponse {
    results: Movie[]
}
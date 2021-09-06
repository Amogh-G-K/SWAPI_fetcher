export interface Films {
  movies: [
    title: String,
    episode_id: Number,
    opening_crawl: String,
    director: String,
    producer: String,
    release_date: String,
    characters: String[],
    planets: String[],
    starships: String[],
    vehicles: String[],
    species: String[],
    created: String,
    edited: String,
    url: String
  ];
}

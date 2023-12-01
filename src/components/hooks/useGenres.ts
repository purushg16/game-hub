import genres from "../Data/genre";

export interface Genre {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
}

const useGenres = () => ({ game: genres, err: '', isLoading:false });


export default useGenres
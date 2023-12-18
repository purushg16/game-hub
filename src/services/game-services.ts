import APIClient from "./api-client";
import { Platform } from "./platform-services";

export interface Game {
  id: number;
  name: string;
  slug: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

export default new APIClient<Game>("/games");

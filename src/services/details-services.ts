import APIClient from "./api-client";

export interface GameDeatils {
  id: number;
  name: string;
  slug: string;
  description_raw: string;
}

export default new APIClient<GameDeatils>("/games");

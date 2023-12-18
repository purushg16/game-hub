import APIClient from "./api-client";
import { Game } from "../components/entities/Game";

export default new APIClient<Game>("/games");

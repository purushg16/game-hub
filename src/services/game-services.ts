import { Game } from "../components/entities/Game";
import APIClient from "./api-client";

export default new APIClient<Game>("/games");

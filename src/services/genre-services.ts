import { Genre } from "../components/entities/Genre";
import APIClient from "./api-client";

export default new APIClient<Genre>("/genres");

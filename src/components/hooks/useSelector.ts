import { FetchResponse } from "../../services/api-client";
import { Genre } from "../../services/genre-services";
import { Platform } from "../../services/platform-services";


const useSelector = (data?: FetchResponse<Platform | Genre>, id?:number) => {
    return data?.results.find((platform) => platform.id === id)
}

export default useSelector

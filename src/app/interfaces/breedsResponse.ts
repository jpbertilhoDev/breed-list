import { Breeds } from "./breeds.interface";

export interface BreedResponse {
    current_page: number;
    data: Breeds[];
}
import { Facts } from "./facts.interface";

export interface FactsResponse {
    current_page: number;
    data: Facts[]
}
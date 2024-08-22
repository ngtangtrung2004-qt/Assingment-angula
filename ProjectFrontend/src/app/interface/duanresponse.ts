import { Duan } from "./duan";
export interface DuAnResponse {
    message?: string;
    data?:Duan[];
    page?: number;
    q?: string;
    totalPage?: number;
}
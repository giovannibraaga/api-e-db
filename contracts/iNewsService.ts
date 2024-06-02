import { Result } from "../infra/result";
export interface INewsService {
get(id: string);
getAll(page: number, qtd: number): Promise<Result>;
}
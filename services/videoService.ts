import { IVideosService } from "../contracts/iVideoService";
import { Result } from "../infra/result";
import { Videos } from "../models/video";
import { VideosRepository } from "../repository/videoRepository";

export class VideoService implements IVideosService {
  async get(_id: string): Promise<Videos> {
    let result = await VideosRepository.findById(_id);
    return result;
  }

  async getAll(page: number, qtd: number): Promise<Result<Videos>> {
    let result = new Result<Videos>();
    result.Page = page;
    result.Qtd = qtd;
    result.Total = await VideosRepository.count({});
    result.Data = await VideosRepository.find({})
      .skip(page * qtd - qtd)
      .limit(qtd);
    return result;
  }
}

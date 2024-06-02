import { Request, response, Response } from "express";
import { VideoService } from "../services/videoService";

class VideosController {
  private _service: VideoService;

  constructor() {
    this._service = new VideoService();
  }

  async get(req: Request, res: Response) {
    try {
      const page = req.params.page ? parseInt(req.params.page) : 1;
      const qtd = req.params.qtd ? parseInt(req.params.qtd) : 10;
      let result = await this._service.getAll(page, qtd);
      res.status(200).json({ result });
    } catch (error) {
      res.status(500).json({ error: error.message || error.toString() });
    }
  }

  async getById(req: Request, res: Response) {
    try {
      const _id = req.params.id;
      let result = await this._service.get(_id);
      res.status(200).json({ result });
    } catch (error) {
      res.status(500).json({ error: error.message || error.toString() });
    }
  }
}

export default new VideosController();

import express, { Application, Request, Response } from "express";
import database from "./infra/db";
import NewsController from "./controller/newsController";
import VideosController from "./controller/videoController";
import GaleriaController from "./controller/galeriaController";

class StartUp {
  public app: Application;
  private _db: database = new database();
  constructor() {
    this.app = express();
    this._db.createConnection();
    this.routes();
  }
  routes() {
    /**
     * @description health check
     */
    this.app.route("/").get((req, res) => {
      res.send({ versao: "0.0.2" });
    });

    /**
     * @description news endpoints
     */
    this.app
      .route("/api/v1/news/:page/:qtd")
      .get((req: Request, res: Response) => {
        return NewsController.get(req, res);
      });

    this.app.route("/api/v1/news/:id").get((req: Request, res: Response) => {
      return NewsController.getById(req, res);
    });

    /**
     * @description videos endpoints
     */
    this.app
      .route("/api/v1/videos/:page/:id")
      .get((req: Request, res: Response) => {
        return VideosController.get(req, res);
      });

    this.app.route("/api/v1/video/:id").get((req: Request, res: Response) => {
      return VideosController.getById(req, res);
    });

    /**
     * @description galeria endpoints
     */
    this.app
      .route("/api/v1/galeria/:page/:qtd")
      .get((req: Request, res: Response) => {
        return GaleriaController.get(req, res);
      });

    this.app.route("/api/v1/galeria/:id").get((req: Request, res: Response) => {
      return GaleriaController.getById(req, res);
    });
  }
}
export default new StartUp();

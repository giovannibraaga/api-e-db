import database from "./infra/db";
import express, { Application } from "express";
import "./shared/container";
import newsRouter from "./router/newsRouter";
import videosRouter from "./router/videosRouter";
import galeriaRouter from "./router/galeriaRouter";
import podcastRouter from "./router/podcastRouter";

class StartUp {
  public app: Application;
  private _db: database = new database();
  constructor() {
    this.app = express();
    this._db.createConnection();
    this.routes();
  }
  routes() {
    this.app.route("/").get((req, res) => {
      res.send({ versao: "0.0.3" });
    });

    this.app.use("/", newsRouter);
    this.app.use("/", videosRouter);
    this.app.use("/", galeriaRouter);
    this.app.use("/", podcastRouter);
  }
}
export default new StartUp();

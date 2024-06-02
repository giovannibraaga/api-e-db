"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = __importDefault(require("./infra/db"));
const express_1 = __importDefault(require("express"));
require("./shared/container");
const newsRouter_1 = __importDefault(require("./router/newsRouter"));
const videosRouter_1 = __importDefault(require("./router/videosRouter"));
const galeriaRouter_1 = __importDefault(require("./router/galeriaRouter"));
const podcastRouter_1 = __importDefault(require("./router/podcastRouter"));
class StartUp {
    constructor() {
        this._db = new db_1.default();
        this.app = (0, express_1.default)();
        this._db.createConnection();
        this.routes();
    }
    routes() {
        this.app.route("/").get((req, res) => {
            res.send({ versao: "0.0.3" });
        });
        this.app.use("/", newsRouter_1.default);
        this.app.use("/", videosRouter_1.default);
        this.app.use("/", galeriaRouter_1.default);
        this.app.use("/", podcastRouter_1.default);
    }
}
exports.default = new StartUp();

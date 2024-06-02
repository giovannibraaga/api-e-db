"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const tsyringe_1 = require("tsyringe");
const podcastController_1 = require("../controller/podcastController");
const podcastRouter = (0, express_1.default)();
const podcast = tsyringe_1.container.resolve(podcastController_1.PodcastController);
podcastRouter
    .route("./api/v1/podcast/:page/:qtd")
    .get((req, res) => {
    return podcast.get(req, res);
});
podcastRouter
    .route("/api/v1/podcast/:id")
    .get((req, res) => {
    return podcast.getById(req, res);
});
exports.default = podcastRouter;

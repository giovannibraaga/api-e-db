import "reflect-metadata";
import { container } from "tsyringe";
import { GaleriaService } from "../services/galeriaService";
import { NewsService } from "../services/newsService";
import { VideoService } from "../services/videosService";

container.register("INewsService", {
  useClass: NewsService,
});

container.register("IVideosService", {
  useClass: VideoService,
});

container.register("IGaleriaService", {
  useClass: GaleriaService,
});

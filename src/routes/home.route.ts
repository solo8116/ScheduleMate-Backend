import { Router } from "express";
import { HomeController } from "../controllers";

export class HomeRoute {
  public router: Router;
  private homeController: HomeController;

  constructor() {
    this.router = Router();
    this.homeController = new HomeController();
    this.intializeRoutes();
  }

  intializeRoutes() {
    this.router.post("/", this.homeController.welcome);
  }
}

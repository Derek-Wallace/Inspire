import { ClockController } from "./Controllers/ClockController.js";
// import { ImageController } from "./Controllers/ImageController.js";
import { QuoteController } from "./Controllers/QuoteController.js";
import { TasksController } from "./Controllers/TasksController.js";
import { UserController } from "./Controllers/UserController.js";
import { WeatherController } from "./Controllers/WeatherController.js";


class App {
clockController = new ClockController()
quoteController = new QuoteController()
weatherController = new WeatherController()
// imageController = new ImageController()
tasksController = new TasksController()
userController = new UserController()
}

window["app"] = new App();

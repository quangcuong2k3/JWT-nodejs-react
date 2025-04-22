import express from "express";
import homeController from "../controller/homeController";
import apiController from "../controller/apiController";


const router = express.Router();

const initWebRoutes = (app) => {
    //path, handler
    router.get("/", homeController.handleHelloWorld);
    router.get("/user", homeController.handleUserPage);
    router.post("/users/create-user", homeController.handleCreateNewUser);
    router.post("/delete-user/:id", homeController.handleDeleteUser);
    router.get("/update-user/:id", homeController.getUpdateUserPage);
    router.post("/users/update-user", homeController.handleUpdateUser);

    //rest api
    //GET ,POST,DELETE,PUT
    router.get("/api/test-api", apiController.testApi);

    return app.use("/", router)


}
export default initWebRoutes;
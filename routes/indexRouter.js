const { Router } = require("express");
const indexRouter = Router();
const messagesController = require("../controllers/messagesController")

indexRouter.get("/new", messagesController.newMessageGet);

indexRouter.get("/new/:id", messagesController.getMessageGet)

indexRouter.post("/new", messagesController.newMessagePost)

indexRouter.get("/", messagesController.getAllMessagesGet);

// 404 error handler
indexRouter.get("/*splat", messagesController.notFoundGet);

module.exports = indexRouter;
const { Router } = require("express");
const indexRouter = Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

indexRouter.get("/new", (req, res) => {
  res.render("form");
});

indexRouter.get("/new/:id", (req, res) => {
  const { id } = req.params;
  res.render("messageDetails", {title: "Message Details" , message: messages[id] });
})

indexRouter.post("/new", (req, res) => {
  const messageText = req.body.message;
  const messageUser = req.body.author;
  
  messages.push({
    text: messageText,
    user: messageUser,
    added: new Date()
  });

  res.redirect("/");
})

indexRouter.get("/", (req, res) => {
  res.render("index", {title: "Mini Message Board", messages: messages });
});

// 404 error handler
indexRouter.get("/*splat", (req, res) => res.status(404).send("404 Page Not Found"));

module.exports = indexRouter;
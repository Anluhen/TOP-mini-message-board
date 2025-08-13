const db = require("../db/queries")

async function getAllMessagesGet(req, res) {
  try {
    const messages = await db.getAllMessages();

    res.render("index", {
      title: "Mini Message Board",
      messages: messages,
    });
  } catch(err) {
    res.status(500).send('Something broke in messageController.getAllMessages!');
  }
}

async function getMessageGet(req, res) {
  try {
    const { id } = req.params;
    const message = await db.getMessage(id);

    res.render("messageDetails", {
      title: "Message Details",
      message: message
    });
  } catch (err) {
    res.status(500).send('Something broke in messageController.getMessage!');
  }
}

async function newMessagePost(req, res) {
  try {
    const { text, author } = req.body;

    const message = {
      text: text,
      author: author,
    }

    await db.insertMessage(message);

    res.redirect("/");
  } catch (err) {
    res.status(500).send('Something broke in messageController.newMessagePost!');
  }
}

function newMessageGet(req, res) {
  res.render("form");
}

function notFoundGet(req, res) {
  res.status(404).send("404 Page Not Found");
}

module.exports = {
  getAllMessagesGet,
  getMessageGet,
  newMessageGet,
  newMessagePost,
  notFoundGet
}
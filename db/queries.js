const pool = require("./pool");

async function getAllMessages() {
  try {
    const { rows } = await pool.query("SELECT * FROM messages");
    return rows;
  } catch (err) {
    console.error("getAllMessages error:", err);
    throw err;
  }
}

async function getMessage(id) {
  try {
    const { rows } = await pool.query("SELECT * FROM messages WHERE id = $1", [id]);
    return rows[0];
  } catch (err) {
    console.error(`getMessage id:${id} error:`, err);
    throw err;
  }
}

async function insertMessage(message) {
  try {
    await pool.query(`INSERT INTO messages (text, author) VALUES ($1, $2)`, [message.text, message.author]);
  } catch (err) {
    console.error(`insertMessage error:`, err);
    throw err;
  }
}

module.exports = {
  getAllMessages,
  getMessage,
  insertMessage,
};
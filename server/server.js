const express = require("express");
const fs = require("fs");
const { v4: uuid } = require("uuid");
const port = 8000;
const app = express();

app.use(express.json());

// GET
app.get("/api/users", (req, res) => {
  const { users } = JSON.parse(
    fs.readFileSync("users.json", { encoding: "utf-8" })
  );
  res.status(200).json({ message: "SUCCES!", users });
});

// POST
app.post("/api/users", (req, res) => {
  const newUser = { id: uuid(), ...req.body };
  const { users } = JSON.parse(
    fs.readFileSync("users.json", { encoding: "utf-8" })
  );
  users.push(newUser);
  fs.writeFileSync("users.json", JSON.stringify({ users }), {
    encoding: "utf-8",
  });
  res.status(200).json({ message: "SUCCESFULLY CREATED USER!", users });
});

// PUT
app.put("/api/users/:id", (req, res) => {
  const { id } = req.params;
  const { users } = JSON.parse(
    fs.readFileSync("users.json", { encoding: "utf-8" })
  );
  const index = users.findIndex((el) => el.id === id);
  users[index].name = "Bold";
  fs.writeFileSync("users.json", JSON.stringify({ users }), {
    encoding: "utf-8",
  });
  res.status(200).json({ message: "SUCCESFULLY CHANGED NAME!", users });
});

// DELETE
app.delete("/api/users/:id", (req, res) => {
  console.log("Delete user by id");
  const { id } = req.params;
  const { users } = JSON.parse(
    fs.readFileSync("users.json", { encoding: "utf-8" })
  );
  const index = users.findIndex((el) => el.id === id);
  if (index < 0) {
    res.status(400).json({ message: `${id}tai hereglegch oldsongui` });
  } else {
    users.splice(index, 1);
  }
  fs.writeFileSync("users.json", JSON.stringify({ users }), {
    encoding: "utf-8",
  });
  res.status(200).json({ message: `${id} tai hereglegchiid ustgalaa` });
});

app.listen(port, () => {
  console.log("Server is running");
});

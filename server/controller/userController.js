const { v4: uuidv4 } = require("uuid");
const fs = require("fs");

const getAllUser = (req, res) => {
  console.log("Get all users");
  const { users } = JSON.parse(
    fs.readFileSync("users.json", { encoding: "utf-8" })
  );
  res.status(200).json({ message: "success", users });
};

const getUserById = (req, res) => {
  console.log("Get an user by ID");
  const { users } = JSON.parse(
    fs.readFileSync("users.json", { encoding: "utf-8" })
  );
  const findUser = users.filter((user) => user.id === req.params.userId);
  if (findUser.length === 0) {
    res.status(400).json({ message: `${userId} тай хэрэглэгч олдсонгүй.` });
  } else {
    res.status(200).json({ message: "success", user: findUser[0] });
  }
};

const createUser = (req, res) => {
  console.log("Create new user");
  const newUser = { id: uuidv4(), ...req.body };

  const { users } = JSON.parse(
    fs.readFileSync("users.json", { encoding: "utf-8" })
  ); // {users: []}

  users.push(newUser);

  fs.writeFileSync("users.json", JSON.stringify({ users }), {
    encoding: "utf-8",
  });
  res.status(201).json({ message: "success" });
};

const updateUserById = (req, res) => {
  console.log("Update user by id");
  const { userId } = req.params;
  const { users } = JSON.parse(
    fs.readFileSync("users.json", { encoding: "utf-8" })
  );
  let index = users.findIndex((user) => user.id === userId);

  if (index === -1) {
    res.status(400).json({ message: `${userId} тай хэрэглэгч олдсонгүй.` });
  } else {
    users[index] = { ...users[index], ...req.body };
    fs.writeFileSync("users.json", JSON.stringify({ users }), {
      encoding: "utf-8",
    });
    res.status(200).json({
      message: `${userId} тай хэрэглэгчийг шинэчиллээ.`,
      user: users[index],
    });
  }
};

const deleteUserById = (req, res) => {
  console.log("Delete user by id");
  const { userId } = req.params;
  const { users } = JSON.parse(
    fs.readFileSync("users.json", { encoding: "utf-8" })
  );
  const index = users.findIndex((el) => el.id === userId);
  if (index < 0) {
    res.status(400).json({ message: `${userId} тай хэрэглэгч олдсонгүй.` });
  } else {
    users.splice(index, 1);

    fs.writeFileSync("users.json", JSON.stringify({ users }), {
      encoding: "utf-8",
    });
    res.status(200).json({ message: `${userId} тай хэрэглэгч устгалаа.` });
  }
};

module.exports = {
  createUser,
  getAllUser,
  getUserById,
  updateUserById,
  deleteUserById,
};

let users = [];

let home = (req, res) => {
  res.status(200).render("index");
};

let enterChat = (req, res) => {
  let newName = req.body.name;

  let checkUser = users.includes(newName);

  if (checkUser) {
    // Already exists: show error page
    console.log("User exists. Cannot enter chat.");
    res.status(409).render("chatroom", {
      data: false,
      message: `❌ User "${newName}" already exists! Try a different name.`,
    });
  } else {
    // New user: add and redirect to welcome page
    users.push(newName);
    console.log("New user added!");

    res.redirect(`/chatroom/${newName}`); // You can customize age/city or get from user
  }
};

let getHome = (req, res) => {
  const { name } = req.params;

  try {
    if (!name) {
      throw "❗ Missing required user data";
    }

    const data = { name };
    res.status(200).render("chatroom", { data });
  } catch (err) {
    res.status(400).render("chatroom", { data: false, message: err });
  }
};

export { home, enterChat, getHome };

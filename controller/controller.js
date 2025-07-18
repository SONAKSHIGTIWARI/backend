import { name } from "ejs"

let users = []

let home = (req, res) => {
    res.status(200).render("index")
}

let enterChat = (req, res) => {
    console.log(req.body.name)

    let newName = req.body.name


    let checkUser = users.filter((user) => user == newName)

    if (checkUser.length != 0) {
        console.log("user exits cannot enter chat !")
    } else {
        users.push(newName)
        console.log("new user added !")
    }

    res.status(202).redirect("/")
}

export { home, enterChat }
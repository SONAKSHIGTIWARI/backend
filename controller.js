let data = [
    { name: "Grinning Face", icon: "😀", code: "U+1F600" },
    { name: "Thumbs Up", icon: "👍", code: "U+1F44D" },
    { name: "Red Heart", icon: "❤️", code: "U+2764" },
    { name: "Tears of Joy", icon: "😂", code: "U+1F602" },
    { name: "Sunglasses", icon: "😎", code: "U+1F60E" },
    { name: "Thinking Face", icon: "🤔", code: "U+1F914" },
    { name: "Clapping Hands", icon: "👏", code: "U+1F44F" },
    { name: "Rocket", icon: "🚀", code: "U+1F680" },
    { name: "Fire", icon: "🔥", code: "U+1F525" },
    { name: "Party Popper", icon: "🎉", code: "U+1F389" }
];

let getHome = (req, res) => {
    // res.status(200).json({ message: "this is home page" })
    res.status(200).render("index", { emojies: data, craetedBy: "Amey Khondekar" })
}

let getAbout = (req, res) => {
    // res.status(200).json({ message: "this is about page" })
    res.status(200).render("about")
}

let getContact = (req, res) => {
    // res.status(200).json({ message: "this is contact page" })
    res.status(200).render("contact", { message: "" })
}

let postContact = (req, res) => {
    console.log("trying to post data from form")
    console.log(req.body)
    res.status(202).render("contact", { message: "data reached the server !" })
}

let addEmoji = (req,res) => {
    console.log("trying to add emoji")
    console.log(req.body)

    data = [...data, req.body]

    res.status(202).render("index", { emojies: data, craetedBy: "Amey Khondekar" })

}

export { getHome, getAbout, getContact, postContact, addEmoji }
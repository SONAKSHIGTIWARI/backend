import { technologies } from "../database.js";

let getRandomTechnology = (req, res) => {

    let randomNumber = Math.round((Math.random() * 49) + 1)

    let data = technologies.filter((technology) => { return randomNumber == technology.id })

    res.status(200).json({ message: "the random technology to learn !", technology: data })
}

let getFiltredTechnologies = (req, res) => {
    let { difficulty } = req.query

    let { duration } = req.query

    let { scope } = req.query

    console.log(req.query)

    try {
        if (!difficulty && !duration && !scope) {
            throw ("invalid request please set difficulty/duration parameters !")
        }

        let data = technologies

        if (difficulty) {
            data = data.filter((technology) => {
                return technology.difficulty.toLowerCase() == difficulty.toLowerCase()
            })
        }

        if (duration) {
            data = data.filter((technology) => {
                return technology.duration == duration
            })
        }

        if (scope) {
            data = data.filter((technology) => {
                return technology.scope.some((item) => {
                    return item.toLowerCase() === scope.toLowerCase()
                }
                )
            })
        }

        if (data.length < 1) {
            throw ("data not found !")
        }

        res.status(200).json({ message: "data you were requesting !", we_got: `${data.length} matching results`, data })

    } catch (err) {
        res.status(400).json({ message: err })
    }

}


let getTechnologyBasedOnId = (req, res) => {
    try {

        let { id } = req.params


        if (isNaN(id)) {
            throw ({ status: 400, message: "id not provided/invalid !" })
        }

        let data = technologies.filter(technology => technology.id == id)

        if (data.length < 1) {
            throw ({ status: 404, message: `technology not found for id ${id}` })
        }

        res.status(200).json({ message: "the tech you were requesting is : ", data })

    } catch (err) {
        res.status(err.status).json({ message: err.message })
    }
}

let getTechnologyByIdFilter = (req, res) => {
    try {
        let { id } = req.params;

        if (isNaN(id)) {
            throw { status: 400, message: "ID must be a number!" };
        }

        let data = technologies.filter((tech) => tech.id == id);

        if (data.length < 1) {
            throw { status: 404, message: `No technology found with id ${id}` };
        }

        res.status(200).json({
            message: `Technology data for ID: ${id}`,
            data
        });
    } catch (err) {
        res.status(err.status || 500).json({ message: err.message || "Internal Server Error" });
    }
};


export {
    getRandomTechnology,
    getFiltredTechnologies,
    getTechnologyBasedOnId,
    getTechnologyByIdFilter 
}

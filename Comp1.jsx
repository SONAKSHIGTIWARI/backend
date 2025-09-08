import React from 'react'

import { useState } from 'react'

import "./style.css"

let personsData = [
    { name: "person 1", phone: 132 },
    { name: "person 2", phone: 145 },
    { name: "person 3", phone: 167 },
    { name: "person 4", phone: 189 },
    { name: "person 5", phone: 210 },
]

const Comp1 = () => {

    let data = false

    // how to create a state using useState()

    let [flag, setFlag] = useState(true)

    let [persons, setPersons] = useState(personsData)

    // here flag is a state variable

    function changeData() {
        console.log(data)
        data = !data
    }

    function changeFlag() {
        // setFlag(()=>{
        //     return !flag
        // })
        setFlag(!flag)
    }

    return (
        <>
            <div>
                <h1 className={data ? 'red' : 'blue'}>this is heading</h1>
                <button onClick={changeData}>click</button>
            </div>

            <div>
                <h1 className={flag ? 'red' : 'blue'}>this is heading again</h1>
                <button onClick={() => { changeFlag() }}>click</button>
            </div>

            <table border="1" >
                <tr>
                    <th>Name</th>
                    <th>Phone</th>
                </tr>

                {/* rows from here should be displayed based on array */}
                {/* 
                {
                    persons.length == 0 ? <h1>No person to display</h1> :
                        persons.map((person, index) => {
                            return (
                                <tr key={index}>
                                    <td>{person.name}</td>
                                    <td>{person.phone}</td>
                                </tr>
                            )
                        })
                } */}


                {
                    persons.length != 0 &&
                    persons.map((person, index) => {
                        return (
                            <tr key={index}>
                                <td>{person.name}</td>
                                <td>{person.phone}</td>
                            </tr>
                        )
                    })
                }

            </table>

        </>
    )
}

export default Comp1
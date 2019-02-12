import React from "react";

var people = [{
    name : 'Chudi',
    age: 10,
    Hobbies: 'Singing , Dancing '
},
{
    name : 'Tony',
    age: 20,
    Hobbies: 'Eating',
},
{
    name : 'Arnold',
    age: 25,
    Hobbies:'Playing'
},
{
    name : 'Chudi',
    age: 28,
    Hobbies: 'Running'
},
{
    name : 'Richard',
    age: 20,
    Hobbies: 'Coding'
},
]



class Newproject extends React.Component{
    render(){
        return <div>
            {
                people.map(function(person, index){
                    return <h1 key={index}> Name: {person.name}. Age:{person.age}. Hobbies include:{person.Hobbies}.</h1>
                })
            }
        </div>
    }

}
export default Newproject;
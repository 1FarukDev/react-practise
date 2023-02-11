// import React from "react";
// export default function Form(){
//     const [firstName, setFirstName] = React.useState("")
//     const [LastName, setLastName] = React.useState("")
//     console.log(firstName, LastName)
//     function handleFisrtChange(event){
//         // console.log("Changed")
//         setFirstName(event.target.value)
//     }
//     function handleLastChange(event){
//         // console.log("Changed")
//         setLastName(event.target.value)
//     }
//     return(
//         <form>
//             <input type="text"
//             placeholder="First Name"
//             onChange={handleFisrtChange}
//             />
//              <input type="text"
//             placeholder="Last Name"
//             onChange={handleLastChange}
//             />
//         </form>
//     )
// }



// Form Object
import React from "react";
export default function Form(){
    const [formData, setFormData] = React.useState(
        {firstName : "", lastName : ""}
    )
    // const [LastName, setLastName] = React.useState("")
    console.log(formData)
    function handleChange(event){
        // console.log("Changed")
        // console.log(event.target.name)
        setFormData(prevFormData => {
            return{
                ...prevFormData, 
                [event.target.name] : event.target.value
            }
        })
    }
    return(
        <form>
            <input type="text"
            placeholder="First Name"
            onChange={handleChange}
            name="firstName"
            />
             <input type="text"
            placeholder="Last Name"
            onChange={handleChange}
            name="lastName"
            />
        </form>
    )
}
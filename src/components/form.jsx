// // import React from "react";
// // export default function Form(){
// //     const [firstName, setFirstName] = React.useState("")
// //     const [LastName, setLastName] = React.useState("")
// //     console.log(firstName, LastName)
// //     function handleFisrtChange(event){
// //         // console.log("Changed")
// //         setFirstName(event.target.value)
// //     }
// //     function handleLastChange(event){
// //         // console.log("Changed")
// //         setLastName(event.target.value)
// //     }
// //     return(
// //         <form>
// //             <input type="text"
// //             placeholder="First Name"
// //             onChange={handleFisrtChange}
// //             />
// //              <input type="text"
// //             placeholder="Last Name"
// //             onChange={handleLastChange}
// //             />
// //         </form>
// //     )
// // }



// // Form Object
// // import React from "react";
// // export default function Form(){
// //     const [formData, setFormData] = React.useState(
// //         {
// //         firstName : "", 
// //         lastName : "", 
// //         email : "", 
// //         comment : "",
// //         isFriendly : true
// //     }
// //     )
// //     // const [LastName, setLastName] = React.useState("")
// //     console.log(formData)
// //     function handleChange(event){
// //         // console.log("Changed")
// //         // console.log(event.target.name)
// //         setFormData(prevFormData => {
// //             const {name, value, type, checked} = event.target
// //             return{
// //                 ...prevFormData, 
// //                 [name] : type === "checked" ? checked : value
// //             }
// //         })
// //     }
// //     return(
// //         <form>
// //             <input type="text"
// //             placeholder="First Name"
// //             onChange={handleChange}
// //             name="firstName"
// //             />
// //              <input type="text"
// //             placeholder="Last Name"
// //             onChange={handleChange}
// //             name="lastName"
// //             />
// //             <input type="email"
// //             placeholder="Email"
// //             onChange={handleChange}
// //             name="email"
// //             />
// //             <textarea name="comment" id="" cols="30" rows="10"
// //             onChange={handleChange}
// //             />
// //             <input type="checkbox"
// //             onChange={handleChange}
// //             name="isFriendly"
// //             /> <label htmlFor="isFriendly">Are you Friendly?</label>
// //         </form>
// //     )
// // }

// // Radio Buttons

// // import React from "react"

// // export default function Form() {
// //     const [formData, setFormData] = React.useState(
// //         {
// //             firstName: "", 
// //             lastName: "", 
// //             email: "", 
// //             comments: "", 
// //             isFriendly: true,
// //             employment: ""
// //         }
// //     )
// //     console.log(formData.employment)
    
// //     function handleChange(event) {
// //         const {name, value, type, checked} = event.target
// //         setFormData(prevFormData => {
// //             return {
// //                 ...prevFormData,
// //                 [name]: type === "checkbox" ? checked : value
// //             }
// //         })
// //     }
    
// //     return (
// //         <form>
// //             <input
// //                 type="text"
// //                 placeholder="First Name"
// //                 onChange={handleChange}
// //                 name="firstName"
// //                 value={formData.firstName}
// //             />
// //             <input
// //                 type="text"
// //                 placeholder="Last Name"
// //                 onChange={handleChange}
// //                 name="lastName"
// //                 value={formData.lastName}
// //             />
// //             <input
// //                 type="email"
// //                 placeholder="Email"
// //                 onChange={handleChange}
// //                 name="email"
// //                 value={formData.email}
// //             />
// //             <textarea 
// //                 value={formData.comments}
// //                 placeholder="Comments"
// //                 onChange={handleChange}
// //                 name="comments"
// //             />
// //             <input 
// //                 type="checkbox" 
// //                 id="isFriendly" 
// //                 checked={formData.isFriendly}
// //                 onChange={handleChange}
// //                 name="isFriendly"
// //             />
// //             <label htmlFor="isFriendly">Are you friendly?</label>
// //             <br />
// //             <br />
            
// //             <fieldset>
// //                 <legend>Current employment status</legend>
                
// //                 <input 
// //                     type="radio"
// //                     id="unemployed"
// //                     name="employment"
// //                     value="unemployed"
// //                     checked={formData.employment === "unemployed"}
// //                     onChange={handleChange}
// //                 />
// //                 <label htmlFor="unemployed">Unemployed</label>
// //                 <br />
                
// //                 <input 
// //                     type="radio"
// //                     id="part-time"
// //                     name="employment"
// //                     value="part-time"
// //                     checked={formData.employment === "part-time"}
// //                     onChange={handleChange}
// //                 />
// //                 <label htmlFor="part-time">Part-time</label>
// //                 <br />
                
// //                 <input 
// //                     type="radio"
// //                     id="full-time"
// //                     name="employment"
// //                     value="full-time"
// //                     checked={formData.employment === "full-time"}
// //                     onChange={handleChange}
// //                 />
// //                 <label htmlFor="full-time">Full-time</label>
// //                 <br />
                
// //             </fieldset>
// //         </form>
// //     )
// // }
//                             // Challenge
// import React, { useState } from "react"
//  import '../form.css'
// export default function App() {
//     const [formData, setFormData] = useState({
//       email : "",
//       password : "",
//       confirmPassword : "",
//       okayToEmail : true
//     })
//     /**
//      * Challenge: Connect the form to local state
//      * 
//      * 1. Create a state object to store the 4 values we need to save.
//      * 2. Create a single handleChange function that can
//      *    manage the state of all the inputs and set it up
//      *    correctly
//      * 3. When the user clicks "Sign up", check if the 
//      *    password & confirmation match each other. If
//      *    so, log "Successfully signed up" to the console.
//      *    If not, log "passwords to not match" to the console.
//      * 4. Also when submitting the form, if the person checked
//      *    the "newsletter" checkbox, log "Thanks for signing
//      *    up for our newsletter!" to the console.
//      */
//     function handleChange(event){
//         console.log(formData)
//         const {name, value, type, checked} = event.target
//         setFormData(prevFormData => {
//             return{
//                 ...prevFormData,  
//                 [name] : type === "checkbox" ? checked : value
//             }
//         })
//     }
//     function handleSubmit(event) {
//         event.preventDefault()
//         if(formData.password === formData.confirmPassword){
//             console.log("Successfully signed up")
//         }else{
//             console.log("passwords do not match")
//             return
//         }
//         if(formData.okayToEmail === true){
//             console.log("Thanks for signing up for our newsletter!")
//         }
//     }
    
    
//     return (
//         <div className="form-container">
//             <form className="form" onSubmit={handleSubmit}>
//                 <input 
//                     type="email" 
//                     placeholder="Email address"
//                     className="form--input"
//                     onChange={handleChange}
//                     name="email"
//                     value={formData.email}
//                 />
//                 <input 
//                     type="password" 
//                     placeholder="Password"
//                     className="form--input"
//                     onChange={handleChange}
//                     name ="password"
//                     value={formData["password"]}
//                 />
//                 <input 
//                     type="password" 
//                     placeholder="Confirm password"
//                     className="form--input"
//                     onChange={handleChange}
//                     name="confirmPassword"
//                     value={formData.confirmPassword}
//                 />
                
//                 <div className="form--marketing">
//                     <input
//                         id="okayToEmail"
//                         type="checkbox"
//                         name="okayToEmail"
//                         checked={formData.join}
//                         onChange={handleChange}
//                     />
//                     <label htmlFor="okayToEmail">I want to join the newsletter</label>
//                 </div>
//                 <button 
//                     className="form--submit"
//                 >
//                     Sign up
//                 </button>
//             </form>
//         </div>
//     )
// }

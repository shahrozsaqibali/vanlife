import React from "react"
import CloseIcon from "../assets/imgs/closeicon.png"
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';


export default function PlatiniumForm(props){


    const [formData, setFormData] = React.useState({
        firstName: "",
        lastName:"",
        email: "",
        phone:"",
        helpwith:""
    })



    function handleChange(event){
       
        const {name,value} = event.target

        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]:value
            }
        })
    }

    function setPhoneNumber(phone){
        setFormData(prevFormData => {
            return{
                ...prevFormData,
                "phone" : phone
            }
        })
    }


    function submitformData(event){
        event.preventDefault()
        console.log(formData)
    }




    return (
        <div className="PlatiniumForm-Root"> 
            <div className="PlatniumForm-form"  >
                  <div className="PlatniumForm-title">
                        <h2>Platinum access</h2>
                        <img src={CloseIcon} onClick={props.closePlatniumForm} />
                  </div>
                  <form className="PlatniumForm-content">
                        <div>
                            <label>First Name*</label> <br />
                            <input type="text" 
                             onChange={handleChange}
                             name="firstName"
                             value={formData.firstName}

                            />
                        </div>

                        <div>
                            <label>Last Name*</label><br />
                            <input type="text" 
                              onChange={handleChange}
                              name="lastName"
                              value={formData.lastName}
                              />
                        </div>

                        <div>
                            <label>Email Address*</label><br />
                            <input type="email" 
                                 onChange={handleChange}
                                 name="email"
                                 value={formData.email}
                            />
                        </div>

                        <div>
                            <label>Phone Number*</label><br />
                            <PhoneInput className="PhoneInput"
                                defaultCountry="ca"
                                onChange={setPhoneNumber}
                            
                            />
                        </div>

                        <div>
                            <label>What do you need help with?</label><br />
                            <textarea 
                              onChange={handleChange}
                              name="helpwith"
                              value={formData.helpwith}
                            />
                        </div>
                        <button onClick={submitformData}>Contact Us</button>
                  </form>

                  <div className="PlatniumForm-footer">
                      <button className="pf-btncall">Call</button>
                      <button className="pf-btntext">Text</button>
                      <button className="pf-whatsapp">Whatsapp</button>

                  </div>
            </div>
        </div>
    )
}
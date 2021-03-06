
import React,{Component} from "react";
import axios from 'axios';
import "./Contact.css";
import iziToast from 'izitoast';
import Header from '../common/header/Header'
import Footer from "../common/footer/Footer";

import '../common/toaster.css'

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {
                fullName: "",
                email: "",
                phoneNumber: "",
                message: "",
            },
        };
    }
    fetchData = () => {
        axios({
          method: "POST",
          url: "https://rachana-portfolio-api.herokuapp.com/contact",
          data: {
            fullName: this.state.formData.fullName,
            phoneNumber: this.state.formData.phoneNumber,


            email: this.state.formData.email,
            message: this.state.formData.message,
          },
        })
        .then((res) => {
            console.log(res);
        }).catch((err) => {
        console.log(err);
        });
    }


    handleChange = (event) => {
        this.setState({
            formData : {
                ...this.state.formData,
                [event.target.name]:event.target.value
            }
        })
        console.log(this.state.formData)
    }
    handleSubmit = (event) => {
        event.preventDefault();
        
    }

    handleSubmit = (event) => {
        event.preventDefault();
                iziToast.success({
                    message: `Form was successfully submitted`,
                }); 
    }

    
    render(){
        const token= localStorage.getItem('Token');
        const { fullName, email,phoneNumber,message } = this.state.formData;
        console.log(this.state.formData)
        return(
            <div>
               <Header />
               <div className="container__contact ">
               {token?
                            <button className="btn-edit" style={{float:"left"}}>
                                <i class="fas fa-edit"></i>
                            </button>
                            :null
                            }
                   <div className="contact__information ">
                        <div className="contact__medium">
                            <i class="fas fa-envelope-square"></i>rachanakafle32@gmail.com
                        </div> 
                        <div className="contact__medium">
                        <i class="fas fa-phone"></i>+977 9842518084
                        </div>  
                        <div className="contact__medium">
                        <i class="fa fa-map-marker" aria-hidden="true"></i>Sanothimi, Bhaktapur
                        </div>
                        <div class="social__icons">
                            <div class='social__media'>
                                <a href="https://www.facebook.com/profile.php?id=100005656457913"><i class="fab fa-facebook-f"></i></a>
                            </div>
                            <div class='social__media'>
                                <a href="https://www.instagram.com/rachana_kafle/?hl=en">
                                    <i class="fab fa-instagram"></i>
                                </a>
                            </div>
                            <div class='social__media'>
                                <a href="https://www.linkedin.com/in/rachanakafle/">
                                    <i class="fab fa-linkedin"></i>
                                </a>
                            </div>
                    </div>

                   </div>
                <div className="contact__form">
                    <h1>Contact Form</h1>
                    <form onSubmit={this.handleSubmit}>
                        <label htmlFor="name">Full Name</label><br/>
                        <input onChange={this.handleChange} type="text" id="fullName" name="fullName" value={fullName} placeholder="Enter your fullname" required/><br/>                    
                        <label htmlFor="email">Email</label><br/>
                        <input onChange={this.handleChange} type="email" id="email" name="email" value={email} placeholder="Enter your email" required/><br/>                                      
                        <label htmlFor="number">Phone Number</label><br/>
                        <input onChange={this.handleChange} type="text" id="phoneNumber" name="phoneNumber" value={phoneNumber} placeholder="Enter your phonenumber" required/><br/> 
                        <label htmlFor="number">Message</label><br/>
                        <textarea htmlFor="message" onChange={this.handleChange} id="message" name="message" value={message} placeholder="Enter your message" required></textarea><br/>
                        <button type="submit" onClick={this.fetchData} >Submit </button> 
                    </form>
                   </div>
               </div>  
               <Footer />           
            </div>
        )

    }
}
export default Contact
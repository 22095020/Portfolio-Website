import React from 'react'
import './contact.css'

const Contact = () => {
    const [result, setResult] = React.useState("");
    // using web3, can also use email.js
    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
    
        formData.append("access_key", "0caddbfa-cd4f-4bf9-82f5-a0fb9c786711");
    
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
    
        const data = await response.json();
    
        if (data.success) {
          setResult("Form Submitted Successfully");
          event.target.reset();
        } else {
          console.log("Error", data);
          setResult(data.message);
        }
      };







  return (
    <section className='contact section' id="contact">
        <h2 className='section_title'>Get In Touch</h2>
        {/* <span className='section_subtitle'>Contact Me</span> */}

        <div className='contact_container container grid'>
            <div className='contact_content'>
                <h3 className='contact_title'>Talk To Me</h3>

                <div className='contact_info'>
                    <div className='contact_card'>
                        <i className='bx bx-mail-send contact_card-icon'></i>

                        <h3 className='contact_card-title'>Email</h3>
                        <span className='contact_card-data'>ayushi.kumari.ece22@itbhu.ac.in</span>
                        
                        {/* <a href="ayushi.kumari.ece22@itbhu.ac.in" className='contact_button'>Write Me <i className='bx bx-right-arrow-alt contact_button-icon'></i>
                        </a> */}
                    </div>

                    <div className='contact_card'>
                        <i className='bx bxl-whatsapp contact_card-icon'></i>

                        <h3 className='contact_card-title'>Whatsapp</h3>
                        <span className='contact_card-data'>+91-9835057844</span>
                        
                        {/* <a href="https://whatsapp.com/dl/" className='contact_button'>Write Me <i className='bx bx-right-arrow-alt contact_button-icon'></i>
                        </a> */}
                    </div>

                    <div className='contact_card'>
                        <i className='bx bx contact_card-icon'></i>

                        <h3 className='contact_card-title'>Address</h3>
                        <span className='contact_card-data'>Gaya,Bihar</span>
                        
                        {/* <a href="https://whatsapp.com/dl/" className='contact_button'>Write Me <i className='bx bx-right-arrow-alt contact_button-icon'></i>
                        </a> */}
                    </div>
                </div>
            </div>

            <div className='contact_content'>
                <h3 className='contact_title'>Write your message</h3>

                <form  onSubmit= {onSubmit} className='contact_form'>
                    <div className='contact_form-div'>
                        <label className='contact_form-tag'>Name</label>
                        <input type="text" name="name" className='contact_form-input' placeholder='Insert your name'/>
                    </div>

                    <div className='contact_form-div'>
                        <label className='contact_form-tag'>E mail</label>
                        <input type="email" name="email" className='contact_form-input' placeholder='Insert your email'/>
                    </div>

                    <div className='contact_form-div contact_form-area'>
                        <label className='contact_form-tag'>Message</label>
                        <textarea name="project" cols="30" rows="10" className='contact_form-input' placeholder='Write your message'>   
                        </textarea>
                    </div>

                    <div className='contact-submit'>
                    <button type="submit" className='btn'>Submit Now</button>
                    </div>

                </form>
                <span>{result}</span>
            </div>
        </div>
    </section>
  )
}

export default Contact
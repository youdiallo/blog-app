import { useRef } from 'react';
import classes from './contact-form.module.css';

function ContactForm() {

    const nameRef = useRef();
    const emailRef = useRef();
    const messageRef = useRef();

    function formSubmitHandler(event) {
        event.preventDefault();

        const enteredEmail = emailRef.current.value;
        const enteredName = nameRef.current.value;
        const enteredMessage = messageRef.current.value;
        
        //Optional input validation
        fetch('/api/contact', {
            method: 'POST',
            body: JSON.stringify({
                email: enteredEmail,
                name: enteredName,
                message: enteredMessage
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
        });
    }

    return (
        <section className={classes.contact}>
            <h1>How can I help you?</h1>
            <form className={classes.form} onSubmit={formSubmitHandler}>
                <div className={classes.controls}>
                    <div className={classes.control}>
                        <label htmlFor='email'>Your Email</label>
                        <input type='email' id='email' required ref={emailRef}/>
                    </div>
                    <div className={classes.control}>
                        <label htmlFor='name'>Your Name</label>
                        <input type='text' id='name' required ref={nameRef}/>
                    </div>
                </div>
                <div className={classes.control}>
                    <label htmlFor='message'>Your Message</label>
                    <textarea id='message' rows='5' required ref={messageRef}></textarea>
                </div>

                <div className={classes.actions}>
                    <button>Send Message</button>
                </div>
            </form>

        </section>
    );
}

export default ContactForm;
import { useRef, useState, useEffect } from 'react';
import classes from './contact-form.module.css';
import Notification from '../../ui/notification';

async function sendContactData(contactData) {
    const response =  await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(contactData),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const rspData = await response.json();

    if(!response.ok) {
        throw new Error(rspData.message || 'Something went wrong!');
    }
}

function ContactForm() {

    const nameRef = useRef();
    const emailRef = useRef();
    const messageRef = useRef();

    const [ requestStatus, setResquestStatus] = useState(); //'pendding', 'success', or 'error'
    const [ requestError, setResquestError ] = useState();

    useEffect(() => {

        if(requestStatus === 'success' || requestStatus === 'error') {
            const timer = setTimeout(() => {
                setResquestStatus(null);
                setResquestError(null);
            }, 3000);

            return () => clearTimeout(timer);
        }

    }, [requestStatus])

    async function formSubmitHandler(event) {
        event.preventDefault();

        const enteredEmail = emailRef.current.value;
        const enteredName = nameRef.current.value;
        const enteredMessage = messageRef.current.value;
        
        setResquestStatus('pending');
        try {
            await sendContactData({
                email: enteredEmail,
                name: enteredName,
                message: enteredMessage
            });
            setResquestStatus('success');
            emailRef.current.value = '';
            nameRef.current.value = '';
            messageRef.current.value = '';
        } catch (error) {
            setResquestError(error.message);
            setResquestStatus('error');
        } 
    }

    let notification;

    if(requestStatus === 'pending') {
        notification = {
            status: 'pending',
            title: 'Sending message...',
            message: 'Your message is on its way!'
        };
    }

    if(requestStatus === 'success') {
        notification = {
            status: 'success',
            title: 'Success!',
            message: 'Message sent successfuly'
        };
    }

    if(requestStatus === 'error') {
        notification = {
            status: 'error',
            title: 'Error!',
            message: requestError
        };
    }

    return (
      <section className={classes.contact}>
        <h1>How can I help you?</h1>
        <form className={classes.form} onSubmit={formSubmitHandler}>
          <div className={classes.controls}>
            <div className={classes.control}>
              <label htmlFor="email">Your Email</label>
              <input type="email" id="email" required ref={emailRef} />
            </div>
            <div className={classes.control}>
              <label htmlFor="name">Your Name</label>
              <input type="text" id="name" required ref={nameRef} />
            </div>
          </div>
          <div className={classes.control}>
            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              rows="5"
              required
              ref={messageRef}
            ></textarea>
          </div>

          <div className={classes.actions}>
            <button>Send Message</button>
          </div>
        </form>

        {notification && (
          <Notification
            status={notification.status}
            title={notification.title}
            message={notification.message}
          />
        )}
      </section>
    );
}

export default ContactForm;
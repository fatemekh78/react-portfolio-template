import React, { useRef, useState } from 'react';
import '../assets/styles/Contact.scss';
import emailjs from '@emailjs/browser';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';

function Contact() {

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  const form = useRef<any>();

  const sendEmail = (e: any) => {
    e.preventDefault();

    const isNameEmpty = name === '';
    const isEmailEmpty = email === '';
    const isMessageEmpty = message === '';

    setNameError(isNameEmpty);
    setEmailError(isEmailEmpty);
    setMessageError(isMessageEmpty);

    if (!isNameEmpty && !isEmailEmpty && !isMessageEmpty) {
      const templateParams = {
        name: name,
        email: email,
        message: message
      };

      const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID || '';
      const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || '';
      const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || '';

      emailjs.send(serviceId, templateId, templateParams, publicKey).then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          setName('');
          setEmail('');
          setMessage('');
          alert("Message sent successfully!");
        },
        (error) => {
          console.log('FAILED...', error);
          alert("Failed to send message. Please try again later.");
        },
      );
    }
  };

  // Explicit safety styling to fix contrast issues across dark/light themes
  const textFieldsStyles = {
    "& .MuiInputBase-input": {
      color: "inherit", // Forces the input text to match the template font color
    },
    "& .MuiInputLabel-root": {
      color: "gray", // Keeps placeholder labels visible
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "rgba(128, 128, 128, 0.4)",
      },
    }
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>Got a project waiting to be realized? Let's collaborate and make it happen!</p>
          
          <div style={{ marginBottom: '20px', fontSize: '1.1rem' }}>
            <p><strong>Email:</strong> <a href="mailto:fatemekheirkhah85@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>fatemekheirkhah85@gmail.com</a></p>
            <p><strong>Phone:</strong> <a href="tel:+3584573482097" style={{ color: 'inherit', textDecoration: 'none' }}>+3584573482097</a></p>
          </div>

          <Box
            ref={form}
            component="form"
            noValidate
            autoComplete="off"
            className='contact-form'
          >
            <div className='form-flex'>
              <TextField
                required
                id="outlined-required"
                label="Your Name"
                placeholder="What's your name?"
                value={name}
                onChange={(e) => setName(e.target.value)}
                error={nameError}
                helperText={nameError ? "Please enter your name" : ""}
                sx={textFieldsStyles}
              />
              <TextField
                required
                id="outlined-required"
                label="Email / Phone"
                placeholder="How can I reach you?"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={emailError}
                helperText={emailError ? "Please enter your email or phone number" : ""}
                sx={textFieldsStyles}
              />
            </div>
            <TextField
              required
              id="outlined-multiline-static"
              label="Message"
              placeholder="Send me any inquiries or questions"
              multiline
              rows={10}
              className="body-form"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              error={messageError}
              helperText={messageError ? "Please enter the message" : ""}
              sx={textFieldsStyles}
            />
            <Button variant="contained" endIcon={<SendIcon />} onClick={sendEmail}>
              Send
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;
import React from 'react';
import { Container, Button } from '@react-email/components';

type EmailTemplateProps = {
  name: string;
  email: string;
  message: string;
};

const EmailTemplate: React.FC<EmailTemplateProps> = ({ name, email, message }) => {
  return (
    <Container style={{ padding: '20px', fontFamily: 'Arial, sans-serif', color: '#333' }}>
      <h1>New Contact Form Submission</h1>
      <p>You have a new message from your website contact form:</p>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Message:</strong></p>
      <p>{message}</p>
      <Button href="https://example.com" style={{ color: "#61dafb" }}>
        Click me
      </Button>
    </Container>
  );
};

export default EmailTemplate;

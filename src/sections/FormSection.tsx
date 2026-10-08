import { useState } from 'react';
import { Button, TextField } from '../components';
import { isValidEmail } from '../lib/validation';
import DemoSection from './DemoSection';

const FormSection = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const emailError =
    submitted && !isValidEmail(email) ? 'Enter a valid email address, like name@example.com.' : undefined;

  return (
    <DemoSection title="Form field">
      <form
        className="stack"
        noValidate
        onSubmit={(event) => {
          event.preventDefault();
          setSubmitted(true);
          // Send keyboard and screen reader users to the first invalid field
          const input = event.currentTarget.elements.namedItem('email');
          if (input instanceof HTMLInputElement && !isValidEmail(email)) input.focus();
        }}
      >
        <TextField
          name="email"
          label="Email"
          hint="We only use it to send your receipt."
          type="email"
          autoComplete="email"
          required
          value={email}
          error={emailError}
          onChange={(event) => setEmail(event.target.value)}
        />
        <Button type="submit">Subscribe</Button>
      </form>
    </DemoSection>
  );
};

export default FormSection;

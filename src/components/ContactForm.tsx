'use client';

import React, { useState } from 'react';

type Form = {
  from: string;
  subject: string;
  message: string;
};
export default function ContactForm() {
  const [form, setForm] = useState<Form>({ from: '', subject: '', message: '' });

  return (
    <>
      <form>
        <label htmlFor="from">Your Email</label>
        <input type="email" id="email" name="from" required autoFocus value={form.from} />
      </form>
    </>
  );
}

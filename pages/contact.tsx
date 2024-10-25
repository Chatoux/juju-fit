import { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for contacting us, ' + name);
  };

  return (
    <div className='bg-gray-100 p-8'>
      <h1 className='text-3xl font-bold mb-4'>Contact Us</h1>
      <form onSubmit={handleSubmit} className='space-y-4'>
        <input 
          className='w-full p-2 border rounded'
          type='text' 
          placeholder='Your Name' 
          value={name} 
          onChange={(e) => setName(e.target.value)}
        />
        <input 
          className='w-full p-2 border rounded'
          type='email' 
          placeholder='Your Email' 
          value={email} 
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea 
          className='w-full p-2 border rounded'
          placeholder='Your Message' 
          value={message} 
          onChange={(e) => setMessage(e.target.value)}
        />
        <button 
          className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700'
          type='submit'
        >Send Message</button>
      </form>
    </div>
  );
};

export default Contact;

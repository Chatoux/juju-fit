import { useState } from 'react';

const AppointmentBooking = () => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Appointment booked for ' + date + ' at ' + time);
  };

  return (
    <div className='bg-white p-8 shadow-md rounded-lg'>
      <h2 className='text-2xl font-bold mb-4'>Book an Appointment</h2>
      <form onSubmit={handleBooking} className='space-y-4'>
        <input 
          className='w-full p-2 border rounded'
          type='date' 
          value={date} 
          onChange={(e) => setDate(e.target.value)}
        />
        <input 
          className='w-full p-2 border rounded'
          type='time' 
          value={time} 
          onChange={(e) => setTime(e.target.value)}
        />
        <button 
          className='bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700'
          type='submit'
        >Book Now</button>
      </form>
    </div>
  );
};

export default AppointmentBooking;

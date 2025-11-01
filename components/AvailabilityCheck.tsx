'use client';

import { useState, FormEvent } from 'react';

export function AvailabilityCheck() {
  const [address, setAddress] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'available' | 'unavailable' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      // Simulate an API call
      const response = await fetch('/api/check-availability', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ address }),
      });

      if (!response.ok) {
        throw new Error('API request failed');
      }

      const result = await response.json();
      setStatus(result.isAvailable ? 'available' : 'unavailable');
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  const getStatusMessage = () => {
    switch (status) {
      case 'loading':
        return 'Checking...';
      case 'available':
        return (`🎉 Good news! Fiber is available at your address.`);
      case 'unavailable':
        return 'Sorry, we are not in your area yet. Sign up for updates!';
      case 'error':
        return 'Something went wrong. Please try again.';
      default:
        return 'Enter your address to check availability.';
    }
  };

  return (
    <section id="availability" className="w-full bg-gray-800 py-16 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold">Check Your Availability</h2>
        <p className="mt-4 text-lg">
          Find out if our high-speed FTTH is available in your neighborhood.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 flex flex-col items-center justify-center gap-4 md:flex-row">
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Enter your street address"
            className="w-full rounded-full border border-gray-600 bg-gray-700 px-6 py-3 text-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none md:w-1/2"
            required
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="rounded-full bg-blue-600 px-8 py-3 text-lg font-semibold transition hover:bg-blue-700 disabled:bg-gray-500 disabled:cursor-not-allowed"
          >
            {status === 'loading' ? 'Checking...' : 'Check Now'}
          </button>
        </form>

        <p className="mt-8 text-lg font-semibold">
          { status ==='available' ? ( 
            <div>
              {getStatusMessage()}
              <a href="/contactus" className='text-amber-700'> Click Here</a> to contact us.
            </div>
          ) : (
            <>
              {getStatusMessage()}
            </>
          )}
        </p>
      </div>
    </section>
  );
}

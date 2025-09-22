import React, { useState } from 'react';
import { createListing } from '../api/sell';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';

export default function Sell() {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [venue, setVenue] = useState('');
  const [price, setPrice] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createListing({ title, date, venue, price });
      setStatus('Listing created successfully!');
      setTitle('');
      setDate('');
      setVenue('');
      setPrice('');
    } catch (err) {
      setStatus('Failed to create listing');
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="flex justify-center px-4 pt-24 pb-12">
        <div className="w-full max-w-md bg-card border border-border rounded-2xl shadow-lg p-8">
          <h1 className="text-2xl font-bold text-foreground mb-4">
            Sell / Create Listing
          </h1>

          {status && (
            <p
              className={`mb-3 p-2 rounded text-sm ${
                status.includes('success')
                  ? 'bg-green-50 text-green-600'
                  : 'bg-red-50 text-red-600'
              }`}
            >
              {status}
            </p>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              className="border border-border focus:border-primary focus:ring focus:ring-primary/20 p-3 rounded-lg text-sm bg-background"
              placeholder="Title"
              value={title}
              onChange={e => setTitle(e.target.value)}
              required
            />
            <input
              className="border border-border focus:border-primary focus:ring focus:ring-primary/20 p-3 rounded-lg text-sm bg-background"
              type="date"
              value={date}
              onChange={e => setDate(e.target.value)}
              required
            />
            <input
              className="border border-border focus:border-primary focus:ring focus:ring-primary/20 p-3 rounded-lg text-sm bg-background"
              placeholder="Venue"
              value={venue}
              onChange={e => setVenue(e.target.value)}
              required
            />
            <input
              className="border border-border focus:border-primary focus:ring focus:ring-primary/20 p-3 rounded-lg text-sm bg-background"
              placeholder="Price"
              value={price}
              onChange={e => setPrice(e.target.value)}
              required
            />

            <Button
              type="submit"
              className="w-full bg-gradient-primary hover:opacity-90 shadow-glow"
            >
              Submit Listing
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

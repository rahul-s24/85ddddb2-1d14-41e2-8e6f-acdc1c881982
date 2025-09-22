import React from 'react';
import Header from '@/components/Header';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="max-w-5xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-foreground mb-4">
          Welcome to your Dashboard 🎉
        </h1>
        <p className="text-muted-foreground">
          Here you can manage your tickets, see your listings, and much more.
        </p>
      </div>
    </div>
  );
}

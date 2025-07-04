import React from 'react';
import ErrorBoundary from '@/components/ErrorBoundary';
import ErrorProneComponent from '@/components/ErrorProneComponent';

const Home: React.FC = () => {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-2xl font-bold mb-4">Welcome to the Rick and Morty App</h1>
      
      <ErrorBoundary>
        <ErrorProneComponent />
      </ErrorBoundary>
    </main>
  );
};

export default Home;

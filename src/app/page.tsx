'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

export default function HomePage() {
  const router = useRouter();

  return (
    <main style={styles.container}>
      <h1 style={styles.title}>PDF Preview App</h1>

      <div style={styles.buttonContainer}>
        <button style={styles.button} onClick={() => router.push('/dite-pdf-preview')}>
          View Diet Plan PDF
        </button>

        <button style={styles.button} onClick={() => router.push('/workout-pdf-preview')}>
          View Workout Plan PDF
        </button>
      </div>
    </main>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    padding: '20px',
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: '32px',
    fontWeight: 'bold',
    marginBottom: '40px',
    color: '#00C853',
  },
  buttonContainer: {
    display: 'flex',
    gap: '20px',
  },
  button: {
    backgroundColor: '#00C853',
    color: '#fff',
    border: 'none',
    padding: '14px 24px',
    fontSize: '16px',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background 0.3s',
  },
};

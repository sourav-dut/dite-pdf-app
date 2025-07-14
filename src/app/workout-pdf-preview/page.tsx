'use client';

import dynamic from 'next/dynamic';
import WorkoutPlanPDF from '../components/WorkoutPlanPDF';
import sampleWorkout from '../data/sampleWorkout';

const PDFViewer = dynamic(() => import('@react-pdf/renderer').then(mod => mod.PDFViewer), {
  ssr: false,
});

export default function PreviewPage() {
  return (
    <PDFViewer style={{ width: '100%', height: '100vh' }}>
      <WorkoutPlanPDF workouts={sampleWorkout} />
    </PDFViewer>
  );
}

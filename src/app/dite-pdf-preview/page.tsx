'use client';

// import { PDFViewer } from '@react-pdf/renderer';
import DietPlanPDF from '../components/DietPlanPDF';
import sampleMeals from '../data/sampleMeals';
import dynamic from 'next/dynamic';

const PDFViewer = dynamic(() => import('@react-pdf/renderer').then(mod => mod.PDFViewer), {
  ssr: false,
});

export default function PreviewPage() {
  return (
    <PDFViewer style={{ width: '100%', height: '100vh' }}>
      <DietPlanPDF
        patientName="Subhrajoty Basu"
        planName="Special Wellness Plan"
        doctorName="Dr. Pooja Jaiswal"
        startDate="2025-07-14"
        endDate="2025-08-14"
        description="DIET FOR FAT LOSS, HEPATIC DISORDER, BLOOD SUGAR REGULATION, ANAEMIA, IMPROVE HEALTH & STAMINA."
        meals={sampleMeals}
      />
    </PDFViewer>
  );
}

'use client';

import { Document, Page, Text, StyleSheet, View, Link } from '@react-pdf/renderer';

// PDF styles
const styles = StyleSheet.create({
  page: {
    padding: 20,
    fontSize: 11,
    lineHeight: 1.5,
  },
  title: {
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 12,
    fontWeight: 'bold',
  },
  dayHeader: {
    backgroundColor: '#00C853',
    color: 'white',
    padding: 6,
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 4,
  },
  tableHeader: {
    flexDirection: 'row',
    fontWeight: 'bold',
    marginBottom: 4,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 2,
  },
  cell: {
    flex: 1,
    paddingRight: 6,
  },
  footer: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    textAlign: 'center',
    fontSize: 10,
    borderTopWidth: 1,
    borderTopColor: '#00C853',
    paddingTop: 6,
  },
});

type WorkoutItem = {
  name: string;
  measure: string;
  videoLink?: string;
  note?: string;
};

type WorkoutDay = {
  date: string;
  activities: WorkoutItem[];
};

type WorkoutPlanPDFProps = {
  workouts: WorkoutDay[];
};

const WorkoutPlanPDF = ({ workouts }: WorkoutPlanPDFProps) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Title */}
      <Text style={styles.title}>Weekly Workout Schedule</Text>

      {workouts.map((day, i) => (
        <View key={i}>
          {/* Green Day Header */}
          <Text style={styles.dayHeader}>Day - {day.date}</Text>

          {/* Column Headers */}
          <View style={styles.tableHeader}>
            <Text style={styles.cell}>Activity</Text>
            <Text style={styles.cell}>Measure</Text>
            <Text style={styles.cell}>Video Link</Text>
            <Text style={styles.cell}>Note</Text>
          </View>

          {/* Table Rows */}
          {day.activities.map((item, j) => (
            <View key={j} style={styles.row}>
              <Text style={styles.cell}>{item.name}</Text>
              <Text style={styles.cell}>{item.measure}</Text>
              <Text style={styles.cell}>
                {item.videoLink ? <Link src={item.videoLink}>Link</Link> : '-'}
              </Text>
              <Text style={styles.cell}>{item.note || '-'}</Text>
            </View>
          ))}
        </View>
      ))}

      {/* Footer */}
      <Text style={styles.footer}>
        Nurture By Dr Pooja Jaiswal | itspoojajaiswal@gmail.com | +91-9700824444
      </Text>
    </Page>
  </Document>
);

export default WorkoutPlanPDF;
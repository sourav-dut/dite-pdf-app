'use client';

import {
  Document,
  Page,
  Text,
  StyleSheet,
//   Image,
  View,
} from '@react-pdf/renderer';

// Sample logo (replace with yours)
// const logoSrc = 'https://i.imgur.com/VkRDEoH.png';

// Styles
const styles = StyleSheet.create({
  page: { padding: 20, fontSize: 11 },
  logo: { width: 100, margin: '0 auto', marginBottom: 10 },
  headerRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 },
  headerText: { fontSize: 11 },
  greenLine: { height: 1, backgroundColor: '#00C853', marginVertical: 6 },

  sectionTitle: {
    fontSize: 13,
    marginTop: 10,
    marginBottom: 5,
    textDecoration: 'underline',
    fontWeight: 'bold',
  },

  dietTitle: {
    fontSize: 14,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 16,
    fontWeight: 'bold',
  },

  timeBlock: {
    backgroundColor: '#00C853',
    color: 'white',
    padding: 6,
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 10,
  },

  foodItem: {
    marginVertical: 1,
    fontSize: 11,
  },

  note: {
    fontSize: 10,
    color: '#666',
    fontStyle: 'italic',
    marginVertical: 2,
  },

  footer: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    textAlign: 'center',
    fontSize: 10,
  },
});

// Types
type FoodItem = {
  id: string;
  name: string;
  quantity: number;
  unit: string;
  fats: number;
  carbs: number;
  fiber: number;
  protein: number;
  calories: number;
};

type Meal = {
  time: string;
  type: string;
  foods: FoodItem[];
  notes?: string;
};

type DietPlanPDFProps = {
  patientName: string;
  planName: string;
  doctorName: string;
  startDate: string;
  endDate: string;
  description: string;
  meals: Meal[];
};

const DietPlanPDF = ({
  patientName,
  planName,
  doctorName,
  startDate,
  endDate,
  description,
  meals,
}: DietPlanPDFProps) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Logo */}
      {/* <Image src={logoSrc} style={styles.logo} /> */}

      {/* Header Info */}
      <View style={styles.headerRow}>
        <Text style={styles.headerText}>NAME: {patientName}</Text>
        <Text style={styles.headerText}>Practitioner: {doctorName}</Text>
      </View>
      <View style={styles.headerRow}>
        <Text style={styles.headerText}>Plan Name: {planName}</Text>
        <Text style={styles.headerText}>Plan Dates: {startDate} - {endDate}</Text>
      </View>
      <View style={styles.greenLine} />

      {/* Plan Description */}
      <Text style={styles.sectionTitle}>Plan Description</Text>
      <Text style={styles.foodItem}>
        {description}
      </Text>

      {/* Diet Section */}
      <Text style={styles.dietTitle}>DIET SECTION</Text>
      <View style={styles.headerRow}>
        <Text style={styles.headerText}>Startdate: {startDate}</Text>
        <Text style={styles.headerText}>Enddate: {endDate}</Text>
      </View>
      <View style={styles.greenLine} />

      {meals.map((meal, idx) => (
        <View key={idx}>
          <Text style={styles.timeBlock}>
            {meal.type} - ({meal.time})
          </Text>
          {meal.notes?.trim() && <Text style={styles.note}>NOTE: {meal.notes}</Text>}
          {meal.foods.map((food) => (
            <Text key={food.id} style={styles.foodItem}>
              {food.name.toUpperCase()} ({food.quantity} {food.unit})
            </Text>
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

export default DietPlanPDF;

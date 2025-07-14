// data/sampleMeals.ts
const sampleMeals = [
  {
    time: "05:00",
    type: "Breakfast",
    foods: [
      { id: "1", name: "Banana", quantity: 100, unit: "g", fats: 0.3, carbs: 23, fiber: 2.6, protein: 1.1, calories: 89 },
      { id: "2", name: "Rice", quantity: 150, unit: "g", fats: 0.4, carbs: 39, fiber: 0.6, protein: 3.2, calories: 180 },
      { id: "3", name: "Pesta", quantity: 50, unit: "g", fats: 2.5, carbs: 30, fiber: 1.5, protein: 5, calories: 150 },
    ],
    notes: "",
  },
  {
    time: "07:30",
    type: "Breakfast",
    foods: [
      { id: "4", name: "Chatu", quantity: 50, unit: "g", fats: 1.5, carbs: 20, fiber: 1.2, protein: 4.5, calories: 120 },
      { id: "5", name: "Oats", quantity: 40, unit: "g", fats: 2.4, carbs: 27, fiber: 4, protein: 5.3, calories: 154 },
    ],
    notes: "Served with warm water",
  },
  {
    time: "12:30",
    type: "Lunch",
    foods: [
      { id: "6", name: "Grilled Chicken Breast", quantity: 200, unit: "g", fats: 3.6, carbs: 0, fiber: 0, protein: 43, calories: 239 },
      { id: "7", name: "Boiled Potatoes", quantity: 150, unit: "g", fats: 0.1, carbs: 31, fiber: 2.2, protein: 2.6, calories: 130 },
      { id: "8", name: "Steamed Broccoli", quantity: 100, unit: "g", fats: 0.3, carbs: 7, fiber: 3, protein: 2.8, calories: 35 },
    ],
    notes: "No added salt",
  },
  {
    time: "16:00",
    type: "Snack",
    foods: [
      { id: "9", name: "Greek Yogurt", quantity: 150, unit: "g", fats: 5, carbs: 6, fiber: 0, protein: 15, calories: 120 },
      { id: "10", name: "Apple", quantity: 100, unit: "g", fats: 0.2, carbs: 14, fiber: 2.4, protein: 0.3, calories: 52 },
    ],
    notes: "Unsweetened yogurt",
  },
  {
    time: "19:00",
    type: "Dinner",
    foods: [
      { id: "11", name: "Baked Salmon", quantity: 150, unit: "g", fats: 10, carbs: 0, fiber: 0, protein: 25, calories: 208 },
      { id: "12", name: "Quinoa", quantity: 100, unit: "g", fats: 2, carbs: 21, fiber: 2.8, protein: 4.4, calories: 120 },
      { id: "13", name: "Mixed Salad", quantity: 100, unit: "g", fats: 0.2, carbs: 3.5, fiber: 1.5, protein: 0.9, calories: 20 },
    ],
    notes: "With olive oil dressing",
  },
];

export default sampleMeals;

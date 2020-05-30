export class Chart {
  constructor(dietType, totalCalories, favourites, noOfMeals) {
    this.dietType = dietType || "standard";
    this.totalCalories = totalCalories || 1200;
    this.favourites = favourites || [];
    this.noOfMeals = noOfMeals || 3;
    // based on the dietType calculate macro's ratio
    // based on noOfMeals - divide calories to structure diet
    // supported cals are 1000 || 1200 || 1400 || 1600 || 1800 || 2000
  }

  // this calculates ratio, no of meals,
  createStructure() {
    const ratio = {};
  }

  getMeals(structure) {}
}

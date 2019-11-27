/**
 * Method to calculate BMR of a person
 * Weight should be in kilograms
 * Height should be in centimetres
 * age is in years
 */
const idleMan = {
    gender : 'male',
    age: 25,
    height: 177,
    weight: 65
};

const idleWoman = {
    gender : 'female',
    age: 25,
    height: 171,
    weight: 50
};

let bmr = (person) => {
    let newPerson = person || idleMan;
    let bmr = 0;

        if(newPerson.gender === 'male') {
            bmr = (88.362) + (13.397 * newPerson.weight) + (4.799 * newPerson.height) - (5.677 * newPerson.age);
        }
        if(newPerson.gender === 'female') {
            bmr = (447.593) + (9.247 * newPerson.weight) + (3.098 * newPerson.height) - (4.330 *newPerson.age);
        }

        return bmr;
};

let bmi = (person) => {

    let newPerson = person || idleMan;
    return (newPerson.weight) / ((newPerson.height / 100) * (newPerson.height / 100));

};

module.exports = {
    bmr : bmr,
    bmi : bmi
};

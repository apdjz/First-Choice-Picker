/**
 * Select people based on their preferences.
 * @param {Array<Object>} people - An array of people and their preferences.
 * @param {number} numChoices - The number of choices each person can make.
 * @returns {Array<Object>} - An array of selected people.
 */
function selectPeople(people, numChoices) {
  // Initialize the selected array and a count array to keep track of how many
  // times each preference has been selected.
  const selected = [];
  const count = new Array(numChoices).fill(0);

  // Loop through the preferences in descending order of priority.
  for (let pref = 0; pref < numChoices; pref++) {
    // Sort the remaining people by their preference for this choice.
    const remaining = people.filter(p => !selected.includes(p));
    remaining.sort((a, b) => a.preferences[pref] - b.preferences[pref]);

    // Loop through the remaining people and select the ones who prefer
    // this choice over any others that haven't been selected yet.
    for (const person of remaining) {
      if (count[person.preferences[pref]] === pref) {
        selected.push(person);
        count[person.preferences[pref]]++;
      }
    }
  }

  return selected;
}

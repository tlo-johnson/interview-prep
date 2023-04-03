// https://leetcode.com/problems/boats-to-save-people/

const numRescueBoats = (people, limit) => {
  people.sort((a, b) => a - b);

  let left = 0, right = people.length - 1, boats = 0;
  while (left < right) {
    const light = people[left];
    const heavy = people[right];

    boats++;
    right--;

    if (limit >= heavy + light)
      left++;
  }

  return (right === left) ? ++boats : boats;
}

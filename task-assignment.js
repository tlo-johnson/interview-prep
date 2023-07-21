// https://www.algoexpert.io/questions/task-assignment
// time: O(n log n)
// space: O(n) for mapped tasks and output array

function taskAssignment(k, tasks) {
  tasks = tasks.map((task, index) => ({ index, task }));
  tasks.sort((a, b) => a.task - b.task);

  const output = [];
  let start = 0, end = tasks.length - 1;
  for (let index = 0; index < k; index++)
    output.push([tasks[start++].index, tasks[end--].index]);

  return output;
}

// Do not edit the line below.
exports.taskAssignment = taskAssignment;

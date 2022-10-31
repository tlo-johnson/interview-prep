// https://leetcode.com/problems/search-a-2d-matrix/?envType=study-plan&id=data-structure-i

const searchMatrix = (matrix, target) => {
  const rowVals = matrix.map(rows => rows[0]);
  const rowIndex = indexBinarySearch(rowVals, target);
  if (rowIndex === -1) return false;

  return binarySearch(matrix[rowIndex], target);
};

const indexBinarySearch = (arr, target) => {
  const mid = Math.floor(arr.length / 2);

  if (arr.length === 1) return arr[mid] <= target ? 0 : -1;

  if (target === arr[mid]) return mid;

  if (target < arr[mid]) {
    const left = arr.slice(0, mid);
    return indexBinarySearch(left, target);
  }

  const right = arr.slice(mid);
  return mid + indexBinarySearch(right, target);
};

const binarySearch = (arr, target) => {
  const mid = Math.floor(arr.length / 2);

  if (arr[mid] === target) return true;

  if (arr.length === 1) return false;

  return (arr[mid] > target) ? 
    binarySearch(arr.slice(0, mid), target) :
    binarySearch(arr.slice(mid), target);
}

let matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 23;
console.log(searchMatrix(matrix, target));

matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 21;
console.log(searchMatrix(matrix, target));

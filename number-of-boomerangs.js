// https://leetcode.com/problems/number-of-boomerangs/

const numberOfBoomerangs = points => {
  let numBoomerangs = 0;
  for (let center = 0; center < points.length; center++) {
    const distances = { };
    for (let end = 0; end < points.length; end++) {
      const distance = calculateDistance(points[center], points[end]);
      distances[distance] ||= 0;
      distances[distance]++;
    }

    numBoomerangs += Object.values(distances)
      .reduce((accumulator, current)  => accumulator + (current * --current), 0);
  }

  return numBoomerangs;
}

const calculateDistance = (start, end) => {
  const [startX, startY] = start;
  const [endX, endY] = end;
  const dx = startX - endX;
  const dy = startY - endY;

  return Math.abs(dx * dx + dy * dy);
}

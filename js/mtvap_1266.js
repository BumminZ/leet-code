/**
 * @param {number[][]} points
 * @return {number}
 */
const minTimeToVisitAllPoints = function (points) {
  if (points.length == 1) {
    return 0;
  }

  let res = 0;
  for (let i = 1; i < points.length; i++) {
    // console.log('1', Math.abs(points[i][0] - points[i - 1][0]));
    // console.log('2', Math.abs(points[i][1] - points[i - 1][1]));
    res += Math.max(
      Math.abs(points[i][0] - points[i - 1][0]),
      Math.abs(points[i][1] - points[i - 1][1])
    );

    // console.log('res', res);
  }
  return res;
};

// console.log('test1', test1);
// console.log('test2', test2);

/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function (n) {
  let money = 0;
  let week = 1;

  while (n > 0) {
    for (let day = 0; day < Math.min(n, 7); day++) {
      money += week + day;
    }

    n -= 7;
    week++;
  }

  return money;
};

// /**
//  * @param {number} n
//  * @return {number}
//  */
// var totalMoney = function (n) {
//   let money = 0;
//   let interest = 0;
//   for (let days = 1; days <= n; days++) {
//       if (days <= 7) money += days;
//       if (days > 7) {
//           console.log('interest', (days % 7 == 0 ? 7 : days % 7) + interest);
//           money += (days % 7 == 0 ? 7 : days % 7) + interest;
//       }
//       if (days % 7 == 0) {
//           interest = Math.trunc(days / 7);
//       }
//   }
//   return money;
// };

// /**
//  * @param {number} n
//  * @return {number}
//  */
// var totalMoney = function (n) {
//   let money = 0;
//   let week = 0;
//   let days = 0;
//   let add = 0;
//   for (let i = 0; i < n; i++) {
//       if (days == 0) {
//           week += 1;
//           add = week;
//       }
//       money += add;
//       days = (days + 1) % 7;
//       add += 1;
//   }
//   return money;

// };

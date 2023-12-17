use std::cmp;

impl Solution {
    pub fn total_money(mut n: i32) -> i32 {
        let mut money = 0;
        let mut week = 1;

        while n > 0 {
            for day in 0..cmp::min(n, 7) {
                money += week + day;
            }

            n -= 7;
            week += 1;
        }

        return money;
    }
}

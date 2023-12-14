// this code run 3ms Beats 55.35% of users with Rust

impl Solution {
    pub fn find_median_sorted_arrays(nums1: Vec<i32>, nums2: Vec<i32>) -> f64 {
        let mut nums3: Vec<f64> = [&nums1[..], &nums2[..]]
            .concat()
            .iter()
            .map(|&x| x as f64)
            .collect();

        nums3.sort_by(|a, b| a.partial_cmp(b).unwrap());

        let l = nums3.len();

        if l % 2 != 0 {
            nums3[(l - 1) / 2]
        } else {
            (nums3[l / 2 - 1] + nums3[l / 2]) / 2.0
        }
    }
}

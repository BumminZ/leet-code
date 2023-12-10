impl Solution {
    pub fn transpose(matrix: Vec<Vec<i32>>) -> Vec<Vec<i32>> {
        let mut result = Vec::new();

        for i in 0..matrix[0].len() {
            let mut col = Vec::new();
            for j in 0..matrix.len() {
                col.push(matrix[j][i]);
            }
            result.push(col)
        }

        return result;
    }
}

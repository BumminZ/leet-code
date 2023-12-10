impl Solution {
    pub fn transpose(matrix: Vec<Vec<i32>>) -> Vec<Vec<i32>> {
        // This creates a vector filled with zeros (0) and its length is equal to the length of the first row of the matrix (assuming all rows have the same length).
        // The matrix.len() as usize is used to convert the length to the usize type.
        let mut resp: Vec<Vec<i32>> = vec![vec![0; matrix.len() as usize]; matrix[0].len()];

        for i in 0..resp.len() {
            for j in 0..resp[0].len() {
                resp[i][j] = matrix[j][i];
            }
        }
        return resp;
    }
}

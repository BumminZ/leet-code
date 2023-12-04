pub fn start(points: Vec<Vec<i32>>) -> i32 {
    if points.len() == 1 {
        return 0;
    }

    let mut res: i32 = 0;
    for i in 1..points.len() {
        let x = (points[i][0] - points[i - 1][0]).abs();
        let y = (points[i][1] - points[i - 1][1]).abs();
        res += x.max(y)
    }

    return res;
}

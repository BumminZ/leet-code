use mtvap_1266::start;

mod mtvap_1266;

fn main() {
    let res = start_mtvap();
    println!("res: {:?}", res);
}

fn start_mtvap() -> i32 {
    let points = vec![vec![1, 1], vec![3, 4], vec![-1, 0]];
    let res = start(points);
    return res;
}

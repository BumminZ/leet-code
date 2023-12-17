/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  const response = [];
  const stack = [];
  let now = root;
  while (root || stack) {
    while (root) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();
    response.push(root.val);
    root = root.right;
  }
  return response;
};

// another approach
var inorderTraversal = function (root) {
  const response = [];
  traversal(root);
  return response;
};

var traversal = function (root, res) {
  if (!root) return;
  if (root.left) traversal(root.left, res);
  res.push(root.val);
  if (root.right) traversal(root.right, res);
};

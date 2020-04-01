class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  add(data) {
    const node = this.root;
    if (node === null) {
      this.root = new Node(data);
      return;
    } else {
      const searchTree = function(node) {
        if (data < node.data) {
          if (node.left === null) {
            node.left = new Node(data);
            return;
          } else if (node.left !== null) {
            return searchTree(node.left);
          }
        } else if (data > node.data) {
          if (node.right === null) {
            node.right = new Node(data);
            return;
          } else if (node.right !== null) {
            return searchTree(node.right);
          }
        } else {
          //equal values are not allowed in this BST
          return null;
        }
      };
      return searchTree(node);
    }
  }

  findMin() {
    let current = this.root;
    while (current.left != null) {
      current = current.left;
    }
    return current.data;
  }

  findMax() {
    let current = this.root;
    while (current.right != null) {
      current = current.right;
    }
    return current.data;
  }

  //is data in the tree?
  isPresent(data) {
    let current = this.root;
    while (current) {
      if (data === curent.data) {
        return true;
      }
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }

  find(data) {
    let current = this.root;
    while (current.data != data) {
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
      if (current === null) {
        return null;
      }
    }
    return current;
  }

  remove(data) {
    const removeNode = function(node, data) {
      //empty tree
      if (node === null) {
        return null;
      }
      if (data === node.data) {
        //node has no children
        if (node.left === null && node.right === null) {
          return null; //setting reference to null to  delete node
        }
        //node has no left child
        if (node.left === null) {
          return node.right; //replace this node with its right node the same as deleting
        }
        //node has no right child
        if (node.right === null) {
          return node.left;
        }
        //node has two children
        let tempNode = node.right;
        while (tempNode.left != null) {
          tempNode = tempNode.left;
        }
        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
        return node;
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else {
        node.right = removeNode(node.right, data);
        return node;
      }
    };
    this.root = removeNode(this.root, data);
  }

  //разница между меньшей высотой и большей не более чем один уровень
  isBalanced() {
    return this.findMinHeight() >= this.findHeight() - 1;
  }

  //height the same is maxHeight
  findHeight(node = this.root) {
    if (node === null) {
      return -1;
    }

    let leftHeight = this.findHeight(node.left);
    let rightHeight = this.findHeight(node.right);

    return Math.max(leftHeight, rightHeight) + 1;
  }

  findMinHeight(node = this.root) {
    if (node === null) {
      return -1;
    }
    let leftHeight = this.findMinHeight(node.left);
    let rightHeight = this.findMinHeight(node.right);

    return Math.min(leftHeight, rightHeight) + 1;
  }

  //preoder traversal: root left right
  preoder(node = this.root) {
    if (node === null) {
      return;
    } else {
      let result = [];
      let preoderTrversal = function(node) {
        result.push(node.data);
        //if node.left exists
        node.left && preoderTrversal(node.left);
        node.right && preoderTrversal(node.right);
      };
      preoderTrversal(this.root);
      return result;
    }
  }

  //left root right
  inorder(node = this.root) {
    if (node === null) {
      return;
    } else {
      let result = [];
      let inorderTrversal = function(node) {
        node.left && inorderTrversal(node.left);
        result.push(node.data);
        node.right && inorderTrversal(node.right);
      };
      inorderTrversal(this.root);
      return result;
    }
  }

  //left right root
  postorder(node = this.root) {
    if (node === null) {
      return;
    } else {
      let result = [];
      let postorderTrversal = function(node) {
        node.left && postorderTrversal(node.left);
        node.right && postorderTrversal(node.right);
        result.push(node.data);
      };
      postorderTrversal(this.root);
      return result;
    }
  }

  //level order from top to bottom from left to right
  levelOrder() {
    let result = [];
    let Q = [];
    if (this.root === null) {
      return null;
    } else {
      Q.push(this.root);
      while (Q.length > 0) {
        let node = Q.shift();
        result.push(node.data);
        if (node.left != null) {
          Q.push(node.left);
        }
        if (node.right != null) {
          Q.push(node.right);
        }
      }
      return result;
    }
  }
}

let myTree = new BST();

myTree.add(500);
myTree.add(4);
myTree.add(5996);
myTree.add(14);
myTree.add(56);
myTree.add(184);
myTree.add(1);
myTree.add(2);
console.log(JSON.stringify(myTree, null, 2));
myTree.findMinHeight();

myTree.findHeight();
myTree.findMinHeight();
myTree.preoder();
myTree.inorder();
myTree.postorder();
myTree.levelOrder();

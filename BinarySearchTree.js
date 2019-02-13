class Node {
    constructor(data) {
        this.data = data
        this.right = null
        this.left = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    insert(data) {
        const newNode = new Node(data)

        if (this.root === null) {
            this.root = newNode
        } else {
            this.insertNode(this.root, newNode)
        }
    }

    insertNode(node, newNode) {
        if (newNode.data < node.data) {
            if (node.left === null) {
                node.left = newNode
            } else {
                this.insertNode(node.left, newNode)
            }
        } else {
            if (node.right === null) {
                node.right = newNode
            } else {
                this.insertNode(node.right, newNode)
            }
        }
    }

    remove(data) {
        this.root = this.removeNode(this.root, data)
    }

    removeNode(node, data) {
        // Empty or didn't find node
        if (node === null) {
            return null
        // Data smaller than current node value, remove from left side of BST
        } else if (data < node.data) {
            node.left = this.removeNode(node.left, data)
            return node
        // Data bigger than current node value, remove from right side of BST
        } else if (data > node.data) {
            node.right = this.removeNode(node.right, data)
            return node
        // Case when data equals to node value
        } else {
            // No children
            if (node.left === null && node.right === null) {
                node = null
                return node
            }

            // Right children only
            if (node.left === null) {
                node = node.right
                return node
            }

            // Left children only
            if (node.right === null) {
                node = node.left
                return node
            }

            // Both children
            const aux = this.findMinNode(node.right)
            node.data = aux.data

            node.right = this.removeNode(node.right, aux.data)
            return node
        }
    }

    findMinNode(node) {
        if (node.left === null) {
            return node
        } else {
            return this.findMinNode(node.left)
        }
    }

    // Performs inorder traversal
    inorder(node)
    {
        if (node !== null) {
            this.inorder(node.left)
            console.log(node.data)
            this.inorder(node.right)
        }
    }

    // Performs preorder traversal 
    preorder(node)
    {
        if (node !== null) {
            console.log(node.data)
            this.inorder(node.left)
            this.inorder(node.right)
        }
    }

    // Performs postorder traversal 
    postorder(node)
    {
        if (node !== null) {
            this.inorder(node.left)
            this.inorder(node.right)
            console.log(node.data)
        }
    }

    search(node, data) {
        if (node === null) {
            return null
        } else if (data < node.data) {
            return this.search(node.left, data)
        } else if (data > node.data) {
            return this.search(node.right, data)
        }
        return node
    }
}

const tree = new BinarySearchTree()

tree.insert(10)
tree.insert(5)
tree.insert(20)
tree.insert(1)
tree.insert(7)

// tree.remove(5)
tree.inorder(tree.root)
console.log(tree.search(tree.root, 20))
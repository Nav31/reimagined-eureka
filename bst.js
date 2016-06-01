

// How would you create a Binary Search Tree

// Inorder to create a tree you need Nodes.
function Node (val) {
	this.val = val;
	this.left = null;
	this.right = null;
}

// Make a tree constructor 
function BinarySearchTree() {
	this.root = null;
}

// You must find the proper spot to insert a value

BinarySearchTree.prototype.insert = function(val) {
	var root = this.root;

	if (!root){ // if you dont have a root
		this.root = new Node(val)	// set this.root equal to a new Node
		return;
	}

	var currentNode = root;
	var newNode = new Node(val);

	while(currentNode){			// while their is some value
		if(val < currentNode.val){     // if the val given is less than the current val
			if(!currentNode.left) {    // if not a left value
				currentNode.left = newNode  // make the left val a new node
			} else {
				currentNode = currentNode.left // make the current node a left node
			}
		} else {
			if(!currentNode.right){
				currentNode.right = newNode;
			} else {
				currentNode = currentNode.right;
			}
		}  
	}
}

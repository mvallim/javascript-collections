/**
 * @classdesc It is a data structure organized as a balanced binary tree,
 *            following some rules. This can be implemented in an arrangement,
 *            so that it is accessed as a binary tree:
 * 
 * Parent (i) = return i / 2
 * 
 * Left (i) = return i * 2
 * 
 * Right (i) = return (i * 2) + 1
 * 
 * These operations can be performed quickly using bitwise operations. For the
 * left child moves the bits to the left, to the right moves the bits to the
 * right and applies the operation "or" to 1. To find the parent, shifts a bit
 * to the right. The advantage of using bitwise operations is that each uses
 * only one processor clock and is highly efficient. There are two types of
 * heaps: The maximum heaps (max heap), in which the value of all nodes are
 * smaller than those of their respective parents; And heaps of min (min heap),
 * in which the value of all nodes is greater than those of their respective
 * parents. Thus, at a maximum heap, the highest value of the set is at the root
 * of the tree, while at the minimum heap the root stores the smallest existing
 * value. This can be defined by determining a sort function in the class
 * constructor.
 * 
 * @requires HeapNode
 * @constructor
 * @augments BaseCollection
 * @param {function}
 *          compare A function to mantain sort heap
 */
var Heap = function Heap(compare) {
  BaseCollection.call(this, {
    _dataStore : [],
    _compare : compare
  })
}

Heap.prototype = Object.create(BaseCollection.prototype, {

  constructor : Heap,

  /**
   * @private
   */
  _dataStore : {
    value : undefined,
    enumerable : true,
    configurable : false,
    writable : true
  },

  /**
   * @private
   */
  _compare : {
    value : undefined,
    enumerable : false,
    configurable : true,
    writable : true
  },

  /**
   * @private
   */
  _swap : {
    value : function (nodeA, nodeB) {
      var temp = nodeA.value
      nodeA.value = nodeB.value
      nodeB.value = temp
    },
    enumerable : false,
    configurable : false,
    writable : false
  },

  /**
   * @private
   */
  _heapifyUp : {
    value : function (index) {
      var node = this._dataStore[index]

      if (node.hasParent && this._compare(node.parent.value, node.value) > 0) {
        this._swap(node.parent, node)
        this._heapifyUp(node.parent.index)
      }
    },
    enumerable : false,
    configurable : false,
    writable : false
  },

  /**
   * @private
   */
  _heapifyDown : {
    value : function (index) {
      var node = this._dataStore[index]

      var candidate = node

      if (node.hasLeft && this._compare(candidate.value, node.left.value) > 0) {
        candidate = node.left
      }

      if (node.hasRight && this._compare(candidate.value, node.right.value) > 0) {
        candidate = node.right
      }

      if (node == candidate) {
        return

        

                

        

                        

        

                

        

                                

        

                

        

                        

        

                

        

      }

      this._swap(node, candidate)

      this._heapifyDown(candidate.index)
    },
    enumerable : false,
    configurable : false,
    writable : false
  },

  /**
   * Return first element on Heap, without remove.
   * 
   * @method
   * @memberof Heap.prototype
   * @return Object
   */
  peek : {
    value : function () {
      if (this._dataStore.length == 0) {
        return null
      }

      return this._dataStore[0].value
    },
    enumerable : false,
    configurable : false,
    writable : false
  },

  /**
   * Return first element on Heap, remove.
   * 
   * @method
   * @memberof Heap.prototype
   * @return Object
   */
  poll : {
    value : function () {
      var value = this._dataStore[0].Value

      this._swap(this._dataStore[0], this._dataStore[this._dataStore.length - 1])

      this._dataStore.pop()

      if (this._dataStore.length > 0) {
        this._heapifyDown(0)
      }

      return value
    },
    enumerable : false,
    configurable : false,
    writable : false
  },

  /**
   * Appends the specified element.
   * 
   * @method
   * @memberof Heap.prototype
   * @param {value}
   *          value
   */
  add : {
    value : function (value) {
      var index = this._dataStore.length

      this._dataStore.push(new HeapNode(this._dataStore, value, index))

      this._heapifyUp(index)
    },
    enumerable : false,
    configurable : false,
    writable : false
  },

  /**
   * @inheritdoc
   * @memberof Heap.prototype
   */
  length : {
    get : function () {
      return this._dataStore.length
    },
    configurable : false
  },

  /**
   * @inheritdoc
   * @memberof Heap.prototype
   */
  empty : {
    get : function () {
      return this._dataStore.length == 0
    },
    configurable : false
  },

  /**
   * @inheritdoc
   * @method
   * @memberof Heap.prototype
   */
  clear : {
    value : function () {
      this._dataStore = []
    },
    configurable : false
  }
})

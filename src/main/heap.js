function Heap(compare) {
  BaseCollection.call(this, {
    _dataStore : [],
    _compare : compare
  })
}

Heap.prototype = Object.create(BaseCollection.prototype, {

  constructor : Heap,

  _dataStore : {
    value : undefined,
    enumerable : true,
    configurable : false,
    writable : true
  },

  _compare : {
    value : undefined,
    enumerable : false,
    configurable : true,
    writable : true
  },

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

  length : {
    get : function () {
      return this._dataStore.length
    },
    configurable : false
  },

  empty : {
    get : function () {
      return this._dataStore.length == 0
    },
    configurable : false
  },

  clear : {
    value : function () {
      this._dataStore = []
    },
    configurable : false
  }
})

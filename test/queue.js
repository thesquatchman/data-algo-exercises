
function Queue(capacity) {
  this._capacity = capacity || Infinity;
  this._storage = {};
  this._head = 0;
  this._tail = 0;
}

Queue.prototype.enqueue = function(value) {
  // implement me...
  if (this.count() < this._capacity){  // 2 < 3 true
  	this._storage[this._tail++] = value; // {0: 'a', 1: 'b', 2: 'c'} 3
  	return this.count(); // 3 - 0
  }
  return "capacity is full";
};
// Time complexity: O(1)

Queue.prototype.dequeue = function() {
	let ret = this._storage[this._head]; // storage[0] a
	delete this._storage[this._head]; // {1:'b',2:'c'}
	if (this._head < this._tail) this._head++; // 0 < 3 // 1
	return ret; // a 
  
};
// Time complexity:

Queue.prototype.peek = function() {
  return this._storage[this._head];
};

Queue.prototype.count = function() {
  // implement me...
  return this._tail - this._head;
};
// Time complexity:

// ********
var assert = require('assert');
var should = require('should');
var myQueue = new Queue(3);
describe('#Queue.enqueue()', function() {
  it('should return count', function() {
    myQueue.enqueue('a').should.equal(1);
  	myQueue.enqueue('b').should.equal(2);
  	myQueue.enqueue('c').should.equal(3);
  });
});
describe('Queue.dequeue()', function() {
  it('should return first value', function() {
    assert.equal(myQueue.dequeue(), 'a');
  });
  it('should decrement count', function() {
    assert.equal(myQueue.count(), 2);
  });
});
describe('#Queue.peek()', function() {
  it('should return first value', function() {
    assert.equal(myQueue.peek(), 'b');
  });
  it('should not decrement count', function() {
    assert.equal(myQueue.count(), 2);
  });
});

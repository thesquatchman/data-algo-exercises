

function Stack(capacity) {
  this._capacity = capacity || Infinity;
  this._storage = {};
  this._count = 0;
}

// O(1)
Stack.prototype.push = function(value) {
  if (this._count < this._capacity) {
    this._storage[this._count++] = value;
    return this._count;
  }
  return 'Max capacity reached';
};

// O(1)
Stack.prototype.pop = function() {
  if (this._count === 0) {
    return 'No element inside the stack. Add element before popping.'
  }
  
  var value = this._storage[--this._count];
  delete this._storage[this._count];
  if (this._count < 0) {
    this._count = 0;
  }
  return value;
};

// O(1)
Stack.prototype.peek = function() {
  return this._storage[this._count-1];
}

// O(1)
Stack.prototype.count = function() {
  return this._count;
};


// ********
var assert = require('assert');
var should = require('should');
var myStack = new Stack(3);
describe('#myStack.push()', function() {
  it('should return count', function() {
    myStack.push('a').should.equal(1);
  	myStack.push('b').should.equal(2);
  	myStack.push('c').should.equal(3);
  	myStack.push('d').should.equal('Max capacity reached');
  });
});
describe('#myStack.pop()', function() {
  it('should return last value', function() {
    assert.equal(myStack.pop(), 'c');
  });
  it('should decrement count', function() {
    assert.equal(myStack.count(), 2);
  });
});
describe('#myStack.peek()', function() {
  it('should return last value', function() {
    assert.equal(myStack.peek(), 'b');
  });
  it('should not decrement count', function() {
    assert.equal(myStack.count(), 2);
  });
});

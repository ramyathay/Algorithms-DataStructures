var A = function() {

}

A.prototype.someMethod = function(arg1) {
	console.log(arg1);
}

A.prototype.someOtherMethod = function(arg2) {
	var self = this;
	console.dir("Here this is "+this)
	this.someMethod(arg2);
	console.log(arg2);

	var inner = function(arg) {
		self.someMethod("Inner call "+arg);
	}

	inner("Hello")
}


var B = function() {

}

B.prototype.someMethod = function(arg1) {
	console.log(arg1+" I am B ");
}

B.prototype.beesMethod = function(arg1, arg2) {
	console.log(arg1+" "+arg2)
	console.log(arguments[0]+" "+arguments[1]+" "+arguments[2])
}

B.prototype.beesMethod2 = function(arg1, arg2) {
	console.log(arg1)
	console.log(arg2)
}

var a = new A();
a.someOtherMethod("Hello");
console.log("=============");
a.someOtherMethod.call(new B(), "Hello");

var b = new B();
b.beesMethod("Bees1", "World", "Javascript");
b.beesMethod2("Bees2");

var arr = [1, 2, 3]
console.log(typeof arr)

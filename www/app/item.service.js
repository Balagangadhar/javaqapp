angular.module('myapp').service('ItemService', function($q){
	console.log('ItemService initialized');	
	this.initialize = function(){
		this._items = [ {
			id : "1",
			question : 'What is inheritance?',
			answer : 'Different kinds of objects often have a certain amount in common with each other. Mountain bikes, road bikes, and tandem bikes, for example, all share the characteristics of bicycles (current speed, current pedal cadence, current gear). Yet each also defines additional features that make them different: tandem bicycles have two seats and two sets of handlebars; road bikes have drop handlebars; some mountain bikes have an additional chain ring, giving them a lower gear ratio....',
			tags : [{'tag':'Oops'}],
			versions : [{'version' : 'Java-1.6'},{'version': 'Java-1.7'}],
			level : 'basic',
			learningStatus : false
		}, {
			id : "2",
			question : 'What is an interface?',
			answer : 'As you\'ve already learned, objects define their interaction with the outside world through the methods that they expose. Methods form the object\'s interface with the outside world; the buttons on the front of your television set, for example, are the interface between you and the electrical wiring on the other side of its plastic casing. You press the "power" button to turn the television on and off....',
			tags : [{'tag':'Oops'}],
			versions : [{'version' : 'Java-1.6'},{'version': 'Java-1.7'}],
			level : 'basic',
			learningStatus : true
		}, {
			id : "3",
			question : 'What is package?',
			answer : 'A package is a namespace that organizes a set of related classes and interfaces. Conceptually you can think of packages as being similar to different folders on your computer. You might keep HTML pages in one folder, images in another, and scripts or applications in yet another. Because software written in the Java programming language can be composed of hundreds or thousands of individual classes, it makes sense to keep things organized by placing related classes and interfaces into packages...',
			tags : [{'tag':'Oops'}],
			versions : [{'version' : 'Java-1.6'},{'version': 'Java-1.7'}],
			level : 'basic',
			learningStatus : false
		}, {
			id : "4",
			question : 'What Is an Object?',
			answer : 'An object is a software bundle of related state and behavior. Software objects are often used to model the real-world objects that you find in everyday life. This lesson explains how state and behavior are represented within an object, introduces the concept of data encapsulation, and explains the benefits of designing your software in this manner.',
			tags : [{'tag':'Oops'}],
			versions : [{'version' : 'Java-1.6'},{'version': 'Java-1.7'}],
			level : 'basic',
			learningStatus : false
		}, {
			id : "5",
			question : 'What Is a Class?',
			answer : 'A class is a blueprint or prototype from which objects are created. This section defines a class that models the state and behavior of a real-world object. It intentionally focuses on the basics, showing how even a simple class can cleanly model state and behavior.',
			tags : [{'tag':'Oops'}],
			versions : [{'version' : 'Java-1.6'},{'version': 'Java-1.7'}],
			level : 'basic',
			learningStatus : false
		},{
			id : "6",
			question : 'What Is a Package?',
			answer : 'A package is a namespace for organizing classes and interfaces in a logical manner. Placing your code into packages makes large software projects easier to manage. This section explains why this is useful, and introduces you to the Application Programming Interface (API) provided by the Java platform.A package is a namespace for organizing classes and interfaces in a logical manner. Placing your code into packages makes large software projects easier to manage. This section explains why this is useful, and introduces you to the Application Programming Interface (API) provided by the Java platform.A package is a namespace for organizing classes and interfaces in a logical manner. Placing your code into packages makes large software projects easier to manage. This section explains why this is useful, and introduces you to the Application Programming Interface (API) provided by the Java platform.',
			tags : [{'tag':'Oops'}],
			versions : [{'version' : 'Java-1.6'},{'version': 'Java-1.7'}],
			level : 'basic',
			learningStatus : false
		},{
			id : "7",
			question : 'Why Use Generics?	',
			answer : 'In a nutshell, generics enable types (classes and interfaces) to be parameters when defining classes, interfaces and methods. Much like the more familiar formal parameters used in method declarations, type parameters provide a way for you to re-use the same code with different inputs. The difference is that the inputs to formal parameters are values, while the inputs to type parameters are types.',
			tags : [{'tag':'Generics'}],
			versions : [{'version' : 'Java-1.6'},{'version': 'Java-1.7'}],
			level : 'advanced',
			learningStatus : false
		},{
			id : "8",
			question : 'What are Parameterized Types?',
			answer : 'In a nutshell, generics enable types (classes and interfaces) to be parameters when defining classes, interfaces and methods. Much like the more familiar formal parameters used in method declarations, type parameters provide a way for you to re-use the same code with different inputs. The difference is that the inputs to formal parameters are values, while the inputs to type parameters are types.',
			tags : [{'tag':'Generics'}],
			versions : [{'version' : 'Java-1.6'},{'version': 'Java-1.7'}],
			level : 'advanced',
			learningStatus : false
		}];
		this.items = this._items; 
		this.currentPosition = 0;
		this.total = this._items.length;
		this.learned = 0;
		for (var i=0; i < this.items.length; i++) {
			if (this._items[i].learningStatus === true) {
				this.learned++;
			}
		}
	};

	this.getLearningStatusMsg = function(){
		return (this.total-this.learned)+'/'+this.total;
	};
	this.getItems = function(){
		return this.items;
	}
	this.getItemById = function(itemId){
		var result;
		for (var i=0; i < this.items.length; i++) {
			if (this.items[i].id === itemId) {
				result = this.items[i];
				break;
			}
		}
		return result;
	}
	this.toggleLearningStatus = function(itemId){
		var result;
		for (var i=0; i < this.items.length; i++) {
			if (this.items[i].id === itemId) {
				this.learned = this.items[i].learningStatus ? this.learned-1 : this.learned+1;
				this.items[i].learningStatus = !this.items[i].learningStatus;
				break;
			}
		}

	}
	this.getFirstItem = function(){
		return this.items[0];
	};

	this.getNextItem = function(){
		if(this.currentPosition<this.items.length){
			return this.items[this.currentPosition+1];
		}else{
			return null;
		}
	}
	this.getPreviousItem = function(){
		if(this.currentPosition>0){
			return this.items[this.currentPosition-1];
		}else{
			return null;
		}
	}

	this.setCurrentPosition = function(pos){
		this.currentPosition = pos;
	};

	this.incrementCurrentPosition = function(){
		this.currentPosition++;
	};

	this.decrementCurrentPosition = function(){
		this.currentPosition--;
	};

	this.resetCurrentPosition = function(){
		this.currentPosition = 0;
	}
	this.getItemsBySearchString = function(searchString){
		var result = [];
		var searchString = searchString.toLowerCase();
		angular.forEach(this._items, function(item) {
			if( item.question.toLowerCase().indexOf(searchString) >= 0 | item.answer.toLowerCase().indexOf(searchString) >=0 |item.level.toLowerCase().indexOf(searchString) >=0) result.push(item);
		});
		this.items = result;
		return result;
	}
	this.initialize();
});
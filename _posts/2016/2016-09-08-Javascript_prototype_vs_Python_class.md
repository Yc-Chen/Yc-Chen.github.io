---
layout: post
title: JavaScript prototype vs. Python class
category: Blogs
tags: 'Programming, Python, JavaScript, ECMAScript6'
keywords: 'Programming,'
description: description
---

JavaScript, or ECMAScript6, has been developing fast recent years and is becoming more standardized. Kickstarter even has a project to publish a book **[You Don't Know JS](https://www.kickstarter.com/projects/getify/you-dont-know-js-book-series)**. JavaScript used to be criticized for being sloppy. However it is much more mature now and the [Web APIs](https://developer.mozilla.org/en/docs/Web/API) are providing more functionalities.

JavaScript and Python share many similarities. JavaScript is a prototype-based language and this **prototype** concept corresponds to several terms in Python, including metaclass, class, contructor, etc. In general, JavaScript is more 'descriptive' and Python provides more control. In this post, I will try to produce the same JavaScript feature in Python.

- ### Creating an object

  - #### JavaScript

    ~~~ javascript
    function Person(first, last, age, eyecolor) {
        this.firstName = first;
        this.lastName = last;
        this.age = age;
        this.eyeColor = eyecolor;
    }

    var myFather = new Person("John", "Doe", 50, "blue");
    var myMother = new Person("Sally", "Rally", 48, "green");
    ~~~

  - #### Python

    ~~~ python
    class Person(object):

        def __init__(self, first, last, age, eyecolor):
            self.firstName = first
            self.lastName = last
            self.age = age
            self.eyeColor = eyecolor

    myFather = Person("John", "Doe", 50, "blue")
    myMother = Person("Sally", "Rally", 48, "green")
    ~~~

- ### Retrieving object attributes

  - #### JavaScript
    Consider JavaScript allows this:

    ~~~ javascript
    console.log(myFather["firstName"])  // John
    ~~~

  - #### Python
    Python would need some extra implementation of `__getitem__`:

    ~~~ python
    class Person(object):

        def __init__(self, first, last, age, eyecolor):
            self.firstName = first
            self.lastName = last
            self.age = age
            self.eyeColor = eyecolor

        def __getitem__(self, key):
            return self.__dict__.get(key, None)

        def __setitem__(self, key, value): # __setitem__ is also implemented here
            return self.__dict__[key] = value

    myFather = Person("John", "Doe", 50, "blue")
    myMother = Person("Sally", "Rally", 48, "green")
    ~~~

    And then:

    ~~~ python
    print myFather["firstName"]  # John
    ~~~

- ### Adding methods dynamically

  - #### JavaScript

    ~~~ JavaScript
    Person.prototype.name = function() {
        return this.firstName + " " + this.lastName;
    };
    ~~~

  - #### Python
    Python can only add a method to a certain instance.

    ~~~ Python
    from types import MethodType

    def name(self):
        return self.firstName + " " + self.lastName

    # bind method to ALL the existing instances
    myFather.name = MethodType(name, myFather, Person)
    print myFather.name()  # John Doe
    print myMother.name()  # Error

    myMother.name = MethodType(name, myMother, Person)
    print myMother.name()  # Sally Rally

    # what happens with cross-binding?
    myMother.name = MethodType(name, myFather, Person)
    print myMother.name() # John Doe??? Oops....
    ~~~


### Summary
JavaScript is more ['descriptive'](#retrieving-object-attributes) than Python and its [structure is more flexible](#adding-methods-dynamically) than Python.

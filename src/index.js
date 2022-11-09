// Curly braces are only used when we want to get named exports
// Remove the curly braces for "export default" functions
// Default -> import ... from '';
// Name ->  import { ... } from '';
import Teacher, { promote } from './teacher'

// function sayHello() {
//   for (var i = 0; i < 5; i++) {
//     console.log(i)
//   }

//   console.log(i) // This is accessible because of var but creates problems so should not be accessible
// }

// sayHello()

function sayHello() {
  for (let i = 0; i < 5; i++) {
    console.log(i)
  }

  // console.log(i)
}

// sayHello()

// const -> scoped only in the block but can't be mutated
// let -> scoped only in the block and should be used only when reassigning a variable
// var -> scoped in the whole function

// const x = 1
// x = 2

// OOP
// const person = {
//   name: 'Most',
//   walk: function () {},
//   talk() {},
// }

// console.log(person.talk())
// person.name = ''

// const targetMember = 'name'
// person[targetMember.value] = 'John'

/// this keyword
// const person = {
//   name: 'Mosh',
//   walk() {
//     console.log(this)
//   },
// }

// person.walk() // When you call a this, it will always return a reference to that object

// const walk = person.walk
// walk() // If you call a function as a stand alone object or outside of an object, this will return the global object or the window object in the browser or undefined on strict mode

/// Binding this
const person = {
  name: 'Mosh',
  walk() {
    console.log(this)
  },
}

person.walk() // When you call a this, it will always return a reference to that object

const walk = person.walk.bind(person) // binding this to the person object, we get a new walk function so the value of walk will bind to person
walk() // If you call a function as a stand alone object or outside of an object, this will return the global object or the window object in the browser or undefined on strict mode

// Arrow functions
const square = function (number) {
  return number * number
}

const square2 = (number) => number * number
// console.log(square2(5))

const jobs = [
  { id: 1, isActive: true },
  { id: 2, isActive: true },
  { id: 3, isActive: false },
]

const activeJobs = jobs.filter(function (job) {
  return job.isActive
})
const activeJobs2 = jobs.filter((job) => job.isActive)
// console.log(activeJobs)
// console.log(activeJobs2)

/// Arrow functions and this
// Arrow functions don't rebind this meaning it will inherit the this keyword
const anotherPerson = {
  talk() {
    setTimeout(() => {
      console.log('this', this)
    }, 1000)
  },
}
anotherPerson.talk()

/// Map method
const colors = ['red', ' green', 'blue']
const items = colors.map((color) => '<li>' + color + '</li>')
const itemsTemplateLiteral = colors.map((color) => `<li>${color}</li>`)
// console.log(items)
// console.log(itemsTemplateLiteral)

/// Object destructuring
const address = {
  street: '',
  city: '',
  country: '',
}
// const street = address.street
// const city = address.city
// const country = address.country
// const { street, city, country } = address
const { street: st } = address // When you want to rename the street property

/// Spread operator
const first = [1, 2, 3]
const second = [4, 5, 6]
// Old way
const combined = first.concat(second)
// console.log(combined)
// New way
const combined2 = [...first, 'a', ...second, 'b']
// console.log(combined2)
const clone = [...first]
// console.log(first)
// console.log(clone)

const first2 = { name: 'Mosh' }
const second2 = { job: 'Instructor' }

const combinedObject = { ...first2, ...second2, location: 'Australia' }
// console.log(combinedObject)
const cloneObject = { ...first2 }
// console.log(cloneObject)

/// OOP with classes
// const thirdPerson = {
//   name: 'Mosh',
//   walk() {
//     console.log('walk')
//   },
// }

// class Person {
//   constructor(name) {
//     this.name = name
//   }

//   walk() {
//     console.log('walk')
//   }
// }

// const thirdPerson = new Person('Mosh')
// thirdPerson.walk()

/// Inheritance
// The "super" is crucial
// class Teacher extends Person {
//   constructor(name, degree) {
//     super(name)
//     this.degree = degree
//   }

//   teach() {
//     console.log('teach')
//   }
// }

const teacher = new Teacher('Mosh', 'MSc')
// teacher.walk()
// teacher.teach()
// console.log(teacher.degree)
// console.log(teacher.name)
teacher.teach()

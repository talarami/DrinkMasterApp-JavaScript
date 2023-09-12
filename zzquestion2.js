// QUESTION 2

// 2.1 

// unshift() - a function that inserts one or more elements at the beginning of an array and returns the new array that includes added elements

// shift() - a function that deletes the first element from an array and returns its value

// split() - a function that separates string into parts and returns an array of substrings without changing the original string

// 2.2

// using unshift():

const languagesCfg = ["javascript", "python", "sql"]
languagesCfg.unshift("html", "css")
console.log(languagesCfg)


// using shift():

const peopleCfg = ["instructor", "marker", "classmate"]
const firstPerson = peopleCfg.shift()
console.log(peopleCfg)
console.log(firstPerson)


// using split():

const cfg = "I am doing a CFGdegree"
const cfgCopy = cfg.split()
console.log(cfgCopy)


// 2.2

// JavaScript methods are actions that can be performed on objects. Object methods contain function definitions that can operate on the object's data using "this". "This" refers to the object.

const programmingLanguage = {
  name: "JavaScript",
  year: 1995,
  creator: "Brendan Eich",
  logoColor: "yellow",
  printBasicInfo: function() {
    return this.name + " " + this.year;
  }, 
  getLogoColor: function () {
    return this.logoColor
  }
}

programmingLanguage.printBasicInfo()

console.log(programmingLanguage.printBasicInfo())
console.log(programmingLanguage.logoColor)


// 2.3

// Onmouseover event occurs when we hover the mouse under the element, then there is usually some script called. This event is often used together with onmouseout event that occurs when we move the mouse pointer away from the element. 

// Onclick event occurs when we click the button on the HTML element. It could be when we change certain content on the web page, close warning information, submit a form etc.

// Onchange event occurs when we change the selected element's value on the web page. It changes the HTML element value.
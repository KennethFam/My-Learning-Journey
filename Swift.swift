import UIKit
import SwiftUI

// basics
// follows 100 Days of SwiftUI: https://www.hackingwithswift.com/100/swiftui

// var for variable and let for constant
var greeting = "Hello, playground"
// for strings, you can do greeting.hasSuffix("playground") or
// greeting.hasPreix("Hello")
// str.isEmpty will check is str is an empty string and returns boolean
// str.count is costly b/c it counts every letter in the string

// just prints a new line
print()
// string
let me = "cool"
// trimmingCharacters(in:): This removes certain kinds of characters from the start or end of a string, such as alphanumeric letters, decimal digits, or, most commonly, whitespace and new lines. In the example above, it removes white spaces and new lines.
var quote = "   The truth is rarely pure and never simple   "
let trimmed = quote.trimmingCharacters(in: .whitespacesAndNewlines)
// components(separatedBy:): breaks the string up into a string array by splitting it on a boundary of our choosing
let lyrics = """
But I keep cruising
Can't stop, won't stop moving
It's like I got this music in my mind
Saying it's gonna be alright
"""
var strArr = lyrics.components(separatedBy: .newlines)
// int
var count = 25
var num = 100_000_000
print(count.isMultiple(of: 5))
print(50.isMultiple(of: 5))
// double
var n = 0.1 + 0.2
print(n)
var a = 1
var b = 2.0
// int and double both have a function called random
// this picks a random number within the range
var rand = Int.random(in: 1...10)
var randd = Double.random(in: 0...1)
// Type Safety: either cas b as Int or a as Double
var c = Double(a) + b
print(c)
var gameOver = true
print(!gameOver)
gameOver.toggle()
print(gameOver)
let first = "Hello "
let second = " world"
print(first + second + "!")
var msg = "The number is \(num)"
print(msg)
msg = "The number is " + String(num)
print(msg)
msg = "The number is \(100/3.0)"
print(msg)

// Arrays
var myList = [1, 2]
print(myList)
myList.append(3)
print(myList)
// declare array, specially an integer array
var emptList = Array<Int>()
print(emptList)
var numList = [1, 2, 3]
// combine arrays
var com = emptList + numList
print(com)
// another way to declare array
var newArr = [Int]()
print(newArr)
// get arr size
print(com.count)
// remove item at index 0
numList.remove(at: 0)
print(numList)
// remove all items
// can do .removeAll(keepingCapacity: true) so that Swift does not
// deallocate all the memory used for the array
numList.removeAll()
print(numList)
// check whether item in list
print(com.contains(1))
//sort list, returns new array and does not change original
com.sorted()
// reverse array, returns copy and does not change original
// Swift notes to itself that you want items reversed
print(com.reversed())
// another way to declare string
var cities: [String] = ["London", "Paris"]

// dictionaries
// one way to declare
let employee2 = ["name": "Taylor Swift", "job": "Singer", "location": "Nashville"]
// or
let employee1 = [
    "name": "Taylor Swift",
    "job": "Singer",
    "location": "Nashville"
]
// print employee's name
// will get an "optinional" return which means data may not exist
print(employee1["name"])
// fix this by providing default value when reading dictionary
print(employee1["name", default: "Unknown"])
// another way to declare dictionary, Key : Value
var heights = [String: Int]()
// count and removeAll() will work with dictionaries too

// sets
// declare set
// declare array and then put it into set, set will remove duplicate values, set won't have order
let people = Set(["Denzel Washington", "Tom Cruise", "Nicolas Cage", "Samuel L Jackson"])
print(people)
// another way to declare set
var nSet = Set<Int>()
// insert values into set
// not append b/c we're not adding items to end of set
nSet.insert(1)
nSet.insert(2)
nSet.insert(3)
print(nSet)
// check if set has an item, faster than array
print(nSet.contains(1))
// can use count and sorted() (returns sorted array) like arrays

//enums (enumerations)
// efficient and safer
// lets us define new data type and list up front the values it can have
enum Weekday {
    case monday
    case tuesday
    case wednesday
    case thursday
    case friday
}
var day = Weekday.monday
// this way, you avoid typos/errors
// Swift will offer all options once you type "Weekday"
day = Weekday.tuesday
// simplified enum
enum Color {
    // 3 cases on 1 line
    case red, blue, green
}
// this is possible b/c once you declare a variable of that enum type, it has to stay that type
var e = Color.red
e = .blue
// swift stores the cases in optimized form, e.g. monday may be 0, 1, etc.

// day 4: type annotations, telling Swift explicitly what type we're using
var score: Double = 0
var ex: Bool = true
var dict: [String: Int] = ["id": 1114]
var books: Set<String> = Set(["hello"])
var teams: [String] = [String]()
// empty array declarations
var cities2: [String] = []
var clues = [String]()
// enums
enum UIStyle {
    case light, dark, system
}
var style = UIStyle.light
// constants, can use it for constant that you don't have value for yet
let username1: String
// you won't be able to assign to username1 a second time since it's a constant
username1 = "hello"
print(username1)

// Day 5: if, switch, and ternary operator
// if statement
// comparison operators: >, >=, <, <=, !=, == | works w/ strings
// logical operators: && (and), || (or0
// in Swift, you cannot use integers like 1 to represent true
count = 0
if count == 1 {
    print("if statement")
} else if count == 2 {
    print("else if statement")
} else {
    print("else statement")
}
// enum example
enum TransportOption {
    case airplane, helicopter, bicycle, car, scooter
}
let transport = TransportOption.airplane

if transport == .airplane || transport == .helicopter {
    print("Let's fly!")
} else if transport == .bicycle {
    print("I hope there's a bike path…")
} else if transport == .car {
    print("Time to get stuck in traffic.")
} else {
    print("I'm going to hire a scooter now!")
}
// switch statements
enum Weather {
    case sun, rain, wind, snow, unknown
}
let forecast = Weather.sun
// Swift knows all possible values of Weather, so it'll complain if a case is missing
// Swift goes through cases in order, so make sure default is at the end
// fallthrough makes it so that the subsequent case is executed
// using it on every case will make every subsequent case execute
// note that ranges can be used for cases
switch forecast {
case .sun:
    print("It should be a nice day.")
    fallthrough
case .rain:
    print("Pack an umbrella.")
case .wind:
    print("Wear something warm")
case .snow:
    print("School is cancelled.")
case .unknown:
    print("Our forecast generator is broken!")
default:
    print("default statement")
}
// ternary conditional operator, ternary operators take 3 inputs
// Swift only has 1: ?
let age = 18
let canVote = age >= 18 ? "Yes" : "No"
print(canVote)
print(age == 18 ? "18" : "not 18")

// Day 6: Loops
// for loops
let platforms = ["iOS", "macOS", "tvOS", "watchOS"]
// loops over all items in platforms, similar to Python
// os is called a loop variable, which only exists inside the loop
for os in platforms {
    print("Swift works great on \(os).")
}
// can use ... to iterate through range of numbers (inclusive)
// range is a unique data type in Swift
for i in 1...12 {
    print("5 x \(i) is \(5 * i)")
}
// ..< excludes the last number
for i in 1..<12 {
    print("5 x \(i) is \(5 * i)")
}
// if you don't want a loop variable, use _
for _ in 1..<3 {
    print()
}
// another nice trick
let rang = 1...3
// will loop 3 times
for _ in rang {
    print()
}
// while loops
var roll = 0
while roll != 20 {
    roll = Int.random(in: 1...20)
    print("I rolled a \(roll)!")
}
// keywords break and continue exist in Swift
// and works the same as any other language
// break: breaks out of current loop block
// continue: continues onto next iteration

// Day 6: Functions, Parameters, and Return Values
// note that arguments must be passed in same order as parameters
// arrays can be passed like this: [Type], ex: arr: [Int] | same with stating return types
// dictionaries would be [Type: Type]
// returns are indicated like in Python, using an arrow to the type
// multiple functions can have the same name, they are distinguished by parameter names
func printTest(question: String, response: String) -> String {
    print("\(question)\n\(response)")
    return "Message Printed!"
}
print(printTest(question: "What's up!?", response: "The sky, dummy!"))
print(sqrt(4)) // sqrt is a built in function that returns a Double
// return is omitted here b/c Swift takes care of it since there's only 1 line of code
func areLettersIdentical(string1: String, string2: String) -> Bool {
    string1.sorted() == string2.sorted()
}
// if a function doesn't return a value, you can still use return to exit it immediately
// returning multiple values using tuples
// tuples: Swift will know if value is available unlike dictionaries, access values
// using . notation, values that it contains must be listed
func getUser() -> (firstName: String, lastName: String) {
    // ("Taylor", "Swift") would have worked also
    (firstName: "Taylor", lastName: "Swift")
}

let user = getUser()
// can also do:
// let (firstName, lastName) = getUser()
// ^ creates 2 constants: firstName and lastName
// you can even ignore a part of the tuple:
// let (firstName, _) = getUser()
print("Name: \(user.firstName) \(user.lastName)")
// can also be written like this:
//func getUser() -> (String, String) {
//    ("Taylor", "Swift")
//}
//
//let user = getUser()
// notice that you access the tuples elements like arrays but use . when you don't name
// its elements
// these are also available to use even when you name the elements
//print("Name: \(user.0) \(user.1)")

// parameter labels can be removed by adding an _ next to its name
func isUppercase(_ string: String) -> Bool {
    string == string.uppercased()
}

let string = "HELLO, WORLD"
let result = isUppercase(string)

// you can have an external name (used when calling funct) and internal name (used in funct)
// here, for is external and number is internal
// if for was used internally, the syntax would be invalid inside the function
func printTimesTables(for number: Int) {
    for i in 1...12 {
        print("(i) x (number) is (i * number)")
    }
}

printTimesTables(for: 5)

// Day 8: Default Values and Throwing Functions
// setting default value
// end has a default value of 12
func printTimesTables2(for number: Int, end: Int = 12) {
    for i in 1...12 {
        print("(i) x (number) is (i * number)")
    }
}
printTimesTables2(for: 5, end: 20)
printTimesTables2(for: 5)

// throwing errors, password ex
// Error is an existing Swift type
// create enum to define possible errors
enum PasswordError: Error {
    case short, obvious
}

// create a function that uses those enums to throw an error if there is one
func checkPassword(_ password: String) throws -> String {
    if password.count < 5 {
        throw PasswordError.short
    }

    if password == "12345" {
        throw PasswordError.obvious
    }

    if password.count < 8 {
        return "OK"
    } else if password.count < 10 {
        return "Good"
    } else {
        return "Excellent"
    }
}

// how to use?
// 1. Start a block of work that might throw errors, using do.
// 2. Call one or more throwing functions, using try.
// 3. Handle any thrown errors using catch.
// pseudocode:
//do {
//    try someRiskyWork()
//} catch {
//    print("Handle errors here")
//}
// ex:
let string3 = "12345"

do {
    let result = try checkPassword(string3)
    print("Password rating: (result)")
} catch {
    print("There was an error.")
}
// note: you can avoid do/catch blocks with try!, but it'll crash code if error is thrown
// use only when you're sure error cannot be thrown
// ex of catching epcific errors

do {
    let result = try checkPassword(string3)
    print("Password rating: (result)")
} catch PasswordError.short {
    print("Please use a longer password.")
} catch PasswordError.obvious {
    print("I have the same combination on my luggage!")
} catch {
    print("There was an error.")
}

// Note: Most errors thrown by Apple provide a meaningful message that you can present to your user if needed. Swift makes this available using an error value that’s automatically provided inside your catch block, and it’s common to read error.localizedDescription to see exactly what happened.

// Day 9: Closures, passing functions into functions
// creating a copy of a function
func greetUser() {
    print("Hi there!")
}
greetUser()
// greetCopy is a copy of greetUser
// notice how we do not write the parentheses after a function when we're copying it
// putting parentheses = calling function
var greetCopy = greetUser
greetCopy()

// you can also skip creating a function and assign functionality to a constant/variable
let sayHello = {
    print("Hi there!")
}
sayHello()
// this^ is an example of a closure expression, function that takes no parameters & does not return a value
// you can add parameters and return type by doing this
// in is used to mark the end of parameters and return type
let sayHello2 = { (name: String) -> String in
        "Hi \(name)!"
}

// writing greetCopy using type annotation
var greetCopy2: () -> Void = greetUser
// empty parentheses means function takes no parameters
// arrow means we're about to declare return type
// Void means "nothing" is being returned, could be replaced with ()

func getUserData(for id: Int) -> String {
    if id == 1989 {
        return "Taylor Swift"
    } else {
        return "Anonymous"
    }
}

let data: (Int) -> String = getUserData
let user2 = data(1989)
print(user)
// notice that data does not use for when passing 1989
// copy does not include external paramter name

// sorted() actually allows us to pass in a custom sorting function to control exactly that. This function must accept two strings, and return true if the first string should be sorted before the second, or false if the first string should be sorted after the second.
func captainFirstSorted(name1: String, name2: String) -> Bool {
    if name1 == "Suzanne" {
        return true
    } else if name2 == "Suzanne" {
        return false
    }

    return name1 < name2
}
// So, if the first name is Suzanne, return true so that name1 is sorted before name2. On the other hand, if name2 is Suzanne, return false so that name1 is sorted after name2. If neither name is Suzanne, just use < to do a normal alphabetical sort.
// sorted() can be passed a function to create a custom sort order, and as long as that function a) accepts two strings, and b) returns a Boolean, sorted() can use it.
let team = ["Gloria", "Suzanne", "Piper", "Tiffany", "Tasha"]
let captainFirstTeam = team.sorted(by: captainFirstSorted)
print(captainFirstTeam)
// passing a closure to sorted instead of a function
// note that if you don't return anything for a closure, you could just put in after the parameters
// ex: (name1: String, name2: String) in
// note that closures cannot use external parameter labels
// note that when calling a closure function, you do not have to name the variable of the argument that you're passing into
let captainFirstTeam2 = team.sorted(by: { (name1: String, name2: String) -> Bool in
    if name1 == "Suzanne" {
        return true
    } else if name2 == "Suzanne" {
        return false
    }

    return name1 < name2
})

// we can shorten this, since sorted expects a function that takes 2 Strings and returns a Bool, we don't have to declare that
// we can do this: let captainFirstTeam = team.sorted(by: { name1, name2 in
// we can also shorten the code by using a special syntax called trailing closure syntax:
let captainFirstTeam3 = team.sorted { name1, name2 in
    if name1 == "Suzanne" {
        return true
    } else if name2 == "Suzanne" {
        return false
    }

    return name1 < name2
}

// Swift can automatically provide parameter names for us, using shorthand syntax. With this syntax we don’t even write name1, name2 in any more, and instead rely on specially named values that Swift provides for us: $0 and $1, for the first and second strings respectively.
let captainFirstTeam4 = team.sorted {
    if $0 == "Suzanne" {
        return true
    } else if $1 == "Suzanne" {
        return false
    }

    return $0 < $1
}

// reverse sorting
let reverseTeam = team.sorted {
    return $0 > $1
}
// remember: when you're down to a single line of code in any function/closure, you can get rid of return
let reverseTeam2 = team.sorted { $0 > $1 }

// good rules of thumb of when you probably shouldn't use shorthand syntax
// 1. The closure’s code is long.
// 2. $0 and friends are used more than once each.
// 3. You get three or more parameters (e.g. $2, $3, etc).

// filter() function lets us run some code on every item in the array, and will send back a new array containing every item that returns true for the function. So, we could find all team players whose name begins with T like this:
let tOnly = team.filter { $0.hasPrefix("T") }
print(tOnly)

// map() function lets us transform every item in the array using some code of our choosing, and sends back a new array of all the transformed items:
let uppercaseTeam = team.map { $0.uppercased() }
print(uppercaseTeam)
// When working with map(), the type you return doesn’t have to be the same as the type you started with – you could convert an array of integers to an array of strings, for example.

// writing functions that accepts other functions as parameters
func makeArray(size: Int, using generator: () -> Int) -> [Int] {
    var numbers = [Int]()

    for _ in 0..<size {
        let newNumber = generator()
        numbers.append(newNumber)
    }

    return numbers
}
// uses generator function/closure to get an int to append to numbers array
// using makeArray
// notice how we pass size inside parentheses but use shorthand closure notation for generator
let rolls = makeArray(size: 50) {
    Int.random(in: 1...20)
}
print(rolls)
// this will work too
func generateNumber() -> Int {
    Int.random(in: 1...20)
}
// notice that when you pass a function/closure as an argument, you don't include parentheses
let newRolls = makeArray(size: 50, using: generateNumber)
print(newRolls)
// functions can accept multiple function parameters
func doImportantWork(first: () -> Void, second: () -> Void, third: () -> Void) {
    print("About to start first work")
    first()
    print("About to start second work")
    second()
    print("About to start third work")
    third()
    print("Done!")
}
// When it comes to calling that, the first trailing closure is identical to what we’ve used already, but the second and third are formatted differently: you end the brace from the previous closure, then write the external parameter name and a colon, then start another brace.
doImportantWork {
    print("This is the first work")
} second: {
    print("This is the second work")
} third: {
    print("This is the third work")
}
// you can chain multiple closure functions like this luckyNumbers.first { }.second { } where first and second are different functions
// like sorted(), map(), or filter() and luckyNumbers is an array or some other data type

// Day 10: Structs, computed properties, and property observers
// notice how we camel case the first letter of a struct, this is convention
// inside the struct, we use camel case where the first letter is lowercased
// note that structs can have their own functions
struct Album {
    let title: String
    let artist: String
    let year: Int

    func printSummary() {
        print("\(title) (\(year)) by \(artist)")
    }
}
// making variables/constants out of your structs, printing their values, and calling their functions
// notice that you create a struct var/const like how you'd call a function
let red = Album(title: "Red", artist: "Taylor Swift", year: 2012)
let wings = Album(title: "Wings", artist: "BTS", year: 2016)

print(red.title)
print(wings.artist)

red.printSummary()
wings.printSummary()
// when creating a constant that holds a struct, everything inside that struct also becomes constant
// you cannot change any variables inside that struct
// functions can be called, but they cannot modify the struct's variables
// we can bypass this by using the mutating key word
// note that we can also set default values for variables (not constants) in structs
// vacationRemaining can completely be removed from the initializer, which will be discussed later
struct Employee {
    let name: String
    var vacationRemaining = 15

    mutating func takeVacation(days: Int) {
        if vacationRemaining > days {
            vacationRemaining -= days
            print("I'm going on vacation!")
            print("Days remaining: \(vacationRemaining)")
        } else {
            print("Oops! There aren't enough days remaining.")
        }
    }
}
var archer = Employee(name: "Sterling Archer", vacationRemaining: 14)
archer.takeVacation(days: 5)
print(archer.vacationRemaining)
// if we use let archer instead of var archer, we'll get an error since we cannot change any value inside a constant
// some terms to know:
// 1. Variables and constants that belong to structs are called properties.
// 2. Functions that belong to structs are called methods.
// 3. When we create a constant or variable out of a struct, we call that an instance – you might create a dozen unique instances of the Album struct, for example.
//4. When we create instances of structs we do so using an initializer like this: Album(title: "Wings", artist: "BTS", year: 2016).
// Swift silently creates a special function inside the struct called init(), using all the properties of the struct as its parameters. It then automatically treats these two pieces of code as being the same:
var archer1 = Employee(name: "Sterling Archer", vacationRemaining: 14)
var archer2 = Employee.init(name: "Sterling Archer", vacationRemaining: 14)
// note that you can have functions in a struct call the struct's other functions
// another way to implement employee
struct Employee2 {
    let name: String
    var vacationRemaining: Int
}
var archer3 = Employee2(name: "Sterling Archer", vacationRemaining: 14)
archer3.vacationRemaining -= 5
print(archer3.vacationRemaining)
archer3.vacationRemaining -= 3
print(archer3.vacationRemaining)
// another way to declare employee so that we keep original value of vacation allocated
// here, vacationRemaining acts as both a variable and function
// it's called a computed property, and it than return values or update values just like a regular function
// constants cannot be computed properties
// also no need for -> for return type since your return type would just be the var type
// once again, return is omitted here due to there only being 1 line of code
struct Employee3 {
    let name: String
    var vacationAllocated = 14
    var vacationTaken = 0

    var vacationRemaining: Int {
        vacationAllocated - vacationTaken
    }
}
var archer4 = Employee3(name: "Sterling Archer", vacationAllocated: 14)
archer4.vacationTaken += 4
print(archer4.vacationRemaining)
archer4.vacationTaken += 4
print(archer4.vacationRemaining)

// now what if we want to edit vacationRemaining
// for that, we need to declare what to do when we access it to read (getter) and what to do when we're setting it to a value (setter)
struct Employee4 {
    let name: String
    var vacationAllocated = 14
    var vacationTaken = 0

    var vacationRemaining: Int {
        get {
                // what to do if reading
                vacationAllocated - vacationTaken
            }

            set {
                // what to do if writing
                // notice that newValue is provided by Swift
                vacationAllocated = vacationTaken + newValue
            }
    }
}
var archer5 = Employee4(name: "Sterling Archer", vacationAllocated: 14)
archer5.vacationTaken += 4
archer5.vacationRemaining = 5
print(archer5.vacationAllocated)

// Swift lets us create property observers, which are special pieces of code that run when properties change. These take two forms: a didSet observer to run when the property just changed, and a willSet observer to run before the property changed.
// note that Swift provides oldValue (in didSet) and newValue
// property observers cannot be attached to constants b/c they won't ever change
struct App {
    var contacts = [String]() {
        willSet {
            // done before contacts is modified
            print("Current value is: \(contacts)")
            print("New value will be: \(newValue)")
        }

        didSet {
            // done after contacts is modified
            print("There are now \(contacts.count) contacts.")
            print("Old value was \(oldValue)")
        }
    }
}
var app = App()
app.contacts.append("Adrian E")
app.contacts.append("Allen W")
app.contacts.append("Ish S")

// custome initializers
// you can also create your own as long as you follow one golden rule: all properties must have a value by the time the initializer ends.
// distinguish between parameter names and properties by using self. for property values
// use init keyword
struct Player {
    let name: String
    let number: Int

    init(name: String) {
        self.name = name
        number = Int.random(in: 1...99)
    }
}

let player = Player(name: "Megan R")
print(player.number)
// some things to note
// 1. There is no func keyword. Yes, this looks like a function in terms of its syntax, but Swift treats initializers specially.
// 2. Even though this creates a new Player instance, initializers never explicitly have a return type – they always return the type of data they belong to.
// 3. used self to assign parameters to properties to clarify we mean “assign the name parameter to my name property”
// Although you can call other methods of your struct inside your initializer, you can’t do so before assigning values to all your properties – Swift needs to be sure everything is safe before doing anything else.
// You can add multiple initializers to your structs if you want, as well as leveraging features such as external parameter names and default values. However, as soon as you implement your own custom initializers you’ll lose access to Swift’s generated memberwise initializer unless you take extra steps to retain it. This isn’t an accident: if you have a custom initializer, Swift effectively assumes that’s because you have some special way to initialize your properties, which means the default one should no longer be available.

// Day 11: Access control, static properties, and methods
// use private keyword to ensure a variable, function, etc. is accessible only inside the struct – by methods that belong to the struct, as well as any computed properties, property observers, and so on.
// This is called access control, because it controls how a struct’s properties and methods can be accessed from outside the struct.
struct BankAccount {
    private var funds = 0

    mutating func deposit(amount: Int) {
        funds += amount
    }

    mutating func withdraw(amount: Int) -> Bool {
        if funds >= amount {
            funds -= amount
            return true
        } else {
            return false
        }
    }
}
// some usefull access control keywords
// Use private for “don’t let anything outside the struct use this.”
// Use fileprivate for “don’t let anything outside the current file use this.”
// Use public for “let anyone, anywhere use this.”
// private(set). This means “let anyone read this property, but only let my methods write it.”
// If you use private access control for one or more properties, chances are you’ll need to create your own initializer.
// if you set a var inside a struct to private, Swift won't be able to generate its memberwise initializer if it has some public properties, otherwise you can do structName()

// static properties and methods
struct School {
    // static var studentCount = 0

    static func add(student: String) {
        print("\(student) joined the school.")
        // studentCount += 1
    }
}
School.add(student: "Taylor Swift")
// print(School.studentCount)
// we can literally use add() and studentCount directly on the struct. This is because those are both static, which means they don’t exist uniquely on instances of the struct.
// we’re able to modify the studentCount property without marking the method as mutating – that’s only needed with regular struct functions for times when an instance of struct was created as a constant, and there is no instance when calling add()
// If you want to mix and match static and non-static properties and methods, there are two rules:
//
// 1. To access non-static code from static code… you’re out of luck: static properties and methods can’t refer to non-static properties and methods because it just doesn’t make sense – which instance of School would you be referring to?
// 2. To access static code from non-static code, always use your type’s name such as School.studentCount. You can also use Self to refer to the current type.
// Now we have self and Self, and they mean different things: self refers to the current value of the struct, and Self refers to the current type.

// example of use case for static
// this can be used anywhere in the app now
struct AppData {
    static let version = "1.3 beta 2"
    static let saveFilename = "settings.json"
    static let homeURL = "https://www.hackingwithswift.com"
}

// another use example is an example of a struct
struct Employee5 {
    let username: String
    let password: String

    static let example = Employee5(username: "cfederighi", password: "hairforceone")
}
// note that referencing a static property inside a method like init in a struct is not allowed, use structName.staticVarName

// Day 12: Classes, inheritance
// classes differ from structs in five key places:
//
// 1. You can make one class build upon functionality in another class, gaining all its properties and methods as a starting point. If you want to selectively override some methods, you can do that too.
// 2. Because of that first point, Swift won’t automatically generate a memberwise initializer for classes. This means you either need to write your own initializer, or assign default values to all your properties.
// 3. When you copy an instance of a class, both copies share the same data – if you change one copy, the other one also changes.
// 4. When the final copy of a class instance is destroyed, Swift can optionally run a special function called a deinitializer.
// 5. Even if you make a class constant, you can still change its properties as long as they are variables.

// class creation example
class Game {
    var score = 0 {
        didSet {
            print("Score is now \(score)")
        }
    }
}

var newGame = Game()
newGame.score += 10

// empty class
class Empty {}
var empt = Empty()

// inheritance
class Employe {
    let hours: Int

    init(hours: Int) {
        self.hours = hours
    }
    func printSummary() {
        print("I work \(hours) hours a day.")
    }
}
// notice how each of these child classes can access hours from the parent class
class Developer: Employe {
    func work() {
        print("I'm writing code for \(hours) hours.")
    }
    // overriding/customizing a function iherited from the parent
    override func printSummary() {
        print("I'm a developer who will sometimes work \(hours) hours a day, but other times spend hours arguing about whether code should be indented using tabs or spaces.")
    }
}

class Manager: Employe {
    func work() {
        print("I'm going to meetings for \(hours) hours.")
    }
}
let robert = Developer(hours: 8)
let joseph = Manager(hours: 10)
robert.work()
joseph.work()
robert.printSummary()
joseph.printSummary()

// if your parent class has a work() method that takes no parameters, but the child class has a work() method that accepts a string to designate where the work is being done, that does not require override because you aren’t replacing the parent method.
// If you know for sure that your class should not support inheritance, you can mark it as final. This means the class itself can inherit from other things, but can’t be used to inherit from – no child class can use a final class as its parent.
// to use final, just put it before class: final class ExClass

// initializers
// if a child class has any custom initializers, it must always call the parent’s initializer after it has finished setting up its own properties, if it has any.

// Swift will never generate a memberwise initializer for you. So, you either need to write your own initializer, or provide default values for all the properties of the class

class Vehicle {
    let isElectric: Bool

    init(isElectric: Bool) {
        self.isElectric = isElectric
    }
}

class Car: Vehicle {
    let isConvertible: Bool

    init(isElectric: Bool, isConvertible: Bool) {
        self.isConvertible = isConvertible
        super.init(isElectric: isElectric)
    }
}

// note: super is used to refer to the parent class and can be used with other vars/const/methods, not just initializers
// If a subclass does not have any of its own initializers, it automatically inherits the initializers of its parent class.

// copying classes
// In Swift, all copies of a class instance share the same data, meaning that any changes you make to one copy will automatically change the other copies. This happens because classes are reference types in Swift, which means all copies of a class all refer back to the same underlying pot of data.
class User {
    var username = "Anonymous"
    
    // function used to create a unique/deep copy
    func copy() -> User {
        let user = User()
        user.username = username
        return user
    }
}
var user1 = User()
var user3 = user1
user3.username = "Taylor"
print(user1.username)
print(user3.username)

// deinitializers, destroying objects
//This comes with a few small provisos (conditions):
//
// 1. Just like initializers, you don’t use func with deinitializers – they are special.
// 2. Deinitializers can never take parameters or return data, and as a result aren’t even written with parentheses.
// 3. Your deinitializer will automatically be called when the final copy of a class instance is destroyed. That might mean it was created inside a function that is now finishing, for example.
// 4. We never call deinitializers directly; they are handled automatically by the system.
// 5. Structs don’t have deinitializers, because you can’t copy them.

// When a value exits scope we mean the context it was created in is going away. In the case of structs that means the data is being destroyed, but in the case of classes it means only one copy of the underlying data is going away – there might still be other copies elsewhere. But when the final copy goes away – when the last constant or variable pointing at a class instance is destroyed – then the underlying data is also destroyed, and the memory it was using is returned back to the system.

class User2 {
    let id: Int

    init(id: Int) {
        self.id = id
        print("User \(id): I'm alive!")
    }

    deinit {
        print("User \(id): I'm dead!")
    }
}

for i in 1...3 {
    let user = User2(id: i)
    print("User \(user.id): I'm in control!")
}
// Remember, the deinitializer is only called when the last remaining reference to a class instance is destroyed. This might be a variable or constant you have stashed away, or perhaps you stored something in an array.
var users = [User2]()

for i in 1...3 {
    let user = User2(id: i)
    print("User \(user.id): I'm in control!")
    users.append(user)
}

print("Loop is finished!")
users.removeAll()
print("Array is clear!")

// class variables
class User3 {
    var name = "Paul"
}

let user4 = User3()
user4.name = "Taylor"
print(user4.name)
// Think of it like this: we created a constant signpoint pointing towards a user, but we erased that user’s name tag and wrote in a different name. The user in question hasn’t changed – the person still exists – but a part of their internal data has changed.
// Now, if we had made the name property a constant using let, then it could not be changed – we have a constant signpost pointing to a user, but we’ve written their name in permanent ink so that it can’t be erased.
// In contrast, what happens if we made both the user instance and the name property variables? Now we’d be able to change the property, but we’d also be able to change to a wholly new User instance if we wanted. To continue the signpost analogy, it would be like turning the signpost to point at wholly different person.
var user5 = User3()
user5.name = "Taylor"
user5 = User3()
print(user5.name)

// So, we end up with four options:
// 1. Constant instance, constant property – a signpost that always points to the same user, who always has the same name.
// 2. Constant instance, variable property – a signpost that always points to the same user, but their name can change.
// 3. Variable instance, constant property – a signpost that can point to different users, but their names never change.
// 4. Variable instance, variable property – a signpost that can point to different users, and those users can also change their names.
// note: classes don’t need to use the mutating keyword with methods that change their data

// Day 13: Protocols and extensions
// protocols let us define a series of properties and methods that we want to use. They don’t implement those properties and methods – they don’t actually put any code behind it – they just say that the properties and methods must exist, a bit like a blueprint.
protocol Vehicle2 {
    func estimateTime(for distance: Int) -> Int
    func travel(distance: Int)
}
// Breaking down the code above:
// 1. To create a new protocol we write protocol followed by the protocol name. This is a new type, so we need to use camel case starting with an uppercase letter.
// 2. Inside the protocol we list all the methods we require in order for this protocol to work the way we expect.
// 3. These methods do not contain any code inside – there are no function bodies provided here. Instead, we’re specifying the method names, parameters, and return types. You can also mark methods as being throwing or mutating if needed.

// Well, now we can design types that work with that protocol. This means creating new structs, classes, or enums that implement the requirements for that protocol, which is a process we call adopting or conforming to the protocol.

// The protocol doesn’t specify the full range of functionality that must exist, only a bare minimum. This means when you create new types that conform to the protocol you can add all sorts of other properties and methods as needed.

// ex: we could make a Car struct that conforms to Vehicle, like this:
struct Car2: Vehicle2 {
    func estimateTime(for distance: Int) -> Int {
        distance / 50
    }

    func travel(distance: Int) {
        print("I'm driving \(distance)km.")
    }

    func openSunroof() {
        print("It's a nice day!")
    }
}
// Observe:
// 1. We tell Swift that Car conforms to Vehicle by using a colon after the name Car, just like how we mark subclasses.
// 2. All the methods we listed in Vehicle must exist exactly in Car. If they have slightly different names, accept different parameters, have different return types, etc, then Swift will say we haven’t conformed to the protocol.
// 3. The methods in Car provide actual implementations of the methods we defined in the protocol. In this case, that means our struct provides a rough estimate for how many minutes it takes to drive a certain distance, and prints a message when travel() is called.
// 4. The openSunroof() method doesn’t come from the Vehicle protocol, and doesn’t really make sense there because many vehicle types don’t have a sunroof. But that’s okay, because the protocol describes only the minimum functionality conforming types must have, and they can add their own as needed.

func commute(distance: Int, using vehicle: Vehicle2) {
    if vehicle.estimateTime(for: distance) > 100 {
        print("That's too slow! I'll try a different vehicle.")
    } else {
        vehicle.travel(distance: distance)
    }
}

let car = Car2()
commute(distance: 100, using: car)
// Observe: Swift knows that any type conforming to Vehicle2 must implement both the estimateTime() and travel() methods, and so it actually lets us use Vehicle2 as the type of our parameter rather than Car2.
struct Bicycle: Vehicle2 {
    func estimateTime(for distance: Int) -> Int {
        distance / 10
    }

    func travel(distance: Int) {
        print("I'm cycling \(distance)km.")
    }
}

let bike = Bicycle()
commute(distance: 50, using: bike)

// As well as methods, you can also write protocols to describe properties that must exist on conforming types. To do this, write var, then a property name, then list whether it should be readable and/or writeable.
protocol Vehicle3 {
    var name: String { get }
    var currentPassengers: Int { get set }
    func estimateTime(for distance: Int) -> Int
    func travel(distance: Int)
}
struct Car3: Vehicle3 {
    let name = "Car"
    var currentPassengers = 1
    func estimateTime(for distance: Int) -> Int {
        distance / 50
    }

    func travel(distance: Int) {
        print("I'm driving \(distance)km.")
    }

    func openSunroof() {
        print("It's a nice day!")
    }
}
struct Bicycle2: Vehicle3 {
    let name = "Bicycle"
    var currentPassengers = 1
    func estimateTime(for distance: Int) -> Int {
        distance / 10
    }

    func travel(distance: Int) {
        print("I'm cycling \(distance)km.")
    }
}
// That adds two properties:
// 1. A string called name, which must be readable. That might mean it’s a constant, but it might also be a computed property with a getter.
// 2. An integer called currentPassengers, which must be read-write. That might mean it’s a variable, but it might also be a computed property with a getter and setter.
// Type annotation is required for both of them, because we can’t provide a default value in a protocol, just like how protocols can’t provide implementations for methods.
// Again, though, you could replace those with computed properties as long as you obey the rules – if you use { get set } then you can’t conform to the protocol using a constant property.
// Note: Properties cannot only be set in Swift. If you use set, you must also use get. Also, note the use of var. You can use var in the protocol but then make the property a constant in the class/struct as long as it is read only.
// You can also return protocols from functions. E.g. if your return type is Vehicle3, you can return car3 or bike2.
// Example of what you can do with this:
func getTravelEstimates(using vehicles: [Vehicle3], distance: Int) {
    for vehicle in vehicles {
        let estimate = vehicle.estimateTime(for: distance)
        print("\(vehicle.name): \(estimate) hours to travel \(distance)km")
    }
}
let car2 = Car3()
let bike2 = Bicycle2()
getTravelEstimates(using: [car2, bike2], distance: 150)
// You can conform to as many protocols as you need, just by listing them one by one separated with a comma. If you ever need to subclass something and conform to a protocol, you should put the parent class name first, then write your protocols afterwards.

// opaque return types
// helps remove complexity in code
// They let us hide information in our code, but not from the Swift compiler. This means we reserve the right to make our code flexible internally so that we can return different things in the future, but Swift always understands the actual data type being returned and will check it appropriately.
func getRandomNumber() -> some Equatable {
    Int.random(in: 1...6)
}

func getRandomBool() -> some Equatable {
    Bool.random()
}
// we'd get an error if we just had Equatable by itself
// Equatable, a common Swift protocol, which means “can be compared for equality.” The Equatable protocol is what allows us to use ==.
// ex of what some does: returning Vehicle means "any sort of Vehicle type but we don't know what", whereas returning some Vehicle means "a specific sort of Vehicle type but we don't want to say which one.”

// In English, we might say something like this: “there’s a screen with a toolbar at the top, a tab bar at the bottom, and in the middle is a scrolling grid of color icons, each of which has a label below saying what the icon means written in a bold font, and when you tap an icon a message appears.”
// When SwiftUI asks for our layout, that description – the whole thing – becomes the return type for the layout. We need to be explicit about every single thing we want to show on the screen, including positions, colors, font sizes, and more. Can you imagine typing that as your return type? It would be a mile long! And every time you changed the code to generate your layout, you’d need to change the return type to match.
// This is where opaque return types come to the rescue: we can return the type some View, which means that some kind of view screen will be returned but we don’t want to have to write out its mile-long type. At the same time, Swift knows the real underlying type because that’s how opaque return types work: Swift always knows the exact type of data being sent back, and SwiftUI will use that to create its layouts.

// creating & using extensions
// Extensions let us add functionality to any type, whether we created it or someone else created it – even one of Apple’s own types.
extension String {
    func trimmed() -> String {
        self.trimmingCharacters(in: .whitespacesAndNewlines)
    }
    mutating func trim() {
        self = self.trimmed()
    }
}
// makes trimming white spaces and new lines easier by making the function call shorter
// Breaking down the code:
// 1. We start with the extension keyword, which tells Swift we want to add functionality to an existing type.
// 2. Which type? Well, that comes next: we want to add functionality to String.
// 3. Now we open a brace, and all the code until the final closing brace is there to be added to strings.
// 4. We’re adding a new method called trimmed(), which returns a new string.
// 5. Inside there we call the same method as before: trimmingCharacters(in:), sending back its result.
// 6. Notice how we can use self here – that automatically refers to the current string. This is possible because we’re currently in a string extension.
// quote was a string we defined all the way at the beginning
let trimmed_quote = quote.trimmed()
// We could have made a global function like this to take care of it:
func trim(_ string: String) -> String {
    string.trimmingCharacters(in: .whitespacesAndNewlines)
}
let trimmed2 = trim(quote)
// However, the extension has a number of benefits over the global function, including:
// 1. When you type quote. Xcode brings up a list of methods on the string, including all the ones we add in extensions. This makes our extra functionality easy to find.
// 2. Writing global functions makes your code rather messy – they are hard to organize and hard to keep track of. On the other hand, extensions are naturally grouped by the data type they are extending.
// 3. Because your extension methods are a full part of the original type, they get full access to the type’s internal data. That means they can use properties and methods marked with private access control, for example.
// What’s more, extensions make it easier to modify values in place – i.e., to change a value directly, rather than return a new value.

// Because the quote string was created as a variable, we can trim it in place like this:
quote.trim()
// Notice how the method has slightly different naming now: when we return a new value we used trimmed(), but when we modified the string directly we used trim(). This is intentional, and is part of Swift’s design guidelines: if you’re returning a new value rather than changing it in place, you should use word endings like ed or ing, like reversed().

//  Previously I introduced you to the sorted() method on arrays. Now you know this rule, you should realize that if you create a variable array you can use sort() on it to sort the array in place rather than returning a new copy.

// You can also use extensions to add properties to types, but there is one rule: they must only be computed properties, not stored properties. The reason for this is that adding new stored properties would affect the actual size of the data types – if we added a bunch of stored properties to an integer then every integer everywhere would need to take up more space in memory, which would cause all sorts of problems.

// If we implement a custom initializer inside an extension, then Swift won’t disable the automatic memberwise initializer. This makes sense if you think about it: if adding a new initializer inside an extension also disabled the default initializer, one small change from us could break all sorts of other Swift code.
struct Book {
    let title: String
    let pageCount: Int
    let readingHours: Int
}
extension Book {
    init(title: String, pageCount: Int) {
        self.title = title
        self.pageCount = pageCount
        self.readingHours = pageCount / 50
    }
}

// creating & using protocol extensions
// notes:
// Xcode’s playgrounds run their code from top to bottom, so make sure you put extensions before where it’s used.
// Array, Set, and Dictionary all conform to a built-in protocol called Collection, through which they get functionality such as contains(), sorted(), reversed(), and more.
extension Collection {
    var isNotEmpty: Bool {
        isEmpty == false
    }
}
// isEmpty is a Collection property that indicates whether the data type (Array, Set, or Dictionary) is empty

// More importantly, by extending the protocol we’re adding functionality that would otherwise need to be done inside individual structs. This is really powerful, and leads to a technique Apple calls protocol-oriented programming – we can list some required methods in a protocol, then add default implementations of those inside a protocol extension. All conforming types then get to use those default implementations, or provide their own as needed.
protocol Person {
    var name: String { get }
    func sayHello()
}
extension Person {
    func sayHello() {
        print("Hi, I'm \(name)")
    }
}
struct Employee7: Person {
    let name: String
}
// Because it conforms to Person, we could use the default implementation we provided in our extension:
let taylor = Employee7(name: "Taylor Swift")
taylor.sayHello()

// Day 14: Optionals and nil coalescing
// optionals: data that might be present or might not, primarily represented by placing a question mark after your data type
// nil: like null in C or None in Python, no value
// Note: All of the unwrapping techniques shown can only be used on optionals.

let opposites = [
    "Mario": "Wario",
    "Luigi": "Waluigi"
]

let peachOpposite = opposites["Peach"]
// in this case peachOpposite would be a String? rather than a String

// Swift likes our code to be predictable, which means it won’t let us use data that might not be there. In the case of optionals, that means we need to unwrap the optional in order to use it
// Swift gives us two primary ways of unwrapping optionals, but the one you’ll see the most looks like this:
if let marioOpposite = opposites["Mario"] {
    print("Mario's opposite is \(marioOpposite)")
}
// This if let syntax is very common in Swift, and combines creating a condition (if) with creating a constant (let). Together, it does three things:
// 1. It reads the optional value from the dictionary.
// 2. If the optional has a string inside, it gets unwrapped – that means the string inside gets placed into the marioOpposite constant.
// 3. The condition has succeeded – we were able to unwrap the optional – so the condition’s body is run.

// else block can also be added
var username: String? = nil

if let unwrappedName = username {
    print("We got a user: \(unwrappedName)")
} else {
    print("The optional was empty.")
}

// regular data types without ? are called non-optionals
// we can’t use an optional value where a non-optional is needed, because if there were no value inside we’d hit a problem
// it must first be unwrapped
func square(number: Int) -> Int {
    number * number
}

var number: Int? = nil
if let number = number {
    print(square(number: number))
}
// When unwrapping optionals, it’s very common to unwrap them into a constant of the same name. This is perfectly allowable in Swift, and means we don’t need to keep naming constants unwrappedNumber or similar.
// What’s happening here is that we’re temporarily creating a second constant of the same name, available only inside the condition’s body. This is called shadowing, and it’s mainly used with optional unwraps like you can see above. So, inside the condition’s body we have an unwrapped value to work with – a real Int rather than an optional Int? – but outside we still have the optional.

// another way to unwrap options: guard let
func printSquare(of number: Int?) {
    guard let number = number else {
        print("Missing input")
        return
    }

    print("\(number) x \(number) is \(number * number)")
}
// Like if let, guard let checks whether there is a value inside an optional, and if there is it will retrieve the value and place it into a constant of our choosing.

// Difference: So, if let runs the code inside its braces if the optional had a value, and guard let runs the code inside its braces if the optional didn’t have a value. We can use if let to run some code if the optional has a value, or guard let to run some code if the optional doesn’t have a value – but with guard we must always exit the function afterwards.
// What guard provides is the ability to check whether our program state is what we expect, and if it isn’t to bail out – to exit from the current function. This is sometimes called an early return: we check that all a function’s inputs are valid right as the function starts, and if any aren’t valid we get to run some code then exit straight away. If all our checks pass, our function can run exactly as intended.
// guard is designed exactly for this style of programming, and in fact does two things to help:
// 1. If you use guard to check a function’s inputs are valid, Swift will always require you to use return if the check fails.
// 2. If the check passes and the optional you’re unwrapping has a value inside, you can use it after the guard code finishes.

// So: use if let to unwrap optionals so you can process them somehow, and use guard let to ensure optionals have something inside them and exit otherwise.
// Tip: You can use guard with any condition, including ones that don’t unwrap optionals. For example, you might use guard someArray.isEmpty else { return }.

// 3rd way to unwrap optionals: nil coalescing operator - it lets us unwrap an optional and provide a default value if the optional was empty.

let captains = [
    "Enterprise": "Picard",
    "Voyager": "Janeway",
    "Defiant": "Sisko"
]
let new = captains["Serenity"] ?? "N/A"
// That will read the value from the captains dictionary and attempt to unwrap it. If the optional has a value inside it will be sent back and stored in new, but if it doesn’t then “N/A” will be used instead.
// This means no matter what the optional contains – a value or nil – the end result is that new will be a real string, not an optional one. That might be the string from inside the captains value, or it might be “N/A”.

// for dictionaries, you can do this:
let new2 = captains["Serenity", default: "N/A"]
// but ?? will work with any optional
// ex:
let tvShows = ["Archer", "Babylon 5", "Ted Lasso"]
let favorite = tvShows.randomElement() ?? "None"
// note: .randomElement() returns a random element from the array

// optional chaining: a simplified syntax for reading optionals inside optionals
let names = ["Arya", "Bran", "Robb", "Sansa"]

let chosen = names.randomElement()?.uppercased() ?? "No one"
print("Next in line: \(chosen)")
// Optional chaining allows us to say “if the optional has a value inside, unwrap it then…” and we can add more code. In our case we’re saying “if we managed to get a random element from the array, then uppercase it.” Remember, randomElement() returns an optional because the array might be empty.

//The magic of optional chaining is that it silently does nothing if the optional was empty – it will just send back the same optional you had before, still empty. This means the return value of an optional chain is always an optional, which is why we still need nil coalescing to provide a default value.

//Optional chains can go as long as you want, and as soon as any part sends back nil the rest of the line of code is ignored and sends back nil.
// ex:
struct Book2 {
    let title: String
    let author: String?
}

var book: Book2? = nil
let author = book?.author?.first?.uppercased() ?? "A"
print(author)
// So, it reads “if we have a book, and the book has an author, and the author has a first letter, then uppercase it and send it back, otherwise send back A”.
// .first checks if there's a first letter, note that it's an optional since the first letter may not exist

// handling function failure with optionals
// If all we care about is whether the function succeeded or failed, we can use an optional try to have the function return an optional value. If the function ran without throwing any errors then the optional will contain the return value, but if any error was thrown the function will return nil. This means we don’t get to know exactly what error was thrown, but often that’s fine – we might just care if the function worked or not.
enum UserError: Error {
    case badID, networkFailed
}

func getUser(id: Int) throws -> String {
    throw UserError.networkFailed
}

if let user = try? getUser(id: 23) {
    print("User: \(user)")
}
// notice the ? after try
// try? makes getUser() return an optional string, which will be nil if any errors are thrown. If you want to know exactly what error happened then this approach won’t be useful, but a lot of the time we just don’t care

// ex of try? with nil coalescing:
let user7 = (try? getUser(id: 23)) ?? "Anonymous"
print(user7)

// You’ll find try? is mainly used in three places:

// 1. In combination with guard let to exit the current function if the try? call returns nil.
// 2. In combination with nil coalescing to attempt something or provide a default value on failure.
// 3. When calling any throwing function without a return value, when you genuinely don’t care if it succeeded or not – maybe you’re writing to a log file or sending analytics to a server, for example.

print(Date.now)

//Class
class Department {
    constructor(n, a) {
        this.name = n; //this = the object that will have the property called name with the value "n"
        this.age = a;
    }
    describe() {
        // I can also declare the type of "this" in this case, it is Department which determine the type of each property.
        // how to add method in class, very similar to a function structure.
        console.log("describe: " + this.name); // if I just write "name", describe function would try to refer to "name" which could exist in a global way. To specify the whereabout of name, I can attach "this"
    } // If I use just "name", then the instructor would say "hey, I cannot find name"
} //constructor is executed when I makes object through the class.
const accounting = new Department("anderson", 3);
console.log(accounting); // { name: 'anderson', age:3} --> name's type is string as you can see above, and age's type is number alike.
accounting.describe(); // describe: anderson
// But how is it that i will set the new array containing describe function. like that
const accounting2 = {
    describe: accounting.describe
};
//accounting2.describe(); // it's answer is "undefined" before I set the type of this because, in this case, it is like,
/*
const accounting22 = {
  describe() {console.log("describe:" + this.name);} ----> the problem is, in this object, "this" indicates accounting22 and there is no "name" property's value in accounting22. therefore, the result is "undefined"
};
 */
// but after I set the type of this, it makes an error because accounting2 is not assignable to the type "Department" : name,age.
// to make it runnable, I should follow the type of Department. in other words
const accounting3 = {
    name: "Dummy",
    age: 23,
    describe: accounting.describe // If you want to utilize accounting.describe, you should match the entire properties inside accounting3 to the structure of "Department" because I declared the type of this is "Department"
};
accounting3.describe();
//private and public access
class practicePravate {
    constructor() {
        this.employees = [];
    }
    addstaff(people) {
        this.employees.push(people);
    }
    staffInfo() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
const staff = new practicePravate();
staff.addstaff("anderson");
staff.addstaff("marry");
staff.employees[2] = "goerge";
staff.staffInfo(); // ['anderson' , 'marry']
//# sourceMappingURL=project6.js.map
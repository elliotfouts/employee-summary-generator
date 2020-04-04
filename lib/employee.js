class Employee {
    constructor(name, id, email, title) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.title = "Employee";
    }
}
Employee.prototype.getName = function(){ return this.name};
Employee.prototype.getId = function(){ return this.id};
Employee.prototype.getEmail = function(){ return this.email};
Employee.prototype.getRole = function(){ return this.title};

module.exports = Employee;
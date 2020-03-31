class Employee {
    constructor(name, id, email, title) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.title = "employee";
    }
}
Employee.prototype.getName = function(){ return this.name};
Employee.prototype.getId = function(){ return this.id};
Employee.prototype.getEmail = function(){ return this.email};
Employee.prototype.getRole = function(){ return this.title};


class Manager extends Employee {
    constructor(name, id, email, title, officeNumber) {
        super(name, id, email, title);
        this.title = "manager";
        this.officeNumber = officeNumber;
    }
}
Manager.prototype.getOfficeNumber = function(){ return this.officeNumber; }

class Engineer extends Employee {
    constructor(name, id, email, title, githubUsername) {
        super(name, id, email, title);
        this.title = "manager";
        this.githubUsername = githubUsername;
    }
}
Manager.prototype.getGithub = function(){ return this.githubUsername; }

class Intern extends Employee {
    constructor(name, id, email, title, school) {
        super(name, id, email, title = "intern");
        this.title = "manager";
        this.school = school;
    }
}
Manager.prototype.getSchool = function(){ return this.school; }

module.exports = {
    Manager: Manager,
    Engineer: Engineer,
    Intern: Intern
}
const employee = require("./employee");

class Intern extends employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.title = "Intern";
        this.school = school;
    }
}
Intern.prototype.getSchool = function(){ return this.school; }

module.exports = Intern;
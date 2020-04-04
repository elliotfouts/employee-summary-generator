const employee = require("./employee");

class Manager extends employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.title = "Manager";
        this.officeNumber = officeNumber;
    }
}
Manager.prototype.getOfficeNumber = function(){ return this.officeNumber; }

module.exports = Manager;
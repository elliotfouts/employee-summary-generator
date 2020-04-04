const employee = require("./employee");
class Engineer extends employee {
    constructor(name, id, email, githubUsername) {
        super(name, id, email);
        this.title = "Engineer";
        this.github = githubUsername;
    }
}
Engineer.prototype.getGithub = function(){ return this.github; }

module.exports = Engineer;

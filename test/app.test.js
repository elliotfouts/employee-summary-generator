const app = require("../library/classes");

test("Manager construction creates an object", ()=>{
    let managerObject = {
        name: "elliot",
        id : "123",
        email: "elliotfouts@gmail.com",
        title: "manager",
        officeNumber: "321"
    }
    expect(new app.Manager("elliot", "123", "elliotfouts@gmail.com", "manager", "321")).toEqual(managerObject);
});

test("Engineer construction creates an object", ()=>{
    let engineerObject = {
        name: "elliot",
        id : "123",
        email: "elliotfouts@gmail.com",
        title: "manager",
        githubUsername: "elliotfouts"
    }
    expect(new app.Engineer("elliot", "123", "elliotfouts@gmail.com", "manager", "elliotfouts")).toEqual(engineerObject);
});

test("Inter construction creates an object", ()=>{
    let internObject = {
        name: "elliot",
        id : "123",
        email: "elliotfouts@gmail.com",
        title: "manager",
        school: "UCLA"
    }
    expect(new app.Intern("elliot", "123", "elliotfouts@gmail.com", "manager", "UCLA")).toEqual(internObject);
});
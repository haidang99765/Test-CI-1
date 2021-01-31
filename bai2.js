class Employees {
    name;
    tasklists;
    constructor (name, tasklists) {
        this.name = name;
        this.tasklists = tasklists;
    }
    displayInfo() {
        console.log ('Tên: ', this.name);
    }
}

class Developer extends Employees {
    constructor (name, tasklists) {
        super (name, tasklists);
    }
}

class Test extends Employees {
    constructor (name, tasklists) {
        super (name, tasklists);
    }
}

class Manager extends Employees {
    employees;
    constructor (name, tasklists) {
        super (name, tasklists);
        this.employees = [];
    }
    addEmployee(e) {
        this.employees.push(e);
    }
}

var a = new Employees ('Đăng', 'Lau chùi bàn ghế, ngồi chơi xơi nước');
console.log (a);
a.displayInfo();
var b = new Developer ('Kiên', 'Code dạo');
console.log (b);
b.displayInfo();
var c = new Test ('Chi', 'Test game');
console.log (c);
c.displayInfo();
var d = new Developer('Thảo', 'Front-end, Full-stack');
console.log (d);
d.displayInfo();
var g = new Test ('Hùng', 'Test tướng');
console.log (g);
g.displayInfo();

var a1 = new Manager ('Hiếu', 'AAAA');
console.log (a1);
a1.displayInfo();
a1.addEmployee('Hiền');
a1.addEmployee('Chinh');


function addUser(data) {
    firebase.firestore().collection('Developers').add(data);
}

function addManager(user) {
    firebase.firestore().collection('Managers').add(user);
}

addManager({
    name: "Định",
    age: "34",
    tasklists: [
        "Uống trà đá",
        "Cắn hướng dương",
    ],
    listemployees: [
        "Hà",
        "Ly",
        "Hiệp",
    ],
});

// addUser({
//     name: "Chiến",
//     age: 19,
//     address: "TPHCM",
//     tasklists: [
//         "Full-stack Web",
//         "Mobile apps"
//     ],
// });
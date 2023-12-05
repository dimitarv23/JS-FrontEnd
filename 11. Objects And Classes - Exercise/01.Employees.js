function printEmployeeList(employeeArr) {
    class Employee {
        constructor(fullName) {
            this.fullName = fullName;
            this.personalNumber = fullName.length;
        }

        getFullInfo = function () {
            return `Name: ${this.fullName} -- Personal Number: ${this.personalNumber}`;
        };
    }

    const employees = [];

    employeeArr.forEach((employeeName) => {
        const employee = new Employee(employeeName);
        employees.push(employee);
    });

    employees.forEach((employee) => {
        console.log(employee.getFullInfo());
    });
}

printEmployeeList([
    "Silas Butler",
    "Adaan Buckley",
    "Juan Peterson",
    "Brendan Villarreal",
]);

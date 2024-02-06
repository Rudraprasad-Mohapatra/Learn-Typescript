for (let i = 0; i < 3; i++) {
    console.log(sum(i, i + 1))
}

function sum(x: number, y: number) {
    return x + y;
}

class employee {
    empid: number;
    empname: string;

    constructor(empid: number, name: string) {
        this.empid = empid;
    }
}

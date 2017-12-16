export class Machine {
    frq: number
    brand: string

    constructor(fr?, bnd?) {
        this.frq = fr
        this.brand = bnd
    }
}

let mc: Machine = new Machine(45, 'Dell')
let mc1 = new Machine()

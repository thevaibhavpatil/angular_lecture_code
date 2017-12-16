import { Machine } from './classes';

export class Computer extends Machine {

}

interface WebDev {
    delta: number;

    http(): { [key: string]: any } | null
}

interface Shaped {
    (ty: boolean): boolean | number
}

let myShaped = (ty: boolean) => ty ? 10 : false

class AWSWebDev implements WebDev {
    delta: number
    http(): { [key: string]: any; } {
        return { abc: true }
    }
}

function myValidator(sh: Shaped) {

}

myValidator(function (ty: boolean) {
    return 10;
})

myValidator(ty => 10)
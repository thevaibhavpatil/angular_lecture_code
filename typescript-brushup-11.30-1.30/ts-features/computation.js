let arr = Array();
arr.push('Android');
arr.push('Apple');
arr.push('Rim');
arr.push('Samsung');
arr.forEach(el => console.log(el));
let forPrm = new Promise((res, rej) => {
    setTimeout(() => res(`Operation Completed`), 1500);
}).then(st => console.log(st));
console.log('usual flow');

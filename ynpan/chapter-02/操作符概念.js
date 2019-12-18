import * as Rx from "rxjs";

//乘10操作符

function multiplyTen(input) {
    return Rx.Observable.create(function subscribe(observer) {
        input.subscribe({
            next: res => observer.next(res * 10),
            error: err => observer.error(err),
            complete: () => observer.complete(),
        })
    })
}

let input = Rx.Observable.from([1, 2, 3]);

let output = multiplyTen(input);
output.subscribe(x => console.log(x));

Rx.Observable.prototype.multiplyByTen = function multiplyByTen() {
    var input = this;
    return Rx.Observable.create(function subscribe(observer) {
        input.subscribe({
            next: (v) => observer.next(10 * v),
            error: (err) => observer.error(err),
            complete: () => observer.complete()
        });
    });
}
var observable = Rx.Observable.from([1, 2, 3, 4]).multiplyByTen();

observable.subscribe(x => console.log(x));
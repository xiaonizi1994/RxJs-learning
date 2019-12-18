import * as Rx from "rxjs";

// 可观察者
// 创建Observable
let observable = Rx.Observable.create(function subscribe(observer) {
    let id = setInterval(() => {
        observer.next('hi')
    }, 1000);
});

// 订阅Observables
let subscription = observable.subscribe(x => console.log(x));

// 执行Observables ---observer
var observable2 = Rx.Observable.create(function subscribe(observer) {
    observer.next(1);
    observer.next(2);
    observer.next(3);
})

// 清理Observable
subscription.unsubscribe();

// 观察者
var observer = {
    next: x => console.log('Observer got a next value: ' + x),
    error: err => console.error('Observer got an error: ' + err),
    complete: () => console.log('Observer got a complete notification'),
};

observable.subscribe(observer);


//Subject (主体)
//每个 Subject 都是 Observable 。
let subject = new Rx.Subject();
subject.subscribe({
    next: (v) => console.log('observerA: ' + v)
});
subject.subscribe({
    next: (v) => console.log('observerB: ' + v)
});
subject.next(1);
subject.next(2);

//subject 是观察者
var subject = new Rx.Subject();

subject.subscribe({
    next: (v) => console.log('observerA: ' + v)
});
subject.subscribe({
    next: (v) => console.log('observerB: ' + v)
});

var observable = Rx.Observable.from([1, 2, 3]);

observable.subscribe(subject);
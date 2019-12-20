import { interval, combineLatest } from 'rxjs';
import { take, map } from 'rxjs/operators';

// 个人理解： combineAll 用于合并一条主流拆分出来的多个小流，
// 而combineLatest合并多个主流

// combineAll - demo
// const source = interval(1000).pipe(take(2));

// const example = source.pipe(
//   map(val => 
//     interval(1000).pipe(
//       map(i => `Result (${val}): ${i}`),
//       take(5)
//     )
//   )
// )

// const combined = example.pipe(combineAll());

// combined.subscribe(val => console.log(val));


// combineLatest - demo

const source1 = interval(1000).pipe(take(5));
const source2 = interval(1000).pipe(take(5));

const exampleCombineLatest = combineLatest(
  source1,
  source2
).pipe(
  map(([sourceValue1,sourceValue2]) => {
    return {
      sourceValue1,
      sourceValue2
    } 
  })
);

exampleCombineLatest.subscribe(val => console.log(val));
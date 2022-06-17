import { delay, Observable, timer } from 'rxjs';

import {
  fromEvent,
  debounceTime,
  of,
  map,
  zip,
  distinctUntilChanged,
  filter,
  startWith,
  tap,
  switchAll,
  interval,from
} from 'rxjs';
import { mapTo, merge } from 'rxjs/operators';

// const observable = new Observable((subscriber) => {
//   subscriber.next(1);
//   subscriber.next(2);
//   subscriber.next(3);
//   setTimeout(() => {
//     subscriber.next(4);
//     subscriber.complete();
//   }, 1000);
// });

// console.log('just before subscribe');
// observable.subscribe({
//   next(x) {
//     console.log('got value ' + x);
//   },
//   // error(err) { console.error('something wrong occurred: ' + err); },
//   complete() {
//     console.log('done');
//   },
// });
// console.log('just after subscribe');

// from
// let array = [1, 2, 3, 4];
// let vaal = from(array);
// vaal.subscribe((x) => console.log(x));

// // of

// of([10, 20, 30, 'd']).subscribe({
//   next: (value) => console.log(value),
//   error: (err) => console.log(err),
//   complete: () => console.log('finish'),
// });

// import { forkJoin, timer } from 'rxjs';

// const observable = forkJoin([of(1, 2, 3, 4), Promise.resolve(8), timer(3000)]);
// observable.subscribe({
//   next: (value) => console.log(value),
//   complete: () => console.log('This is how it ends!'),
//});

// Logs:
// [4, 8, 0] after 4 seconds
// 'This is how it ends!' immediately after

// import { partition } from 'rxjs';

// const observableValues = of(1, 2, 3, 4, 5, 6);
// const [evens$, odds$] = partition(observableValues, (value) => value % 2 === 0);

// odds$.subscribe((y) => console.log('odds', y));
// evens$.subscribe((x) => console.log('evens', x));

// import { fromEvent, map } from 'rxjs';

// const clicks = fromEvent<PointerEvent>(document, 'click');
// const positions = clicks.pipe(map(ev => ev.clientX));

// positions.subscribe(x => console.log(x));

// import { fromEvent, mapTo } from 'rxjs';

// const clicks = fromEvent(document, 'click');
// const greetings = clicks.pipe(mapTo('Hi'));

// greetings.subscribe((x) => console.log(x));

// const clicks = fromEvent(document, 'click');
// const result = clicks.pipe(debounceTime(1000));
// result.subscribe((x) => console.log(x));

// const observe= new Observable((subscriber) => {
//   subscriber.next('hellow 1')
//  setTimeout(() => {
//    subscriber.next('timeout function'),2000
// })
// subscriber.complete()
// })

// observe.subscribe({
//   next(x) {
//     console.log('hellow'+ x)
//   },
//   complete(){console.log('double done')}

// })

// const age$=of(27,25,29)
// const name$ = of('Foo', 'Bar', 'Beer');
// const isDev$ = of(true, true, false);

// zip(age$,name$,isDev$).pipe(
//   map( ([age,name,isDev]) => ({age,name,isDev}) )
// )
// .subscribe((x) => console.log(x))

//debounceTime

// const clicks = fromEvent(document, 'click');
// const result = clicks.pipe(debounceTime(1000));
// result.subscribe(function(x){
//   return (console.log(x))});

//distinctuntillchanged

// const Values$ = of(
//   { Name: 'vel', id: '0' },
//   { Name: 'ragav', id: '1' },
//   { Name: 'ragav', id: '2' },
//   { Name: 'manoj', id: '3' }
// ).pipe(
//   distinctUntilChanged((pre, cur) => {
//     return pre.Name === cur.Name;
//   })
// );
// Values$.subscribe(console.log);

// //filter method

// const arrVal = of(0, 1, 2, 3, 4, 5);
// const output = arrVal.pipe(filter((final) => final === 5));
// output.subscribe((x) => console.log('filter', x));

//startWith

// timer(2000)
//   .pipe(
//     map(() => console.log('hellow start')),
//     startWith(console.log('started'))
//   )
//   .subscribe((x) => console.log(x));

//switchAll

// const clicks = fromEvent(document, 'click').pipe(
//   tap(() => console.log('click'))
// );
// const source = clicks
//   .pipe(map(() => interval(1000)))

//   .pipe(switchAll())
//   .subscribe((x) => console.log(x));

//tap

// const sources = of(0, 1, 2, 3, 4);
// sources
//   .pipe(
//     tap((n) => {
//       if (n === 3) {
//         throw new TypeError(`Value ${n} is equal to 3`);
//       }
//     })
//   )
//   .subscribe({ next: console.log,
//                error: (err) => console.log(err.message) });

const valu= of('heloow delay')
const delaymssg=valu.pipe(delay(2000)),
 

delaymssg.subscribe(x => console.log(x))

import {Directive, EventEmitter, Input, OnChanges, OnDestroy, Output} from '@angular/core';
import {Subject} from 'rxjs';
import {switchMap, take, tap, filter} from 'rxjs/operators';
import {timer} from "rxjs/observable/timer";

@Directive({
  selector: '[counter]'
})
export class CounterDirective implements OnChanges, OnDestroy {

  private counter$ = new Subject<any>();
  private countSub$;

  @Input() counter: number;
  @Input() interval: number;
  @Output() value = new EventEmitter<number>();
  @Output() onCompleted = new EventEmitter<any>();

  constructor() {
    this.countSub$ = this.counter$.pipe(
      switchMap((options: any) =>
        timer(0, options.interval).pipe(
          take(options.count),
          tap(() => this.value.emit(--options.count)),
          filter(() => options.count === 0),
          tap(() => this.onCompleted.emit())
        )
      )
    ).subscribe();
  }

  ngOnChanges(changes) {
    this.counter$.next({count: this.counter, interval: this.interval});
  }

  ngOnDestroy() {
    this.countSub$.unsubscribe();
  }

}

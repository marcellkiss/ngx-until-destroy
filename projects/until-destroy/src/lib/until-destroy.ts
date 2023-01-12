import { OperatorFunction, Subject, takeUntil } from 'rxjs';

export function untilDestroy$<T>(
  componentInstance: any
): OperatorFunction<T, T> {
  if (!componentInstance.destroy$) {
    componentInstance.destroy$ = new Subject<void>();
  }

  return takeUntil(componentInstance.destroy$);
}

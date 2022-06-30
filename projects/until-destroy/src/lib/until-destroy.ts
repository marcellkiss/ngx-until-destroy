import { MonoTypeOperatorFunction, takeUntil } from 'rxjs';

export function untilDestroy$<T>(
  componentInstance: any
): MonoTypeOperatorFunction<T> {
  if (!componentInstance.destroy$) {
    throw new Error(
      `Decorate your component with @WithDestroy$() to be able to use untilDestroy$`
    );
  }
  return takeUntil(componentInstance.destroy$);
}

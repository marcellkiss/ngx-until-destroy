import { takeUntil } from 'rxjs';

export function untilDestroy$(component: any) {
  return takeUntil(component.destroy$);
}

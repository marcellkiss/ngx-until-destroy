import { Subject } from 'rxjs';

export function WithDestroy$(options?: { id: string }): ClassDecorator {
  return (componentClass: any) => {
    if (options?.id) {
      console.log(
        `WithDestroy$ got activated with the following id: `,
        options?.id
      );
    }

    const ngOnDestroy = componentClass.prototype.ngOnDestroy;
    componentClass.prototype.ngOnDestroy = function (this: any) {
      // Call the original ngOnDestroy
      ngOnDestroy && ngOnDestroy.call(this);

      // Look for destroy$ subject on the instance
      if (this.destroy$) {
        this.destroy$.next();
        this.destroy$.complete();
      }
    };
  };
}

export class ClassWithDestroy$ {
  destroy$? = new Subject<void>();
}

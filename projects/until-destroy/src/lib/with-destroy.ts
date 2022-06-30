import { Subject } from 'rxjs';

export function WithDestroy$(): ClassDecorator {
  return (componentClass: any) => {
    const ngOnDestroy = componentClass.prototype.ngOnDestroy;
    componentClass.prototype.destroy$ = new Subject<void>();
    componentClass.prototype.ngOnDestroy = function (this: any) {
      ngOnDestroy && ngOnDestroy.call(this);
      componentClass.prototype.destroy$.next();
    };
  };
}

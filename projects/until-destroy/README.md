# ngx-until-destroy

Reduce your boilerplate code and unsubscribe your RxJS observables with ease - within your Angular components.

## Getting started

Get started in 3 steps:

- `npm i ngx-until-destroy`
- Decorate your component with `@WithDestroy$()`
- Use `.pipe(untilDestroy$(this))` before `.subscribe(...) `

And voilà, you don't have to take care of unsubscribing anymore. Your subscription exists as long as your component exists.

## Example

```typescript
@WithDestroy$()
@Component({...})
export class ExampleComponent {
  ...
  someObservable$.pipe(untilDestroy$(this)).subscribe(...)
}
```

## How it works

What happens in the background is pretty simple.

`@WithDestroy$()` decorates your component in a way, that it will have a class variable named `$destroy`, it's a simple RxJS Subject, which emits a new value, when the component is destroyed - by extending `ngOnDestroy()`.

`untilDestroy$(this)` is simply returning `takeUntil(this.destroy$)`, so your subscription is going to be active just until your component is destroyed. No need for extra boilerplate code or unsubscribing manually.

## Contributing

This project was created with @angular/cli, feel free to clone it, have a look at it, make changes and / or open a Pull Request.

In case you have any questions, problems or feature requests, feel free to [open an issue on GitHub](https://github.com/marcellkiss/ngx-until-destroy/issues).

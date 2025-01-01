# Interfaces vs. Types

[(c) StackOverflow](https://stackoverflow.com/questions/37233735/interfaces-vs-types-in-typescript)

## 1. When to Use Interfaces

My personal convention is this:

> Always prefer `interface` over `type`.

### Declaration Merging

Declaration Merging means that the compiler merges two separate declarations with the same name into a single definition. Any number of declarations can be merged; it's not limited to just two declarations.

This is only available of interfaces, [see example](./declaration-merging/simple-example.ts). In the real world, JavaScript objects are much like `interface`; they can be dynamically updated with new fields at run-time. Because interface declarations can be merged, interfaces more accurately represent the dynamic nature of JavaScript objects than types do.

A common use-case for this feature occurs when you want to extend the types that are exported from a node module. For example, `@types/jest` exports type that can be used when working with the Jest library. [Jest allows extending its types with new functions](https://spin.atomicobject.com/jest-add-custom-functions/). You can add a custom function like [timedTest](../../jest.setup.ts).

[See how this new function can be used.](./declaration-merging/jest-example.test.ts). There's only one problem - TypeScript has no clue that we've added a `timedTest` function, so it'll throw an error in the editor.

To resolve this, we need to tell TypeScript that there's a new type on top of the existing types that are already available from jest. To do this, use a [declaration file](../../@types/jest.d.ts).

Because of how interfaces work, this type declaration will be merged with the type declarations exported from `@types/jest`. So we didn't just re-declare `jest.It`; we extended `jest.It` with a new function so that TypeScript is now aware of our custom test function.

This type of thing is not possible with the `type` keyword. If `@types/jest` had declared their types with the `type` keyword, we wouldn't have been able to extend those types with our own custom types. Therefore, there would have been no good way to make TypeScript happy about our new function.

## Objects - Performance

Extending types with interfaces is suggested over creating intersection types, according to
[TypeScript documentation](https://github.com/microsoft/TypeScript/wiki/Performance).

Interfaces create a single flat object type that detects property conflicts, which are usually
important to resolve!

Intersections, on the other hand, just recursively merge properties, and in some cases produce
`never`.

## 2. When to Use Types

- Use `type` when defining an alias for primitive types (`string`, `boolean`, `number`, `BigInt`, etc.)
- Use `type` when defining tuple types.
- Use `type` when defining function types.
- Use `type` when defining a union.
- Use `type` when needing to take advantage of mapped types.

### Primitive Types

The easiest difference to see between `type` and `interface` is that only `type` can be used to alias a primitive.

```typescript
type Nullish = null | undefined
type Decimal = Number | BigInt
```

None of these examples are possible to achieve with interfaces.

### Tuple Types

Tuples can only be defined via the `type` keyword.

```typescript
type Row = [colOne: number, colTwo: string]
```

### Function Types

Functions can be typed by both the `type` and `interface` keywords.

```typescript
type Sum = (x: number, y: number) => number

interface Sum {
  (x: number, y: number) => number
}
```

Since the same effect can be achieved either way, the rule will be to use `type` in these scenarios since it's a little easier to read and less verbose.

Function types can be helpful when defining types for callbacks.

## Union Types

Union types can only be achieved with the `type` keyword.

```javascript
type Fruit = 'mango' | 'apple' | 'orange'
type Vegetable = 'broccoli' | 'carrot' | 'lettuce'

type HealthyFood = Fruit | Vegetable
```

### Mapped Types

`type` keyword can take advantage of mapped types, [see example](./mapped-types.ts)

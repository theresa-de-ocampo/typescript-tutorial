// abstract class Calendar {
//   constructor(public name: string) {}

//   abstract addEvent(): void
//   abstract removeEvent(): void
// }

/**
 * Abstract Classes vs Interfaces
 * `abstract` classes gets transpiled to just classes (without the `abstract` keyword),
 * since `abstract` is just specific to TypeScript
 *
 * interfaces are not transpiled to anything (empty, plain JavaScript code)
 *
 * If the abstract class is not implementing any logic that a subclass can re-use,
 * use interfaces instead.
 */

/**
 * Types vs Interfaces
 * The key distinction is that a type cannot be reopened to add new properties, whereas an
 * interface is always extendable.
 *
 * When to use types?
 *   - Generic Transformations
 *   - Type Aliasing
 *   - Type Capturing
 *   - Type Mapping
 *
 * When to use interface?
 *   - Polymorphism
 *   - Declaration Merging
 *
 * https://stackoverflow.com/questions/37233735/interfaces-vs-types-in-typescript
 */

interface Calendar {
  name: string
  addEvent(eventId: number): void
  removeEvent(eventId: number): void
}

interface CloudCalendar extends Calendar {
  sync(): void
}

class GoogleCalendar implements Calendar {
  constructor(public name: string) {}

  addEvent(eventId: number): void {
    console.log(`Adding Event #${eventId}`)
  }

  removeEvent(eventId: number): void {
    console.log(`Removing Event #${eventId}`)
  }
}

const scheduler = new GoogleCalendar("Teriz' Schedule")
scheduler.addEvent(1)

/**
 * Declaration Merging means that the compiler merges two separate declarations with the same name
 * into a single definition. Any number of declarations can be merged; it's not limited to just two
 * declarations,
 *
 * (kinda looks like it can cause bugs though)
 */
interface Box {
  height: number
  width: number
}

interface Box {
  color: string
}

let box: Box = { height: 5, width: 5, color: 'blue' }

/**
 * Performance
 * Extending types with interfaces is suggested over creating intersection types, according to
 * TypeScript documentation: https://github.com/microsoft/TypeScript/wiki/Performance
 *
 * Interfaces create a single flat object type that detects property conflicts, which are usually
 * important to resolve!
 *
 * Intersections, on the other hand, just recursively merge properties, and in some cases produce
 * `never`.
 *
 * A final noteworthy difference is that when checking against a target intersection type, every
 * constituent is checked before checking against the "effective" / "flattened" type.
 */

type Pet = {
  name: string
}

type Dog = {
  name: boolean
}

// const athena: Pet & Dog = { name: 'Athena' }

interface Color {
  hexCode: string
}

// interface Ballpen extends Color {
//   hexCode: number
// }

// const faberCastell: Ballpen = { hexCode: '#fff' }

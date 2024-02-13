// abstract class Calendar {
//   constructor(public name: string) {}

//   abstract addEvent(): void
//   abstract removeEvent(): void
// }

/**
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
 * The key distinction is that aa type cannot be reopened to add new properties, whereas an
 * interface is always extendable.
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

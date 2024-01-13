// abstract class Calendar {
//   constructor(public name: string) {}

//   abstract addEvent(): void
//   abstract removeEvent(): void
// }

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

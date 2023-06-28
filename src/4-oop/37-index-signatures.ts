// There are situations where we need to add properties dynamically.
// This is where we use index signatures.

class SeatAssignment {
  // Index Signature Property
  [seatNumber: string]: string
}

let seats = new SeatAssignment()
seats.A1 = 'Teriz'
seats.A2 = 'Grant'

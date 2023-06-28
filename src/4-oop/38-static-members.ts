class Ride {
  // A static property is a property that belongs to a class, and not an object.
  private static _activeRides = 0

  constructor(
    public passenger: string,
    public driver: string,
    public pickUpLocation: string,
    public dropOffLocation: string
  ) {}

  start() {
    Ride._activeRides++
  }

  end() {
    Ride._activeRides--
  }

  static get activeRides(): number {
    return Ride._activeRides
  }
}

const terizRide = new Ride('Teriz', 'Grant', 'GT Tower', 'Bangkal')
terizRide.start()

const marcyRide = new Ride('Marcy', 'Philip', 'Makati Med', 'PGH')
marcyRide.start()

console.log(Ride.activeRides)

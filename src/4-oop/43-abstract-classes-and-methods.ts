abstract class Shape {
  constructor(public color: string) {}

  abstract render(): void

  displayInfo() {
    console.log('Some info')
  }
}

class Circle extends Shape {
  constructor(public radius: number, color: string) {
    super(color)
  }

  override render(): void {
    console.log('Rendering a circle')
  }
}

const circle = new Circle(2, 'blue')
circle.displayInfo()

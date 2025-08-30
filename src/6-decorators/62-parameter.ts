// Parameter decorators are not used often.
// It's useful if you're desining a framework for other people to use.

type WatchedParameter = {
  methodName: string
  parameterIndex: number
}

const watchedParameters: WatchedParameter[] = []

function Watch(_target: any, methodName: string, parameterIndex: number) {
  // We're collecting some metadata
  // Later on, our framework can use this metadata to do something
  watchedParameters.push({
    methodName,
    parameterIndex
  })
}

class Vehicle {
  move(@Watch speed: number) {
    console.log(`Running at ${speed} m/s`)
  }
}

console.log(watchedParameters)

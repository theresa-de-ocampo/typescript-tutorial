class ArrayUtils {
  static wrapInArray<T_Value>(value: T_Value): T_Value[] {
    return [value]
  }
}

function wrapInArray<T_Value>(value: T_Value): T_Value[] {
  return [value]
}

let numbers = wrapInArray(1)
console.log(numbers)

numbers = ArrayUtils.wrapInArray(2)
console.log(numbers)

export {}

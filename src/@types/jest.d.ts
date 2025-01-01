declare namespace jest {
  interface It {
    timedTest: (
      name: string,
      callbackFunction: () => void,
      timeout: number
    ) => void
  }
}

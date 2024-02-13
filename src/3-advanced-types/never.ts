function processEvents(): never {
  while (true) {
    // Read a message from queue
  }
}

processEvents()
// Will report an error if allowUnreachableCode is set to false
// Removing `never` will cause TS to infer it as void.
// Hence, any subsequent code would not throw an error.
// console.log('Done!')

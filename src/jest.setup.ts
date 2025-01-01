// Make sure that this file is only ran after Jest has been installed.
// In other words, used for setpFilesFileAfterEnv and NOT setupFiles.
// Including this file for setupFiles will result in "test is not defined"

test.timedTest = async (
  name: string,
  callbackFunction: () => void,
  timeout: number
) =>
  test(name, async () => {
    const start = performance.now()

    await new Promise(resolve => setTimeout(resolve, timeout))
    callbackFunction()

    const end = performance.now()
    console.log(`Elapsed time in ms: ${end - start}`)
  })

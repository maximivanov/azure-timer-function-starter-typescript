import { AzureFunction, Context } from '@azure/functions'

const timerTrigger: AzureFunction = async function (
  context: Context,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  timer: any,
) {
  console.log('context', context)
  console.log('timer', timer)
}

export default timerTrigger

export const waitTime = (timer = 1500) => {
  return new Promise((resolve: any) => {
    setTimeout(() => {
      resolve();
    }, timer)
  })
}
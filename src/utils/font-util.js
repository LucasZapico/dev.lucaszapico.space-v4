
const capitalizeCase = (string) => {
  const cleanStr = string.replaceAll(/[^a-zA-Z\d]$/gi, "")
  const splitOn = new RegExp("[-_ ]", "i")
  const stg = cleanStr.split(splitOn)
  const stringArr = []
  stg.forEach((s) => {
    const t = s.split("")[0]
    if (t != null) {
      const n = [t.toUpperCase(), ...s.slice(1)].join("")
      stringArr.push(n)
    } else {
      //     console.log(`
      // ----
      //   string: ${string}
      //   stg: ${stg}
      // `)
    }
  })
  const result = stringArr.join(" ")
  return result
}

const camelCase = (string) => {
  /**
   * "theQuickBrownFoxJumpsOverTheLazyDog"
   */
}

const kebabCase = (string) => {
  /**
   * "the-quick-brown-fox-jumps-over-the-lazy-dog"
   */
}

const snakeCase = (string) => {
  /**
   * "the_quick_brown_fox_jumps_over_the_lazy_dog"
   */
}

export { capitalizeCase }

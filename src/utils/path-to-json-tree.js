function hasMatch(obj, value) {
  const results = obj.filter((o) => {
    return o.name === value
  })
  if (results.length > 0) {
    return [true, results[0]]
  }
  return [false, []]
}

function pathToJsonTree(arr, link, results) {
  let newResults = results
  if (arr.length > 0) {
    const value = arr[0]
    const nextArr = arr.slice(1)
    const [match, matchValue] = hasMatch(results, value)

    if (!match) {
      let node = {}
      if (value.includes(".md")) {
        node = {
          name: value,
          link,
          count: 1,
          children: [],
        }
      } else {
        node = {
          name: value,
          count: 1,
          children: [],
        }
      }

      const newChildren = pathToJsonTree(nextArr, link, node.children)
      const sortedChildren = newChildren.sort((branch) => {
        if (branch.children.length > 0) {
          return -1
        }
        return 1
      })
      const newNode = { ...node, children: sortedChildren }
      newResults = [...results, newNode]
    } else {
      newResults = results.map((r) => {
        const newChildren = pathToJsonTree(nextArr, link, matchValue.children)
        const sortedChildren = newChildren.sort((branch) => {
          if (branch.children.length > 0) {
            return -1
          }
          return 1
        })
        const newNode = {
          ...matchValue,
          count: matchValue.count + 1,
          children: sortedChildren,
        }
        if (r.name === matchValue.name) {
          return newNode
        } else {
          return r
        }
      })
    }
  }

  const sortByAlpha = newResults.sort((a, b) => a.name.localeCompare(b.name))
  // const sortedResults = sortByAlpha.sort((branch) => {
  //   if (branch.children.length > 0) {
  //     return 1
  //   }
  //   return -1
  // })
  return sortByAlpha
}

export default pathToJsonTree

const appendToTree = (tree, page) => {
    let {path, originalpath, component, ...rest} = page  // extract path from object 
    originalpath = originalpath === undefined ? path : originalpath
    let URLparams = path.split('/').slice(1)  // turn path into array of params
    if (URLparams.length === 0) return tree  // could send empty path
    let currentURLparam = URLparams.shift()  // take out first element in array: removes it from the array as well 
     
    let currentPosition = 0, currentNode = {}, found = false
loopTree:  // find corresponding param in tree
    for(currentPosition; currentPosition < tree.length; currentPosition++) {
        if (tree[currentPosition].path === '/'+currentURLparam) {
            currentNode = tree[currentPosition]
            found = true
            break loopTree
        }
    }
  
    if (URLparams.length > 0) {  // still have URL params left ?
        if (!found) {let pos = tree.push({path: '/'+currentURLparam, children: []}) - 1; currentNode = tree[pos]}
        currentNode['children'] = currentNode.children || []
        let newPath = '/' + URLparams.join('/')  // reset path to what's left in URLparams after shift
        return appendToTree(currentNode.children, {path: newPath, component, originalpath, ...rest})
    } else {  
        let pageObj = {path: '/'+currentURLparam, component, getData:()=>({page:{path: originalpath, component, ...rest}})}
        if (!found) {tree.push( pageObj )}
        tree[currentPosition] = pageObj
        return tree
    }
}

export default appendToTree
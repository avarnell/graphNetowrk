function findConnections(list, userId, result, distance){
  result = result || {}
  distance = distance || 0
  result[userId] = distance

  list[userId].edges.forEach(function(id){
    if(!result.hasOwnProperty(id)){
      findConnections(list, id, result, distance +1)
    }
  })
  return result
}


module.exports = findConnections
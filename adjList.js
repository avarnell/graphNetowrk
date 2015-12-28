function adjList(arrayOfConnection){
  var output = {}

  arrayOfConnection.forEach(function(connection){
    if(!output.hasOwnProperty(connection.user_id)){
      output[connection.user_id] = {
        name : connection.name,
        edges : [connection.other_id]
      }
    }else output[connection.user_id].edges.push(connection.other_id)
    
    if(!output.hasOwnProperty(connection.other_id)){
      output[connection.other_id] = {
        name : connection.other_name,
        edges: [connection.user_id]
      }
    } else output[connection.other_id].edges.push(connection.user_id)
  })
  return output
}

module.exports = adjList
const rooms = function rooms(state = [], action){
  switch (action.type) {
    case 'GOTO_ROOM':
      return state.concat([action.text])
    default:
      return state
  }
}

export default rooms;
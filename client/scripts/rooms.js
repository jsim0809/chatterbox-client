var Rooms = {

  roomList: new Set(),

  currentRoom: 'lobby',

  // takes room string, adds to server's rooms collection
  add: function (room) {
    var createRoomMsg = {
      username: App.username,
      text: `Created room at ${new Date().getTime()}ms past 1970.`,
      roomname: room
    };

    Parse.create(createRoomMsg);

  }

};
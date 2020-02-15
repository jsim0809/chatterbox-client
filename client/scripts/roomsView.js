var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    this.$button.click ( () => {
      var newRoom = prompt("Enter a room name.");
      Rooms.add(newRoom);
      Rooms.currentRoom = newRoom;
      App.initialize();
    });

    this.$select.change( () => {
      Rooms.currentRoom = this.$select.val();
      MessagesView.render(App.currentState);
    });

    this.render(App.currentState);
  },

  render: function(data) {
    for (var r of data.results) {
      Rooms.roomList.add(r.roomname);
    }
    RoomsView.$select.empty();
    Rooms.roomList.forEach(RoomsView.renderRoom);
  },

  renderRoom: function(string) {
    RoomsView.$select.append(`<option>${string}</option>`);
  }

};

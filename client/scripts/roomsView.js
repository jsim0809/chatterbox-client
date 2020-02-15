var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    this.$button.click ( () => {
      var newRoom = prompt("Enter a room name.");
      Rooms.add(newRoom);
    });

    this.$select.change( () => {
      Rooms.currentRoom = this.$select.val();
    });

    this.render(App.currentState);
  },

  render: function(data) {
    for (var r of data.results) {
      Rooms.roomList.add(r.roomname);
    }
    Rooms.roomList.forEach(RoomsView.renderRoom);
  },

  renderRoom: function(string) {
    RoomsView.$select.append(`<option>${string}</option>`);
  }

};

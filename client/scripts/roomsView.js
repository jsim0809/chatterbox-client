var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    this.$button.click ( () => {
      // Pop up a text box
      var newRoom = '';
      Rooms.add(newRoom);
    });
  },

  render: function() {
  },

  renderRoom: function(string) {
    this.$select.append(`<div>${string}</div>`);
  }

};

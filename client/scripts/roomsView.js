var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
  },

  render: function() {
  },

  renderRoom: function(string) {
    this.$select.append(`<div>${string}</div>`);
  }

};

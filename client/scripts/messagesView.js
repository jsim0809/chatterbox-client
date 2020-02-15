var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    $('#chats').on('click', '.username', ( (event) => {
      Friends.toggleStatus(event.target.innerText);
    } ));
  },

  render: function() {
  },

  renderMessage: function(message) {
    this.$chats.append(MessageView.render(message));
  }

};
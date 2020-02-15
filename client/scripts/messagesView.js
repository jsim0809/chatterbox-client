var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // Initialize click functionality for adding friends by clicnking username
    this.$chats.on('click', '.username', ( (event) => {
      Friends.toggleStatus(event.target.innerText);
    } ));
    // Pull all messages from server
    console.log(App.currentState);
    this.render(App.currentState);
  },

  render: function(data) {
    console.log(data);
    for (var m of data.results) {
      if (m.username === undefined) {
        m.username = 'anonymous';
      }
      m.username = decodeURI(m.username);
      if (m.text.includes('<script>')) {
        m.text = 'Nice try nerds.';
      }
      if (m.text === undefined) {
        m.text = 'Message failed to load.';
      }
      MessagesView.renderMessage(m);
    }
  },

  renderMessage: function(message) {
    this.$chats.append(MessageView.render(message));
  }

};
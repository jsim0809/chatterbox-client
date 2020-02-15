var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // Initialize click functionality for adding friends by clicnking username
    this.$chats.on('click', '.username', ( (event) => {
      Friends.toggleStatus(event.target.innerText);
    } ));
    // Pull all messages from server
    this.render(App.currentState);
  },

  render: function(data) {
    for (var m of data.results) {
      if (m.username === undefined) {
        m.username = 'anonymous';
      }
      m.username = decodeURI(m.username);
      if (m.text === undefined) {
        m.text = 'Message failed to load.';
      }
      m.text = m.text.replace('&', '&amp;');
      m.text = m.text.replace('<', '&lt;');
      m.text = m.text.replace('>', '&gt;');
      m.text = m.text.replace('"', '&quot;');
      m.text = m.text.replace('\'', '&#x27;');
      m.text = m.text.replace('/', '&#x2F;');

      MessagesView.renderMessage(m);
    }
  },

  renderMessage: function(message) {
    this.$chats.append(MessageView.render(message));
  }

};
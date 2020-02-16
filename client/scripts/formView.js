var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();

    // Pull the .val() of the message field
    var msgString = $('#message').val();

    // Make it into a message object with the current username attached
    // Message format:
    // {
    //   username: 'Mel Brooks',
    //   text: 'I didn\'t get a harumph outa that guy.!',
    //   roomname: 'lobby'
    // })
    var newMsg = {
      username: App.username,
      text: msgString,
      roomname: Rooms.currentRoom
    };

    // Run ajax (Parse.create) on that message to send it to the server.
    Parse.create(newMsg, () => {
      // Clear the message field
      $('#message').val('');
      console.log('chatterbox: Message sent');
      // Rerender the message box
      // App.fetch(App.stopSpinner);
    });

  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};
var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  currentState: {results: [{username: 'Error', text: 'Fetch request failed.'}]},

  initialize: function() {

    App.username = window.location.search.substr(10);

    App.startSpinner();
    // Fetch initial batch of messages
    App.fetch(App.stopSpinner);
  },

  fetch: function(callback = ()=>{}) {
    // fetch takes a function
    // It reads everything the server, then executes the function
    Parse.readAll((data) => {
      App.currentState = data;
      callback();
      FormView.initialize();
      RoomsView.initialize();
      MessagesView.initialize();
      RoomsView.$select.val(Rooms.currentRoom);
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};

var Friends = {

  friendsList: new Set(),

  toggleStatus: function (string) {
    this.friendsList.has(string) ? this.friendsList.delete(string) : this.friendsList.add(string);
  }

};
if (Meteor.isClient) {
  Meteor.subscribe("games");
}

var gamesPub = function () {
  var Games = new Meteor.Collection("games", {connection: null});
  return Games.find({},{limit: 10});
};

if (Meteor.isServer) {
  Meteor.publish("games", gamesPub);
}

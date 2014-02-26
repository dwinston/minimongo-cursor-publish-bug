This repo is the product of [this request](https://groups.google.com/d/msg/meteor-talk/RNheFGQDb4Q/cf88pd0Ndu0J) in [meteor-talk](https://groups.google.com/forum/?fromgroups#!forum/meteor-talk).

`Meteor.publish` calls an unordered observe for published cursors, but an ordered observe is required if either skip or limit is set.

Start the app, and [initiate a client connection](http://localhost:3000) to trigger a server-side `Error: must use ordered observe with skip or limit`.

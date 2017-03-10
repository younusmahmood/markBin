import { Meteor } from 'meteor/meteor';
import { Bins } from '../imports/collections/bin';

Meteor.startup(() => {
  Meteor.publish('bins', function() {
    return Bins.find({ ownerId: this.userId });
  });

  Meteor.publish('sharedBins', function(){
    const user = Meteor.users.findOne(this.userId);

    if (!user) { return;}

    const email = user.emails[0].address;

    // Walk through array and find an email equal to email
    return Bins.find({
      sharedWith: { $elemMatch: { $eq: email} }
    });
  });
});

import { Mongo } from 'meteor/mongo';

Meteor.methods({
  'bins.insert': function (){
    return Bins.insert({
      createdAt: new Date(),
      content: '',
      sharedWidth: [],
      ownerId: this.userId
    });
  },

  'bins.remove': function (bin) {
    return Bins.remove(bin);
  }
});

export const Bins = new Mongo.Collection('bins')

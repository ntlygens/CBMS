import { Meteor } from 'meteor/meteor';
import { InitData } from './server-main/main';

const mainApp = new InitData();
mainApp.start();

/*Meteor.startup(() => {
  // code to run on server at startup
});*/

import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {

	this.route("dropdown",{path:"dropdown"},function(){});
	this.route("button",{path:"button"},function(){});
	this.route("accordion",{path:"accordion"},function(){});

	this.route("tabs",{path:"tabs"},function(){});
	
	this.route("form",{path:"form"},function(){});

	

	this.route("dialog",{path:"dialog"},function(){});
	

});

export default Router;

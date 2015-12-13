import Ember from 'ember';
import layout from '../templates/components/check-box';

export default Ember.Component.extend({
	tagName:"input",
	attributeBindings : ['type'],
    layout: layout,
    click : function(e){
   		console.log(" on input click ",$(this.$()), $(e.target) ,this.get('model'));
  		// Em.set(this,'value',$(this.$()).val());		/* Add observe not working default */
  	},
});

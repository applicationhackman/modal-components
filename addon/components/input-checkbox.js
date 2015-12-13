import Ember from 'ember';
import layout from '../templates/components/input-checkbox';

export default Ember.Component.extend({
  layout: layout,
  didInsertElement : function  () {
  	console.log("input-checkbox this ",this);
  		this.addObserver("checked",this.valueChange);
  },
  valueChange : function(){
  	console.log("value valueChange");
  },

  input : function(e){
   		console.log(" on input ");
  		// Em.set(this,'value',$(this.$()).val());		/* Add observe not working default */
  }
});

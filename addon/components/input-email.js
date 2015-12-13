import Ember from 'ember';
import layout from '../templates/components/input-email';

export default Ember.Component.extend({
  attributeBindings:['type','placeholder','value'],
  layout: layout,
  didInsertElement : function  () {
  	this.addObserver("value",this.valueChange);
  },
  valueChange : function(){
  	console.log("value valueChange");
  },
  input : function(e){
  		Em.set(this,'value',$(this.$()).val());		/* Add observe not working default */
  }
  
});

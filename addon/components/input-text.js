import Ember from 'ember';
import layout from '../templates/components/input-text';

export default Ember.Component.extend({
  tagName:'input',
  attributeBindings:['type','placeholder','value'],
  layout: layout,
  classNames:['form-control'],
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

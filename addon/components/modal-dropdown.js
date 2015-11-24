import Ember from 'ember';
import layout from '../templates/components/modal-dropdown';

export default Ember.Component.extend({
  layout: layout,
  classNameBindings: ['btnGroup'],
  btnGroup: false,
  classNames : ['dropdown'],
  init : function(){

  	this.set("tagName",this.get("tagName"));
  	this._super();
  },
  actions : {
  	triggerAction : function(obj){

  		var target = (this.get("target") == null) ? this.get("parentView.controller")  :  this.container.lookup(this.get("target"));

		if(obj.hasOwnProperty("action"))
		{  		
  			target.send(obj.action,obj,this);
  		}

  		if(obj.hasOwnProperty("dialog"))
  		{
  			this.send("setDialog",obj,target);
  		}	

  	},
  	setDialog : function(obj,target){
  			target.set(obj.dialog,true);
  	}
  }

});

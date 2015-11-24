import Ember from 'ember';
import layout from '../templates/components/action-item';

export default Ember.Component.extend({
  layout: layout,
  init : function(){
  	this.set("tagName",this.get("tagName"));
  	this._super();
  },
  click : function(e,ui){
  	this.send("triggerAction",e,ui)
  },
  actions : {
	  triggerAction : function(){

	  		var obj = {};


	  		var target = (this.get("target") == null) ? this.get("parentView.controller")  :  this.container.lookup(this.get("target"));

			if(this.hasOwnProperty("action") )
			{  		
	  			target.send(this.action,obj,this);
	  		}

	  		if(this.hasOwnProperty("dialog"))
	  		{
	  			this.send("setDialog",this,target);
	  		}		

	  		if(this.hasOwnProperty("dialogClose")){
	  			this.send("closeDialog",obj);
	  		}

	  	},
	  	setDialog : function(obj,target){
  			target.set(obj.dialog,true);
  		},
  		closeDialog : function(){
  			console.log(this.get("parentView.target"),"close dialog ",this.get("parentView.name"), this.get("target"));
  			// $(".modal-dialog").modal("hide");

  			this.get("parentView.target").set(this.get("parentView.name"),false);
  		}

  	}
});

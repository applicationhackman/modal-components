import Ember from 'ember';
import layout from '../templates/components/modal-dialog';

export default Ember.Component.extend({	
  layout: layout,
  classNames : ["modal-dialog","nm"],   
  attributeBindings: ["style"],
  style: "z-index: 99999",
  render : false,
  didInsertElement : function(){

  	var target = (this.get("target") == null) ? this.get("parentView.controller")  :  this.container.lookup(this.get("target"));
  	this.set("target",target);


  	var cobj  = this;

  	target.addObserver(this.get("name"),function(){   //No I18N 
  			cobj.send("stateChange",this,cobj.$());  //No I18N 
  	})

  	Em.$(this.$()).on('hidden.bs.modal', function () {		//No I18N 

		  	cobj.send("onModalHide");		//No I18N 
	});
  	
  	
  },
  actions : {
  	stateChange : function(target,el){

  		var state = (target.get(this.get("name"))) ? "show" : "hide";
  		el.modal(state);	
  		
  	},
  	onModalHide : function()
  	{

  		this.get("target").set(this.get("name"),false);
  	}
  }



  

});

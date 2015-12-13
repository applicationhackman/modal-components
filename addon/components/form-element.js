import Ember from 'ember';
import layout from '../templates/components/form-element';

export default Ember.Component.extend({
  layout: layout,
  tagName : Em.computed('formtype',function(){

  	// console.log("formtype computed is here ",this.get('formtype'));
  		if(this.get('formtype') === 1){
  			return 'span'
  		}
  		
  }),
  supportedTypes : [
  		{
  			id:"text",
  			view : false
  		},
  		{
  			id:"email",
  			view : false
  		},
  		{
  			id:"password",
  			view : false
  		},
  		{
  			id:"checkbox",
  			view : false
  		},
  		{
  			id:"radio",
  			view : false
  		},
  		{
  			id:"textarea",
  			view : false
  		},
  		{
  			id:"select",
  			view : false
  		}
  ],
  didInsertElement : function () {

  	 this.send("identifyFormElement",this.get('etype'));
  	 this.addObserver("etype",function(){
  	 		console.log(" form-element etype");
  	 })
  },
  actions : {
  		identifyFormElement : function(type){


  			var supportedTypes = this.get('supportedTypes');

	  			for (var i = supportedTypes.length - 1; i >= 0; i--) 
          {

	  					Em.set(supportedTypes[i],'view',supportedTypes[i].id === type);
              if(supportedTypes[i].id === type){
                this.set("is"+supportedTypes[i].id,true);
              }

	  			}

  			}

  		} 
  })

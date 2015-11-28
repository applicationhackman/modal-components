import Em from 'ember';
import layout from '../templates/components/tab-item';

export default Em.Component.extend({
  layout: layout,
  tagName:"li",
  classNameBindings :["mode"],
  attributeBindings : ["role"],
  role:"presentation",
  click : function(){

      var tabs  = this.get("parentView.modal");
      var selected = this.get("modal");

      tabs.filter(function(tab){

        if(tab === selected){
          Em.set(tab,"mode","active");
        }else{
          Em.set(tab,"mode","");
        }

      })

  },
  didInsertElement : function  () {
	  var a= this.$().find("a"); 	
  	a.attr("href","#"+this.get("modal.id"));
    this.set("tabid",this.get("modal.id"));

  	this.set("mode", this.get("modal.mode"));

    this.addObserver("parentView.modal.mode",function(){ 
     this.send("setState");
    })
  	
  },
  actions : {
    setState : function(){

        console.log("state has changed");

    		// this.set("modal.state", this.get("modal.state"));
    }
  }
});

import Em from 'ember';
import layout from '../templates/components/modal-dialog';

export default Em.Component.extend({	
  layout: layout,
  classNames : ["modal-dialog"],   
  attributeBindings: ["style"],  
  style: "z-index: 99999",
  render : false,
  didInsertElement : function(){


  	var target = (this.get("target").indexOf("component") === 0) ? this.container.lookup(this.get("target")) : target = this.container.cache[this.get("target")];
  	this.set("target",target);

  	var cobj  = this;

    console.log(this," modal-dialog didInsertElement target",target," cobj ",this.get("name"));

    if(target !== null && target !==  undefined){
      	target.addObserver(this.get("name"),function(){   //No I18N 
      			cobj.send("stateChange",this,cobj.$());  //No I18N 
      	});
    }
    

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

      console.log("on modal-dialog hide ",this);
  		this.get("target").set(this.get("name"),false);
  	}
  }



  

});

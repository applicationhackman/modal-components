import Em from 'ember';
import dialog  from '../mixins/dialog-dispatcher';
import layout from '../templates/components/action-item';

export default Em.Component.extend(dialog,{
  layout: layout,
  attributeBindings: ["style","data-dismiss"],
  'data-dismiss' : Em.computed("dialoClose",function(){
    return this.get("dialogClose") ? "modal" : "";
  }),
  init : function(){
  	this.set("tagName",this.get("tagName"));
  	this._super();
  },
  
  click : function(e,ui){

    console.log("action-item is ",e," ui ",ui, " this ",this);

      if(this.hasOwnProperty("dialog"))
      {
         this.send("openDialog",e,ui);
      }

      if(this.hasOwnProperty("action"))
      {
         this.send("triggerAction",e,ui);
      }    
    
  },
  actions : {
	  triggerAction : function()
    {

	  		var obj = {};
	  		var target = (this.get("target") === null || this.get("target") === undefined) ? this.get("parentView.target") : target = this.get("target");
        target = (target.indexOf("component") === 0) ? this.container.lookup(target) : target = this.container.cache[target];
          

  			if(this.hasOwnProperty("action") && this.action !==  undefined && this.action !==  null)
  			{  		
  	  			target.send(this.action,obj,this);
  	  	}

	  	
	  	},
	  	setDialog : function(obj,target){

          target.set(obj.dialog,true);  

  		},
  		closeDialog : function(){

        
        var target = this.get("parentView.target");
        var dialogname = this.get("parentView.name");

        target = (target === null) ? target : this.get("parentView.parentView.target");
        dialogname = (dialogname === undefined) ?  this.get("parentView.parentView.name") : dialogname;

  			target.set(dialogname,false);

  		}

  	}
});

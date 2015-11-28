import Em from 'ember';


export default Ember.Route.extend({

		model : function  () {
			
		},
		setupController : function(controller,model){


			var createElementAction = [
	    		{
					label 	 : "New dialog",			
					dialog   : "newtabdialog",  
					icon     : "fa fa-list",    
					classname    : "fx m-item",	
					divider:"divider"
				},				
				{
					label 	 : "Reopen closed tabs",	
					action   :  "createfolder",   
					dialog   : "createfolder",    
					icon     : "fa fa-folder-o",  
					disabled : "disabled",
					classname    : "fx m-item",

				}
	    	];

	    	var docFooterActions = [
	    		{	
	    			label 	 	: "Cancel",	
	    			dialogClose : true			
	    		},
	    		{	
	    			label 	 : "Ok",				
	    			action   :  "newwindowaccept"   
	    		}
	    	];

	    	controller.set("newtabdialog",false);
	    	
	    	controller.set("docFooterActions",docFooterActions);
	    	controller.set("createElementAction",createElementAction);


		}
})
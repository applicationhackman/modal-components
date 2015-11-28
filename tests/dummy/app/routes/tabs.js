import Em from 'ember';


export default Em.Route.extend({

		model : function  () {
			
		},
		setupController : function(controller){

			// console.log("dialog here ",controller);

			var createElementAction = [
	    		{
					label 	 : "New tab",			
					dialog   : "newtabdialog",  
					icon     : "fa fa-list",    
					classname    : "fx m-item"	
				},
				{
					label 	 : "New window ",	
					dialog   : "newwindowdialog", 
					icon     : "fa fa-list-alt",  
					classname    : " fx m-item"  
				},
				{
					label 	 : "Reopen closed tabs",	
					action   :  "createfolder",   
					dialog   : "createfolder",    
					icon     : "fa fa-folder-o",  
					disabled : "disabled",
					classname    : "fx m-item"   
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



	    	var ribbon = [

	    		{
	    			label: "Home",
	    			template : "ribbon/hometab",
	    			id:"home",
	    			mode : "active"
	    		},
	    		{
	    			label: "Edit",
	    			template : "ribbon/edittab",
	    			id:"edit",
	    		}

	    	];

	    	controller.set("createElementAction",createElementAction);

	    	controller.set("newtabdialog",false);

	    	controller.set("docFooterActions",docFooterActions);

	    	controller.set("ribbon",ribbon);	
	    	


		}

})
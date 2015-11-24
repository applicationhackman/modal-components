import Em from 'ember';


export default Ember.Route.extend({

		model : function  (argument) {
			
		},
		setupController : function(controller,model){

			console.log("dialog here ",controller);

				var createElementAction = [
	    		{
					label 	 : "New tab",				//No I18N 			 
					dialog   : "newtabdialog",    //No I18N 
					icon     : "fa fa-list",     //No I18N 
					classname    : "fx m-item"	 //No I18N 			
				},
				{
					label 	 : "New window ",	//No I18N 						 
					dialog   : "newwindowdialog",    //No I18N 
					icon     : "fa fa-list-alt",  //No I18N 
					classname    : " fx m-item"   //No I18N 
				},
				{
					label 	 : "Reopen closed tabs",	//No I18N 						 
					action   :  "createfolder",   //No I18N 
					dialog   : "createfolder",    //No I18N 
					icon     : "fa fa-folder-o",  //No I18N 
					disabled : "disabled",
					classname    : "fx m-item"   //No I18N 
				}
	    	];

	    	controller.set("createElementAction",createElementAction);

	    	controller.set("newtabdialog",false);
	    	


		}

})
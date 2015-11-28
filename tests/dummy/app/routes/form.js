import Em from 'ember';


export default Em.Route.extend({

		model : function  () {
			
		},
		setupController : function(controller){

			// console.log("dialog here ",controller);
			// text, number, decimal, 
			var formdata = [
	    		{	
	    			type     : "text",
					label 	 : "First Name",	
					
					icon     : "fa fa-list",    
					classname    : "fx m-item"	
				}

	    	];

	    	console.log("formdata is ",formdata);

	    	
	    	controller.set("formdata",formdata);

	    	


		}

})
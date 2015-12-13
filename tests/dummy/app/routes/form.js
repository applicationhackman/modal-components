import Em from 'ember';


export default Em.Route.extend({

		model : function  () {
			
		},
		setupController : function(controller){

			var formdata = [
	    		{	
	    			type     : "text",
					label 	 : "First Name",	
					placeholder:"First Name",
					value : "goo",
				},
				{	
	    			type     : "text",
					label 	 : "Last Name",	
					placeholder:"Last Name",
				},
				{	
	    			type     : "password",
					label 	 : "Password",	
					placeholder:"Password",
				},
				{	
	    			type     : "email",
					label 	 : "Eail",	
					placeholder:"Eail Address",
				},
				{	
	    			type     : "radio",
	    			label 	 : "Choose your color ",	
	    			name :'colors',
					model      : [
						{
							label : 'red',
						},
						{
							label : 'yellow',
						}
					]
				},
				{	
	    			type     : "checkbox",
	    			name :'colors',
	    			label 	 : "Choose a way to go ",	
					model      : [
						{
							label : 'red',
							checked : true
						},
						{
							label : 'yellow',
							checked : true
						}
					]
				},
				{	
	    			type     : "textarea",
	    			label 	 : "Address",	
					model      : ""
				},
				{	
	    			type     : "select",
	    			label 	 : "Choose your city",	
					model      : [
						{
							label : 'Chennai',
							value : 'chennai' 
						},
						{
							label : 'Madurai',
							value : 'madurai' 
						}
					]
				},
				
				

	    	];

	    	console.log("formdata is ",formdata);

	    	
	    	controller.set("formdata",formdata);

	    	


		}

})
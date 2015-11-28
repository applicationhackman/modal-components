import Ember from 'ember';

export default Ember.Mixin.create({
		didInsertElement : function() {
				
				var target;

				if(this.get("target") == null){
					return false;
				}

				if(this.get("target").indexOf("component") === 0){
					target = this.container.lookup(this.get("target"));
				}else{
					target = this.container.cache[this.get("target")];
				}

				this.set("dialogTaget",target);
				target.set(this.get("dialog"),false);

				console.log("target is ",target," dialog is ",this.get("dialog"), target[this.get("dialog")]);
				


				console.log("dialog is here ",this.get("dialog"), this.get("dialogClose"));


		},
		actions : {

			openDialog : function()
			{
				console.log("dialogTaget is ",this.get("dialogTaget"));		

				var dialogTaget = this.get("dialogTaget");

				if(dialogTaget !== null && dialogTaget !== undefined){
					dialogTaget.set(this.get("dialog"),true);	
				}

			},
			stateChange : function(){
				console.log("dialog stateChange ",this);
			}

		}
});

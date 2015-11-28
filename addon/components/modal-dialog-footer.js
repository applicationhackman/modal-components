import Em from 'ember';
import layout from '../templates/components/modal-dialog-footer';

export default Em.Component.extend({
 classNames : "modal-footer",
  layout: layout,
  footer : Em.computed(function(){
  		return this.hasOwnProperty("footeractions");
  }),
  didInsertElement : function () {
  	
  	

  },



});

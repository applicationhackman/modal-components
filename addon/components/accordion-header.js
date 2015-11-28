import Em from 'ember';
import layout from '../templates/components/accordion-header';

export default Em.Component.extend({
  layout: layout,
  classNames:["panel-heading"],
  attributeBindings : ['role','id'],
  'data-parent' : Em.computed("parentView.id",function(){
 	  return this.get("parentView.id");
  }), 
  id : Em.computed("modal.id",function(){

 	  return this.get("modal.id");
  }),
  didInsertElement : function(){

  	this.$().find("a").attr("href","#"+this.get("id")+"cont");
  	this.$().find("a").attr("data-parent","#"+this.get("id")+"cont");

  }
  
});

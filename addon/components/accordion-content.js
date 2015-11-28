import Em from 'ember';
import layout from '../templates/components/accordion-content';

export default Em.Component.extend({
  layout: layout,
  classNames:"panel-collapse collapse",
  attributeBindings : ['role','aria-labelledby','id'],
  'aria-labelledby': Em.computed("modal.id",function(){
 	  return this.get("modal.id");
  }),
  id : Em.computed("modal.id",function(){
 	  return this.get("modal.id")+"cont";
  }),
});

import Em from 'ember';
import layout from '../templates/components/tab-content';

export default Em.Component.extend({
  layout: layout,
  classNames:["tab-pane"],
  classNameBindings :["mode"],
  attributeBindings : ["role"],
  mode : Em.computed("modal.mode",function(){
 	  return this.get("modal.mode");
  }),
});

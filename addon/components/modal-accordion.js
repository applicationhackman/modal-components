import Ember from 'ember';
import layout from '../templates/components/modal-accordion';

export default Ember.Component.extend({
  layout: layout,
  classNames:['panel-group'],
  attributeBindings:['role',"aria-multiselectable"],
  

});

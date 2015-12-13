import Ember from 'ember';
import layout from '../templates/components/input-textarea';

export default Ember.Component.extend({
  tagName:"textarea",
  classNames:['form-control'],	
  layout: layout
});

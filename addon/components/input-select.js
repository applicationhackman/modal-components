import Ember from 'ember';
import layout from '../templates/components/input-select';

export default Ember.Component.extend({
	tagName:'select',
	classNames:['form-control'],
  	layout: layout
});

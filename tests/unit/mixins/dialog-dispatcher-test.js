import Ember from 'ember';
import DialogDispatcherMixin from '../../../mixins/dialog-dispatcher';
import { module, test } from 'qunit';

module('Unit | Mixin | dialog dispatcher');

// Replace this with your real tests.
test('it works', function(assert) {
  var DialogDispatcherObject = Ember.Object.extend(DialogDispatcherMixin);
  var subject = DialogDispatcherObject.create();
  assert.ok(subject);
});

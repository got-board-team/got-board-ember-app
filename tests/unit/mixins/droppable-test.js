import Ember from 'ember';
import DroppableMixin from '../../../mixins/droppable';
import { module, test } from 'qunit';

module('DroppableMixin');

// Replace this with your real tests.
test('it works', function(assert) {
  var DroppableObject = Ember.Object.extend(DroppableMixin);
  var subject = DroppableObject.create();
  assert.ok(subject);
});

test('#drop nullifies droppable element', function(assert) {
  var DroppableObject = Ember.Object.extend(DroppableMixin);
  var subject = DroppableObject.create();
  window.droppableElement = "some element";

  subject.drop();

  assert.equal(window.droppableElement, null);
});

test('#drop removes drop-actived class from droppable element', function(assert) {
  var DroppableObject = Ember.Object.extend(DroppableMixin);
  var spy = sinon.spy();
  var subject = DroppableObject.create({
    d: function () {
      return { classed: spy };
    }
  });
  subject.drop();
  assert.ok(spy.calledWith("drop-actived", false));
});

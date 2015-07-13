import { moduleForModel, test } from 'ember-qunit';

moduleForModel('unit', 'Unit | Serializer | unit', {
  // Specify the other units that are required for this test.
  needs: ['serializer:unit', "model:territory", "model:player"]
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  var record = this.subject({
    house: "Stark",
    territory: "winterfell",
    x: 540,
    y: 435,
  });

  var t;
   Ember.run(function() {
    t = store.createRecord('territory', {
      slug: "winterfell",
    });
  });

  var serializedRecord = record.serialize();

  console.log(serializedRecord);
  assert.ok(serializedRecord);
});

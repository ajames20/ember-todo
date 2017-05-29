import Ember from 'ember';

export default Ember.Controller.extend({
  isCompleted(key, value) {
    let model = this.get('model');

    if (value === undefined) {
      return model.get('isCompleted');
    } else {
      model.set('isCompleted', value);
      model.save();
      return value;
    }
  }
});

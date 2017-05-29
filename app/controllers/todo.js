import Ember from 'ember';

export default Ember.Controller.extend({
  isCompleted() {
    return this.get('model').get('isCompleted');
  }
});

import Ember from 'ember';

export default Ember.Component.extend({
  classNameBindings: ['isCompleted:completed'],
  isCompleted: false
});

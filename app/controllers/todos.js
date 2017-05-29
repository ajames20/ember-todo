import Ember from 'ember';

export default Ember.Controller.extend({
  remaining: Ember.computed.filterBy('model', 'isCompleted', false),
  actions: {
    createTodo() {
      let title = this.get('newTitle');

      if (!title) {
        return false;
      }
      if (!title.trim()) {
        return;
      }

      let todo = this.store.createRecord('todo', {
        title: title,
        isCompleted: false
      });

      this.set('newTitle', '');
      todo.save();
    }
  }
});

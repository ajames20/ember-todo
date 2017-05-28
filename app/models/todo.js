import DS from 'ember-data';

const Todo = DS.Model.extend({
  title: DS.attr('string'),
  isCompleted: DS.attr('boolean')
});

Todo.reopenClass({
  FIXTURES: [
    {
      id: 1,
      title: 'Learn Ember.js',
      isCompleted: true
    },
    {
      id: 2,
      title: 'Get Milk',
      isCompleted: false
    },
    {
      id: 3,
      title: 'Get Kinnku',
      isCompleted: false
    }
  ]
});

export default Todo;

import Ember from 'ember';



export default Ember.Route.extend({
  model () {
    return {viewDateSouse: new Date()}
  }
});

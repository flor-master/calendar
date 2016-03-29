import Ember from 'ember';
import calendarGetMonth from './utils/get_total_days';

export default Ember.Component.extend({

  dayList : [
      {name: 'Mon'},
      {name: 'Tue'},
      {name: 'Wed'},
      {name: 'Thu'},
      {name: 'Fri'},
      {name: 'Sat'},
      {name: 'Sun'},
  ],

  viewDate: {
    year: new Date().getFullYear(),
    month: new Date().getMonth(),
    date: new Date().getDate()
  },

  calendarGetMonth: new calendarGetMonth(),

  didReceiveAttrs() {
    this._super(...arguments);
    const viewDateSouse = this.get('viewDateSouse');
    this.set('totalDaysList', this.calendarGetMonth.getAllDays(this.viewDate.year, this.viewDate.month));
  },

  actions: {
    getPrevMonth () {
      let year = this.get('viewDate.year'),
          month = this.get('viewDate.month')-1;

      this.set('viewDate.month', new Date( year, month, 1).getMonth() );
      this.set('viewDate.year', new Date( year, month, 1).getFullYear() );
      this.set('totalDaysList', this.calendarGetMonth.getAllDays(this.viewDate.year, this.viewDate.month));
      console.log(this.get('totalDaysList'));
    },

    getNextMonth () {
      let year = this.get('viewDate.year'),
          month = this.get('viewDate.month')+1;

      this.set('viewDate.month', new Date( year, month, 1).getMonth() );
      this.set('viewDate.year', new Date( year, month, 1).getFullYear() );
      this.set('totalDaysList', this.calendarGetMonth.getAllDays(this.viewDate.year, this.viewDate.month));
      console.log(this.get('totalDaysList'));

    },

    getCurrentMonth () {
      this.set('viewDate.month', this.viewDateSouse.getMonth() );
      this.set('viewDate.year', this.viewDateSouse.getFullYear() );
      this.set('totalDaysList', this.calendarGetMonth.getAllDays(this.viewDate.year, this.viewDate.month))
    }
  }

});

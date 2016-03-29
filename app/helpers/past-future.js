import Ember from 'ember';

export function fullMonth(params) {

    let className = '';

    switch (params[0]) {
      case 'now':
        className = '-current-day';
        break;
      case 'future':
        className = '-future-day';
        break;
      default:
        className = ''
    }

    return className;
}

export default Ember.Helper.helper(fullMonth);

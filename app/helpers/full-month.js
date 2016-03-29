import Ember from 'ember';

export function fullMonth(params) {

    let monthFull = [
                    ['January', 'Jan'],
                    ['February', 'Feb'],
                    ['March', 'Mar'],
                    ['April', 'Apr'],
                    ['May', 'May'],
                    ['June', 'Jun'],
                    ['July', 'Jul'],
                    ['August', 'Aug'],
                    ['September', 'Sep'],
                    ['October', 'Oct'],
                    ['November', 'Nov'],
                    ['December', 'Dec']
                  ];

    return ( params[1] ? monthFull[params[0]][1] : monthFull[params[0]][0]);;

}

export default Ember.Helper.helper(fullMonth);

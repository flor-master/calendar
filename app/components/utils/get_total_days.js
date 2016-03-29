class getTotalDays {
  constructor() {
    this.now = new Date();
    this.dayNow = new Date().getDate();
    this.monthNow = new Date().getMonth();
    this.yearNow = new Date().getFullYear();
    this.visibleDays = 42;
  }

  _daysInMonth (year=null, month=null) {
      if (year && month) {
          return 33 - new Date(year, month, 33).getDate();
      } else {
          return 33 - new Date(new Date().getFullYear(), new Date().getMonth(), 33).getDate();
      }
  };

  _getFirstDay (year, month) {
      return new Date(year, month, 1).getDay();
  }

  _isFuture(date){
    var day = new Date(date.getFullYear(), date.getMonth(), date.getDate()).valueOf()
    if ( day > this.now ){
      return 'future';
    }
  }

  getAllDays (year, month) {

    let visibleDays = new Array(),
        firstDay = this._getFirstDay (year, month),
        daysInMonth = this._daysInMonth (year, month);

    var startFrom = firstDay > 0 ? firstDay : 7;

    for (let i = startFrom; i > 1 ; i--) {
        let date = {
            day: new Date(year, month, 2-i).getDate(),
            month: month-1,
            showMonth: false,
            currentDate: this._isFuture(new Date(year, month, 2-i)),
            showMonthTitle: false
        }
        visibleDays.push (date);
    }

    for (let i = 0; i < daysInMonth; i++) {
        let date = {
            day: i+1,
            month: month,
            showMonth: true,
            currentDate: this._isFuture(new Date(year, month, i+1)),
            showMonthTitle: false
            }
        if ( i+1 == this.dayNow && month == this.monthNow && year == this.yearNow ){
            date.currentDate = 'now';
        }

        if (i ==0) {
          date.showMonthTitle = true;
        }
        visibleDays.push (date);
    }

    if ( visibleDays.length < this.visibleDays) {
        let steeps = visibleDays.length;

        for (let i = 0; i<this.visibleDays-steeps; i++) {
            let date = {
                day: new Date(year, month, daysInMonth+i+1).getDate(),
                month: month+1,
                showMonth: false,
                currentDate: this._isFuture(new Date(year, month, daysInMonth+i+1)),
                showMonthTitle: false
            }
            if (i ==0 ) {
              date.showMonthTitle = true;
            }
            visibleDays.push (date);
        }
    }
    console.log(visibleDays);
    return visibleDays;
  }
}

export default getTotalDays;

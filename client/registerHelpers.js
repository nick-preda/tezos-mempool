Template.registerHelper('exactDateHour', function (string) {
  return moment(string).format('DD-MM-YYYY HH:mm:ss');
  // return moment(string).format('LLL');
});

Template.registerHelper('exactDate', function (string) {
  return moment(string).format('DD-MM-YYYY');
  // return moment(string).format('LLL');
});

Template.registerHelper('exactDateExplicit', function (string) {
  return moment(string).format('DD MMMM YYYY');
  // return moment(string).format('LLL');
});

Template.registerHelper('exactHour', function (string) {
  return moment(string).format('HH:mm');
  // return moment(string).format('LLL');
});

Template.registerHelper('exactDayOfWeek', function (string) {
  return moment(string).format('dddd DD MMM YYYY');
  // return moment(string).format('LLL');
});

Template.registerHelper('exactDateHourExplicit', function (string) {
  return moment(string).format('DD MMMM YYYY HH:mm');
  // return moment(string).format('LLL');
});

Template.registerHelper('momentFromNow', function (string) {
  // return moment(string).format('MMMM DD, YYYY');
  return moment(string).fromNow();
});

Template.registerHelper('momentFromNowMyFormat', function (string) {
  // return moment(string).format('MMMM DD, YYYY');
  return moment(string, "YYYY-MM-DD HH:mm:ss ZZ").fromNow();
});

Template.registerHelper('calculateEndHour', function (startDate, duration) {
  // return moment(string).format('MMMM DD, YYYY');
  // console.log(startDate + " " + duration);
  totalMinutes = duration.hours * 60 + duration.minutes
  if (totalMinutes > 1440) {
    return moment(startDate).add(duration.hours, 'h').add(duration.minutes, 'm').format('HH:mm, DD MMMM YYYY');
  } else {
    return moment(startDate).add(duration.hours, 'h').add(duration.minutes, 'm').format('HH:mm');
  }
});

Template.registerHelper('formatNumberWithCommas', function (num) {
  // return moment(string).format('MMMM DD, YYYY');
  return num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
});



Template.registerHelper('calculateDuration', function (duration) {
  // return moment(string).format('MMMM DD, YYYY');

  hours = duration.split("h")[0]

  return parseInt(hours) / 24
});

Template.registerHelper('roundToTwo', function (n) {
  if (n) {
    var digits = 2
    var negative = false;
    if (digits === undefined) {
      digits = 0;
    }
    if (n < 0) {
      negative = true;
      n = n * -1;
    }
    var multiplicator = Math.pow(10, digits);
    n = parseFloat((n * multiplicator).toFixed(11));
    n = (Math.round(n) / multiplicator).toFixed(2);
    if (negative) {
      n = (n * -1).toFixed(2);
    }
    return n;
  } else if (n == 0) {
    return 0;
  }
});

Template.registerHelper('roundToFour', function (n) {
  if (n) {
    var digits = 4
    var negative = false;
    if (digits === undefined) {
      digits = 0;
    }
    if (n < 0) {
      negative = true;
      n = n * -1;
    }
    var multiplicator = Math.pow(10, digits);
    n = parseFloat((n * multiplicator).toFixed(11));
    n = (Math.round(n) / multiplicator).toFixed(4);
    if (negative) {
      n = (n * -1).toFixed(4);
    }
    return n;
  }
});

Template.registerHelper('divideByMilion', function (number) {
  if (number) {
    if (parseInt(number) == 0) {
      return "0.00"
    } else {
      number = parseInt(number)
      return roundToTwoGlobal(number / 1000000)
    }
  }
});


roundToTwoGlobal = function (n) {
  if (n) {
    var digits = 2
    var negative = false;
    if (digits === undefined) {
      digits = 0;
    }
    if (n < 0) {
      negative = true;
      n = n * -1;
    }
    var multiplicator = Math.pow(10, digits);
    n = parseFloat((n * multiplicator).toFixed(11));
    n = (Math.round(n) / multiplicator).toFixed(2);
    if (negative) {
      n = (n * -1).toFixed(2);
    }
    return n;
  }
}

roundToThreeGlobal = function (n) {
  if (n) {
    var digits = 3
    var negative = false;
    if (digits === undefined) {
      digits = 0;
    }
    if (n < 0) {
      negative = true;
      n = n * -1;
    }
    var multiplicator = Math.pow(10, digits);
    n = parseFloat((n * multiplicator).toFixed(11));
    n = (Math.round(n) / multiplicator).toFixed(3);
    if (negative) {
      n = (n * -1).toFixed(3);
    }
    return n;
  }
}
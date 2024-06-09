$(document).ready(function () {
  // dropdown functionality start
  let dropdown = $("#select"); //grab the element
  dropdown.change(function () {
    //dropdown functionality start
    let dropdownSelect = $("#select option:selected").val();
    if (dropdownSelect == "dollor") {
      // if dropdown value is 'dollor'
      //   hour input field
      hour = $("#hourlyWage").val();
      hourD = (hour / 162).toFixed(3);
      $("#hourlyWage").val(hourD);

      //   daily input field
      daily = $("#dailyWage").val();
      dailyD = (daily / 162).toFixed(3);
      $("#dailyWage").val(dailyD);

      //   weekly input field
      weekly = $("#weeklyWage").val();
      dailyD = (weekly / 162).toFixed(3);
      $("#weeklyWage").val(dailyD);

      //   monthly input field
      monthly = $("#MonthlyWage").val();
      dailyD = (monthly / 162).toFixed(3);
      $("#MonthlyWage").val(dailyD);

      //   yearly input field
      yearly = $("#YearlyWage").val();
      dailyD = (yearly / 162).toFixed(3);
      $("#YearlyWage").val(dailyD);
    } else if (dropdownSelect == "euro") {
      // if dropdown value is 'euro'
      //   hour input field
      hour = $("#hourlyWage").val();
      hourD = (hour / 191).toFixed(3);
      $("#hourlyWage").val(hourD);

      //   daily input field
      daily = $("#dailyWage").val();
      dailyD = (daily / 191).toFixed(3);
      $("#dailyWage").val(dailyD);

      //   weekly input field
      weekly = $("#weeklyWage").val();
      dailyD = (weekly / 191).toFixed(3);
      $("#weeklyWage").val(dailyD);

      //   monthly input field
      monthly = $("#MonthlyWage").val();
      dailyD = (monthly / 191).toFixed(3);
      $("#MonthlyWage").val(dailyD);

      //   yearly input field
      yearly = $("#YearlyWage").val();
      dailyD = (yearly / 191).toFixed(3);
      $("#YearlyWage").val(dailyD);
    }
  });
  // dropdown functionality end

  // hourlyWage functionality start
  var hourlyWage = $("#hourlyWage");
  hourlyWage.change(function (e) {
    let value = e.target.value;
    nValue = Number(value);
    let daily = nValue * 8;
    let weekly = nValue * 40;
    let monthly = (nValue * 173.28571428571428).toFixed(3);
    let yearly = nValue * 2080;
    let dailyWage = $("#dailyWage").val(daily);
    let weeklyWage = $("#weeklyWage").val(weekly);
    let MonthlyWage = $("#MonthlyWage").val(monthly);
    let YearlyWage = $("#YearlyWage").val(yearly);
  });
  // hourlyWage function and data End

  // DailyWage function and data start
  var dailyWage = $("#dailyWage");
  dailyWage.change(function (e) {
    let value = e.target.value;
    nValue = Number(value);
    let hour = nValue * 0.125;
    let weekly = nValue * 5;
    let monthly = nValue * 21.6876;
    let yearly = nValue * 260;
    let dailyHour = $("#hourlyWage").val(hour);
    let weeklyWage = $("#weeklyWage").val(weekly);
    let MonthlyWage = $("#MonthlyWage").val(monthly);
    let YearlyWage = $("#YearlyWage").val(yearly);
  });
  // hourlyWage function and data End
});

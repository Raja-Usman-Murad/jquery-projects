const pkr = function () {
    let monthlySalary = +document.getElementById("monthlySalary").value;
  let perHourRate = +document.getElementById("perHourRate").value;
  let workingHour = +document.getElementById("workingHour").value;
  let workingDays = +document.getElementById("workingDays").value;
  let show = document.getElementById("show");
  //   console.log(hour);
  if (perHourRate == "" || perHourRate == null || workingHour == "" || workingHour == null) {
    alert("plz fill the fields");
  } else {
    let result = perHourRate * workingHour;
    // console.log(result);
    show.innerHTML = `your perHourRate will be ${result} pkr`;
  }
};

const usd = function () {
  let perHourRate = +document.getElementById("perHourRate").value;
  let workingHour = +document.getElementById("workingHour").value;
  let show = document.getElementById("show");
  let result = perHourRate * workingHour;
  let usdresult = Math.round(result / 155);
  show.innerHTML = `your perHourRate will be ${usdresult} dollor`;
};
const euro = function () {
  let perHourRate = +document.getElementById("perHourRate").value;
  let workingHour = +document.getElementById("workingHour").value;
  let show = document.getElementById("show");
  let result = perHourRate * workingHour;
  let usdresult = Math.round(result / 191);
  show.innerHTML = `your perHourRate will be ${usdresult} Euro`;
};
let calculate = () => {
  let currency = document.getElementById("select").value; //(first method)
  /* let currency = document.getElementById("select"); 
     const currentCurrency = select.options[currency.selectedIndex];  (second method)*/
  if (currency == "") {
    alert("Select any Country");
  } else if (currency == "PKR") {
    // console.log("pkr");
    pkr();
  } else if (currency == "USD") {
    // console.log("usd");
    usd();
  } else {
    // console.log("euro");
    euro();
  }
};

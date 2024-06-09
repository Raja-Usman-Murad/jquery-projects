"use strict";
$(document).ready(function () {
  $("#success_messege").hide();
  $("#update_delete_btn").hide();
  storagegetdata();

  // get data from local storage
  function storagegetdata() {
    if (localStorage.length > 0) {
      var keyid = Object.keys(localStorage);
      console.log(keyid);
      for (let i = 0; i < keyid.length; i++) {
        var res = localStorage.getItem(keyid[i]);
        console.log(res);

        var parsevalue = JSON.parse(res);

        var option = $("<option>");
        option
          .val(keyid[i])
          .text(
            parsevalue.firstname +
              parsevalue.lastname +
              parsevalue.address +
              parsevalue.country +
              parsevalue.city +
              parsevalue.zipcode +
              parsevalue.phone
          );
        $("#address_dropdown").append(option);
      }
    }
  }

  // address selection

  $("#address_dropdown").change(function () {
    if ($(this).val() == "newaddress") {
      $("#form_shipping").show(1000);
      $("#update_delete_btn").hide(1000);
    } else {
      $("#form_shipping").hide(1000);
      $("#update_delete_btn").show(1000);
    }
  });

  // delete function

  $("#delete").click(function () {
    var id = $("#address_dropdown option:selected").val();

    console.log(id);

    localStorage.removeItem(id);

    setTimeout(() => {
      location.reload();
    }, 500);
  });

  // new address function

  $("#new_address").click(function () {
    $("#form_shipping").show(1000);
    $("#address_dropdown").val("newaddress");
    $("#update_delete_btn").hide(1000);
  });

  // update function

  $("#update").click(function () {
    $("#form_shipping").show();
    console.log("enter into update");
    var id = $("#address_dropdown option:selected").val();
    var resp = JSON.parse(localStorage.getItem(id));
    // let resp = JSON.parse(res);
    const { firstname, lastname, address, country, city, zipcode, phone } =
      resp;
    $("#firstname").val(firstname);
    $("#lastname").val(lastname);
    $("#address").val(address);
    $("#country").val(country);
    $("#city").val(city);
    $("#zipcode").val(zipcode);
    $("#phone").val(phone);
  });

  // function on submit button
  $("#submit").click(function () {
    var optionid = $("#address_dropdown option:selected").val();

    if (optionid == "newaddress") {
      optionid = Math.floor(Math.random() * 100 + 1);
    }

    $("#success_messege").show(function () {
      $("#success_messege").hide(3000);
    });

    // variables for all inputs
    var firstname = $("#firstname").val();
    var lastname = $("#lastname").val();
    var address = $("#address").val();
    var country = $("#country").val();
    var city = $("#city").val();
    var zipcode = $("#zipcode").val();
    var phone = $("#phone").val();

    // variable for local storage
    var local_storage_obj = {
      firstname: firstname,
      lastname: lastname,
      address: address,
      country: country,
      city: city,
      zipcode: zipcode,
      phone: phone,
    };
    localStorage.setItem(optionid, JSON.stringify(local_storage_obj));
    setTimeout(() => {
      location.reload();
    }, 3000);
  });
});

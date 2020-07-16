$(document).ready(function () {
  $('#simRndForm').submit(function (e) {
    e.preventDefault();

    // make button spinning
    // add spinner to button
    $('#simRndBtn').html(
      `<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Simulating...`
    );

    // catch the form's submit event
    var simRounds = $('#simrounds').val();

    $.ajax({
      type: 'POST',
      url: '/main/simulation',
      dataType: 'json',
      data: { simRounds: simRounds },
      success: function (msg) {
        console.log(msg.msg);
        alert(JSON.stringify(msg));
        $('#simRndBtn').html(`Submit`);
      },
      error: function () {
        alert('failure');
        $('#simRndBtn').html(`Submit`);
      },
    });
  });
});

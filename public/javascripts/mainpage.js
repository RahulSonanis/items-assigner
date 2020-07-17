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
        fillTable(JSON.parse(msg));

        $('#simRndBtn').html(`Submit`);
      },
      error: function () {
        alert('failure');
        $('#simRndBtn').html(`Submit`);
      },
    });
  });

  function fillTable(matrix) {
    var m = matrix.length;
    var n = matrix[0].length;
    for (var i = 0; i < m; i++) {
      for (var j = 0; j < n; j++) {
        $('#' + i + '_' + j).html(matrix[i][j]);
      }
    }
  }
});

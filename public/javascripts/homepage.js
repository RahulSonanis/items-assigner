$(document).ready(function () {
  $('#addpersonBtn').click(function (e) {
    e.preventDefault();

    $('#personjumbo').append(
      `<div id="personDetails" class="row text-center">
        <div class="col"></div>
        <div class="col-6 form-group">
          <input
            class="form-control"
            name="person"
            type="text"
            placeholder="Enter person name"
            required
          />
        </div>
        <div class="col">
          <button id="rmpersonBtn" class="btn btn-primary btn-sm">Remove</button>
        </div>
      </div>`
    );
  });

  $('#additemBtn').click(function (e) {
    e.preventDefault();

    $('#itemjumbo').append(
      `<div id="itemDetails" class="row text-center">
      <div class="col"></div>
      <div class="col-6 form-group">
        <input
          class="form-control"
          name="item"
          type="text"
          placeholder="Enter item name"
          required
        />
      </div>
      <div class="col">
        <button id="rmitemBtn" class="btn btn-primary btn-sm">Remove</button>
      </div>
    </div>`
    );
  });

  $('#itemsPersonsForm').submit(function (e) {
    e.preventDefault();

    // make button spinning
    // add spinner to button
    $('#itemsPersonsBtnBtn').html(
      `<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Simulating...`
    );

    // get data of form
    var arrdata = $('form').serializeArray();
    var data = {
      itemCount: 0,
      items: [],
      personCount: 0,
      persons: [],
    };

    // traverse through array to make data
    var arrlen = arrdata.length;
    for (var i = 0; i < arrlen; i++) {
      if (arrdata[i].name == 'person') {
        data.personCount++;
        data.persons.push(arrdata[i].value);
      } else {
        data.itemCount++;
        data.items.push(arrdata[i].value);
      }
    }

    console.log(data);

    $.ajax({
      type: 'POST',
      url: '/main',
      data: data,
      success: function (msg) {
        $('#simRndBtn').html(`Submit`);
        window.location.replace('/main');
      },
      error: function () {
        $('#simRndBtn').html(`Submit`);
      },
    });
  });
});

$(document).on('click', '#rmpersonBtn', function () {
  $(this).closest('#personDetails').remove();
});

$(document).on('click', '#rmitemBtn', function () {
  $(this).closest('#itemDetails').remove();
});

(function($) {

    $('#meal_preference').parent().append('<ul class="list-item" id="newmeal_preference" name="meal_preference"></ul>');
    $('#meal_preference option').each(function(){
        $('#newmeal_preference').append('<li value="' + $(this).val() + '">'+$(this).text()+'</li>');
    });
    $('#meal_preference').remove();
    $('#newmeal_preference').attr('id', 'meal_preference');
    $('#meal_preference li').first().addClass('init');
    $("#meal_preference").on("click", ".init", function() {
        $(this).closest("#meal_preference").children('li:not(.init)').toggle();
    });
    
    var allOptions = $("#meal_preference").children('li:not(.init)');
    $("#meal_preference").on("click", "li:not(.init)", function() {
        allOptions.removeClass('selected');
        $(this).addClass('selected');
        $("#meal_preference").children('.init').html($(this).html());
        allOptions.toggle();
    });
  
    var marginSlider1 = document.getElementById('slider-margin1');
    var marginSlider2 = document.getElementById('slider-margin2');

    if (marginSlider1 != undefined) {
        noUiSlider.create(marginSlider1, {
              start: [500],
              step: 10,
              connect: [true, false],
              tooltips: [true],
              range: {
                  'min': 10,
                  'max': 6000
              },
              format: wNumb({
                  decimals: 0,
                  thousand: ',',
                  prefix: '$',
              })
      });
    }
    if (marginSlider2 != undefined) {
        noUiSlider.create(marginSlider2, {
              start: [500],
              step: 10,
              connect: [true, false],
              tooltips: [true],
              range: {
                  'min': 10,
                  'max': 30000
              },
              format: wNumb({
                  decimals: 0,
                  thousand: ',',
                  prefix: '$ ',
              })
      });
    }
    $('#reset').on('click', function(){
        $('#register-form').reset();
    });
  
    $('#register-form').validate({
      rules : {
          first_name : {
              required: true,
          },
          last_name : {
              required: true,
          },
          company : {
              required: true
          },
          email : {
              required: true,
              email : true
          },
          phone_number : {
              required: true,
              number : true
          }
      },
      onfocusout: function(element) {
          $(element).valid();
      },
  });
  
      jQuery.extend(jQuery.validator.messages, {
          required: "Remplir toutu les champs SVP !",
          remote: "",
          email: "Cette Email ce n'est pas Valide",
          url: "",
          date: "",
          dateISO: "",
          number: "le numero de telephone ce n'est pas valide ",
          digits: "",
          creditcard: "",
          equalTo: ""
      });
  })(jQuery);
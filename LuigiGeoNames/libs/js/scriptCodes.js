$('#btnRun').click(function() {

    $.ajax({
        url: "libs/php/getCodeByLatLong.php",
        type: 'POST',
        dataType: 'json',
        data: {
            lat: $('#sellat').val(),
            lng: $('#sellong').val()
        },
       
        success: function(result) {

            console.log(result.status.name);
            console.log(result['data'].countryCode)

            if (result.status.name == "ok") {

               $('#Code').html(result['data'].countryCode); 
               $('#Country').html(result['data'].countryName); 

            }
        
        },
        error: function(jqXHR, textStatus, errorThrown) {
            // your error code
            console.log(errorThrown);
            console.log(textStatus);
           console.log($('#sellat').val());
           console.log($('#sellong').val());

            
        }
    });


});
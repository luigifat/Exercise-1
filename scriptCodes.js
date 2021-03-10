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

            if (result.status.name == "ok") {

                $('#Code').html(result['data'][0]["countryCode"]);
                

            }
        
        },
        error: function(jqXHR, textStatus, errorThrown) {
            // your error code
           console.log("error");

            
        }
    })


});
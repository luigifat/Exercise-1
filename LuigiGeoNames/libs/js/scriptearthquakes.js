$('#btnRun').click(function() {

    $.ajax({
        url: "libs/php/earthquakes.php",
        type: 'POST',
        dataType: 'json',
        data: {
            north: $('#North').val(),
            south: $('#South').val(),
            east:  $('#East').val(),
            west:  $('#West').val()
        },
        success: function(result) {

            console.log(result);

            if (result.status.name == "ok") {

                $('#Date').html(result['data'][0]['datetime']);
                $('#Magnitudo').html(result['data'][0]['magnitude']);
             
            }
        
        },
        error: function(jqXHR, textStatus, errorThrown) {
            // your error code
        }
    }); 


});
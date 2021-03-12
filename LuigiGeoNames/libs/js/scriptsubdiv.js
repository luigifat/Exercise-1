$('#btnRun').click(function() {

    $.ajax({
        url: "libs/php/children.php",
        type: 'POST',
        dataType: 'json',
        data: {
            geonameId: $('#selCountry').val(),
           
        },
       
        success: function(result) {

            console.log(result.status.name);
            console.log(result['data'])

            if (result.status.name == "ok") {

               $('#subdivisions').html(result['data'].totalResultsCount); 
              

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
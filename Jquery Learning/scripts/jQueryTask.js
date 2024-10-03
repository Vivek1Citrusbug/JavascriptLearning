function fetchData(){
    $.ajax({
        url: "https://jsonplaceholder.typicode.com/posts",
        async: true,
        type: "GET",
        success: function(response){
            console.log(response);
            $(".myApiData").html(""); 
            response.forEach(element => {
                let output = `
                    <div class="row mb-3">
                        <div class="col">
                            <div class="card">
                                <div class="card-header">
                                    <h4><strong>USER ID: </strong> ${element.userId}</h4>
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title"><strong>ID: </strong> ${element.id}</h5>
                                    <h6 class="card-subtitle mb-2 text-muted"><strong>TITLE: </strong> ${element.title}</h6>
                                    <p class="card-text"><strong>BODY: </strong> ${element.body}</p>
                                </div>
                            </div>
                        </div>
                    </div>`;
                $(".myApiData").append(output);
            });
        },
        error: function(xhr, status, error){
            $(".myApiData").html(`<p>Error occurred: ${status} - ${error}</p>`);
        }
    });
}

$(document).ready(function() {
    fetchData(); 
});

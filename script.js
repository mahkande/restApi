document.querySelector("#getOne").addEventListener("click",getOne);

document.querySelector("#getAll").addEventListener("click",getAll);


function getOne(){
    var loadingimage = document.querySelector("#loading");
    loadingimage.style.display= "block"

    var id = document.querySelector("#postid").value;
    var url = "http://jsonplaceholder.typicode.com/posts/"+id;

    var xhr = new XMLHttpRequest();

    xhr.open("GET", url, true);

    xhr.onload = function(){
        if(xhr.status===200){
            loadingimage.style.display= "none";
            var post= JSON.parse(xhr.responseText);

            var html="";

            
                html += `
                <div class="card mb-2">
                <div class="card-header">
                ${post.id}-${post.title}
                </div>
                <div class="card-body">
                    <blockquote class="blockquote mb-0">
                    <p> ${post.body}</p>
                    <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                    </blockquote>
                </div>
                </div>
                `

        


            document.querySelector("#results").innerHTML = html;
        }
    }
    xhr.send();
    
}

function getAll(){
    var loadingimage = document.querySelector("#loading");
    loadingimage.style.display= "block"
    var url = "http://jsonplaceholder.typicode.com/posts";

    var xhr = new XMLHttpRequest();

    xhr.open("GET", url, true);

    xhr.onload = function(){
        if(xhr.status===200){
            loadingimage.style.display= "none";
            var posts= JSON.parse(xhr.responseText);

            var html="";

            posts.forEach(post => {
                html += `
                <div class="card mb-2">
                <div class="card-header">
                    ${post.title}
                </div>
                <div class="card-body">
                    <blockquote class="blockquote mb-0">
                    <p> ${post.body}</p>
                    <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                    </blockquote>
                </div>
                </div>
                `

            });


            document.querySelector("#results").innerHTML = html;
        }
    }
    xhr.send();


}
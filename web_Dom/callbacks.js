//callbacks
function loadScript( src, callback) {
    var script=document.createElement("script");
    script.src=src;
    script.onload=function() {
        console.log("SRC:"+ src);
        callback(null,src);
    }
    script.onerror=function() {
        console.log("err:"+ src);

        callback(new Error(src));
    }
    document.body.appendChild(script);
    
}


function hello(error,src) {
        if (error) {
            console.log("error");
            return
        }


    alert("helloword"+ src);
}

function goodmorning(error,src) {
    if (error) {
        console.log("error");
        return
    }


alert("helloword"+ src);
}


// function err(src) {
//     alert("error"+ src);
// }

loadScript("https://cdn.jsdeliv r.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js", hello);
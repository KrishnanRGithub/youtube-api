window.get = function(url) {
    return fetch(url, {method: "GET"});
  }
function resetExpiredToken(){
    console.log("Resetting")
    const resetENDPOINT = "/reset"
    fetch(resetENDPOINT).then((res)=>{
        console.log(res);
    }).catch((e)=>{
        console.log(e);
    })    
}
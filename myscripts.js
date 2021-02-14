/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidebar").style.width = "50%";
    //document.getElementById("main").style.marginRight = "50%";
  }
  
  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    //document.getElementById("main").style.marginRight = "0";
  }


// let submitBtn = document.getElementById('submitBtn');
// submitBtn.addEventListener('click', submitHandler);

function refreshHandler() {

  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'http://100.25.47.63:8081/memes', true);
  
  xhr.onload = function () {
      if(this.status === 200){
        

          let obj = JSON.parse(this.responseText);
          
          let gal = document.getElementById('gal');
          
          var inputs="";
          var i=0;
          for(key in obj)
          {
              if(i===100) {
                break;
              }

              inputs+=`<div class="responsive"> 
                <div class="gallery">
                  <a target="_blank" href="${obj[key].url}">
                    <img src= "${obj[key].url}" onerror="this.onerror=null;this.src='oops1.jpg';">
                  <a>
                  <div class="img-capt">${obj[key].caption}</div>
                  <div class="img-name"> ${obj[key].name}</div>
                </div>
              </div>`;
               

              i++;
          }
          gal.innerHTML = inputs;
      }
      else{
          console.log("Some error occured")
      }
  }

  // send the request
  xhr.send();
  console.log("We are done fetching employees!");
  
}



function submitHandler(that) {
    
    const xhr = new XMLHttpRequest();
    console.log("helo");

    xhr.open('POST', 'http://100.25.47.63:8081/memes', true);
    xhr.getResponseHeader('Content-type', 'application/json');


    xhr.onload = function () {
        if(this.status === 200){
            refreshHandler();
            console.log(this.responseText);
            console.log("no error")
        }
        else{
            console.log("Some error occured");
        }
    }
    console.log(that.imgurl.value)
    body = JSON.stringify({"name":that.fullname.value,"url":that.imgurl.value,"caption":that.caption.value});
   
    xhr.send(body);


}




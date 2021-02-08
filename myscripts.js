/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidebar").style.width = "50%";
    document.getElementById("main").style.marginRight = "50%";
  }
  
  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginRight = "0";
  }


// let submitBtn = document.getElementById('submitBtn');
// submitBtn.addEventListener('click', submitHandler);

function refreshHandler() {

  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);
  
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
                  <a target="_blank" href="download (1).jpg">
                    <img src= "${obj[key].id}" onerror="this.onerror=null;this.src='download.png';">
                  </a>
                  <div class="img-capt">${obj[key].id}</div>
                  <div class="img-name"> ${obj[key].id}</div>
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

    xhr.open('POST', 'https://jsonplaceholder.typicode.com/posts', true);
    xhr.getResponseHeader('Content-type', 'application/json');


    xhr.onload = function () {
        if(this.status === 200){
            //refreshHandler();
            console.log(this.responseText);
        }
        else{
            console.log("Some error occured");
        }
    }
    console.log(that.fullname.value)
    // send the request
    params = `{"name":that.fullname.value,"salary":that.caption.value,"age":that.imgurl.value}`;
   
    xhr.send(params);


}




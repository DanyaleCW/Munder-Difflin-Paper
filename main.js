
//var 

const changeImage = document.getElementById('washi');


  changeImage.addEventListener('mouseover', function() {
      let imgsrc = changeImage.getAttribute('src');
      
      if(imgsrc === 'images/washi.jpg') {

        changeImage.src = "images/washi2.jpeg";

      } else if(imgsrc = "images/washi2.jpeg"){

        changeImage.src = "images/washi.jpg";
      }
    });



  
/*var imgChange = document.getElementById("washi");
var imgUpdate = document.getElementById("washi2");

imgUpdate.addEventListener("click", myFunction);

function myFunction() {
  imgChange.setAtttribute("src", )
};
};*/




  /*x.addEventListener("mouseout", Function());
  let img = document.getElementById("washi");

  function swapImage() {
    if(img.src == "images/washi.jpg") {
      img.src = "images/washi2.jpg";
    } else { img.src = "images/washi.jpg";
  }*/



  /*var x = document.getElementById('first');
  x.addEventListener("mouseover", myFunction);
  x.addEventListener("mouseout", myFunction);



/*function mouseRollOver(MyImage) {
        MyImage.src = "washi2.jpg";
    }
        function mouseOut(MyImage) {
        MyImage.src = "washi.jpg";
    
    }*/

/*function normalImg(x) {
    	x.style.height = "200px";
    	x.style.width = "200px";
    }
    
    function bigImg(x) {
    	x.style.height = "400px";
    	x.style.width = "400px";
    }*/

    





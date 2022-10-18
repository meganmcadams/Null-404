var darkmode = false;
const btn = document.getElementById('darkmode');
const textsize_input = document.getElementById("textsize").value;


btn.addEventListener('click', function onClick(event) {
  // 👇️ change background color

  if(darkmode == true){
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
    darkmode = false;
  } else {
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
    darkmode = true;
  }

});

function returnTextSize(){
  let input = document.getElementById("textsize").value;
  let body_var = document.getElementsByTagName("body")[0]; // https://stackoverflow.com/questions/16460990/change-text-font-size-of-whole-page-content
  body_var.style.fontSize = input;

}

function returnTextSpacing(){
  let input = document.getElementById("textsize").value;
  let body_var = document.getElementsByTagName("body")[0]; // https://stackoverflow.com/questions/16460990/change-text-font-size-of-whole-page-content
  body_var.style.letterSpacing = input;
}
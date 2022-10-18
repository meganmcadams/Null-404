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
  document.getElementById('test').style.fontSize = input;
}

function returnTextSpacing(){
  let input = document.getElementById("textsize").value;
  document.getElementById('test').style.letterSpacing = input;
}
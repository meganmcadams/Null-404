// initial set up ----------------------------------------

console.log("Performing setup.");
var first_time = JSON.parse(localStorage.getItem('first_time'));

if(first_time == null){

  first_time = false;
  var darkmode = false;
  localStorage.setItem('first_time', JSON.stringify(first_time));

} else {

  var darkmode = JSON.parse(localStorage.getItem('darkmode'));
  console.log(darkmode,"is the LOADED setting for darkmode");

}

// initial variable settings ------------------------------

const btn = document.getElementById('darkmode');
//let textsize_input = document.getElementById("textsize").value;
const r = document.querySelector(':root'); // https://www.w3schools.com/css/css3_variables_javascript.asp

// initial accessibility settings --------------------

if(darkmode == true){ // dark mode

  r.style.setProperty('--bg-colour', 'var(--dark-bg)'); // https://www.w3schools.com/css/css3_variables_javascript.asp
  r.style.setProperty('--text-colour','var(--light-bg)');
  r.style.setProperty('--header-bg-colour', 'var(--light-bg)');
  r.style.setProperty('--header-text-colour','var(--dark-bg)');

} else { // light mode

  r.style.setProperty('--bg-colour', 'var(--light-bg)'); // https://www.w3schools.com/css/css3_variables_javascript.asp
  r.style.setProperty('--text-colour','var(--dark-bg)');
  r.style.setProperty('--header-bg-colour', 'var(--dark-bg)');
  r.style.setProperty('--header-text-colour','var(--light-bg)');

}

// functions --------------------------------------------------

btn.addEventListener('click', function onClick(event) {
  // 👇️ change background color

  if(darkmode == true){

    r.style.setProperty('--bg-colour', 'var(--light-bg)'); // https://www.w3schools.com/css/css3_variables_javascript.asp
    r.style.setProperty('--text-colour','var(--dark-bg)');
    r.style.setProperty('--header-bg-colour', 'var(--dark-bg)');
    r.style.setProperty('--header-text-colour','var(--light-bg)');

    darkmode = false;
    localStorage.setItem('darkmode', JSON.stringify(darkmode)); // https://stackoverflow.com/questions/29986657/persist-variables-between-page-loads

  } else {

    r.style.setProperty('--bg-colour', 'var(--dark-bg)'); // https://www.w3schools.com/css/css3_variables_javascript.asp
    r.style.setProperty('--text-colour','var(--light-bg)');
    r.style.setProperty('--header-bg-colour', 'var(--light-bg)');
    r.style.setProperty('--header-text-colour','var(--dark-bg)');

    darkmode = true;
    localStorage.setItem('darkmode', JSON.stringify(darkmode)); // https://stackoverflow.com/questions/29986657/persist-variables-between-page-loads

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
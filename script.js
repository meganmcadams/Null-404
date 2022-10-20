// initial set up ----------------------------------------

var first_time = JSON.parse(localStorage.getItem('first_time'));

if(first_time == null){

  first_time = false;
  var darkmode = false;
  localStorage.setItem('first_time', JSON.stringify(first_time));

  let temp = r.style.getProperty('--text-size');
  localStorage.setItem('text_size', JSON.stringify(temp));

  temp = r.style.getProperty('--text-spacing');
  localStorage.setItem('text_spacing', JSON.stringify(temp));
  

} else {

  var darkmode = JSON.parse(localStorage.getItem('darkmode'));

}

// initial variable settings ------------------------------

const btn_darkmode = document.getElementById('darkmode');
const btn_textspacing_up = document.getElementById('textspacing_up');
const btn_textspacing_down = document.getElementById('textspacing_down');
const btn_textsize_up = document.getElementById('textsize_up');
const btn_textsize_down = document.getElementById('textsize_down');
//let textsize_input = document.getElementById("textsize").value;
const r = document.querySelector(':root'); // https://www.w3schools.com/css/css3_variables_javascript.asp

// initial accessibility settings --------------------

let text_size = JSON.parse(localStorage.getItem('text_size'));
r.style.setProperty('--text-size',text_size);

let text_spacing = JSON.parse(localStorage.getItem('text_spacing'));
r.style.setProperty('--text-spacing',text_spacing);

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

btn_darkmode.addEventListener('click', function onClick(event) {
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

function setTextSize(){
  
  let input = document.getElementById("textsize").value;
  r.style.setProperty('--text-size',input);
  localStorage.setItem('text_size', JSON.stringify(input)); // https://stackoverflow.com/questions/29986657/persist-variables-between-page-loads

}

btn_textsize_up.addEventListener('click', function onClick(event) {

  text_size += 0.5;
  r.style.setProperty('--text-size',text_size);
  localStorage.setItem('text_size', JSON.stringify(text_size)); // https://stackoverflow.com/questions/29986657/persist-variables-between-page-loads

});

btn_textsize_down.addEventListener('click', function onClick(event) {

  text_size -= 0.5;
  r.style.setProperty('--text-size',text_size);
  localStorage.setItem('text_size', JSON.stringify(text_size)); // https://stackoverflow.com/questions/29986657/persist-variables-between-page-loads

});

function setTextSpacing(){
  let input = document.getElementById("textspacing").value;
  r.style.setProperty('--text-spacing',input);
  localStorage.setItem('text_spacing', JSON.stringify(input)); // https://stackoverflow.com/questions/29986657/persist-variables-between-page-loads

}

btn_textspacing_up.addEventListener('click', function onClick(event) {

  text_spacing += 0.5;
  r.style.setProperty('--text-spacing',text_spacing);
  localStorage.setItem('text_spacing', JSON.stringify(text_spacing)); // https://stackoverflow.com/questions/29986657/persist-variables-between-page-loads

});

btn_textspacing_down.addEventListener('click', function onClick(event) {

  text_spacing -= 0.5;
  r.style.setProperty('--text-spacing',text_spacing);
  localStorage.setItem('text_spacing', JSON.stringify(text_spacing)); // https://stackoverflow.com/questions/29986657/persist-variables-between-page-loads

});
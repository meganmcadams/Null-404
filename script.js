// initial set up ----------------------------------------

const r = document.querySelector(':root'); // https://www.w3schools.com/css/css3_variables_javascript.asp
const cs = getComputedStyle(r); // https://www.tutorialspoint.com/get-and-set-css-variables-with-javascript
let first_time = JSON.parse(localStorage.getItem('first_time'));

if(first_time == null){ // first time setup

  first_time = false;
  localStorage.setItem('first_time', JSON.stringify(first_time));
  localStorage.setItem('dark_mode', false);
  localStorage.setItem('text_size', JSON.stringify(cs.getPropertyValue('--text-size')));
  localStorage.setItem('text_spacing', JSON.stringify(cs.getPropertyValue('--text-spacing')));
  
} 

// initial variable settings ------------------------------

const btn_dark_mode = document.getElementById('dark_mode');
const btn_textspacing_up = document.getElementById('textspacing_up');
const btn_textspacing_down = document.getElementById('textspacing_down');
const btn_textsize_up = document.getElementById('textsize_up');
const btn_textsize_down = document.getElementById('textsize_down');

// initial accessibility settings --------------------

let text_size = JSON.parse(localStorage.getItem('text_size'));
r.style.setProperty('--text-size',text_size);

let text_spacing = JSON.parse(localStorage.getItem('text_spacing'));
r.style.setProperty('--text-spacing',text_spacing);

let dark_mode = JSON.parse(localStorage.getItem('dark_mode'));

updateDarkMode(false);

// functions --------------------------------------------------

btn_dark_mode.addEventListener('click', function onClick(event) {
  
  updateDarkMode(true);

});

function updateDarkMode(toggle){

  if (toggle == true) { // if should toggle
    dark_mode = !dark_mode; // toggle
  }

  if(dark_mode == true){ // dark mode

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

  localStorage.setItem('dark_mode', JSON.stringify(dark_mode)); // https://stackoverflow.com/questions/29986657/persist-variables-between-page-loads

}

function setTextSize(){
  
  updateTextSize(1, false, false);
  
}

btn_textsize_up.addEventListener('click', function onClick(event) {

  updateTextSize(-1, true, false);

});

btn_textsize_down.addEventListener('click', function onClick(event) {

  updateTextSize(-1, false, true);

});

btn_textspacing_up.addEventListener('click', function onClick(event) {

  updateTextSpacing(-1, true, false);

});

btn_textspacing_down.addEventListener('click', function onClick(event) {

  updateTextSpacing(-1, false, true);
  
});

function updateTextSize(num, up, down){

  text_size = text_size.replace("px","");

  if(num != -1) { // if given a number
 
    text_size = document.getElementById('textsize').value;
  
  } else if(up == true) {

    text_size = Number(text_spacing) + 0.5;

  } else {

    text_size = Number(text_spacing) - 0.5;

  }

  text_size = text_size.toString() + "px";
  console.log("Setting",text_size);
  r.style.setProperty('--text-size',text_size);
  localStorage.setItem('text_size', JSON.stringify(text_size)); // https://stackoverflow.com/questions/29986657/persist-variables-between-page-loads


}

function updateTextSpacing(num, up, down){

  text_spacing = text_spacing.replace("px","");

  if(num != -1) { // if given a number
 
    text_spacing = document.getElementById('textspacing').value;
  
  } else if(up == true) {

    text_spacing = Number(text_spacing) + 0.5;

  } else {

    text_spacing = Number(text_spacing) - 0.5;

  }

  text_spacing = text_spacing.toString() + "px";
  console.log("Setting",text_spacing);
  r.style.setProperty('--text-spacing',text_spacing);
  localStorage.setItem('text_spacing', JSON.stringify(text_spacing)); // https://stackoverflow.com/questions/29986657/persist-variables-between-page-loads

}
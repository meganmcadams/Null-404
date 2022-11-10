// initial set up ----------------------------------------

const r = document.querySelector(':root'); // https://www.w3schools.com/css/css3_variables_javascript.asp
const cs = getComputedStyle(r); // https://www.tutorialspoint.com/get-and-set-css-variables-with-javascript

//localStorage.setItem('first_time', null);

if(JSON.parse(localStorage.getItem('first_time')) == null){ // first time setup

  localStorage.setItem('first_time', JSON.stringify(false));
  localStorage.setItem('dark_mode', false);
  localStorage.setItem('text_size', JSON.stringify(cs.getPropertyValue('--text-size')));
  localStorage.setItem('text_spacing', JSON.stringify(cs.getPropertyValue('--text-spacing')));
  
}

// initial variable settings ------------------------------
const btn_close_sidebar = document.getElementById('close_sidebar');

const sidebar = document.getElementById('sidebar');
const sidebar_btn = document.getElementById('sidebar_btn');
const sidebar_img = document.getElementById('sidebar_img');

const ruler = document.getElementById('ruler');
const title = document.getElementById('title');

// initial accessibility settings --------------------

let text_size = JSON.parse(localStorage.getItem('text_size'));
r.style.setProperty('--text-size',text_size);

let text_spacing = JSON.parse(localStorage.getItem('text_spacing'));
r.style.setProperty('--text-spacing',text_spacing);

let dark_mode = JSON.parse(localStorage.getItem('dark_mode'));

let sidebar_out = false;

updateDarkMode(false);

// initialize variables as needed --------------------------

// title left value - this does nothing right now because i can't figure it out -meg
var title_text = title.innerHTML;
ruler.innerHTML = title_text;
ruler.offsetWidth;

// functions --------------------------------------------------

function toggleSidebar(){

  sidebar_out = !sidebar_out; // toggle

  if (sidebar_out == true){

    sidebar.style.display = "block";
    sidebar_btn.style.marginRight = "1rem";
    sidebar_btn.style.transform = "rotate(180deg)";
    sidebar_img.style.marginRight = "2rem";

  } else {

    sidebar.style.display = "none";
    sidebar_btn.style.marginRight = "-24rem";
    sidebar_btn.style.transform = "rotate(0deg)";
    sidebar_img.style.marginRight = "-23rem";

  }

}

function updateDarkMode(toggle) {

  if (toggle == true) { // if should toggle
    dark_mode = !dark_mode; // toggle
  }

  if(dark_mode == true){ // dark mode

    r.style.setProperty('--bg-colour', 'var(--dark-bg)'); // https://www.w3schools.com/css/css3_variables_javascript.asp
    r.style.setProperty('--bg-colour-opposite', 'var(--light-bg)');
    r.style.setProperty('--text-colour','var(--light-bg)');
    r.style.setProperty('--text-colour-opposite','var(--dark-bg)');
    r.style.setProperty('--header-bg-colour', 'var(--light-bg)');
    r.style.setProperty('--header-text-colour','var(--dark-bg)');
    r.style.setProperty('--icon-filter', 'brightness(120%)');
  
  } else { // light mode
  
    r.style.setProperty('--bg-colour', 'var(--light-bg)'); // https://www.w3schools.com/css/css3_variables_javascript.asp
    r.style.setProperty('--bg-colour-opposite', 'var(--dark-bg)');
    r.style.setProperty('--text-colour','var(--dark-bg)');
    r.style.setProperty('--text-colour-opposite','var(--light-bg)');
    r.style.setProperty('--header-bg-colour', 'var(--dark-bg)');
    r.style.setProperty('--header-text-colour','var(--light-bg)');
    r.style.setProperty('--icon-filter', 'brightness(0%)');
  
  }

  localStorage.setItem('dark_mode', JSON.stringify(dark_mode)); // https://stackoverflow.com/questions/29986657/persist-variables-between-page-loads

}

function setTextSize(){
  
  updateTextSize(1, false, false);

}

function updateTextSize(num, up, down){

  text_size = text_size.replace("px","");

  if(num != -1) { // if given a number
 
    text_size = document.getElementById('textsize').value;
  
  } else if(up == true) {

    text_size = Number(text_size) + 0.5;

  } else {

    text_size = Number(text_size) - 0.5;

  }

  text_size = text_size.toString() + "px";
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

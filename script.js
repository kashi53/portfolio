let menuVisible = false;
//Function hide show menu//
function showHideMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false
    }
    else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true
    }
}

function select(){
    //hide menu when select a option
    document.getElementById("nav").classList="";
    menuVisible = false;
}
//function apply the skill animation

function effectSkill(){
    var skills = document.getElementById("skills");
    var distance_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distance_skills >= 300){
        let skill = document.getElementsByClassName("progreso");
        skill[0].classList.add("javascript");
        skill[1].classList.add("htmlcss");
        skill[2].classList.add("photoshop");
    }
}

//detect scrolling
window.onscroll = function(){
    effectSkill();
}


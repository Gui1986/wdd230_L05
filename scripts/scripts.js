//Current year
const y = new Date().getFullYear(); 
document.getElementById("currentyear").innerHTML = y;

//Last updated 
document.getElementById('lastupdate').textContent = document.lastModified;

//Todays date
document.getElementById('date').innerHTML = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(new Date());

//Hamburger button
const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('nav')

hambutton.addEventListener('click', () => 
{mainnav.classList.toggle('responsive')}, false);

window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};

//hamburger to x
function myFunction(x) {
    x.classList.toggle("change");
}

//weather
!function(d,s,id){
    var js,fjs=d.getElementsByTagName(s)[0];
    if(!d.getElementById(id)){js=d.createElement(s);
        js.id=id;js.src='https://www.accuweather.com/en/br/s%C3%A3o-paulo/45881/weather-forecast/45881';
        fjs.parentNode.insertBefore(js,fjs);}
}
(document,'script','weatherwidget-io-js');


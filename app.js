$(document).ready(function(){

$('button').click(function(){
const name =$('#nameid').val();
const urlAPI='https://gateway.marvel.com/v1/public/characters?name='+name+'&ts=1&apikey=f57542d6c6deb6c8348bf5249457a113&hash=2cc155e02092dcc73ca18aca86f7fea6';
const container= document.querySelector('.imgdiv');
const descr= document.querySelector('.description');

let containerhtml='';

if(name==""){

    alert('Debe ingresar el personaje');
}
else{

    fetch(urlAPI).then(res=>res.json()).then((json)=>{

        for(const hero of json.data.results){
 let urlhero=hero.urls[0].url;
   


    $('.imgchange').attr('src',`${hero.thumbnail.path}.${hero.thumbnail.extension}`);
    $('body').css('backgroundImage',`url(${hero.thumbnail.path}.${hero.thumbnail.extension})`);
   
    document.getElementById("title").innerHTML = `${hero.name}`;
   descr.innerHTML=`${hero.description}`;
   document.getElementById("nameid").value = "";
        }
     
    });


}



});

});
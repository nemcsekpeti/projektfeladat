window.addEventListener('load', init)

function $(elem) 
{
  return document.querySelectorAll(elem)
}

function ID(elem) 
{
  return document.getElementById(elem);
}

function CLASS(elem) 
{
  return document.getElementsByClassName(elem);
}

var aktualiskepIndex = 0;

function init() 
{
    fetch("galeria.json")
      .then((response) => response.json())
      .then((data) => 
    {
        megjelenit(data.galeria)
    })
    $("#bal")[0].addEventListener('click', bal)
    $("#jobb")[0].addEventListener('click', jobb)
}

function megjelenit(galeria)
{
    var kepek = '';
    for (const key in galeria)
    {
    kepek += '<img src="'+galeria[key]['mappa']+galeria[key]['file']+'">';
    }
CLASS('galeria')[0].innerHTML = kepek;
}

function kattintas(event)
{
    console.log(event.target.id);
    aktualiskepIndex = event.target.id;
    console.log(galeria[aktualiskepIndex])
    megjelenit();
}

function bal()
{
    aktualiskepIndex--;
    if(aktualiskepIndex<0)
    {
        aktualiskepIndex=galeria.length-1;
    }
    megjelenit();
}

function jobb()
{
    aktualiskepIndex++;
    if(aktualiskepIndex>galeria.length-1)
    {
        aktualiskepIndex=0;
    }
    megjelenit();
}
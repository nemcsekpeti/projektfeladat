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
        fokep(data.galeria)
    })
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

function fokep(galeria)
{
  var kep = '';
  for (let i = 0; i < 1; i++)
  {
    kep += '<img src="'+galeria[0]['mappa']+galeria[0]['file']+'">'; 
  }
  CLASS('nagykep')[0].innerHTML = kep;
}

function kattintas(event)
{
    console.log(event.target.id);
    aktualiskepIndex = event.target.id;
    console.log(kepek[aktualiskepIndex])
    megjelenit();
}
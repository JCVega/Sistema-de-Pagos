var SistemaPagos = function ()
{
  yaCargoDatos=new varInStorage("yaCargoDatos",false);
  return {
    inicializar:function ()
    {
      console.log("inicializando");
      var sectionActivo;
      console.log(yaCargoDatos.value);
      if(yaCargoDatos.value==false)
        {
          sectionActivo=document.getElementById("primeraVisita");
          yaCargoDatos.value=true;
        }
      else
        {
          sectionActivo=document.getElementById("home");
        }
      sectionActivo.style.display="block";
       console.log(yaCargoDatos.value);
      console.log("inizializado");
    }
  }
}
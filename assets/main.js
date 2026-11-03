(function(){
  var nav=document.getElementById('nav'),btn=document.getElementById('menuBtn');
  window.addEventListener('scroll',function(){nav.classList.toggle('scrolled',window.scrollY>8)},{passive:true});
  btn.addEventListener('click',function(){var o=nav.classList.toggle('open');btn.setAttribute('aria-expanded',o)});
  document.querySelectorAll('#menu a').forEach(function(a){a.addEventListener('click',function(){nav.classList.remove('open');btn.setAttribute('aria-expanded','false')})});

  var s=document.getElementById('q-stage');
  if(!s)return;
  var R={
    'operar':['Programas de mentoría empresarial','Operamos el programa completo y te reportamos el avance de cada empresa atendida.','servicios.html#mentorias','Ver el servicio'],
    'disenar':['Diseño de modelos y rutas formativas','Creamos la metodología, el currículo y el material de tu programa, listos para transferir.','servicios.html#modelos','Ver el servicio'],
    'digital':['Plataformas y herramientas digitales','Plataformas de formación, diagnósticos en línea y tableros de seguimiento a la medida.','servicios.html#digital','Ver el servicio'],
    'emprendedor':['Programas abiertos','Te contamos qué convocatorias gratuitas están abiertas y cómo inscribirte.','emprendedores.html','Ver convocatorias']
  };
  s.addEventListener('change',function(){
    var r=R[s.value];
    document.getElementById('q-title').textContent=r[0];
    document.getElementById('q-text').textContent=r[1];
    var l=document.getElementById('q-link');l.href=r[2];l.textContent=r[3];
  });
})();

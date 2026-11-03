(function(){
  var nav=document.getElementById('nav'),btn=document.getElementById('menuBtn');
  window.addEventListener('scroll',function(){nav.classList.toggle('scrolled',window.scrollY>8)},{passive:true});
  btn.addEventListener('click',function(){var o=nav.classList.toggle('open');btn.setAttribute('aria-expanded',o)});
  document.querySelectorAll('#menu a').forEach(function(a){a.addEventListener('click',function(){nav.classList.remove('open');btn.setAttribute('aria-expanded','false')})});

  var s=document.getElementById('q-stage');
  if(!s)return;
  var R={
    'idea':['Emprendedor potencial','Empieza con los webinars y una mentoría de ideación para descubrir qué negocio va contigo.','programas.html#potencial','Ver el programa'],
    'tengo-idea':['Ideación de negocio','En 4 semanas aterrizas tu idea, defines a tu cliente y diseñas tu primer prototipo.','programas.html#novato','Ver el programa'],
    'negocio':['Experimentación comercial','Pruebas tu producto con clientes reales, ajustas tu oferta y construyes una marca que vende.','programas.html#novato','Ver el programa'],
    'entidad':['Servicios para entidades','Diseñamos y operamos programas a la medida de tu población, con talleres y proyectos especiales.','entidades.html','Ver servicios']
  };
  s.addEventListener('change',function(){
    var r=R[s.value];
    document.getElementById('q-title').textContent=r[0];
    document.getElementById('q-text').textContent=r[1];
    var l=document.getElementById('q-link');l.href=r[2];l.textContent=r[3];
  });
})();

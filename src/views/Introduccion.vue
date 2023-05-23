<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    figure
      img(data-aos="fade-up" src="@/assets/curso/introduccion/1.svg")

    p.mt-5(data-aos="fade-up") El desarrollo de la electrónica ha tenido un gran impacto en la evolución de la civilización moderna, pues ha sido marcado ampliamente por el descubrimiento de los semiconductores, los cuales son la base de la tecnología moderna. Por tal razón su estudio y comprensión se han hecho fundamentales para cualquier profesional asociado al mantenimiento, desarrollo o uso final de la tecnología en general.

    .cajon.color-primario.p-5.mt-5.caja_flotante_azul
      p(data-aos="fade-up") <strong>En este componente formativo se aborda el estudio de los principales semiconductores y sus aplicaciones dentro de los circuitos electrónicos, los cuales forman el hardware de cualquier aparato electrónico. También se describirán sus características y el principio de su funcionamiento.</strong>

    p.mt-5(data-aos="fade-up") Para la elaboración de este componente, se abordaron varios autores conocidos en <strong>dispositivos electrónicos</strong>, de quienes se han citado y referenciado conceptos y ejemplos para los fines educativos de esta materia, en el entendido de que el conocimiento es social y, por lo tanto, es para ser usado por quienes necesitan adquirirlo. Se espera que este documento sea útil para todos, aprendices y lectores en general, que estén interesados en acercarse a asuntos básicos del desarrollo de <strong>productos electrónicos.</strong>

    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>

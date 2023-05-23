<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p El mapa conceptual está estructurado en torno al tema de dispositivos electrónicos. En la parte central del mapa se encuentra el concepto general de dispositivos electrónicos, del cual se desprenden ramas que representan los diferentes temas relacionados con el mismo. En la primera rama, se encuentra la naturaleza de los semiconductores. En la segunda rama, se desarrolla el tema de los diodos, incluyendo el diodo ideal, circuitos con diodos y diodos de propósito especial. En la tercera rama, se presenta el tema de los transistores, incluyendo el transistor BJT y el transistor MOSFET. En la cuarta rama, se encuentra el tema de los tiristores. Por último, en la quinta rama, se aborda el software de simulación. En cada rama se incluyen los conceptos técnicos relevantes de manera breve y clara, lo que permite tener una visión general de los diferentes temas relacionados con dispositivos electrónicos.

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.png", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>

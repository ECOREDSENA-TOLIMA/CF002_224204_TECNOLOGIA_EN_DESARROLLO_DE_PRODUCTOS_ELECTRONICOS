<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p En el componente CF02 "Dispositivos electrónicos" se describe la naturaleza de los semiconductores, los cuales son materiales que tienen una conductividad eléctrica intermedia entre los conductores y los aislantes. Los semiconductores son ampliamente utilizados en la fabricación de dispositivos electrónicos como diodos, transistores y tiristores, que permiten controlar el flujo de corriente eléctrica. También se menciona el uso de <em>software</em> de simulación para diseñar y probar circuitos electrónicos antes de su fabricación.

    .row.justify-content-center
      .col-lg-12.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="alt")
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

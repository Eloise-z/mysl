<!--
*Author: Eloise
*Date: 2021-06-14 14:46
-->
<template>
  <main-top/>
  <main-header/>
  <router-view/>
  <footer-main/>
</template>

<script>
import MainTop from './MainTop'
import MainHeader from './MainHeader'
import FooterMain from './FooterMain'
export default {
  name: 'Common',
  components: { FooterMain, MainHeader, MainTop }
}
</script>

<style scoped>

</style>

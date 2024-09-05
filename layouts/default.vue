<template>
    <div>
        
        <TheNav />
         <slot />
        <Thefooter />

    </div>
</template>

<script>
import TheNav from '~/components/TheNav.vue';
import TheFooter from '~/components/Thefooter.vue';

export default {
  components: {
    TheNav,
    TheFooter
  }
}

</script>

<style >
html {
  scroll-behavior: smooth;
}


</style>
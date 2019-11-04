<template>
    <div id="wrapper" class="d-flex flex-column">
        <header class="header-global">
            <starter-header></starter-header>
        </header>
        <main class="flex-fill position-relative">
           <nuxt />
        </main>
    </div>
</template>

<script>
import StarterHeader from "~/components/zack-proser/AppHeader";

export default {
  components: {
    StarterHeader
  }
};
</script>
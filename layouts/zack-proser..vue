<template>
    <div id="wrapper" class="d-flex flex-column">
        <header class="header-global">
            <app-header></app-header>
        </header>
        <main class="flex-fill position-relative">
           <nuxt />
        </main>
    </div>
</template>

<script>
import AppHeader from "~/components/zack-proser/AppHeader";

export default {
  components: {
    AppHeader
  }
};
</script>

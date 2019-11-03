<template>
 <div class="card card-lift--hover shadow border-0 mt-3 mb-3">
  <div class="card-body py-5 text-center">
      <img :src="imgSrc" :alt="imgAlt" class="rounded-circle">
      <h6 class="display-4 mt-4 text-warning text-uppercase">
          {{ name }}
      </h6>
      <h6 class="display-4 text-warning">
          {{ title }}
      </h6>
      <p class="lead m-4">
        <span style="color: Tomato">
          <i class="fa fa-quote-left mr-2"></i>
        </span>
          {{ quote }}
        <span style="color: Tomato;">
          <i class="fa fa-quote-right ml-2"></i>
        </span>
      </p>
  </div>
</div>
</template>

<script>

export default {
  name: 'testimonial-static',
  props: ['imgSrc', 'imgAlt', 'quote', 'name', 'title']
}

</script>
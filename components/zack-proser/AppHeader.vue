<template>
    <header class="header-global">
    <!-- EmailOctopus Hellobar - fired after user has been on site for more than 10 seconds -->
    <script async src="https://eomail6.com/form/f172a6e6-df30-11ed-b645-f7c71699d4ec.js" data-form="f172a6e6-df30-11ed-b645-f7c71699d4ec"></script>
        <base-nav class="navbar-main" transparent type="" effect="light" expand>
            <nuxt-link slot="brand" class="navbar-brand mr-lg-5" to="/">
                <h3 class="name-plate">Zack Proser</h3>
            </nuxt-link>

            <div class="row" slot="content-header" slot-scope="{closeMenu}">
                <div class="col-6 collapse-brand">
                    <nuxt-link to="/">
                        <h3 class="nav-modal-name-plate">Zack Proser</h3>
                    </nuxt-link>
                </div>
                <div class="col-6 collapse-close">
                    <close-button @click="closeMenu"></close-button>
                </div>
            </div>

            <ul class="navbar-nav align-items-lg-center ml-lg-auto">
                <li class="nav-item">
                    <nuxt-link to="/about"
			class="nav-link nav-link-icon">
                        <i class="fas fa-book d-lg-none"></i>
                        <span class="nav-link-inner--text d-lg-none">About me</span>
			<h3 class="d-xs-none d-sm-none d-md-none d-lg-block d-xl-block text-white">About me</h3>
                    </nuxt-link>
                </li>
		<li class="nav-item">
                    <nuxt-link to="/blog"
			class="nav-link nav-link-icon">
                        <i class="far fa-newspaper d-lg-none"></i>
                        <span class="nav-link-inner--text d-lg-none">Blog</span>
			<h3 class="d-xs-none d-sm-none d-md-none d-lg-block d-xl-block text-white">Blog</h3>
                    </nuxt-link>
                </li>
		<li class="nav-item">
                    <nuxt-link to="/testimonials"
			class="nav-link nav-link-icon">
                        <i class="far fa-comments d-lg-none"></i>
                        <span class="nav-link-inner--text d-lg-none">Testimonials</span>
			<h3 class="d-xs-none d-sm-none d-md-none d-lg-block d-xl-block text-white">Testimonials</h3>
                    </nuxt-link>
                </li>
		           <li class="nav-item">
                    <a class="nav-link nav-link-icon" href="https://github.com/zackproser"
                       target="_blank" rel="noopener" data-toggle="tooltip" title="Find me on Github">
                        <i class="fab fa-github"></i>
                        <span class="nav-link-inner--text d-lg-none">Github</span>
                    </a>
                </li>
             </ul>
        </base-nav>
    </header>
</template>
<script>
import BaseNav from "~/components/argon/BaseNav";
import BaseDropdown from "~/components/argon/BaseDropdown";
import CloseButton from "~/components/argon/CloseButton";

export default {
  components: {
    BaseNav,
    CloseButton,
    BaseDropdown
  }
};
</script>
<style>
.name-plate {
    color: #fff;
}
.nav-modal-name-plate {
    color: blue;
}

a.portfolio-menu {
    font-size: 24px;
    background-color: #388e8c;
}

a.nav-link.nav-link-icon {
    max-height: 48px;
}

a.nav-link.nav-link-icon > i {
    font-size: 32px;
}
</style>

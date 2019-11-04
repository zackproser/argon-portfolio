<template>
    <header class="header-global">
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

            <ul class="navbar-nav navbar-nav-hover align-items-lg-center">
                <base-dropdown class="nav-item" menu-classes="dropdown-menu-xl">
                    <a slot="title" href="#" class="nav-link" data-toggle="dropdown" role="button">
                        <i class="ni ni-ui-04 d-lg-none"></i>
                        <span class="nav-link-inner--text font-weight-800">My Work</span>
                    </a>
                    <div class="dropdown-menu-inner">
                        <nuxt-link to="/software"
                           class="media d-flex align-items-center">
                            <div class="icon icon-shape bg-gradient-primary rounded-circle text-white">
                                <i class="ni ni-laptop"></i>
                            </div>
                            <div class="media-body ml-3">
                                <h6 class="heading text-primary mb-md-1">Software</h6>
                                <p class="description d-none d-md-inline-block mb-0">Take a tour of my recent apps</p>
                            </div>
                        </nuxt-link>
                        <nuxt-link to="/testimonials"
                           class="media d-flex align-items-center">
                            <div class="icon icon-shape bg-gradient-warning rounded-circle text-white">
                                <i class="ni ni-circle-08"></i>
                            </div>
                            <div class="media-body ml-2">
                                <h5 class="heading text-warning mb-md-1">Testimonials</h5>
                                <p class="description d-none d-md-inline-block mb-0">Hear what people have to say about working with me</p>
                            </div>
                        </nuxt-link>
                        <nuxt-link to="/blog"
                           class="media d-flex align-items-center">
                            <div class="icon icon-shape bg-gradient-success rounded-circle text-white">
                                <i class="ni ni-book-bookmark"></i>
                            </div>
                            <div class="media-body ml-2">
                                <h5 class="heading text-success mb-md-1">Blog</h5>
                                <p class="description d-none d-md-inline-block mb-0">Read my latest posts</p>
                            </div>
                        </nuxt-link>
                    </div>
                </base-dropdown>
            </ul>
            <ul class="navbar-nav align-items-lg-center ml-lg-auto">
                <li class="nav-item">
                    <a class="nav-link nav-link-icon" href="https://www.instagram.com/zackproser"
                       target="_blank" rel="noopener" data-toggle="tooltip" title="View my artwork">
                        <i class="fab fa-instagram"></i>
                        <span class="nav-link-inner--text d-lg-none">Instagram</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link nav-link-icon" href="https://twitter.com/zackproser" target="_blank" rel="noopener"
                       data-toggle="tooltip" title="Follow me on Twitter">
                        <i class="fab fa-twitter-square"></i>
                        <span class="nav-link-inner--text d-lg-none">Twitter</span>
                    </a>
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
</style>

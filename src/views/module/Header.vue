<template>
<div>
        <header class="main-header main-header--one  clearfix">
            <div class="main-header--one__top clearfix">
                <div class="container">
                    <div class="main-header--one__top-inner clearfix">
                        <div class="main-header--one__top-left">
                            <div class="main-header--one__top-logo">
                                <a href="index.html"><img src="static/picture/logo-1.png" alt=""/></a>
                            </div>
                        </div>

                        <div class="main-header--one__top-right clearfix">
                            <ul class="main-header--one__top-social-link list-unstyled clearfix">
                                <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                <li><a href="#"><i class="fab fa-facebook"></i></a></li>
                                <li><a href="#"><i class="fab fa-pinterest-p"></i></a></li>
                                <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                            </ul>

                            <div class="main-header--one__top-contact-info clearfix">
                                <ul class="main-header--one__top-contact-info-list list-unstyled">
                                    <li class="main-header--one__top-contact-info-list-item">
                                        <div class="icon">
                                            <span class="icon-phone-call-1"></span>
                                        </div>
                                        <div class="text">
                                            <h6>Call Agent</h6>
                                            <p><a href="tel:123456789">92 888 666 0000</a></p>
                                        </div>
                                    </li>
                                    <li class="main-header--one__top-contact-info-list-item">
                                        <div class="icon">
                                            <span class="icon-message"></span>
                                        </div>
                                        <div class="text">
                                            <h6>Call Agent</h6>
                                            <p><a href="mailto:info@templatepath.com">needhelp@company.com</a></p>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </div>


            <div class="main-header-one__bottom clearfix">
                <div class="container">
                    <div class="main-header-one__bottom-inner clearfix">
                        <nav class="main-menu main-menu--1">
                            <div class="main-menu__inner">
                                <a href="#" class="mobile-nav__toggler"><i class="fa fa-bars"></i></a>

                                <div class="left">
                                    <ul class="main-menu__list">
                                        
                                        <li :index="item.id" v-for="item in this.menuMassage" :key="item.id" v-bind:class="{'dropdown':item.secondMenus}">
                                            <a :href=item.link>{{item.name}}</a>
                                            <ul>
                                                <li :index="item2.id" v-for="item2 in item.secondMenus" :key="item2.id">
                                                    <a :href=item2.link>{{item2.name}}</a>
                                                </li>
                                            </ul>
                                        </li>

                                    </ul>
                                </div>

                                <div class="right">
                                    <div class="main-menu__right">
                                        <div class="main-menu__right-login-register">
                                            <ul class="list-unstyled">
                                                <li><a href="#">Login</a></li>
                                                <li><a href="#">Register</a></li>
                                            </ul>
                                        </div>
                                        <div class="main-menu__right-cart-search">
                                            <div class="main-menu__right-cart-box">
                                                <a href="#"><span class="icon-shopping-cart"></span></a>
                                            </div>
                                            <div class="main-menu__right-search-box">
                                                <a href="#" class="thm-btn search-toggler">Search</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </nav>

                    </div>
                </div>
            </div>

        </header>


        <div class="stricky-header stricked-menu main-menu">
            <div class="sticky-header__content">

            </div><!-- /.sticky-header__content -->
        </div><!-- /.stricky-header -->


</div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      menuMassage: [],
      schedule: ""
    }
  },
  created () {
    this.getMassage();
  },
  methods: {
    async getMassage () {
      const response = await this.$http.get('/get_all_first_menu');
      if (response.status !== 200 || response.data === "") return this.$message.error('获取数据失败');
      this.menuMassage = response.data;
      console.log(response.data);
    }
  }
}
</script>

<style scoped>

</style>

<template>
<div>
    <!-- /.preloader -->
    <div class="page-wrapper">
        <app-header></app-header>

    <!--Page Header Start-->
    <section class="page-header clearfix" style="background-image: url(static/images/page-header-bg.jpg);">
        <div class="container">
            <div class="row">
                <div class="col-xl-12">
                    <div class="page-header__wrapper clearfix">
                        <div class="page-header__title">
                            <h2>Courses</h2>
                        </div>
                        <div class="page-header__menu">
                            <ul class="page-header__menu-list list-unstyled clearfix">
                                <li><a href="index.html">Home</a></li>
                                <li class="active">Courses</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
    <!--Page Header End-->



    <!--Courses One Start-->
    <section class="courses-one courses-one--courses">
        <div class="container">
            <div class="section-title text-center">
                <span class="section-title__tagline">Checkout New List</span>
                <h2 class="section-title__title">Explore Courses</h2>
            </div>

            <div class="row">
                <!--Start case-studies-one Top-->
                <div class="courses-one--courses__top">
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                        <div class="courses-one--courses__menu-box">
                            <ul class="project-filter clearfix post-filter has-dynamic-filters-counter list-unstyled">
                                <li data-filter=".filter-item" class="active"><span class="filter-text">All</span></li>
                                <li data-filter=".featured"><span class="filter-text">Featured</span></li>
                                <li data-filter=".business"><span class="filter-text">Business</span></li>
                                <li data-filter=".photography"><span class="filter-text">Photography</span></li>
                                <li data-filter=".development"><span class="filter-text">Development</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <!--End case-studies-one Top-->
            </div>


            <div class="row filter-layout masonary-layout">
                <!--Start Single Courses One-->
                <div class="col-xl-3 col-lg-6 col-md-6 filter-item development business">
                    <div class="courses-one__single wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1000ms">
                        <div class="courses-one__single-img">
                            <img src="static/picture/courses-v1-img1.jpg" alt=""/>
                            <div class="overlay-text">
                                <p>Featured</p>
                            </div>
                        </div>
                        <div class="courses-one__single-content">
                            <div class="courses-one__single-content-overlay-img">
                                <img src="static/picture/courses-v1-overlay-img1.png" alt=""/>
                            </div>
                            <h6 class="courses-one__single-content-name">Kevin Martin</h6>
                            <h4 class="courses-one__single-content-title"><a href="course-details.html">Become a React Developer</a></h4>
                            <div class="courses-one__single-content-review-box">
                                <ul class="list-unstyled">
                                    <li><i class="fa fa-star"></i></li>
                                    <li><i class="fa fa-star"></i></li>
                                    <li><i class="fa fa-star"></i></li>
                                    <li><i class="fa fa-star"></i></li>
                                    <li><i class="fa fa-star"></i></li>
                                </ul>
                                <div class="rateing-box">
                                    <span>(4)</span>
                                </div>
                            </div>
                            <p class="courses-one__single-content-price">$30.00</p>
                            <ul class="courses-one__single-content-courses-info list-unstyled">
                                <li>2 Lessons</li>
                                <li>10 Hours</li>
                                <li>Beginner</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <!--End Single Courses One-->

                <!--Start Single Courses One-->
                <div class="col-xl-3 col-lg-6 col-md-6 filter-item development business featured">
                    <div class="courses-one__single wow fadeInLeft" data-wow-delay="100ms" data-wow-duration="1000ms">
                        <div class="courses-one__single-img">
                            <img src="static/picture/courses-v1-img2.jpg" alt=""/>
                            <div class="overlay-text">
                                <p>free</p>
                            </div>
                        </div>
                        <div class="courses-one__single-content">
                            <div class="courses-one__single-content-overlay-img">
                                <img src="static/picture/courses-v1-overlay-img2.png" alt=""/>
                            </div>
                            <h6 class="courses-one__single-content-name">Christine Eve</h6>
                            <h4 class="courses-one__single-content-title"><a href="course-details.html">Become a React Developer</a></h4>
                            <div class="courses-one__single-content-review-box">
                                <ul class="list-unstyled">
                                    <li><i class="fa fa-star"></i></li>
                                    <li><i class="fa fa-star"></i></li>
                                    <li><i class="fa fa-star"></i></li>
                                    <li><i class="fa fa-star"></i></li>
                                    <li><i class="fa fa-star"></i></li>
                                </ul>
                                <div class="rateing-box">
                                    <span>(4)</span>
                                </div>
                            </div>
                            <p class="courses-one__single-content-price">$30.00</p>
                            <ul class="courses-one__single-content-courses-info list-unstyled">
                                <li>2 Lessons</li>
                                <li>10 Hours</li>
                                <li>Beginner</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <!--End Single Courses One-->

                <!--Start Single Courses One-->
                <div class="col-xl-3 col-lg-6 col-md-6 filter-item photography filter-item development">
                    <div class="courses-one__single wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1000ms">
                        <div class="courses-one__single-img">
                            <img src="static/picture/courses-v1-img3.jpg" alt=""/>
                            <div class="overlay-text">
                                <p>Featured</p>
                            </div>
                        </div>
                        <div class="courses-one__single-content">
                            <div class="courses-one__single-content-overlay-img">
                                <img src="static/picture/courses-v1-overlay-img3.png" alt=""/>
                            </div>
                            <h6 class="courses-one__single-content-name">David Cooper</h6>
                            <h4 class="courses-one__single-content-title"><a href="course-details.html">Become a React Developer</a></h4>
                            <div class="courses-one__single-content-review-box">
                                <ul class="list-unstyled">
                                    <li><i class="fa fa-star"></i></li>
                                    <li><i class="fa fa-star"></i></li>
                                    <li><i class="fa fa-star"></i></li>
                                    <li><i class="fa fa-star"></i></li>
                                    <li><i class="fa fa-star"></i></li>
                                </ul>
                                <div class="rateing-box">
                                    <span>(4)</span>
                                </div>
                            </div>
                            <p class="courses-one__single-content-price">$30.00</p>
                            <ul class="courses-one__single-content-courses-info list-unstyled">
                                <li>2 Lessons</li>
                                <li>10 Hours</li>
                                <li>Beginner</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <!--End Single Courses One-->

                <!--Start Single Courses One-->
                <div class="col-xl-3 col-lg-6 col-md-6 filter-item photography development">
                    <div class="courses-one__single wow fadeInRight" data-wow-delay="100ms" data-wow-duration="1000ms">
                        <div class="courses-one__single-img">
                            <img src="static/picture/courses-v1-img4.jpg" alt=""/>
                        </div>
                        <div class="courses-one__single-content">
                            <div class="courses-one__single-content-overlay-img">
                                <img src="static/picture/courses-v1-overlay-img4.png" alt=""/>
                            </div>
                            <h6 class="courses-one__single-content-name">Sarah Albert</h6>
                            <h4 class="courses-one__single-content-title"><a href="course-details.html">Become a React Developer</a></h4>
                            <div class="courses-one__single-content-review-box">
                                <ul class="list-unstyled">
                                    <li><i class="fa fa-star"></i></li>
                                    <li><i class="fa fa-star"></i></li>
                                    <li><i class="fa fa-star"></i></li>
                                    <li><i class="fa fa-star"></i></li>
                                    <li><i class="fa fa-star"></i></li>
                                </ul>
                                <div class="rateing-box">
                                    <span>(4)</span>
                                </div>
                            </div>
                            <p class="courses-one__single-content-price">$30.00</p>
                            <ul class="courses-one__single-content-courses-info list-unstyled">
                                <li>2 Lessons</li>
                                <li>10 Hours</li>
                                <li>Beginner</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <!--End Single Courses One-->

                <!--Start Single Courses One-->
                <div class="col-xl-3 col-lg-6 col-md-6 filter-item development photography featured">
                    <div class="courses-one__single wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1000ms">
                        <div class="courses-one__single-img">
                            <img src="static/picture/courses-v1-img5.jpg" alt=""/>
                        </div>
                        <div class="courses-one__single-content">
                            <div class="courses-one__single-content-overlay-img">
                                <img src="static/picture/courses-v1-overlay-img5.png" alt=""/>
                            </div>
                            <h6 class="courses-one__single-content-name">Sarah Albert</h6>
                            <h4 class="courses-one__single-content-title"><a href="course-details.html">Become a React Developer</a></h4>
                            <div class="courses-one__single-content-review-box">
                                <ul class="list-unstyled">
                                    <li><i class="fa fa-star"></i></li>
                                    <li><i class="fa fa-star"></i></li>
                                    <li><i class="fa fa-star"></i></li>
                                    <li><i class="fa fa-star"></i></li>
                                    <li><i class="fa fa-star"></i></li>
                                </ul>
                                <div class="rateing-box">
                                    <span>(4)</span>
                                </div>
                            </div>
                            <p class="courses-one__single-content-price">$30.00</p>
                            <ul class="courses-one__single-content-courses-info list-unstyled">
                                <li>2 Lessons</li>
                                <li>10 Hours</li>
                                <li>Beginner</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <!--End Single Courses One-->

                <!--Start Single Courses One-->
                <div class="col-xl-3 col-lg-6 col-md-6 filter-item business development photography">
                    <div class="courses-one__single wow fadeInLeft" data-wow-delay="100ms" data-wow-duration="1000ms">
                        <div class="courses-one__single-img">
                            <img src="static/picture/courses-v1-img6.jpg" alt=""/>
                            <div class="overlay-text">
                                <p>Featured</p>
                            </div>
                        </div>
                        <div class="courses-one__single-content">
                            <div class="courses-one__single-content-overlay-img">
                                <img src="static/picture/courses-v1-overlay-img6.png" alt=""/>
                            </div>
                            <h6 class="courses-one__single-content-name">Kevin Martin</h6>
                            <h4 class="courses-one__single-content-title"><a href="course-details.html">Become a React Developer</a></h4>
                            <div class="courses-one__single-content-review-box">
                                <ul class="list-unstyled">
                                    <li><i class="fa fa-star"></i></li>
                                    <li><i class="fa fa-star"></i></li>
                                    <li><i class="fa fa-star"></i></li>
                                    <li><i class="fa fa-star"></i></li>
                                    <li><i class="fa fa-star"></i></li>
                                </ul>
                                <div class="rateing-box">
                                    <span>(4)</span>
                                </div>
                            </div>
                            <p class="courses-one__single-content-price">$30.00</p>
                            <ul class="courses-one__single-content-courses-info list-unstyled">
                                <li>2 Lessons</li>
                                <li>10 Hours</li>
                                <li>Beginner</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <!--End Single Courses One-->

                <!--Start Single Courses One-->
                <div class="col-xl-3 col-lg-6 col-md-6 filter-item featured photography development">
                    <div class="courses-one__single wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1000ms">
                        <div class="courses-one__single-img">
                            <img src="static/picture/courses-v1-img7.jpg" alt=""/>
                        </div>
                        <div class="courses-one__single-content">
                            <div class="courses-one__single-content-overlay-img">
                                <img src="static/picture/courses-v1-overlay-img7.png" alt=""/>
                            </div>
                            <h6 class="courses-one__single-content-name">Christine Eve</h6>
                            <h4 class="courses-one__single-content-title"><a href="course-details.html">Become a React Developer</a></h4>
                            <div class="courses-one__single-content-review-box">
                                <ul class="list-unstyled">
                                    <li><i class="fa fa-star"></i></li>
                                    <li><i class="fa fa-star"></i></li>
                                    <li><i class="fa fa-star"></i></li>
                                    <li><i class="fa fa-star"></i></li>
                                    <li><i class="fa fa-star"></i></li>
                                </ul>
                                <div class="rateing-box">
                                    <span>(4)</span>
                                </div>
                            </div>
                            <p class="courses-one__single-content-price">$30.00</p>
                            <ul class="courses-one__single-content-courses-info list-unstyled">
                                <li>2 Lessons</li>
                                <li>10 Hours</li>
                                <li>Beginner</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <!--End Single Courses One-->

                <!--Start Single Courses One-->
                <div class="col-xl-3 col-lg-6 col-md-6 filter-item photography featured">
                    <div class="courses-one__single wow fadeInRight" data-wow-delay="100ms" data-wow-duration="1000ms">
                        <div class="courses-one__single-img">
                            <img src="static/picture/courses-v1-img8.jpg" alt=""/>
                            <div class="overlay-text">
                                <p>free</p>
                            </div>
                        </div>
                        <div class="courses-one__single-content">
                            <div class="courses-one__single-content-overlay-img">
                                <img src="static/picture/courses-v1-overlay-img8.png" alt=""/>
                            </div>
                            <h6 class="courses-one__single-content-name">David Cooper</h6>
                            <h4 class="courses-one__single-content-title"><a href="course-details.html">Become a React Developer</a></h4>
                            <div class="courses-one__single-content-review-box">
                                <ul class="list-unstyled">
                                    <li><i class="fa fa-star"></i></li>
                                    <li><i class="fa fa-star"></i></li>
                                    <li><i class="fa fa-star"></i></li>
                                    <li><i class="fa fa-star"></i></li>
                                    <li><i class="fa fa-star"></i></li>
                                </ul>
                                <div class="rateing-box">
                                    <span>(4)</span>
                                </div>
                            </div>
                            <p class="courses-one__single-content-price">$30.00</p>
                            <ul class="courses-one__single-content-courses-info list-unstyled">
                                <li>2 Lessons</li>
                                <li>10 Hours</li>
                                <li>Beginner</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <!--End Single Courses One-->
            </div>
        </div>
    </section>
    <!--Courses One End-->

    <app-footer></app-footer>

    </div><!-- /.page-wrapper -->

    <app-Mobile-search></app-Mobile-search>

</div>
</template>

<script>
import AppHeader from './module/Header'
import AppFooter from './module/Footer'
import AppMobile_search from './module/Mobile_search'
export default {
  name: 'index',
  components: {
    'app-header':AppHeader,
    'app-footer':AppFooter,
    'app-Mobile-search':AppMobile_search
  },
}
</script>

<style scoped>

</style>

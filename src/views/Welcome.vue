<template>
<div>

    <!-- /.preloader -->
    <div class="page-wrapper">

        <app-header></app-header>
        
        <section class="main-slider main-slider-one">
            <div class="swiper-container thm-swiper__slider" data-swiper-options='{"slidesPerView": 1, "loop": true, "effect": "fade", "pagination": {
        "el": "#main-slider-pagination",
        "type": "bullets",
        "clickable": true
        },
        "navigation": {
        "nextEl": "#main-slider__swiper-button-next",
        "prevEl": "#main-slider__swiper-button-prev"
        },
        "autoplay": {
        "delay": 7000
        }}'>

                <div class="swiper-wrapper">
                    <!--Start Single Swiper Slide-->
                    <div class="swiper-slide">
                        <div class="shape1"><img src="static/picture/slider-v1-shape1.png" alt="" /></div>
                        <div class="shape2"><img src="static/picture/slider-v1-shape2.png" alt="" /></div>
                        <div class="image-layer"
                            style="background-image: url(static/images/main-slider-v1-1.jpg);"></div>
                        <!-- /.image-layer -->
                        <div class="container">
                            <div class="main-slider__content">
                                <div class="main-slider__content-icon-one">
                                    <span class="icon-lamp"></span>
                                </div>
                                <div class="main-slider__content-icon-two">
                                    <span class="icon-human-resources"></span>
                                </div>
                                <div class="main-slider-one__round-box">
                                    <div class="main-slider-one__round-box-inner">
                                        <p>Professional <br>teachers</p>
                                        <div class="icon">
                                            <i class="fas fa-sort-up"></i>
                                        </div>
                                    </div>
                                </div>
                                <div class="main-slider__content-tagline">
                                    <h2>Ready to learn?</h2>
                                </div>
                                <h2 class="main-slider__content-title">Learn new <br>things daily</h2>
                                <p class="main-slider__content-text">Get free access to 6800+ different courses from
                                    <br> 680 professional teachers</p>
                                <div class="main-slider__content-btn">
                                    <a href="#" class="thm-btn">Discover more</a>
                                </div>
                                <div class="main-slider-one__img">
                                    <img src="static/picture/main-slider-v1-img.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--End Single Swiper Slide-->

                    <!--Start Single Swiper Slide-->
                    <div class="swiper-slide">
                        <div class="shape1"><img src="static/picture/slider-v1-shape1.png" alt="" /></div>
                        <div class="shape2"><img src="static/picture/slider-v1-shape2.png" alt="" /></div>
                        <div class="image-layer"
                            style="background-image: url(static/images/main-slider-v1-1.jpg);"></div>
                        <!-- /.image-layer -->
                        <div class="container">
                            <div class="main-slider__content">
                                <div class="main-slider__content-icon-one">
                                    <span class="icon-lamp"></span>
                                </div>
                                <div class="main-slider__content-icon-two">
                                    <span class="icon-human-resources"></span>
                                </div>
                                <div class="main-slider-one__round-box">
                                    <div class="main-slider-one__round-box-inner">
                                        <p>Professional <br>teachers</p>
                                        <div class="icon">
                                            <i class="fas fa-sort-up"></i>
                                        </div>
                                    </div>
                                </div>
                                <div class="main-slider__content-tagline">
                                    <h2>Ready to learn?</h2>
                                </div>
                                <h2 class="main-slider__content-title">Learn new <br>things daily</h2>
                                <p class="main-slider__content-text">Get free access to 6800+ different courses from
                                    <br> 680 professional teachers</p>
                                <div class="main-slider__content-btn">
                                    <a href="#" class="thm-btn">Discover more</a>
                                </div>
                                <div class="main-slider-one__img">
                                    <img src="static/picture/main-slider-v1-img.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--End Single Swiper Slide-->

                    <!--Start Single Swiper Slide-->
                    <div class="swiper-slide">
                        <div class="shape1"><img src="static/picture/slider-v1-shape1.png" alt="" /></div>
                        <div class="shape2"><img src="static/picture/slider-v1-shape2.png" alt="" /></div>
                        <div class="image-layer"
                            style="background-image: url(static/images/main-slider-v1-1.jpg);"></div>
                        <!-- /.image-layer -->
                        <div class="container">
                            <div class="main-slider__content">
                                <div class="main-slider__content-icon-one">
                                    <span class="icon-lamp"></span>
                                </div>
                                <div class="main-slider__content-icon-two">
                                    <span class="icon-human-resources"></span>
                                </div>
                                <div class="main-slider-one__round-box">
                                    <div class="main-slider-one__round-box-inner">
                                        <p>Professional <br>teachers</p>
                                        <div class="icon">
                                            <i class="fas fa-sort-up"></i>
                                        </div>
                                    </div>
                                </div>
                                <div class="main-slider__content-tagline">
                                    <h2>Ready to learn?</h2>
                                </div>
                                <h2 class="main-slider__content-title">Learn new <br>things daily</h2>
                                <p class="main-slider__content-text">Get free access to 6800+ different courses from
                                    <br> 680 professional teachers</p>
                                <div class="main-slider__content-btn">
                                    <a href="#" class="thm-btn">Discover more</a>
                                </div>
                                <div class="main-slider-one__img">
                                    <img src="static/picture/main-slider-v1-img.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--End Single Swiper Slide-->
                </div>

                <!-- If we need navigation buttons -->
                <div class="swiper-pagination" id="main-slider-pagination"></div>
                <div class="main-slider__nav">
                    <div class="swiper-button-prev" id="main-slider__swiper-button-next">
                        <span class="icon-left"></span>
                    </div>
                    <div class="swiper-button-next" id="main-slider__swiper-button-prev">
                        <span class="icon-right"></span>
                    </div>
                </div>

            </div>
        </section>








        <!--Features One Start-->
        <section class="features-one">
            <div class="container">
                <div class="row">
                    <!--Start Single Features One-->
                    <div class="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <div class="features-one__single">
                            <div class="features-one__single-icon">
                                <span class="icon-empowerment"></span>
                            </div>
                            <div class="features-one__single-text">
                                <h4><a href="#">Learn Skills</a></h4>
                                <p>with unlimited courses</p>
                            </div>
                        </div>
                    </div>
                    <!--End Single Features One-->

                    <!--Start Single Features One-->
                    <div class="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <div class="features-one__single">
                            <div class="features-one__single-icon">
                                <span class="icon-human-resources-1"></span>
                            </div>
                            <div class="features-one__single-text">
                                <h4><a href="#">Expert Teachers</a></h4>
                                <p>best & highly qualified</p>
                            </div>
                        </div>
                    </div>
                    <!--End Single Features One-->

                    <!--Start Single Features One-->
                    <div class="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
                        <div class="features-one__single">
                            <div class="features-one__single-icon">
                                <span class="icon-recruitment"></span>
                            </div>
                            <div class="features-one__single-text">
                                <h4><a href="#">Certificates</a></h4>
                                <p>value all over the world</p>
                            </div>
                        </div>
                    </div>
                    <!--End Single Features One-->
                </div>
            </div>
        </section>
        <!--Features One End-->



        <!--About One Start-->
        <section class="about-one clearfix">
            <div class="container">
                <div class="row">
                    <!-- Start About One Left-->
                    <div class="col-xl-6">
                        <div class="about-one__left">
                            <ul class="about-one__left-img-box list-unstyled clearfix">
                                <li class="about-one__left-single">
                                    <div class="about-one__left-img1">
                                        <img src="static/picture/about-v1-img1.jpg" alt="" />
                                    </div>
                                </li>
                                <li class="about-one__left-single">
                                    <div class="about-one__left-img2">
                                        <img src="static/picture/about-v1-img2.jpg" alt="" />
                                    </div>
                                </li>
                            </ul>
                            <div class="about-one__left-overlay">
                                <div class="icon">
                                    <span class="icon-relationship"></span>
                                </div>
                                <div class="title">
                                    <h6>Trusted by<br><span class="odometer" data-count="8800">00</span> customers</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- End About One Left-->


                    <!-- Start About One Right-->
                    <div class="col-xl-6">
                        <div class="about-one__right">
                            <div class="section-title">
                                <span class="section-title__tagline">About Zilom Company</span>
                                <h2 class="section-title__title">Welcome to the Online <br>Learning Center</h2>
                            </div>
                            <div class="about-one__right-inner">
                                <p class="about-one__right-text">There are many variations of passages of lorem ipsum
                                    available but the majority have suffered alteration in some form by injected humour
                                    or randomised words which don't look.</p>
                                <ul class="about-one__right-list list-unstyled">
                                    <li class="about-one__right-list-item">
                                        <div class="icon">
                                            <span class="icon-confirmation"></span>
                                        </div>
                                        <div class="text">
                                            <p>Get unlimited access to 66000+ of our top courses</p>
                                        </div>
                                    </li>

                                    <li class="about-one__right-list-item">
                                        <div class="icon">
                                            <span class="icon-confirmation"></span>
                                        </div>
                                        <div class="text">
                                            <p>Explore a variety of fresh educational topics</p>
                                        </div>
                                    </li>

                                    <li class="about-one__right-list-item">
                                        <div class="icon">
                                            <span class="icon-confirmation"></span>
                                        </div>
                                        <div class="text">
                                            <p>Find the best qualitfied teacher for you</p>
                                        </div>
                                    </li>
                                </ul>

                                <div class="about-one__btn">
                                    <a href="about.html" class="thm-btn">view all courses</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- End About One Right-->
                </div>
            </div>
        </section>
        <!--About One End-->


        <!--Courses One Start-->
        <section class="courses-one">
            <div class="container">
                <div class="section-title text-center">
                    <span class="section-title__tagline">Checkout New List</span>
                    <h2 class="section-title__title">Explore Courses</h2>
                </div>
                <div class="row">
                    <!--Start Single Courses One-->
                    <div class="col-xl-3 col-lg-6 col-md-6">
                        <div class="courses-one__single wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1000ms">
                            <div class="courses-one__single-img">
                                <img src="static/picture/courses-v1-img1.jpg" alt="" />
                                <div class="overlay-text">
                                    <p>Featured</p>
                                </div>
                            </div>
                            <div class="courses-one__single-content">
                                <div class="courses-one__single-content-overlay-img">
                                    <img src="static/picture/courses-v1-overlay-img1.png" alt="" />
                                </div>
                                <h6 class="courses-one__single-content-name">Kevin Martin</h6>
                                <h4 class="courses-one__single-content-title"><a href="course-details.html">Become a
                                        React Developer</a></h4>
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
                    <div class="col-xl-3 col-lg-6 col-md-6">
                        <div class="courses-one__single wow fadeInLeft" data-wow-delay="100ms"
                            data-wow-duration="1000ms">
                            <div class="courses-one__single-img">
                                <img src="static/picture/courses-v1-img2.jpg" alt="" />
                                <div class="overlay-text">
                                    <p>free</p>
                                </div>
                            </div>
                            <div class="courses-one__single-content">
                                <div class="courses-one__single-content-overlay-img">
                                    <img src="static/picture/courses-v1-overlay-img2.png" alt="" />
                                </div>
                                <h6 class="courses-one__single-content-name">Christine Eve</h6>
                                <h4 class="courses-one__single-content-title"><a href="course-details.html">Become a
                                        React Developer</a></h4>
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
                    <div class="col-xl-3 col-lg-6 col-md-6">
                        <div class="courses-one__single wow fadeInRight" data-wow-delay="0ms"
                            data-wow-duration="1000ms">
                            <div class="courses-one__single-img">
                                <img src="static/picture/courses-v1-img3.jpg" alt="" />
                                <div class="overlay-text">
                                    <p>Featured</p>
                                </div>
                            </div>
                            <div class="courses-one__single-content">
                                <div class="courses-one__single-content-overlay-img">
                                    <img src="static/picture/courses-v1-overlay-img3.png" alt="" />
                                </div>
                                <h6 class="courses-one__single-content-name">David Cooper</h6>
                                <h4 class="courses-one__single-content-title"><a href="course-details.html">Become a
                                        React Developer</a></h4>
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
                    <div class="col-xl-3 col-lg-6 col-md-6">
                        <div class="courses-one__single wow fadeInRight" data-wow-delay="100ms"
                            data-wow-duration="1000ms">
                            <div class="courses-one__single-img">
                                <img src="static/picture/courses-v1-img4.jpg" alt="" />
                            </div>
                            <div class="courses-one__single-content">
                                <div class="courses-one__single-content-overlay-img">
                                    <img src="static/picture/courses-v1-overlay-img4.png" alt="" />
                                </div>
                                <h6 class="courses-one__single-content-name">Sarah Albert</h6>
                                <h4 class="courses-one__single-content-title"><a href="course-details.html">Become a
                                        React Developer</a></h4>
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
                    <div class="col-xl-3 col-lg-6 col-md-6">
                        <div class="courses-one__single wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1000ms">
                            <div class="courses-one__single-img">
                                <img src="static/picture/courses-v1-img5.jpg" alt="" />
                            </div>
                            <div class="courses-one__single-content">
                                <div class="courses-one__single-content-overlay-img">
                                    <img src="static/picture/courses-v1-overlay-img5.png" alt="" />
                                </div>
                                <h6 class="courses-one__single-content-name">Sarah Albert</h6>
                                <h4 class="courses-one__single-content-title"><a href="course-details.html">Become a
                                        React Developer</a></h4>
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
                    <div class="col-xl-3 col-lg-6 col-md-6">
                        <div class="courses-one__single wow fadeInLeft" data-wow-delay="100ms"
                            data-wow-duration="1000ms">
                            <div class="courses-one__single-img">
                                <img src="static/picture/courses-v1-img6.jpg" alt="" />
                                <div class="overlay-text">
                                    <p>Featured</p>
                                </div>
                            </div>
                            <div class="courses-one__single-content">
                                <div class="courses-one__single-content-overlay-img">
                                    <img src="static/picture/courses-v1-overlay-img6.png" alt="" />
                                </div>
                                <h6 class="courses-one__single-content-name">Kevin Martin</h6>
                                <h4 class="courses-one__single-content-title"><a href="course-details.html">Become a
                                        React Developer</a></h4>
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
                    <div class="col-xl-3 col-lg-6 col-md-6">
                        <div class="courses-one__single wow fadeInRight" data-wow-delay="0ms"
                            data-wow-duration="1000ms">
                            <div class="courses-one__single-img">
                                <img src="static/picture/courses-v1-img7.jpg" alt="" />
                            </div>
                            <div class="courses-one__single-content">
                                <div class="courses-one__single-content-overlay-img">
                                    <img src="static/picture/courses-v1-overlay-img7.png" alt="" />
                                </div>
                                <h6 class="courses-one__single-content-name">Christine Eve</h6>
                                <h4 class="courses-one__single-content-title"><a href="course-details.html">Become a
                                        React Developer</a></h4>
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
                    <div class="col-xl-3 col-lg-6 col-md-6">
                        <div class="courses-one__single wow fadeInRight" data-wow-delay="100ms"
                            data-wow-duration="1000ms">
                            <div class="courses-one__single-img">
                                <img src="static/picture/courses-v1-img8.jpg" alt="" />
                                <div class="overlay-text">
                                    <p>free</p>
                                </div>
                            </div>
                            <div class="courses-one__single-content">
                                <div class="courses-one__single-content-overlay-img">
                                    <img src="static/picture/courses-v1-overlay-img8.png" alt="" />
                                </div>
                                <h6 class="courses-one__single-content-name">David Cooper</h6>
                                <h4 class="courses-one__single-content-title"><a href="course-details.html">Become a
                                        React Developer</a></h4>
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



        <!--Registration One Start-->
        <section class="registration-one jarallax" data-jarallax data-speed="0.2" data-imgPosition="50% 0%">
            <div class="registration-one__bg"
                style="background-image: url(static/images/registration-one-bg.jpg);"></div>
            <div class="container">
                <div class="row">
                    <!--Start Registration One Left-->
                    <div class="col-xl-7 col-lg-7">
                        <div class="registration-one__left">
                            <div class="section-title">
                                <span class="section-title__tagline">Get Free Registration</span>
                                <h2 class="section-title__title">Register your Account<br> Get free Access to <span
                                        class="odometer" data-count="66000">00</span> <br>Online Courses</h2>
                            </div>
                            <p class="registration-one__left-text">There are many variations of passages of lorem ipsum
                                available but the majority have suffered alteration in some form.</p>
                            <div class="registration-one__left-transform-box">
                                <div class="registration-one__left-transform-box-icon">
                                    <span class="icon-online-course"></span>
                                </div>
                                <div class="registration-one__left-transform-box-text">
                                    <h3><a href="#">Transform Access To Education</a></h3>
                                    <p>Discover creative projects limited editions of 100 <br>from artists, designers,
                                        and more.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--End Registration One Left-->

                    <!--Start Registration One Right-->
                    <div class="col-xl-5 col-lg-5">
                        <div class="registration-one__right wow slideInRight" data-wow-delay="100ms"
                            data-wow-duration="2500ms">
                            <div class="registration-one__right-form">
                                <div class="title-box">
                                    <h4>Fill your Registration</h4>
                                </div>
                                <div class="form-box">
                                    <form method="post" action="index.html">
                                        <div class="form-group">
                                            <input type="text" name="username" placeholder="Your Name" required="">
                                        </div>
                                        <div class="form-group">
                                            <input type="email" name="email" placeholder="Email Address" required="">
                                        </div>
                                        <div class="form-group">
                                            <input type="text" name="phone" placeholder="Phone" required="">
                                        </div>
                                        <div class="form-group">
                                            <textarea placeholder="Comment"></textarea>
                                        </div>
                                        <button class="registration-one__right-form-btn" type="submit"
                                            name="submit-form">
                                            <span class="thm-btn">apply for it</span>
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--End Registration One Right-->
                </div>
            </div>
        </section>
        <!--Registration One End-->


        <!--Categories One Start-->
        <section class="categories-one">
            <div class="container">
                <div class="section-title text-center">
                    <span class="section-title__tagline">Checkout New List</span>
                    <h2 class="section-title__title">Top Categories</h2>
                </div>
                <div class="row">
                    <div class="col-xl-12">
                        <div class="categories-one__wrapper">
                            <div class="row">
                                <!--Start Single Categories One-->
                                <div class="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="0ms"
                                    data-wow-duration="1500ms">
                                    <div class="categories-one__single">
                                        <div class="categories-one__single-img">
                                            <img src="static/picture/categories-v1-img1.jpg" alt="" />
                                            <div class="categories-one__single-overlay">
                                                <div class="categories-one__single-overlay-text1">
                                                    <p>30 full courses</p>
                                                </div>
                                                <div class="categories-one__single-overlay-text2">
                                                    <h4>Art & Design</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!--End Single Categories One-->

                                <!--Start Single Categories One-->
                                <div class="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="200ms"
                                    data-wow-duration="1500ms">
                                    <div class="categories-one__single">
                                        <div class="categories-one__single-img">
                                            <img src="static/picture/categories-v1-img2.jpg" alt="" />
                                            <div class="categories-one__single-overlay">
                                                <div class="categories-one__single-overlay-text1">
                                                    <p>30 full courses</p>
                                                </div>
                                                <div class="categories-one__single-overlay-text2">
                                                    <h4>Art & Design</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!--End Single Categories One-->

                                <!--Start Single Categories One-->
                                <div class="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="400ms"
                                    data-wow-duration="1500ms">
                                    <div class="categories-one__single">
                                        <div class="categories-one__single-img">
                                            <img src="static/picture/categories-v1-img3.jpg" alt="" />
                                            <div class="categories-one__single-overlay">
                                                <div class="categories-one__single-overlay-text1">
                                                    <p>30 full courses</p>
                                                </div>
                                                <div class="categories-one__single-overlay-text2">
                                                    <h4>Art & Design</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!--End Single Categories One-->

                                <!--Start Single Categories One-->
                                <div class="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="600ms"
                                    data-wow-duration="1500ms">
                                    <div class="categories-one__single">
                                        <div class="categories-one__single-img">
                                            <img src="static/picture/categories-v1-img4.jpg" alt="" />
                                            <div class="categories-one__single-overlay">
                                                <div class="categories-one__single-overlay-text1">
                                                    <p>30 full courses</p>
                                                </div>
                                                <div class="categories-one__single-overlay-text2">
                                                    <h4>Art & Design</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!--End Single Categories One-->
                            </div>
                        </div>
                        <div class="categories-one__btn text-center">
                            <a href="#" class="thm-btn">view all courses</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!--Categories One End-->



        <!--Testimonials One Start-->
        <section class="testimonials-one clearfix">
            <div class="auto-container">
                <div class="section-title text-center">
                    <span class="section-title__tagline">Our Testimonials</span>
                    <h2 class="section-title__title">What They Say?</h2>
                </div>
                <div class="row">
                    <div class="col-xl-12">
                        <div class="testimonials-one__wrapper">
                            <div class="testimonials-one__pattern"><img
                                    src="static/picture/testimonials-one-left-pattern.png" alt="" /></div>
                            <div class="shape1"><img src="static/picture/thm-shape3.png" alt="" /></div>
                            <div class="row">
                                <div class="col-xl-12">
                                    <div class="testimonials-one__carousel owl-carousel owl-theme owl-dot-type1">
                                        <!--Start Single Testimonials One -->
                                        <div class="testimonials-one__single wow fadeInUp" data-wow-delay="0ms"
                                            data-wow-duration="1500ms">
                                            <div class="testimonials-one__single-inner">
                                                <h4 class="testimonials-one__single-title">Amazing Courses</h4>
                                                <p class="testimonials-one__single-text">Lorem ipsum is simply free text
                                                    dolor sit amet, consectetur notted adipisicing elit sed do eiusmod
                                                    tempor incididunt ut labore et dolore magna aliqua.</p>
                                                <div class="testimonials-one__single-client-info">
                                                    <div class="testimonials-one__single-client-info-img">
                                                        <img src="static/picture/testimonials-v1-client-info-img1.png"
                                                            alt="" />
                                                    </div>
                                                    <div class="testimonials-one__single-client-info-text">
                                                        <h5>Kevin Martin</h5>
                                                        <p>Developer</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <!--End Single Testimonials One -->

                                        <!--Start Single Testimonials One -->
                                        <div class="testimonials-one__single wow fadeInUp" data-wow-delay="100ms"
                                            data-wow-duration="1500ms">
                                            <div class="testimonials-one__single-inner">
                                                <h4 class="testimonials-one__single-title">Amazing Courses</h4>
                                                <p class="testimonials-one__single-text">Lorem ipsum is simply free text
                                                    dolor sit amet, consectetur notted adipisicing elit sed do eiusmod
                                                    tempor incididunt ut labore et dolore magna aliqua.</p>
                                                <div class="testimonials-one__single-client-info">
                                                    <div class="testimonials-one__single-client-info-img">
                                                        <img src="static/picture/testimonials-v1-client-info-img2.png"
                                                            alt="" />
                                                    </div>
                                                    <div class="testimonials-one__single-client-info-text">
                                                        <h5>Christine Eve</h5>
                                                        <p>Developer</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <!--End Single Testimonials One -->

                                        <!--Start Single Testimonials One -->
                                        <div class="testimonials-one__single wow fadeInUp" data-wow-delay="200ms"
                                            data-wow-duration="1500ms">
                                            <div class="testimonials-one__single-inner">
                                                <h4 class="testimonials-one__single-title">Amazing Courses</h4>
                                                <p class="testimonials-one__single-text">Lorem ipsum is simply free text
                                                    dolor sit amet, consectetur notted adipisicing elit sed do eiusmod
                                                    tempor incididunt ut labore et dolore magna aliqua.</p>
                                                <div class="testimonials-one__single-client-info">
                                                    <div class="testimonials-one__single-client-info-img">
                                                        <img src="static/picture/testimonials-v1-client-info-img3.png"
                                                            alt="" />
                                                    </div>
                                                    <div class="testimonials-one__single-client-info-text">
                                                        <h5>David Cooper</h5>
                                                        <p>Developer</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <!--End Single Testimonials One -->
                                        <!--Start Single Testimonials One -->
                                        <div class="testimonials-one__single wow fadeInUp" data-wow-delay="0ms"
                                            data-wow-duration="1500ms">
                                            <div class="testimonials-one__single-inner">
                                                <h4 class="testimonials-one__single-title">Amazing Courses</h4>
                                                <p class="testimonials-one__single-text">Lorem ipsum is simply free text
                                                    dolor sit amet, consectetur notted adipisicing elit sed do eiusmod
                                                    tempor incididunt ut labore et dolore magna aliqua.</p>
                                                <div class="testimonials-one__single-client-info">
                                                    <div class="testimonials-one__single-client-info-img">
                                                        <img src="static/picture/testimonials-v1-client-info-img1.png"
                                                            alt="" />
                                                    </div>
                                                    <div class="testimonials-one__single-client-info-text">
                                                        <h5>Kevin Martin</h5>
                                                        <p>Developer</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <!--End Single Testimonials One -->
                                        <!--Start Single Testimonials One -->
                                        <div class="testimonials-one__single wow fadeInUp" data-wow-delay="100ms"
                                            data-wow-duration="1500ms">
                                            <div class="testimonials-one__single-inner">
                                                <h4 class="testimonials-one__single-title">Amazing Courses</h4>
                                                <p class="testimonials-one__single-text">Lorem ipsum is simply free text
                                                    dolor sit amet, consectetur notted adipisicing elit sed do eiusmod
                                                    tempor incididunt ut labore et dolore magna aliqua.</p>
                                                <div class="testimonials-one__single-client-info">
                                                    <div class="testimonials-one__single-client-info-img">
                                                        <img src="static/picture/testimonials-v1-client-info-img2.png"
                                                            alt="" />
                                                    </div>
                                                    <div class="testimonials-one__single-client-info-text">
                                                        <h5>Christine Eve</h5>
                                                        <p>Developer</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <!--End Single Testimonials One -->
                                        <!--Start Single Testimonials One -->
                                        <div class="testimonials-one__single wow fadeInUp" data-wow-delay="200ms"
                                            data-wow-duration="1500ms">
                                            <div class="testimonials-one__single-inner">
                                                <h4 class="testimonials-one__single-title">Amazing Courses</h4>
                                                <p class="testimonials-one__single-text">Lorem ipsum is simply free text
                                                    dolor sit amet, consectetur notted adipisicing elit sed do eiusmod
                                                    tempor incididunt ut labore et dolore magna aliqua.</p>
                                                <div class="testimonials-one__single-client-info">
                                                    <div class="testimonials-one__single-client-info-img">
                                                        <img src="static/picture/testimonials-v1-client-info-img3.png"
                                                            alt="" />
                                                    </div>
                                                    <div class="testimonials-one__single-client-info-text">
                                                        <h5>David Cooper</h5>
                                                        <p>Developer</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <!--End Single Testimonials One -->
                                        <!--Start Single Testimonials One -->
                                        <div class="testimonials-one__single wow fadeInUp" data-wow-delay="0ms"
                                            data-wow-duration="1500ms">
                                            <div class="testimonials-one__single-inner">
                                                <h4 class="testimonials-one__single-title">Amazing Courses</h4>
                                                <p class="testimonials-one__single-text">Lorem ipsum is simply free text
                                                    dolor sit amet, consectetur notted adipisicing elit sed do eiusmod
                                                    tempor incididunt ut labore et dolore magna aliqua.</p>
                                                <div class="testimonials-one__single-client-info">
                                                    <div class="testimonials-one__single-client-info-img">
                                                        <img src="static/picture/testimonials-v1-client-info-img1.png"
                                                            alt="" />
                                                    </div>
                                                    <div class="testimonials-one__single-client-info-text">
                                                        <h5>Kevin Martin</h5>
                                                        <p>Developer</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <!--End Single Testimonials One -->
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!--Testimonials One End-->


        <!--Company Logos One Start-->
        <section class="company-logos-one">
            <div class="container">
                <div class="company-logos-one__title text-center">
                    <h6>Who Will You Learn With?</h6>
                </div>
                <div class="thm-swiper__slider swiper-container" data-swiper-options='{"spaceBetween": 100, "slidesPerView": 5, "autoplay": { "delay": 5000 }, "breakpoints": {
                "0": {
                    "spaceBetween": 30,
                    "slidesPerView": 2
                },
                "375": {
                    "spaceBetween": 30,
                    "slidesPerView": 2
                },
                "575": {
                    "spaceBetween": 30,
                    "slidesPerView": 3
                },
                "767": {
                    "spaceBetween": 50,
                    "slidesPerView": 4
                },
                "991": {
                    "spaceBetween": 50,
                    "slidesPerView": 5
                },
                "1199": {
                    "spaceBetween": 100,
                    "slidesPerView": 5
                }
            }}'>
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <img src="static/picture/company-logos-v1-logo1.png" alt="">
                        </div><!-- /.swiper-slide -->
                        <div class="swiper-slide">
                            <img src="static/picture/company-logos-v1-logo1.png" alt="">
                        </div><!-- /.swiper-slide -->
                        <div class="swiper-slide">
                            <img src="static/picture/company-logos-v1-logo1.png" alt="">
                        </div><!-- /.swiper-slide -->
                        <div class="swiper-slide">
                            <img src="static/picture/company-logos-v1-logo1.png" alt="">
                        </div><!-- /.swiper-slide -->
                        <div class="swiper-slide">
                            <img src="static/picture/company-logos-v1-logo1.png" alt="">
                        </div><!-- /.swiper-slide -->
                        <div class="swiper-slide">
                            <img src="static/picture/company-logos-v1-logo1.png" alt="">
                        </div><!-- /.swiper-slide -->
                        <div class="swiper-slide">
                            <img src="static/picture/company-logos-v1-logo1.png" alt="">
                        </div><!-- /.swiper-slide -->
                        <div class="swiper-slide">
                            <img src="static/picture/company-logos-v1-logo1.png" alt="">
                        </div><!-- /.swiper-slide -->
                        <div class="swiper-slide">
                            <img src="static/picture/company-logos-v1-logo1.png" alt="">
                        </div><!-- /.swiper-slide -->
                        <div class="swiper-slide">
                            <img src="static/picture/company-logos-v1-logo1.png" alt="">
                        </div><!-- /.swiper-slide -->
                    </div>
                </div>
            </div>
        </section>
        <!--Company Logos One End-->


        <!--Why Choose One Start-->
        <section class="why-choose-one">
            <div class="container">
                <div class="row">
                    <!--Start Why Choose One Left-->
                    <div class="col-xl-6 col-lg-6">
                        <div class="why-choose-one__left">
                            <div class="section-title">
                                <span class="section-title__tagline">Why Choose Us?</span>
                                <h2 class="section-title__title">Benefits of Learning <br>from Zilom</h2>
                            </div>
                            <p class="why-choose-one__left-text">There cursus massa at urnaaculis estie. Sed
                                aliquamellus vitae ultrs condmentum leo massa mollis estiegittis miristum nulla sed medy
                                fringilla vitae.</p>
                            <div class="why-choose-one__left-learning-box">
                                <div class="icon">
                                    <span class="icon-professor"></span>
                                </div>
                                <div class="text">
                                    <h4>Start learning from our experts and <br>enhance your skills</h4>
                                </div>
                            </div>
                            <div class="why-choose-one__left-list">
                                <ul class="list-unstyled">
                                    <li class="why-choose-one__left-list-single">
                                        <div class="icon">
                                            <span class="icon-confirmation"></span>
                                        </div>
                                        <div class="text">
                                            <p>Making this the first true on the Internet</p>
                                        </div>
                                    </li>

                                    <li class="why-choose-one__left-list-single">
                                        <div class="icon">
                                            <span class="icon-confirmation"></span>
                                        </div>
                                        <div class="text">
                                            <p>Lorem Ipsum is not simply random text</p>
                                        </div>
                                    </li>

                                    <li class="why-choose-one__left-list-single">
                                        <div class="icon">
                                            <span class="icon-confirmation"></span>
                                        </div>
                                        <div class="text">
                                            <p> If you are going to use a passage</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <!--End Why Choose One Left-->

                    <!--Start Why Choose One Right-->
                    <div class="col-xl-6 col-lg-6">
                        <div class="why-choose-one__right wow slideInRight animated clearfix" data-wow-delay="0ms"
                            data-wow-duration="1500ms">
                            <div class="why-choose-one__right-img clearfix">
                                <img src="static/picture/why-choose-v1-img.jpg" alt="" />
                                <div class="why-choose-one__right-img-overlay">
                                    <p>We’re the best institution</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--End Why Choose One Right-->

                </div>
            </div>
        </section>
        <!--Why Choose One End-->



        <!--Blog One Start-->
        <section class="blog-one">
            <div class="container">
                <div class="section-title text-center">
                    <span class="section-title__tagline">Directly from the Blog</span>
                    <h2 class="section-title__title">Latest Articles</h2>
                </div>
                <div class="row">
                    <!--Start Single Blog One-->
                    <div class="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <div class="blog-one__single">
                            <div class="blog-one__single-img">
                                <img src="static/picture/blog-v1-img1.jpg" alt="" />
                            </div>
                            <div class="blog-one__single-content">
                                <div class="blog-one__single-content-overlay-mata-info">
                                    <ul class="list-unstyled">
                                        <li><a href="#"><span class="icon-clock"></span>20 June</a></li>
                                        <li><a href="#"><span class="icon-user"></span>Admin </a></li>
                                        <li><a href="#"><span class="icon-chat"></span> Comments</a></li>
                                    </ul>
                                </div>
                                <h2 class="blog-one__single-content-title"><a href="news-details.html">Helping Answers
                                        Stand out in Discussions</a></h2>
                                <p class="blog-one__single-content-text">Lorem ipsum is simply free text on used by
                                    copytyping refreshing the whole area.</p>
                            </div>
                        </div>
                    </div>
                    <!--End Single Blog One-->

                    <!--Start Single Blog One-->
                    <div class="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="300ms" data-wow-duration="1500ms">
                        <div class="blog-one__single">
                            <div class="blog-one__single-img">
                                <img src="static/picture/blog-v1-img2.jpg" alt="" />
                            </div>
                            <div class="blog-one__single-content">
                                <div class="blog-one__single-content-overlay-mata-info">
                                    <ul class="list-unstyled">
                                        <li><a href="#"><span class="icon-clock"></span>20 June</a></li>
                                        <li><a href="#"><span class="icon-user"></span>Admin </a></li>
                                        <li><a href="#"><span class="icon-chat"></span> Comments</a></li>
                                    </ul>
                                </div>
                                <h2 class="blog-one__single-content-title"><a href="news-details.html">Helping Answers
                                        Stand out in Discussions</a></h2>
                                <p class="blog-one__single-content-text">Lorem ipsum is simply free text on used by
                                    copytyping refreshing the whole area.</p>
                            </div>
                        </div>
                    </div>
                    <!--End Single Blog One-->

                    <!--Start Single Blog One-->
                    <div class="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="600ms" data-wow-duration="1500ms">
                        <div class="blog-one__single">
                            <div class="blog-one__single-img">
                                <img src="static/picture/blog-v1-img3.jpg" alt="" />
                            </div>
                            <div class="blog-one__single-content">
                                <div class="blog-one__single-content-overlay-mata-info">
                                    <ul class="list-unstyled">
                                        <li><a href="#"><span class="icon-clock"></span>20 June</a></li>
                                        <li><a href="#"><span class="icon-user"></span>Admin </a></li>
                                        <li><a href="#"><span class="icon-chat"></span> Comments</a></li>
                                    </ul>
                                </div>
                                <h2 class="blog-one__single-content-title"><a href="news-details.html">Helping Answers
                                        Stand out in Discussions</a></h2>
                                <p class="blog-one__single-content-text">Lorem ipsum is simply free text on used by
                                    copytyping refreshing the whole area.</p>
                            </div>
                        </div>
                    </div>
                    <!--End Single Blog One-->
                </div>
            </div>
        </section>
        <!--Blog One End-->

        <!--Start Newsletter One-->
        <section class="newsletter-one">
            <div class="container">
                <div class="row">
                    <!--Start Newsletter One Left-->
                    <div class="col-xl-6 col-lg-6">
                        <div class="newsletter-one__left">
                            <div class="section-title">
                                <h2 class="section-title__title">Subscribe to Our <br>Newsletter to Get Daily
                                    <br>Content!</h2>
                            </div>
                        </div>
                    </div>
                    <!--End Newsletter One Left-->

                    <!--Start Newsletter One Right-->
                    <div class="col-xl-6 col-lg-6">
                        <div class="newsletter-one__right">
                            <div class="shape1 zoom-fade"><img src="static/picture/thm-shape2.png" alt="" /></div>
                            <div class="shape2 wow slideInRight" data-wow-delay="100ms" data-wow-duration="2500ms"><img
                                    src="static/picture/thm-shape3.png" alt="" /></div>
                            <div class="newsletter-form wow slideInDown" data-wow-delay="100ms"
                                data-wow-duration="1500ms">
                                <form action="#">
                                    <input type="text" name="email" placeholder="Enter your email">
                                    <button type="submit"><span class="icon-paper-plane"></span></button>
                                </form>
                                <div class="newsletter-one__right-checkbox">
                                    <input type="checkbox" name="agree " id="agree" checked>
                                    <label for="agree"><span></span>I agree to all terms and policies of the
                                        company</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--End Newsletter One Right-->
                </div>
            </div>
        </section>
        <!--End Newsletter One-->

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
  /*
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
  }*/
}
</script>

<style scoped>

</style>

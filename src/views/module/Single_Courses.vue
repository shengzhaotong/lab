<template>
  <div>
    <!--Start Single Courses One-->
    <div class="col-xl-3 col-lg-6 col-md-6">
      <div
        class="courses-one__single wow fadeInLeft"
        data-wow-delay="0ms"
        data-wow-duration="1000ms"
      >
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
          <h4 class="courses-one__single-content-title">
            <a href="course-details.html">Become a React Developer</a>
          </h4>
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
</template>

<script>
export default {
  name: "Single_Courses",
};
</script>

<style scoped>
</style>

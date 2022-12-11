$(".testimonial-slider").slick({
  slidesToShow: 1,
  arrows: false,
  dots: true,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
});
const heart = document.querySelector(".fa-heart");
const likeCount = document.querySelector(".like-count");
let currentLike;
const like = function () {
  document.addEventListener("click", function (e) {
    if (e.target.classList.contains("fa-heart")) {
      if (e.target.classList.contains("fa-solid")) {
        currentLike = parseInt(
          e.target.parentNode.querySelector(".like-count").textContent
        );
        currentLike -= 2;
        e.target.parentNode.querySelector(".like-count").textContent =
          currentLike;
      }
      currentLike = parseInt(
        e.target.parentNode.querySelector(".like-count").textContent
      );
      currentLike += 1;
      e.target.parentNode.querySelector(".like-count").textContent =
        currentLike;
      e.target.classList.toggle("fa-solid");
    }
  });
};
like();

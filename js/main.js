document.addEventListener('DOMContentLoaded', function () {
    const sliderTrack = document.querySelector('.slider-track'); // Внутренний трек для карточек
    const dots = document.querySelectorAll('.slider__nav-dot');
    
    let currentIndex = 0; // Индекс текущего слайда
    const moveAmount = 1000; // Смещение в 1000px для каждой группы карточек
  
    function updateSlider() {
      // Смещаем трек на 1000px в зависимости от индекса
      sliderTrack.style.transform = `translateX(-${moveAmount * currentIndex}px)`; // Перемещаем трек
  
      // Обновляем активные точки навигации
      dots.forEach(dot => dot.classList.remove('slider__nav-dot--active'));
      if (dots[currentIndex]) {
        dots[currentIndex].classList.add('slider__nav-dot--active');
      }
    }
  
    // Навигация по точкам
    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        currentIndex = index; // Обновляем текущий индекс слайда (0 для первой точки, 1 для второй)
        updateSlider(); // Обновляем положение слайдера
      });
    });
  
    // Инициализация слайдера
    updateSlider();
  });
  
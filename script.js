document.addEventListener('DOMContentLoaded', () => {
  const thumbs = document.querySelectorAll('.thumb');
  const mainImage = document.getElementById('mainImage');

  thumbs.forEach(thumb => {
    thumb.addEventListener('click', () => {
      const newSrc = thumb.getAttribute('data-image');

      // إزالة وإعادة إضافة كلاس slide لتفعيل الأنيميشن كل مرة
      mainImage.classList.remove('slide');
      void mainImage.offsetWidth; // إعادة تدفق layout لتفعيل الأنيميشن من جديد

      mainImage.setAttribute('src', newSrc);
      mainImage.classList.add('slide');

      // تغيير الحالة النشطة للصورة المصغّرة
      thumbs.forEach(t => t.classList.remove('active'));
      thumb.classList.add('active');
    });
  });
});

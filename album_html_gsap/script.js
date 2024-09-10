gsap.registerPlugin(ScrollTrigger);

// 這段 JavaScript 代碼的功能是從一個 HTML 元素（slide）的當前樣式中提取位移值，特別是沿著 z 軸的位移
const getInitalTranslateZ = (slide) => {
  // 使用 window.getComputedStyle(slide) 獲取該元素的所有計算後的樣式
  const style = window.getComputedStyle(slide);
  // 使用正則表達式 /matrix3d\((.+)\)/ 匹配 transform 屬性中的 matrix3d 函數。matrix3d 函數用於描述在三維空間中對元素進行變換，其包含16個數字，分別對應不同的變換參數。
  const matrix = style.transform.match(/matrix3d\((.+)\)/);

  //這個元素代表沿 z 軸的位移。
  return matrix ? parseFloat(matrix[1].split(", ")[14]) : 0;
};

const mapRange = (value, inMin, inMax, outMin, outMax) => {
  // value：要映射的原始數值。
  // inMin 和 inMax：原始數值的範圍最小值和最大值。
  // outMin 和 outMax：目標範圍的最小值和最大值。

  // (value - inMin)：計算原始數值與其範圍最小值之間的差。
  // (outMax - outMin)：計算目標範圍的寬度。
  // (inMax - inMin)：計算原始範圍的寬度。
  // 將上述兩個步驟的結果相乘，再除以原始範圍的寬度，這樣做是為了將原始數值的變化比例調整到目標範圍的比例。
  // + outMin：將調整後的數值移動到目標範圍的正確起始位置。
  // 計算結果是 value 在新範圍內的對應值。
  return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
};

window.addEventListener("load", function () {
  const slides = gsap.utils.toArray(".slide");
  // const _slides = window.document.querySelectorAll(".slide");
  const activesSlideImages = gsap.utils.toArray(".active-slide img");

  slides.forEach((slide, index) => {
    const initialZ = getInitalTranslateZ(slide);

    ScrollTrigger.create({
      trigger: ".container",
      start: "top top",
      end: "bottom bottom",
      scrub: true,
      onUpdate: (self) => {
        const progress = self.progress;
        const zIncrement = progress * 13500;
        const currentZ = initialZ + zIncrement;

        let opacity;

        if (currentZ > -1500) {
          opacity = mapRange(currentZ, -1500, 0, 0.5, 1);
        } else {
          opacity = mapRange(currentZ, -3000, -1500, 0, 0.5);
        }

        slide.style.opacity = opacity;

        slide.style.transform = `translateX(-50%) translateY(-50%) translateZ(${currentZ}px)`;

        if (currentZ < 450) {
          gsap.to(activesSlideImages[index], 1, {
            opacity: 1,
            ease: "power3.out",
          });
        } else {
          gsap.to(activesSlideImages[index], 1, {
            opacity: 0,
            ease: "power3.out",
          });
        }
      },
    });
  });
});

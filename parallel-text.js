const pTag = document.querySelector('.parallel-text p')
const textArr = 'Yummy Tasty Delicious Useful Coding Yummy Yummmmy Yummmmmmmmmy yum'.split(' ')

let aniSpeed = 3;
let count = 0

initTexts(pTag, textArr)

function initTexts(element, textArray) {
  textArray.push(...textArray)
  for (let i = 0; i < textArray.length; i++) {
    element.innerText += `${textArray[i]}\u00A0\u00A0\u00A0\u00A0`
  }
}

function marqueeText(count, element, direction) {
  if (count > element.scrollWidth / 2) {
    element.style.transform = `translate3d(0, 0, 0)`
    count = 0
  }
  element.style.transform = `translate3d(${direction * count}px, 0, 0)`

  return count
}

function animate() {
  count+=aniSpeed;
  count = marqueeText(count, pTag, -1)
  window.requestAnimationFrame(animate)
}

animate()
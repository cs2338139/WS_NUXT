export default function (box, fakeElement) {
  let firstSetFakeElement = setInterval(() => {
    if (box.value.offsetWidth != 0) {
      GetFakeCount(box, fakeElement);
      clearInterval(firstSetFakeElement);
    }
  }, 0);

  window.addEventListener("resize", () => GetFakeCount(box, fakeElement));

  const fakeCount = ref(0);

  function GetFakeCount(box, fakeElement) {
    let fatCurrentCount = 0;
    if (fakeElement.value && fakeElement.value.length > 0) {
      fatCurrentCount = fakeElement.value.length;
    }
    if (box.value) {
      let count = box.value.children.length - fatCurrentCount;

      let countOfRows = Math.floor(box.value.offsetWidth / box.value.children[0].getBoundingClientRect().width);
      let rowsCount = Math.ceil(count / countOfRows);
      if (rowsCount > 0 && countOfRows > 0 && count > 0) {
        fakeCount.value = rowsCount * countOfRows - count;

        console.log(box.value.offsetWidth +'  '+ box.value.children[0].getBoundingClientRect().width+'  '+box.value.offsetWidth / box.value.children[0].getBoundingClientRect().width+'   '+rowsCount + "   " + countOfRows + "  " + count);
        // console.log(box.value.children[0].clientWidth);
        // console.log(box.value.children[0].offsetWidth);
        // console.log(box.value.children[0].getBoundingClientRect().width);
      }
    }
  }

  return { fakeCount, GetFakeCount };
}

window.addEventListener("resize", ReGetWidth);

const currentWidth = ref("");
const width_2xl = ref(1440);
const width_xl = ref(1199.98);
const width_lg = ref(991.98);
const width_md = ref(767.98);
const width_sm = ref(575.98);

function ReGetWidth() {
  if (window.innerWidth <= width_sm.value) {
    currentWidth.value = "sm";
  } else if (window.innerWidth <= width_md.value) {
    currentWidth.value = "md";
  } else if (window.innerWidth <= width_lg.value) {
    currentWidth.value = "lg";
  } else if (window.innerWidth <= width_xl.value) {
    currentWidth.value = "xl";
  } else if (window.innerWidth <= width_2xl.value) {
    currentWidth.value = "2xl";
  } else {
    currentWidth.value = "3xl";
  }
}

function GetWidth() {
  if (currentWidth.value === "") {
    ReGetWidth();
  }
  return currentWidth;
}

export const useGetWidth = () => useState("getWidth", () => GetWidth());

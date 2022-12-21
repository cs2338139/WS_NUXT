export default function () {
  const current = ref();
  const width_2xl = ref(1440);
  const width_xl = ref(1199.98);
  const width_lg = ref(991.98);
  const width_md = ref(767.98);
  const width_sm = ref(575.98);
  const isWidth_3xl = ref(false);
  const isWidth_2xl = ref(false);
  const isWidth_xl = ref(false);
  const isWidth_lg = ref(false);
  const isWidth_md = ref(false);
  const isWidth_sm = ref(false);

  if (window.innerWidth <= width_sm.value) {
    current.value = "sm";
    isWidth_sm.value = true;
  } else if (window.innerWidth <= width_md.value) {
    current.value = "md";
    isWidth_md.value = true;
  } else if (window.innerWidth <= width_lg.value) {
    current.value = "lg";
    isWidth_lg.value = true;
  } else if (window.innerWidth <= width_xl.value) {
    current.value = "xl";
    isWidth_xl.value = true;
  } else if (window.innerWidth <= width_2xl.value) {
    current.value = "2xl";
    isWidth_2xl.value = true;
  } else {
    current.value = "3xl";
    isWidth_3xl.value = true;
  }

  return {
    current,
    isWidth_3xl,
    isWidth_2xl,
    isWidth_xl,
    isWidth_lg,
    isWidth_md,
    isWidth_sm,
  };
}

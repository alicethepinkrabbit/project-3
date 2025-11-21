const DRESSUP = {
  tops: [
    "../images/1.png",
    "../images/2.png",
    "../images/3.png",
    "../images/4.png",
    "../images/5.png",
    "../images/6.png",
    "../images/7.png",
    "../images/8.png",
    "../images/9.png",
    "../images/10.png",
    "../images/11.png",
    "../images/12.png",
    "../images/13.png",
    "../images/14.png",
    "../images/15.png",
    "../images/16.png",
    "../images/17.png",
    "../images/18.png",
    "../images/19.png",
    "../images/20.png",
    "../images/21.png",
    "../images/22.png",
    "../images/23.png",
    "../images/24.png",
    "../images/25.png",
    "../images/26.png",
    "../images/38.png",
    "../images/39.png",
    "../images/40.png",
    "../images/41.png",
    "../images/42.png",
    "../images/51.png",
    "../images/56.png",
    "../images/57.png",
    "../images/58.png",
    "../images/59.png",
    "../images/60.png",
    "../images/61.png",
    "../images/62.png",
    "../images/63.png",
    "../images/64.png",
    "../images/65.png",
    "../images/66.png",
    "../images/67.png",
    "../images/68.png",
    "../images/69.png",
    "../images/71.png",
    "../images/72.png",
    "../images/73.png",
    "../images/74.png",
    "../images/75.png",
  ],
  bottoms: [
    "../images/27.png",
    "../images/28.png",
    "../images/29.png",
    "../images/30.png",
    "../images/31.png",
    "../images/32.png",
    "../images/35.png",
    "../images/36.png",
    "../images/37.png",
    "../images/43.png",
    "../images/47.png",
    "../images/48.png",
    "../images/49.png",
    "../images/50.png",
    "../images/52.png",
    "../images/53.png",
    "../images/54.png",
    "../images/55.png",
    "../images/70.png"
  ],
  state: { top: 0, bottom: 0 }
};

/* Helper: safe modulo for negative steps */
function wrap(i, len) { return (i % len + len) % len; }

/* Render current images */
function renderDressUp() {
  const topImg = document.getElementById("img-top");
  const bottomImg = document.getElementById("img-bottom");
  if (topImg && DRESSUP.tops.length) {
    topImg.src = DRESSUP.tops[wrap(DRESSUP.state.top, DRESSUP.tops.length)];
  }
  if (bottomImg && DRESSUP.bottoms.length) {
    bottomImg.src = DRESSUP.bottoms[wrap(DRESSUP.state.bottom, DRESSUP.bottoms.length)];
  }
}

/* Init and wire buttons for both panels */
function initDressUp() {
  const topImg = document.getElementById("img-top");
  const bottomImg = document.getElementById("img-bottom");
  if (!topImg || !bottomImg) return; // not on the dress-up page

  renderDressUp();

  document.querySelectorAll(".controls").forEach(bar => {
    const kind = bar.getAttribute("data-kind"); // 'top' | 'bottom'
    bar.querySelectorAll(".ctrl").forEach(btn => {
      btn.addEventListener("click", () => {
        const step = parseInt(btn.getAttribute("data-step"), 10) || 0;
        const arr = kind === "top" ? DRESSUP.tops : DRESSUP.bottoms;
        const len = arr.length || 1;
        DRESSUP.state[kind] = wrap(DRESSUP.state[kind] + step, len);
        renderDressUp();
      });
    });
  });
}

document.addEventListener("DOMContentLoaded", initDressUp);
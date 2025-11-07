const DRESSUP = {
  tops: [
    "../images/tops/top-1.jpg",
    "../images/tops/top-2.jpg",
    "../images/tops/top-3.jpg",
    "../images/tops/top-4.jpg"
  ],
  bottoms: [
    "../images/bottoms/bottom-1.jpg",
    "../images/bottoms/bottom-2.jpg",
    "../images/bottoms/bottom-3.jpg",
    "../images/bottoms/bottom-4.jpg"
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
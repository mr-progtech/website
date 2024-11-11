const targetEl = document.querySelector(".list");

fetch(`./list.html`)
  .then((res) => {
    if (res.ok) {
      return res.text();
    }
  })
  .then((htmlList) => {
    targetEl.innerHTML = htmlList;
  });

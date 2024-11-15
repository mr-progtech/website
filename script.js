const targetEl = document.querySelector(".list");

function getFetchPath() {
  const currentURL = window.location.href;

  if (currentURL.includes("index.html") || currentURL.endsWith("/")) {
    return "./list.html";
  } else {
    return "../list.html";
  }
}

fetch(getFetchPath())
  .then((res) => {
    if (res.ok) {
      return res.text();
    }
  })
  .then((htmlList) => {
    targetEl.innerHTML = htmlList;
  });

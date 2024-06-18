const scrapedIndices = document.querySelectorAll(
  'body > div.md-container > main > div > div.md-sidebar.md-sidebar--secondary > div > div > nav > ul > li > a > span'
);

let arr = [];
scrapedIndices.forEach((i) => {
  arr.push(`${i.innerText}`);
});

console.log(arr);

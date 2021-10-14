navigator.clipboard.writeText(
  (() => {
    const url = window.location.href;
    const title = $(".recipe-panel-title").text().trim();
    const description = $(".panel-body > .description").text().trim();
    const flavors = $("table.flavors tr.even, table.flavors tr.odd")
      .map((_, v) => {
        const $cells = $(v).find("td");
        const pct = $cells.eq(1).text().trim();
        const vendor = $cells
          .eq(2)
          .text()
          .replace(/[\(\)]/g, "")
          .trim();
        const name = $cells.eq(3).text().trim();
        const flavorUrl = $cells.eq(3).find("a").attr("href").trim();

        return `|${pct}|${vendor}|[${name}](https://alltheflavors.com${flavorUrl})|`;
      })
      .get()
      .join("\n");

    return `
# [${title}](${url})
---

${description}

| % | Vendor | Flavor |
|---|--------|--------|
${flavors}`;
  })()
);
alert("Copied to clipboard!");

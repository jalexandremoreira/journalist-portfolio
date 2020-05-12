const portfolio = [
  {
    title: "Lorem Ipsum Dolor Sit Amet",
    date: "15 June 2016",
    publisher: "Vice",
    type: "Magazine",
    publisherURL: "https://www.vice.com/",
    articleURL: "https://www.vice.com/",
    content: {
      p1: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis hendrerit orci. Nulla facilisi. Donec odio massa, viverra ac tortor non, tempus semper dui. Pellentesque non magna tincidunt orci mollis porta in eu turpis. `,
      p2: `Nam iaculis est sed lectus dignissim laoreet. Vestibulum interdum id erat in ornare. Vivamus volutpat nulla justo, non posuere libero pulvinar et. Sed sit amet egestas purus, quis malesuada velit. Nunc at enim purus. Curabitur vitae egestas massa. Proin ac dui ornare, malesuada metus nec, scelerisque arcu.`,
    },
  },
  {
    title: "Lorem Ipsum Dolor",
    date: "4 January 2019",
    publisher: "The Local",
    type: "Newspaper",
    publisherURL: "https://www.thelocal.se/",
    articleURL: "https://www.thelocal.se/",
    content: {
      p1: `Etiam laoreet leo ut sapien commodo luctus. Aenean cursus volutpat augue non vulputate. Vestibulum elementum eros non ex feugiat, ut mattis nisl faucibus. Morbi ante ante, tincidunt a elit ut, laoreet porta lacus. Fusce pretium ante sed tincidunt eleifend. Praesent ac commodo libero. Nunc vulputate mi id velit condimentum condimentum.`,
      p2: `Nulla eleifend convallis volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla odio ante, ullamcorper quis elementum in, varius eleifend felis.`,
    },
  },
];

export function getPortfolio() {
  return portfolio;
}

const blogPosts = [
  {
    title: "Blog post 2",
    date: "July 25th 2019",
    content: `
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis hendrerit orci. Nulla facilisi. Donec odio massa, viverra ac tortor non, tempus semper dui. Pellentesque non magna tincidunt orci mollis porta in eu turpis. Aliquam erat volutpat. Donec sit amet ante auctor, hendrerit arcu id, venenatis mauris. Nulla facilisi. Suspendisse quam leo, varius a tempus quis, consectetur non metus. Sed mattis eleifend lacus, eget faucibus sem cursus et. Donec lorem lacus, pharetra vitae ultrices id, euismod sed libero. Integer semper elit nisi, a elementum orci aliquam eget. Vivamus vestibulum pulvinar urna, tincidunt interdum enim viverra quis. Sed eleifend urna a dignissim efficitur. Nulla non sem eu leo pellentesque congue quis ac risus. Sed aliquet nec neque sed auctor.</p>

    <p>Nam iaculis est sed lectus dignissim laoreet. Vestibulum interdum id erat in ornare. Vivamus volutpat nulla justo, non posuere libero pulvinar et. Sed sit amet egestas purus, quis malesuada velit. Nunc at enim purus. Curabitur vitae egestas massa. Proin ac dui ornare, malesuada metus nec, scelerisque arcu. Donec eleifend mi arcu, vitae finibus quam blandit eu. Curabitur commodo urna a bibendum efficitur. Integer vestibulum leo et porta tempor. Ut bibendum id nibh feugiat luctus. Praesent nec risus id nunc consequat tincidunt. Nunc tincidunt, ligula eu ultrices vestibulum, eros turpis sollicitudin magna, non tincidunt nibh metus id lorem. Sed tempus felis et commodo mollis.</p>
    
    <p>Etiam laoreet leo ut sapien commodo luctus. Aenean cursus volutpat augue non vulputate. Vestibulum elementum eros non ex feugiat, ut mattis nisl faucibus. Morbi ante ante, tincidunt a elit ut, laoreet porta lacus. Fusce pretium ante sed tincidunt eleifend. Praesent ac commodo libero. Nunc vulputate mi id velit condimentum condimentum. Nulla eleifend convallis volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla odio ante, ullamcorper quis elementum in, varius eleifend felis.</p>`,
  },
  {
    title: "Blog post 1",
    date: "April 3rd 2019",
    content: `
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis hendrerit orci. Nulla facilisi. Donec odio massa, viverra ac tortor non, tempus semper dui. Pellentesque non magna tincidunt orci mollis porta in eu turpis. Aliquam erat volutpat. Donec sit amet ante auctor, hendrerit arcu id, venenatis mauris. Nulla facilisi. Suspendisse quam leo, varius a tempus quis, consectetur non metus. Sed mattis eleifend lacus, eget faucibus sem cursus et. Donec lorem lacus, pharetra vitae ultrices id, euismod sed libero. Integer semper elit nisi, a elementum orci aliquam eget. Vivamus vestibulum pulvinar urna, tincidunt interdum enim viverra quis. Sed eleifend urna a dignissim efficitur. Nulla non sem eu leo pellentesque congue quis ac risus. Sed aliquet nec neque sed auctor.</p>

    <p>Nam iaculis est sed lectus dignissim laoreet. Vestibulum interdum id erat in ornare. Vivamus volutpat nulla justo, non posuere libero pulvinar et. Sed sit amet egestas purus, quis malesuada velit. Nunc at enim purus. Curabitur vitae egestas massa. Proin ac dui ornare, malesuada metus nec, scelerisque arcu. Donec eleifend mi arcu, vitae finibus quam blandit eu. Curabitur commodo urna a bibendum efficitur. Integer vestibulum leo et porta tempor. Ut bibendum id nibh feugiat luctus. Praesent nec risus id nunc consequat tincidunt. Nunc tincidunt, ligula eu ultrices vestibulum, eros turpis sollicitudin magna, non tincidunt nibh metus id lorem. Sed tempus felis et commodo mollis.</p>`,
  },
];

export function getPosts() {
  return blogPosts;
}

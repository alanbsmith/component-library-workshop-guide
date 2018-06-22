const menus = [
  {
    name: 'Home',
    link: '/',
  },
  {
    name: 'Introduction',
    link: '/introduction/',
  },
  {
    name: 'Part I',
    link: '/part-1/overview/',
    items: [
      { name: 'Overview', link: '/part-1/overview/' },
      { name: 'Libraries', link: '/part-1/libraries/' },
      { name: 'Principles', link: '/part-1/principles/' },
      { name: 'Up & Running', link: '/part-1/up-and-running/' },
    ],
  },
  {
    name: 'Part II',
    link: '/part-2/overview/',
    items: [
      { name: 'Overview', link: '/part-2/overview/' },
      {
        name: 'Elements',
        link: '/part-2/elements/overview',
        items: [
          { name: 'Label', link: '/part-2/elements/label/' },
          { name: 'Text', link: '/part-2/elements/text/' },
          { name: 'Icon', link: '/part-2/elements/icon/' },
          { name: 'TextField', link: '/part-2/elements/text-field/' },
        ],
      },
    ],
  },
  {
    name: 'Part III',
    link: '/part-3/overview/',
    items: [
      { name: 'Overview', link: '/part-3/overview/' },
      {
        name: 'Blocks',
        link: '/part-3/blocks/overview',
        items: [
          { name: 'StatusMessage', link: '/part-3/blocks/status-message/' },
          { name: 'IconButton', link: '/part-3/blocks/icon-button/' },
          { name: 'InlineField', link: '/part-3/blocks/inline-field/' },
        ],
      },
    ],
  },
  {
    name: 'Part IV',
    link: '/part-4/overview/',
    items: [
      { name: 'Overview', link: '/part-4/overview/' },
      {
        name: 'Components',
        link: '/part-4/components/overview',
        items: [
          { name: 'StatusMessage', link: '/part-4/components/status-message/' },
          { name: 'InlineEditable', link: '/part-4/components/inline-editable/' }
        ],
      },
    ],
  },
  {
    name: 'Part V',
    link: '/part-5/overview/',
    items: [
      { name: 'Overview', link: '/part-5/overview/' },
    ],
  },
  {
    name: 'Part VI',
    link: '/part-6/overview/',
    items: [
      { name: 'Overview', link: '/part-6/overview/' },
    ],
  },
  {
    name: 'Resources',
    link: '/resources/',
  },
];

export default menus;

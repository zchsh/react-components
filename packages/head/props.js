module.exports = {
  is: {
    type: 'React.Element',
    description: 'Pass in an instance of `next/head` here',
  },
  title: {
    type: 'string',
    description:
      'Sets page name used by the browser. It may include branding such as the site name.',
  },
  image: {
    type: 'string',
    description: 'Sets the share image',
  },
  pageName: {
    type: 'string',
    description:
      'Sets the page name used externally without any branding such as the site name.',
  },
  siteName: {
    type: 'string',
    description: 'Sets the site name used externally.',
  },
  stylesheet: {
    type: 'array',
    description:
      'Defines one or more `<link rel="stylesheet">` tags. Use it to add global styles to the page.',
    properties: [
      {
        type: 'object',
        properties: {
          href: { type: 'string' },
        },
      },
    ],
  },
  preload: {
    type: 'array',
    description:
      'Defines one or more `<link rel="preload">` tags. Use it when you’ll need a resource soon.',
    properties: [
      {
        type: 'object',
        properties: {
          href: { type: 'string' },
          as: { type: 'string' },
          type: { type: 'string' },
        },
      },
    ],
  },
  icon: {
    type: 'array',
    description:
      'Defines the favicon using one or more `<link rel="icon">` tags.',
    properties: [
      {
        type: 'object',
        properties: {
          href: { type: 'string' },
          type: { type: 'string' },
          sizes: { type: 'string' },
        },
      },
    ],
  },
}

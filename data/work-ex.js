workExs = [
  {
    title: 'XML to HTML',
    client: 'impact',
    image: {
      file: 'fulltxt.gif',
      title: 'Full Text HTML from XML'
    },
    desc: 'Article full text converted from <a href="https://jats.nlm.nih.gov/" target="_BLANK">JATS XML</a> to JSON, which is used in a template in <a href="https://www.meteor.com/" target="_BLANK">Meteor</a> to generate HTML. Article figures are served via a proxy &amp; hosted on <a href="https://aws.amazon.com/s3/" target="_BLANK">AWS S3</a>. The figures are optimized after uploading via <a href="https://aws.amazon.com/lambda/" target="_BLANK">AWS Lambda</a>.'
  },
  {
    title: 'Payment Processing',
    client: 'landes',
    image: {
      file: '1.png',
      title: 'Checkout Step 1 using Authorize.net API'
    },
    desc: 'A secure checkout with credit card processing. Payments are processed via <a href="https://www.authorize.net/" target="_BLANK">Authorize.net\'s</a> API. Upon completing, the user receives a confirmation email &amp; access to articles purchased.'
  },
  {
    title: 'Article Tweeting',
    client: 'landes',
    desc: 'For a peer reviewed bioscience research publisher, the editors skip logging into individual Twitter accounts &amp; tweet via the admin page. The same tweet can be tweeted by multiple Twitter accounts. Other journals can also be tagged in the tweet. After tweeting, a retweet option is displayed.',
    image: {
      file: 'admin_tweet_sm.png',
      title: 'Article Tweet from Admin'
    }
  },
  {
    title: 'RSVP Manager',
    client: 'boda',
    image: {
      file: 'rsvp.gif',
      title: 'RSVP'
    },
    desc: 'Built a wedding RSVP manager using <a href="https://facebook.github.io/react/" target="_BLANK">React</a>, <a href="https://facebook.github.io/flux/docs/in-depth-overview.html#content" target="_BLANK">Flux</a>, & <a href="https://www.rethinkdb.com/" target="_BLANK">RethinkDB</a>. There is a form for entering/updating invites. RSVPs are individualized by URL and guests can easily search for a link via their email. After submitting the RSVP, guests receive an email confirmation and the database is updated.'
  },
];

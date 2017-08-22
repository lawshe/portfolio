workExMore = [
  {
    year: '2017',
    examples: [
      {
        title: 'File Uploader',
        client: 'impact',
        desc: 'As part of a journal publication platform, designed &amp; developed an uploader for article figures, XML, PDF, &amp; supplemental files to <a href="https://aws.amazon.com/s3/" target="_BLANK" rel="noopener">AWS S3</a>. After upload, files are renamed to standardized naming convention &amp; figures are optimized via <a href="https://aws.amazon.com/lambda/" target="_BLANK" rel="noopener">AWS Lambda</a>.',
        image: {
          file: 'figure_uploader.png',
          title: 'Figure Uploader'
        }
      },
      {
        title: 'RSVP Manager',
        client: 'boda',
        image: {
          file: 'rsvp.png',
          title: 'RSVP'
        },
        desc: 'Built a wedding RSVP manager using <a href="https://facebook.github.io/react/" target="_BLANK" rel="noopener">React</a>, <a href="http://redux.js.org/" target="_BLANK" rel="noopener">Redux</a>, & <a href="https://www.rethinkdb.com/" target="_BLANK" rel="noopener">RethinkDB</a>. There is a form for entering &amp; updating invites. RSVPs are individualized by URL and guests can easily search for their RSVP link by entering their email. After submitting the RSVP, guests receive an email confirmation and the database is updated.'
      }
    ]
  },
  {
    year: '2016',
    examples: [
      {
        title: 'Data Submission Manager',
        client: 'impact',
        desc: 'Demonstrated here is a tool to submit article citation XML to <a href="https://www.ncbi.nlm.nih.gov/pubmed/" target="_BLANK" rel="noopener">PubMed</a> as part of a journal publication platform. The XML is generated from data stored in <a href="https://www.mongodb.com/" target="_BLANK" rel="noopener">MongoDB</a> &amp validated before submission using the NCBI <a href="https://www.ncbi.nlm.nih.gov/corehtml/query/DTD/index.shtml" target="_BLANK" rel="noopener">PubMed DTD</a>. If valid, the XML is sent via FTP to PubMed, a submission is recorded in the database, &amp; staff are notified via email.',
        image: {
          file: 'pubmed.gif',
          title: 'Data Submission Manager'
        }
      },
      {
        title: 'Team Suit Selector',
        client: 'a_gleam',
        desc: 'Designed &amp; developed webpage to select new team suit. Integrated with client\'s <a href="https://www.shopify.com/" target="_BLANK" rel="noopener">Shopify</a> inventory. Clicking color option filters suits by color, which hide other suit colors &amp; suits without selected color. Links to purchase the suits via online store.',
        image: {
          file: 'team-suits.png',
          title: 'Team Suits'
        }
      }
    ]
  },
  {
    year: '2015',
    examples: [
      {
        title: 'Chrome Extension',
        client: 'nebulab',
        desc: 'Developed an extension to save article metadata from PubMed to DropBox via a <a href="https://developer.chrome.com/extensions/api_index" target="_BLANK" rel="noopener">Chrome Extension</a>. NCBI\'s <a href="https://www.ncbi.nlm.nih.gov/books/NBK25501/" target="_BLANK" rel="noopener">E-utilities</a> is queried based on PMID to retrieve article metadata from PubMed\'s database or the article\'s PMCID to retrieve metadata from PMC. The data is returned as XML &amp; this is parsed via JavaScript to JSON.',
        image: {
              file: 'chrome.gif',
              title: 'Article Saver'
        }
      },
      {
        title: '3D Panorama',
        client: 'bim_cubed',
        desc: 'Developed panorama of model using <a href="http://threejs.org/" target="_BLANK" rel="noopener">three.js</a> to preview a building before construction. The panorama is auto animated, but with the option to pause, &amp; to click actions change the view.',
        image: {
          file: 'crane.png',
          title: 'Panorma built with three.js'
        }
      }
    ]
  },
  {
    year: '2014',
    examples: [
      {
        title: 'Solr Search',
        client: 'landes',
        desc: 'Designed interface &amp; integrated <a href="http://lucene.apache.org/solr/" target="_BLANK" rel="noopener">Solr</a> queries for searching peer reviewed research papers. Ability to search author, title, keywords, &amp paper text, as well as filter options for paper type &amp; free publications. The results are paginated &amp; paper type counts are updated in search options as query changes.',
        image: {
          file: 'search.png',
          title: 'Solr Query'
        },
      },
      {
        title: 'Band Gig Manager',
        client: 'bpb',
        desc: 'Designed &amp; developed a system to control show listings on band website &amp; communicate bookings with band members. Ability to save venue information, which can be used for future bookings. Members receive email notifications for new bookings &amp; reminders for upcoming. Booking includes status to determine stage in confirmation process.',
        image: {
          file: 'cms_add_show.png',
          title: "Add Show"
        }
      }
    ]
  },
  {
    year: '2013',
    examples: [
      {
        title: 'Editor Invite',
        client: 'landes',
        desc: 'Designed &amp; developed a system built on <a href="https://www.meteor.com/" target="_BLANK" rel="noopener">Meteor</a> to manage invites to join a journal\'s editorial board. Staff add invites to <a href="https://www.mongodb.com/" target="_BLANK" rel="noopener">MongoDB</a> via a CMS &amp; send personalized email invitations, which include a link to an acceptance form that is autofilled with invitee\'s information from the database.',
        image: {
          file: 'editor_invite_table.png',
          title: 'Editor invite table',
          imageClasses: ''
        }
      },
      {
        title: 'Responsive Layout',
        client: 'bpb',
        desc: 'Designed &amp; developed a multipage responsive website for a band, which was built on a <a href="https://en.wikipedia.org/wiki/LAMP_(software_bundle)" target="_BLANK" rel="noopener">LAMP stack</a>.',
        image: {
          file: 'responsive.png',
          title: 'Resppnsive layout for band website',
          imageClasses: 'no-bg'
        }
      }
    ]
  },
  {
    year: '2012',
    examples: [
      {
        title: 'Lab Website',
        client: 'kim',
        desc: 'The first website I built was for the research lab I managed at The University of Texas at Austin and is written in PHP. Creating this site is what started a hobby that turned into my career.',
        image: {
          file: 'lab.png',
          title: 'Lab Website'
        }
      }
    ]
  }
];

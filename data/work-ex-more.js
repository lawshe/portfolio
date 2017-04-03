workExMore = [
  {
    year: '2017',
    examples: [
      {
        title: 'City Guide',
        client: 'boda',
        desc: 'Designed &amp; developed guide for attractions, dining &amp; shopping in a city. Built page &amp; map components with <a href="https://facebook.github.io/react/" target="_BLANK">React</a>. Click events update the state via <a href="http://redux.js.org/docs/introduction/" target="_BLANK">Redux</a> actions.',
        image: {
          file: 'guide-map.png',
          title: 'City Guide Map'
        }
      },
      {
        title: 'File Uploader',
        client: 'impact',
        desc: 'Designed &amp; developed an uploader for article figures, XML, PDF, &amp; supplemental files to <a href="https://aws.amazon.com/s3/" target="_BLANK">AWS S3</a>, as part of a journal publication platform. After upload, files are renamed to standardized naming convention &amp; figures are optimized via <a href="https://aws.amazon.com/lambda/" target="_BLANK">AWS Lambda</a>. If figure optimization fails, staff is notified via email.',
        image: {
          file: 'figure_uploader.png',
          title: 'Figure Uploader'
        }
      }
    ]
  },
  {
    year: '2016',
    examples: [
      {
        title: 'Data Submission Manager',
        client: 'impact',
        desc: 'Demonstrated here is a tool to submit article citation XML to <a href="https://www.ncbi.nlm.nih.gov/pubmed/" target="_BLANK">PubMed</a>, as part of a journal publication platform. The XML is generated from data stored in <a href="https://www.mongodb.com/" target="_BLANK">MongoDB</a> &amp validated before submission against the NCBI <a href="https://www.ncbi.nlm.nih.gov/corehtml/query/DTD/index.shtml" target="_BLANK">PubMed DTD</a>. If valid, the XML is sent via FTP to PubMed, a submission is recorded in the database, &amp; staff are notified via email.',
        image: {
          file: 'pubmed.gif',
          title: 'Data Submission Manager'
        }
      },
      {
        title: 'Team Suit Selector',
        client: 'a_gleam',
        desc: 'Designed &amp; developed webpage to select new team suit. Integrated with client\'s <a href="https://www.shopify.com/" target="_BLANK">Shopify</a> inventory. Click events to filter suits by color, which hide other suit colors &amp; suits without selected color. Links to purchase the suits via online store.',
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
        desc: 'Save article metadata from PubMed to DropBox via a <a href="https://developer.chrome.com/extensions/api_index" target="_BLANK">Chrome Extension</a>. NCBI\'s <a href="https://www.ncbi.nlm.nih.gov/books/NBK25501/" target="_BLANK">E-utilities</a> is queried based on PMID to retrieve article metadata from PubMed\'s database or the article\'s PMCID to retrieve metadata from PMC. The data is returned as XML &amp; this is parsed via JavaScript to JSON.',
        image: {
              file: 'chrome.gif',
              title: 'Article Saver'
        }
      },
      {
        title: '3D Panorama',
        client: 'bim_cubed',
        desc: 'Developed panorama of model using <a href="http://threejs.org/" target="_BLANK">three.js</a> to preview a building before construction. The panorama is auto animated, but with the option to pause, &amp; to click actions change the view.',
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
        desc: 'Interface design &amp; integration of <a href="http://lucene.apache.org/solr/" target="_BLANK">Solr</a> queries for peer reviewed research papers. Ability to search author, title, keywords, &amp paper text, as well as filter options for paper type &amp; free publications. The results are paginated &amp; paper type counts are updated in search options as query changes.',
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
        desc: 'Designed &amp; developed a system built on <a href="https://www.meteor.com/" target="_BLANK">Meteor</a> to manage invites to join a journal\'s editorial board. Staff add invites to <a href="https://www.mongodb.com/" target="_BLANK">MongoDB</a> via a CMS &amp; send personalized email invitations, which include a link to an acceptance form that is autofilled with invitee\'s information from the database.',
        image: {
          file: 'editor_invite_table.png',
          title: '',
          imageClasses: ''
        }
      },
      {
        title: 'Responsive Layout',
        client: 'bpb',
        desc: 'Designed &amp; developed a multipage responsive website for a band, which was built on a <a href="https://en.wikipedia.org/wiki/LAMP_(software_bundle)" target="_BLANK">LAMP stack</a>.',
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
        desc: 'The first website I built was written in PHP and included an image popup.',
        image: {
          file: 'lab.png',
          title: 'Lab Website'
        }
      }
    ]
  }
];

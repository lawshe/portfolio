clients = [
		{
			name: 'BIM Cubed',
			thumb: 'BIM<br>Cubed',
			slug: 'bim_cubed',
			headerTwo: 'Building Information<br>Modeling',
			description: 'Front and back end design and development of a website for Building Information Modeling built with Meteor.js and hosted on AWS',
			keywords: 'Database architecture, MongoDB, Meteor.js, JavaScript, Building Information Modeling, Twitter Bootstrap, jQuery',
			imageThumb: 'home_surface.png',
			image: 'home.png',
			imageTitle: 'Interactive Logo',
			projects: [
				{
					sectionHeader: 'Interactive Logo',
					anchor: 'interactive',
					sections: [
							{
								headerFour: 'Touch, Keyboard & Mouse',
								txt: 'User events spin a 3D version of the company logo',
								images:[
									{
										image: 'home_iphone.gif',
										imageClasses: 'no-bg',
										title: 'Interactive Logo'
									}
								]
							}
					]
				},
				{
					sectionHeader: 'Panorama',
					anchor: 'panorama',
					sections: [
							{
								headerFour: 'Jump into a 3D Model',
								txt: 'Created using three.js, this panorama let\'s users preview a building before construction. The panorama is auto animated, but with the option to pause. Users can click or drag to change the view.',
								images:[
									{
										image: 'panorama.png',
										imageClasses: 'no-bg',
										title: 'Interactive Panorama'
									}
								]
							}
					]
				},
				{
					sectionHeader: 'User Accounts',
					anchor: 'users',
					sections: [
							{
								headerThree: 'Account Request',
								headerFour: 'Register to get Access',
								txt: 'After registration, the user receives an email to confirm his/her account. The user is notified by email once an admin approves the account.',
								images: [
									{
										image: 'request.png',
										title: 'Account Request',
										imageClasses: 'no-bg'
									}
								]
							},
							{
								headerThree: 'User Profile',
								headerFour: 'Update Profile & Password',
								txt: 'Option to opt into eBook email alerts.',
								images: [
									{
										image: 'profile.png',
										title: 'User Profile',
										imageClasses: 'no-bg'
									}
								]
							},
							{
								headerThree: 'eBook Email',
								headerFour: 'Email Alert for New Chapter',
								txt: 'When a new eBook chapter is released an email is sent to all users opted into the alert system.',
								images: [
									{
										image: 'ebook_email.png',
										title: 'eBook Email Alert',
										imageClasses: ''
									}
								]
							}
					]
				},
				{
					sectionHeader: 'CMS',
					anchor: 'cms',
					headerTwo: 'Custom CMS for eBook & Users',
					sections: [
							{
								headerThree: 'eBook Chapter Order',
								headerFour: 'Drag & Drop',
								txt: 'Quickly update the chapter order.',
								images: [
									{
										image: 'admin_order.png',
										title: 'User Profile',
										imageClasses: ''
									}
								]
							}
					]
				}
			]			
		},
		{
			name: 'Landes Bioscience',
			thumb: 'Landes<br>Bioscience',
			slug: 'landes',
			headerTwo: 'Peer Reviewed<br>Research Publisher',
			description: 'Front and back end design and development of a website for a peer reviewed research publisher. I worked with various APIs, including Authorize.net and Twitter.',
			keywords: 'Database architecture, MongoDB, MySQL, JavaScript, Peer Reviewed Research, Twitter Bootstrap, jQuery, Authorize.net, Twitter API, Facebook API, PubMed Central, CrossRef, JATS, PHP',
			imageThumb: 'journal_home_mac.png',
			image: 'journal_home_mac.png',
			projects: [
				{	
					sectionHeader: 'Article',
					anchor: 'article',
					sections: [
						{
							headerThree: 'Text Viewer',
							headerFour: 'XML to JSON',
							txt: 'Via the open source project Lens, created by eLife. I have worked on the implementation of this project into the Landes website. Changing XSL, XML to JSON conversion, & templating.',
							images: [
								{
									image: 'mac_lens.png',
									title: 'Full Text Viewer',
									imageClasses: 'no-bg'
								}
							]
						},
						{
							headerThree: 'Metrics',
							headerFour: 'Views',
							txt: 'Data provided by PubMed Central API & publisher stats. Graphing is created with the JavaScript library <a href="http://grafico.kilianvalkhof.com/" target="_BLANK">Grafico.js</a>. The data source (PMC, publisher, total) & type of graph (stacked, donut, line) are selectable.',
							images: [
								{
									image: 'metrics_views.png',
									title: 'Article Views: Stacked Graph',
									imageClasses: 'third'
								},
								{
									image: 'metrics_donut.png',
									title: 'Article Views: Donut Graph',
									imageClasses: 'third'
								},
								{
									image: 'metrics_line.png',
									title: 'Article Views: Line Graph',
									imageClasses: 'third'
								}
							]
						},
						{
							headerFour: 'Citations',
							txt: 'Citations are provided by article indexers. These counts may vary depending on the service. Each count links to a list of all cited by articles.',
							images: [
								{
									image: 'metrics_citations.png',
									title: 'Metrics - Citations',
									imageClasses: ''
								}
							]
						}
					]
				},
				{
					sectionHeader: 'Checkout',
					anchor: 'checkout',
					sections: [
						{
							headerThree: '1 Page, 3 Steps',
							headerFour: '1 - Billing & Shipping',
							txt: 'Required fields are marked within the input label. All required information must be saved to progress through the form. If required fields are incomplete, an error message is shown below the input. Information from this step is saved to the user\'s cart. There is an option to copy billing information into shipping.',
							images: [
								{
									image: '1.png',
									title: 'Checkout Step 1',
									imageClasses: ''
								}
							]
						},
						{
							headerFour: '2 - Payment Information',
							txt: 'Credit card verified as valid before continuing to final step. To ensure customer privacy, this information is never saved.',
							images: [
								{
									image: '2_s.png',
									title: 'Checkout Step 2',
									imageClasses: ''
								}
							]
						},
						{
							headerFour: '3 - Review & Submit',
							txt: 'The final step in checkout. Customers can review items in the cart and then place order.',
							images: [
								{
									image: '3_s.png',
									title: 'Checkout Step 3',
									imageClasses: ''
								}
							]
						},
						{
							headerThree: 'Completion',
							headerFour: 'Email Confirmation',
							txt: 'After successful payment, a confirmation email is sent & the customer is taken to a page that links to all the items in the cart.',
							images: [
								{
									image: 'receipt.png',
									title: 'Purchase Email Receipt',
									imageClasses: ''
								}
							]
						},
						{
							headerThree: 'Payment Gateway',
							headerFour: 'Advanced Integration Method API',
							txt: 'Transactions are processed via a SSL connection to Authorize.net. The API is the most secure method from the payment gateway. A transaction key is required for ultimate security.',
							images: [
								{
									image: '1_saved_s.png',
									title: 'Checkout Step 1: Saved',
									imageClasses: ''
								}
							]
						}
					]
				},
				{
					sectionHeader: 'Editor Invite',
					anchor: 'editor_invite', 
					sections: [
						{
							
							headerThree: 'Admin',
							headerFour: 'Add Invite',
							txt: 'Admins create records of potential editorial board members for the journal. The profile information is autofilled in the acceptance form.',
							images: [
								{
									image: 'cms_add_editor.png',
									title: 'CMS: Create New Editor',
									imageClasses: ''
								}
							]
						},
						{
							headerFour: 'Sortable & Searchable Table',
							txt: 'The rows are color coded based on status & expand to show the editor\'s information. The database is downloadable as a CSV.',
							images: [
								{
									image: 'cms_editor_invite_table.png',
									title: 'CMS: Editor Tracking',
									imageClasses: ''
								}
							]
						},
						{
							headerThree: 'Acceptance Form',
							headerFour: 'Several Versions',
							txt: 'The form fields vary depending on editor type. Each version of the form has different required fields.',
							images: [
								{
									image: 'editorform_1_2.png',
									title: 'Editor Invite Form: Steps 1 - 2',
									imageClasses: 'span-half'
								},
								{
									image: 'editorform_6_7.png',
									title: 'Editor Invite Form: Steps 5 - 7',
									imageClasses: 'span-half'
								}
							]
						}
					]
				},
				{
					sectionHeader: 'Twitter API',
					anchor: 'twitter',
					sections: [
						{
							headerThree: 'Admin',
							headerFour: 'Tweet from Admin',
							txt: 'Editors skip logging into individual Twitter accounts & tweet via the admin page. The same tweet can be tweeted by multiple Twitter accounts. Other journals can also be tagged in the tweet. After tweeting, a retweet option is displayed.',
							images: [
								{
									image: 'admin_tweet_sm.png',
									title: 'Article Tweet from Admin',
									imageClasses: ''
								}
							]
						},
						{
							headerThree: 'The Tweet',
							headerFour: 'Twitter Card - Customized Tweet',
							txt: 'Article tweet appears as a Twitter Card, which uses the article page\'s meta tags to display an image, preview of the abstract & URL.',
							images: [
								{
									image: 'twitter_card.png',
									title: 'Twitter Card',
									imageClasses: ''
								}
							]
						}
					]
				},
				{
					sectionHeader: 'Homepages',
					anchor: 'homepages',
					sections: [
						{
							headerThree: 'Admin',
							headerFour: 'Current Issue',
							txt: 'Cover caption WYSIWYG with option to display entire caption or preview of caption. Option to show entire cover image or portion of the cover.',
							images: [
								{
									image: 'cms_current_issue.png',
									title: 'CMS: Current Issue',
									imageClasses: ''
								}
							]
						},
						{
							headerThree: 'Journal Homepage',
							headerFour: 'Current Issue',
							txt: 'Easily share the current issue on Facebook, Twitter, LinkedIn & Email.',
							images: [
								{
									image: 'jhome_current.png',
									title: 'Current Issue Sharing',
									imageClasses: ''
								}
							]
						},
						{
							headerFour: 'Paper Type Search',
							txt: 'Integration of Solr queries & results for a specific paper type.',
							images: [
								{
									image: 'explore.png',
									title: 'Article Search',
									imageClasses: ''
								}
							]
						},
						{
							headerFour: 'Recent Articles',
							txt: 'Immediately upon publication online, the article appears within the journal\'s recent articles. The editor can select to display an image preview within the thumbnails.',
							images: [
								{
									image: 'recent_no_img.png',
									title: 'Recent Article Thumbnails',
									imageClasses: ''
								}
							]
						},
						{
							headerFour: 'Featured Articles',
							txt: '6 most recent articles within a Special Focus are featured on the homepage.',
							images: [
								{
									image: 'home_sf.png',
									title: 'Featured Special Focus',
									imageClasses: ''
								}
							]
						}
					]
				},
				{
					sectionHeader: 'Special Focus',
					anchor: 'special_focus',
					sections: [
						{
							headerThree: 'Admin',
							headerFour: 'Display Options',
							txt: 'Checkboxes to quickly update group settings. Editors can feature the group of articles on the homepage & include image previews.',
							images: [
								{
									image: 'mongo_sf_group.png',
									title: 'CMS: Manage Article Group',
									imageClasses: ''
								}
							]
						},
						{
							headerFour: 'Organize Special Focus',
							txt: 'Optional subgroups within a special focus allow further organization. Subgroup titles are created in a WYSIWYG text editor.',
							images: [
								{
									image: 'sf_subgroup_new.png',
									title: 'CMS: Create Subgroups',
									imageClasses: ''
								}
							]
						},
						{
							headerFour: 'Order - Drag & Drop',
							txt: 'Select the order in which subgroups are organized within the special focus.',
							images: [
								{
									image: 'sf_subgoup_order.png',
									title: 'CMS: Sort Subgroups',
									imageClasses: ''
								}
							]
						},
						{
							headerThree: 'Special Focus Page',
							headerFour: 'Subgrouped Articles',
							txt: 'Articles are sorted based on admin selections. The article abstract is shown within a collapsible & expandable accordion.',
							images: [
								{
									image: 'sf_articles_smallgtpases.png',
									title: 'Special Focus Page',
									imageClasses: ''
								}
							]
						}
					]
				},
				{
					sectionHeader: 'Article Search',
					anchor: 'search',
					sections: [
						{
							headerThree: 'Solr',
							headerFour: 'HTTP GET',
							txt: 'Query Solr search server & display results for searching articles within a journal. Sort by publication date or filter by paper type.',
							images: [
								{
									image: 'search_left.png',
									title: 'Search Options',
									imageClasses: ''
								}
							]
						}
					]
				},
				{
					sectionHeader: 'XML',
					anchor: 'xml',
					sections: [
						{
							headerThree: 'Submission to Indexers',
							headerFour: 'Submission to Indexers',
							txt: 'Maintain compliance of XML with the Journal Article Tag Suite <a href="http://jats.nlm.nih.gov/" target="_BLANK">JATS</a>. Adjust script for zipping of article XML, figures & supplemental material to article indexers.',
							images: [
								{
									image: 'xml.png',
									title: 'XML Submission to Indexers',
									imageClasses: ''
								}
							]
						}
					]
				}
			]		
		},
		{
			name: 'The Bipolar Bears',
			thumb: 'The<br>Bipolar<br>Bears',
			slug: 'bpb',
			headerTwo: 'Indie<br>Band',
			description: 'Front and back end design and development of a website for a band. A CMS was also needed to help manage show tasks.',
			keywords: 'Database architecture, MySQL, PHP, jQuery',
			imageThumb: 'home_iphone.png',
			image: 'home_logo.png',
			projects: [
				{
					sectionHeader: 'Responsive',
					anchor: 'responsive',
					sections: [
						{	
							headerThree: 'Adaptive Layout',
							headerFour: 'Supports Range of Devices',
							txt: 'Optimal viewing experience for users is created by adjusting the positioning of elements on the page based on page size.',
							images: [
								{
									image: 'home.png',
									title: 'Adaptive Layout',
									imageClasses: 'no-bg'
								}
							]
						}
					]
				},
				{
					sectionHeader: 'Show CMS',
					anchor: 'cms',
					sections: [
						{
							headerThree: 'Users & Permissions',
							headerFour: 'Add New User',
							txt: 'After adding a user, permissions can be granted to book shows, edit website & assign show tasks.',
							images: [
							{
								image: 'cms_add_user.png',
								title: 'CMS',
								imageClasses: ''
							}
							]
						},
						{
							headerThree: 'Venues',
							headerFour: 'Search & Sort',
							txt: 'Past & future show venues are listed in a paginated table. The venue row expands to display additional information.',
							images: [
							{
								image: 'cms_venues.png',
								title: 'CMS: Venues',
								imageClasses: ''
							}
							]
						},
						{
							headerThree: 'Shows',
							headerFour: 'Add New',
							txt: 'When selecting a saved venue, all venue information is automatically associated with the show.',
							images: [
							{
								image: 'cms_add_show.png',
								title: 'CMS: Add Show',
								imageClasses: ''
							}
							]
						}
					]
				},
				{
					sectionHeader: 'MailChimp',
					anchor: 'mailchimp',
					sections: [
						{
							headerThree: 'Campaign',
							headerFour: 'Single Promo',
							txt: 'I created an email campaign to promote a new single. The campaign\'s styling matched the website.' ,
							images: [
								{
									image:'mailchimp.png',
									title:'MailChimp Campaign'	
								}	
							]			
						}
					]
				}
			]
		},
		{
			name: 'Cherrywood Studios',
			thumb: 'Cherrywood<br>Studios',
			slug: 'cherrywood',
			headerTwo: 'Mixed<br>Media Studio',
			description: 'Website for a mixed media studio in Austin, Texas',
			keywords: 'Meteor.js, Database architecture, MongoDB, jQuery',
			imageThumb: 'coming_soon.png',
			image: 'coming_soon.png',
			projects: [
				{
					sectionHeader: 'Coming Soon Page',
					anchor: 'coming_soon',
					sections: [
						{	
							headerThree: 'CSS3 Animation',
							headerFour: 'After Page Load',
							txt: 'The company logo slides out while the coming soon page fades in. A simple responsive one page site until the full site is launched.',
							images: [
								{
									image: 'coming_soon.gif',
									title: 'Coming Soon',
									imageClasses: ''
								}
							]
						}
					]
				}
			]
		}
	];
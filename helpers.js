if (Meteor.isClient) {
	var works = [
			{
				name: 'Coming Soon',
				path: '/work/coming_soon',
				image: '/img/work/bim/sm/home_surface.png'
			},
			{
				name: 'Landes Bioscience',
				path: '/work/landes',
				image: '/img/work/landes/sm/journal_home_mac.png'
			},
			{
				name: 'The Bipolar Bears',
				path: '/work/bpb',
				image: '/img/work/bpb/sm/home_logo.png'
			}
	];
	Template.landes.helpers({
		sections: function(){
			var imgSize = Session.get('imgSize'),
				imagePath = '/img/work/landes/'+imgSize+'/';
			var sections = [
				{
					title: 'Article',
					subtitle: 'Read Article & View Metrics',
					image: imagePath+'imac_article.png',
					slides: [
						{
							title: 'Full Text Viewer',
							subtitle: 'XML to JSON',
							txt: 'Via the open source project Lens, created by eLife. I have worked on the implementation of this project into the Landes website. Changing XSL, XML to JSON conversion, & templating.',
							images: [
								{
									image: imagePath+'mac_lens.png',
									title: 'Full Text Viewer',
									imageClasses: 'no_bg'
								}
							]
						},
						{
							title: 'Metrics - Views',
							subtitle: 'Data & Graphing',
							txt: 'Data provided by PubMed Central API & publisher stats. Graphing is created with the JavaScript library <a href="http://grafico.kilianvalkhof.com/" target="_BLANK">Grafico.js</a>. The data source (PMC, publisher, total) & type of graph (stacked, donut, line) are selectable.',
							images: [
								{
									image: imagePath+'metrics_views.png',
									title: 'Article Views: Stacked Graph',
									imageClasses: 'third'
								},
								{
									image: imagePath+'metrics_donut.png',
									title: 'Article Views: Donut Graph',
									imageClasses: 'third'
								},
								{
									image: imagePath+'metrics_line.png',
									title: 'Article Views: Line Graph',
									imageClasses: 'third'
								}
							]
						},
						{
							title: 'Metrics - Citations',
							subtitle: 'Article Impact',
							txt: 'Citations are provided by CrossRef & PubMed Central APIs. These counts may vary depending on the indexing service. Each count links to a list of all cited by articles.',
							images: [
								{
									image: imagePath+'metrics_citations.png',
									title: 'Metrics - Citations',
									imageClasses: ''
								}
							]
						}
					]
				},
				{
					title: 'Checkout',
					subtitle: '1 Page, 3 Steps',
					image: imagePath+'imac_2.png',
					slides: [
						{
							title: 'Authorize.net',
							subtitle: 'Payment Gateway',
							txt: 'Transactions are processed via the Advanced Integration Method API.',
							images: [
								{
									image: imagePath+'1_saved_s.png',
									title: 'Checkout Step 1: Saved',
									imageClasses: ''
								}
							]
						},
						{
							title: 'Step 1',
							subtitle: 'Billing & Shipping',
							txt: 'Option to copy billing information. Form validated before continuing to next step.',
							images: [
								{
									image: imagePath+'1.png',
									title: 'Checkout Step 1',
									imageClasses: ''
								}
							]
						},
						{
							title: 'Step 2',
							subtitle: 'Payment Information',
							txt: 'Credit card verified as valid before continuing to final step.',
							images: [
								{
									image: imagePath+'2_s.png',
									title: 'Checkout Step 2',
									imageClasses: ''
								}
							]
						},
						{
							title: 'Step 3',
							subtitle: 'Review & Submit',
							txt: 'The final step in checkout.',
							images: [
								{
									image: imagePath+'3_s.png',
									title: 'Checkout Step 3',
									imageClasses: ''
								}
							]
						},
						{
							title: 'Confirmation',
							subtitle: 'Success!',
							txt: 'After successful payment, a confirmation email is sent & the user is taken to a page that links to all the items in his or her cart.',
							images: [
								{
									image: imagePath+'receipt.png',
									title: 'Purchase Email Receipt',
									imageClasses: 'span_half'
								},
								{
									image: imagePath+'thanks.png',
									title: 'Checkout Confirmation',
									imageClasses: 'span_half'
								}
							]
						}
					]
				},
				{
					title: 'Editor Invite',
					subtitle: 'Editorial Board Member Recruiting',
					image: imagePath+'imac_invite.png',
					slides: [
						{
							title: 'CMS: Add Editor',
							subtitle: 'Invite Record',
							txt: 'Admins create records of potential editorial board members for the journal. The profile information is autofilled in the acceptance form.',
							images: [
								{
									image: imagePath+'cms_add_editor.png',
									title: 'CMS: Create New Editor',
									imageClasses: ''
								}
							]
						},
						{
							title: 'CMS: Tracking',
							subtitle: 'Sortable & Searchable',
							txt: 'The rows are color coded based on status & expand to show the editor\'s information. The database is downloadable as a CSV.',
							images: [
								{
									image: imagePath+'cms_editor_invite_table.png',
									title: 'CMS: Editor Tracking',
									imageClasses: ''
								}
							]
						},
						{
							title: 'Acceptance Form',
							subtitle: '3 Versions',
							txt: 'The form fields vary depending on editor type. Each version of the form has different required fields.',
							images: [
								{
									image: imagePath+'editorform_1_2.png',
									title: 'Editor Invite Form: Steps 1 - 2',
									imageClasses: 'span_half'
								},
								{
									image: imagePath+'editorform_6_7.png',
									title: 'Editor Invite Form: Steps 5 - 7',
									imageClasses: 'span_half'
								}
							]
						}
					]
				},
				{
					title: 'Twitter API',
					subtitle: 'Article Tweeting',
					image: imagePath+'iphone_tweet.png',
					slides: [
						{
							title: 'Article Tweet',
							subtitle: 'Tweet from Admin',
							txt: 'Editors skip logging into individual Twitter accounts & tweet via the admin page. After tweeting, a retweet option is displayed.',
							images: [
								{
									image: imagePath+'admin_tweet_sm.png',
									title: 'Article Tweet from Admin',
									imageClasses: ''
								}
							]
						},
						{
							title: 'Twitter Card',
							subtitle: 'Customized Tweet',
							txt: 'Article tweet appears as a Twitter Card, which uses the article page\'s meta tags to display an image, preview of the abstract & URL.',
							images: [
								{
									image: imagePath+'twitter_card.png',
									title: 'Twitter Card',
									imageClasses: ''
								}
							]
						},
					]
				},
				{
					title: 'Homepages',
					subtitle: 'Featured & Recent Research',
					image: imagePath+'imac_psb.png',
					slides: [
						{
							title: 'CMS: Current Issue',
							subtitle: 'Issue Caption',
							txt: 'Cover caption WYSIWYG with option to display entire caption or preview of caption.',
							images: [
								{
									image: imagePath+'cms_current_issue.png',
									title: 'CMS: Current Issue',
									imageClasses: ''
								}
							]
						},
						{
							title: 'Sharing',
							subtitle: 'Current Issue',
							txt: 'Easily share the current issue on Facebook, Twitter, LinkedIn & Email.',
							images: [
								{
									image: imagePath+'jhome_current.png',
									title: 'Current Issue Sharing',
									imageClasses: ''
								}
							]
						},
						{
							title: 'Paper Type Search',
							subtitle: 'Solr',
							txt: 'Integration of Solr queries & results for a specific paper type.',
							images: [
								{
									image: imagePath+'explore.png',
									title: 'Article Search',
									imageClasses: ''
								}
							]
						},
						{
							title: 'Recent Articles',
							subtitle: '6 Most Recent',
							txt: 'Immediately upon publication online, the article appears within the journal\'s recent articles. The editor can select to display an image preview within the thumbnails.',
							images: [
								{
									image: imagePath+'recent_no_img.png',
									title: 'Recent Article Thumbnails',
									imageClasses: ''
								}
							]
						},
						{
							title: 'Featured Articles',
							subtitle: 'Special Focus',
							txt: '6 most recent articles within a Special Focus are featured on the homepage.',
							images: [
								{
									image: imagePath+'home_sf.png',
									title: 'Featured Special Focus',
									imageClasses: ''
								}
							]
						}
					]
				},
				{
					title: 'Special Focus',
					subtitle: 'Group of Articles',
					image: imagePath+'imac_sf.png',
					slides: [
						{
							title: 'CMS: Dashboard',
							subtitle: 'Display Options',
							txt: 'Checkboxes to quickly update group settings. Editors can feature the group of articles on the homepage & include image previews.',
							images: [
								{
									image: imagePath+'mongo_sf_group.png',
									title: 'CMS: Manage Article Group',
									imageClasses: ''
								}
							]
						},
						{
							title: 'CMS: Subgrouping',
							subtitle: 'Organize Special Focus',
							txt: 'Optional subgroups within a special focus allow further organization. Subgroup titles are created in a WYSIWYG text editor.',
							images: [
								{
									image: imagePath+'sf_subgroup_new.png',
									title: 'CMS: Create Subgroups',
									imageClasses: ''
								}
							]
						},
						{
							title: 'CMS: Order',
							subtitle: 'Drag & Drop',
							txt: 'Select the order in which subgroups are organized within the special focus.',
							images: [
								{
									image: imagePath+'sf_subgoup_order.png',
									title: 'CMS: Sort Subgroups',
									imageClasses: ''
								}
							]
						},
						{
							title: 'Special Focus Page',
							subtitle: 'Subgrouped Articles',
							txt: 'Articles are sorted based on CMS selections. The article abstract is shown within a collapsible & expandable accordion.',
							images: [
								{
									image: imagePath+'sf_articles_smallgtpases.png',
									title: 'Special Focus Page',
									imageClasses: ''
								}
							]
						},
						{
							title: 'Special Focuses',
							subtitle: 'All Special Focuses',
							txt: 'List of current & past special focuses within the journal.',
							images: [
								{
									image: imagePath+'sf_list_hv.png',
									title: 'Special Focus List',
									imageClasses: ''
								}
							]
						},
					]
				},
				{
					title: 'Search',
					subtitle: 'Find Articles',
					image: imagePath+'imac_search.png',
					slides: [
						{
							title: 'Solr',
							subtitle: 'HTTP GET',
							txt: 'Query Solr search server & display results for searching articles within a journal.',
							images: [
								{
									image: imagePath+'solr.png',
									title: 'Apache Solr',
									imageClasses: ''
								}
							]
						},
						{
							title: 'Search Inputs',
							subtitle: 'Sort & Filter',
							txt: 'Sort by publication date or filter by paper type.',
							images: [
								{
									image: imagePath+'search_left.png',
									title: 'Search Options',
									imageClasses: ''
								}
							]
						},
					]
				},
				{
					title: 'XML',
					subtitle: 'Submission to Indexers',
					txt: 'Maintain compliance of XML with the Journal Article Tag Suite <a href="http://jats.nlm.nih.gov/" target="_BLANK">JATS</a>. Adjust script for zipping of article XML, figures & supplemental material to article indexers.',
					image: imagePath+'xml.png',
					imageClasses: 'bg'
				},
			]
			sections = Meteor.fullpage.addSlideIndex(sections);
			return sections;
		},
		imgSize: function(){
			return Session.get('imgSize');
		}
	});	
	Template.bpb.helpers({
		sections: function(){
			var imgSize = Session.get('imgSize'),
				imagePath = '/img/work/bpb/'+imgSize+'/';
			var sections = [
				{
					title: 'Responsive',
					subtitle: 'Elements Change with Screen Size',
					image: imagePath+'home.png',
					slides: [
						{
							title: 'Fixed Menu',
							subtitle: 'Quickly Navigate',
							txt: 'Screen size dictates the location of the fixed navigation.',
							images: [
								{
									image: imagePath+'home_iphone.png',
									title: 'Fixed Menu',
									imageClasses: 'no_bg'
								}
							]
						},
						{
							title: 'Photos',
							subtitle: 'Fluid Grid',
							txt: 'The number of columns changes with the screen size. Clicking an image opens a popup image.',
							images: [
								{
									image: imagePath+'pics.png',
									title: 'Pictures',
									imageClasses: 'no_bg'
								}
							]
						},
						{
							title: 'Videos',
							subtitle: 'Embedded YouTube & Vimeo',
							txt: 'Options to switch to another video or share on social networks.',
							images: [
								{
									image: imagePath+'videos.png',
									title: 'Videos',
									imageClasses: 'no_bg'
								}
							]
						}
					]
				},
				{
					title: 'Show CMS',
					subtitle: 'Manage Booking, Tasks, & Users',
					txt: '',
					image: imagePath+'bpb_calendar.png',
					slides: [
						{
							title: 'Users & Permissions',
							subtitle: 'Add New User',
							txt: 'After adding a user, permissions can be granted to book shows, edit website & assign show tasks.',
							images: [
								{
									image: imagePath+'cms_add_user.png',
									title: 'CMS',
									imageClasses: ''
								}
							]
						},
						{
							title: 'Venues Table',
							subtitle: 'Search & Sort',
							txt: 'Past & future show venues are listed in a paginated table. The venue row expands to display additional information.',
							images: [
								{
									image: imagePath+'cms_venues.png',
									title: 'CMS: Venues',
									imageClasses: ''
								}
							]
						},
						{
							title: 'Add Venue',
							subtitle: 'Save & Share',
							txt: 'There are many venue contacts when booking a show & this information can easily be lost. Saving venue information makes it easy for the band & manager to share this information.',
							images: [
								{
									image: imagePath+'cms_new_venue.png',
									title: 'CMS: Add Venue',
									imageClasses: ''
								}
							]
						},
						{
							title: 'Add Show',
							subtitle: 'Location, Times, Contacts',
							txt: 'When selecting a saved venue, all venue information is automatically associated with the show.',
							images: [
								{
									image: imagePath+'cms_add_show.png',
									title: 'CMS: Add Show',
									imageClasses: ''
								}
							]
						}
					]
				},
				{
					title: 'MailChimp',
					subtitle: 'Single Promo',
					txt: 'Email campaign to promote a new single',
					image: imagePath+'mailchimp.png'
				}
			]
			sections = Meteor.fullpage.addSlideIndex(sections);
			return sections;
		},
		imgSize: function(){
			return Session.get('imgSize');
		}
	});
	Template.bim.helpers({
		sections: function(){
			var imgSize = Session.get('imgSize'),
				imagePath = '/img/work/bim/'+imgSize+'/';
			var sections = [
				{
					title: 'Interactive Logo',
					image: imagePath+'home_iphone.gif',
					imageClasses: 'no_bg',
					subtitle: 'Touch, Keyboard & Mouse',
					txt: 'User events spin a 3D version of the company logo'
				},
				{
					title: 'User Accounts',
					image: imagePath+'login.png',
					subtitle: 'Account System for eBook Access',
					slides: [
						{
							title: 'Account Request',
							subtitle: 'Register to get Access',
							txt: 'After registration, the user receives an email to confirm his/her account. The user is notified by email once an admin approves the account.',
							images: [
								{
									image: imagePath+'request.png',
									title: 'Account Request',
									imageClasses: 'no_bg'
								}
							]
						},
						{
							title: 'User Profile',
							subtitle: 'Update Profile & Password',
							txt: 'Option to opt into eBook email alerts.',
							images: [
								{
									image: imagePath+'profile.png',
									title: 'User Profile',
									imageClasses: 'no_bg'
								}
							]
						},
						{
							title: 'eBook Email',
							subtitle: 'Email Alert for New Chapter',
							txt: 'When a new eBook chapter is released an email is sent to all users opted into the alert system.',
							images: [
								{
									image: imagePath+'ebook_email.png',
									title: 'eBook Email Alert',
									imageClasses: ''
								}
							]
						}
					]
				},
				{
					title: 'CMS',
					image: imagePath+'admin_ebook.png',
					imageClasses: 'bg',
					subtitle: 'Custom CMS for eBook & Users',
					slides: [
						{
							title: 'eBook Chapter Order',
							subtitle: 'Drag & Drop',
							txt: 'Quickly update the chapter order.',
							images: [
								{
									image: imagePath+'admin_order.png',
									title: 'User Profile',
									imageClasses: ''
								}
							]
						}
					]
				}
			]
			sections = Meteor.fullpage.addSlideIndex(sections);
			return sections;
		},
		imgSize: function(){
			return Session.get('imgSize');
		}
	});
	Template.selectedWork.helpers({
		works: function(){
			return works;			
		}
	});
	Template.moreWork.helpers({
		work: function(){
			var currentWork = window.location.pathname,
				otherWorks = $.grep(works, function(e){ return e.path !== currentWork; }),
				randomWork = otherWorks[(~~(Math.random() * otherWorks.length))];
			return randomWork;
					
		},
		imgSize: function(){
			return Session.get('imgSize');
		}
	});
}
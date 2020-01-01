var tipuesearch = {"pages": [
{ "title": "Welcome to Jekyll!", "tags": "jekyllcode", "text": "pYou’ll find this post in your code class language-plaintext highlighter-rouge_posts code directory. Go ahead and edit it and re-build the site to see your changes. You can rebuild the site in many different ways, but the most common way is to run code class language-plaintext highlighter-rougejekyll serve code, which launches a web server and auto-regenerates your site when a file is updated. ppJekyll requires blog post files to be named according to the following format ppcode class language-plaintext highlighter-rougeYEAR-MONTH-DAY-title.MARKUP code ppWhere code class language-plaintext highlighter-rougeYEAR code is a four-digit number, code class language-plaintext highlighter-rougeMONTH code and code class language-plaintext highlighter-rougeDAY code are both two-digit numbers, and code class language-plaintext highlighter-rougeMARKUP code is the file extension representing the format used in the file. After that, include the necessary front matter. Take a look at the source for this post to get an idea about how it works. ph2 id code-snippetsCode snippets h2pJekyll also offers powerful support for code snippets pfigure class highlightprecode class language-ruby data-lang rubyspan class kdef span span class nfprint_hi spanspan class p( spanspan class nbname spanspan class p) span  span class nbputs span span class s2Hi,  spanspan class si#{ spanspan class nbname spanspan class si} spanspan class s2 spanspan class kend spanspan class nprint_hi spanspan class p( spanspan class s1'Tom' spanspan class p) spanspan class c1# &gt; prints 'Hi, Tom' to STDOUT. span code pre figureh2 id check-out-the-jekyll-docsCheck out the Jekyll docs h2pCheck out the a href https  jekyllrb.com docs homeJekyll docs a for more info on how to get the most out of Jekyll. File all bugs feature requests at a href https  github.com jekyll jekyllJekyll’s GitHub repo a. If you have questions, you can ask them on a href https  talk.jekyllrb.com Jekyll Talk a. p", "url": "http://localhost:4000/jekyll/update/2019/12/30/welcome-to-jekyll.html"},{ "title": "Readme", "tags": "jekyll", "text": "h1 id requestRequest h1pCreate a Jekyll generated Static Site according to the following design specification. Provide me the Jekyll code and I will take care of creating and hosting it on my GitHub Pages repository. ph3 id what-i-want-to-achieveWhat I want to achieve h3pThis is a site primarily for writing content such as software instructions or lecture notes. I would like to easily sort content (posts) by category or date. Content should be written in markdown and I only want to store content in the “_posts” folder (no pages such as “About Me” are needed). ppIt is important to use strongas little code as possible strong to achieve this design. I do not want this implemented as a Jekyll theme laid upon a highly flexible site structure. Preferably no theme at all. I don’t want unused code or folders related to comments section, social media, etc… The config file, in particular, should be simple. ph1 id designDesign h1pThe design should match a href https  www.jetbrains.com help pycharmthis site a by Jetbrains as closely as possible. Layout should react the same way as this site does to a pc screen or smarthphone, especially the left menu. Same formatting of links. ph3 id sections-that-are-neededSections that are needed h3ul  liA top bar with webpage title li  liA search box also shown in the top bar li  liA left menu showing post titles sorted by category or date. See below for further information (Left menu functionality is NB). li  liThe main section showing content li  liFooter with “MIT License” and “This Page is generated with GitHubPages” li ulpI need the following strongmarkdown features strong to be processed similar to the above site and or GitHub itself (GFM) pul  liHeaders, lists, bold, italics (obviously) li  liBlockquotes. Preferably with dark grey bar on the left and on light grey background such as a href https  www.markdownguide.org basic-syntax here a li  liInline Code on light grey background li  liCode blocks on very dark grey background li  liIf possible Python syntax highlighting supported by GFM and also shown a href https  github.com adam-p markdown-here wiki Markdown-Cheatsheethere a li ulh3 id advanced-features-of-this-site-which-are-not-neededAdvanced features of this site which are not needed h3ul  liThe right column showing Header titles of the current page. li  liWhen using a smartphone, the left menu shows the header titles of current page under the term “On this page” li  liPrevious post and Next Post li ulh3 id parametersParameters h3pParameters should be kept in the main jekyll config file pul  liTitle li  liWebsite address, if not using the default ‘___.github.io ” li  liDefault post to display as home page (I will not use a unique home page) li  liI would like to define the colours of the top bar and the Website title in the top bar via the config file. li  liPriority posts (see below) li ulh1 id the-left-menu-nbThe Left Menu (NB) h1ul  li    pAt the top should be written “Arrange by Category or Date”, where one can click on Category or Date. The text for “Category” and “Date” should have their own CSS colour so they can be highlighted. p   li  liIf arranging by Category Each category is listed alphabetically in the left menu. Each post title is listed within each category, sorted by date. li  li    pA post can be shown in multiple categories if it is labelled with multiple categories. p   li  li    pIf arranging by Date, each Year of posting is listed from highest to lowest. Each post title is listed within each year when it was posted, and sorted by date. p   li  liClicking on a Category or Year should only expand or collapse this section in the menu, it should have no associated link. Only posts can be clicked. li  liHovering over a Category, Year or Post Title should highlight the box grey. li  li    pThe currently displayed post should be in Bold p   li  liBelow “Arrange by Category or Date” should be a list of post titles which are defined in the config file (priority posts). It should come before the list of categories or years. These post titles should be in line on the left with the list of categories. Separated from “Arrange by…” and the “categories years” by a horizontal line above and below. li ul", "url": "http://localhost:4000/2018/01/12/readme.html"},{ "title": "Markdownsource", "tags": "markdownsource", "text": "h1 id sources-for-markdownSources for markdown h1phttps  www.markdownguide.org cheat-sheet  pphttp  sangsoonam.github.io 2019 01 20 syntax-highlighting-in-jekyll.html ppStyle inspiration for the site layout pphttps  www.jetbrains.com help pycharm quick-start-guide.html ph1 id heading-oneHeading One h1pLorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae felis vitae leo ornare auctor. Aenean nec magna elementum, euismod lectus et, commodo magna. Nunc eget urna in nisl tempor rutrum a in augue. ppInteger eu aliquet turpis. Sed ipsum diam, fermentum non leo et, imperdiet faucibus enim. Aenean fringilla ornare tortor porta auctor. Maecenas placerat purus vitae mi pulvinar, eu ornare purus gravida. ph1 id heading-one-1Heading One h1h2 id heading-twoHeading Two h2pLorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae felis vitae leo ornare auctor. Aenean nec magna elementum, euismod lectus et, commodo magna. Nunc eget urna in nisl tempor rutrum a in augue. ph3 id heading-threeHeading Three h3pLorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae felis vitae leo ornare auctor. Aenean nec magna elementum, euismod lectus et, commodo magna. Nunc eget urna in nisl tempor rutrum a in augue. ph4 id heading-fourHeading Four h4h5 id heading-fiveHeading Five h5h6 id heading-sixHeading Six h6pUnordered list pul  liThis is a list 1 li  liThis is a stronglist strong 2, with some strongbold strong and some emitalics em. And some strongembold and italics em strong li  liThis is a list 3 li ulpOrdered list pol  liFirst item li  liSecond item li  liThird item li olpIndented list pul  liFirst item li  liSecond item li  liThird item    ul      liIndented item li      liIndented item li     ul   li  liFourth item li ulh3 id underlineUnderline h3pDoes it work? phr  pYes it does. ph3 id blockquotesBlockquotes h3blockquote  pBlockquotes are very handyThis line is part of the same quote. p blockquotepQuote break. pblockquote  pThis is a very long line that will still be quoted properly when it wraps. Oh boy let’s keep writing to make sure this is long enough to actually wrap for everyone. Oh, you can emput em strongMarkdown strong into a blockquote. p blockquoteul  liThe workspace synchronization will sync all your files, folders and settings automatically. This will allow you to fetch your workspace on any other device.    blockquote      pThis is a blockquoteTo start syncing your workspace, just sign in with Google in the menu. p     blockquote   li ulpBlockquotes can be nested pblockquote  pDorothy followed her through many of the beautiful rooms in her castle. p  blockquote    pThe Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood. p   blockquote blockquoteh3 id code-with-syntax-highlightingCode with syntax highlighting h3pThis is a test of code class language-plaintext highlighter-rougesome inline code code and whether it formats code class language-plaintext highlighter-rougecorrectly code. ppAnd now for blocks of code ppRuby code pdiv class language-ruby highlighter-rougediv class highlightpre class highlightcodespan class kdef span span class nfprint_hi spanspan class p( spanspan class nbname spanspan class p) span  span class nbputs span span class s2Hi,  spanspan class si#{ spanspan class nbname spanspan class si} spanspan class s2 spanspan class kend spanspan class nprint_hi spanspan class p( spanspan class s1'Tom' spanspan class p) spanspan class c1# &gt; prints 'Hi, Tom' to STDOUT. span code pre div divpPython code pdiv class language-python highlighter-rougediv class highlightpre class highlightcodespan class kprint spanspan class p( spanspan class sHello World spanspan class p) spanspan class kdef span span class nff spanspan class p( spanspan class nx spanspan class p) span    span class sa docstring span    span class kreturn span span class nx spanspan class o** spanspan class mi2 span code pre div divh3 id tablesTables h3pSmartyPants converts ASCII punctuation characters into “smart” typographic punctuation HTML entities. For example ptable  thead    tr      th  th      thASCII th      thHTML th     tr   thead  tbody    tr      tdSingle backticks td      tdcode class language-plaintext highlighter-rouge'Isn't this fun?' code td      td‘Isn’t this fun?’ td     tr    tr      tdQuotes td      tdcode class language-plaintext highlighter-rougeIsn't this fun? code td      td“Isn’t this fun?” td     tr    tr      tdDashes td      tdcode class language-plaintext highlighter-rouge-- is en-dash, --- is em-dash code td      td– is en-dash, — is em-dash td     tr   tbody tablepTry again ptable  thead    tr      thMarkdown th      thLess th      thPretty th     tr   thead  tbody    tr      tdemStill em td      tdcode class language-plaintext highlighter-rougerenders code td      tdstrongnicely strong td     tr    tr      td1 td      td2 td      td3 td     tr    tr      tdWhat td      tdis td      tdup td     tr    tr      tdWhat td      tdis td      tdup td     tr   tbody table", "url": "http://localhost:4000/2017/05/24/Markdownsource.html"},{ "title": "Markdown Here", "tags": "markdownoperagithub", "text": "pa href http  markdown-here.comstrongVisit the website. strong abr  a href https  chrome.google.com webstore detail elifhakcjgalahccnjkneoccemfahfoastrongGet it for Chrome. strong abr  a href https  addons.mozilla.org en-US firefox addon markdown-here strongGet it for Firefox. strong abr  a href https  s3.amazonaws.com markdown-here markdown-here.safariextzstrongGet it for Safari. strong abr  a href https  addons.mozilla.org en-US thunderbird addon markdown-here strongGet it for Thunderbird and Postbox. strong abr  a href https  addons.opera.com en extensions details markdown-here strongGet it for Opera. strong abr  a href https  groups.google.com forum ?fromgroups#!forum markdown-here strongDiscuss it and ask questions in the Google Group. strong abr   ppemMarkdown Here em is a Google Chrome, Firefox, Safari, Opera, and Thunderbird extension that lets you write emailsup† sup in Markdownsup‡ sup and render them before sending. It also supports syntax highlighting (just specify the language in a fenced code block). ppWriting email with code in it is pretty tedious. Writing Markdown with code in it is easy. I found myself writing email in Markdown in the Github in-browser editor, then copying the preview into email. This is a pretty absurd workflow, so I decided create a tool to write and render Markdown right in the email. ppTo discover what can be done with Markdown in emMarkdown Here em, check out the a href https  github.com adam-p markdown-here wiki Markdown-Here-CheatsheetMarkdown Here Cheatsheet a and the other a href https  github.com adam-p markdown-here wikiwiki pages a. ppsup† And Google Groups posts, and Blogger posts, and Evernote notes, and Wordpress posts! a href #compatibilitySee more a. supbr  sup‡ And TeX mathematical formulae! sup ppimg src https  raw.github.com adam-p markdown-here master store-assets markdown-here-image1.gimp.png alt screenshot of conversion   ph3 id table-of-contentsTable of Contents h3pstronga href #installation-instructionsInstallation Instructions a strongbr  stronga href #usage-instructionsUsage Instructions a strongbr  stronga href #troubleshootingTroubleshooting a strongbr  stronga href #compatibilityCompatibility a strongbr  stronga href #notes-and-miscellaneousNotes and Miscellaneous a strongbr  stronga href #building-the-extension-bundlesBuilding the Extension Bundles a strongbr  stronga href #next-stepsNext Steps, Credits, Feedback, License a strongbr   ph2 id installation-instructionsInstallation Instructions h2h3 id chromeChrome h3h4 id chrome-web-storeChrome Web Store h4pGo to the a href https  chrome.google.com webstore detail elifhakcjgalahccnjkneoccemfahfoaChrome Web Store page for emMarkdown Here em a and install normally. ppAfter installing, make sure to reload your webmail or restart Chrome! ph4 id manualdevelopmentManual Development h4ol  liClone this repo. li  liIn Chrome, open the Extensions settings. (Wrench button, Tools, Extensions.) li  liOn the Extensions settings page, click the “Developer Mode” checkbox. li  liClick the now-visible “Load unpacked extension…” button. Navigate to the directory where you cloned the repo, then the code class language-plaintext highlighter-rougesrc code directory under that. li  liThe emMarkdown Here em extension should now be visible in your extensions list. li  liReload your webmail page (and maybe application) before trying to convert an email. li olh3 id firefox-and-thunderbirdFirefox and Thunderbird h3h4 id mozilla-add-ons-siteMozilla Add-ons site h4pGo to the a href https  addons.mozilla.org en-US firefox addon markdown-here Firefox Add-ons page for emMarkdown Here em a and install normally. ppOr go to the “Tools &gt; Add-ons” menu and then search for “Markdown Here”. ppAfter installing, make sure to restart Firefox Thunderbird! ppstrongNote strong It takes up to a month for Mozilla to approve changes to the Firefox Thunderbird extension, so updates (features, fixes) will lag behind what is shown here. You can manually choose to install the newest version before it’s reviewed from the list of versions a href https  addons.mozilla.org en-US firefox addon markdown-here versions https  addons.mozilla.org en-US firefox addon markdown-here versions  a ph4 id manualdevelopment-1Manual Development h4ol  liClone this repo. li  liFollow the instructions in the MDN a href https  developer.mozilla.org en Setting_up_extension_development_environment“Setting up an extension development environment” a article. li olh3 id safariSafari h3pa href https  s3.amazonaws.com markdown-here markdown-here.safariextzDownload the extension directly. a When it has finished downloading, double click it to install. ph4 id preferencesPreferences h4pTo get to the Markdown Here preferences, open the Safari preferences and then go to the “Extensions” tab. Then click the “Click me to show Markdown Here options” box. ph3 id operaOpera h3pNote that emMarkdown Here em only works with Opera versions 16 and higher (i.e., the ones that are based on Chromium). ppGo to the a href https  addons.opera.com en extensions details markdown-here Opera Add-ons store page for emMarkdown Here em a and install normally. ppAfter installing, make sure to reload your webmail or restart Chrome! ph2 id usage-instructionsUsage Instructions h2pInstall it, and then… pol  liIn Chrome Safari Opera, emmake sure em you reload your web mail page before trying to use Markdown Here. li  liIn Chrome Firefox Safari Opera, log into your Gmail, Hotmail, or Yahoo account and start a new email. In Thunderbird, start a new message. li  liMake sure you’re using the rich editor.    ul      liIn Gmail, click the “Rich formatting” link, if it’s visible. li      liIn Thunderbird, make sure “Compose messages in HTML format” is enabled in your “Account Settings”, “Composition &amp; Addressing” pane. li     ul   li  li    pCompose an email in Markdown. For example p    pre**Hello** `world`.```javascriptalert('Hello syntax highlighting.');``` pre   li  liRight-click in the compose box and choose the “Markdown Toggle” item from the context menu. Or click the button that appears in your address bar. Or use the hotkey (kbdCTRL kbd+kbdALT kbd+kbdM kbd by default). li  liYou should see your email rendered correctly from Markdown into rich HTML. li  liSend your awesome email to everyone you know. It will appear to them the same way it looks to you. li olh3 id revert-to-markdownRevert to Markdown h3pAfter rendering your Markdown to pretty HTML, you can still get back to your original Markdown. Just right-click anywhere in the newly rendered Markdown and click “Markdown Toggle” – your email compose body will change back to the Markdown you had written. ppNote that any changes you make to the pretty HTML will be lost when you revert to Markdown. ppIn Gmail, you can also use the browser’s Undo command (kbdCTRL kbd+kbdZ kbd   kbdCMD kbd+kbdZ kbd, or from the Edit menu). Be warned that you might also lose the last few characters you entered. ph3 id repliesReplies h3pIn Gmail, Thunderbird, and Google Groups, you can use “Markdown Toggle” normally just write your reply (top, bottom, inline, wherever) and then convert. The original email that you’re replying to will be left alone. (Technically Existing code class language-plaintext highlighter-rougeblockquote code blocks will be left intact.) ppIn Hotmail and Yahoo (which don’t put the original in a code class language-plaintext highlighter-rougeblockquote code), and optionally in Gmail, Thunderbird, and Google Groups, you can ensure that only the part of the reply that you wrote gets converted by selecting what you want to convert and then clicking “Markdown Toggle” – see the next section. ph3 id selectionpiecemeal-conversionSelection Piecemeal Conversion h3pSometimes you don’t want to convert the entire email; sometimes your email isn’t entirely Markdown. To convert only part of the email, select the text (with your mouse or keyboard), right-click on it, and click the “Markdown Toggle” menu item. Your selection is magically rendered into pretty HTML. ppTo revert back to Markdown, just put your cursor anywhere in the block of converted text, right click, and click the “Markdown Toggle” menu item again. Now it’s magically back to the original Markdown. ppimg src https  raw.github.com adam-p markdown-here master store-assets markdown-here-image2.gimp.png alt screenshot of selection conversion   ph4 id things-to-know-about-convertingreverting-a-selectionThings to know about converting reverting a selection h4ul  li    pIf you select only part of a block of text, only that text will be converted. The converted block will be wrapped in a paragraph element, so the original line will be broken up. You probably don’t want to ever do this. p   li  li    pYou can select and revert multiple converted blocks at the same time. One upshot of this is that you can select your entire email, click “Markdown Toggle”, and all portions of it that you had converted will be reverted. p   li  li    pIf you don’t have anything selected when you click “Markdown Toggle”, emMarkdown Here em will check if there are converted blocks anywhere in the message and revert them. If there no converted blocks are found, it will convert the entire email. p   li ulh3 id optionsOptions h3pThe emMarkdown Here em Options page can be accessed via the Chrome, Firefox, Safari, or Thunderbird extensions list. The available options include pul  liStyling modifications for the rendered Markdown. li  liSyntax highlighting theme selection and modification. li  liTeX math formulae processing enabling and customization. li  liWhat the hotkey should be. li ulpFor Chrome and Firefox, any changes made in the emMarkdown Here em Options are automatically synchronized between your other installations of that browser (if you have the sync feature enabled in the browser). ppimg src https  raw.githubusercontent.com adam-p markdown-here master store-assets markdown-here-chrome-options-1.gimp.png alt screenshot of options   ph2 id troubleshootingTroubleshooting h2pSee the a href https  github.com adam-p markdown-here wiki TroubleshootingTroubleshooting wiki page a. ph2 id compatibilityCompatibility h2pSee the a href https  github.com adam-p markdown-here wiki CompatibilityCompatibility wiki page a. ph2 id notes-and-miscellaneousNotes and Miscellaneous h2ul  li    pemMarkdown Here em uses a href http  github.github.com github-flavored-markdown Github Flavored Markdown a, with the limitation that GFM special links are not supported (a href https  github.com adam-p markdown-here issues 11issue #11 a); nor will they be, as MDH is not Github-specific. p   li  li    pAvailable languages for syntax highlighting (and the way they should be written in the fenced code block) can be seen on the a href http  softwaremaniacs.org media soft highlight test.htmlhighlight.js demo page a. p   li  li    pImages embedded inline in your Markdown will be retained when you “Markdown Toggle”. Gmail allows you to put images inline in your email – this can be much easier than referencing an external image. p   li  liEmail signatures are automatically excluded from conversion. Specifically, anything after the semi-standard code class language-plaintext highlighter-rouge'-- ' code (note the trailing space) is left alone.    ul      liNote that Hotmail and Yahoo do emnot em automatically add the code class language-plaintext highlighter-rouge'-- ' code to signatures, so you have to add it yourself. li     ul   li  li    pThe “Markdown Toggle” menu item shows up for more element types than it can correctly render. This is intended to help people realize that they’re not using a rich editor. Otherwise they just don’t see the menu item and don’t know why. p   li  liStyling    ul      liThe use of browser-specific styles (-moz-, -webkit-) should be avoided. If used, they may not render correctly for people reading the email in a different browser from the one where the email was sent. li      liThe use of state-dependent styles (like code class language-plaintext highlighter-rougeahover code) don’t work because they don’t match at the time the styles are made explicit. (In email, styles must be explicitly applied to all elements – stylesheets get stripped.) li     ul   li  liFor more tweaky features, visit the a href https  github.com adam-p markdown-here wiki Tips-and-TricksTips and Tricks a section. li ulh2 id building-the-extension-bundlesBuilding the Extension Bundles h2div class language-plaintext highlighter-rougediv class highlightpre class highlightcodecd utilsnode build.js code pre div divh3 id chrome-and-opera-extensionChrome and Opera extension h3pCreate a file with a code class language-plaintext highlighter-rouge.zip code extension containing these files and directories pdiv class language-plaintext highlighter-rougediv class highlightpre class highlightcodemanifest.jsoncommon chrome  code pre div divh3 id firefoxthunderbird-extensionFirefox Thunderbird extension h3pCreate a file with a code class language-plaintext highlighter-rouge.xpi code extension containing these files and directories pdiv class language-plaintext highlighter-rougediv class highlightpre class highlightcodechrome.manifestinstall.rdfcommon firefox  code pre div divh3 id safari-extensionSafari extension h3pThe browser-specific code is located in the a href https  github.com adam-p markdown-here-safaricode class language-plaintext highlighter-rougemarkdown-here-safari code a project. ppUse the Safari Extension Builder. ph2 id next-stepsNext Steps h2pSee the a href https  github.com adam-p markdown-here issuesissues list a and the a href https  github.com adam-p markdown-here wiki Development-NotesNotes Wiki a. All ideas, bugs, plans, complaints, and dreams will end up in one of those two places. ppFeel free to create a feature request issue if what you want isn’t already there. If you’d prefer a less formal approach to floating an idea, post to the a href https  groups.google.com forum ?fromgroups #!forum markdown-here“markdown-here” Google Group a. ppIt also takes a fair bit of work to stay up-to-date with the latest changes in all the applications and web sites where Markdown Here works. ph2 id creditsCredits h2pemMarkdown Here em was coded on the shoulders of giants. pul  liMarkdown-to-HTML a href https  github.com chjj markedchjj   marked a li  liSyntax highlighting a href https  github.com isagalaev highlight.jsisagalaev   highlight.js a li  liHTML-to-text a href https  github.com mtrimpe jsHtmlToTextmtrimpe   jsHtmlToText a li ulh2 id feedbackFeedback h2pAll bugs, feature requests, pull requests, feedback, etc., are welcome. a href https  github.com adam-p markdown-here issuesCreate an issue a. Or a href https  groups.google.com forum ?fromgroups #!forum markdown-herepost to the “markdown-here” Google Group a. ph2 id licenseLicense h2h3 id codeCode h3pMIT License http  adampritchard.mit-license.org  or see a href https  github.com adam-p markdown-here blob master LICENSEthe code class language-plaintext highlighter-rougeLICENSE code file a. ph3 id logoLogo h3pCopyright 2015, a href http  protractor.ninja Austin Anderson a. Licensed to Markdown Here under the a href https  github.com adam-p markdown-here blob master CLA-individual.mdMDH contributor license agreement a. ph3 id other-imagesOther images h3pa href http  creativecommons.org licenses by 3.0 Creative Commons Attribution 3.0 Unported (CC BY 3.0) License a phr  pimg src https  raw.github.com adam-p markdown-here master store-assets dos-equis-MDH.jpg alt Dos Equis man says   p", "url": "http://localhost:4000/2017/05/24/Markdown-here.html"}
]};
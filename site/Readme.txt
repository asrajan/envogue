Description: This project builds a web page for a general retailer like amazon. It focuses on innovative frontend design

Lecture 1 Notes :

Web Page : The web page is located at 
http://asrajan.github.io/envogue/

Resources
Questions and Answers
   www.stackoverflow.com
   jsfiddle.net - To share and verify html/css
   css-tricks.com - Great resource for CSS stuff
   codepen.io - A good resource for sharing code

HTML
   www.caniuse.com - Tells you what features are supported by which browsers
   validator.w3.org - Validates your HTML - developed by w3c
   www.w3schools.com - Gives you browser statistics - What is popular and what is not

In HTML5, if a tag is allowed to have content then it is illegal to represent it using a self closing tag as seen in XML.

All, HTML tags must have atleast an opening tag. Some HTML tags like <br> and <hr> dont have any closing tag. 

The <head> tag contains meta data about the main content of the page. For example character encoding to be used while interpreting the page. 
The <head> tag must contain <title> tag else the HTML is invalid.

There are two types of elements in HLTM (actually 7 in HTML5), block level elements and inline elements. These map to flow content and phrasing content of HTM5 (roughly).

Semantic elements in HTML give meaning to the content. For example, they may signify some content as important and others not. These may help search engine rankings - this is a controversial assertion. Example <h1>, <h2>, <h3> specify heading and sub headings. Hence they provide some meaning to the content. The HTML5 page must respect the <hx> tags n that <h1> must convey the general topic of the page and each heading should provifr more specfic information.

header tag in body generally contains informtion like company logo, some tag line and maybe even some navigation.

h1 tag shouls always be present. section tags should generally be a parent of the article tags. There is also an aside tag tells us it is related to the main content. footer tag is at the bottom.

<ul></ul> and <li></li> allow us to represent lists in HTML4. ul stands for unordered list while li stands for list item.

Certain characters must always be escaped in character entities. This include <,>,& which are represented by &lt;, &gt;, &amp;. &nbsp stands for non breaking space. If a group of words is joined using this then browser will either move all the words to the next line or keep them together. Collectively &lt; &gt; &amp; &nbsp; &quot; etc. are called entity references. &copy stands for copyright.

<span> tag is used to span or left align words etc.

Links are specified by creating an a element (A Block element), with a href attribute. Relative URL links and Absolute URL links should be the same web applications. Relative is relative from the location of the page containing the links. <a> tag has an attribute called target="_blank" that makes it possible to open the link in a new tab of the browser. It is also possible to link to a section in a href using id attribute. This is also called fragment identifiers. 

When specifying images, it is best to also specify the height and width correctly so that the browser knows how much area to allocate because sometimes it can take long to load images.

CSS
CSS Provides rules for HTML elements and defines how they would be displayed. CSS rule consists of a selector that specifies that the rule is for a particular HTML tag. Example

p {
	color: blue;
	font-size: 20px;
	width: 200px;
}

If a style sheet is not specified then most browser have some default style that they use.

Selectors can be of Element, class and id selector types. Element types are straight forward. But why are class and id both present? Because fragment identfiers may be used for other purposes as well. 

It is also possible to group selectors and provide them with the same property value pairs.



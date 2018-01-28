---
layout: default
title: API Resources
---

APIs (Application Programming Interfaces) are a common way of making data available online. They're used to build software applications (like an application that checks Twitter for you), but they're also used to make data available to the public. Using APIs you can collect social media data, get historical weather data or search for open government data.

### API Access

APIs are usually accessed through a URL called an endpoint. For example, [https://api.fda.gov/food/event.json](https://api.fda.gov/food/event.json) requests the most recent adverse food reaction reported by the FDA. Most endpoints allow you to include parameters to specify the data you want. Requesting [https://api.fda.gov/food/event.json?products.name_brand:"Centrum"&limit=10](https://api.fda.gov/food/event.json?products.name_brand:"Centrum"&limit=10) asks for ten adverse reactions that include a product with Centrum in the title.

Some APIs, like the FDA's, are open to the public. Anybody can access this data using just a web browser. Other APIs require authentication. For example, [https://graph.facebook.com/me](https://graph.facebook.com/me) returns information about your Facebook account -- but only if you authenticate with credentials attached to your account. To access data from these restricted APIs, you'll usually have to write some code in a programming language like Python.

### API Data

Most APIs return data in JSON (Javascript Object Notation) format. JSON can be more difficult to work with than a tabular format like CSV or Excel because it allows more complicated data structures. For example, the following JSON includes data about multiple dishes and the ingredients that go into them:

<pre>
  <code class="language-JSON">
  {
		"dishes": [
			{
				"dish_name": "Hamburger",
				"ingredients": [
					{
						"name": "ground beef",
						"origin": "USA"					
					},
					{
						"name": "bread",
						"origin": "Canada"					
					}
				]
			},
			{
				"dish_name": "Banana Split",
				"ingredients": [
					{
						"name": "ice cream",
						"origin": "USA"					
					},
					{
						"name": "banana",
						"origin": "Panama"					
					}
				]				
			}
		]
	}
  </code>
</pre>

Tabular formats have trouble with multiple associations (like dishes that can have any number of ingredients), but JSON handles this without problems. However, this also makes JSON files more difficult to work with.

### Converting JSON to CSV

In order to work with JSON data in Excel or similar programs, it's necessary to convert the data. Without programming abilities, a good solution is to use [https://konklone.io/json/](https://konklone.io/json/). This utility attempts to convert JSON to CSV. It tends to work pretty well, but you'll need to carefully examine the tabular structure that results.

### Data Resources

A good list of public data APIs is available [here](https://github.com/toddmotto/public-apis).

[DMI-TCAT](https://github.com/digitalmethodsinitiative/dmi-tcat) is a good solution for collecting Twitter data. It requires minimal programming experience, but you do need a server to install it on (Amazon EC2 is a good option) and some experience working in Linux.

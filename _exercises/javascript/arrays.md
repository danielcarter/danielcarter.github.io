---
layout: default
title: JavaScript Arrays
---

For this introduction to JavaScript arrays, you'll be working in the console. To open the console in Chrome, choose View -> Developer -> JavaScript Console.

An __*array*__ is a sequence of values. We put square brackets around the values and commas between them. Run the code below in the console to create an array containing two strings and then print the array.

<pre>
  <code class="language-javascript">
  var fruit = ['apple', 'orange']
  fruit
  </code>
</pre>

The console tells you that the array has two items. If you expand the output by clicking the small arrow, you'll see that each value has a corresponding number and that the numbers start with zero. These numbers are called the __*array indexes*__.

We can access specific values in an array using these indexes. For example, to get the first value in the array called fruit, we could do the following:

<pre>
  <code class="language-javascript">
    fruit[0]
  </code>
</pre>

A variable name followed by square brackets and an index will return the value at that index. Notice that to get the first value, we use zero as the index.

__*In the console, log the second value in the array.*__

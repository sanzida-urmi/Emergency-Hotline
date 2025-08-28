1.	The difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll are written below.

getElementById : It returns only one element. Because the id is unique. if id doesn't exist , it returns null.

For example: const text = document.getElement ById(“myText”);


getElementsByClassName : It can return multiple elements. Because many elements can share the same class name. it returns an HTMLCollection, like an array but actually not a true array. 

For example const items = document.getElement ByClassName(“myItem”);

	
querySelector : It finds element by using a CSS selector. And it returns only the first matching element. 

For example const product = document.querySelector(“.item-list”);


querySelectorAll : It finds all elements that match a CSS selector. It returns a NodeList, that is more flexiable than HTMLCollection. It supports foreach. 

For example const products = document.querySelectorAll(“.item-list”);
	
	




 2. To create and insert a new element into the DOM, we follow these steps: Use document.createElement() to create new element. Add text or content using innerText or innerHtml. Find the parent element where we want to insert it using methosd like getElementById or querySelector. Finally insert the new element into the DOM using appendChild() or insertBefore() .

	



3. Event Bubbling is a concept in the DOM where an event triggered on a child element propagates upword to its parent. when an event occurs on an element , it is first handed by the target element . the same event is propagate to the parent element, then the grand parent and continous until it reaches the document root. 





4. Event Delegation is a technique where a single event listener is attached to a parent element instead of multiple child elements. the event bubbles up from the child to the parent. the parent handles it using event.target to detect which child triggered the event. It is useful because : Better performance Less memory usage Faster execution Dynamic elements handling Reduce repetitive code 





5. preventDefault() : it is used to stop the browser's default behavior.
 Example : preventing a link from navigating or a form from submitting.

stopPropagation() : it is used to stop the event from bubbling or capturing to parent / ancestor elements.
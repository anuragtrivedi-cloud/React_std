// There are two primary ways to handle imports and exports: Named and Default.

// 1. Default Exports
// Use a default export when a file only exports one main thing (like a single React component).

// The Syntax
// Exporting: You use the export default keywords. You can only have one default export per file.

// Importing: You can name the imported module whatever you want, and you do not use curly braces {}.


// 2. Named Exports
// Use named exports when you want to export multiple things from a single file (like a collection of utility functions, constants, or smaller sub-components).

// The Syntax
// Exporting: You add the export keyword directly before the variable, function, or component declaration.

// Importing: You must use curly braces {} and match the exact name of the exported item.



// 1. What is the Real DOM?
// The DOM (Document Object Model) is a structural, tree-like representation of your HTML document.

// Whenever a webpage loads, the browser creates this tree so JavaScript can access and manipulate the layout, styles, and content.

// The Problem: Updating the Real DOM is slow. If you have a list of 1,000 items and you change just one, traditional JavaScript operations often cause the browser to recalculate the layout, repaint the screen, and re-render large chunks of the UI.

//  2. What is the Virtual DOM?
// The Virtual DOM (VDOM) is a lightweight, simplified copy of the Real DOM kept entirely in memory as a JavaScript object.

// It has all the same properties as the Real DOM, but it lacks the power to directly change what you see on the screen.

// Because it is just a JavaScript object living in memory, creating, reading, and modifying the Virtual DOM is incredibly fast.
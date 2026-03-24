# https://jjuarez00.github.io/N320/Assignment-3/index.html
# Assignment: SnapGrid — Social Media Profile Dashboard

## Scenario
You are a junior front-end developer at SnapGrid, a social media startup. The design team has handed you a fully styled profile page — but nothing is wired up yet. Your job is to write all the JavaScript that makes the page interactive: a theme switcher, a follow button with a live counter, a post composer, a like system, and a hashtag filter.

The provided index.html file contains the complete page structure and all the element IDs and class names you need. You will write all your code in a new file called solutions.js, which is already linked at the bottom of the HTML.

---

## Instructions
To complete this assignment, follow these steps:
- Download the provided index.html and styles.css files and place them in the same folder on your computer.
- Create a new JavaScript file named solutions.js in the same folder — the HTML already links to it
- Complete all 5 tasks using JavaScript DOM manipulation and event handling:
- ❌ DO NOT use inline onclick="" attributes in the HTML
- ❌ DO NOT modify index.html or styles.css
- ✅ DO USE addEventListener() for all interactions
- ✅ DO USE boolean state variables to track toggle states
- ✅ DO USE named functions where multiple tasks share functionality
- Test your work by opening index.html in a browser after each task
- Submit Github Link 

# *The tasks overview is in the index.html file which is located at the bottom.*

## Technical Requirements
- Event Handling: All interactions must use addEventListener() — no inline HTML event attributes.
- State Variables: Use boolean variables to track toggle states throughout the application.
- DOM Manipulation: Use createElement(), classList, textContent, innerHTML, and setAttribute() appropriately.
- Named Functions: Task 4's attachLikeListeners() must be a named function so Task 3 can call it after adding new posts.
- Data Attributes: Use getAttribute('data-*') to read element metadata for filtering and state tracking.
- Code Quality: Use meaningful variable names, proper indentation, and comments explaining your logic.

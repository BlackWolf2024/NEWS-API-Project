# NEWS-API-Project
A responsive, real-time news aggregator built with Vanilla JS and the GNews API. 
Features dynamic content rendering, asynchronous data fetching, and a clean, 
card-based UI.

World Pulse works by acting as a bridge between the user and the global news
database. When the page loads or a user type in the search bar, a JavaScript Event 
Listener triggers an asynchronous request to the GNews API. The application securely
sends your unique API Key to the server, which responds with a package of raw data 
(JSON). JavaScript then "translates" this data and uses Template Literals to 
dynamically build and inject HTML cards into the webpage. Finally, the CSS Grid layout 
organizes these cards into a clean, responsive feed for the user to read.

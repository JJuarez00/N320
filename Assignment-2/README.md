# Assignment: Advanced Array Operations - Music Analytics

## Scenario:
You are a Media and Web Data Analyst at StreamBeats, a popular music streaming platform.  
The platform has collected comprehensive user listening data across various artists, genres, and songs. Your job is to analyze this data to identify trends, categorize artists, evaluate genre performance, and curate premium playlists based on sophisticated quality metrics.

The dataset includes 30 songs with the following properties: title, artist, genre, streams, rating, and duration. You will use JavaScript's advanced array methods to extract meaningful insights from this data.

---

## Instructions:
- Complete all 5 tasks using only array methods (map, filter, reduce)  
- ❌ DO NOT use traditional for/while loops for data manipulation  
- ✅ DO USE functional array methods and method chaining  
- ✅ You may use basic loops for sliding window calculations where necessary  
- Display your results by updating the innerHTML of the answer boxes  
- Link your solutions.js file at the bottom of the HTML file  
- Test your code by opening index.html in a web browser  
- Verify that all 5 answer boxes display the correct output  

---

## Tasks Overview:
You will complete 5 analytical tasks of increasing complexity:

### Task 1: Multi-Tier Artist Categorization
Calculate total streams for each artist and categorize them into performance tiers (Platinum, Gold, Silver) based on their total stream counts.  
Requires using reduce() for aggregation and map() for transformation.

### Task 2: Genre Performance Metrics
Analyze genre-level performance by calculating average streams, average rating, song count, and a custom engagement score for each genre.  
Demonstrates advanced reduce() usage with complex calculations.

### Task 3: Peak Performance Window Analysis
Identify the consecutive 4-song window with the highest combined engagement score using a sliding window algorithm.  
Tests understanding of sequential data analysis and optimization.

### Task 4: Cross-Genre Artist Diversity Analysis
Find artists with songs in 3+ genres, analyze their performance across genres, and identify their best-performing genre.  
Requires multi-dimensional data grouping and filtering.

### Task 5: Premium Playlist Curation Algorithm
Create an optimized playlist by filtering songs based on multiple criteria, calculating quality scores, sorting, and selecting the top 10 tracks.  
Demonstrates method chaining and multi-criteria filtering.

---

## Technical Requirements:
- **Array Methods:** Must use map(), filter(), and/or reduce() for data transformations  
- **Method Chaining:** Demonstrate ability to chain array methods where appropriate  
- **Data Structures:** Return properly formatted objects and arrays as specified in each task  
- **Calculations:** Round decimal values appropriately (engagement scores to 2 decimals, averages as specified)  
- **Output:** Display results using JSON.stringify(result, null, 2) for readable formatting  
- **Code Quality:** Use meaningful variable names, proper indentation, and comments explaining complex logic  

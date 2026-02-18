/* Notes:

reduce() loops through an array one item at a time and builds an object.

map() loops through an array and returns a new array of 
the same length, with each item transformed in some way.

filter() – loops through an array and returns a new 
shorter array, keeping only items that pass a condition.

accumulator ("acc") – a variable that holds the ongoing result of the reduce() function.
*/


// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //


/* Task 1: Multi-Tier Artist Categorization
Objective: Categorize artists into performance tiers based on their total streams.

Requirements:
• First, calculate the total streams for each artist (sum of all their songs)
• Then categorize each artist into tiers:
   - Platinum: Total streams ≥ 10,000,000
   - Gold: Total streams ≥ 5,000,000 and < 10,000,000
   - Silver: Total streams < 5,000,000

    Output Format: An array of objects with { artist, totalStreams, tier }

    Hint: Use reduce() to sum streams, then map() to add tier information.
*/

const artistTotal = listeningData.reduce((acc, song) => {
    
    // Check if the artist already exists.
    if (acc[song.artist]) {
        // If it does, add the current song's streams to the total.
        acc[song.artist] += song.streams;
    } else {
        // If it doesn't, create a new entry for the artist with the current song's streams.
        acc[song.artist] = song.streams;
    }

    return acc;
}, {}); // initial value, its an empty object to hold artist totals.

// I have to use Object.entries() because artistTotal is an object and not an array.
// Object.entries() converts the object to array, then I used map() to add tiers.
const aristTeirs = Object.entries(artistTotal)
    .map(([artist, totalStreams]) => {
        let tier;

        // If the total streams are greater than or equal to 10 million, the artist is Platinum.
        if (totalStreams >= 10000000) {
            tier = "Platinum";
        
        // If the total streams are greater than or equal to 5 million but less than 10 million, the artist is Gold.
        } else if (totalStreams >= 5000000) {
            tier = "Gold";
        } else {

        // If the total streams are less than 5 million, the artist is Silver.
            tier = "Silver";
        }

        return { artist, totalStreams, tier };
    }).sort((a, b) => b.totalStreams - a.totalStreams); // Sort by total streams in descending order.

// Add Task 1 Result the HTML page.
document.getElementById("task1Answer").innerHTML = JSON.stringify(aristTeirs, null, 2);


// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //


/*
Task 2: Genre Performance Metrics with Engagement Score

Objective: Calculate comprehensive performance metrics for each genre with a custom engagement score.

Requirements:
• Group songs by genre
• For each genre, calculate:
   - Average streams
   - Average rating
   - Song count
   - Engagement Score = (avgStreams / 1,000,000) × avgRating

   Output Format: An object where keys are genres and values contain the metrics

   Hint: Use reduce() to group and calculate, round engagement score to 2 decimals
*/


const genreMetricsSum = listeningData.reduce((acc, song) => {
    
    // Check if the genre already exists.
    if (acc[song.genre]) {
        // If it does, add the current song's streams to the total.
        acc[song.genre].totalStreams += song.streams;
        acc[song.genre].totalRating += song.rating;
        acc[song.genre].songCount++;
    } else {
        // If it doesn't, create a new entry for the genre with the current song's data.
        acc[song.genre] = {
            totalStreams: song.streams,
            totalRating: song.rating,
            songCount: 1
        };
    }

    // Calculate average streams and rating, and engagement score for the genre.
    acc[song.genre].avgStreams = acc[song.genre].totalStreams / acc[song.genre].songCount;
    acc[song.genre].avgRating = acc[song.genre].totalRating / acc[song.genre].songCount;
    acc[song.genre].engagementScore = parseFloat(((acc[song.genre].avgStreams / 1000000) * acc[song.genre].avgRating).toFixed(2));

    return acc;
}, {});

// Display the data in the required format for this task.
const task2Result = Object.entries(genreMetricsSum).reduce((acc, [genre, data]) => {
        acc[genre] = {
            avgStreams: data.avgStreams,
            avgRating: data.avgRating,
            songCount: data.songCount,
            engagementScore: data.engagementScore
        };
        return acc;
    }, {});

// Add Task 2 Result to the HTML page.
document.getElementById("task2Answer").innerHTML = JSON.stringify(task2Result, null, 2);


// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //


/*
Task 3: Peak Performance Window Analysis

Objective: Identify consecutive 4-song windows with the highest combined engagement.

Requirements:
• Calculate a sliding window of 4 consecutive songs
• For each window, sum: (streams / 1000) + (rating × 500)
• Find the window with the maximum total score
• Return an object with: { startIndex, endIndex, songs, totalScore }
   - songs should be an array of the 4 song titles in that window

Hint: Loop through array indices, calculate score for each 4-song window
*/

const windowAnalysis = listeningData.reduce((acc, song, index) => {

    // Ensure we only consider windows of 4 songs.
    if (index <= listeningData.length - 4) {
        const window = listeningData.slice(index, index + 4);
        
        // Calculate the score for this window.
        const windowScore = window.reduce((sum, song) => {
            return sum + (song.streams / 1000) + (song.rating * 500);
        }, 0);

        // Check if this window has the best score so far.
        if (windowScore > acc.bestScore) {
            acc.bestScore = windowScore;
            acc.bestStart = index;
        }
    }

    return acc;
}, { bestScore: 0, bestStart: 0 });

// Prepare the result object for Task 3.
const task3Result = {
    startIndex: windowAnalysis.bestStart,
    endIndex:   windowAnalysis.bestStart + 3,
    songs:      listeningData.slice(windowAnalysis.bestStart, windowAnalysis.bestStart + 4).map(song => song.title),
    totalScore: windowAnalysis.bestScore
};

// Add Task 3 Result to the HTML page.
document.getElementById("task3Answer").innerHTML = JSON.stringify(task3Result, null, 2);


// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //


/* Task 4: Peak Performance Window Analysis
Objective: Identify which artists have the most genre diversity and their performance across genres.

Requirements:
• Find artists who have songs in 3 or more different genres
• For each qualifying artist, calculate:
   - List of unique genres they produce
   - Average streams per genre
   - Their best-performing genre (highest average streams)

   Output Format: Array of objects with { artist, genres, genreCount, bestGenre, bestGenreAvgStreams }

    Hint: Use reduce() to group by artist and genre, then filter and transform
*/

const artistGenres = listeningData.reduce((acc, song) => {

    // Check if the artist already exists in the accumulator.
    if (acc[song.artist]) {
    // If it does, check if the genre is already listed for this artist.
    if (!acc[song.artist].includes(song.genre)) {
        acc[song.artist].push(song.genre);
    }} else {
        // If it doesn't, create a new entry for the artist with the current song's genre.
        acc[song.artist] = [song.genre];
    }
    return acc;

}, {});

// Filter artists with 3 or more genres.
const task4Result = Object.entries(artistGenres)
.filter(([artist, genres]) => genres.length >= 3)
.map(([artist, genres]) => {

    // Find average streams per genre for this artist
    const genreAvgs = listeningData
        .filter(song => song.artist === artist)
        .reduce((acc, song) => {

            // Check if the genre already exists for this artist.
            // If it does, add the current song's streams to the total and increment count.
            if (acc[song.genre]) {
                acc[song.genre].totalStreams += song.streams;
                acc[song.genre].count++;
            } else {
                // If it doesn't, create a new entry for the genre with the current song's streams and count.
                acc[song.genre] = { totalStreams: song.streams, count: 1 };
            }

            return acc;
        }, {});

    // Find the best genre using reduce()
    const bestGenre = Object.entries(genreAvgs).reduce((best, [genre, data]) => {
            const avg = data.totalStreams / data.count;
            return avg > best.avg ? { genre, avg } : best;
        }, { genre: null, avg: 0 });

    // Return the required information for this task.
    return {
        artist,
        genres,
        genreCount: genres.length,
        bestGenre: bestGenre.genre,
        bestGenreAvgStreams: bestGenre.avg
    };
})

// Add Task 4 Result to the console the HTML page.
document.getElementById("task4Answer").innerHTML = JSON.stringify(task4Result, null, 2);


// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //


/* Task 5: Premium Playlist Curation Algorithm

Objective: Create an optimized playlist based on multiple quality criteria.
Requirements:
• Filter songs that meet ALL these criteria:
   - Rating ≥ 4.3
   - Streams ≥ 2,000,000
   - Duration between 180-240 seconds (3-4 minutes)
• Sort the filtered songs by a Quality Score (descending):
   - Quality Score = (rating × 2) + (streams / 500000)
• Return the top 10 songs

Output Format: Array of objects with { title, artist, qualityScore }

Hint: Chain filter(), map() to add qualityScore, sort(), and slice()
*/


const task5Result = listeningData
.filter(song => song.rating >= 4.3 && song.streams >= 2000000 && song.duration >= 180 && song.duration <= 240)
.map(song => ({
    title: song.title,
    artist: song.artist,
    qualityScore: (song.rating * 2) + (song.streams / 500000)
}))
.sort((a, b) => b.qualityScore - a.qualityScore) // Sort by quality score in descending order.
.slice(0, 10); // Only keep the top 10 songs.


// Add Task 5 Result to the HTML page.
document.getElementById("task5Answer").innerHTML = JSON.stringify(task5Result, null, 2);

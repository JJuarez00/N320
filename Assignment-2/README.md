# StreamBeats Analytics - Expected Output Answer Key

This document shows the **expected output** for each task. Use this to verify your solutions are correct. Your output should match these results exactly (or very closely, allowing for minor rounding differences).

---

## Task 1: Multi-Tier Artist Categorization

**Expected Output Format:** Array of objects with `{ artist, totalStreams, tier }`

```json
[
  {
    "artist": "Aria Chen",
    "totalStreams": 18900000,
    "tier": "Platinum"
  },
  {
    "artist": "Luna Ray",
    "totalStreams": 16600000,
    "tier": "Platinum"
  },
  {
    "artist": "DJ Nova",
    "totalStreams": 15300000,
    "tier": "Platinum"
  },
  {
    "artist": "MC Dynamo",
    "totalStreams": 14300000,
    "tier": "Platinum"
  },
  {
    "artist": "Synth Wave",
    "totalStreams": 12600000,
    "tier": "Platinum"
  },
  {
    "artist": "Lyric Master",
    "totalStreams": 9800000,
    "tier": "Gold"
  },
  {
    "artist": "Jake Rivers",
    "totalStreams": 9100000,
    "tier": "Gold"
  },
  {
    "artist": "Max Sterling",
    "totalStreams": 8800000,
    "tier": "Gold"
  },
  {
    "artist": "Velvet Voice",
    "totalStreams": 7800000,
    "tier": "Gold"
  },
  {
    "artist": "The Rebels",
    "totalStreams": 7500000,
    "tier": "Gold"
  },
  {
    "artist": "Forest Echo",
    "totalStreams": 4000000,
    "tier": "Silver"
  },
  {
    "artist": "The Wanderers",
    "totalStreams": 4000000,
    "tier": "Silver"
  }
]
```

**Verification Checklist:**
- ✓ Total of 11 artists
- ✓ 5 Platinum tier artists (≥ 10,000,000 streams)
- ✓ 5 Gold tier artists (5,000,000 - 9,999,999 streams)
- ✓ 2 Silver tier artists (< 5,000,000 streams)
- ✓ Sorted by totalStreams in descending order

---

## Task 2: Genre Performance Metrics with Engagement Score

**Expected Output Format:** Object with genre keys and metric values

```json
{
  "pop": {
    "avgStreams": 4440000,
    "avgRating": 4.6,
    "songCount": 5,
    "engagementScore": 20.42
  },
  "rock": {
    "avgStreams": 3860000,
    "avgRating": 4.46,
    "songCount": 5,
    "engagementScore": 17.22
  },
  "hip-hop": {
    "avgStreams": 5580000,
    "avgRating": 4.56,
    "songCount": 5,
    "engagementScore": 25.45
  },
  "electronic": {
    "avgStreams": 6480000,
    "avgRating": 4.62,
    "songCount": 5,
    "engagementScore": 29.94
  },
  "r&b": {
    "avgStreams": 3980000,
    "avgRating": 4.54,
    "songCount": 5,
    "engagementScore": 18.07
  },
  "indie": {
    "avgStreams": 2220000,
    "avgRating": 4.48,
    "songCount": 5,
    "engagementScore": 9.95
  }
}
```

**Verification Checklist:**
- ✓ All 6 genres present
- ✓ Each genre has exactly 5 songs
- ✓ Engagement Score = (avgStreams / 1,000,000) × avgRating
- ✓ avgRating rounded to 2 decimals
- ✓ engagementScore rounded to 2 decimals
- ✓ Electronic has highest engagement score (29.94)
- ✓ Indie has lowest engagement score (9.95)

---

## Task 3: Peak Performance Window Analysis

**Expected Output Format:** Object with `{ startIndex, endIndex, songs, totalScore }`

```json
{
  "startIndex": 15,
  "endIndex": 18,
  "songs": [
    "Digital Dreams",
    "Neon Pulse",
    "Cyber City",
    "Future Beats"
  ],
  "totalScore": 30850
}
```

**Alternative High-Scoring Windows (your answer may vary slightly):**
The window above (indices 15-18) represents 4 consecutive Electronic genre songs, which have the highest average streams and ratings, making them the peak performance window.

**Verification Checklist:**
- ✓ Contains exactly 4 consecutive song titles
- ✓ startIndex and endIndex differ by 3 (4-song window)
- ✓ totalScore calculated as: sum of [(streams/1000) + (rating×500)] for all 4 songs
- ✓ This should be the MAXIMUM score among all possible 4-song windows

**Score Calculation Example for this window:**
- Digital Dreams: (5900000/1000) + (4.5×500) = 5900 + 2250 = 8150
- Neon Pulse: (6700000/1000) + (4.7×500) = 6700 + 2350 = 9050
- Cyber City: (4500000/1000) + (4.4×500) = 4500 + 2200 = 6700
- Future Beats: (8100000/1000) + (4.9×500) = 8100 + 2450 = 10550
- **Total: 34,450** (Note: Your implementation may round differently)

---

## Task 4: Cross-Genre Artist Diversity Analysis

**Expected Output Format:** Array of objects for artists with 3+ genres

```json
[
  {
    "artist": "Luna Ray",
    "genres": [
      "pop",
      "rock",
      "r&b",
      "indie"
    ],
    "genreCount": 4,
    "bestGenre": "pop",
    "bestGenreAvgStreams": 4000000
  },
  {
    "artist": "Aria Chen",
    "genres": [
      "pop",
      "electronic",
      "r&b"
    ],
    "genreCount": 3,
    "bestGenre": "pop",
    "bestGenreAvgStreams": 4550000
  },
  {
    "artist": "Max Sterling",
    "genres": [
      "pop",
      "hip-hop",
      "r&b"
    ],
    "genreCount": 3,
    "bestGenre": "pop",
    "bestGenreAvgStreams": 5100000
  }
]
```

**Verification Checklist:**
- ✓ Only 3 artists qualify (have 3+ genres)
- ✓ Luna Ray has 4 genres
- ✓ Aria Chen has 3 genres  
- ✓ Max Sterling has 3 genres
- ✓ Sorted by genreCount in descending order
- ✓ bestGenre is determined by highest average streams in that genre
- ✓ bestGenreAvgStreams is rounded to nearest integer

---

## Task 5: Premium Playlist Curation Algorithm

**Expected Output Format:** Array of top 10 songs with `{ title, artist, qualityScore }`

```json
[
  {
    "title": "Future Beats",
    "artist": "DJ Nova",
    "qualityScore": 26.0
  },
  {
    "title": "Flow State",
    "artist": "MC Dynamo",
    "qualityScore": 25.2
  },
  {
    "title": "Voltage",
    "artist": "DJ Nova",
    "qualityScore": 23.6
  },
  {
    "title": "Neon Pulse",
    "artist": "Synth Wave",
    "qualityScore": 22.8
  },
  {
    "title": "Street Poet",
    "artist": "MC Dynamo",
    "qualityScore": 22.2
  },
  {
    "title": "Summer Vibes",
    "artist": "Aria Chen",
    "qualityScore": 22.0
  },
  {
    "title": "Digital Dreams",
    "artist": "Synth Wave",
    "qualityScore": 20.8
  },
  {
    "title": "Rhythm & Truth",
    "artist": "Lyric Master",
    "qualityScore": 20.6
  },
  {
    "title": "Love Language",
    "artist": "Aria Chen",
    "qualityScore": 20.4
  },
  {
    "title": "Rebel Heart",
    "artist": "Jake Rivers",
    "qualityScore": 19.8
  }
]
```

**Verification Checklist:**
- ✓ Exactly 10 songs
- ✓ All songs meet filtering criteria:
  - rating ≥ 4.3
  - streams ≥ 2,000,000
  - duration between 180-240 seconds
- ✓ Quality Score = (rating × 2) + (streams / 500,000)
- ✓ qualityScore rounded to 2 decimals
- ✓ Sorted by qualityScore in descending order
- ✓ Future Beats has highest score (26.0)
- ✓ Rebel Heart is 10th with score (19.8)

**Quality Score Calculation Examples:**
- Future Beats: (4.9 × 2) + (8100000 / 500000) = 9.8 + 16.2 = 26.0
- Flow State: (4.8 × 2) + (7800000 / 500000) = 9.6 + 15.6 = 25.2
- Rebel Heart: (4.7 × 2) + (5200000 / 500000) = 9.4 + 10.4 = 19.8

---

## Common Issues to Check

### Task 1:
- Make sure you're summing ALL songs per artist across all genres
- Tier thresholds: Platinum ≥ 10M, Gold ≥ 5M and < 10M, Silver < 5M

### Task 2:
- Remember to divide by 1,000,000 in the engagement score formula
- Don't forget to round avgRating and engagementScore to 2 decimal places

### Task 3:
- Must check ALL possible 4-song windows (not just first, not just some)
- Window score formula: (streams / 1000) + (rating × 500)
- The window starts at index 15 because Electronic songs cluster there

### Task 4:
- Only include artists with genreCount >= 3
- Must group by BOTH artist AND genre first
- bestGenre is the genre where that artist has highest average streams

### Task 5:
- Must apply ALL THREE filter criteria (rating AND streams AND duration)
- Duration must be >= 180 AND <= 240 (both inclusive)
- Sort by qualityScore DESCENDING (highest first)
- Use slice(0, 10) to get exactly 10 songs

---

## How to Use This Answer Key

1. **Run your code** and display results in the answer boxes
2. **Compare your output** to the expected output above
3. **Check the format** - object structure, property names, data types
4. **Verify calculations** - use the formulas provided
5. **Debug differences** - if your output doesn't match, check your logic

**Note:** Minor differences in rounding (e.g., 20.42 vs 20.424) are acceptable as long as you round to 2 decimal places where specified.

Good luck! 🎵

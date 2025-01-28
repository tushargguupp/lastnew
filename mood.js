// Process mood data from URL
const queryParams = new URLSearchParams(window.location.search);
const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
const moodData = days.map(day => parseInt(queryParams.get(day)) || 0);

// Chart.js: Plot Mood Data
const ctx = document.getElementById('mood-chart').getContext('2d');
new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        datasets: [{
            label: 'Mood Score',
            data: moodData,
            borderColor: '#2d98da',
            fill: false,
            tension: 0.4,
        }]
    },
    options: {
        scales: {
            y: { min: 0, max: 10 }
        }
    }
});

// AI Analysis
const averageMood = moodData.reduce((a, b) => a + b, 0) / moodData.length;
document.getElementById('average-mood').textContent = averageMood.toFixed(2);

// Generate Suggestions
const suggestionsDiv = document.getElementById('suggestions');
if (averageMood < 5) {
    suggestionsDiv.innerHTML = `
        <p>It looks like you've had a challenging week. Here are some resources to help:</p>
        <ul>
            <li><a href="https://www.headspace.com" target="_blank">Headspace - Meditation</a></li>
            <li><a href="https://www.betterhelp.com" target="_blank">BetterHelp - Therapy</a></li>
        </ul>
    `;
} else {
    suggestionsDiv.innerHTML = '<p>Great job maintaining a good mood! Keep it up!</p>';
}

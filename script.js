document.getElementById('student-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const degree = document.getElementById('degree').value;
    const cgpa = document.getElementById('cgpa').value;
    const ielts = document.getElementById('ielts').value;
    const country = document.getElementById('country').value;

    const universityList = document.getElementById('university-list');
    universityList.innerHTML = '';

    // Simulated university data
    const universities = [
        { name: 'Harvard University', rank: 1, country: 'usa', link: 'https://www.harvard.edu/' },
        { name: 'University of Oxford', rank: 2, country: 'uk', link: 'https://www.ox.ac.uk/' },
        { name: 'University of Toronto', rank: 3, country: 'canada', link: 'https://www.utoronto.ca/' },
        { name: 'University of Sydney', rank: 4, country: 'australia', link: 'https://www.sydney.edu.au/' },
        { name: 'Technical University of Munich', rank: 5, country: 'germany', link: 'https://www.tum.de/' },
    ];

    // Filter universities based on user input
    const filteredUniversities = universities.filter(uni => uni.country === country);

    // Display the filtered universities
    filteredUniversities.forEach(uni => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<strong>${uni.name}</strong> - Rank: ${uni.rank} <a href="${uni.link}" target="_blank">Admission Link</a>`;
        universityList.appendChild(listItem);
    });

    if (filteredUniversities.length === 0) {
        const noResults = document.createElement('li');
        noResults.textContent = 'No universities found matching your criteria.';
        universityList.appendChild(noResults);
    }
});

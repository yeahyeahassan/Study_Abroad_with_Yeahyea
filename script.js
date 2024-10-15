document.getElementById('student-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const degree = document.getElementById('degree').value;
    const cgpa = document.getElementById('cgpa').value;
    const ielts = document.getElementById('ielts').value;
    const country = document.getElementById('country').value;

    const universityList = document.getElementById('university-list');
    const userNameElement = document.getElementById('user-name');
    universityList.innerHTML = '';

    // Show user's name
    userNameElement.textContent = name;

    // Simulated university data with scholarships
    const universities = [
        { 
            name: 'Harvard University', 
            rank: 1, 
            country: 'usa', 
            link: 'https://www.harvard.edu/', 
            facilities: ['Job Placement Assistance', 'Alumni Networking'], 
            scholarships: ['Harvard Financial Aid', 'International Scholars Program']
        },
        { 
            name: 'University of Oxford', 
            rank: 2, 
            country: 'uk', 
            link: 'https://www.ox.ac.uk/', 
            facilities: ['Internship Programs', 'On-Campus Housing'], 
            scholarships: ['Rhodes Scholarships', 'Reach Oxford Scholarships']
        },
        { 
            name: 'University of Toronto', 
            rank: 3, 
            country: 'canada', 
            link: 'https://www.utoronto.ca/', 
            facilities: ['Visa Guidance', 'Part-Time Job Support'], 
            scholarships: ['Lester B. Pearson International Scholarships', 'U of T Scholar Awards']
        },
        { 
            name: 'University of Sydney', 
            rank: 4, 
            country: 'australia', 
            link: 'https://www.sydney.edu.au/', 
            facilities: ['Student Counselling', 'Scholarship Opportunities'], 
            scholarships: ['Sydney Scholars Awards', 'Vice-Chancellor’s International Scholarships']
        },
        { 
            name: 'Technical University of Munich', 
            rank: 5, 
            country: 'germany', 
            link: 'https://www.tum.de/', 
            facilities: ['Work Permit Assistance', 'Language Courses'], 
            scholarships: ['Deutschlandstipendium', 'EIT Digital Master School Scholarships']
        },
    ];

    // Filter universities based on user input
    const filteredUniversities = universities.filter(uni => uni.country === country);

    // Display the filtered universities with post-abroad facilities and scholarships
    filteredUniversities.forEach(uni => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <strong>${uni.name}</strong> - Rank: ${uni.rank} <a href="${uni.link}" target="_blank">Admission Link</a>
            <p>Post-Abroad Facilities: ${uni.facilities.join(', ')}</p>
            <p><strong>Scholarship Offers:</strong> ${uni.scholarships.join(', ')}</p>
        `;
        universityList.appendChild(listItem);
    });

    if (filteredUniversities.length === 0) {
        const noResults = document.createElement('li');
        noResults.textContent = 'No universities found matching your criteria.';
        universityList.appendChild(noResults);
    }
});

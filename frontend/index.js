function moduleProject3() {
  // 👉 TASK 1 - Write a `buildNav` component that returns a nav
  function buildNav(links) {
    const container = document.createElement('nav');
    links.forEach(link => {
      const a = document.createElement('a');
      a.href = link.href;
      a.textContent = link.textContent;
      a.title = link.title;
      container.appendChild(a);
    });
    return container;
  }

  // ❗ DOM creation using your `buildNav` component (do not change):
  document.querySelector('header').appendChild(buildNav([
    { href: 'https://www.example.com', textContent: 'Home', title: 'Go to the home page' },
    { href: 'https://www.example.com/about', textContent: 'About', title: 'Learn more about our company' },
    { href: 'https://www.example.com/services', textContent: 'Services', title: 'View our available services' },
    { href: 'https://www.example.com/blog', textContent: 'Blog', title: 'Read our latest blog posts' },
    { href: 'https://www.example.com/contact', textContent: 'Contact', title: 'Get in touch with us' },
  ]));

  // 👉 TASK 2A - Write a `buildLearnerCard` component that returns a card
  function buildLearnerCard(learner, languages) {
    const card = document.createElement('div');
    card.classList.add('learner-card');

    const namep = document.createElement('p');
    namep.textContent = learner.fullName;

    const idElement = document.createElement('p');
    idElement.textContent = `Learner ID: ${learner.id}`;

    const dobp = document.createElement('p');
    dobp.textContent = `Date of Birth: ${learner.dateOfBirth}`;

    const favLangp = document.createElement('p');
    const favLanguage = languages.find(lang => lang.id === learner.favLanguage);
    favLangp.textContent = `Favorite Language: ${favLanguage.name}`;

    [namep, idElement, dobp, favLangp].forEach(p => {
      card.appendChild(p);
    });

    card.addEventListener('click', evt => {
      document.querySelectorAll('.learner-card').forEach(card => {
        card.classList.remove('active');
      });
      card.classList.add('active');
    });

    return card;
  }

  {
    // 👉 TASK 2B - Use the two variables below to make learner Cards, and put them in the DOM
    let languages = [
      { id: 37, name: 'JavaScript', creator: 'Brendan Eich', year: 1995 },
      { id: 82, name: 'Python', creator: 'Guido van Rossum', year: 1991 },
      { id: 12, name: 'Java', creator: 'James Gosling', year: 1995 },
      { id: 53, name: 'C#', creator: 'Microsoft Corporation', year: 2000 },
      { id: 91, name: 'Ruby', creator: 'Yukihiro Matsumoto', year: 1995 }
    ];
    let learners = [
      { id: 24, fullName: 'Kenneth Fisher', dateOfBirth: '1990-01-01', favLanguage: 82 },
      { id: 53, fullName: 'Jess Williams', dateOfBirth: '1985-05-10', favLanguage: 37 },
      { id: 72, fullName: 'Brandon Nguyen', dateOfBirth: '1992-09-15', favLanguage: 53 },
      { id: 41, fullName: 'Sabah Beydoun', dateOfBirth: '1988-03-25', favLanguage: 91 },
      { id: 17, fullName: 'Daniel Castillo', dateOfBirth: '1995-11-05', favLanguage: 12 }
    ];

    const section = document.querySelector('section');
    learners.forEach(learner => {
      const card = buildLearnerCard(learner, languages);
      section.appendChild(card);
    });
  }

  // 👉 TASK 3 - Write a `buildFooter` component that returns a footer
  function buildFooter(footerData) {
    const footer = document.createElement('footer');
    const companyInfoDiv = document.createElement('div');
    companyInfoDiv.classList.add('company-info');

    const companyNameP = document.createElement('p');
    companyNameP.textContent = footerData.companyName;
    companyInfoDiv.appendChild(companyNameP);

    const addressP = document.createElement('p');
    addressP.textContent = footerData.address;
    companyInfoDiv.appendChild(addressP);

    const contactEmailP = document.createElement('p');
    contactEmailP.innerHTML = `Email: <a href="mailto:${footerData.contactEmail}">${footerData.contactEmail}</a>`;
    companyInfoDiv.appendChild(contactEmailP);

    const socialMediaDiv = document.createElement('div');
    socialMediaDiv.classList.add('social-media');

    for (const socialMedia in footerData.socialMedia) {
      const socialMediaP = document.createElement('p');
      socialMediaP.innerHTML = `<a href="${footerData.socialMedia[socialMedia]}">${socialMedia}</a>`;
      socialMediaDiv.appendChild(socialMediaP);
    }

    const currentYear = new Date().getFullYear();
    const copyright = document.createElement('div');
    copyright.textContent = `© ${footerData.companyName.toUpperCase()} ${currentYear}`;

    footer.appendChild(companyInfoDiv);
    footer.appendChild(socialMediaDiv);
    footer.appendChild(copyright);

    return footer;
  }

  // ❗ DOM creation using your `buildFooter` component (do not change):
  document.body.appendChild(buildFooter({
    companyName: 'Bloom Institute of Technology',
    address: '123 Main Street, City, Country',
    contactEmail: 'info@example.com',
    socialMedia: {
      twitter: 'https://twitter.com/example',
      facebook: 'https://www.facebook.com/example',
      instagram: 'https://www.instagram.com/example',
    },
  }));

  // 👉 TASK 4 - Clicking on the section should deactivate the active card
  document.addEventListener('click', evt => {
    if (!evt.target.closest('.learner-card')) {
      document.querySelectorAll('.learner-card').forEach(card => {
        card.classList.remove('active');
      });
    }
  });
}
 
// ❗ DO NOT CHANGE THIS CODE
// ❗ DO NOT CHANGE THIS CODE
// ❗ DO NOT CHANGE THIS CODE
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject3 };
else moduleProject3();
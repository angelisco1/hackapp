// Si no existen hacakthons en la BD, los inserta automaticamente.

if (Hackathons.find().count() === 0){
  Hackathons.insert({
    name: 'Psd2 Hackathon',
    description: 'Bla bla bla bla bla bla...',
    place: 'Campus Madrid',
    initDate: '24/06/2016',
    finishDate: '25/06/2016',
    hashtag: '#psd2hackathon',
    urlYoutube: null,
    urlFlickr: null,
    bases: '...',
    organizations: [],
    cost: 0,
    isPublic: true,
    numWinners: 3,
    prizes: [],
    meetupEventId: null,
    teams: [],
    created_at: new Date()
  });

  Hackathons.insert({
    name: 'SpaceHack',
    description: 'Hackathon for refugees...',
    place: 'Berlin',
    initDate: '24/06/2016',
    finishDate: '24/06/2016',
    hashtag: '#spacehack',
    urlYoutube: null,
    urlFlickr: null,
    bases: '...',
    organizations: [],
    cost: 0,
    isPublic: true,
    numWinners: 3,
    prizes: [],
    meetupEventId: null,
    teams: [],
    created_at: new Date()
  });
  Hackathons.insert({
    name: 'GameWeekend',
    description: 'Hackathon organized by R. Franco',
    place: 'Campus Madrid',
    initDate: '01/07/2016',
    finishDate: '02/07/2016',
    hashtag: '#gameweekend',
    urlYoutube: null,
    urlFlickr: null,
    bases: '...',
    organizations: [],
    cost: 0,
    isPublic: true,
    numWinners: 3,
    prizes: [],
    meetupEventId: null,
    teams: [],
    created_at: new Date()
  });
}

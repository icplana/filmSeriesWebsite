

// export const publicKey = '64bc6e8e5c2d0d5f537330315aadd14d' // primary
// export const publicKey = '0ec666bb5e85dedad67ad37878bac82b' //secondary, just localhost
// export const publicKey = '9b0e1d29ba802105a092dae19041c563' //secondary, just localhost
export const publicKey = 'fa13619919a9d567c3343e6c8ea6b724' //secondary, just localhost

export const baseUrl = 'https://gateway.marvel.com/'

export const searchTypes = [ 
    { singular:'comic', plural: 'comics', searchParam: 'titleStartsWith', title: 'Spider-man', form: 'comic'  },
    { singular:'character', plural: 'characters', searchParam: 'name', name: 'Hulk', form: 'character' },
    { singular:'creator', plural: 'creators', searchParam: 'nameStartsWith', name: 'Balak', form: 'creators' },
    { singular:'event', plural: 'events', searchParam: 'nameStartsWith', name: 'Age of Apocalypse', form: 'event' },
    { singular:'serie', plural: 'series', searchParam: 'titleStartsWith', title: '2020 Iron Age', form: 'serie' },
    { singular:'story', plural: 'stories', searchParam: 'events', name: 'Age of Apocalypse', form: 'stories by character (id)' },
]


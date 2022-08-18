/* eslint-disable no-plusplus */
// NOTE: replace 'NvPY9M9MzFTARQ6M816YAzDJxZ72' with your Firebase auth user id (can be taken from Firebase)
export function seedDatabase(firebase) {
  const users = [
    {
      userId: 'Y2hDOHe2KYa8wtVsifRnwNwfhh63',
      username: 'abdullah',
      fullName: 'Abdullah Taş',
      emailAddress: 'abdullah@gmail.com',
      following: ['2'],
      followers: ['2', '3', '4'],
      dateCreated: Date.now()
    },
    {
      userId: '2',
      username: 'mustafa',
      fullName: 'Mustafa Kemal',
      emailAddress: 'mustafa@gmail.com',
      following: [],
      followers: ['Y2hDOHe2KYa8wtVsifRnwNwfhh63'],
      dateCreated: Date.now()
    },
    {
      userId: '3',
      username: 'murat',
      fullName: 'Murat Sahilli',
      emailAddress: 'murat@gmail.com',
      following: [],
      followers: ['Y2hDOHe2KYa8wtVsifRnwNwfhh63'],
      dateCreated: Date.now()
    },
    {
      userId: '4',
      username: 'deha',
      fullName: 'Deha Köse',
      emailAddress: 'deha@gmail.com',
      following: [],
      followers: ['Y2hDOHe2KYa8wtVsifRnwNwfhh63'],
      dateCreated: Date.now()
    }
  ];

  // eslint-disable-next-line prefer-const
  for (let k = 0; k < users.length; k++) {
    firebase.firestore().collection('users').add(users[k]);
  }

  // eslint-disable-next-line prefer-const
  for (let i = 1; i <= 5; ++i) {
    firebase
      .firestore()
      .collection('photos')
      .add({
        photoId: i,
        userId: '2',
        imageSrc: `/images/users/mustafa/${i}.jpg`,
        caption: 'Muhteşem bir manzara',
        likes: [],
        comments: [
          {
            displayName: 'murat',
            comment: 'En yakın zamanda ben de geleceğim.'
          },
          {
            displayName: 'abdullah',
            comment: 'Favori mekanım.'
          }
        ],
        userLatitude: '40.7128°',
        userLongitude: '74.0060°',
        dateCreated: Date.now()
      });
  }
}
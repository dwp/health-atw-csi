/*

Provide default values for user session data. These are automatically added
via the `autoStoreData` middleware. Values will only be added to the
session if a value doesn't already exist. This may be useful for testing
journeys where users are returning or logging in to an existing application.

============================================================================

Example usage:

"full-name": "Sarah Philips",

"options-chosen": [ "foo", "bar" ]

============================================================================

*/

module.exports = {

  // Insert values here

  'unallocated-cases': [{
    'name': 'Dereck Smith',
    'specialism': '',
    'type': 'Renewal',
    'priority' : "true",
    'date': '28 June 2018 - 13:23'
  }, {
    'name': 'Maximillia Erdman',
    'specialism': 'Pan disability',
    'type': 'New application',
      'priority' : false,
    'date': '28 June 2018 - 14:23'
  }, {
    'name': 'Sonya Corkery',
    'specialism': '',
    'type': 'Renewal',
          'priority' : false,
    'date': '28 June 2018 - 15:23'
  }, {
    'name': 'Adaline Mann',
    'specialism': 'Pan disability',
    'type': 'New application',
          'priority' : false,
    'date': '28 June 2018 - 16:23'
  }, {
    'name': 'Arlo Spinka',
    'specialism': 'Pan disability',
    'type': 'New application',
          'priority' : false,
    'date': '28 June 2018 - 17:23'
  }, {
    'name': 'Norma Heller',
    'specialism': 'Pan disability',
    'type': 'New application',
          'priority' : false,
    'date': '28 June 2018 - 18:23'
  }, {
    'name': 'Lavonne Smitham',
    'specialism': 'Pan disability',
    'type': 'New application',
          'priority' : false,
    'date': '28 June 2018 - 19:23'
  }, {
    'name': 'Royce Ryan',
    'specialism': '',
    'type': 'Renewal',
          'priority' : false,
    'date': '28 June 2018 - 20:23'
  }, {
    'name': 'Vernice Trantow',
    'specialism': 'Pan disability',
    'type': 'New application',
          'priority' : false,
    'date': '28 June 2018 - 21:23'
  }, {
    'name': 'Thomas King',
    'specialism': 'Pan disability',
    'type': 'New application',
          'priority' : false,
    'date': '28 June 2018 - 22:23'
  }],

  'csi-info': [{
    'name': 'Thomas Brown',
    'dob-day': '12',
    'dob-month': 'June',
    'dob-year': '1985',
    'address-line-one': '14 Kings Road',
    'address-line-two': '',
    'address-town': 'Birmingham',
    'address-county': 'Midlands',
    'address-postcode': 'B1 1EQ',
    'interview-date-day': '12',
    'interview-date-month': 'December',
    'interview-date-year': '2019',
    'full-name': 'Tesco',
    'company-address-line-one': '101 Kent Way',
    'company-address-line-two': '',
    'company-address-town': 'Birmingham',
    'company-address-county': 'Midlands',
    'company-address-postcode': 'B4 8RT',
    'duration': '1 hour',
    'interviewer-name': 'Terry Gibson',
    'interviewer-contact-preference': 'Email',
    'support-worker-pay': '100',
    'contact-by-email': 'email@email.com',
    'contact-by-phone': '07192838482'

  }, {
    'name': 'Sam Andrews',
    'specialism': 'CSI',
    'type': 'CSI',
    'disc' : true,
          'priority' : "true",
    'date': '14 October 2018 - 08:22'
  } , {
    'name': 'Alex Smith',
    'specialism': 'Pan disability',
    'type': 'Renewal',
    'disc' : true,
          'priority' : "false",
    'date': '28 June 2018 - 12:23'
  }],

  'your-cases': [{
    'name': 'Oliver Reed',
    'specialism': 'Pan disability',
    'type': 'CSI',
          'priority' : "true",
    'date': '28 June 2018 - 12:23'
  }, {
    'name': 'Sam Andrews',
    'specialism': 'CSI',
    'type': 'CSI',
    'disc' : true,
          'priority' : "true",
    'date': '14 October 2018 - 08:22'
  } , {
    'name': 'Alex Smith',
    'specialism': 'Pan disability',
    'type': 'Renewal',
    'disc' : true,
          'priority' : "false",
    'date': '28 June 2018 - 12:23'
  }


],

  'advisers': [
    'John Goldsmith',
    'Sarah Andrews',
    'Martin Armitage',
    'Clémence Fabre',
    'Elisse Farcens',
    'Christoph Fernandez',
    'Julie Guichard',
    'Colin Julien',
    'Théo Langlois',
    'Capucine Michel',
    'Sarah Micheals',
    'Celise Mutton',
    'Richard Oulton',
    'Ed Oxley',
    'Colin Partinigton',
    'Brigit Pardeux',
    'Lionel Phelps',
    'Anne Pinkton',
    'Lisa Punchton',
    'Paul Rice'
  ],

  'specialisms': [
    'Self-employed',
    'Hidden impairments',
    'Large employer',
    'Deaf',
    'Visually impaired',
    'Pan disability'
  ]
}

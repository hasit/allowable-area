export const footnotes = [
  {
    letter: 'a',
    text: 'See Chapters 4 and 5 for specific exceptions to the allowable height',
  },
  {
    letter: 'b',
    text: 'See Section 903.2 for the minimum thresholds for protection by an automatic sprinker system installed in accordance with Section 903.3.1.3',
  },
  {
    letter: 'c',
    text: 'New Group H occupancies are required to be protected by an automatic sprinker system in accordance with Section 903.2.5',
  },
  {
    letter: 'd',
    text: 'The Baseline Allowable value is only for use in evaluation of existing building height in accordance with the International Existing Building Code',
  },
  {
    letter: 'e',
    text: 'New Group I-1 and I-3 occupancies are required to be protected by an automatic sprinkler system in accordance with Section 903.2.6. For new Group I-1 occupancies Condition 1, see Exception 1 of Section 903.2.6',
  },
  {
    letter: 'f',
    text: 'New and existing Group I-2 occupancies are reuiqred to be protected by an automatic sprinkler system in accordance with Section 903.2.6 and Section 1103.5 of the International Fire Code',
  },
  {
    letter: 'g',
    text: 'For Group I-4 occupancies, see Exceptions 2 and 3 of Section 903.2.6',
  },
  {
    letter: 'h',
    text: 'New Group R occupancies are required to be protected by an automatic sprinkler system in accordance with Section 903.2.8',
  },
];

export const sprinklersOptions = [
  {key: 'no', text: 'No', value: 'no'},
  {key: 'yes', text: 'Yes', value: 'yes'},
  {key: 'unknown', text: 'Unknown', value: 'unknown'},
];

export const occupancyGroupsOptions = [
  {key: 'a1', text: 'A-1', value: 'a1'},
  {key: 'a2', text: 'A-2', value: 'a2'},
  {key: 'a3', text: 'A-3', value: 'a3'},
  {key: 'a4', text: 'A-4', value: 'a4'},
  {key: 'a5', text: 'A-5', value: 'a5'},
  {key: 'b', text: 'B', value: 'b'},
  {key: 'e', text: 'E', value: 'e'},
  {key: 'f1', text: 'F-1', value: 'f1'},
  {key: 'f2', text: 'F-2', value: 'f2'},
  {key: 'h1', text: 'H-1', value: 'h1'},
  {key: 'h2', text: 'H-2', value: 'h2'},
  {key: 'h3', text: 'H-3', value: 'h3'},
  {key: 'h4', text: 'H-4', value: 'h4'},
  {key: 'h5', text: 'H-5', value: 'h5'},
  {key: 'i11', text: 'I-1 Condition 1', value: 'i11'},
  {key: 'i12', text: 'I-1 Condition 2', value: 'i12'},
  {key: 'i2', text: 'I-2', value: 'i2'},
  {key: 'i3', text: 'I-3', value: 'i3'},
  {key: 'i4', text: 'I-4', value: 'i4'},
  {key: 'm', text: 'M', value: 'm'},
  {key: 'r1', text: 'R-1', value: 'r1'},
  {key: 'r2', text: 'R-2', value: 'r2'},
  {key: 'r3', text: 'R-3', value: 'r3'},
  {key: 'r4', text: 'R-4', value: 'r4'},
  {key: 's1', text: 'S-1', value: 's1'},
  {key: 's2', text: 'S-2', value: 's2'},
  {key: 'u', text: 'U', value: 'u'},
];

export const heightAboveGradePlane = [
  {
    occupancyClassification: [
      'a1',
      'a2',
      'a3',
      'a4',
      'a5',
      'b',
      'e',
      'f1',
      'f2',
      'm',
      's1',
      's2',
      'u',
    ],
    typeOfConstruction: [
      {
        sprinklerSystem: 'NS',
        typeI: {A: 'UL', B: 160},
        typeII: {A: 65, B: 55},
        typeIII: {A: 65, B: 55},
        typeIV: {HT: 65},
        typeV: {A: 50, B: 40},
      },
      {
        sprinklerSystem: 'S',
        typeI: {A: 'UL', B: 180},
        typeII: {A: 85, B: 75},
        typeIII: {A: 85, B: 75},
        typeIV: {HT: 85},
        typeV: {A: 70, B: 60},
      },
    ],
  },
  {
    occupancyClassification: ['h1', 'h2', 'h3', 'h5'],
    typeOfConstruction: [
      {
        sprinklerSystem: 'NS',
        typeI: {A: 'UL', B: 160},
        typeII: {A: 65, B: 55},
        typeIII: {A: 65, B: 55},
        typeIV: {HT: 65},
        typeV: {A: 50, B: 40},
      },
      {
        sprinklerSystem: 'S',
        typeI: {A: 'UL', B: 160},
        typeII: {A: 65, B: 55},
        typeIII: {A: 65, B: 55},
        typeIV: {HT: 65},
        typeV: {A: 50, B: 40},
      },
    ],
  },
  {
    occupancyClassification: ['h4'],
    typeOfConstruction: [
      {
        sprinklerSystem: 'NS',
        typeI: {A: 'UL', B: 160},
        typeII: {A: 65, B: 55},
        typeIII: {A: 65, B: 55},
        typeIV: {HT: 65},
        typeV: {A: 50, B: 40},
      },
      {
        sprinklerSystem: 'S',
        typeI: {A: 'UL', B: 180},
        typeII: {A: 85, B: 75},
        typeIII: {A: 85, B: 75},
        typeIV: {HT: 85},
        typeV: {A: 70, B: 60},
      },
    ],
  },
  {
    occupancyClassification: ['i11', 'i3'],
    typeOfConstruction: [
      {
        sprinklerSystem: 'NS',
        typeI: {A: 'UL', B: 160},
        typeII: {A: 65, B: 55},
        typeIII: {A: 65, B: 55},
        typeIV: {HT: 65},
        typeV: {A: 50, B: 40},
      },
      {
        sprinklerSystem: 'S',
        typeI: {A: 'UL', B: 180},
        typeII: {A: 85, B: 75},
        typeIII: {A: 85, B: 75},
        typeIV: {HT: 85},
        typeV: {A: 70, B: 60},
      },
    ],
  },
  {
    occupancyClassification: ['i12', 'i2'],
    typeOfConstruction: [
      {
        sprinklerSystem: 'NS',
        typeI: {A: 'UL', B: 160},
        typeII: {A: 65, B: 55},
        typeIII: {A: 65, B: 55},
        typeIV: {HT: 65},
        typeV: {A: 50, B: 40},
      },
      {
        sprinklerSystem: 'S',
        typeI: {A: 'UL', B: 180},
        typeII: {A: 85, B: 55},
        typeIII: {A: 65, B: 55},
        typeIV: {HT: 65},
        typeV: {A: 50, B: 40},
      },
    ],
  },
  {
    occupancyClassification: ['i4'],
    typeOfConstruction: [
      {
        sprinklerSystem: 'NS',
        typeI: {A: 'UL', B: 160},
        typeII: {A: 65, B: 55},
        typeIII: {A: 65, B: 55},
        typeIV: {HT: 65},
        typeV: {A: 50, B: 40},
      },
      {
        sprinklerSystem: 'S',
        typeI: {A: 'UL', B: 180},
        typeII: {A: 85, B: 75},
        typeIII: {A: 85, B: 75},
        typeIV: {HT: 85},
        typeV: {A: 70, B: 60},
      },
    ],
  },
  {
    occupancyClassification: ['r1', 'r2', 'r3', 'r4'],
    typeOfConstruction: [
      {
        sprinklerSystem: 'NS',
        typeI: {A: 'UL', B: 160},
        typeII: {A: 65, B: 55},
        typeIII: {A: 65, B: 55},
        typeIV: {HT: 65},
        typeV: {A: 50, B: 40},
      },
      {
        sprinklerSystem: 'S13D',
        typeI: {A: 60, B: 60},
        typeII: {A: 60, B: 60},
        typeIII: {A: 60, B: 60},
        typeIV: {HT: 60},
        typeV: {A: 50, B: 40},
      },
      {
        sprinklerSystem: 'S13R',
        typeI: {A: 60, B: 60},
        typeII: {A: 60, B: 60},
        typeIII: {A: 60, B: 60},
        typeIV: {HT: 60},
        typeV: {A: 60, B: 60},
      },
      {
        sprinklerSystem: 'S',
        typeI: {A: 'UL', B: 180},
        typeII: {A: 85, B: 75},
        typeIII: {A: 85, B: 75},
        typeIV: {HT: 85},
        typeV: {A: 70, B: 60},
      },
    ],
  },
];

export const storiesAboveGradePlane = [
  {
    occupancyClassification: ['a1'],
    typeOfConstruction: [
      {
        sprinklerSystem: 'NS',
        typeI: {A: 'UL', B: 5},
        typeII: {A: 3, B: 2},
        typeIII: {A: 3, B: 2},
        typeIV: {HT: 3},
        typeV: {A: 2, B: 1},
      },
      {
        sprinklerSystem: 'S',
        typeI: {A: 'UL', B: 6},
        typeII: {A: 4, B: 3},
        typeIII: {A: 4, B: 3},
        typeIV: {HT: 4},
        typeV: {A: 3, B: 2},
      },
    ],
  },
  {
    occupancyClassification: ['a2', 'a3', 'a4'],
    typeOfConstruction: [
      {
        sprinklerSystem: 'NS',
        typeI: {A: 'UL', B: 11},
        typeII: {A: 3, B: 2},
        typeIII: {A: 3, B: 2},
        typeIV: {HT: 3},
        typeV: {A: 2, B: 1},
      },
      {
        sprinklerSystem: 'S',
        typeI: {A: 'UL', B: 12},
        typeII: {A: 4, B: 3},
        typeIII: {A: 4, B: 3},
        typeIV: {HT: 4},
        typeV: {A: 3, B: 2},
      },
    ],
  },
  {
    occupancyClassification: ['a5'],
    typeOfConstruction: [
      {
        sprinklerSystem: 'NS',
        typeI: {A: 'UL', B: 'UL'},
        typeII: {A: 'UL', B: 'UL'},
        typeIII: {A: 'UL', B: 'UL'},
        typeIV: {HT: 'UL'},
        typeV: {A: 'UL', B: 'UL'},
      },
      {
        sprinklerSystem: 'S',
        typeI: {A: 'UL', B: 'UL'},
        typeII: {A: 'UL', B: 'UL'},
        typeIII: {A: 'UL', B: 'UL'},
        typeIV: {HT: 'UL'},
        typeV: {A: 'UL', B: 'UL'},
      },
    ],
  },
  {
    occupancyClassification: ['b'],
    typeOfConstruction: [
      {
        sprinklerSystem: 'NS',
        typeI: {A: 'UL', B: 11},
        typeII: {A: 5, B: 3},
        typeIII: {A: 5, B: 3},
        typeIV: {HT: 5},
        typeV: {A: 3, B: 2},
      },
      {
        sprinklerSystem: 'S',
        typeI: {A: 'UL', B: 12},
        typeII: {A: 6, B: 4},
        typeIII: {A: 6, B: 4},
        typeIV: {HT: 6},
        typeV: {A: 4, B: 3},
      },
    ],
  },
  {
    occupancyClassification: ['e'],
    typeOfConstruction: [
      {
        sprinklerSystem: 'NS',
        typeI: {A: 'UL', B: 5},
        typeII: {A: 5, B: 3},
        typeIII: {A: 3, B: 2},
        typeIV: {HT: 3},
        typeV: {A: 1, B: 1},
      },
      {
        sprinklerSystem: 'S',
        typeI: {A: 'UL', B: 6},
        typeII: {A: 4, B: 3},
        typeIII: {A: 4, B: 3},
        typeIV: {HT: 4},
        typeV: {A: 2, B: 2},
      },
    ],
  },
  {
    occupancyClassification: ['f1'],
    typeOfConstruction: [
      {
        sprinklerSystem: 'NS',
        typeI: {A: 'UL', B: 11},
        typeII: {A: 4, B: 2},
        typeIII: {A: 3, B: 2},
        typeIV: {HT: 4},
        typeV: {A: 2, B: 1},
      },
      {
        sprinklerSystem: 'S',
        typeI: {A: 'UL', B: 12},
        typeII: {A: 5, B: 3},
        typeIII: {A: 4, B: 3},
        typeIV: {HT: 5},
        typeV: {A: 3, B: 2},
      },
    ],
  },
  {
    occupancyClassification: ['f2'],
    typeOfConstruction: [
      {
        sprinklerSystem: 'NS',
        typeI: {A: 'UL', B: 11},
        typeII: {A: 5, B: 3},
        typeIII: {A: 4, B: 3},
        typeIV: {HT: 5},
        typeV: {A: 3, B: 2},
      },
      {
        sprinklerSystem: 'S',
        typeI: {A: 'UL', B: 12},
        typeII: {A: 6, B: 4},
        typeIII: {A: 5, B: 4},
        typeIV: {HT: 6},
        typeV: {A: 4, B: 3},
      },
    ],
  },
  {
    occupancyClassification: ['h1'],
    typeOfConstruction: [
      {
        sprinklerSystem: 'NS',
        typeI: {A: 1, B: 1},
        typeII: {A: 1, B: 1},
        typeIII: {A: 1, B: 1},
        typeIV: {HT: 1},
        typeV: {A: 1, B: 'NP'},
      },
      {
        sprinklerSystem: 'S',
        typeI: {A: 1, B: 1},
        typeII: {A: 1, B: 1},
        typeIII: {A: 1, B: 1},
        typeIV: {HT: 1},
        typeV: {A: 1, B: 'NP'},
      },
    ],
  },
  {
    occupancyClassification: ['h2'],
    typeOfConstruction: [
      {
        sprinklerSystem: 'NS',
        typeI: {A: 'UL', B: 3},
        typeII: {A: 2, B: 1},
        typeIII: {A: 2, B: 1},
        typeIV: {HT: 2},
        typeV: {A: 1, B: 1},
      },
      {
        sprinklerSystem: 'S',
        typeI: {A: 'UL', B: 3},
        typeII: {A: 2, B: 1},
        typeIII: {A: 2, B: 1},
        typeIV: {HT: 2},
        typeV: {A: 1, B: 1},
      },
    ],
  },
  {
    occupancyClassification: ['h3'],
    typeOfConstruction: [
      {
        sprinklerSystem: 'NS',
        typeI: {A: 'UL', B: 6},
        typeII: {A: 4, B: 2},
        typeIII: {A: 4, B: 2},
        typeIV: {HT: 4},
        typeV: {A: 2, B: 1},
      },
      {
        sprinklerSystem: 'S',
        typeI: {A: 'UL', B: 6},
        typeII: {A: 4, B: 2},
        typeIII: {A: 4, B: 2},
        typeIV: {HT: 4},
        typeV: {A: 2, B: 1},
      },
    ],
  },
  {
    occupancyClassification: ['h4'],
    typeOfConstruction: [
      {
        sprinklerSystem: 'NS',
        typeI: {A: 'UL', B: 7},
        typeII: {A: 5, B: 3},
        typeIII: {A: 5, B: 3},
        typeIV: {HT: 5},
        typeV: {A: 3, B: 2},
      },
      {
        sprinklerSystem: 'S',
        typeI: {A: 'UL', B: 8},
        typeII: {A: 6, B: 4},
        typeIII: {A: 6, B: 4},
        typeIV: {HT: 6},
        typeV: {A: 4, B: 3},
      },
    ],
  },
  {
    occupancyClassification: ['h5'],
    typeOfConstruction: [
      {
        sprinklerSystem: 'NS',
        typeI: {A: 4, B: 4},
        typeII: {A: 3, B: 3},
        typeIII: {A: 3, B: 3},
        typeIV: {HT: 3},
        typeV: {A: 3, B: 2},
      },
      {
        sprinklerSystem: 'S',
        typeI: {A: 4, B: 4},
        typeII: {A: 3, B: 3},
        typeIII: {A: 3, B: 3},
        typeIV: {HT: 3},
        typeV: {A: 3, B: 2},
      },
    ],
  },
  {
    occupancyClassification: ['i11'],
    typeOfConstruction: [
      {
        sprinklerSystem: 'NS',
        typeI: {A: 'UL', B: 9},
        typeII: {A: 4, B: 3},
        typeIII: {A: 4, B: 3},
        typeIV: {HT: 4},
        typeV: {A: 3, B: 2},
      },
      {
        sprinklerSystem: 'S',
        typeI: {A: 'UL', B: 10},
        typeII: {A: 5, B: 4},
        typeIII: {A: 5, B: 4},
        typeIV: {HT: 5},
        typeV: {A: 4, B: 3},
      },
    ],
  },
  {
    occupancyClassification: ['i12'],
    typeOfConstruction: [
      {
        sprinklerSystem: 'NS',
        typeI: {A: 'UL', B: 9},
        typeII: {A: 4, B: 3},
        typeIII: {A: 4, B: 3},
        typeIV: {HT: 4},
        typeV: {A: 3, B: 2},
      },
      {
        sprinklerSystem: 'S',
        typeI: {A: 'UL', B: 10},
        typeII: {A: 5, B: 3},
        typeIII: {A: 4, B: 3},
        typeIV: {HT: 4},
        typeV: {A: 3, B: 2},
      },
    ],
  },
  {
    occupancyClassification: ['i2'],
    typeOfConstruction: [
      {
        sprinklerSystem: 'NS',
        typeI: {A: 'UL', B: 4},
        typeII: {A: 2, B: 1},
        typeIII: {A: 1, B: 'NP'},
        typeIV: {HT: 1},
        typeV: {A: 1, B: 'NP'},
      },
      {
        sprinklerSystem: 'S',
        typeI: {A: 'UL', B: 5},
        typeII: {A: 3, B: 1},
        typeIII: {A: 1, B: 'NP'},
        typeIV: {HT: 1},
        typeV: {A: 1, B: 'NP'},
      },
    ],
  },
  {
    occupancyClassification: ['i3'],
    typeOfConstruction: [
      {
        sprinklerSystem: 'NS',
        typeI: {A: 'UL', B: 4},
        typeII: {A: 2, B: 1},
        typeIII: {A: 2, B: 1},
        typeIV: {HT: 2},
        typeV: {A: 2, B: 1},
      },
      {
        sprinklerSystem: 'S',
        typeI: {A: 'UL', B: 5},
        typeII: {A: 3, B: 2},
        typeIII: {A: 3, B: 2},
        typeIV: {HT: 3},
        typeV: {A: 3, B: 2},
      },
    ],
  },
  {
    occupancyClassification: ['i4'],
    typeOfConstruction: [
      {
        sprinklerSystem: 'NS',
        typeI: {A: 'UL', B: 5},
        typeII: {A: 3, B: 2},
        typeIII: {A: 3, B: 2},
        typeIV: {HT: 3},
        typeV: {A: 1, B: 1},
      },
      {
        sprinklerSystem: 'S',
        typeI: {A: 'UL', B: 6},
        typeII: {A: 4, B: 3},
        typeIII: {A: 4, B: 3},
        typeIV: {HT: 4},
        typeV: {A: 2, B: 2},
      },
    ],
  },
  {
    occupancyClassification: ['m'],
    typeOfConstruction: [
      {
        sprinklerSystem: 'NS',
        typeI: {A: 'UL', B: 11},
        typeII: {A: 4, B: 2},
        typeIII: {A: 4, B: 2},
        typeIV: {HT: 4},
        typeV: {A: 3, B: 1},
      },
      {
        sprinklerSystem: 'S',
        typeI: {A: 'UL', B: 12},
        typeII: {A: 5, B: 3},
        typeIII: {A: 5, B: 3},
        typeIV: {HT: 5},
        typeV: {A: 4, B: 2},
      },
    ],
  },
  {
    occupancyClassification: ['r1', 'r2'],
    typeOfConstruction: [
      {
        sprinklerSystem: 'NS',
        typeI: {A: 'UL', B: 11},
        typeII: {A: 4, B: 4},
        typeIII: {A: 4, B: 4},
        typeIV: {HT: 4},
        typeV: {A: 3, B: 2},
      },
      {
        sprinklerSystem: 'S13R',
        typeI: {A: 4, B: 4},
        typeII: {A: 4, B: 4},
        typeIII: {A: 4, B: 4},
        typeIV: {HT: 4},
        typeV: {A: 4, B: 3},
      },
      {
        sprinklerSystem: 'S',
        typeI: {A: 'UL', B: 12},
        typeII: {A: 5, B: 5},
        typeIII: {A: 5, B: 5},
        typeIV: {HT: 5},
        typeV: {A: 4, B: 3},
      },
    ],
  },
  {
    occupancyClassification: ['r3'],
    typeOfConstruction: [
      {
        sprinklerSystem: 'NS',
        typeI: {A: 'UL', B: 11},
        typeII: {A: 4, B: 4},
        typeIII: {A: 4, B: 4},
        typeIV: {HT: 4},
        typeV: {A: 3, B: 3},
      },
      {
        sprinklerSystem: 'S13D',
        typeI: {A: 4, B: 4},
        typeII: {A: 4, B: 4},
        typeIII: {A: 4, B: 4},
        typeIV: {HT: 4},
        typeV: {A: 3, B: 3},
      },
      {
        sprinklerSystem: 'S13R',
        typeI: {A: 4, B: 4},
        typeII: {A: 4, B: 4},
        typeIII: {A: 4, B: 4},
        typeIV: {HT: 4},
        typeV: {A: 4, B: 4},
      },
      {
        sprinklerSystem: 'S',
        typeI: {A: 'UL', B: 12},
        typeII: {A: 5, B: 5},
        typeIII: {A: 5, B: 5},
        typeIV: {HT: 5},
        typeV: {A: 4, B: 4},
      },
    ],
  },
  {
    occupancyClassification: ['r4'],
    typeOfConstruction: [
      {
        sprinklerSystem: 'NS',
        typeI: {A: 'UL', B: 11},
        typeII: {A: 4, B: 4},
        typeIII: {A: 4, B: 4},
        typeIV: {HT: 4},
        typeV: {A: 3, B: 2},
      },
      {
        sprinklerSystem: 'S13D',
        typeI: {A: 4, B: 4},
        typeII: {A: 4, B: 4},
        typeIII: {A: 4, B: 4},
        typeIV: {HT: 4},
        typeV: {A: 3, B: 2},
      },
      {
        sprinklerSystem: 'S13R',
        typeI: {A: 4, B: 4},
        typeII: {A: 4, B: 4},
        typeIII: {A: 4, B: 4},
        typeIV: {HT: 4},
        typeV: {A: 4, B: 3},
      },
      {
        sprinklerSystem: 'S',
        typeI: {A: 'UL', B: 12},
        typeII: {A: 5, B: 5},
        typeIII: {A: 5, B: 5},
        typeIV: {HT: 5},
        typeV: {A: 4, B: 3},
      },
    ],
  },
  {
    occupancyClassification: ['s1'],
    typeOfConstruction: [
      {
        sprinklerSystem: 'NS',
        typeI: {A: 'UL', B: 11},
        typeII: {A: 4, B: 2},
        typeIII: {A: 3, B: 2},
        typeIV: {HT: 4},
        typeV: {A: 3, B: 1},
      },
      {
        sprinklerSystem: 'S',
        typeI: {A: 'UL', B: 12},
        typeII: {A: 5, B: 3},
        typeIII: {A: 4, B: 3},
        typeIV: {HT: 5},
        typeV: {A: 4, B: 2},
      },
    ],
  },
  {
    occupancyClassification: ['s2'],
    typeOfConstruction: [
      {
        sprinklerSystem: 'NS',
        typeI: {A: 'UL', B: 11},
        typeII: {A: 5, B: 3},
        typeIII: {A: 4, B: 3},
        typeIV: {HT: 4},
        typeV: {A: 4, B: 2},
      },
      {
        sprinklerSystem: 'S',
        typeI: {A: 'UL', B: 12},
        typeII: {A: 6, B: 4},
        typeIII: {A: 5, B: 4},
        typeIV: {HT: 5},
        typeV: {A: 5, B: 3},
      },
    ],
  },
  {
    occupancyClassification: ['u'],
    typeOfConstruction: [
      {
        sprinklerSystem: 'NS',
        typeI: {A: 'UL', B: 5},
        typeII: {A: 4, B: 2},
        typeIII: {A: 3, B: 2},
        typeIV: {HT: 4},
        typeV: {A: 2, B: 1},
      },
      {
        sprinklerSystem: 'S',
        typeI: {A: 'UL', B: 6},
        typeII: {A: 5, B: 3},
        typeIII: {A: 4, B: 3},
        typeIV: {HT: 5},
        typeV: {A: 3, B: 2},
      },
    ],
  },
];

export const allowableArea = [
  {
    occupancyClassification: ['a1'],
    typeOfConstruction: [
      {
        sprinklerSystem: 'NS',
        typeI: {A: 'UL', B: 'UL'},
        typeII: {A: 15500, B: 8500},
        typeIII: {A: 14000, B: 8500},
        typeIV: {HT: 15000},
        typeV: {A: 11500, B: 5500},
      },
      {
        sprinklerSystem: 'S1',
        typeI: {A: 'UL', B: 'UL'},
        typeII: {A: 62000, B: 34000},
        typeIII: {A: 56000, B: 34000},
        typeIV: {HT: 60000},
        typeV: {A: 46000, B: 22000},
      },
      {
        sprinklerSystem: 'SM',
        typeI: {A: 'UL', B: 'UL'},
        typeII: {A: 46500, B: 25500},
        typeIII: {A: 42000, B: 25500},
        typeIV: {HT: 45000},
        typeV: {A: 34500, B: 16500},
      },
    ],
  },
  {
    occupancyClassification: ['a2', 'a3', 'a4'],
    typeOfConstruction: [
      {
        sprinklerSystem: 'NS',
        typeI: {A: 'UL', B: 'UL'},
        typeII: {A: 15500, B: 9500},
        typeIII: {A: 14000, B: 9500},
        typeIV: {HT: 15000},
        typeV: {A: 11500, B: 6000},
      },
      {
        sprinklerSystem: 'S1',
        typeI: {A: 'UL', B: 'UL'},
        typeII: {A: 62000, B: 38000},
        typeIII: {A: 56000, B: 38000},
        typeIV: {HT: 60000},
        typeV: {A: 46000, B: 24000},
      },
      {
        sprinklerSystem: 'SM',
        typeI: {A: 'UL', B: 'UL'},
        typeII: {A: 46500, B: 28500},
        typeIII: {A: 42000, B: 28500},
        typeIV: {HT: 45000},
        typeV: {A: 34500, B: 18000},
      },
    ],
  },
  {
    occupancyClassification: ['a5'],
    typeOfConstruction: [
      {
        sprinklerSystem: 'NS',
        typeI: {A: 'UL', B: 'UL'},
        typeII: {A: 'UL', B: 'UL'},
        typeIII: {A: 'UL', B: 'UL'},
        typeIV: {HT: 'UL'},
        typeV: {A: 'UL', B: 'UL'},
      },
      {
        sprinklerSystem: 'S1',
        typeI: {A: 'UL', B: 'UL'},
        typeII: {A: 'UL', B: 'UL'},
        typeIII: {A: 'UL', B: 'UL'},
        typeIV: {HT: 'UL'},
        typeV: {A: 'UL', B: 'UL'},
      },
      {
        sprinklerSystem: 'SM',
        typeI: {A: 'UL', B: 'UL'},
        typeII: {A: 'UL', B: 'UL'},
        typeIII: {A: 'UL', B: 'UL'},
        typeIV: {HT: 'UL'},
        typeV: {A: 'UL', B: 'UL'},
      },
    ],
  },
  {
    occupancyClassification: ['b'],
    typeOfConstruction: [
      {
        sprinklerSystem: 'NS',
        typeI: {A: 'UL', B: 'UL'},
        typeII: {A: 37500, B: 23000},
        typeIII: {A: 28500, B: 19000},
        typeIV: {HT: 36000},
        typeV: {A: 18000, B: 9000},
      },
      {
        sprinklerSystem: 'S1',
        typeI: {A: 'UL', B: 'UL'},
        typeII: {A: 150000, B: 92000},
        typeIII: {A: 114000, B: 76000},
        typeIV: {HT: 144000},
        typeV: {A: 72000, B: 36000},
      },
      {
        sprinklerSystem: 'SM',
        typeI: {A: 'UL', B: 'UL'},
        typeII: {A: 112500, B: 69000},
        typeIII: {A: 85500, B: 57000},
        typeIV: {HT: 108000},
        typeV: {A: 54000, B: 27000},
      },
    ],
  },
  {
    occupancyClassification: ['e'],
    typeOfConstruction: [
      {
        sprinklerSystem: 'NS',
        typeI: {A: 'UL', B: 'UL'},
        typeII: {A: 26500, B: 14500},
        typeIII: {A: 23500, B: 14500},
        typeIV: {HT: 25500},
        typeV: {A: 18500, B: 9500},
      },
      {
        sprinklerSystem: 'S1',
        typeI: {A: 'UL', B: 'UL'},
        typeII: {A: 106000, B: 58000},
        typeIII: {A: 94000, B: 58000},
        typeIV: {HT: 102000},
        typeV: {A: 74000, B: 38000},
      },
      {
        sprinklerSystem: 'SM',
        typeI: {A: 'UL', B: 'UL'},
        typeII: {A: 79500, B: 43500},
        typeIII: {A: 70500, B: 43500},
        typeIV: {HT: 76500},
        typeV: {A: 55500, B: 28500},
      },
    ],
  },
  {
    occupancyClassification: ['f1'],
    typeOfConstruction: [
      {
        sprinklerSystem: 'NS',
        typeI: {A: 'Ul', B: 'UL'},
        typeII: {A: 25000, B: 15500},
        typeIII: {A: 19000, B: 12000},
        typeIV: {HT: 33500},
        typeV: {A: 14000, B: 8500},
      },
      {
        sprinklerSystem: 'S1',
        typeI: {A: 'UL', B: 'UL'},
        typeII: {A: 100000, B: 62000},
        typeIII: {A: 76000, B: 48000},
        typeIV: {HT: 134000},
        typeV: {A: 56000, B: 34000},
      },
      {
        sprinklerSystem: 'SM',
        typeI: {A: 'UL', B: 'UL'},
        typeII: {A: 75000, B: 46500},
        typeIII: {A: 57000, B: 36000},
        typeIV: {HT: 100500},
        typeV: {A: 42000, B: 25500},
      },
    ],
  },
  {
    occupancyClassification: ['f2'],
    typeOfConstruction: [
      {
        sprinklerSystem: 'NS',
        typeI: {A: 'UL', B: 'UL'},
        typeII: {A: 37500, B: 23000},
        typeIII: {A: 28500, B: 18000},
        typeIV: {HT: 50500},
        typeV: {A: 21000, B: 13000},
      },
      {
        sprinklerSystem: 'S1',
        typeI: {A: 'UL', B: 'UL'},
        typeII: {A: 150000, B: 92000},
        typeIII: {A: 114000, B: 72000},
        typeIV: {HT: 202000},
        typeV: {A: 84000, B: 52000},
      },
      {
        sprinklerSystem: 'SM',
        typeI: {A: 'UL', B: 'UL'},
        typeII: {A: 112500, B: 69000},
        typeIII: {A: 85500, B: 54000},
        typeIV: {HT: 151500},
        typeV: {A: 63000, B: 39000},
      },
    ],
  },
  {
    occupancyClassification: ['h1'],
    typeOfConstruction: [
      {
        sprinklerSystem: 'NS',
        typeI: {A: 21000, B: 16500},
        typeII: {A: 11000, B: 7000},
        typeIII: {A: 9500, B: 7000},
        typeIV: {HT: 10500},
        typeV: {A: 7500, B: 'NP'},
      },
      {
        sprinklerSystem: 'S1',
        typeI: {A: 21000, B: 16500},
        typeII: {A: 11000, B: 7000},
        typeIII: {A: 9500, B: 7000},
        typeIV: {HT: 10500},
        typeV: {A: 7500, B: 'NP'},
      },
    ],
  },
  {
    occupancyClassification: ['h2'],
    typeOfConstruction: [
      {
        sprinklerSystem: 'NS',
        typeI: {A: 21000, B: 16500},
        typeII: {A: 11000, B: 7000},
        typeIII: {A: 9500, B: 7000},
        typeIV: {HT: 10500},
        typeV: {A: 7500, B: 3000},
      },
      {
        sprinklerSystem: 'S1',
        typeI: {A: 21000, B: 16500},
        typeII: {A: 11000, B: 7000},
        typeIII: {A: 9500, B: 7000},
        typeIV: {HT: 10500},
        typeV: {A: 7500, B: 3000},
      },
      {
        sprinklerSystem: 'SM',
        typeI: {A: 21000, B: 16500},
        typeII: {A: 11000, B: 7000},
        typeIII: {A: 9500, B: 7000},
        typeIV: {HT: 10500},
        typeV: {A: 7500, B: 3000},
      },
    ],
  },
  {
    occupancyClassification: ['h3'],
    typeOfConstruction: [
      {
        sprinklerSystem: 'NS',
        typeI: {A: 'UL', B: 60000},
        typeII: {A: 26500, B: 14000},
        typeIII: {A: 17500, B: 13000},
        typeIV: {HT: 25500},
        typeV: {A: 10000, B: 5000},
      },
      {
        sprinklerSystem: 'S1',
        typeI: {A: 'UL', B: 60000},
        typeII: {A: 26500, B: 14000},
        typeIII: {A: 17500, B: 13000},
        typeIV: {HT: 25500},
        typeV: {A: 10000, B: 5000},
      },
      {
        sprinklerSystem: 'SM',
        typeI: {A: 'UL', B: 60000},
        typeII: {A: 26500, B: 14000},
        typeIII: {A: 17500, B: 13000},
        typeIV: {HT: 25500},
        typeV: {A: 10000, B: 5000},
      },
    ],
  },
  {
    occupancyClassification: ['h4'],
    typeOfConstruction: [
      {
        sprinklerSystem: 'NS',
        typeI: {A: 'UL', B: 'UL'},
        typeII: {A: 37500, B: 17500},
        typeIII: {A: 28500, B: 17500},
        typeIV: {HT: 36000},
        typeV: {A: 18000, B: 6500},
      },
      {
        sprinklerSystem: 'S1',
        typeI: {A: 'UL', B: 'UL'},
        typeII: {A: 150000, B: 70000},
        typeIII: {A: 114000, B: 70000},
        typeIV: {HT: 144000},
        typeV: {A: 72000, B: 26000},
      },
      {
        sprinklerSystem: 'SM',
        typeI: {A: 'UL', B: 'UL'},
        typeII: {A: 112500, B: 52500},
        typeIII: {A: 85500, B: 52500},
        typeIV: {HT: 108000},
        typeV: {A: 54000, B: 19500},
      },
    ],
  },
  {
    occupancyClassification: ['h5'],
    typeOfConstruction: [
      {
        sprinklerSystem: 'NS',
        typeI: {A: 'UL', B: 'UL'},
        typeII: {A: 37500, B: 23000},
        typeIII: {A: 28500, B: 19000},
        typeIV: {HT: 36000},
        typeV: {A: 18000, B: 9000},
      },
      {
        sprinklerSystem: 'S1',
        typeI: {A: 'UL', B: 'UL'},
        typeII: {A: 150000, B: 92000},
        typeIII: {A: 114000, B: 76000},
        typeIV: {HT: 144000},
        typeV: {A: 72000, B: 36000},
      },
      {
        sprinklerSystem: 'SM',
        typeI: {A: 'UL', B: 'UL'},
        typeII: {A: 112500, B: 69000},
        typeIII: {A: 85500, B: 57000},
        typeIV: {HT: 108000},
        typeV: {A: 54000, B: 27000},
      },
    ],
  },
  {
    occupancyClassification: ['i11', 'i12'],
    typeOfConstruction: [
      {
        sprinklerSystem: 'NS',
        typeI: {A: 'UL', B: 55000},
        typeII: {A: 19000, B: 10000},
        typeIII: {A: 16500, B: 10000},
        typeIV: {HT: 18000},
        typeV: {A: 10500, B: 4500},
      },
      {
        sprinklerSystem: 'S1',
        typeI: {A: 'UL', B: 220000},
        typeII: {A: 76000, B: 40000},
        typeIII: {A: 66000, B: 40000},
        typeIV: {HT: 72000},
        typeV: {A: 42000, B: 18000},
      },
      {
        sprinklerSystem: 'SM',
        typeI: {A: 'UL', B: 165000},
        typeII: {A: 57000, B: 30000},
        typeIII: {A: 49500, B: 30000},
        typeIV: {HT: 54000},
        typeV: {A: 31500, B: 13500},
      },
    ],
  },
  {
    occupancyClassification: ['i2'],
    typeOfConstruction: [
      {
        sprinklerSystem: 'NS',
        typeI: {A: 'UL', B: 'UL'},
        typeII: {A: 15000, B: 11000},
        typeIII: {A: 12000, B: 'NP'},
        typeIV: {HT: 12000},
        typeV: {A: 95000, B: 'NP'},
      },
      {
        sprinklerSystem: 'S1',
        typeI: {A: 'UL', B: 'UL'},
        typeII: {A: 60000, B: 44000},
        typeIII: {A: 48000, B: 'NP'},
        typeIV: {HT: 48000},
        typeV: {A: 38000, B: 'NP'},
      },
      {
        sprinklerSystem: 'SM',
        typeI: {A: 'UL', B: 'UL'},
        typeII: {A: 45000, B: 33000},
        typeIII: {A: 36000, B: 'NP'},
        typeIV: {HT: 36000},
        typeV: {A: 28500, B: 'NP'},
      },
    ],
  },
  {
    occupancyClassification: ['i3'],
    typeOfConstruction: [
      {
        sprinklerSystem: 'NS',
        typeI: {A: 'UL', B: 'UL'},
        typeII: {A: 15000, B: 10000},
        typeIII: {A: 10500, B: 7500},
        typeIV: {HT: 12000},
        typeV: {A: 7500, B: 5000},
      },
      {
        sprinklerSystem: 'S1',
        typeI: {A: 'UL', B: 'UL'},
        typeII: {A: 45000, B: 40000},
        typeIII: {A: 42000, B: 30000},
        typeIV: {HT: 48000},
        typeV: {A: 30000, B: 20000},
      },
      {
        sprinklerSystem: 'SM',
        typeI: {A: 'UL', B: 'UL'},
        typeII: {A: 45000, B: 30000},
        typeIII: {A: 31500, B: 22500},
        typeIV: {HT: 36000},
        typeV: {A: 22500, B: 15000},
      },
    ],
  },
  {
    occupancyClassification: ['i4'],
    typeOfConstruction: [
      {
        sprinklerSystem: 'NS',
        typeI: {A: 'UL', B: 60500},
        typeII: {A: 26500, B: 13000},
        typeIII: {A: 23500, B: 13000},
        typeIV: {HT: 25500},
        typeV: {A: 18500, B: 9000},
      },
      {
        sprinklerSystem: 'S1',
        typeI: {A: 'UL', B: 121000},
        typeII: {A: 106000, B: 52000},
        typeIII: {A: 94000, B: 52000},
        typeIV: {HT: 102000},
        typeV: {A: 74000, B: 36000},
      },
      {
        sprinklerSystem: 'SM',
        typeI: {A: 'UL', B: 181500},
        typeII: {A: 79500, B: 39000},
        typeIII: {A: 70500, B: 39000},
        typeIV: {HT: 76500},
        typeV: {A: 55500, B: 27000},
      },
    ],
  },
  {
    occupancyClassification: ['m'],
    typeOfConstruction: [
      {
        sprinklerSystem: 'NS',
        typeI: {A: 'UL', B: 'UL'},
        typeII: {A: 21500, B: 12500},
        typeIII: {A: 18500, B: 12500},
        typeIV: {HT: 20500},
        typeV: {A: 14000, B: 9000},
      },
      {
        sprinklerSystem: 'S1',
        typeI: {A: 'UL', B: 'UL'},
        typeII: {A: 86000, B: 50000},
        typeIII: {A: 74000, B: 50000},
        typeIV: {HT: 82000},
        typeV: {A: 56000, B: 36000},
      },
      {
        sprinklerSystem: 'SM',
        typeI: {A: 'UL', B: 'UL'},
        typeII: {A: 64500, B: 37500},
        typeIII: {A: 55500, B: 37500},
        typeIV: {HT: 61500},
        typeV: {A: 42000, B: 27000},
      },
    ],
  },
  {
    occupancyClassification: ['r1', 'r2'],
    typeOfConstruction: [
      {
        sprinklerSystem: 'NS',
        typeI: {A: 'UL', B: 'UL'},
        typeII: {A: 24000, B: 16000},
        typeIII: {A: 24000, B: 16000},
        typeIV: {HT: 20500},
        typeV: {A: 12000, B: 7000},
      },
      {
        sprinklerSystem: 'S13R',
        typeI: {A: 'UL', B: 'UL'},
        typeII: {A: 24000, B: 16000},
        typeIII: {A: 24000, B: 16000},
        typeIV: {HT: 20500},
        typeV: {A: 12000, B: 7000},
      },
      {
        sprinklerSystem: 'S1',
        typeI: {A: 'UL', B: 'UL'},
        typeII: {A: 96000, B: 64000},
        typeIII: {A: 96000, B: 64000},
        typeIV: {HT: 82000},
        typeV: {A: 48000, B: 28000},
      },
      {
        sprinklerSystem: 'SM',
        typeI: {A: 'UL', B: 'UL'},
        typeII: {A: 72000, B: 48000},
        typeIII: {A: 72000, B: 48000},
        typeIV: {HT: 61500},
        typeV: {A: 36000, B: 21000},
      },
    ],
  },
  {
    occupancyClassification: ['r3'],
    typeOfConstruction: [
      {
        sprinklerSystem: 'NS',
        typeI: {A: 'UL', B: 'UL'},
        typeII: {A: 'UL', B: 'UL'},
        typeIII: {A: 'UL', B: 'UL'},
        typeIV: {HT: 'UL'},
        typeV: {A: 'UL', B: 'UL'},
      },
      {
        sprinklerSystem: 'S13D',
        typeI: {A: 'UL', B: 'UL'},
        typeII: {A: 'UL', B: 'UL'},
        typeIII: {A: 'UL', B: 'UL'},
        typeIV: {HT: 'UL'},
        typeV: {A: 'UL', B: 'UL'},
      },
      {
        sprinklerSystem: 'S13R',
        typeI: {A: 'UL', B: 'UL'},
        typeII: {A: 'UL', B: 'UL'},
        typeIII: {A: 'UL', B: 'UL'},
        typeIV: {HT: 'UL'},
        typeV: {A: 'UL', B: 'UL'},
      },
      {
        sprinklerSystem: 'S1',
        typeI: {A: 'UL', B: 'UL'},
        typeII: {A: 'UL', B: 'UL'},
        typeIII: {A: 'UL', B: 'UL'},
        typeIV: {HT: 'UL'},
        typeV: {A: 'UL', B: 'UL'},
      },
      {
        sprinklerSystem: 'SM',
        typeI: {A: 'UL', B: 'UL'},
        typeII: {A: 'UL', B: 'UL'},
        typeIII: {A: 'UL', B: 'UL'},
        typeIV: {HT: 'UL'},
        typeV: {A: 'UL', B: 'UL'},
      },
    ],
  },
  {
    occupancyClassification: ['r4'],
    typeOfConstruction: [
      {
        sprinklerSystem: 'NS',
        typeI: {A: 'UL', B: 'UL'},
        typeII: {A: 24000, B: 16000},
        typeIII: {A: 24000, B: 16000},
        typeIV: {HT: 20500},
        typeV: {A: 12000, B: 7000},
      },
      {
        sprinklerSystem: 'S13D',
        typeI: {A: 'UL', B: 'UL'},
        typeII: {A: 24000, B: 16000},
        typeIII: {A: 24000, B: 16000},
        typeIV: {HT: 20500},
        typeV: {A: 12000, B: 7000},
      },
      {
        sprinklerSystem: 'S13R',
        typeI: {A: 'UL', B: 'UL'},
        typeII: {A: 24000, B: 16000},
        typeIII: {A: 24000, B: 16000},
        typeIV: {HT: 20500},
        typeV: {A: 12000, B: 7000},
      },
      {
        sprinklerSystem: 'S1',
        typeI: {A: 'UL', B: 'UL'},
        typeII: {A: 96000, B: 64000},
        typeIII: {A: 96000, B: 64000},
        typeIV: {HT: 82000},
        typeV: {A: 48000, B: 28000},
      },
      {
        sprinklerSystem: 'SM',
        typeI: {A: 'UL', B: 'UL'},
        typeII: {A: 72000, B: 48000},
        typeIII: {A: 72000, B: 48000},
        typeIV: {HT: 61500},
        typeV: {A: 36000, B: 21000},
      },
    ],
  },
  {
    occupancyClassification: ['s1'],
    typeOfConstruction: [
      {
        sprinklerSystem: 'NS',
        typeI: {A: 'UL', B: 48000},
        typeII: {A: 26000, B: 17500},
        typeIII: {A: 26000, B: 17500},
        typeIV: {HT: 25500},
        typeV: {A: 14000, B: 9000},
      },
      {
        sprinklerSystem: 'S1',
        typeI: {A: 'UL', B: 192000},
        typeII: {A: 104000, B: 70000},
        typeIII: {A: 104000, B: 70000},
        typeIV: {HT: 102000},
        typeV: {A: 56000, B: 36000},
      },
      {
        sprinklerSystem: 'SM',
        typeI: {A: 'UL', B: 144000},
        typeII: {A: 78000, B: 52500},
        typeIII: {A: 78000, B: 52500},
        typeIV: {HT: 76500},
        typeV: {A: 42000, B: 27000},
      },
    ],
  },
  {
    occupancyClassification: ['s2'],
    typeOfConstruction: [
      {
        sprinklerSystem: 'NS',
        typeI: {A: 'UL', B: 79000},
        typeII: {A: 39000, B: 26000},
        typeIII: {A: 39000, B: 26000},
        typeIV: {HT: 38500},
        typeV: {A: 21000, B: 13500},
      },
      {
        sprinklerSystem: 'S1',
        typeI: {A: 'UL', B: 316000},
        typeII: {A: 156000, B: 104000},
        typeIII: {A: 156000, B: 104000},
        typeIV: {HT: 154000},
        typeV: {A: 84000, B: 54000},
      },
      {
        sprinklerSystem: 'SM',
        typeI: {A: 'UL', B: 237000},
        typeII: {A: 117000, B: 78000},
        typeIII: {A: 117000, B: 78000},
        typeIV: {HT: 115500},
        typeV: {A: 63000, B: 40500},
      },
    ],
  },
  {
    occupancyClassification: ['u'],
    typeOfConstruction: [
      {
        sprinklerSystem: 'NS',
        typeI: {A: 'UL', B: 35500},
        typeII: {A: 19000, B: 8500},
        typeIII: {A: 14000, B: 8500},
        typeIV: {HT: 18000},
        typeV: {A: 9000, B: 5500},
      },
      {
        sprinklerSystem: 'S1',
        typeI: {A: 'UL', B: 142000},
        typeII: {A: 76000, B: 34000},
        typeIII: {A: 56000, B: 34000},
        typeIV: {HT: 72000},
        typeV: {A: 36000, B: 22000},
      },
      {
        sprinklerSystem: 'SM',
        typeI: {A: 'UL', B: 106500},
        typeII: {A: 57000, B: 25500},
        typeIII: {A: 42000, B: 25500},
        typeIV: {HT: 54000},
        typeV: {A: 27000, B: 16500},
      },
    ],
  },
];

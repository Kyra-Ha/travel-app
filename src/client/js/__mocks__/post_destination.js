'use strict';

const dest = {
    4: {place: 'Paris'},
    5: {place: 'Rome'},
  };
  
  export default function getDest(x) {
    return new Promise((resolve, reject) => {
      const userID = parseInt(x.substr('/add/'.length), 10);
      process.nextTick(() =>
        dest[userID]
          ? resolve(dest[userID])
          : reject({
              error: 'User with ' + userID + ' not found.',
            }),
      );
    });
  }
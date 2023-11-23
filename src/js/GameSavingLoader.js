import read from './reader';
import json from './parser';

export default class GameSavingLoader {
  load(str) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        read(str)
          .then((response) => json(response))
          .then((response) => {
            resolve(JSON.parse(response));
          });
      }, 1000);
    });
  }
}

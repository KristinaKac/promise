export default class GameSavingLoader {
  load() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        read()
          .then((response) => json(response))
          .then((response) => {
            resolve(JSON.parse(response));
          });
      }, 1000);
    });
  }
}

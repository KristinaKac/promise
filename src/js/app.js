(async () => {
  try {
    const arrayBuffer = await read();
    const str = await json(arrayBuffer);
    return JSON.parse(str);
  } catch (error) {
    console.log(error);
  } finally {
    console.log('finally');
  }
})();

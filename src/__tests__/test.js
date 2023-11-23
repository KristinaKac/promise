import loader from '../js/app';
import read from '../js/reader';
import json, { parser } from '../js/parser';
import GameSavingLoader from '../js/GameSavingLoader';

test('test of reader (resolve)', async () => {
  expect.assertions(1);
  const data = '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';
  const result = await read(data);
  expect(result).toEqual(new ArrayBuffer());
});

test('test of reader (reject)', async () => {
  expect.assertions(1);
  const data = 'error';
  try {
    const result = await read(data);
  } catch (e) {
    expect(e).toMatch('error');
  }
});

test('test of parser (resolve)', async () => {
  expect.assertions(1);
  const data = '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';
  const reader = await read(data);
  const result = await json(reader);
  expect(result).toEqual('{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}');
});

test('test of class GameSavingLoader', async () => {
  expect.assertions(1);
  const gameSavingLoader = new GameSavingLoader();
  const result = await gameSavingLoader.load('{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}');
  expect(result).toEqual(new Object({
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1, name: 'Hitman', level: 10, points: 2000,
    },
  }));
});

test('test of app.js (resolve)', async () => {
  expect.assertions(1);
  const result = await loader('{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}');
  expect(result).toEqual(({
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1, name: 'Hitman', level: 10, points: 2000,
    },
  }));
});

test('test of app.js (reject)', async () => {
  expect.assertions(1);
  const result = await loader('');
  expect(result).toMatch('error');
});

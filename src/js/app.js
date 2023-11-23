import read from './reader';
import json from './parser';

export default async function loader(data) {
  try {
    const arrayBuffer = await read(data);
    const str = await json(arrayBuffer);
    return JSON.parse(str);
  } catch (error) {
    return 'error';
  }
}

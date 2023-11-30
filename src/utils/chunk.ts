function chunk(array: any[], size: number) {
  size = Math.max(size, 0);
  const length = array.length;
  if (!length || !size) {
    return [];
  }
  let index = 0;
  let resIndex = 0;
  const result = Array(Math.ceil(length / size));

  while (index < length) {
    result[resIndex++] = array.slice(index, (index += size));
  }
  return result;
}

export default chunk;

const getRandomInt = (bottom, top) => {
  const min = Math.ceil(bottom);
  const max = Math.floor(top);

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export { getRandomInt };
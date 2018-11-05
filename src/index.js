const stringify = target => {
  return typeof target === "string" ? target : JSON.stringify(target);
};

const parse = target => {
  try {
    return JSON.parse(target);
  } catch (error) {
    return target;
  }
};

module.exports = {
  stringify,
  parse
};

const memory = {};

const load = function(code) {
  return code.reduce(function(memory, value, key) {
    memory[key] = value;
    return memory;
  }, memory);
};

exports.load = load;

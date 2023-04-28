const memory = {};

const load = function(code) {
  return code.reduce(function(memory, value, key) {
    memory[key] = value;
    return memory;
  }, memory);
};

const assign = function(value, cell) {
  memory[cell] = value;
  return memory[cell];
};

const add = function(cell1, cell2, cell3) {
  memory[cell3] = memory[cell1] + memory[cell2];
  return memory[cell3];
};

const sub = function(cell1, cell2, cell3) {
  memory[cell3] = memory[cell1] - memory[cell2];
  return memory[cell3];
};

const display = function() {
  return JSON.stringify(memory);
};

const main = function() {
  const code = [0, 2, 100, 0, 1, 101, 1, 100, 101, 102, 2, 100, 101, 103, 9];
  load(code);
  assign(2, 100);
  assign(1, 101);
  add(100, 101, 102);
  sub(100, 101, 103);
  console.log(memory);
};

exports.load = load;
exports.assign = assign;
exports.add = add;
exports.sub = sub;
exports.display = display;

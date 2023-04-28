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

const execute = function(code) {
  let index = 0;

  while(index < code.length) {
    switch(code[index]) {
      case 0: 
        assign(code[++index], code[++index]);
        break;

      case 1:
        add(code[++index], code[++index], code[++index]);
        break;

      case 2:
        sub(code[++index], code[++index], code[++index]);
        break;

      case 9:
        return;
    }
    index++;
  }
};

const main = function() {
  const code = [0, 2, 100, 0, 1, 101, 1, 100, 101, 102, 2, 100, 101, 103, 9];
  load(code);
  execute(code);
  console.log(memory);
};

main();

exports.load = load;
exports.assign = assign;
exports.add = add;
exports.sub = sub;

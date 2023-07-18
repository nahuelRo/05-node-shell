const commands = require("./commands");
// process.argv ==> pwd

// Un prompt como output
process.stdout.write("prompt > ");

// El evento STDIN 'data' se dispara cuando el usuario escribe una línea
process.stdin.on("data", function (data) {
  let [cmd, ...param] = data.toString().trim().split(" "); // Remueve la nueva línea
  let arg = param.join(" ");

  const write = (arg) => {
    process.stdout.write(arg);
    process.stdout.write("\nprompt > ");
  };

  if (!commands[cmd]) {
    return write(`Command '${cmd}' not found`);
  }

  commands[cmd](write, arg);
});

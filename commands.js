const fs = require("fs");
const request = require("request");

function pwd(write) {
  write(process.argv[1]);
}

function date(write) {
  write(Date());
}

function ls(write) {
  fs.readdir(".", function (err, files) {
    if (err) throw err;
    const res = [];
    files.forEach(function (file) {
      res.push(file + "\n");
    });

    write(res.join(" ").trim());
  });
}

function echo(write, string) {
  write(string);
}

function cat(write, string) {
  fs.readFile(string, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    write(data);
  });
}

function head(write, string) {
  fs.readFile(string, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    write(data.split("\n").slice(0, 5).join("\n"));
  });
}

function tail(write, string) {
  fs.readFile(string, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    const dataSplit = data.split("\n");
    write(dataSplit.slice(dataSplit.length - 5).join("\n"));
  });
}

function curl(write, url) {
  request(url, (error, response, body) => {
    write(body);
  });
}

module.exports = {
  date,
  pwd,
  ls,
  echo,
  cat,
  head,
  tail,
  curl,
};

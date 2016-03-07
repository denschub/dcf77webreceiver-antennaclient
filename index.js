"use strict";

var net = require("net"),
  Gpio = require("onoff").Gpio,
  Signal = require("./lib/signal"),
  settings = require("./config");

function onClientConnect() {
  console.log("connected!");
  signal.bindTcpConnection(client);
}

function onClientError() {
  console.log("connection lost...");
  process.exit();
}

var antenna = new Gpio(settings.gpio.port, "in", "both", settings.gpio.bindOptions),
  signal = new Signal(),
  client = new net.Socket();

client.setNoDelay(true);
client.connect(settings.server.port, settings.server.host);
client.on("connect", onClientConnect)
      .on("end", onClientError)
      .on("timeout", onClientError)
      .on("error", onClientError)
      .on("close", onClientError);

antenna.watch(function(err, value) {
  if (err) {
    return;
  }

  signal.receiveBit(value);
});

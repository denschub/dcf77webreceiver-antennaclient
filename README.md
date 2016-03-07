dcf77webreceiver-antennaclient
==============================

The dcf77webreceiver is a proof-of-concept web application to receive and decode
[DCF77 time information](http://en.wikipedia.org/wiki/DCF77) from inside the
browser via an antenna connected to a Raspberry Pi.

This is the client, a Node.js application reading the raw inputs via GPIO from
an Raspberry Pi, doing a high/low-edge detection and sending the signals to
another application.

See [the main repositories README](https://github.com/denschub/dcf77webreceiver/blob/master/README.md)
for more information about this project.

Installation and hardware setup
-------------------------------

I am using a DCF77 antenna module that will set high/low on a port whenever the
DCF77 signal edge changes. I used the GPIO 17 in my examples, but you might want
to change this. Be careful to not hurt your Raspberry Pi. Depending on your
antenna module, you might want to use the 3V3 port or an external power source.

All settings are done by copying `config.json.example` to `config.json`. Values
in there should be self-explanatory. After that, install the dependencies with
`npm install` and run the antenna client with `node index.js`.

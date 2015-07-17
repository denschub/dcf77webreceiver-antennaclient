dcf77webreceiver-client
=======================

The dcf77webreceiver is a proof-of-concept web application to receive and decode
[DCF77 time information](http://en.wikipedia.org/wiki/DCF77) from inside the
browser via an antenna connected to a Raspberry Pi.

This is the client, a Node.js application reading the raw inputs via GPIO from
an Raspberry Pi, doing a high/low-edge detection and sending the signals to
another application.

![Screenshot](https://raw.githubusercontent.com/denschub/dcf77webreceiver-ui/master/_screenshot.png)

Components
----------

dcf77webreceiver contains three components, all components are needed to run the
application.

* **[client](https://github.com/denschub/dcf77webreceiver-client)** is a
  Node.js application reading the raw inputs via GPIO from an Raspberry Pi,
  doing a high/low-edge detection and sending the signals to another
  application.
* **[server](https://github.com/denschub/dcf77webreceiver-server)** is another
  Node.js application to receive the signals from the server and relaying them
  to the browser via Socket.io. There is no signal processing in this
  component.
* **[ui](https://github.com/denschub/dcf77webreceiver-ui)** is static web
  application receiving the signals via Socket.io, doing the signal processing
  and displaying the decoded time signal in a nice looking clock.

Installation
------------

As this is more of a proof-of-concept, I cannot provide clear installation
instructions. If you want to use this source and you run into troubles, please
open an issue and we will figure out what went wrong. However, some general
hints:

I am using a DCF77 antenna module that will set high/low on a port whenever the
DCF77 signal edge changes. I used the GPIO 17 in my examples, but you might want
to change this. Be careful to not hurt your Raspberry Pi. Depending on your
antenna module, you might want to use the 3V3 port or an external power source.

Also remember to change the servers IP address and the port of your server to
allow the client sending the data.

A note about security and a disclaimer
======================================

Incoming data packages require neither authentication nor validation. Be aware
of that and use your servers firewall to limit the access to the input port.

This is a proof of concept. However, this application is still running and some
people are actually using my installation as a clock for their desktop. I might
improve this in the future, but I cannot guarantee it.

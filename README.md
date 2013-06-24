== Overview

Fuego is a Go engine that speaks the Go Text Protocol (GTP). This module will install Fuego and provide a 
simple wrapper for the GTP.

== Usage

To get setup:

    var fuego = require('fuego');
    var gtp = fuego(); // or fuego({debug: true}) to log stdout

To execute a command:

    gtp.send('list_commands', function(error, response) {
      console.log(response);
    });

To exit:

    gtp.exit();

== Requirements

Fuego requires both developer tools and boost in order to compile. On OSX you can install boost like so:

    $ brew install boost

== Installation

    $ npm install feugo

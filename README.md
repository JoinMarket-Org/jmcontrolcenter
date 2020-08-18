# Jmcontrolcenter

Currently a very bare bones prototype demonstrating the following functionality:

* Run a daemon for joinmarket in python, and connect to it via this Angular app.
* Unlock a wallet and display its contents.

This is one of the initial steps in trying to realise something like what is described [here](https://gist.github.com/AdamISZ/f062c7453c6973a8287897fe506b9d19).


## Required steps to test this demo:

### Either: Running the electron app.

One of the main reasons for using a Javascript framework like Angular is that either browser or cross platform desktop clients using Electron are possible. Hence the first test [release](https://github.com/Joinmarket-Org/jmcontrolcenter/releases) (0.0.1dev is the tag) offers an Electron desktop app for Windows, Linux and MacOS. Verify the signature, then unzip and run the executable inside it. To actually see the app in action, you'll need to do the [below](#run-jmwalletd).

(Note that to enable testing, certificate verification is disabled inside this test app; obviously this is not safe and will be replaced with a mechanism to import the cert that the user is using for the backend.)

### Or: Run in the browser.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.5. For this second mode of running, in browser, you will need Angular and its dependencies installed, so this is mainly for developers. There are many guides on the Web.

#### (Development server)

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. As above, you will need to do the [below](#jmwalletd) to test the functionality.

## Run jmwalletd

Check out the `rpc-api-1` branch on [Joinmarket-clientserver](https://github.com/Joinmarket-Org/joinmarket-clientserver).
Go into the virtualenv as for any Joinmarket script.
Get a backend regtest instance running; use (from the root directory of Joinmarket):

```
pytest --btcconf=/some/dir/bitcoin.conf --btcroot=/some/dir/bitcoin-0.19.0.1/bin/ --btcpwd=123456abcdef --nirc=2 test/ygrunner.py -s -p no:warnings
```

Generate a test key and certificate named `key.pem` and `cert.pem` respectively and drop them in the `scripts/` folder of Joinmarket.
Run the new daemon with : `python jmwalletd.py` in that `scripts/` folder and in the Joinmarket `jmvenv` as usual.


===============

## Once frontend and backend are running:

Only one functionality has been implemented: load and display a wallet.

You can click "Unlock wallet", fill in wallet file name and password, and the wallet contents will be displayed automatically.

You will probably want to first generate a regtest wallet with a filename and then fund it from the test wallets provided by `ygrunner.py` (but an empty wallet will be a start).


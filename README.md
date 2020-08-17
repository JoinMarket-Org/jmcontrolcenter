# Jmcontrolcenter

Currently a very bare bones prototype demonstrating the following functionality:

* Run a daemon for joinmarket in python, and connect to it via this Angular app.
* Unlock a wallet and display its contents.

This is one of the initial steps in trying to realise something like what is described [here](https://gist.github.com/AdamISZ/f062c7453c6973a8287897fe506b9d19).


Required steps to test this demo:

Check out the `rpc-api-1` branch on [Joinmarket-clientserver](https://github.com/Joinmarket-Org/joinmarket-clientserver).
Go into the virtualenv as for any Joinmarket script.
Get a backend regtest instance running; use (from the root directory of Joinmarket):

```
pytest --btcconf=/some/dir/bitcoin.conf --btcroot=/some/dir/bitcoin-0.19.0.1/bin/ --btcpwd=123456abcdef --nirc=2 test/ygrunner.py -s -p no:warnings
```

Generate a test key and certificate named `key.pem` and `cert.pem` respectively and drop them in the `scripts/` folder of Joinmarket.
Run the new daemon with : `python jmwalletd.py` in that `scripts/` folder and in the Joinmarket `jmvenv` as usual.

Then run the Angular project as described below:

===============

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.

From here you can click "Unlock wallet", fill in wallet file name and password, and the wallet contents will be displayed automatically.

You will probably want to first generate a regtest wallet with a filename and then fund it from the test wallets provided by `ygrunner.py` (but an empty wallet will be a start).


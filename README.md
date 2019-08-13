# hashicon-cli
A simple cli tool you can use to generate hashicons from hashes.

It can print data-urls to stdout or generate an image to disk.

## Installation
```
npm i hashicon-cli
```

## Usage
```
npx hashicon $HASH -o out.png # generates image to disk
npx hashicon $HASH -d         # prints a data-url to stdout
```

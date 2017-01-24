## testing napa

[![Greenkeeper badge](https://badges.greenkeeper.io/tschaub/test-napa.svg)](https://greenkeeper.io/)

This is a repo for testing napa.  See [shama/napa#43](https://github.com/shama/napa/pull/43#issuecomment-179544457).

```
git clone --branch v1 git@github.com:tschaub/test-napa.git test-napa-v1
cd test-napa-v1
npm install
node check.js
```

The v1 tag of this repo has [a dependency](https://github.com/tschaub/test-napa/blob/v1/package.json#L10) on [rtyley/small-test-repo@3974996807a9f596cf25ac3a714995c24bb97e2c](https://github.com/rtyley/small-test-repo/commit/3974996807a9f596cf25ac3a714995c24bb97e2c).  The `check.js` script writes out the content of the `EXAMPLE` file from that repo.

[As expected](https://github.com/rtyley/small-test-repo/blob/3974996807a9f596cf25ac3a714995c24bb97e2c/EXAMPLE), this generates `0` as the output.

```
git clone --branch v2 git@github.com:tschaub/test-napa.git test-napa-v2
cd test-napa-v2
npm install
node check.js
```

The v2 tag of this repo has [a dependency](https://github.com/tschaub/test-napa/blob/v2/package.json#L10) on [rtyley/small-test-repo@ce1e0703402e989bedf03d5df535401340f54b42](https://github.com/rtyley/small-test-repo/commit/ce1e0703402e989bedf03d5df535401340f54b42).  The `check.js` script writes out the content of the `EXAMPLE` file from that repo.

I [would expect](https://github.com/rtyley/small-test-repo/blob/ce1e0703402e989bedf03d5df535401340f54b42/EXAMPLE) `node check.js` to write out `one`.  Instead, I get `0`.

This is with node@4.2.4 and npm@3.5.2.

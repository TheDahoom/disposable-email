# Disposable email domains
> a simple, no dependencies, regularly updated disposable email npm package with types forked from https://github.com/disposable/disposable

[![Update](https://github.com/Dahoom152/disposable-email/actions/workflows/node.js.yml/badge.svg)](https://github.com/Dahoom152/disposable-email/actions/workflows/node.js.yml)
[![npm version](https://img.shields.io/npm/v/@dahoom/disposable-email)](https://img.shields.io/npm/v/@dahoom/disposable-email)
[![installs](https://img.shields.io/npm/dm/@dahoom/disposable-email)](https://npmtrends.com/@dahoom152/disposable-email)
[![install size](https://packagephobia.com/badge?p=@dahoom/disposable-email)](https://packagephobia.com/result?p=@dahoom/disposable-email)
[![minzip size](https://img.shields.io/bundlephobia/minzip/%40dahoom%2Fdisposable-email)](https://img.shields.io/bundlephobia/minzip/%40dahoom%2Fdisposable-email)
```
npm i @dahoom/disposable-email
```

I recommend using this serverside to avoid malicious workarounds

## Examples

regular usage:
```
import disposable from "@dahoom/disposable-email";

const email = 'me@example.com';

//returns true if the email is disposable, false if not
const temp = disposable.validate(email);

if(!temp){
  return 'disposable emails are not allowed';
}
```

if you just want to import the function itself:
```
import { validate } from "@dahoom/disposable-email";

const email = 'me@example.com';

//returns true if the email is disposable, false if not
const temp = validate(email);

if(!temp){
  return 'disposable emails are not allowed';
}
```
## Description

| Function                                     | Description                                                           |
| -------------------------------------------- | --------------------------------------------------------------------- |
| `validate(domainOrEmail, callback)` | Validates if a domain or email is disposable.                          |

| Parameter     | Description             |
| ------------- | ----------------------- |
| `domainOrEmail`| The domain or email to validate.|
| `callback`     | The optional callback function to execute after validation.|

| Returns  | Description                                                          |
| -------- | -------------------------------------------------------------------- |
| `boolean`| Returns true if the domain or email is not disposable, false otherwise.|

## Credits

Types included from [@types/disposable-email](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/disposable-email/index.d.ts)

Forked from https://github.com/disposable/disposable 

A collection of domains for disposable email services like [10MinuteMail](http://10minutemail.com) and [GuerrillaMail](https://www.guerrillamail.com). Also, some 🛠 to make your life easier.

-	https://github.com/adamloving
-	https://github.com/michenriksen
-	https://github.com/ivolo

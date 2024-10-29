# JavaScript Mappers

[![Node.js CI](https://github.com/droberts-ctrlo/js-mapper/actions/workflows/node.js.yml/badge.svg)](https://github.com/droberts-ctrlo/js-mapper/actions/workflows/node.js.yml)

## Mapper Types

### Form data mapper

Maps a JS object to formdata - it's usage is as follows:

```
import {formdataMapper} from "mapper";

const formdata = formdataMapper({"foo": "bar"});
```

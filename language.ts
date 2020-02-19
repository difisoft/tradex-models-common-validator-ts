
/*
* This file is automatic generated
*/
import * as Ajv from 'ajv';
export const languageSchema = {
  "id": "http://tradex.techx.vn/common/language",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "description": "base request for all other",
  "type": "string",
  "enum": [
    "vi",
    "en",
    "kr",
    "cn",
    "th"
  ]
};
let languageAjv = null;
export function languageValidator() {
  if (languageAjv == null) {
    languageAjv = new Ajv({validateSchema: false}).compile(languageSchema);
  }
  return languageAjv;
}
      
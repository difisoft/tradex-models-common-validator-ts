"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Ajv = require("ajv");
exports.languageSchema = {
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
function languageValidator() {
    if (languageAjv == null) {
        languageAjv = new Ajv({ validateSchema: false }).compile(exports.languageSchema);
    }
    return languageAjv;
}
exports.languageValidator = languageValidator;
//# sourceMappingURL=language.js.map
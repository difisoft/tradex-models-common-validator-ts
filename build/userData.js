"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Ajv = require("ajv");
exports.userDataSchema = {
    "id": "http://tradex.techx.vn/common/userData",
    "$schema": "http://json-schema.org/draft-07/schema#",
    "description": "An user data in token",
    "type": "object",
    "properties": {
        "username": {
            "type": "string"
        },
        "orderKeys": {
            "type": [
                "null",
                "number"
            ]
        },
        "identifierNumber": {
            "type": "string"
        },
        "branchCode": {
            "type": "string"
        },
        "mngDeptCode": {
            "type": "string"
        },
        "deptCode": {
            "type": "string"
        },
        "agencyNumber": {
            "type": "string"
        },
        "accountNumbers": {
            "type": "array",
            "items": {
                "type": "string"
            }
        },
        "fssTokenId": {
            "type": "string"
        }
    }
};
let userDataAjv = null;
function userDataValidator() {
    if (userDataAjv == null) {
        userDataAjv = new Ajv({ validateSchema: false }).compile(exports.userDataSchema);
    }
    return userDataAjv;
}
exports.userDataValidator = userDataValidator;
//# sourceMappingURL=userData.js.map
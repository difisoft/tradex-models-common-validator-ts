"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokenValidator = exports.tokenSchema = void 0;
const Ajv = require("ajv");
exports.tokenSchema = {
    "id": "http://tradex.techx.vn/common/token",
    "$schema": "http://json-schema.org/draft-07/schema#",
    "description": "A geographical coordinate",
    "type": "object",
    "properties": {
        "domain": {
            "type": [
                "null",
                "string"
            ]
        },
        "userId": {
            "type": [
                "null",
                "number"
            ]
        },
        "serviceCode": {
            "type": [
                "null",
                "string"
            ]
        },
        "connectionId": {
            "type": [
                "null",
                "string"
            ]
        },
        "sessionId": {
            "description": "only use for vcsc rest",
            "type": [
                "null",
                "string"
            ]
        },
        "serviceId": {
            "type": [
                "null",
                "string"
            ]
        },
        "serviceName": {
            "type": [
                "null",
                "string"
            ]
        },
        "clientId": {
            "type": [
                "null",
                "number"
            ]
        },
        "serviceUserId": {
            "type": [
                "null",
                "number"
            ]
        },
        "loginMethod": {
            "type": [
                "null",
                "number"
            ]
        },
        "refreshTokenId": {
            "type": "number"
        },
        "scopeGroupIds": {
            "type": "array",
            "items": {
                "type": "number"
            }
        },
        "serviceUsername": {
            "type": [
                "null",
                "string"
            ]
        },
        "userData": {
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
        }
    }
};
let tokenAjv = null;
function tokenValidator() {
    if (tokenAjv == null) {
        tokenAjv = new Ajv({ validateSchema: false }).compile(exports.tokenSchema);
    }
    return tokenAjv;
}
exports.tokenValidator = tokenValidator;
//# sourceMappingURL=token.js.map
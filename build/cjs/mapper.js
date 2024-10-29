"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.map = void 0;
/**
 * Map the script response to a response that the typeahead can use
 * @param r The response from the script
 * @returns The mapped response
 */
const map = (r) => {
    const result = [];
    let i = 0;
    r.records.forEach((record) => {
        if (record instanceof Object) {
            result.push({
                name: record.label,
                id: record.id
            });
        }
        else {
            result.push({
                name: record,
                id: i++
            });
        }
    });
    return result;
};
exports.map = map;

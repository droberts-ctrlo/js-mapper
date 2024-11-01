"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formdataMapper = void 0;
const formdataMapper = (data) => {
    if (data instanceof FormData) {
        let hasData = false;
        data.forEach(() => {
            hasData = true;
            return;
        });
        if (!hasData)
            throw new Error("Cannot map an empty object");
        return data;
    }
    if (data instanceof Object && Object.keys(data).length === 0)
        throw new Error("Cannot map an empty object");
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
        formData.append(key, value);
    });
    return formData;
};
exports.formdataMapper = formdataMapper;

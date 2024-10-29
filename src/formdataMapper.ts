/**
 * Map a javascript object to FormData
 * @param data The data to map
 * @returns The object mapped as FormData
 */
export function formdataMapper<T>(data: FormData | T):FormData {
    if (data instanceof FormData) {
        let hasData = false;
        data.forEach(() => {
            hasData = true;
            return;
        });
        if(!hasData) throw new Error("Cannot map an empty object");
        return data;
    }
    if(data instanceof Object && Object.keys(data).length === 0) throw new Error("Cannot map an empty object");
    const formData = new FormData();
    Object.entries(<any>data).forEach(([key, value]) => {
        formData.append(key, <any>value);
    });
    return formData;
}

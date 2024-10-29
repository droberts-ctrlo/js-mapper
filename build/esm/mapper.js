/**
 * Map the script response to a response that the typeahead can use
 * @param r The response from the script
 * @returns The mapped response
 */
export const map = (r) => {
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

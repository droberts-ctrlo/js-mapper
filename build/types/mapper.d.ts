export type MappedResponse = {
    name: string;
    id: number;
};
export type MapperFunction = (input: any) => MappedResponse[];
/**
 * Map the script response to a response that the typeahead can use
 * @param r The response from the script
 * @returns The mapped response
 */
export declare const map: MapperFunction;

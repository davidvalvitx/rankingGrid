import { dataViewObjectsParser } from "powerbi-visuals-utils-dataviewutils";
import DataViewObjectsParser = dataViewObjectsParser.DataViewObjectsParser;
export declare class colorinchisSettings {
    color: string;
    showAllDataPoints: boolean;
}
export declare class VisualSettings extends DataViewObjectsParser {
    colors: colorinchisSettings;
}

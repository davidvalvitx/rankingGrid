import { dataViewObjectsParser } from "powerbi-visuals-utils-dataviewutils";
import DataViewObjectsParser = dataViewObjectsParser.DataViewObjectsParser;
export declare class indicadorSettings {
    textSize: number;
    colorText: string;
}
export declare class rankingSettings {
    tamanoRank: number;
    colorRank: string;
    tamanoNumero: number;
    textSize: number;
}
export declare class VisualSettings extends DataViewObjectsParser {
    ranking: rankingSettings;
    indicador: indicadorSettings;
}

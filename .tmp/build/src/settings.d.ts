import { dataViewObjectsParser } from "powerbi-visuals-utils-dataviewutils";
import DataViewObjectsParser = dataViewObjectsParser.DataViewObjectsParser;
export declare class rankingSettings {
    tamanoRank: number;
    colorRank: string;
    tamanoNumero: number;
    textSize: number;
    turnCards: boolean;
}
export declare class scrollBarSettings {
    scrollBar: string;
}
export declare class indicadorSettings {
    textSize: number;
    colorText: string;
}
export declare class VisualSettings extends DataViewObjectsParser {
    ranking: rankingSettings;
    indicador: indicadorSettings;
    scrollbar: scrollBarSettings;
}

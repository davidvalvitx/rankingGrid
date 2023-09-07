"use strict";

import { dataViewObjectsParser } from "powerbi-visuals-utils-dataviewutils";
import DataViewObjectsParser = dataViewObjectsParser.DataViewObjectsParser;
import { TEXT_SIZE, TEXT_COLOR, RANK_COLOR, SIZE, RANK_FONT, SCROLL_BAR, RANK_BG } from "./constants";


export class rankingSettings {
  public tamanoRank: number = SIZE;
  public colorRank: string = RANK_COLOR;
  public colorHeader: string = RANK_BG;
  public textSize: number = RANK_FONT;
  public turnCards: boolean = false;
}

export class scrollBarSettings {
  public scrollBar: string = SCROLL_BAR;
}

export class indicadorSettings {
  public textSize: number = TEXT_SIZE;
  public colorText: string = TEXT_COLOR;
}

export class VisualSettings extends DataViewObjectsParser {
  public ranking: rankingSettings = new rankingSettings();
  public indicador: indicadorSettings = new indicadorSettings();
  public scrollbar: scrollBarSettings = new scrollBarSettings();
}

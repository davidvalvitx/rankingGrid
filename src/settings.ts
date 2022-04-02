"use strict";

import { dataViewObjectsParser } from "powerbi-visuals-utils-dataviewutils";
import DataViewObjectsParser = dataViewObjectsParser.DataViewObjectsParser;

export class colorinchisSettings {
  // Default color
  public color: string = "#5555FF";
  public showAllDataPoints: boolean = true;
}


export class VisualSettings extends DataViewObjectsParser {
  public colors: colorinchisSettings = new colorinchisSettings();
}

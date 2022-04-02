import powerbi from "powerbi-visuals-api";
import DataView = powerbi.DataView;
import VisualConstructorOptions = powerbi.extensibility.visual.VisualConstructorOptions;
import VisualUpdateOptions = powerbi.extensibility.visual.VisualUpdateOptions;
import IVisual = powerbi.extensibility.visual.IVisual;
import DataViewCategoryColumn = powerbi.DataViewCategoryColumn;
import ISelectionId = powerbi.visuals.ISelectionId;
import EnumerateVisualObjectInstancesOptions = powerbi.EnumerateVisualObjectInstancesOptions;
import VisualObjectInstanceEnumeration = powerbi.VisualObjectInstanceEnumeration;
import "./../style/visual.less";
export interface ISelectionIdBuilder {
    withCategory(categoryColumn: DataViewCategoryColumn, index: number): this;
    createSelectionId(): ISelectionId;
}
export declare class Visual implements IVisual {
    private visualSettings;
    private target;
    private reactRoot;
    private host;
    private selectionManager;
    private selectionIdBuilder;
    constructor(options: VisualConstructorOptions);
    private clear;
    enumerateObjectInstances(options: EnumerateVisualObjectInstancesOptions): VisualObjectInstanceEnumeration;
    private dataExtraction;
    selectData(options: VisualUpdateOptions, dataView: DataView): void;
    update(options: VisualUpdateOptions): void;
}

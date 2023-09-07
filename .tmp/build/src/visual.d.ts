import powerbi from "powerbi-visuals-api";
import VisualConstructorOptions = powerbi.extensibility.visual.VisualConstructorOptions;
import VisualUpdateOptions = powerbi.extensibility.visual.VisualUpdateOptions;
import IVisual = powerbi.extensibility.visual.IVisual;
import VisualObjectInstance = powerbi.VisualObjectInstance;
import EnumerateVisualObjectInstancesOptions = powerbi.EnumerateVisualObjectInstancesOptions;
import VisualObjectInstanceEnumerationObject = powerbi.VisualObjectInstanceEnumerationObject;
import "./../style/visual.less";
export declare class Visual implements IVisual {
    private settings;
    private target;
    private reactRoot;
    private host;
    private selectionIdBuilder;
    private selectionManager;
    constructor(options: VisualConstructorOptions);
    private clear;
    private dataExtraction;
    enumerateObjectInstances(options: EnumerateVisualObjectInstancesOptions): VisualObjectInstance[] | VisualObjectInstanceEnumerationObject;
    private visualTransform;
    selectedValue: (obj: any, number: any) => void;
    getMoreData: () => void;
    update(options: VisualUpdateOptions): void;
}

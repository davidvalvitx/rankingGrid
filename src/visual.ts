import * as React from "react";
import * as ReactDOM from "react-dom";

import powerbi from "powerbi-visuals-api";
import DataView = powerbi.DataView;

import VisualConstructorOptions = powerbi.extensibility.visual.VisualConstructorOptions;
import VisualUpdateOptions = powerbi.extensibility.visual.VisualUpdateOptions;
import IVisual = powerbi.extensibility.visual.IVisual;

import DataViewCategorical = powerbi.DataViewCategorical;
import IVisualHost = powerbi.extensibility.visual.IVisualHost;
import VisualObjectInstance = powerbi.VisualObjectInstance;

import EnumerateVisualObjectInstancesOptions = powerbi.EnumerateVisualObjectInstancesOptions;
import VisualObjectInstanceEnumerationObject = powerbi.VisualObjectInstanceEnumerationObject;

import { RankingGrid, initialState, State } from "./component";
import { VisualSettings } from "./settings";
import "./../style/visual.less";

import { dataViewWildcard } from "powerbi-visuals-utils-dataviewutils";
import VisualEnumerationInstanceKinds = powerbi.VisualEnumerationInstanceKinds;
import ISelectionIdBuilder =  powerbi.extensibility.ISelectionId
import ISelectionManager =  powerbi.extensibility.ISelectionManager


export class Visual implements IVisual {
    private settings: VisualSettings;
    private target: HTMLElement;
    private reactRoot: React.ComponentElement<any, any>;
    private host: IVisualHost;
    private selectionIdBuilder: ISelectionIdBuilder;
    private selectionManager: ISelectionManager;

    constructor(options: VisualConstructorOptions) {
        this.reactRoot = React.createElement(RankingGrid, {});
        this.target = options.element;
        this.host = options.host;
        this.selectionManager = this.host.createSelectionManager()

        ReactDOM.render(this.reactRoot, this.target);
    }


    private clear() {
        RankingGrid.update(initialState);
    }

    private dataExtraction(dataView: DataView) {
        const categoricalDataView: DataViewCategorical = dataView.categorical;
        const categoryColumn = categoricalDataView.categories[0];
        const categoryValues = categoryColumn.values;

        let KPIValues = dataView.categorical.values[0].values;
        let RankingValues = dataView.categorical.values[1].values;
        let secRank = dataView.categorical.values[2].values;
        let Flag = dataView.categorical.values[3].values;

        interface IDatapoint extends State {}

        const Datapoints: IDatapoint = {
            data: []
        }

        for (let i = 0; i < categoryValues.length; i++) {

            const categorySelectionId = this.host.createSelectionIdBuilder()
            .withCategory( categoryColumn, i)
            .createSelectionId();

            Datapoints.data.push({
                Imagen: categoryValues[i].valueOf() as string,
                KPI: KPIValues[i].valueOf() as number,
                Ranking: RankingValues[i].valueOf() as number,
                secRank: secRank[i].valueOf() as number,
                Flag: Flag[i].valueOf() as number,
                selectionId: categorySelectionId
            })
        }

        return {Datapoints}
    }


    public enumerateObjectInstances(
        options: EnumerateVisualObjectInstancesOptions
    ): VisualObjectInstance[] | VisualObjectInstanceEnumerationObject {
        let objectName = options.objectName;
        let objectEnumeration: VisualObjectInstance[] = [];

        switch(objectName) {
            case 'ranking':
                objectEnumeration.push({
                    objectName: objectName,
                    properties: {
                        colorHeader: this.settings.ranking.colorHeader
                    },
                    propertyInstanceKind: {
                        colorHeader: VisualEnumerationInstanceKinds.ConstantOrRule
                    },
                    altConstantValueSelector: null,
                    selector: dataViewWildcard.createDataViewWildcardSelector(dataViewWildcard.DataViewWildcardMatchingOption.InstancesAndTotals)
                });
                break;
        };

        return VisualSettings.enumerateObjectInstances(this.settings || VisualSettings.getDefault(), options);
        // return objectEnumeration;
    }

    private visualTransform = (dataview: DataView) => {
        this.settings = VisualSettings.parse(dataview) as VisualSettings;

        if (dataview) {
            var metadata: any = dataview.metadata;

            if (metadata && metadata.objects && metadata.objects.ranking && metadata.objects.ranking.colorHeader) {
                this.settings.ranking.colorHeader = metadata.objects.ranking.colorHeader.solid.color
            }

        }
    }

    public selectedValue = (obj, number: any) => {
        this.selectionManager.select(obj.data[number].selectionId)
    };
    
    public getMoreData = () => {
        this.host.fetchMoreData();
    }

    public update(options: VisualUpdateOptions) {

        
        if (options && options.dataViews && options.dataViews[0]) {
            const dataView: DataView = options.dataViews[0];
            this.visualTransform(dataView)

            const categoricalDataView: DataViewCategorical = dataView.categorical;
            const categoryColumn = categoricalDataView.categories[0];
            const categoryValues = categoryColumn.values;


            this.settings = VisualSettings.parse(dataView) as VisualSettings;
            const indicador = this.settings.indicador;
            const ranking = this.settings.ranking;
            const scroll = this.settings.scrollbar;

            const data = this.dataExtraction(dataView).Datapoints;
            const lastCall = (dataView.metadata.segment) ? false : true;

            const stopFetch = !this.host.fetchMoreData()

            if (!lastCall) {
                this.host.fetchMoreData();
            } else {
                stopFetch
            }

            
            data.scrollColor = scroll && scroll.scrollBar ? scroll.scrollBar : undefined
            data.textSize = indicador && indicador.textSize ? indicador.textSize : undefined
            data.colorText = indicador && indicador.colorText ? indicador.colorText : undefined

            data.turnCards = ranking && ranking.turnCards ? ranking.turnCards : undefined
            data.size = ranking && ranking.tamanoRank ? ranking.tamanoRank : undefined
            data.color = ranking && ranking.colorRank ? ranking.colorRank : undefined
            data.textSizeRank = ranking && ranking.textSize ? ranking.textSize : undefined
            // data.colorHeader = ranking && ranking.colorHeader ? ranking.colorHeader : undefined

            console.log(data);
            // this.selectedValue(data, 27)
            RankingGrid.update(data);

        } else {
            this.clear();
        }
    }
}



// Pending cross-filtering and highlighting
// "use strict";
import powerbi from "powerbi-visuals-api";
import DataView = powerbi.DataView;
import VisualConstructorOptions = powerbi.extensibility.visual.VisualConstructorOptions;
import VisualUpdateOptions = powerbi.extensibility.visual.VisualUpdateOptions;
import IVisual = powerbi.extensibility.visual.IVisual;
import DataViewCategorical = powerbi.DataViewCategorical;
import DataViewCategoryColumn = powerbi.DataViewCategoryColumn;
import ISelectionId = powerbi.visuals.ISelectionId;
import DataViewValueColumnGroup = powerbi.DataViewValueColumnGroup;
import DataViewValueColumn = powerbi.DataViewValueColumn;
import PrimitiveValue = powerbi.PrimitiveValue;
import IVisualHost = powerbi.extensibility.visual.IVisualHost;
import ISelectionManager = powerbi.extensibility.ISelectionManager;
import * as React from "react";
import * as ReactDOM from "react-dom";
import { RankingGrid, initialState, State } from "./component";

import "./../style/visual.less";

export interface ISelectionIdBuilder {
    withCategory(categoryColumn: DataViewCategoryColumn, index: number): this;
    createSelectionId(): ISelectionId;

}

export class Visual implements IVisual {
    private target: HTMLElement;
    private reactRoot: React.ComponentElement<any, any>;
    private host: IVisualHost;
    private selectionManager: ISelectionManager;
    private selectionIdBuilder: ISelectionIdBuilder;

    constructor(options: VisualConstructorOptions) {
        this.reactRoot = React.createElement(RankingGrid, {});
        this.target = options.element;
        this.host = options.host;
        this.selectionManager = this.host.createSelectionManager();
        this.selectionIdBuilder = options.host.createSelectionIdBuilder();

        options.element.style.overflow = 'auto';

        ReactDOM.render(this.reactRoot, this.target);
    }


    private clear() {
        RankingGrid.update(initialState);
    }


    private dataExtraction(dataView: DataView) {
        const categoricalDataView: DataViewCategorical = dataView.categorical;
        const categoryColumn = categoricalDataView.categories[0];
        const categoryValues = categoryColumn.values;
        let KPI = dataView.categorical.values[0];
        let KPIValues = KPI.values;
        let Ranking = dataView.categorical.values[1];
        let RankingValues = Ranking.values;

        const items: State = { Imagen: [], KPI: [], Ranking: [], ISelectionId: [] }

        for (let i = 0; i < categoryValues.length; i++) {

            let image: string = categoryValues[i].valueOf() as string;
            let kpi: number = KPIValues[i].valueOf() as number;
            let rank: number = RankingValues[i].valueOf() as number;


            items.Imagen.push(image)
            items.KPI.push(kpi)
            items.Ranking.push(rank)
        }
        return {
            items

        }
    }

    public selectData(options: VisualUpdateOptions, dataView: DataView) {
        let dataViews = options.dataViews
        let categorical = dataViews[0].categorical;
        let dataValues = categorical.values;

        for (let dataValue of dataValues) {
            let values = dataValue.values;
            for (let i = 0, len = dataValue.values.length; i < len; i++) {
                let selectionId = this.host.createSelectionIdBuilder()
                    .withCategory(categorical.categories[0], i)
                    .withMeasure(dataValue.source.queryName)
                    .withSeries(categorical.values, categorical.values[i])
                    .createSelectionId();
                this.selectionManager.select(selectionId).then((ids: ISelectionId[]) => {
                    //called when setting the selection has been completed successfully
                });
            }

        }

    }


    public update(options: VisualUpdateOptions) {
        if (options.dataViews && options.dataViews[0]) {
            const dataView: DataView = options.dataViews[0];
            const categoricalDataView: DataViewCategorical = dataView.categorical;
            const categories: DataViewCategoryColumn = categoricalDataView.categories[0];
            const categoryValues = categories.values;

            const measures: DataViewValueColumn = categoricalDataView.values[0];
            const measureValues = measures.values;
            const measureHighlights = measures.highlights;

            categoryValues.forEach((category: PrimitiveValue, index: number) => {
                const measureValue = measureValues[index];
                const measureHighlight = measureHighlights && measureHighlights[index] ? measureHighlights[index] : null;
                console.log(category, measureValue, measureHighlight);
            });
            RankingGrid.update(this.dataExtraction(dataView).items);

        } else {
            this.clear();
        }
    }
}

// Pending cross-filtering and highlighting
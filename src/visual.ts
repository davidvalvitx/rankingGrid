// "use strict";
import powerbi from "powerbi-visuals-api";
import DataView = powerbi.DataView;
import VisualConstructorOptions = powerbi.extensibility.visual.VisualConstructorOptions;
import VisualUpdateOptions = powerbi.extensibility.visual.VisualUpdateOptions;
import IVisual = powerbi.extensibility.visual.IVisual;
import DataViewCategorical = powerbi.DataViewCategorical;
import DataViewValueColumnGroup = powerbi.DataViewValueColumnGroup;
import PrimitiveValue = powerbi.PrimitiveValue;
import IVisualHost = powerbi.extensibility.visual.IVisualHost;
import * as React from "react";
import * as ReactDOM from "react-dom";
import { RankingGrid, initialState, State } from "./component";

import "./../style/visual.less";


export class Visual implements IVisual {
    private target: HTMLElement;
    private reactRoot: React.ComponentElement<any, any>;

    constructor(options: VisualConstructorOptions) {
        this.reactRoot = React.createElement(RankingGrid, {});
        this.target = options.element;
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

        const items: State = { Imagen: [], KPI: [], Ranking: [] }

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


    public update(options: VisualUpdateOptions) {
        if (options.dataViews && options.dataViews[0]) {
            const dataView: DataView = options.dataViews[0];
            RankingGrid.update(this.dataExtraction(dataView).items);


        } else {
            this.clear();
        }
    }
}
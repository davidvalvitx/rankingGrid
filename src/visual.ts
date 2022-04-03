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
import Scrollbar from "./scrollbar/scroll";


export class Visual implements IVisual {
    private settings: VisualSettings;
    private target: HTMLElement;
    private reactRoot: React.ComponentElement<any, any>;
    private host: IVisualHost;

    constructor(options: VisualConstructorOptions) {
        this.reactRoot = React.createElement(RankingGrid, {});
        this.target = options.element;
        this.host = options.host;
        // options.element.style.overflow = 'auto';

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

        const items: State = { Imagen: [], KPI: [], Ranking: [], secRank: [] }
        // const items: State = { Imagen: [], KPI: [], Ranking: [] }

        for (let i = 0; i < categoryValues.length; i++) {

            let image: string = categoryValues[i].valueOf() as string;
            let kpi: number = KPIValues[i].valueOf() as number;
            let rank: number = RankingValues[i].valueOf() as number;
            let rankSec: number = secRank[i].valueOf() as number;


            items.Imagen.push(image)
            items.KPI.push(kpi)
            items.Ranking.push(rank)
            items.secRank.push(rankSec)
        }
        return {
            items

        }
    }


    public enumerateObjectInstances(
        options: EnumerateVisualObjectInstancesOptions
    ): VisualObjectInstance[] | VisualObjectInstanceEnumerationObject {

        return VisualSettings.enumerateObjectInstances(this.settings || VisualSettings.getDefault(), options);
    }

    public update(options: VisualUpdateOptions) {

        if (options && options.dataViews && options.dataViews[0]) {
            const dataView: DataView = options.dataViews[0];
            const categoricalDataView: DataViewCategorical = dataView.categorical;
            const categoryColumn = categoricalDataView.categories[0];
            const categoryValues = categoryColumn.values;

            // To fetch more data:
            this.settings = VisualSettings.parse(dataView) as VisualSettings;
            const indicador = this.settings.indicador;
            const ranking = this.settings.ranking;
            // const scroll = this.settings.scrollbar;


            if (dataView.metadata.segment) {

                let stopFetch = false;
                stopFetch = !this.host.fetchMoreData();
                const data = this.dataExtraction(dataView).items;

                // data.scrollColor = scroll && scroll.scrollBar ? scroll.scrollBar : undefined
                data.textSize = indicador && indicador.textSize ? indicador.textSize : undefined
                data.colorText = indicador && indicador.colorText ? indicador.colorText : undefined

                data.tamanoRank = ranking && ranking.tamanoNumero ? ranking.tamanoNumero : undefined
                data.size = ranking && ranking.tamanoRank ? ranking.tamanoRank : undefined
                data.color = ranking && ranking.colorRank ? ranking.colorRank : undefined
                data.textSizeRank = ranking && ranking.textSize ? ranking.textSize : undefined

                RankingGrid.update(data);
                // console.log(`Cargado ${categoryValues.length}`);

                // console.log(`Paro?: ${stopFetch}`);

                if (stopFetch) {
                    // console.log(`Cargado ${categoryValues.length}`);


                } else {
                    // console.log('Listo');
                }
            }
            const data = this.dataExtraction(dataView).items;

            data.textSize = indicador && indicador.textSize ? indicador.textSize : undefined
            data.colorText = indicador && indicador.colorText ? indicador.colorText : undefined

            data.tamanoRank = ranking && ranking.tamanoNumero ? ranking.tamanoNumero : undefined
            data.size = ranking && ranking.tamanoRank ? ranking.tamanoRank : undefined
            data.color = ranking && ranking.colorRank ? ranking.colorRank : undefined
            data.textSizeRank = ranking && ranking.textSize ? ranking.textSize : undefined

            console.log(data);
            RankingGrid.update(data);

        } else {
            this.clear();
        }
    }
}



// Pending cross-filtering and highlighting
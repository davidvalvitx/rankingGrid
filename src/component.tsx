import * as React from "react";
import Scrollbar from "./components/scrollbar/scroll";
import GridR from './components/card/grid';
import Flip from './components/card/flip';
import { Rank, RankGrey } from './components/card/rank';
import KPI from './components/card/kpi';
import { Info, Datos, Image } from './components/card/layout';
import { SlideZara, GridSlider } from './components/slider/slider';


export interface State {
    Imagen: string[],
    KPI: number[],
    Ranking: number[],
    secRank: number[],
    size?: number,
    color?: string
    textSize?: number,
    colorText?: string,
    tamanoRank?: number
    textSizeRank?: number,
    scrollColor?: string,
    turnCards?: boolean,
    tamanoSlicer?: number
}

export const initialState: State = {
    Imagen: [""],
    KPI: [0],
    Ranking: [0],
    secRank: [0],
    tamanoSlicer: 1
}

export class RankingGrid extends React.Component<{}, State>{
    constructor(props: any) {
        super(props);
        this.state = initialState;
    }

    private static updateCallback: (data: object) => void = null;

    public static update(newState: State) {
        if (typeof RankingGrid.updateCallback === 'function') {
            RankingGrid.updateCallback(newState);
        }
    }

    public state: State = initialState;

    public componentWillMount() {
        RankingGrid.updateCallback = (newState: State): void => { this.setState(newState); };
    }

    public componentWillUnmount() {
        RankingGrid.updateCallback = null;
    }

    render() {
        const { size, color, textSize, colorText, tamanoRank, textSizeRank, scrollColor, turnCards } = this.state;
        const sizeOk = (size * this.state.tamanoSlicer) + "px";
        const alto = (size * this.state.tamanoSlicer * 1.5) + "px";
        const altoCajaRanking = tamanoRank + "px"

        const handleChange = (event, newValue) => {
            var timeout;
            timeout && clearTimeout(timeout);
            timeout = setTimeout(() => {
                this.setState({
                    tamanoSlicer: newValue
                });
            }, 200);
        };

        return (
            <>
                <div className="App">
                    <Scrollbar color={scrollColor}>
                        <GridSlider>
                            <SlideZara
                                defaultValue={this.state.tamanoSlicer}
                                step={0.5}
                                min={1}
                                max={2}
                                size="small"
                                onChange={handleChange}
                            />
                        </GridSlider>
                        <GridR size={sizeOk}>
                            {this.state.Imagen.map(
                                (x, i) => {
                                    return (
                                        <Flip size={sizeOk} alto={alto} turnCards={turnCards}>
                                            <Info>
                                                <div className="imagen" style={{ "height": alto }}>
                                                    <Image size={sizeOk} key={i} src={x} alt="" />
                                                </div>
                                                <Datos size={sizeOk} key={i}>
                                                    <Rank style={{ "backgroundColor": color }}>
                                                        <p style={{ "fontSize": textSizeRank, "margin": 0, "alignSelf": "center" }}>
                                                            {this.state.Ranking[i]}
                                                        </p>
                                                    </Rank>
                                                    <RankGrey>
                                                        <p style={{
                                                            "fontSize": textSizeRank,
                                                            "margin": 0, "alignSelf": "center"
                                                        }}>
                                                            {this.state.secRank[i]}
                                                        </p>
                                                    </RankGrey>
                                                    <KPI color={colorText} textSize={textSize}>
                                                        {this.state.KPI[i].toLocaleString(undefined,
                                                            { minimumFractionDigits: 0, maximumFractionDigits: 2 })}
                                                    </KPI>
                                                </Datos>
                                            </Info>
                                        </Flip>
                                    )
                                }
                            )}
                        </GridR>
                    </Scrollbar>
                </div >
            </>

        )
    }
}
export default RankingGrid;
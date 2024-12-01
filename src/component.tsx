import * as React from "react";
import Scrollbar from "./components/scrollbar/scroll";
import GridR from "./components/card/grid";
import Flip from "./components/card/flip";
import Marca from "./components/card/flag";
import { Rank, RankGrey } from "./components/card/rank";
import KPI from "./components/card/kpi";
import { Info, Datos, Image } from "./components/card/layout";
import { SlideZara, GridSlider } from "./components/slider/slider";
import { Visual } from "./visual";

import "./../style/visual.css";

import powerbi from "powerbi-visuals-api";
import ISelectionId = powerbi.visuals.ISelectionId;
import ISelectionManager = powerbi.extensibility.ISelectionManager;

interface Data {
  Imagen?: string;
  KPI?: number;
  Ranking?: number;
  secRank?: number;
  Flag?: number;
  selectionId?: ISelectionId;
}

export interface State {
  data?: Data[];
  size?: number;
  color?: string;
  textSize?: number;
  colorText?: string;
  textSizeRank?: number;
  scrollColor?: string;
  turnCards?: boolean;
  tamanoSlicer?: number;
  colorHeader?: string;
}

export const initialState: State = {
  data: [
    {
      Imagen: "",
      KPI: 0,
      Ranking: 0,
      secRank: 0,
      Flag: 0,
    },
  ],
  tamanoSlicer: 1,
};

export class RankingGrid extends React.Component<{}, State> {
  constructor(props: any) {
    super(props);
    this.state = initialState;
  }

  private static updateCallback: (data: object) => void = null;

  public static update(newState: State) {
    if (typeof RankingGrid.updateCallback === "function") {
      RankingGrid.updateCallback(newState);
    }
  }

  public state: State = initialState;

  public componentWillMount() {
    RankingGrid.updateCallback = (newState: State): void => {
      this.setState(newState);
    };
  }

  public componentWillUnmount() {
    RankingGrid.updateCallback = null;
  }

  handleSelection(selectionId) {
    Visual;
  }

  render() {
    const {
      size,
      color,
      textSize,
      colorText,
      textSizeRank,
      scrollColor,
      turnCards,
    } = this.state;
    const sizeOk = size * this.state.tamanoSlicer;
    const alto = size * this.state.tamanoSlicer * 1.5;
    // const altoCajaRanking = tamanoRank + "px"

    const handleChange = (event, newValue) => {
      var timeout;
      timeout && clearTimeout(timeout);
      timeout = setTimeout(() => {
        this.setState({
          tamanoSlicer: newValue,
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
              {this.state.data.map((x, i) => {
                return (
                  <Flip size={sizeOk} turnCards={turnCards}>
                    <Info onClick={() => this.handleSelection(x.selectionId)}>
                      <Datos key={i}>
                        <Rank style={{ backgroundColor: color }}>
                          <p
                            style={{
                              fontSize: textSizeRank,
                              margin: 0,
                              alignSelf: "center",
                            }}
                          >
                            {x.Ranking}
                          </p>
                        </Rank>
                        <RankGrey style={{ backgroundColor: "#ffffff" }}>
                          <p
                            style={{
                              fontSize: textSizeRank,
                              margin: 0,
                              alignSelf: "center",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              whiteSpace: "nowrap",
                            }}
                          >
                            {x.secRank}
                          </p>
                        </RankGrey>
                      </Datos>
                      <div style={{ position: "relative", height: alto }}>
                        <Image size={alto} key={i} src={x.Imagen} alt="" />
                        <Marca flag={x.Flag}></Marca>
                      </div>
                      <KPI color={colorText} textSize={textSize} flag={x.Flag}>
                        {x.KPI.toLocaleString(undefined, {
                          minimumFractionDigits: 0,
                          maximumFractionDigits: 2,
                        })}
                      </KPI>
                    </Info>
                  </Flip>
                );
              })}
            </GridR>
            {/* <div className="btw--wrap">
                                <button onClick={() => console.log("salh")} className="btn">Pulsa aqui</button>
                                </div> */}
          </Scrollbar>
        </div>
      </>
    );
  }
}
export default RankingGrid;

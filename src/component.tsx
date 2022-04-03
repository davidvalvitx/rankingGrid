import * as React from "react";
import Scrollbar from "./scrollbar/scroll";
import styled from "styled-components";

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
    scrollColor?: string
}

export const initialState: State = {
    Imagen: [""],
    KPI: [0],
    Ranking: [0],
    secRank: [0]
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
        const { size, color, textSize, colorText, tamanoRank, textSizeRank, scrollColor } = this.state;
        const sizeOk = size + "px";
        const size2 = 95 + "px";
        const alto = (size * 1.5) + "px";

        const Grid = styled.div`
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(${sizeOk}, 1fr));
            justify-content: start;
            justify-items: center;
            align-items: center;
            gap: 10px;
        `

        const Producto = styled.div`
            background-color: transparent;
            border: 1px solid transparent;
            width:${sizeOk};
            height:${alto};
            max-width: ${sizeOk};
            padding: 1px;
            margin-bottom: 20%;
            &:hover {
                // border: 1px solid grey;
              };
        `

        const ProductoFlip = styled.div`
            position: relative;
            width: 100%;
            height: 100%;
            text-align: center;
            transition: transform 0.6s;
            transform-style: preserve-3d;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            ${Producto}: hover & {
                transform: rotateY(180deg);
            };
        `

        const ProductoFrente = styled.div`
            position: absolute;
            width: 100%;
            height: 100%;
            backface-visibility: hidden;
            background-color: #bbb;
        `

        const ProductoAtras = styled.div`
            position: absolute;
            width: 100%;
            height: 100%;
            backface-visibility: hidden;
            transform: rotateY(180deg);
            background-color: white;
        `

        const Info = styled.div`
            display: flex;
        `

        const Datos = styled.div`
            position: absolute;
            top: 0;
            left: 0;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            background-color: transparent;
            margin-bottom: 6%;
            height: ${sizeOk};
            // transform: translateX(-${sizeOk});
        `
        const Rank = styled.div`
            position: inline-block;
            align-self: flex-start;
            align-content: center;
            justify-content: center;
            min-height: 15px;
            min-width: 15px;
            color: white;
            padding: 0.5em ;
            font-weight: 100;
            max-width: ${sizeOk};
            min-width: ${tamanoRank};
            height: ${tamanoRank};
        `

        const RankGrey = styled.div`
            position: inline-block;
            margin-right: auto;
            align-self: flex-start;
            align-content: center;
            justify-content: center;
            min-height: 15px;
            min-width: 15px;
            color: white;
            padding: 0.5em ;
            font-weight: 100;
            max-width: ${sizeOk};
            min-width: ${tamanoRank};
            height: ${tamanoRank};
            background-color: grey;
        `

        const Image = styled.img`
            width: ${sizeOk}; 
            min-height: 100%;
            object-fit: cover;
        `

        const KPIBox = styled.div`
            position: absolute;
            top: 0;
            display: flex;
            background-color: rgb(255, 255, 255);
            width: fit-content;
            height: fit-content;
            min-width: 55px;
            min-height: 20px;
            margin-top: 100%;
        `

        const KPIText = styled.p`
            margin: 0;
            text-transform: uppercase;
            vertical-align: middle;
            line-height: 20px;
            font-weight: 700;
            margin-left: 0.6em;
            margin-right: 0.5em;
            padding: 0.2em;
            color: ${colorText};
        `

        // const Marcas = styled.div`
        //     position: relative;
        //     right: 95px;
        //     // transform: translateX(-${size2});
        //     display: flex;
        //     flex-direction: column;
        //     max-width: 40px;
        //     align-self: flex-start;
        //     justify-content: space-between;
        //     flex: 1;
        //     direction: rtl;
        //     z-index: 10;  
        // `
        // const Marca = styled.div`
        //     display: flex;
        //     height: 20px;
        //     min-width: 20px;
        //     width: fit-content;
        //     background-color: transparent;
        //     margin-bottom: 20%;
        // `

        return (
            <>
                <div className="App">
                    <Scrollbar>
                        <Grid>
                            {this.state.Imagen.map(
                                (x, i) => {
                                    return (
                                        <Producto>
                                            <ProductoFlip>
                                                <ProductoFrente>
                                                    <Info>
                                                        <div className="imagen" style={{ "height": alto }}>
                                                            <Image key={i} src={x} alt="" />
                                                        </div>
                                                        <Datos key={i}>
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
                                                            <KPIBox>
                                                                <KPIText style={{ "fontSize": textSize }}>
                                                                    {this.state.KPI[i].toLocaleString(undefined,
                                                                        { minimumFractionDigits: 0, maximumFractionDigits: 2 })}
                                                                </KPIText>
                                                            </KPIBox>
                                                        </Datos>
                                                    </Info>
                                                </ProductoFrente>
                                                <ProductoAtras>
                                                    <p style={{
                                                        "position": "absolute", "top": "50%",
                                                        "left": "50%", "marginRight": "-50%",
                                                        "transform": "translate(-50%,-50%)", "width": "90%"
                                                    }}>
                                                        Aquí se pueden meter más KPIs
                                                    </p>
                                                </ProductoAtras>
                                                {/* <Info>
                                                        <Datos key={i}>
                                                            <Ranks>
                                                                <Rank style={{ "backgroundColor": color }}>
                                                                    <p style={{ "fontSize": textSizeRank, "margin": 0, "alignSelf": "center" }}>
                                                                        {this.state.Ranking[i]}
                                                                    </p>
                                                                </Rank>
                                                                <Rank style={{ "backgroundColor": "grey" }}>
                                                                    <p style={{ "fontSize": textSizeRank, "margin": 0, "alignSelf": "center" }}>
                                                                        {this.state.secRank[i]}
                                                                    </p>
                                                                </Rank>
                                                            </Ranks>
                                                            <KPIBox>
                                                                <KPIText style={{ "fontSize": textSize }}>
                                                                    {this.state.KPI[i].toLocaleString(undefined,
                                                                        { minimumFractionDigits: 0, maximumFractionDigits: 2 })}
                                                                </KPIText>
                                                            </KPIBox>
                                                        </Datos> */}
                                                {/* <Marcas>
                                                    <Marca></Marca>
                                                    <Marca></Marca>
                                                </Marcas> */}
                                                {/* </Info> */}
                                            </ProductoFlip>
                                        </Producto>
                                    )
                                }
                            )}
                        </Grid>
                    </Scrollbar>
                </div >
            </>

        )
    }
}
export default RankingGrid;
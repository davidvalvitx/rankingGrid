import * as React from "react";
export declare const SlideZara: import("@emotion/styled").StyledComponent<{
    color?: import("@mui/types").OverridableStringUnion<"primary" | "secondary", import("@mui/material/Slider").SliderPropsColorOverrides>;
    classes?: import("@mui/base").SliderUnstyledTypeMap["props"]["classes"] & {
        colorPrimary?: string;
        colorSecondary?: string;
        sizeSmall?: string;
        thumbColorPrimary?: string;
        thumbColorSecondary?: string;
        thumbSizeSmall?: string;
    };
    size?: import("@mui/types").OverridableStringUnion<"small" | "medium", import("@mui/material/Slider").SliderPropsSizeOverrides>;
    sx?: import("@mui/material/styles").SxProps<import("@mui/material/styles").Theme>;
} & {
    'aria-label'?: string;
    'aria-labelledby'?: string;
    'aria-valuetext'?: string;
    classes?: Partial<import("@mui/base").SliderUnstyledClasses>;
    components?: {
        Root?: React.ElementType;
        Track?: React.ElementType;
        Rail?: React.ElementType;
        Thumb?: React.ElementType;
        Mark?: React.ElementType;
        MarkLabel?: React.ElementType;
        ValueLabel?: React.ElementType;
        Input?: React.ElementType;
    };
    componentsProps?: {
        root?: React.ComponentPropsWithRef<"span"> & import("@mui/base").SliderUnstyledComponentsPropsOverrides;
        track?: React.ComponentPropsWithRef<"span"> & import("@mui/base").SliderUnstyledComponentsPropsOverrides;
        rail?: React.ComponentPropsWithRef<"span"> & import("@mui/base").SliderUnstyledComponentsPropsOverrides;
        thumb?: React.ComponentPropsWithRef<"span"> & import("@mui/base").SliderUnstyledComponentsPropsOverrides;
        mark?: React.ComponentPropsWithRef<"span"> & import("@mui/base").SliderUnstyledComponentsPropsOverrides;
        markLabel?: React.ComponentPropsWithRef<"span"> & import("@mui/base").SliderUnstyledComponentsPropsOverrides;
        valueLabel?: React.ComponentPropsWithRef<typeof import("@mui/base").SliderValueLabelUnstyled> & import("@mui/base").SliderUnstyledComponentsPropsOverrides;
        input?: React.ComponentPropsWithRef<"input"> & import("@mui/base").SliderUnstyledComponentsPropsOverrides;
    };
    defaultValue?: number | number[];
    disabled?: boolean;
    disableSwap?: boolean;
    getAriaLabel?: (index: number) => string;
    getAriaValueText?: (value: number, index: number) => string;
    isRtl?: boolean;
    marks?: boolean | import("@mui/base").Mark[];
    max?: number;
    min?: number;
    name?: string;
    onChange?: (event: Event, value: number | number[], activeThumb: number) => void;
    onChangeCommitted?: (event: React.SyntheticEvent | Event, value: number | number[]) => void;
    orientation?: "horizontal" | "vertical";
    scale?: (value: number) => number;
    step?: number | null;
    tabIndex?: number;
    track?: "normal" | false | "inverted";
    value?: number | number[];
    valueLabelDisplay?: "on" | "auto" | "off";
    valueLabelFormat?: string | ((value: number, index: number) => React.ReactNode);
} & Omit<Pick<React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, "key" | keyof React.HTMLAttributes<HTMLSpanElement>> & {
    ref?: React.Ref<HTMLSpanElement>;
}, "track" | "size" | "color" | "name" | "max" | "min" | "tabIndex" | "orientation" | "scale" | "aria-label" | "aria-labelledby" | "aria-valuetext" | "onChange" | "defaultValue" | "disabled" | "step" | "value" | "classes" | "sx" | "components" | "componentsProps" | "disableSwap" | "getAriaLabel" | "getAriaValueText" | "isRtl" | "marks" | "onChangeCommitted" | "valueLabelDisplay" | "valueLabelFormat"> & import("@mui/system").MUIStyledCommonProps<import("@mui/material/styles").Theme>, {}, {}>;
export declare const GridSlider: (props: any) => JSX.Element;

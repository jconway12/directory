import { PropsWithChildren, ReactElement, WeakValidationMap, ValidationMap } from "react";
import React from "react";

// Functional component type
export interface FunctionalComponent<FunctionalProps> {
    (props: PropsWithChildren<FunctionalProps>, context?: any): ReactElement | null;
    propTypes?: WeakValidationMap<FunctionalProps>;
    contextTypes?: ValidationMap<FunctionalProps>;
    defaultProps?: Partial<FunctionalProps>;
    displayName?: string;
}

// Props for functional component
export interface FunctionalProps {
    store?: any,
    compiler?: string,
    framework?: string
}


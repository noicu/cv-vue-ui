import { App } from 'vue';
import { $waveui } from '@/types/$waveui';
export interface BreakpointConfig {
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
}
export interface ConstructorOptions {
    colors?: Record<string, string>;
    breakpoints?: BreakpointConfig;
}
export declare class WaveUIPlugin {
    #private;
    $waveui: $waveui;
    constructor(app: App, options?: ConstructorOptions & {});
    static install(app: App, options?: ConstructorOptions & {}): undefined;
}

import { ComputedGetter, ComputedOptions, DefineComponent, EmitsOptions, ExtractDefaultPropTypes, MethodOptions, SlotsType } from 'vue';
import { PublicProps, ResolveProps } from '../extra-vue-types';
export interface WaveFormElementProps {
    /**
     * TODO: Add Description
     * @property {any} [valid]
     * @see https://antoniandre.github.io/wave-ui/w-form-element
     */
    valid: any;
    /**
     * TODO: Add Description
     * @property {boolean} disabled
     * @see https://antoniandre.github.io/wave-ui/w-form-element
     */
    disabled?: boolean;
    /**
     * TODO: Add Description
     * @property {boolean} readonly
     * @see https://antoniandre.github.io/wave-ui/w-form-element
     */
    readonly?: boolean;
    /**
     * TODO: Add Description
     * @property {any} [inputValue]
     * @see https://antoniandre.github.io/wave-ui/w-form-element
     */
    inputValue: any;
    /**
     * TODO: Add Description
     * @property {Array<any>} validators
     * @see https://antoniandre.github.io/wave-ui/w-form-element
     */
    validators?: Array<any>;
    /**
     * TODO: Add Description
     * @property {any} isFocused - Default: false
     * @see https://antoniandre.github.io/wave-ui/w-form-element
     */
    isFocused?: any;
    /**
     * TODO: Add Description
     * @property {any} column - Default: false
     * @see https://antoniandre.github.io/wave-ui/w-form-element
     */
    column?: any;
    /**
     * TODO: Add Description
     * @property {any} wrap - Default: false
     * @see https://antoniandre.github.io/wave-ui/w-form-element
     */
    wrap?: any;
    /**
     * TODO: Add Description
     * @property {any} formRegister - Default: null
     * @see https://antoniandre.github.io/wave-ui/w-form-element
     */
    formRegister?: any;
    /**
     * TODO: Add Description
     * @property {any} formUnregister - Default: null
     * @see https://antoniandre.github.io/wave-ui/w-form-element
     */
    formUnregister?: any;
    /**
     * TODO: Add Description
     * @property {any} validateElement - Default: null
     * @see https://antoniandre.github.io/wave-ui/w-form-element
     */
    validateElement?: any;
}
export interface WaveFormElementEmits {
    /**
     * TODO: Add Description
     * @see https://antoniandre.github.io/wave-ui/w-form-element
     */
    'onReset'?: () => void;
    /**
     * TODO: Add Description
     * @see https://antoniandre.github.io/wave-ui/w-form-element
     */
    'onUpdate:valid'?: () => void;
}
export interface WaveFormElementComputeds extends ComputedOptions {
    /**
     * TODO: Add Description
     * @see https://antoniandre.github.io/wave-ui/w-form-element
     */
    classes: ComputedGetter<any>;
}
export interface WaveFormElementMethods extends MethodOptions {
    /**
     * TODO: Add Description
     * @see https://antoniandre.github.io/wave-ui/w-form-element
     */
    reset(): void;
}
export type WaveFormElementSlots = SlotsType<{
    /**
     * TODO: Add Description
     * @see https://antoniandre.github.io/wave-ui/w-form-element
     */
    'default': () => any;
    /**
     * TODO: Add Description
     * @param {any} message TODO: Describe me!
     * @see https://antoniandre.github.io/wave-ui/w-form-element
     */
    'error-message': (_: {
        message: any;
    }) => any;
}>;
export type WFormElement = DefineComponent<WaveFormElementProps, {}, {}, WaveFormElementComputeds, WaveFormElementMethods, {}, {}, WaveFormElementEmits & EmitsOptions, string, PublicProps, ResolveProps<WaveFormElementProps & WaveFormElementEmits, EmitsOptions>, ExtractDefaultPropTypes<WaveFormElementProps>, WaveFormElementSlots>;

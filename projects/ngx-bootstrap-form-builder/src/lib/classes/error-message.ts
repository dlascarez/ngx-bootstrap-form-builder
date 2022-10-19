export interface IErrorMessage {
    error: string;
    format: (label: string, error?: any) => string;
}
export const CUSTOM_ERRORS: IErrorMessage[] = [
    {
        error: 'required',
        format: label => `${label} is required`
    },
    {
        error: 'pattern',
        format: label => `${label} is invalid`
    },
    {
        error: 'minlength',
        format: (label, error) =>
            `${label} must have at least ${error.requiredLength} characters`
    },
    {
        error: 'maxlength',
        format: (label, error) =>
            `${label} must not have more than ${error.requiredLength} characters`
    },
    {
        error: 'requiredTrue',
        format: label => `${label} is required`
    },
    {
        error: 'email',
        format: label => `${label} doesn't look like a valid email address.`
    },
    {
        error: 'max',
        format: (label, error) => `${label} must not be greater than ${error.max}`
    },
    {
        error: 'min',
        format: (label, error) => `${label} must not be less than ${error.min}`
    }
];

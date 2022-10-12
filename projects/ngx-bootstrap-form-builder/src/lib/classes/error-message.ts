export interface IErrorMessage {
    error: string;
    format: (label: string, error?: any) => string;
}
export const CUSTOM_ERRORS: IErrorMessage[] = [
    {
        error: 'required',
        format: label => `${label} es requerido`
    },
    {
        error: 'pattern',
        format: label => `${label} Es invalido`
    },
    {
        error: 'minlength',
        format: (label, error) =>
            `${label} debe tener al menos ${error.requiredLength} caracteres`
    },
    {
        error: 'maxlength',
        format: (label, error) =>
            `${label} no debe tener más de ${error.requiredLength} caracteres`
    },
    {
        error: 'requiredTrue',
        format: label => `${label} es requerido`
    },
    {
        error: 'email',
        format: label => `${label} no parece una dirección de correo electrónico válida`
    },
    {
        error: 'max',
        format: (label, error) => `${label} no debe ser mayor que ${error.max}`
    },
    {
        error: 'min',
        format: (label, error) => `${label} no debe ser inferior a ${error.min}`
    }
];

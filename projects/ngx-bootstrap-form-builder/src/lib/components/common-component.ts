import { NgControl } from "@angular/forms";
import { CUSTOM_ERRORS } from "../classes/error-message";

export class CommonComponent {
    public getErrorMessage(formControl?: NgControl, name?: string, label?: string): string {
        const errors = formControl?.errors;
        if (errors) {
            for (const [key, value] of Object.entries(errors)) {
                const error = CUSTOM_ERRORS.find(e => e.error === key);
                return error?.format(label ?? name ?? '', value) ?? '';
            }
        }
        return '';
    }
}
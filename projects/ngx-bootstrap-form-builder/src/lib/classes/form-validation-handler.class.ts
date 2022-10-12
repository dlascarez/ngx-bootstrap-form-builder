import { FormGroup } from "@angular/forms";

export class FormValidationHandler {
    public static triggerValidation(formGroup: FormGroup): void {
        Object.keys(formGroup.controls).forEach(field => {
            const control = formGroup.get(field) as any;
            if (control?.controls) {
                Object.keys(control.controls)
                    .forEach(key => control.get(key)?.markAsTouched({ onlySelf: true }));
            }
            control?.markAsTouched({ onlySelf: true });
        });
    }
}

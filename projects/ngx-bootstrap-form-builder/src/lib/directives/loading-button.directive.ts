import { AfterViewInit, Directive, ElementRef, Input, Optional } from '@angular/core';

@Directive({
  selector: 'button,input[type=button],input[type=submit],input[type=reset]'
})
export class LoadingButtonDirective implements AfterViewInit {
  @Input() public loadingIcon: string = 'fas fa-sync fa-spin';
  @Input() public loadingText: string = '';
  @Input() public get loading(): boolean | null {
    return this._loading;
  }
  set loading(value: boolean | null) {
    if ((value ?? false) !== this._loading) {
      this._loading = value;
      this._setState();
    }
  }

  private _loading: boolean | null = false;
  private _element: HTMLInputElement | HTMLButtonElement;
  private _innerHtml: string = '';
  private _innerText: string = '';

  constructor(@Optional() private readonly elementRef: ElementRef<HTMLInputElement | HTMLButtonElement>) {
    this._element = this.elementRef?.nativeElement;
  }

  ngAfterViewInit(): void {
    this._innerHtml = this._element.innerHTML;
    this._innerText = this._element.innerText;
  }

  private _setState(): void {
    let content = this._innerHtml;
    if (this.loading) {
      content = '';
      content += (this.loadingIcon ?? '') !== '' ? `<i class="${this.loadingIcon}"></i> ` : '';
      content += (this.loadingText ?? '') !== '' ? this.loadingText : this._innerText;
    }
    this._element.innerHTML = content.trim();
    this._element.disabled = this.loading!;
  }
}

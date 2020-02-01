import {
  Component,
  ElementRef,
  Input,
  SimpleChanges,
  ViewChild
} from '@angular/core'
import microlink from '@microlink/vanilla'

@Component({
  selector: 'microlink',
  template: '<div #cardSpace class="microlink_angular_dom"></div>'
})
export class MicrolinkComponent {
  @Input() url: string
  @Input() options: object

  @ViewChild('cardSpace', { static: false }) cardSpace: ElementRef

  renderCard () {
    const anchor = document.createElement('a')
    anchor.href = this.url
    anchor.innerHTML = this.url

    microlink(anchor, this.options, this.cardSpace.nativeElement)
  }

  ngAfterViewInit () {
    this.renderCard()
  }

  ngOnChanges ({ url, options }: SimpleChanges) {
    const urlChanged = url && !url.firstChange && url.currentValue
    const optionsChanged =
      options && !options.firstChange && options.currentValue

    if (urlChanged || optionsChanged) {
      this.renderCard()
    }
  }
}

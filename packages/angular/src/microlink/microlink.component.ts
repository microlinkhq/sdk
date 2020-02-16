import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnChanges,
  SimpleChanges,
  ViewChild
} from '@angular/core'
import ReactDOM from 'react-dom'
import microlink from '@microlink/vanilla'

@Component({
  selector: 'microlink',
  template: '<div #cardSpace class="microlink_angular_dom"></div>'
})
export class MicrolinkComponent implements AfterViewInit, OnChanges {
  @Input() url: string
  @Input() options: object

  @ViewChild('cardSpace', { static: false }) cardSpace: ElementRef

  renderCard () {
    const { nativeElement } = this.cardSpace

    if (nativeElement && nativeElement.childNodes.length > 0) {
      ReactDOM.unmountComponentAtNode(nativeElement)
    }

    const anchor = document.createElement('a')
    anchor.href = this.url
    anchor.innerHTML = this.url

    microlink(anchor, this.options, nativeElement)
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

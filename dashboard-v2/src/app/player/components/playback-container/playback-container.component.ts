import {AfterViewInit, Component, HostListener, Input, ViewChild} from '@angular/core';

@Component({
  selector: 'app-playback-container',
  templateUrl: './playback-container.component.html',
  styleUrls: ['./playback-container.component.css']
})
export class PlaybackContainerComponent implements AfterViewInit {

  @Input() virtualDOM: any;
  @Input() width: number;
  @Input() height: number;

  @ViewChild("playbackIFrame") playbackIFrame;
  @ViewChild("iFrameWrapper") iFrameWrapper;
  @ViewChild("section") section;
  @ViewChild("playbackContainer") playbackContainer;

  ngAfterViewInit() {
    this.replaceIFrameContents();
    this.setInitialViewPortSize();
    this.adjustPlaybackViewPortToScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.adjustPlaybackViewPortToScreenSize();
  }

  adjustPlaybackViewPortToScreenSize() {
    const sectionWidth = this.section.nativeElement.offsetWidth - 30,
      sectionHeight = this.section.nativeElement.offsetHeight - 30;

    const scale = calculateScale(
      sectionWidth,
      sectionHeight,
      this.width,
      this.height
    );

    const marginLeft = (sectionWidth - this.width * scale) / 2;
    const marginTop = (sectionHeight - this.height * scale) / 2;
    this.playbackContainer.nativeElement.style.marginLeft = `${marginLeft + 15}px`;
    this.playbackContainer.nativeElement.style.marginTop = `${marginTop + 15}px`;

    this.playbackContainer.nativeElement.style.transform = `scale(${scale})`;
  }

  setInitialViewPortSize() {
    this.iFrameWrapper.nativeElement.style.width = `${this.width}px`;
    this.iFrameWrapper.nativeElement.style.height = `${this.height}px`;
  }

  //done
  replaceIFrameContents() {
    const document = this.playbackIFrame.nativeElement.contentWindow.window.document;
    document.replaceChild(this.virtualDOM, document.documentElement);
  }

}

function calculateScale(vpWidth, vpHeight, width, height): number {
  return Math.min(vpWidth / width, vpHeight / height);
}

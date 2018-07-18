import {Component, ElementRef, ViewChild, AfterViewInit, OnInit, Input} from '@angular/core';
import PlaybackEngine from "../../lib/playback-engine";
import { Store } from "@ngrx/store";
import "rxjs/add/operator/filter"
import { Recordings } from "../../store/models/recordings.model";
import { getRecordingsState } from "../../store/reducers/player-state.reducer";
import { PlayerState } from "../../store/state/player-state";
import { Observable } from "rxjs";

@Component({
	selector: 'app-playback-container',
	templateUrl: './playback-container.component.html',
	styleUrls: [ './playback-container.component.css' ]
})
export class PlaybackContainerComponent implements AfterViewInit {

	@Input() public recordings: Recordings;


  private playbackEngine: PlaybackEngine;

	@ViewChild('section') section: ElementRef;
	@ViewChild('playbackContainer') playbackContainer: ElementRef;
	@ViewChild('playbackFrame') playbackFrame: ElementRef;
	@ViewChild('frameWrapper') frameWrapper: ElementRef;

	constructor(private store: Store<PlayerState>) {
	}

	ngAfterViewInit() {
    this.playbackEngine = new PlaybackEngine({
      container: this.playbackContainer.nativeElement,
      sandboxWrapper: this.frameWrapper.nativeElement,
      sandbox: this.playbackFrame.nativeElement,
      section: this.section.nativeElement
    }, this.recordings);

    this.playbackEngine.initialize();
	}

	getPlaybackEngine = ():PlaybackEngine => this.playbackEngine;

}

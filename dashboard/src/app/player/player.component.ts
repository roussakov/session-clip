import {Component, ViewChild} from '@angular/core';
import {Store} from "@ngrx/store";
import {PlayerState} from "./store/state/player-state";
import {getRecordingsState} from "./store/reducers/player-state.reducer";
import {Observable} from "rxjs/Observable";
import {Recordings} from "./store/models/recordings.model";
import {PlaybackContainerComponent} from "./components/playback-container/playback-container.component";
import {ActivatedRoute} from "@angular/router";
import {InitialNode} from "./services/initial-nodes.service";

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent {

  public recordings$: Observable<Recordings>;
  public progress: number = 0;
  public completed: boolean = false;

  public initialNodes:InitialNode[];

  @ViewChild('playbackContainer') playbackContainer: PlaybackContainerComponent;

  constructor(private store: Store<PlayerState>, private route: ActivatedRoute) {
    this.recordings$ = this.store.select(getRecordingsState)
  }

  ngOnInit() {
    this.initialNodes = (<InitialNode[]>this.route.snapshot.data)
  }

  ngAfterViewInit() {
    this.playbackContainer.getPlaybackEngine()
      .onProgressChanged(progress => this.progress = progress);

    this.playbackContainer.getPlaybackEngine()
      .onCompleted(()=> this.completed = true)
  }

  playingStateChangeHandler = (state: boolean) => state ?
    this.playbackContainer.getPlaybackEngine().play() :
    this.playbackContainer.getPlaybackEngine().stop();
}

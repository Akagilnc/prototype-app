import {Injectable} from '@angular/core';

@Injectable()
export class SoundPlayer {
  private _audio: any;
  play(path: string) {
    if (this._audio) {
      this._audio.pause();
      delete this._audio;
    }
    this._audio = new Audio(path);
    this._audio.play();
  }
}
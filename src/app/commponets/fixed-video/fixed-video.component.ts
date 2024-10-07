import { Component } from '@angular/core';

@Component({
  selector: 'app-fixed-video',
  standalone: true,
  imports: [],
  templateUrl: './fixed-video.component.html',
  styleUrls: ['./fixed-video.component.scss']
})

export class FixedVideoComponent {
  /*
  constructor(){
    const fixedVideo = document.getElementById('fixedVideo');
    const delete = document.getElementById('delete');
    delete?.addEventListener("click", () =>{
      fixedVideo.classList.add('displayNone');
      console.log("ya casi ");
    });
  
  }
    */
}

/*

<div id="fixed-video" class="expand">
    <dir class="delet">
        <div class="expand-menu" id="expandClick">
    
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
        </div>
    </dir>
    <div class="content-video"></div>
</div>
 */
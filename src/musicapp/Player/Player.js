import { Player } from './Style/PlayerStyled';
import './Style/Player.css';
import {useState, useRef} from 'react';
import song1   from './Sources/audio/song1.mp3';
import Slider from './slider';
import SongImg from './Song Image.png';

import separator      from './Sources/PlayerIcons/SeparatorIconLight.png';
import dark_separator from './Sources/PlayerIcons/SeparatorIconDark.png';
import Previous       from './Sources/PlayerIcons/PreviousIconDark.png';
import PlayIcon       from './Sources/PlayerIcons/PlayIconDark.png';
import PauseIcon      from './Sources/PlayerIcons/PauseIconDark.png';
import NextIcon       from './Sources/PlayerIcons/NextIconDark.png';
import AddSongIcon    from './Sources/PlayerIcons/AddSongIconDark.png';
import RepeatSongIcon from './Sources/PlayerIcons/ShuffleIconDark.png';
import VolumeIcon     from './Sources/PlayerIcons/SoundIconDark.png';

export default function Footer(props){
    const [percentage, setPercentage] = useState(0)
    const [isPlaying, setIsPlaying] = useState(false)
    const [duration, setDuration] = useState(0)
    const [currentTime, setCurrentTime] = useState(0)
  
    const audioRef = useRef()
    const onChange = (e) => {
      const audio = audioRef.current
      audio.currentTime = (audio.duration / 100) * e.target.value
      setPercentage(e.target.value)
    }  
    const play = () => {
      const audio = audioRef.current
      audio.volume = 0.1
  
      if (!isPlaying) {
        setIsPlaying(true)
        audio.play()
      }
  
      if (isPlaying) {
        setIsPlaying(false)
        audio.pause()
      }
    } 
    const getCurrDuration = (e) => {
      const percent = ((e.currentTarget.currentTime / e.currentTarget.duration) * 100).toFixed(2)
      const time = e.currentTarget.currentTime
  
      setPercentage(+percent)
      setCurrentTime(time.toFixed(2))
    }
    function secondsToHms(seconds) {
        if (!seconds) return '00:00'
    
        let duration = seconds
        let hours = duration / 3600
        duration = duration % 3600
    
        let min = parseInt(duration / 60)
        duration = duration % 60
        let sec = parseInt(duration)
        if (sec < 10) {
            sec = `0${sec}`
        }
        if (min < 10) {
            min = `0${min}`
        }
        if (parseInt(hours, 10) > 0) {
            return `${parseInt(hours, 10)}h ${min}m ${sec}s`
        } else if (min == 0) {
            return `00:${sec}`
        } else {
            return `${min}:${sec}`
        }
    }
    //console.log("play",{play});
    //console.log("isPlaying",{isPlaying});

    if(props.width > 500){
      return(
        <Player>      
            <div className="PlayerSongImage"> <img src={SongImg} className="musicImage" /> </div>
            <div className="PlayerSongTittle"> 
                <div className="PlayerSongBoldTitle">Girls Like You</div>
                <div className="PlayerSongLightTitle">Melina Lange,2019</div>
            </div>
            <div className="PlayerSeparator"> <img src={props.theme === "light" ? separator : dark_separator} className="strightlineImage" /> </div>
            <div className="PlayerControls">
                <div className="PreviousButton"> <img src={Previous} className="PreviousImage" /> </div>
                <div className="PlayButton"><img src={isPlaying===true ? PauseIcon : PlayIcon} onClick={play} isPlaying={isPlaying} className="PlayImage" /></div>   
                <div className="NextButton"> <img src={NextIcon} className="NextImage" /> </div>
            </div>
            <div className="PlayerTime">
                <div className="StartTime"> {secondsToHms(currentTime)} </div>
                <div className="SliderRange">
                    <audio
                        ref={audioRef}
                        onTimeUpdate={getCurrDuration}
                        onLoadedData={(e) => {
                            setDuration(e.currentTarget.duration.toFixed(2))
                        }}
                        src={song1}
                    ></audio>
                    <div className='control-panel'> <Slider percentage={percentage} onChange={onChange} /> </div>
                </div>
                <div className="EndTime"> {secondsToHms(duration)} </div>
            </div>
            <div className="SongActions">
                <div className="AddSongIcon"> <img src={AddSongIcon} className="AddSongImage" alt =""/> </div>
                <div className="RepeatSongIcon"> <img src={RepeatSongIcon} className="RepeatSongImage" alt="" /> </div>
                <div className="VolumeIcon"> <img src={VolumeIcon} className="VolumeImage" alt=""/>  </div>
            </div>
        </Player>
      );
    }
    else{
        return(
            <Player> 
                <div className="PlayerSongImage"> <img src={SongImg} className="musicImage" /> </div>
                <div className="PlayerSongTittle"> 
                    <div className="PlayerSongBoldTitle">Girls Like You</div>
                    <div className="PlayerSongLightTitle">Melina Lange,2019</div>
                </div>
                <div className="PlayerSeparator"> <img src={props.theme === "light" ? separator : dark_separator} className="strightlineImage" /> </div>
                <div className="PlayerControls">
                    <div className="PreviousButton"> <img src={Previous} className="PreviousImage" /> </div>
                    <div className="PlayButton"><img src={isPlaying===true ? PauseIcon : PlayIcon} onClick={play} isPlaying={isPlaying} className="PlayImage" /></div>   
                    <div className="NextButton"> <img src={NextIcon} className="NextImage" /> </div>
                </div>
                <div className="PlayerTime">
                    <div className="StartTime"> {secondsToHms(currentTime)} </div>
                    <div className="SliderRange">
                        <audio
                            ref={audioRef}
                            onTimeUpdate={getCurrDuration}
                            onLoadedData={(e) => {
                                setDuration(e.currentTarget.duration.toFixed(2))
                            }}
                            src={song1}
                        ></audio>
                        <div className='control-panel'> <Slider percentage={percentage} onChange={onChange} /> </div>
                    </div>
                    <div className="EndTime"> {secondsToHms(duration)} </div>
                </div>
                <div className="SongActions">
                    <div className="AddSongIcon"> <img src={AddSongIcon} className="AddSongImage" alt =""/> </div>
                    <div className="RepeatSongIcon"> <img src={RepeatSongIcon} className="RepeatSongImage" alt="" /> </div>
                    <div className="VolumeIcon"> <img src={VolumeIcon} className="VolumeImage" alt=""/>  </div>
                </div> 
            </Player>
        );
    }
}








// else{
//     return(
//         <Player>  
//             <div className="PlayerPortraitMode">
//                 <div className="FirstDivision">
//                     <div> <img src={props.theme === "light" ? musicimg : dark_musicimg} className="musicImage" /> </div>
//                     <div className="FirstDivisionSongTitle"> Songs Title</div>
//                 </div>
//                 <div className="SecondDivision"> 

//                     <div className="SecondDivisionPlayer">
//                         <div className="timingPortraitMode"> {secondsToHms(currentTime)} </div>
//                         <div> 
//                             <audio
//                             ref={audioRef}
//                             onTimeUpdate={getCurrDuration}
//                             onLoadedData={(e) => {
//                                 setDuration(e.currentTarget.duration.toFixed(2))
//                             }}
//                             src={song1}
//                             ></audio>
//                             <div className='control-panel'> <Slider percentage={percentage} onChange={onChange} /> </div>
//                         </div>
//                         <div className="timingPortraitMode"> {secondsToHms(duration)} </div>
//                     </div>

//                     <div className="SecondDivisionPlayerControls">
//                         <div> <img src={props.theme === "light" ? backwardimg : dark_backwardimg} className="backwardImagePortraitMode"/></div>
//                         <div> <img src={isPlaying===true ? (props.theme=="light"?pauseIcon:dark_pauseIcon):(props.theme==="light"?playimg:dark_playimg)} onClick={play} isPlaying={isPlaying} className="playImagePortraitMode" /> </div>
//                         <div> <img src={props.theme === "light" ? forwardimg : dark_forwardimg} className="forwardImagePortraitMode" /> </div>
//                         <div> <img src={props.theme === "light" ? addSongimg : dark_addSongimg} className="addPlaylistImagePortraitMode" /></div>
//                         <div> <img src={props.theme === "light" ? repeatimg : dark_repeatimg} className="repeatImagePortraitMode" /> </div>
//                         <div> <img src={props.theme === "light" ? volumeimg : dark_volumeimg} className="volumeImagePortraitMode" /></div>
//                     </div>
                
//                 </div>
//             </div>
//         </Player>
//     );
// }
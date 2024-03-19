/**
 * This file is a Noise Button component
 *
 */
import React from "react";
import NoiseButton from "./noiseButton";

function SoundBoard({getOrMakeAudioContext, data, setData}) {

    setData("sounds", {});
    
    var imageSrc = "/icons/revolver-gun-svgrepo-com.svg";
    var sound = "/sounds/desert-eagle-gunshot-14622.mp4";
    var name = "Revolver";
    
    var soundboardData = [];
    for (var i = 0 ; i < 30; i++){
        soundboardData.push({});
    }
    for (var i = 21 ; i < 30; i++){
        soundboardData[i] = { imageSrc: imageSrc, name: name, sound: sound};
    }
    soundboardData[2] = { imageSrc: imageSrc, name: name, sound: sound};
    soundboardData[5] = { imageSrc: imageSrc, name: name, sound: sound};
    soundboardData[7] = { imageSrc: imageSrc, name: name, sound: sound};
    soundboardData[9] = { imageSrc: imageSrc, name: name, sound: sound};
    soundboardData[12] = { imageSrc: imageSrc, name: name, sound: sound};
    soundboardData[16] = { imageSrc: imageSrc, name: name, sound: sound};

    for (var i = 0 ; i < 30; i++){
        soundboardData[i].key = i;
    }
    
    return (
        <div className="buttons-container grid-style ">
            {soundboardData.map(soundboardData => <NoiseButton  data={data} setData={setData} imageSrc = {soundboardData.imageSrc} sound = {soundboardData.sound} name ={soundboardData.name} key = {soundboardData.key} index = {soundboardData.key}/>)}
        </div>
    );
}

// Export out the React Component
export default SoundBoard;
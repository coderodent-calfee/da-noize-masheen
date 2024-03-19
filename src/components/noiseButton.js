/**
 * This file is a Noise Button component
 *
 */

function NoiseButton({imageSrc, sound, name, index, data, setData}) {

    if(name === undefined){
        return (
            <div>
                {index}
            </div>
        );
    }

    const getOrMakeAudioContext = data.getOrMakeAudioContext;
    
    if(data.sounds[sound] == null){
        data.sounds[sound] = {
            soundSrc: sound,
            loadedBuffer: null,
            decodedBuffer: null
        };
        setData("sounds", data.sounds);
    }
    const noiseContext = data.sounds[sound];


    function playNoise(noiseContext) {
        console.log("play some noise ");
        noiseContext.playOnDecode = false;
        var context = getOrMakeAudioContext();
        var source = context.createBufferSource();   // creates a sound source
        source.buffer = noiseContext.decodedBuffer;                         // tell the source which sound to play
        source.connect(context.destination);                                // connect the source to the context's destination (the speakers)
        source.start();                                                   // play the source now
    }
    
    function makeSomeNoise (e) {
        console.log("make some noise " + e);
        var context = getOrMakeAudioContext();
        if(this.soundSrc == null){return;}
        
        if(this.decodedBuffer == null){
            this.playOnDecode = true;
            if(this.loadedBuffer == null){
                this.playOnDecode = true;
                loadSomeNoise (this);
            }            
            return;
        }
        playNoise(this);
    }
    
    function loadSomeNoise (noiseContext) {
        if(noiseContext.loading) {
            return;
        }
        noiseContext.loading = true;
        
        console.log("loadSomeNoise");        
        var request = new XMLHttpRequest();
        request.open('GET', noiseContext.soundSrc, true);
        request.responseType = 'arraybuffer';

        // Decode asynchronously
        request.onload = function() {
            console.log("loaded-decodeSomeNoise");
            noiseContext.loadedBuffer = request.response;
            var context = getOrMakeAudioContext();
            if(context == null){
                return;
            }
            if(noiseContext.decoding) {
                return;
            }
            noiseContext.decoding = true;
            context.decodeAudioData(request.response, function(buffer) {
                console.log("decoded");
                noiseContext.decodedBuffer = buffer;
                noiseContext.loadedBuffer = null; // release the memory 
                if(noiseContext.playOnDecode){
                    playNoise(noiseContext);
                }
            }, (e)=>{console.log("error decoding noise: " + e)});
        }
        request.send();
    }
    

    loadSomeNoise(noiseContext);
    
    return (
        <div onClick={makeSomeNoise.bind(noiseContext)} >
            <button className="pushable"  >
              <span className="front">{name}
                <img src={imageSrc} alt={imageSrc}  />
              </span>
            </button>
        </div>
    );
}

// Export out the React Component
export default NoiseButton;
import zim from "https://zimjs.org/cdn/00/zim";

const frame = new Frame(FIT, 1920, 1080, black, black);
frame.on("ready", () => {
    const stage = frame.stage;
    let stageW = frame.width;
    let stageH = frame.height;

    var label = new Label("a microphone visualiser", 160, "Bahnschrift SemiBold", white).centerReg();
    label.alpha = 0;
    window.Oldarray = [];

    label.animate({
        props:{alpha: 1},
        time: 1.5,
        rewind: true,
        call:()=>{
            timeout(1,
            ()=>{
                label.text = "by ALIAS";
                label.animate({
                    props:{alpha: 1},
                    time:1.5,
                    call:()=>{
                      label.animate({
                        props:{y:1400},
                        ease:"quintInOut",
                        call:()=>{ label.alp(0); 
                        navigator.mediaDevices.getUserMedia({audio: true, video: false})
                        .then(function(stream) {
                          
    const audioContext = new AudioContext();
    const analyser = audioContext.createAnalyser();
    const microphone = audioContext.createMediaStreamSource(stream);
    const scriptProcessor = audioContext.createScriptProcessor(2048, 1, 1); 
    // see lines 44 to 46 on ScriptProcessor

    analyser.fftSize = 32;
    let audioProcessed = false;
  
    microphone.connect(analyser);
    analyser.connect(scriptProcessor);
    scriptProcessor.connect(audioContext.destination);
    scriptProcessor.onaudioprocess = function() { 

      //  ScriptProcessor has been deprecated in favour of AudioWorklet and AudioWorkletProcessor, but 
      //  there is little disadvantage in still using ScriptProcessor. It doesn't cause any
      //  performance issues and is still in use.

      window.array = new Uint8Array(16);
      analyser.getByteFrequencyData(array);
      audioProcessed = true;
      window.arraySum = array.reduce((a, value) => a + value, 0);
      window.average = arraySum / array.length;
    }

        try{
          Math.abs(rect16.width); // some arbitrary function to test if rect16 exists. I'll change it later
        } catch{
          for (let n = 1; n < 17; n++){
            window["rect" + n] = new Rectangle(50,50,"white").centerReg().mov(-60*(n-8),0).alp(0);
            window["rect" + n].animate({
              props:{alpha:1},
              time:.5
            });}
            
            label.size = 80; label.text = "Volume: "; label.centerReg().mov(0,420).animate({
              props:{alpha:1},
              time:.5
            });

        } finally{
          interval(2, ()=>{label.text = "Volume: " + Math.round(average); label.centerReg().mov(0,420);});
          interval(.09, ()=>{
            for (let n = 1; n < 17 && audioProcessed; n++){
              window["rect" + n].animate({
                props:{heightOnly:(array[n-1]**2)/75}, // the math(s) here makes the height change quadratic
                // and generally gives a "smoother" look
                time:.08, // an interval value of .09 and a time of .08 for the animation are the "sweet spot"
                // I find that with these values, the animation looks fluid without being unresponsive or
                // too "twitchy".
              });
        }
        
      });   
      }

  }).catch(function(err) {
        console.error(err);
      });
    }});
                    }}).centerReg(); 
                })
            }});
        stage.update();
        });

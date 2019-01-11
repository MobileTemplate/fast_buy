
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead(["wx-scroll-view{display:-webkit-box;display:-webkit-flex;display:flex}\n",],undefined,{path:"./pages/tag/tag.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/tag/tag.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      
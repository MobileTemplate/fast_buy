
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead(["wx-view{display:-webkit-box;display:-webkit-flex;display:flex}\n",],undefined,{path:"./pages/login/login.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/login/login.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      

      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead(["wx-scroll-view { display: -webkit-box; display: -webkit-flex; display: flex; }\n.",[1],"tag_index { -webkit-box-flex: 1; -webkit-flex: 1; flex: 1; width: 100%; min-height: 100vh; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; flex-direction: column; }\n.",[1],"tag-input-view { display: -webkit-box; display: -webkit-flex; display: flex; }\n.",[1],"tag-label-view { width: ",[0,150],"; -webkit-box-align: center; -webkit-align-items: center; align-items: center; }\n.",[1],"tag-label { -webkit-box-flex: 1; -webkit-flex: 1; flex: 1; line-height: ",[0,0],"; font-size: ",[0,24],"; color: #555; text-align: left; }\n.",[1],"tag-label-view { width: ",[0,150],"; text-align: center; }\n.",[1],"tag-oneview { display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; justify-content: center; }\n",],undefined,{path:"./pages/tag/tag.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/tag/tag.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      
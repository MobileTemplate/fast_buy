
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead(["body,wx-view{display:-webkit-box;display:-webkit-flex;display:flex}\nbody{min-height:100%;background-color:#fff}\nwx-image{width:",[0,360],";height:",[0,360],"}\n.",[1],"about,.",[1],"content{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-flex:1;-webkit-flex:1;flex:1}\n.",[1],"content{padding:",[0,30],";-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}\n.",[1],"qrcode{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}\n.",[1],"desc{margin-top:",[0,30],";display:block}\n.",[1],"code{color:#e96900;background-color:#f8f8f8}\n.",[1],"_button{width:100%;margin-top:",[0,40],"}\n.",[1],"version{height:",[0,80],";line-height:",[0,80],";-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;color:#ccc}\n.",[1],"source{margin-top:",[0,30],"}\n.",[1],"source,.",[1],"source-list{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}\n.",[1],"link{color:#007aff}\n",],undefined,{path:"./platforms/app-plus/about/about.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./platforms/app-plus/about/about.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      
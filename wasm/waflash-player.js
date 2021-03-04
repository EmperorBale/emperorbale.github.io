import createWaflashModule from "/waflash/waflash.min.js?2021030201";
const WAFLASH_BASE_URL = "/waflash/",
    createWaflash = t => {
        t || (t = "");
        let e = {
            arguments: [t],
            preRun: [],
            postRun: [],
            locateFile: (t, e) => WAFLASH_BASE_URL + t + "?2021030201",
            print(t) {
                console.log(t)
            },
            printErr(t) {
                console.error(t)
            },
            canvas: function() {
                const t = document.getElementById("canvas");
                return t.addEventListener("webglcontextlost", (function(t) {
                    alert("WebGL context lost. You will need to reload the page."), t.preventDefault()
                }), !1), t
            }(),
            statusElement: document.getElementById("waflashStatus"),
            setStatus: t => {
                if (!t) return;
                t = t.replace(/Downloading data\.\.\. \((\d+)\/(\d+)\)/, ((t, e, a) => "Downloading player... " + Math.floor(parseInt(e) / parseInt(a) * 100) + "%")), console.log("WAFLASH> " + t);
                const a = '<svg xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.0" width="48px" height="20px" viewBox="0 0 64 16" xml:space="preserve"><path fill="#beb5f9" fill-opacity="0.42" d="M6.4,4.8A3.2,3.2,0,1,1,3.2,8,3.2,3.2,0,0,1,6.4,4.8Zm12.8,0A3.2,3.2,0,1,1,16,8,3.2,3.2,0,0,1,19.2,4.8ZM32,4.8A3.2,3.2,0,1,1,28.8,8,3.2,3.2,0,0,1,32,4.8Zm12.8,0A3.2,3.2,0,1,1,41.6,8,3.2,3.2,0,0,1,44.8,4.8Zm12.8,0A3.2,3.2,0,1,1,54.4,8,3.2,3.2,0,0,1,57.6,4.8Zm12.8,0A3.2,3.2,0,1,1,67.2,8,3.2,3.2,0,0,1,70.4,4.8Zm12.8,0A3.2,3.2,0,1,1,80,8,3.2,3.2,0,0,1,83.2,4.8ZM96,4.8A3.2,3.2,0,1,1,92.8,8,3.2,3.2,0,0,1,96,4.8Zm12.8,0A3.2,3.2,0,1,1,105.6,8,3.2,3.2,0,0,1,108.8,4.8Zm12.8,0A3.2,3.2,0,1,1,118.4,8,3.2,3.2,0,0,1,121.6,4.8Z"/><g><path fill="#654ff0" fill-opacity="1" d="M-42.7,3.84A4.16,4.16,0,0,1-38.54,8a4.16,4.16,0,0,1-4.16,4.16A4.16,4.16,0,0,1-46.86,8,4.16,4.16,0,0,1-42.7,3.84Zm12.8-.64A4.8,4.8,0,0,1-25.1,8a4.8,4.8,0,0,1-4.8,4.8A4.8,4.8,0,0,1-34.7,8,4.8,4.8,0,0,1-29.9,3.2Zm12.8-.64A5.44,5.44,0,0,1-11.66,8a5.44,5.44,0,0,1-5.44,5.44A5.44,5.44,0,0,1-22.54,8,5.44,5.44,0,0,1-17.1,2.56Z"/><animateTransform attributeName="transform" type="translate" values="23 0;36 0;49 0;62 0;74.5 0;87.5 0;100 0;113 0;125.5 0;138.5 0;151.5 0;164.5 0;178 0" calcMode="discrete" dur="1170ms" repeatCount="indefinite"/></g></svg>';
                0 == t.indexOf("Downloading player...") && (t = "Downloading player " + a), 0 == t.indexOf("Loading SWF...") && (t = "Loading SWF " + a), e.statusElement.innerHTML = t, e.showStatus()
            },
            showStatus() {
                e.statusElement.style.display = "block"
            },
            hideStatus() {
                e.statusElement.style.display = "none"
            },
            unload() {},
            WAFLASH: {
                hal: {
                    url_transformRequestUrl(t) {
                        window.wafLastResourceUrl = t;
                        return t;
                    }
                }
            }
        };
        window.waflash = e, window.onerror = (t, a, s, n, o) => {
            "string" != typeof t && (o = t.error, t.filename || t.fileName, t.lineno || t.lineNumber, t.colno || t.columnNumber, t = t.message || t.name || o.message || o.name);
            let l = "";
            o && o.stack && (l = o.stack);
            let i = document.location + "|" + t;
            e.ga && e.ga("event", document.location.origin, {
                event_category: "error",
                event_label: i,
                non_interaction: !0,
                send_to: e.gid
            })
        }, e.setStatus("Prepairing..."), createWaflashModule(e).then((t => {
            console.log("WAFLASH> Waflash module created!")
        }))
    },
    destroyWaflash = () => {
        console.log("WAFLASH> Waflash component will unmount!"), waflash.unload(), waflash = null, window.waflash = null
    };
export {
    createWaflash,
    destroyWaflash
};
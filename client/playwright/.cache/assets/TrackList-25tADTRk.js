import { g as getDefaultExportFromCjs, r as reactExports, c as ct } from './index-DrwnGJ8a.js';
import { useDispatch, useSelector } from './react-redux-Dbn8ieHe.js';
import { useLocation, useNavigate } from './index-DNNkfZj1.js';

var jsxRuntime$2 = {exports: {}};

var reactJsxRuntime_production = {};

/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactJsxRuntime_production;

function requireReactJsxRuntime_production () {
	if (hasRequiredReactJsxRuntime_production) return reactJsxRuntime_production;
	hasRequiredReactJsxRuntime_production = 1;
	"use strict";
	var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"),
	  REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
	function jsxProd(type, config, maybeKey) {
	  var key = null;
	  void 0 !== maybeKey && (key = "" + maybeKey);
	  void 0 !== config.key && (key = "" + config.key);
	  if ("key" in config) {
	    maybeKey = {};
	    for (var propName in config)
	      "key" !== propName && (maybeKey[propName] = config[propName]);
	  } else maybeKey = config;
	  config = maybeKey.ref;
	  return {
	    $$typeof: REACT_ELEMENT_TYPE,
	    type: type,
	    key: key,
	    ref: void 0 !== config ? config : null,
	    props: maybeKey
	  };
	}
	reactJsxRuntime_production.Fragment = REACT_FRAGMENT_TYPE;
	reactJsxRuntime_production.jsx = jsxProd;
	reactJsxRuntime_production.jsxs = jsxProd;
	return reactJsxRuntime_production;
}

var jsxRuntime$1 = jsxRuntime$2.exports;

var hasRequiredJsxRuntime;

function requireJsxRuntime () {
	if (hasRequiredJsxRuntime) return jsxRuntime$2.exports;
	hasRequiredJsxRuntime = 1;
	"use strict";
	if (true) {
	  jsxRuntime$2.exports = requireReactJsxRuntime_production();
	} else {
	  module.exports = require("./cjs/react-jsx-runtime.development.js");
	}
	return jsxRuntime$2.exports;
}

var jsxRuntimeExports = requireJsxRuntime();
const jsxRuntime = /*@__PURE__*/getDefaultExportFromCjs(jsxRuntimeExports);

const list = "_list_bd9my_4";
const paginationWrapper = "_paginationWrapper_bd9my_8";
const controls$2 = "_controls_bd9my_14";
const styles$a = {
	list: list,
	paginationWrapper: paginationWrapper,
	controls: controls$2
};

const loader = "_loader_s5tnl_1";
const spin = "_spin_s5tnl_1";
const styles$9 = {
	loader: loader,
	spin: spin
};

const Preloader = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$9.loader });
};

const sortWrapper = "_sortWrapper_iowud_1";
const customSelectWrapper$1 = "_customSelectWrapper_iowud_7";
const select$1 = "_select_iowud_14";
const arrow$1 = "_arrow_iowud_35";
const toggleButton = "_toggleButton_iowud_47";
const styles$8 = {
	sortWrapper: sortWrapper,
	customSelectWrapper: customSelectWrapper$1,
	select: select$1,
	arrow: arrow$1,
	toggleButton: toggleButton
};

const SortSelect = ({
  value,
  direction,
  onChange,
  onToggleDirection
}) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$8.sortWrapper, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$8.customSelectWrapper, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "select",
        {
          value,
          onChange: (e) => onChange(e.target.value),
          className: styles$8.select,
          "data-testid": "sort-select",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Sorting" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "title", children: "Name" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "artist", children: "Artist" })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "svg",
        {
          className: styles$8.arrow,
          viewBox: "0 0 12 8",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "polyline",
            {
              points: "1,1 6,6 11,1",
              strokeWidth: "2",
              strokeLinecap: "round"
            }
          )
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: onToggleDirection, className: styles$8.toggleButton, children: direction === "asc" ? "↑" : "↓" })
  ] });
};

const filtersWrapper = "_filtersWrapper_pbz4o_1";
const customSelectWrapper = "_customSelectWrapper_pbz4o_6";
const select = "_select_pbz4o_13";
const arrow = "_arrow_pbz4o_35";
const styles$7 = {
	filtersWrapper: filtersWrapper,
	customSelectWrapper: customSelectWrapper,
	select: select,
	arrow: arrow
};

const TrackFilters = ({
  genres,
  selectedGenre,
  onGenreChange,
  setCurrentPage
}) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$7.filtersWrapper, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$7.customSelectWrapper, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "select",
      {
        value: selectedGenre,
        "aria-label": "Genre",
        onChange: (e) => {
          onGenreChange(e.target.value);
          setCurrentPage(1);
        },
        className: styles$7.select,
        "data-testid": "filter-genre",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "All genres" }),
          genres.map((genre) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: genre, children: genre }, genre))
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "svg",
      {
        className: styles$7.arrow,
        viewBox: "0 0 12 8",
        xmlns: "http://www.w3.org/2000/svg",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "polyline",
          {
            points: "1,1 6,6 11,1",
            strokeWidth: "2",
            strokeLinecap: "round"
          }
        )
      }
    )
  ] }) });
};

const TrackListControls = ({
  sortBy,
  sortDirection,
  onSortChange,
  onToggleDirection,
  selectedGenre,
  onGenreChange,
  genres,
  setCurrentPage
}) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$a.controls, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SortSelect,
      {
        value: sortBy,
        onChange: onSortChange,
        direction: sortDirection,
        onToggleDirection
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      TrackFilters,
      {
        genres,
        selectedGenre,
        onGenreChange,
        setCurrentPage
      }
    )
  ] });
};

const trackItem = "_trackItem_1p1ix_1";
const cover = "_cover_1p1ix_18";
const info = "_info_1p1ix_27";
const trackInfo = "_trackInfo_1p1ix_34";
const player = "_player_1p1ix_41";
const title = "_title_1p1ix_48";
const artist = "_artist_1p1ix_54";
const album = "_album_1p1ix_59";
const genres = "_genres_1p1ix_64";
const genre = "_genre_1p1ix_64";
const actions$1 = "_actions_1p1ix_78";
const mainActions = "_mainActions_1p1ix_85";
const dots = "_dots_1p1ix_93";
const checkbox = "_checkbox_1p1ix_97";
const styles$6 = {
	trackItem: trackItem,
	cover: cover,
	info: info,
	trackInfo: trackInfo,
	player: player,
	title: title,
	artist: artist,
	album: album,
	genres: genres,
	genre: genre,
	actions: actions$1,
	mainActions: mainActions,
	dots: dots,
	checkbox: checkbox
};

const coverImage = "/assets/default_cover-DwRfFdVu.jpg";

const TrackCover = ({ src, alt }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  "img",
  {
    src: src || coverImage,
    alt,
    onError: (e) => e.target.src = coverImage,
    className: styles$6.cover
  }
);

const TrackInfo = ({ title, artist, album, genres, id }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$6.info, children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$6.title, "data-testid": `track-item-${id}-title`, children: title }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$6.artist, "data-testid": `track-item-${id}-artist`, children: artist }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$6.album, children: album }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$6.genres, children: genres.map((g) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: styles$6.genre, children: g }, g)) })
] });

const container = "_container_1u8zp_3";
const controls$1 = "_controls_1u8zp_15";
const button$3 = "_button_1u8zp_23";
const icon$1 = "_icon_1u8zp_42";
const slider = "_slider_1u8zp_47";
const timer = "_timer_1u8zp_67";
const canvas = "_canvas_1u8zp_79";
const canvasWrapper = "_canvasWrapper_1u8zp_87";
const hiddenCanvas = "_hiddenCanvas_1u8zp_97";
const styles$5 = {
	container: container,
	controls: controls$1,
	button: button$3,
	icon: icon$1,
	slider: slider,
	timer: timer,
	canvas: canvas,
	canvasWrapper: canvasWrapper,
	hiddenCanvas: hiddenCanvas
};

const PlayIcon = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEzOSAxMzkiIGhlaWdodD0iMTM5cHgiIGlkPSJQbGF5IiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAxMzkgMTM5IiB3aWR0aD0iMTM5cHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxwYXRoIGQ9Ik0xMTcuMDM3LDYxLjQ0MUwzNi4zMzMsMTQuODQ2Yy0yLjQ2Ny0xLjQyNC01LjUwMi0xLjQyNC03Ljk3MiwwYy0yLjQ2MywxLjQyMy0zLjk4Miw0LjA1Ni0zLjk4Miw2LjkwM3Y5My4xODggIGMwLDIuODQ4LDEuNTIyLDUuNDc5LDMuOTgyLDYuOWMxLjIzNiwwLjcxMywyLjYxLDEuMDY3LDMuOTg2LDEuMDY3YzEuMzc0LDAsMi43NTEtMC4zNTQsMy45ODMtMS4wNjdsODAuNzA0LTQ2LjU5NCAgYzIuNDY2LTEuNDIyLDMuOTg0LTQuMDU0LDMuOTg0LTYuOUMxMjEuMDIzLDY1LjQ5NywxMTkuNTAyLDYyLjg2NiwxMTcuMDM3LDYxLjQ0MXoiLz48L3N2Zz4=";

const PauseIcon = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGhlaWdodD0iNTEycHgiIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgd2lkdGg9IjUxMnB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48Zz48cGF0aCBkPSJNMjI0LDQzNS44Vjc2LjFjMC02LjctNS40LTEyLjEtMTIuMi0xMi4xaC03MS42Yy02LjgsMC0xMi4yLDUuNC0xMi4yLDEyLjF2MzU5LjdjMCw2LjcsNS40LDEyLjIsMTIuMiwxMi4yaDcxLjYgICBDMjE4LjYsNDQ4LDIyNCw0NDIuNiwyMjQsNDM1Ljh6Ii8+PHBhdGggZD0iTTM3MS44LDY0aC03MS42Yy02LjcsMC0xMi4yLDUuNC0xMi4yLDEyLjF2MzU5LjdjMCw2LjcsNS40LDEyLjIsMTIuMiwxMi4yaDcxLjZjNi43LDAsMTIuMi01LjQsMTIuMi0xMi4yVjc2LjEgICBDMzg0LDY5LjQsMzc4LjYsNjQsMzcxLjgsNjR6Ii8+PC9nPjwvc3ZnPg==";

const CustomAudioPlayer = ({
  src,
  onEndedNext,
  isActive,
  onTogglePlay
}) => {
  const audioRef = reactExports.useRef(null);
  const canvasRef = reactExports.useRef(null);
  const audioContextRef = reactExports.useRef(null);
  const sourceRef = reactExports.useRef(null);
  const analyserRef = reactExports.useRef(null);
  const [currentTime, setCurrentTime] = reactExports.useState(0);
  const [duration, setDuration] = reactExports.useState(0);
  const [isConnected, setIsConnected] = reactExports.useState(false);
  const [hasError, setHasError] = reactExports.useState(false);
  const connectAudio = () => {
    if (!audioRef.current || isConnected) return;
    const ctx = new AudioContext();
    const analyser = ctx.createAnalyser();
    analyser.fftSize = 2048;
    try {
      const source = ctx.createMediaElementSource(audioRef.current);
      source.connect(analyser);
      analyser.connect(ctx.destination);
      sourceRef.current = source;
      analyserRef.current = analyser;
      audioContextRef.current = ctx;
      setIsConnected(true);
      drawWave();
    } catch (err) {
      console.warn("⚠️ MediaElementSource already created:", err);
    }
  };
  const drawWave = () => {
    const canvas = canvasRef.current;
    const analyser = analyserRef.current;
    if (!canvas || !analyser) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);
    const draw = () => {
      requestAnimationFrame(draw);
      analyser.getByteTimeDomainData(dataArray);
      ctx.fillStyle = "#121212";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.lineWidth = 2;
      ctx.strokeStyle = "#ccc";
      ctx.beginPath();
      const sliceWidth = canvas.width / bufferLength;
      let x = 0;
      for (let i = 0; i < bufferLength; i++) {
        const v = dataArray[i] / 128;
        const y = v * canvas.height / 2;
        i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        x += sliceWidth;
      }
      ctx.lineTo(canvas.width, canvas.height / 2);
      ctx.stroke();
    };
    draw();
  };
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };
  reactExports.useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isActive) {
      if (!isConnected) {
        connectAudio();
      } else {
        drawWave();
      }
      audio.play().catch((err) => console.warn("Play error:", err));
    } else {
      audio.pause();
    }
  }, [isActive]);
  reactExports.useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const updateProgress = () => {
      setCurrentTime(audio.currentTime);
      setDuration(audio.duration || 0);
    };
    const handleEnded = () => {
      onEndedNext?.();
    };
    audio.addEventListener("timeupdate", updateProgress);
    audio.addEventListener("loadedmetadata", updateProgress);
    audio.addEventListener("ended", handleEnded);
    return () => {
      audio.removeEventListener("timeupdate", updateProgress);
      audio.removeEventListener("loadedmetadata", updateProgress);
      audio.removeEventListener("ended", handleEnded);
    };
  }, [onEndedNext]);
  reactExports.useEffect(() => {
    return () => {
      sourceRef.current?.disconnect();
      if (audioContextRef.current && audioContextRef.current.state !== "closed") {
        audioContextRef.current.close().catch((err) => {
          console.error("Error while closing AudioContext:", err);
        });
      }
      setIsConnected(false);
    };
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: hasError ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$5.errorMessage, children: "Audio file not found" }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$5.container, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$5.controls, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: onTogglePlay, className: styles$5.button, children: isActive ? /* @__PURE__ */ jsxRuntimeExports.jsx(PauseIcon, { className: styles$5.icon }) : /* @__PURE__ */ jsxRuntimeExports.jsx(PlayIcon, { className: styles$5.icon }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          type: "range",
          min: 0,
          max: duration || 0,
          value: currentTime,
          onChange: (e) => {
            const audio = audioRef.current;
            if (audio) audio.currentTime = Number(e.target.value);
          },
          className: styles$5.slider
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: styles$5.timer, children: [
        formatTime(currentTime),
        " / ",
        formatTime(duration)
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: `${styles$5.canvasWrapper} ${!isActive ? styles$5.hiddenCanvas : ""}`,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "canvas",
          {
            ref: canvasRef,
            width: 500,
            height: 100,
            className: styles$5.canvas
          }
        )
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "audio",
      {
        ref: audioRef,
        src,
        crossOrigin: "anonymous",
        className: "hidden",
        onError: () => {
          setHasError(true);
        }
      }
    )
  ] }) });
};

const wrapper$1 = "_wrapper_1nlsq_1";
const styles$4 = {
	wrapper: wrapper$1
};

function formatProdErrorMessage$1(code) {
  return `Minified Redux error #${code}; visit https://redux.js.org/Errors?code=${code} for the full message or use the non-minified dev environment for full errors. `;
}
var $$observable = /* @__PURE__ */ (() => typeof Symbol === "function" && Symbol.observable || "@@observable")();
var symbol_observable_default = $$observable;
var randomString = () => Math.random().toString(36).substring(7).split("").join(".");
var ActionTypes = {
  INIT: `@@redux/INIT${/* @__PURE__ */ randomString()}`,
  REPLACE: `@@redux/REPLACE${/* @__PURE__ */ randomString()}`,
  PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${randomString()}`
};
var actionTypes_default = ActionTypes;
function isPlainObject$2(obj) {
  if (typeof obj !== "object" || obj === null)
    return false;
  let proto = obj;
  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }
  return Object.getPrototypeOf(obj) === proto || Object.getPrototypeOf(obj) === null;
}
function miniKindOf(val) {
  if (val === void 0)
    return "undefined";
  if (val === null)
    return "null";
  const type = typeof val;
  switch (type) {
    case "boolean":
    case "string":
    case "number":
    case "symbol":
    case "function": {
      return type;
    }
  }
  if (Array.isArray(val))
    return "array";
  if (isDate$2(val))
    return "date";
  if (isError$2(val))
    return "error";
  const constructorName = ctorName(val);
  switch (constructorName) {
    case "Symbol":
    case "Promise":
    case "WeakMap":
    case "WeakSet":
    case "Map":
    case "Set":
      return constructorName;
  }
  return Object.prototype.toString.call(val).slice(8, -1).toLowerCase().replace(/\s/g, "");
}
function ctorName(val) {
  return typeof val.constructor === "function" ? val.constructor.name : null;
}
function isError$2(val) {
  return val instanceof Error || typeof val.message === "string" && val.constructor && typeof val.constructor.stackTraceLimit === "number";
}
function isDate$2(val) {
  if (val instanceof Date)
    return true;
  return typeof val.toDateString === "function" && typeof val.getDate === "function" && typeof val.setDate === "function";
}
function kindOf$1(val) {
  let typeOfVal = typeof val;
  if (false) {
    typeOfVal = miniKindOf(val);
  }
  return typeOfVal;
}
function createStore(reducer, preloadedState, enhancer) {
  if (typeof reducer !== "function") {
    throw new Error(true ? formatProdErrorMessage$1(2) : `Expected the root reducer to be a function. Instead, received: '${kindOf$1(reducer)}'`);
  }
  if (typeof preloadedState === "function" && typeof enhancer === "function" || typeof enhancer === "function" && typeof arguments[3] === "function") {
    throw new Error(true ? formatProdErrorMessage$1(0) : "It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.");
  }
  if (typeof preloadedState === "function" && typeof enhancer === "undefined") {
    enhancer = preloadedState;
    preloadedState = void 0;
  }
  if (typeof enhancer !== "undefined") {
    if (typeof enhancer !== "function") {
      throw new Error(true ? formatProdErrorMessage$1(1) : `Expected the enhancer to be a function. Instead, received: '${kindOf$1(enhancer)}'`);
    }
    return enhancer(createStore)(reducer, preloadedState);
  }
  let currentReducer = reducer;
  let currentState = preloadedState;
  let currentListeners = /* @__PURE__ */ new Map();
  let nextListeners = currentListeners;
  let listenerIdCounter = 0;
  let isDispatching = false;
  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = /* @__PURE__ */ new Map();
      currentListeners.forEach((listener, key) => {
        nextListeners.set(key, listener);
      });
    }
  }
  function getState() {
    if (isDispatching) {
      throw new Error(true ? formatProdErrorMessage$1(3) : "You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
    }
    return currentState;
  }
  function subscribe(listener) {
    if (typeof listener !== "function") {
      throw new Error(true ? formatProdErrorMessage$1(4) : `Expected the listener to be a function. Instead, received: '${kindOf$1(listener)}'`);
    }
    if (isDispatching) {
      throw new Error(true ? formatProdErrorMessage$1(5) : "You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api/store#subscribelistener for more details.");
    }
    let isSubscribed = true;
    ensureCanMutateNextListeners();
    const listenerId = listenerIdCounter++;
    nextListeners.set(listenerId, listener);
    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }
      if (isDispatching) {
        throw new Error(true ? formatProdErrorMessage$1(6) : "You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api/store#subscribelistener for more details.");
      }
      isSubscribed = false;
      ensureCanMutateNextListeners();
      nextListeners.delete(listenerId);
      currentListeners = null;
    };
  }
  function dispatch(action) {
    if (!isPlainObject$2(action)) {
      throw new Error(true ? formatProdErrorMessage$1(7) : `Actions must be plain objects. Instead, the actual type was: '${kindOf$1(action)}'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.`);
    }
    if (typeof action.type === "undefined") {
      throw new Error(true ? formatProdErrorMessage$1(8) : 'Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
    }
    if (typeof action.type !== "string") {
      throw new Error(true ? formatProdErrorMessage$1(17) : `Action "type" property must be a string. Instead, the actual type was: '${kindOf$1(action.type)}'. Value was: '${action.type}' (stringified)`);
    }
    if (isDispatching) {
      throw new Error(true ? formatProdErrorMessage$1(9) : "Reducers may not dispatch actions.");
    }
    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }
    const listeners = currentListeners = nextListeners;
    listeners.forEach((listener) => {
      listener();
    });
    return action;
  }
  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== "function") {
      throw new Error(true ? formatProdErrorMessage$1(10) : `Expected the nextReducer to be a function. Instead, received: '${kindOf$1(nextReducer)}`);
    }
    currentReducer = nextReducer;
    dispatch({
      type: actionTypes_default.REPLACE
    });
  }
  function observable() {
    const outerSubscribe = subscribe;
    return {
      /**
       * The minimal observable subscription method.
       * @param observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe(observer) {
        if (typeof observer !== "object" || observer === null) {
          throw new Error(true ? formatProdErrorMessage$1(11) : `Expected the observer to be an object. Instead, received: '${kindOf$1(observer)}'`);
        }
        function observeState() {
          const observerAsObserver = observer;
          if (observerAsObserver.next) {
            observerAsObserver.next(getState());
          }
        }
        observeState();
        const unsubscribe = outerSubscribe(observeState);
        return {
          unsubscribe
        };
      },
      [symbol_observable_default]() {
        return this;
      }
    };
  }
  dispatch({
    type: actionTypes_default.INIT
  });
  const store = {
    dispatch,
    subscribe,
    getState,
    replaceReducer,
    [symbol_observable_default]: observable
  };
  return store;
}
function legacy_createStore(reducer, preloadedState, enhancer) {
  return createStore(reducer, preloadedState, enhancer);
}
function warning(message) {
  if (typeof console !== "undefined" && typeof console.error === "function") {
    console.error(message);
  }
  try {
    throw new Error(message);
  } catch (e) {
  }
}
function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
  const reducerKeys = Object.keys(reducers);
  const argumentName = action && action.type === actionTypes_default.INIT ? "preloadedState argument passed to createStore" : "previous state received by the reducer";
  if (reducerKeys.length === 0) {
    return "Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.";
  }
  if (!isPlainObject$2(inputState)) {
    return `The ${argumentName} has unexpected type of "${kindOf$1(inputState)}". Expected argument to be an object with the following keys: "${reducerKeys.join('", "')}"`;
  }
  const unexpectedKeys = Object.keys(inputState).filter((key) => !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key]);
  unexpectedKeys.forEach((key) => {
    unexpectedKeyCache[key] = true;
  });
  if (action && action.type === actionTypes_default.REPLACE)
    return;
  if (unexpectedKeys.length > 0) {
    return `Unexpected ${unexpectedKeys.length > 1 ? "keys" : "key"} "${unexpectedKeys.join('", "')}" found in ${argumentName}. Expected to find one of the known reducer keys instead: "${reducerKeys.join('", "')}". Unexpected keys will be ignored.`;
  }
}
function assertReducerShape(reducers) {
  Object.keys(reducers).forEach((key) => {
    const reducer = reducers[key];
    const initialState = reducer(void 0, {
      type: actionTypes_default.INIT
    });
    if (typeof initialState === "undefined") {
      throw new Error(true ? formatProdErrorMessage$1(12) : `The slice reducer for key "${key}" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.`);
    }
    if (typeof reducer(void 0, {
      type: actionTypes_default.PROBE_UNKNOWN_ACTION()
    }) === "undefined") {
      throw new Error(true ? formatProdErrorMessage$1(13) : `The slice reducer for key "${key}" returned undefined when probed with a random type. Don't try to handle '${actionTypes_default.INIT}' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.`);
    }
  });
}
function combineReducers(reducers) {
  const reducerKeys = Object.keys(reducers);
  const finalReducers = {};
  for (let i = 0; i < reducerKeys.length; i++) {
    const key = reducerKeys[i];
    if (false) {
      if (typeof reducers[key] === "undefined") {
        warning(`No reducer provided for key "${key}"`);
      }
    }
    if (typeof reducers[key] === "function") {
      finalReducers[key] = reducers[key];
    }
  }
  const finalReducerKeys = Object.keys(finalReducers);
  let unexpectedKeyCache;
  if (false) {
    unexpectedKeyCache = {};
  }
  let shapeAssertionError;
  try {
    assertReducerShape(finalReducers);
  } catch (e) {
    shapeAssertionError = e;
  }
  return function combination(state = {}, action) {
    if (shapeAssertionError) {
      throw shapeAssertionError;
    }
    if (false) {
      const warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);
      if (warningMessage) {
        warning(warningMessage);
      }
    }
    let hasChanged = false;
    const nextState = {};
    for (let i = 0; i < finalReducerKeys.length; i++) {
      const key = finalReducerKeys[i];
      const reducer = finalReducers[key];
      const previousStateForKey = state[key];
      const nextStateForKey = reducer(previousStateForKey, action);
      if (typeof nextStateForKey === "undefined") {
        const actionType = action && action.type;
        throw new Error(true ? formatProdErrorMessage$1(14) : `When called with an action of type ${actionType ? `"${String(actionType)}"` : "(unknown type)"}, the slice reducer for key "${key}" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.`);
      }
      nextState[key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }
    hasChanged = hasChanged || finalReducerKeys.length !== Object.keys(state).length;
    return hasChanged ? nextState : state;
  };
}
function bindActionCreator(actionCreator, dispatch) {
  return function(...args) {
    return dispatch(actionCreator.apply(this, args));
  };
}
function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === "function") {
    return bindActionCreator(actionCreators, dispatch);
  }
  if (typeof actionCreators !== "object" || actionCreators === null) {
    throw new Error(true ? formatProdErrorMessage$1(16) : `bindActionCreators expected an object or a function, but instead received: '${kindOf$1(actionCreators)}'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?`);
  }
  const boundActionCreators = {};
  for (const key in actionCreators) {
    const actionCreator = actionCreators[key];
    if (typeof actionCreator === "function") {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }
  return boundActionCreators;
}
function compose(...funcs) {
  if (funcs.length === 0) {
    return (arg) => arg;
  }
  if (funcs.length === 1) {
    return funcs[0];
  }
  return funcs.reduce((a, b) => (...args) => a(b(...args)));
}
function applyMiddleware(...middlewares) {
  return (createStore2) => (reducer, preloadedState) => {
    const store = createStore2(reducer, preloadedState);
    let dispatch = () => {
      throw new Error(true ? formatProdErrorMessage$1(15) : "Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.");
    };
    const middlewareAPI = {
      getState: store.getState,
      dispatch: (action, ...args) => dispatch(action, ...args)
    };
    const chain = middlewares.map((middleware) => middleware(middlewareAPI));
    dispatch = compose(...chain)(store.dispatch);
    return {
      ...store,
      dispatch
    };
  };
}
function isAction(action) {
  return isPlainObject$2(action) && "type" in action && typeof action.type === "string";
}

var NOTHING = Symbol.for("immer-nothing");
var DRAFTABLE = Symbol.for("immer-draftable");
var DRAFT_STATE = Symbol.for("immer-state");
var errors = false ? [
  // All error codes, starting by 0:
  function(plugin) {
    return `The plugin for '${plugin}' has not been loaded into Immer. To enable the plugin, import and call \`enable${plugin}()\` when initializing your application.`;
  },
  function(thing) {
    return `produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '${thing}'`;
  },
  "This object has been frozen and should not be mutated",
  function(data) {
    return "Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " + data;
  },
  "An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",
  "Immer forbids circular references",
  "The first or second argument to `produce` must be a function",
  "The third argument to `produce` must be a function or undefined",
  "First argument to `createDraft` must be a plain object, an array, or an immerable object",
  "First argument to `finishDraft` must be a draft returned by `createDraft`",
  function(thing) {
    return `'current' expects a draft, got: ${thing}`;
  },
  "Object.defineProperty() cannot be used on an Immer draft",
  "Object.setPrototypeOf() cannot be used on an Immer draft",
  "Immer only supports deleting array indices",
  "Immer only supports setting array indices and the 'length' property",
  function(thing) {
    return `'original' expects a draft, got: ${thing}`;
  }
  // Note: if more errors are added, the errorOffset in Patches.ts should be increased
  // See Patches.ts for additional errors
] : [];
function die(error, ...args) {
  if (false) {
    const e = errors[error];
    const msg = typeof e === "function" ? e.apply(null, args) : e;
    throw new Error(`[Immer] ${msg}`);
  }
  throw new Error(
    `[Immer] minified error nr: ${error}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var getPrototypeOf$1 = Object.getPrototypeOf;
function isDraft(value) {
  return !!value && !!value[DRAFT_STATE];
}
function isDraftable(value) {
  if (!value)
    return false;
  return isPlainObject$1(value) || Array.isArray(value) || !!value[DRAFTABLE] || !!value.constructor?.[DRAFTABLE] || isMap(value) || isSet(value);
}
var objectCtorString = Object.prototype.constructor.toString();
function isPlainObject$1(value) {
  if (!value || typeof value !== "object")
    return false;
  const proto = getPrototypeOf$1(value);
  if (proto === null) {
    return true;
  }
  const Ctor = Object.hasOwnProperty.call(proto, "constructor") && proto.constructor;
  if (Ctor === Object)
    return true;
  return typeof Ctor == "function" && Function.toString.call(Ctor) === objectCtorString;
}
function original$1(value) {
  if (!isDraft(value))
    die(15, value);
  return value[DRAFT_STATE].base_;
}
function each(obj, iter) {
  if (getArchtype(obj) === 0) {
    Reflect.ownKeys(obj).forEach((key) => {
      iter(key, obj[key], obj);
    });
  } else {
    obj.forEach((entry, index) => iter(index, entry, obj));
  }
}
function getArchtype(thing) {
  const state = thing[DRAFT_STATE];
  return state ? state.type_ : Array.isArray(thing) ? 1 : isMap(thing) ? 2 : isSet(thing) ? 3 : 0;
}
function has(thing, prop) {
  return getArchtype(thing) === 2 ? thing.has(prop) : Object.prototype.hasOwnProperty.call(thing, prop);
}
function get$4(thing, prop) {
  return getArchtype(thing) === 2 ? thing.get(prop) : thing[prop];
}
function set$2(thing, propOrOldValue, value) {
  const t = getArchtype(thing);
  if (t === 2)
    thing.set(propOrOldValue, value);
  else if (t === 3) {
    thing.add(value);
  } else
    thing[propOrOldValue] = value;
}
function is$1(x, y) {
  if (x === y) {
    return x !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}
function isMap(target) {
  return target instanceof Map;
}
function isSet(target) {
  return target instanceof Set;
}
function latest(state) {
  return state.copy_ || state.base_;
}
function shallowCopy(base, strict) {
  if (isMap(base)) {
    return new Map(base);
  }
  if (isSet(base)) {
    return new Set(base);
  }
  if (Array.isArray(base))
    return Array.prototype.slice.call(base);
  const isPlain = isPlainObject$1(base);
  if (strict === true || strict === "class_only" && !isPlain) {
    const descriptors = Object.getOwnPropertyDescriptors(base);
    delete descriptors[DRAFT_STATE];
    let keys = Reflect.ownKeys(descriptors);
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      const desc = descriptors[key];
      if (desc.writable === false) {
        desc.writable = true;
        desc.configurable = true;
      }
      if (desc.get || desc.set)
        descriptors[key] = {
          configurable: true,
          writable: true,
          // could live with !!desc.set as well here...
          enumerable: desc.enumerable,
          value: base[key]
        };
    }
    return Object.create(getPrototypeOf$1(base), descriptors);
  } else {
    const proto = getPrototypeOf$1(base);
    if (proto !== null && isPlain) {
      return { ...base };
    }
    const obj = Object.create(proto);
    return Object.assign(obj, base);
  }
}
function freeze(obj, deep = false) {
  if (isFrozen(obj) || isDraft(obj) || !isDraftable(obj))
    return obj;
  if (getArchtype(obj) > 1) {
    obj.set = obj.add = obj.clear = obj.delete = dontMutateFrozenCollections;
  }
  Object.freeze(obj);
  if (deep)
    Object.entries(obj).forEach(([key, value]) => freeze(value, true));
  return obj;
}
function dontMutateFrozenCollections() {
  die(2);
}
function isFrozen(obj) {
  return Object.isFrozen(obj);
}
var plugins = {};
function getPlugin(pluginKey) {
  const plugin = plugins[pluginKey];
  if (!plugin) {
    die(0, pluginKey);
  }
  return plugin;
}
function loadPlugin(pluginKey, implementation) {
  if (!plugins[pluginKey])
    plugins[pluginKey] = implementation;
}
var currentScope;
function getCurrentScope() {
  return currentScope;
}
function createScope(parent_, immer_) {
  return {
    drafts_: [],
    parent_,
    immer_,
    // Whenever the modified draft contains a draft from another scope, we
    // need to prevent auto-freezing so the unowned draft can be finalized.
    canAutoFreeze_: true,
    unfinalizedDrafts_: 0
  };
}
function usePatchesInScope(scope, patchListener) {
  if (patchListener) {
    getPlugin("Patches");
    scope.patches_ = [];
    scope.inversePatches_ = [];
    scope.patchListener_ = patchListener;
  }
}
function revokeScope(scope) {
  leaveScope(scope);
  scope.drafts_.forEach(revokeDraft);
  scope.drafts_ = null;
}
function leaveScope(scope) {
  if (scope === currentScope) {
    currentScope = scope.parent_;
  }
}
function enterScope(immer2) {
  return currentScope = createScope(currentScope, immer2);
}
function revokeDraft(draft) {
  const state = draft[DRAFT_STATE];
  if (state.type_ === 0 || state.type_ === 1)
    state.revoke_();
  else
    state.revoked_ = true;
}
function processResult(result, scope) {
  scope.unfinalizedDrafts_ = scope.drafts_.length;
  const baseDraft = scope.drafts_[0];
  const isReplaced = result !== void 0 && result !== baseDraft;
  if (isReplaced) {
    if (baseDraft[DRAFT_STATE].modified_) {
      revokeScope(scope);
      die(4);
    }
    if (isDraftable(result)) {
      result = finalize(scope, result);
      if (!scope.parent_)
        maybeFreeze(scope, result);
    }
    if (scope.patches_) {
      getPlugin("Patches").generateReplacementPatches_(
        baseDraft[DRAFT_STATE].base_,
        result,
        scope.patches_,
        scope.inversePatches_
      );
    }
  } else {
    result = finalize(scope, baseDraft, []);
  }
  revokeScope(scope);
  if (scope.patches_) {
    scope.patchListener_(scope.patches_, scope.inversePatches_);
  }
  return result !== NOTHING ? result : void 0;
}
function finalize(rootScope, value, path) {
  if (isFrozen(value))
    return value;
  const state = value[DRAFT_STATE];
  if (!state) {
    each(
      value,
      (key, childValue) => finalizeProperty(rootScope, state, value, key, childValue, path)
    );
    return value;
  }
  if (state.scope_ !== rootScope)
    return value;
  if (!state.modified_) {
    maybeFreeze(rootScope, state.base_, true);
    return state.base_;
  }
  if (!state.finalized_) {
    state.finalized_ = true;
    state.scope_.unfinalizedDrafts_--;
    const result = state.copy_;
    let resultEach = result;
    let isSet2 = false;
    if (state.type_ === 3) {
      resultEach = new Set(result);
      result.clear();
      isSet2 = true;
    }
    each(
      resultEach,
      (key, childValue) => finalizeProperty(rootScope, state, result, key, childValue, path, isSet2)
    );
    maybeFreeze(rootScope, result, false);
    if (path && rootScope.patches_) {
      getPlugin("Patches").generatePatches_(
        state,
        path,
        rootScope.patches_,
        rootScope.inversePatches_
      );
    }
  }
  return state.copy_;
}
function finalizeProperty(rootScope, parentState, targetObject, prop, childValue, rootPath, targetIsSet) {
  if (false)
    die(5);
  if (isDraft(childValue)) {
    const path = rootPath && parentState && parentState.type_ !== 3 && // Set objects are atomic since they have no keys.
    !has(parentState.assigned_, prop) ? rootPath.concat(prop) : void 0;
    const res = finalize(rootScope, childValue, path);
    set$2(targetObject, prop, res);
    if (isDraft(res)) {
      rootScope.canAutoFreeze_ = false;
    } else
      return;
  } else if (targetIsSet) {
    targetObject.add(childValue);
  }
  if (isDraftable(childValue) && !isFrozen(childValue)) {
    if (!rootScope.immer_.autoFreeze_ && rootScope.unfinalizedDrafts_ < 1) {
      return;
    }
    finalize(rootScope, childValue);
    if ((!parentState || !parentState.scope_.parent_) && typeof prop !== "symbol" && Object.prototype.propertyIsEnumerable.call(targetObject, prop))
      maybeFreeze(rootScope, childValue);
  }
}
function maybeFreeze(scope, value, deep = false) {
  if (!scope.parent_ && scope.immer_.autoFreeze_ && scope.canAutoFreeze_) {
    freeze(value, deep);
  }
}
function createProxyProxy(base, parent) {
  const isArray = Array.isArray(base);
  const state = {
    type_: isArray ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: parent ? parent.scope_ : getCurrentScope(),
    // True for both shallow and deep changes.
    modified_: false,
    // Used during finalization.
    finalized_: false,
    // Track which properties have been assigned (true) or deleted (false).
    assigned_: {},
    // The parent draft state.
    parent_: parent,
    // The base state.
    base_: base,
    // The base proxy.
    draft_: null,
    // set below
    // The base copy with any updated values.
    copy_: null,
    // Called by the `produce` function.
    revoke_: null,
    isManual_: false
  };
  let target = state;
  let traps = objectTraps;
  if (isArray) {
    target = [state];
    traps = arrayTraps;
  }
  const { revoke, proxy } = Proxy.revocable(target, traps);
  state.draft_ = proxy;
  state.revoke_ = revoke;
  return proxy;
}
var objectTraps = {
  get(state, prop) {
    if (prop === DRAFT_STATE)
      return state;
    const source = latest(state);
    if (!has(source, prop)) {
      return readPropFromProto(state, source, prop);
    }
    const value = source[prop];
    if (state.finalized_ || !isDraftable(value)) {
      return value;
    }
    if (value === peek(state.base_, prop)) {
      prepareCopy(state);
      return state.copy_[prop] = createProxy(value, state);
    }
    return value;
  },
  has(state, prop) {
    return prop in latest(state);
  },
  ownKeys(state) {
    return Reflect.ownKeys(latest(state));
  },
  set(state, prop, value) {
    const desc = getDescriptorFromProto(latest(state), prop);
    if (desc?.set) {
      desc.set.call(state.draft_, value);
      return true;
    }
    if (!state.modified_) {
      const current2 = peek(latest(state), prop);
      const currentState = current2?.[DRAFT_STATE];
      if (currentState && currentState.base_ === value) {
        state.copy_[prop] = value;
        state.assigned_[prop] = false;
        return true;
      }
      if (is$1(value, current2) && (value !== void 0 || has(state.base_, prop)))
        return true;
      prepareCopy(state);
      markChanged(state);
    }
    if (state.copy_[prop] === value && // special case: handle new props with value 'undefined'
    (value !== void 0 || prop in state.copy_) || // special case: NaN
    Number.isNaN(value) && Number.isNaN(state.copy_[prop]))
      return true;
    state.copy_[prop] = value;
    state.assigned_[prop] = true;
    return true;
  },
  deleteProperty(state, prop) {
    if (peek(state.base_, prop) !== void 0 || prop in state.base_) {
      state.assigned_[prop] = false;
      prepareCopy(state);
      markChanged(state);
    } else {
      delete state.assigned_[prop];
    }
    if (state.copy_) {
      delete state.copy_[prop];
    }
    return true;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(state, prop) {
    const owner = latest(state);
    const desc = Reflect.getOwnPropertyDescriptor(owner, prop);
    if (!desc)
      return desc;
    return {
      writable: true,
      configurable: state.type_ !== 1 || prop !== "length",
      enumerable: desc.enumerable,
      value: owner[prop]
    };
  },
  defineProperty() {
    die(11);
  },
  getPrototypeOf(state) {
    return getPrototypeOf$1(state.base_);
  },
  setPrototypeOf() {
    die(12);
  }
};
var arrayTraps = {};
each(objectTraps, (key, fn) => {
  arrayTraps[key] = function() {
    arguments[0] = arguments[0][0];
    return fn.apply(this, arguments);
  };
});
arrayTraps.deleteProperty = function(state, prop) {
  if (false)
    die(13);
  return arrayTraps.set.call(this, state, prop, void 0);
};
arrayTraps.set = function(state, prop, value) {
  if (false)
    die(14);
  return objectTraps.set.call(this, state[0], prop, value, state[0]);
};
function peek(draft, prop) {
  const state = draft[DRAFT_STATE];
  const source = state ? latest(state) : draft;
  return source[prop];
}
function readPropFromProto(state, source, prop) {
  const desc = getDescriptorFromProto(source, prop);
  return desc ? `value` in desc ? desc.value : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    desc.get?.call(state.draft_)
  ) : void 0;
}
function getDescriptorFromProto(source, prop) {
  if (!(prop in source))
    return void 0;
  let proto = getPrototypeOf$1(source);
  while (proto) {
    const desc = Object.getOwnPropertyDescriptor(proto, prop);
    if (desc)
      return desc;
    proto = getPrototypeOf$1(proto);
  }
  return void 0;
}
function markChanged(state) {
  if (!state.modified_) {
    state.modified_ = true;
    if (state.parent_) {
      markChanged(state.parent_);
    }
  }
}
function prepareCopy(state) {
  if (!state.copy_) {
    state.copy_ = shallowCopy(
      state.base_,
      state.scope_.immer_.useStrictShallowCopy_
    );
  }
}
var Immer2 = class {
  constructor(config) {
    this.autoFreeze_ = true;
    this.useStrictShallowCopy_ = false;
    this.produce = (base, recipe, patchListener) => {
      if (typeof base === "function" && typeof recipe !== "function") {
        const defaultBase = recipe;
        recipe = base;
        const self = this;
        return function curriedProduce(base2 = defaultBase, ...args) {
          return self.produce(base2, (draft) => recipe.call(this, draft, ...args));
        };
      }
      if (typeof recipe !== "function")
        die(6);
      if (patchListener !== void 0 && typeof patchListener !== "function")
        die(7);
      let result;
      if (isDraftable(base)) {
        const scope = enterScope(this);
        const proxy = createProxy(base, void 0);
        let hasError = true;
        try {
          result = recipe(proxy);
          hasError = false;
        } finally {
          if (hasError)
            revokeScope(scope);
          else
            leaveScope(scope);
        }
        usePatchesInScope(scope, patchListener);
        return processResult(result, scope);
      } else if (!base || typeof base !== "object") {
        result = recipe(base);
        if (result === void 0)
          result = base;
        if (result === NOTHING)
          result = void 0;
        if (this.autoFreeze_)
          freeze(result, true);
        if (patchListener) {
          const p = [];
          const ip = [];
          getPlugin("Patches").generateReplacementPatches_(base, result, p, ip);
          patchListener(p, ip);
        }
        return result;
      } else
        die(1, base);
    };
    this.produceWithPatches = (base, recipe) => {
      if (typeof base === "function") {
        return (state, ...args) => this.produceWithPatches(state, (draft) => base(draft, ...args));
      }
      let patches, inversePatches;
      const result = this.produce(base, recipe, (p, ip) => {
        patches = p;
        inversePatches = ip;
      });
      return [result, patches, inversePatches];
    };
    if (typeof config?.autoFreeze === "boolean")
      this.setAutoFreeze(config.autoFreeze);
    if (typeof config?.useStrictShallowCopy === "boolean")
      this.setUseStrictShallowCopy(config.useStrictShallowCopy);
  }
  createDraft(base) {
    if (!isDraftable(base))
      die(8);
    if (isDraft(base))
      base = current(base);
    const scope = enterScope(this);
    const proxy = createProxy(base, void 0);
    proxy[DRAFT_STATE].isManual_ = true;
    leaveScope(scope);
    return proxy;
  }
  finishDraft(draft, patchListener) {
    const state = draft && draft[DRAFT_STATE];
    if (!state || !state.isManual_)
      die(9);
    const { scope_: scope } = state;
    usePatchesInScope(scope, patchListener);
    return processResult(void 0, scope);
  }
  /**
   * Pass true to automatically freeze all copies created by Immer.
   *
   * By default, auto-freezing is enabled.
   */
  setAutoFreeze(value) {
    this.autoFreeze_ = value;
  }
  /**
   * Pass true to enable strict shallow copy.
   *
   * By default, immer does not copy the object descriptors such as getter, setter and non-enumrable properties.
   */
  setUseStrictShallowCopy(value) {
    this.useStrictShallowCopy_ = value;
  }
  applyPatches(base, patches) {
    let i;
    for (i = patches.length - 1; i >= 0; i--) {
      const patch = patches[i];
      if (patch.path.length === 0 && patch.op === "replace") {
        base = patch.value;
        break;
      }
    }
    if (i > -1) {
      patches = patches.slice(i + 1);
    }
    const applyPatchesImpl = getPlugin("Patches").applyPatches_;
    if (isDraft(base)) {
      return applyPatchesImpl(base, patches);
    }
    return this.produce(
      base,
      (draft) => applyPatchesImpl(draft, patches)
    );
  }
};
function createProxy(value, parent) {
  const draft = isMap(value) ? getPlugin("MapSet").proxyMap_(value, parent) : isSet(value) ? getPlugin("MapSet").proxySet_(value, parent) : createProxyProxy(value, parent);
  const scope = parent ? parent.scope_ : getCurrentScope();
  scope.drafts_.push(draft);
  return draft;
}
function current(value) {
  if (!isDraft(value))
    die(10, value);
  return currentImpl(value);
}
function currentImpl(value) {
  if (!isDraftable(value) || isFrozen(value))
    return value;
  const state = value[DRAFT_STATE];
  let copy;
  if (state) {
    if (!state.modified_)
      return state.base_;
    state.finalized_ = true;
    copy = shallowCopy(value, state.scope_.immer_.useStrictShallowCopy_);
  } else {
    copy = shallowCopy(value, true);
  }
  each(copy, (key, childValue) => {
    set$2(copy, key, currentImpl(childValue));
  });
  if (state) {
    state.finalized_ = false;
  }
  return copy;
}
function enablePatches() {
  const errorOffset = 16;
  if (false) {
    errors.push(
      'Sets cannot have "replace" patches.',
      function(op) {
        return "Unsupported patch operation: " + op;
      },
      function(path) {
        return "Cannot apply patch, path doesn't resolve: " + path;
      },
      "Patching reserved attributes like __proto__, prototype and constructor is not allowed"
    );
  }
  const REPLACE = "replace";
  const ADD = "add";
  const REMOVE = "remove";
  function generatePatches_(state, basePath, patches, inversePatches) {
    switch (state.type_) {
      case 0:
      case 2:
        return generatePatchesFromAssigned(
          state,
          basePath,
          patches,
          inversePatches
        );
      case 1:
        return generateArrayPatches(state, basePath, patches, inversePatches);
      case 3:
        return generateSetPatches(
          state,
          basePath,
          patches,
          inversePatches
        );
    }
  }
  function generateArrayPatches(state, basePath, patches, inversePatches) {
    let { base_, assigned_ } = state;
    let copy_ = state.copy_;
    if (copy_.length < base_.length) {
      ;
      [base_, copy_] = [copy_, base_];
      [patches, inversePatches] = [inversePatches, patches];
    }
    for (let i = 0; i < base_.length; i++) {
      if (assigned_[i] && copy_[i] !== base_[i]) {
        const path = basePath.concat([i]);
        patches.push({
          op: REPLACE,
          path,
          // Need to maybe clone it, as it can in fact be the original value
          // due to the base/copy inversion at the start of this function
          value: clonePatchValueIfNeeded(copy_[i])
        });
        inversePatches.push({
          op: REPLACE,
          path,
          value: clonePatchValueIfNeeded(base_[i])
        });
      }
    }
    for (let i = base_.length; i < copy_.length; i++) {
      const path = basePath.concat([i]);
      patches.push({
        op: ADD,
        path,
        // Need to maybe clone it, as it can in fact be the original value
        // due to the base/copy inversion at the start of this function
        value: clonePatchValueIfNeeded(copy_[i])
      });
    }
    for (let i = copy_.length - 1; base_.length <= i; --i) {
      const path = basePath.concat([i]);
      inversePatches.push({
        op: REMOVE,
        path
      });
    }
  }
  function generatePatchesFromAssigned(state, basePath, patches, inversePatches) {
    const { base_, copy_ } = state;
    each(state.assigned_, (key, assignedValue) => {
      const origValue = get$4(base_, key);
      const value = get$4(copy_, key);
      const op = !assignedValue ? REMOVE : has(base_, key) ? REPLACE : ADD;
      if (origValue === value && op === REPLACE)
        return;
      const path = basePath.concat(key);
      patches.push(op === REMOVE ? { op, path } : { op, path, value });
      inversePatches.push(
        op === ADD ? { op: REMOVE, path } : op === REMOVE ? { op: ADD, path, value: clonePatchValueIfNeeded(origValue) } : { op: REPLACE, path, value: clonePatchValueIfNeeded(origValue) }
      );
    });
  }
  function generateSetPatches(state, basePath, patches, inversePatches) {
    let { base_, copy_ } = state;
    let i = 0;
    base_.forEach((value) => {
      if (!copy_.has(value)) {
        const path = basePath.concat([i]);
        patches.push({
          op: REMOVE,
          path,
          value
        });
        inversePatches.unshift({
          op: ADD,
          path,
          value
        });
      }
      i++;
    });
    i = 0;
    copy_.forEach((value) => {
      if (!base_.has(value)) {
        const path = basePath.concat([i]);
        patches.push({
          op: ADD,
          path,
          value
        });
        inversePatches.unshift({
          op: REMOVE,
          path,
          value
        });
      }
      i++;
    });
  }
  function generateReplacementPatches_(baseValue, replacement, patches, inversePatches) {
    patches.push({
      op: REPLACE,
      path: [],
      value: replacement === NOTHING ? void 0 : replacement
    });
    inversePatches.push({
      op: REPLACE,
      path: [],
      value: baseValue
    });
  }
  function applyPatches_(draft, patches) {
    patches.forEach((patch) => {
      const { path, op } = patch;
      let base = draft;
      for (let i = 0; i < path.length - 1; i++) {
        const parentType = getArchtype(base);
        let p = path[i];
        if (typeof p !== "string" && typeof p !== "number") {
          p = "" + p;
        }
        if ((parentType === 0 || parentType === 1) && (p === "__proto__" || p === "constructor"))
          die(errorOffset + 3);
        if (typeof base === "function" && p === "prototype")
          die(errorOffset + 3);
        base = get$4(base, p);
        if (typeof base !== "object")
          die(errorOffset + 2, path.join("/"));
      }
      const type = getArchtype(base);
      const value = deepClonePatchValue(patch.value);
      const key = path[path.length - 1];
      switch (op) {
        case REPLACE:
          switch (type) {
            case 2:
              return base.set(key, value);
            case 3:
              die(errorOffset);
            default:
              return base[key] = value;
          }
        case ADD:
          switch (type) {
            case 1:
              return key === "-" ? base.push(value) : base.splice(key, 0, value);
            case 2:
              return base.set(key, value);
            case 3:
              return base.add(value);
            default:
              return base[key] = value;
          }
        case REMOVE:
          switch (type) {
            case 1:
              return base.splice(key, 1);
            case 2:
              return base.delete(key);
            case 3:
              return base.delete(patch.value);
            default:
              return delete base[key];
          }
        default:
          die(errorOffset + 1, op);
      }
    });
    return draft;
  }
  function deepClonePatchValue(obj) {
    if (!isDraftable(obj))
      return obj;
    if (Array.isArray(obj))
      return obj.map(deepClonePatchValue);
    if (isMap(obj))
      return new Map(
        Array.from(obj.entries()).map(([k, v]) => [k, deepClonePatchValue(v)])
      );
    if (isSet(obj))
      return new Set(Array.from(obj).map(deepClonePatchValue));
    const cloned = Object.create(getPrototypeOf$1(obj));
    for (const key in obj)
      cloned[key] = deepClonePatchValue(obj[key]);
    if (has(obj, DRAFTABLE))
      cloned[DRAFTABLE] = obj[DRAFTABLE];
    return cloned;
  }
  function clonePatchValueIfNeeded(obj) {
    if (isDraft(obj)) {
      return deepClonePatchValue(obj);
    } else
      return obj;
  }
  loadPlugin("Patches", {
    applyPatches_,
    generatePatches_,
    generateReplacementPatches_
  });
}
function enableMapSet() {
  class DraftMap extends Map {
    constructor(target, parent) {
      super();
      this[DRAFT_STATE] = {
        type_: 2,
        parent_: parent,
        scope_: parent ? parent.scope_ : getCurrentScope(),
        modified_: false,
        finalized_: false,
        copy_: void 0,
        assigned_: void 0,
        base_: target,
        draft_: this,
        isManual_: false,
        revoked_: false
      };
    }
    get size() {
      return latest(this[DRAFT_STATE]).size;
    }
    has(key) {
      return latest(this[DRAFT_STATE]).has(key);
    }
    set(key, value) {
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      if (!latest(state).has(key) || latest(state).get(key) !== value) {
        prepareMapCopy(state);
        markChanged(state);
        state.assigned_.set(key, true);
        state.copy_.set(key, value);
        state.assigned_.set(key, true);
      }
      return this;
    }
    delete(key) {
      if (!this.has(key)) {
        return false;
      }
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      prepareMapCopy(state);
      markChanged(state);
      if (state.base_.has(key)) {
        state.assigned_.set(key, false);
      } else {
        state.assigned_.delete(key);
      }
      state.copy_.delete(key);
      return true;
    }
    clear() {
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      if (latest(state).size) {
        prepareMapCopy(state);
        markChanged(state);
        state.assigned_ = /* @__PURE__ */ new Map();
        each(state.base_, (key) => {
          state.assigned_.set(key, false);
        });
        state.copy_.clear();
      }
    }
    forEach(cb, thisArg) {
      const state = this[DRAFT_STATE];
      latest(state).forEach((_value, key, _map) => {
        cb.call(thisArg, this.get(key), key, this);
      });
    }
    get(key) {
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      const value = latest(state).get(key);
      if (state.finalized_ || !isDraftable(value)) {
        return value;
      }
      if (value !== state.base_.get(key)) {
        return value;
      }
      const draft = createProxy(value, state);
      prepareMapCopy(state);
      state.copy_.set(key, draft);
      return draft;
    }
    keys() {
      return latest(this[DRAFT_STATE]).keys();
    }
    values() {
      const iterator = this.keys();
      return {
        [Symbol.iterator]: () => this.values(),
        next: () => {
          const r = iterator.next();
          if (r.done)
            return r;
          const value = this.get(r.value);
          return {
            done: false,
            value
          };
        }
      };
    }
    entries() {
      const iterator = this.keys();
      return {
        [Symbol.iterator]: () => this.entries(),
        next: () => {
          const r = iterator.next();
          if (r.done)
            return r;
          const value = this.get(r.value);
          return {
            done: false,
            value: [r.value, value]
          };
        }
      };
    }
    [(DRAFT_STATE, Symbol.iterator)]() {
      return this.entries();
    }
  }
  function proxyMap_(target, parent) {
    return new DraftMap(target, parent);
  }
  function prepareMapCopy(state) {
    if (!state.copy_) {
      state.assigned_ = /* @__PURE__ */ new Map();
      state.copy_ = new Map(state.base_);
    }
  }
  class DraftSet extends Set {
    constructor(target, parent) {
      super();
      this[DRAFT_STATE] = {
        type_: 3,
        parent_: parent,
        scope_: parent ? parent.scope_ : getCurrentScope(),
        modified_: false,
        finalized_: false,
        copy_: void 0,
        base_: target,
        draft_: this,
        drafts_: /* @__PURE__ */ new Map(),
        revoked_: false,
        isManual_: false
      };
    }
    get size() {
      return latest(this[DRAFT_STATE]).size;
    }
    has(value) {
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      if (!state.copy_) {
        return state.base_.has(value);
      }
      if (state.copy_.has(value))
        return true;
      if (state.drafts_.has(value) && state.copy_.has(state.drafts_.get(value)))
        return true;
      return false;
    }
    add(value) {
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      if (!this.has(value)) {
        prepareSetCopy(state);
        markChanged(state);
        state.copy_.add(value);
      }
      return this;
    }
    delete(value) {
      if (!this.has(value)) {
        return false;
      }
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      prepareSetCopy(state);
      markChanged(state);
      return state.copy_.delete(value) || (state.drafts_.has(value) ? state.copy_.delete(state.drafts_.get(value)) : (
        /* istanbul ignore next */
        false
      ));
    }
    clear() {
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      if (latest(state).size) {
        prepareSetCopy(state);
        markChanged(state);
        state.copy_.clear();
      }
    }
    values() {
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      prepareSetCopy(state);
      return state.copy_.values();
    }
    entries() {
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      prepareSetCopy(state);
      return state.copy_.entries();
    }
    keys() {
      return this.values();
    }
    [(DRAFT_STATE, Symbol.iterator)]() {
      return this.values();
    }
    forEach(cb, thisArg) {
      const iterator = this.values();
      let result = iterator.next();
      while (!result.done) {
        cb.call(thisArg, result.value, result.value, this);
        result = iterator.next();
      }
    }
  }
  function proxySet_(target, parent) {
    return new DraftSet(target, parent);
  }
  function prepareSetCopy(state) {
    if (!state.copy_) {
      state.copy_ = /* @__PURE__ */ new Set();
      state.base_.forEach((value) => {
        if (isDraftable(value)) {
          const draft = createProxy(value, state);
          state.drafts_.set(value, draft);
          state.copy_.add(draft);
        } else {
          state.copy_.add(value);
        }
      });
    }
  }
  function assertUnrevoked(state) {
    if (state.revoked_)
      die(3, JSON.stringify(latest(state)));
  }
  loadPlugin("MapSet", { proxyMap_, proxySet_ });
}
var immer = new Immer2();
var produce = immer.produce;
var produceWithPatches = immer.produceWithPatches.bind(
  immer
);
var setAutoFreeze = immer.setAutoFreeze.bind(immer);
var setUseStrictShallowCopy = immer.setUseStrictShallowCopy.bind(immer);
var applyPatches = immer.applyPatches.bind(immer);
var createDraft = immer.createDraft.bind(immer);
var finishDraft = immer.finishDraft.bind(immer);
function castDraft(value) {
  return value;
}
function castImmutable(value) {
  return value;
}

var runIdentityFunctionCheck = (resultFunc, inputSelectorsResults, outputSelectorResult) => {
  if (inputSelectorsResults.length === 1 && inputSelectorsResults[0] === outputSelectorResult) {
    let isInputSameAsOutput = false;
    try {
      const emptyObject = {};
      if (resultFunc(emptyObject) === emptyObject)
        isInputSameAsOutput = true;
    } catch {
    }
    if (isInputSameAsOutput) {
      let stack = void 0;
      try {
        throw new Error();
      } catch (e) {
        ;
        ({ stack } = e);
      }
      console.warn(
        "The result function returned its own inputs without modification. e.g\n`createSelector([state => state.todos], todos => todos)`\nThis could lead to inefficient memoization and unnecessary re-renders.\nEnsure transformation logic is in the result function, and extraction logic is in the input selectors.",
        { stack }
      );
    }
  }
};
var runInputStabilityCheck = (inputSelectorResultsObject, options, inputSelectorArgs) => {
  const { memoize, memoizeOptions } = options;
  const { inputSelectorResults, inputSelectorResultsCopy } = inputSelectorResultsObject;
  const createAnEmptyObject = memoize(() => ({}), ...memoizeOptions);
  const areInputSelectorResultsEqual = createAnEmptyObject.apply(null, inputSelectorResults) === createAnEmptyObject.apply(null, inputSelectorResultsCopy);
  if (!areInputSelectorResultsEqual) {
    let stack = void 0;
    try {
      throw new Error();
    } catch (e) {
      ;
      ({ stack } = e);
    }
    console.warn(
      "An input selector returned a different result when passed same arguments.\nThis means your output selector will likely run more frequently than intended.\nAvoid returning a new reference inside your input selector, e.g.\n`createSelector([state => state.todos.map(todo => todo.id)], todoIds => todoIds.length)`",
      {
        arguments: inputSelectorArgs,
        firstInputs: inputSelectorResults,
        secondInputs: inputSelectorResultsCopy,
        stack
      }
    );
  }
};
var globalDevModeChecks = {
  inputStabilityCheck: "once",
  identityFunctionCheck: "once"
};
var setGlobalDevModeChecks = (devModeChecks) => {
  Object.assign(globalDevModeChecks, devModeChecks);
};
var NOT_FOUND = /* @__PURE__ */ Symbol("NOT_FOUND");
function assertIsFunction(func, errorMessage = `expected a function, instead received ${typeof func}`) {
  if (typeof func !== "function") {
    throw new TypeError(errorMessage);
  }
}
function assertIsObject(object, errorMessage = `expected an object, instead received ${typeof object}`) {
  if (typeof object !== "object") {
    throw new TypeError(errorMessage);
  }
}
function assertIsArrayOfFunctions(array, errorMessage = `expected all items to be functions, instead received the following types: `) {
  if (!array.every((item) => typeof item === "function")) {
    const itemTypes = array.map(
      (item) => typeof item === "function" ? `function ${item.name || "unnamed"}()` : typeof item
    ).join(", ");
    throw new TypeError(`${errorMessage}[${itemTypes}]`);
  }
}
var ensureIsArray = (item) => {
  return Array.isArray(item) ? item : [item];
};
function getDependencies(createSelectorArgs) {
  const dependencies = Array.isArray(createSelectorArgs[0]) ? createSelectorArgs[0] : createSelectorArgs;
  assertIsArrayOfFunctions(
    dependencies,
    `createSelector expects all input-selectors to be functions, but received the following types: `
  );
  return dependencies;
}
function collectInputSelectorResults(dependencies, inputSelectorArgs) {
  const inputSelectorResults = [];
  const { length } = dependencies;
  for (let i = 0; i < length; i++) {
    inputSelectorResults.push(dependencies[i].apply(null, inputSelectorArgs));
  }
  return inputSelectorResults;
}
var getDevModeChecksExecutionInfo = (firstRun, devModeChecks) => {
  const { identityFunctionCheck, inputStabilityCheck } = {
    ...globalDevModeChecks,
    ...devModeChecks
  };
  return {
    identityFunctionCheck: {
      shouldRun: identityFunctionCheck === "always" || identityFunctionCheck === "once" && firstRun,
      run: runIdentityFunctionCheck
    },
    inputStabilityCheck: {
      shouldRun: inputStabilityCheck === "always" || inputStabilityCheck === "once" && firstRun,
      run: runInputStabilityCheck
    }
  };
};
var $REVISION = 0;
var CURRENT_TRACKER = null;
var Cell = class {
  revision = $REVISION;
  _value;
  _lastValue;
  _isEqual = tripleEq;
  constructor(initialValue, isEqual = tripleEq) {
    this._value = this._lastValue = initialValue;
    this._isEqual = isEqual;
  }
  // Whenever a storage value is read, it'll add itself to the current tracker if
  // one exists, entangling its state with that cache.
  get value() {
    CURRENT_TRACKER?.add(this);
    return this._value;
  }
  // Whenever a storage value is updated, we bump the global revision clock,
  // assign the revision for this storage to the new value, _and_ we schedule a
  // rerender. This is important, and it's what makes autotracking  _pull_
  // based. We don't actively tell the caches which depend on the storage that
  // anything has happened. Instead, we recompute the caches when needed.
  set value(newValue) {
    if (this.value === newValue)
      return;
    this._value = newValue;
    this.revision = ++$REVISION;
  }
};
function tripleEq(a, b) {
  return a === b;
}
var TrackingCache = class {
  _cachedValue;
  _cachedRevision = -1;
  _deps = [];
  hits = 0;
  fn;
  constructor(fn) {
    this.fn = fn;
  }
  clear() {
    this._cachedValue = void 0;
    this._cachedRevision = -1;
    this._deps = [];
    this.hits = 0;
  }
  get value() {
    if (this.revision > this._cachedRevision) {
      const { fn } = this;
      const currentTracker = /* @__PURE__ */ new Set();
      const prevTracker = CURRENT_TRACKER;
      CURRENT_TRACKER = currentTracker;
      this._cachedValue = fn();
      CURRENT_TRACKER = prevTracker;
      this.hits++;
      this._deps = Array.from(currentTracker);
      this._cachedRevision = this.revision;
    }
    CURRENT_TRACKER?.add(this);
    return this._cachedValue;
  }
  get revision() {
    return Math.max(...this._deps.map((d) => d.revision), 0);
  }
};
function getValue(cell) {
  if (!(cell instanceof Cell)) {
    console.warn("Not a valid cell! ", cell);
  }
  return cell.value;
}
function setValue(storage, value) {
  if (!(storage instanceof Cell)) {
    throw new TypeError(
      "setValue must be passed a tracked store created with `createStorage`."
    );
  }
  storage.value = storage._lastValue = value;
}
function createCell(initialValue, isEqual = tripleEq) {
  return new Cell(initialValue, isEqual);
}
function createCache(fn) {
  assertIsFunction(
    fn,
    "the first parameter to `createCache` must be a function"
  );
  return new TrackingCache(fn);
}
var neverEq = (a, b) => false;
function createTag() {
  return createCell(null, neverEq);
}
function dirtyTag(tag, value) {
  setValue(tag, value);
}
var consumeCollection = (node) => {
  let tag = node.collectionTag;
  if (tag === null) {
    tag = node.collectionTag = createTag();
  }
  getValue(tag);
};
var dirtyCollection = (node) => {
  const tag = node.collectionTag;
  if (tag !== null) {
    dirtyTag(tag, null);
  }
};
var REDUX_PROXY_LABEL = Symbol();
var nextId = 0;
var proto = Object.getPrototypeOf({});
var ObjectTreeNode = class {
  constructor(value) {
    this.value = value;
    this.value = value;
    this.tag.value = value;
  }
  proxy = new Proxy(this, objectProxyHandler);
  tag = createTag();
  tags = {};
  children = {};
  collectionTag = null;
  id = nextId++;
};
var objectProxyHandler = {
  get(node, key) {
    function calculateResult() {
      const { value } = node;
      const childValue = Reflect.get(value, key);
      if (typeof key === "symbol") {
        return childValue;
      }
      if (key in proto) {
        return childValue;
      }
      if (typeof childValue === "object" && childValue !== null) {
        let childNode = node.children[key];
        if (childNode === void 0) {
          childNode = node.children[key] = createNode(childValue);
        }
        if (childNode.tag) {
          getValue(childNode.tag);
        }
        return childNode.proxy;
      } else {
        let tag = node.tags[key];
        if (tag === void 0) {
          tag = node.tags[key] = createTag();
          tag.value = childValue;
        }
        getValue(tag);
        return childValue;
      }
    }
    const res = calculateResult();
    return res;
  },
  ownKeys(node) {
    consumeCollection(node);
    return Reflect.ownKeys(node.value);
  },
  getOwnPropertyDescriptor(node, prop) {
    return Reflect.getOwnPropertyDescriptor(node.value, prop);
  },
  has(node, prop) {
    return Reflect.has(node.value, prop);
  }
};
var ArrayTreeNode = class {
  constructor(value) {
    this.value = value;
    this.value = value;
    this.tag.value = value;
  }
  proxy = new Proxy([this], arrayProxyHandler);
  tag = createTag();
  tags = {};
  children = {};
  collectionTag = null;
  id = nextId++;
};
var arrayProxyHandler = {
  get([node], key) {
    if (key === "length") {
      consumeCollection(node);
    }
    return objectProxyHandler.get(node, key);
  },
  ownKeys([node]) {
    return objectProxyHandler.ownKeys(node);
  },
  getOwnPropertyDescriptor([node], prop) {
    return objectProxyHandler.getOwnPropertyDescriptor(node, prop);
  },
  has([node], prop) {
    return objectProxyHandler.has(node, prop);
  }
};
function createNode(value) {
  if (Array.isArray(value)) {
    return new ArrayTreeNode(value);
  }
  return new ObjectTreeNode(value);
}
function updateNode(node, newValue) {
  const { value, tags, children } = node;
  node.value = newValue;
  if (Array.isArray(value) && Array.isArray(newValue) && value.length !== newValue.length) {
    dirtyCollection(node);
  } else {
    if (value !== newValue) {
      let oldKeysSize = 0;
      let newKeysSize = 0;
      let anyKeysAdded = false;
      for (const _key in value) {
        oldKeysSize++;
      }
      for (const key in newValue) {
        newKeysSize++;
        if (!(key in value)) {
          anyKeysAdded = true;
          break;
        }
      }
      const isDifferent = anyKeysAdded || oldKeysSize !== newKeysSize;
      if (isDifferent) {
        dirtyCollection(node);
      }
    }
  }
  for (const key in tags) {
    const childValue = value[key];
    const newChildValue = newValue[key];
    if (childValue !== newChildValue) {
      dirtyCollection(node);
      dirtyTag(tags[key], newChildValue);
    }
    if (typeof newChildValue === "object" && newChildValue !== null) {
      delete tags[key];
    }
  }
  for (const key in children) {
    const childNode = children[key];
    const newChildValue = newValue[key];
    const childValue = childNode.value;
    if (childValue === newChildValue) {
      continue;
    } else if (typeof newChildValue === "object" && newChildValue !== null) {
      updateNode(childNode, newChildValue);
    } else {
      deleteNode(childNode);
      delete children[key];
    }
  }
}
function deleteNode(node) {
  if (node.tag) {
    dirtyTag(node.tag, null);
  }
  dirtyCollection(node);
  for (const key in node.tags) {
    dirtyTag(node.tags[key], null);
  }
  for (const key in node.children) {
    deleteNode(node.children[key]);
  }
}
function createSingletonCache(equals) {
  let entry;
  return {
    get(key) {
      if (entry && equals(entry.key, key)) {
        return entry.value;
      }
      return NOT_FOUND;
    },
    put(key, value) {
      entry = { key, value };
    },
    getEntries() {
      return entry ? [entry] : [];
    },
    clear() {
      entry = void 0;
    }
  };
}
function createLruCache(maxSize, equals) {
  let entries = [];
  function get(key) {
    const cacheIndex = entries.findIndex((entry) => equals(key, entry.key));
    if (cacheIndex > -1) {
      const entry = entries[cacheIndex];
      if (cacheIndex > 0) {
        entries.splice(cacheIndex, 1);
        entries.unshift(entry);
      }
      return entry.value;
    }
    return NOT_FOUND;
  }
  function put(key, value) {
    if (get(key) === NOT_FOUND) {
      entries.unshift({ key, value });
      if (entries.length > maxSize) {
        entries.pop();
      }
    }
  }
  function getEntries() {
    return entries;
  }
  function clear() {
    entries = [];
  }
  return { get, put, getEntries, clear };
}
var referenceEqualityCheck = (a, b) => a === b;
function createCacheKeyComparator(equalityCheck) {
  return function areArgumentsShallowlyEqual(prev, next) {
    if (prev === null || next === null || prev.length !== next.length) {
      return false;
    }
    const { length } = prev;
    for (let i = 0; i < length; i++) {
      if (!equalityCheck(prev[i], next[i])) {
        return false;
      }
    }
    return true;
  };
}
function lruMemoize(func, equalityCheckOrOptions) {
  const providedOptions = typeof equalityCheckOrOptions === "object" ? equalityCheckOrOptions : { equalityCheck: equalityCheckOrOptions };
  const {
    equalityCheck = referenceEqualityCheck,
    maxSize = 1,
    resultEqualityCheck
  } = providedOptions;
  const comparator = createCacheKeyComparator(equalityCheck);
  let resultsCount = 0;
  const cache = maxSize <= 1 ? createSingletonCache(comparator) : createLruCache(maxSize, comparator);
  function memoized() {
    let value = cache.get(arguments);
    if (value === NOT_FOUND) {
      value = func.apply(null, arguments);
      resultsCount++;
      if (resultEqualityCheck) {
        const entries = cache.getEntries();
        const matchingEntry = entries.find(
          (entry) => resultEqualityCheck(entry.value, value)
        );
        if (matchingEntry) {
          value = matchingEntry.value;
          resultsCount !== 0 && resultsCount--;
        }
      }
      cache.put(arguments, value);
    }
    return value;
  }
  memoized.clearCache = () => {
    cache.clear();
    memoized.resetResultsCount();
  };
  memoized.resultsCount = () => resultsCount;
  memoized.resetResultsCount = () => {
    resultsCount = 0;
  };
  return memoized;
}
function autotrackMemoize(func) {
  const node = createNode(
    []
  );
  let lastArgs = null;
  const shallowEqual = createCacheKeyComparator(referenceEqualityCheck);
  const cache = createCache(() => {
    const res = func.apply(null, node.proxy);
    return res;
  });
  function memoized() {
    if (!shallowEqual(lastArgs, arguments)) {
      updateNode(node, arguments);
      lastArgs = arguments;
    }
    return cache.value;
  }
  memoized.clearCache = () => {
    return cache.clear();
  };
  return memoized;
}
var StrongRef = class {
  constructor(value) {
    this.value = value;
  }
  deref() {
    return this.value;
  }
};
var Ref = typeof WeakRef !== "undefined" ? WeakRef : StrongRef;
var UNTERMINATED = 0;
var TERMINATED = 1;
function createCacheNode() {
  return {
    s: UNTERMINATED,
    v: void 0,
    o: null,
    p: null
  };
}
function weakMapMemoize(func, options = {}) {
  let fnNode = createCacheNode();
  const { resultEqualityCheck } = options;
  let lastResult;
  let resultsCount = 0;
  function memoized() {
    let cacheNode = fnNode;
    const { length } = arguments;
    for (let i = 0, l = length; i < l; i++) {
      const arg = arguments[i];
      if (typeof arg === "function" || typeof arg === "object" && arg !== null) {
        let objectCache = cacheNode.o;
        if (objectCache === null) {
          cacheNode.o = objectCache = /* @__PURE__ */ new WeakMap();
        }
        const objectNode = objectCache.get(arg);
        if (objectNode === void 0) {
          cacheNode = createCacheNode();
          objectCache.set(arg, cacheNode);
        } else {
          cacheNode = objectNode;
        }
      } else {
        let primitiveCache = cacheNode.p;
        if (primitiveCache === null) {
          cacheNode.p = primitiveCache = /* @__PURE__ */ new Map();
        }
        const primitiveNode = primitiveCache.get(arg);
        if (primitiveNode === void 0) {
          cacheNode = createCacheNode();
          primitiveCache.set(arg, cacheNode);
        } else {
          cacheNode = primitiveNode;
        }
      }
    }
    const terminatedNode = cacheNode;
    let result;
    if (cacheNode.s === TERMINATED) {
      result = cacheNode.v;
    } else {
      result = func.apply(null, arguments);
      resultsCount++;
      if (resultEqualityCheck) {
        const lastResultValue = lastResult?.deref?.() ?? lastResult;
        if (lastResultValue != null && resultEqualityCheck(lastResultValue, result)) {
          result = lastResultValue;
          resultsCount !== 0 && resultsCount--;
        }
        const needsWeakRef = typeof result === "object" && result !== null || typeof result === "function";
        lastResult = needsWeakRef ? new Ref(result) : result;
      }
    }
    terminatedNode.s = TERMINATED;
    terminatedNode.v = result;
    return result;
  }
  memoized.clearCache = () => {
    fnNode = createCacheNode();
    memoized.resetResultsCount();
  };
  memoized.resultsCount = () => resultsCount;
  memoized.resetResultsCount = () => {
    resultsCount = 0;
  };
  return memoized;
}
function createSelectorCreator(memoizeOrOptions, ...memoizeOptionsFromArgs) {
  const createSelectorCreatorOptions = typeof memoizeOrOptions === "function" ? {
    memoize: memoizeOrOptions,
    memoizeOptions: memoizeOptionsFromArgs
  } : memoizeOrOptions;
  const createSelector2 = (...createSelectorArgs) => {
    let recomputations = 0;
    let dependencyRecomputations = 0;
    let lastResult;
    let directlyPassedOptions = {};
    let resultFunc = createSelectorArgs.pop();
    if (typeof resultFunc === "object") {
      directlyPassedOptions = resultFunc;
      resultFunc = createSelectorArgs.pop();
    }
    assertIsFunction(
      resultFunc,
      `createSelector expects an output function after the inputs, but received: [${typeof resultFunc}]`
    );
    const combinedOptions = {
      ...createSelectorCreatorOptions,
      ...directlyPassedOptions
    };
    const {
      memoize,
      memoizeOptions = [],
      argsMemoize = weakMapMemoize,
      argsMemoizeOptions = [],
      devModeChecks = {}
    } = combinedOptions;
    const finalMemoizeOptions = ensureIsArray(memoizeOptions);
    const finalArgsMemoizeOptions = ensureIsArray(argsMemoizeOptions);
    const dependencies = getDependencies(createSelectorArgs);
    const memoizedResultFunc = memoize(function recomputationWrapper() {
      recomputations++;
      return resultFunc.apply(
        null,
        arguments
      );
    }, ...finalMemoizeOptions);
    let firstRun = true;
    const selector = argsMemoize(function dependenciesChecker() {
      dependencyRecomputations++;
      const inputSelectorResults = collectInputSelectorResults(
        dependencies,
        arguments
      );
      lastResult = memoizedResultFunc.apply(null, inputSelectorResults);
      if (false) {
        const { identityFunctionCheck, inputStabilityCheck } = getDevModeChecksExecutionInfo(firstRun, devModeChecks);
        if (identityFunctionCheck.shouldRun) {
          identityFunctionCheck.run(
            resultFunc,
            inputSelectorResults,
            lastResult
          );
        }
        if (inputStabilityCheck.shouldRun) {
          const inputSelectorResultsCopy = collectInputSelectorResults(
            dependencies,
            arguments
          );
          inputStabilityCheck.run(
            { inputSelectorResults, inputSelectorResultsCopy },
            { memoize, memoizeOptions: finalMemoizeOptions },
            arguments
          );
        }
        if (firstRun)
          firstRun = false;
      }
      return lastResult;
    }, ...finalArgsMemoizeOptions);
    return Object.assign(selector, {
      resultFunc,
      memoizedResultFunc,
      dependencies,
      dependencyRecomputations: () => dependencyRecomputations,
      resetDependencyRecomputations: () => {
        dependencyRecomputations = 0;
      },
      lastResult: () => lastResult,
      recomputations: () => recomputations,
      resetRecomputations: () => {
        recomputations = 0;
      },
      memoize,
      argsMemoize
    });
  };
  Object.assign(createSelector2, {
    withTypes: () => createSelector2
  });
  return createSelector2;
}
var createSelector = /* @__PURE__ */ createSelectorCreator(weakMapMemoize);
var createStructuredSelector = Object.assign(
  (inputSelectorsObject, selectorCreator = createSelector) => {
    assertIsObject(
      inputSelectorsObject,
      `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof inputSelectorsObject}`
    );
    const inputSelectorKeys = Object.keys(inputSelectorsObject);
    const dependencies = inputSelectorKeys.map(
      (key) => inputSelectorsObject[key]
    );
    const structuredSelector = selectorCreator(
      dependencies,
      (...inputSelectorResults) => {
        return inputSelectorResults.reduce((composition, value, index) => {
          composition[inputSelectorKeys[index]] = value;
          return composition;
        }, {});
      }
    );
    return structuredSelector;
  },
  { withTypes: () => createStructuredSelector }
);

// src/index.ts
function createThunkMiddleware(extraArgument) {
  const middleware = ({ dispatch, getState }) => (next) => (action) => {
    if (typeof action === "function") {
      return action(dispatch, getState, extraArgument);
    }
    return next(action);
  };
  return middleware;
}
var thunk = createThunkMiddleware();
var withExtraArgument = createThunkMiddleware;

var createDraftSafeSelectorCreator = (...args) => {
  const createSelector2 = createSelectorCreator(...args);
  const createDraftSafeSelector2 = Object.assign((...args2) => {
    const selector = createSelector2(...args2);
    const wrappedSelector = (value, ...rest) => selector(isDraft(value) ? current(value) : value, ...rest);
    Object.assign(wrappedSelector, selector);
    return wrappedSelector;
  }, {
    withTypes: () => createDraftSafeSelector2
  });
  return createDraftSafeSelector2;
};
var createDraftSafeSelector = /* @__PURE__ */ createDraftSafeSelectorCreator(weakMapMemoize);
var composeWithDevTools = typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
  if (arguments.length === 0) return void 0;
  if (typeof arguments[0] === "object") return compose;
  return compose.apply(null, arguments);
};
var devToolsEnhancer = typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__ : function() {
  return function(noop3) {
    return noop3;
  };
};
var hasMatchFunction = (v) => {
  return v && typeof v.match === "function";
};
function createAction(type, prepareAction) {
  function actionCreator(...args) {
    if (prepareAction) {
      let prepared = prepareAction(...args);
      if (!prepared) {
        throw new Error(true ? formatProdErrorMessage(0) : "prepareAction did not return an object");
      }
      return {
        type,
        payload: prepared.payload,
        ..."meta" in prepared && {
          meta: prepared.meta
        },
        ..."error" in prepared && {
          error: prepared.error
        }
      };
    }
    return {
      type,
      payload: args[0]
    };
  }
  actionCreator.toString = () => `${type}`;
  actionCreator.type = type;
  actionCreator.match = (action) => isAction(action) && action.type === type;
  return actionCreator;
}
function isActionCreator(action) {
  return typeof action === "function" && "type" in action && // hasMatchFunction only wants Matchers but I don't see the point in rewriting it
  hasMatchFunction(action);
}
function isFSA(action) {
  return isAction(action) && Object.keys(action).every(isValidKey);
}
function isValidKey(key) {
  return ["type", "payload", "error", "meta"].indexOf(key) > -1;
}
function getMessage(type) {
  const splitType = type ? `${type}`.split("/") : [];
  const actionName = splitType[splitType.length - 1] || "actionCreator";
  return `Detected an action creator with type "${type || "unknown"}" being dispatched. 
Make sure you're calling the action creator before dispatching, i.e. \`dispatch(${actionName}())\` instead of \`dispatch(${actionName})\`. This is necessary even if the action has no payload.`;
}
function createActionCreatorInvariantMiddleware(options = {}) {
  if (true) {
    return () => (next) => (action) => next(action);
  }
  const {
    isActionCreator: isActionCreator2 = isActionCreator
  } = options;
  return () => (next) => (action) => {
    if (isActionCreator2(action)) {
      console.warn(getMessage(action.type));
    }
    return next(action);
  };
}
function getTimeMeasureUtils(maxDelay, fnName) {
  let elapsed = 0;
  return {
    measureTime(fn) {
      const started = Date.now();
      try {
        return fn();
      } finally {
        const finished = Date.now();
        elapsed += finished - started;
      }
    },
    warnIfExceeded() {
      if (elapsed > maxDelay) {
        console.warn(`${fnName} took ${elapsed}ms, which is more than the warning threshold of ${maxDelay}ms. 
If your state or actions are very large, you may want to disable the middleware as it might cause too much of a slowdown in development mode. See https://redux-toolkit.js.org/api/getDefaultMiddleware for instructions.
It is disabled in production builds, so you don't need to worry about that.`);
      }
    }
  };
}
var Tuple = class _Tuple extends Array {
  constructor(...items) {
    super(...items);
    Object.setPrototypeOf(this, _Tuple.prototype);
  }
  static get [Symbol.species]() {
    return _Tuple;
  }
  concat(...arr) {
    return super.concat.apply(this, arr);
  }
  prepend(...arr) {
    if (arr.length === 1 && Array.isArray(arr[0])) {
      return new _Tuple(...arr[0].concat(this));
    }
    return new _Tuple(...arr.concat(this));
  }
};
function freezeDraftable(val) {
  return isDraftable(val) ? produce(val, () => {
  }) : val;
}
function getOrInsertComputed(map, key, compute) {
  if (map.has(key)) return map.get(key);
  return map.set(key, compute(key)).get(key);
}
function isImmutableDefault(value) {
  return typeof value !== "object" || value == null || Object.isFrozen(value);
}
function trackForMutations(isImmutable, ignorePaths, obj) {
  const trackedProperties = trackProperties(isImmutable, ignorePaths, obj);
  return {
    detectMutations() {
      return detectMutations(isImmutable, ignorePaths, trackedProperties, obj);
    }
  };
}
function trackProperties(isImmutable, ignorePaths = [], obj, path = "", checkedObjects = /* @__PURE__ */ new Set()) {
  const tracked = {
    value: obj
  };
  if (!isImmutable(obj) && !checkedObjects.has(obj)) {
    checkedObjects.add(obj);
    tracked.children = {};
    for (const key in obj) {
      const childPath = path ? path + "." + key : key;
      if (ignorePaths.length && ignorePaths.indexOf(childPath) !== -1) {
        continue;
      }
      tracked.children[key] = trackProperties(isImmutable, ignorePaths, obj[key], childPath);
    }
  }
  return tracked;
}
function detectMutations(isImmutable, ignoredPaths = [], trackedProperty, obj, sameParentRef = false, path = "") {
  const prevObj = trackedProperty ? trackedProperty.value : void 0;
  const sameRef = prevObj === obj;
  if (sameParentRef && !sameRef && !Number.isNaN(obj)) {
    return {
      wasMutated: true,
      path
    };
  }
  if (isImmutable(prevObj) || isImmutable(obj)) {
    return {
      wasMutated: false
    };
  }
  const keysToDetect = {};
  for (let key in trackedProperty.children) {
    keysToDetect[key] = true;
  }
  for (let key in obj) {
    keysToDetect[key] = true;
  }
  const hasIgnoredPaths = ignoredPaths.length > 0;
  for (let key in keysToDetect) {
    const nestedPath = path ? path + "." + key : key;
    if (hasIgnoredPaths) {
      const hasMatches = ignoredPaths.some((ignored) => {
        if (ignored instanceof RegExp) {
          return ignored.test(nestedPath);
        }
        return nestedPath === ignored;
      });
      if (hasMatches) {
        continue;
      }
    }
    const result = detectMutations(isImmutable, ignoredPaths, trackedProperty.children[key], obj[key], sameRef, nestedPath);
    if (result.wasMutated) {
      return result;
    }
  }
  return {
    wasMutated: false
  };
}
function createImmutableStateInvariantMiddleware(options = {}) {
  if (true) {
    return () => (next) => (action) => next(action);
  } else {
    let stringify2 = function(obj, serializer, indent, decycler) {
      return JSON.stringify(obj, getSerialize2(serializer, decycler), indent);
    }, getSerialize2 = function(serializer, decycler) {
      let stack = [], keys = [];
      if (!decycler) decycler = function(_, value) {
        if (stack[0] === value) return "[Circular ~]";
        return "[Circular ~." + keys.slice(0, stack.indexOf(value)).join(".") + "]";
      };
      return function(key, value) {
        if (stack.length > 0) {
          var thisPos = stack.indexOf(this);
          ~thisPos ? stack.splice(thisPos + 1) : stack.push(this);
          ~thisPos ? keys.splice(thisPos, Infinity, key) : keys.push(key);
          if (~stack.indexOf(value)) value = decycler.call(this, key, value);
        } else stack.push(value);
        return serializer == null ? value : serializer.call(this, key, value);
      };
    };
    var stringify = stringify2, getSerialize = getSerialize2;
    let {
      isImmutable = isImmutableDefault,
      ignoredPaths,
      warnAfter = 32
    } = options;
    const track = trackForMutations.bind(null, isImmutable, ignoredPaths);
    return ({
      getState
    }) => {
      let state = getState();
      let tracker = track(state);
      let result;
      return (next) => (action) => {
        const measureUtils = getTimeMeasureUtils(warnAfter, "ImmutableStateInvariantMiddleware");
        measureUtils.measureTime(() => {
          state = getState();
          result = tracker.detectMutations();
          tracker = track(state);
          if (result.wasMutated) {
            throw new Error(true ? formatProdErrorMessage(19) : `A state mutation was detected between dispatches, in the path '${result.path || ""}'.  This may cause incorrect behavior. (https://redux.js.org/style-guide/style-guide#do-not-mutate-state)`);
          }
        });
        const dispatchedAction = next(action);
        measureUtils.measureTime(() => {
          state = getState();
          result = tracker.detectMutations();
          tracker = track(state);
          if (result.wasMutated) {
            throw new Error(true ? formatProdErrorMessage(20) : `A state mutation was detected inside a dispatch, in the path: ${result.path || ""}. Take a look at the reducer(s) handling the action ${stringify2(action)}. (https://redux.js.org/style-guide/style-guide#do-not-mutate-state)`);
          }
        });
        measureUtils.warnIfExceeded();
        return dispatchedAction;
      };
    };
  }
}
function isPlain(val) {
  const type = typeof val;
  return val == null || type === "string" || type === "boolean" || type === "number" || Array.isArray(val) || isPlainObject$2(val);
}
function findNonSerializableValue(value, path = "", isSerializable = isPlain, getEntries, ignoredPaths = [], cache) {
  let foundNestedSerializable;
  if (!isSerializable(value)) {
    return {
      keyPath: path || "<root>",
      value
    };
  }
  if (typeof value !== "object" || value === null) {
    return false;
  }
  if (cache?.has(value)) return false;
  const entries = getEntries != null ? getEntries(value) : Object.entries(value);
  const hasIgnoredPaths = ignoredPaths.length > 0;
  for (const [key, nestedValue] of entries) {
    const nestedPath = path ? path + "." + key : key;
    if (hasIgnoredPaths) {
      const hasMatches = ignoredPaths.some((ignored) => {
        if (ignored instanceof RegExp) {
          return ignored.test(nestedPath);
        }
        return nestedPath === ignored;
      });
      if (hasMatches) {
        continue;
      }
    }
    if (!isSerializable(nestedValue)) {
      return {
        keyPath: nestedPath,
        value: nestedValue
      };
    }
    if (typeof nestedValue === "object") {
      foundNestedSerializable = findNonSerializableValue(nestedValue, nestedPath, isSerializable, getEntries, ignoredPaths, cache);
      if (foundNestedSerializable) {
        return foundNestedSerializable;
      }
    }
  }
  if (cache && isNestedFrozen(value)) cache.add(value);
  return false;
}
function isNestedFrozen(value) {
  if (!Object.isFrozen(value)) return false;
  for (const nestedValue of Object.values(value)) {
    if (typeof nestedValue !== "object" || nestedValue === null) continue;
    if (!isNestedFrozen(nestedValue)) return false;
  }
  return true;
}
function createSerializableStateInvariantMiddleware(options = {}) {
  if (true) {
    return () => (next) => (action) => next(action);
  } else {
    const {
      isSerializable = isPlain,
      getEntries,
      ignoredActions = [],
      ignoredActionPaths = ["meta.arg", "meta.baseQueryMeta"],
      ignoredPaths = [],
      warnAfter = 32,
      ignoreState = false,
      ignoreActions = false,
      disableCache = false
    } = options;
    const cache = !disableCache && WeakSet ? /* @__PURE__ */ new WeakSet() : void 0;
    return (storeAPI) => (next) => (action) => {
      if (!isAction(action)) {
        return next(action);
      }
      const result = next(action);
      const measureUtils = getTimeMeasureUtils(warnAfter, "SerializableStateInvariantMiddleware");
      if (!ignoreActions && !(ignoredActions.length && ignoredActions.indexOf(action.type) !== -1)) {
        measureUtils.measureTime(() => {
          const foundActionNonSerializableValue = findNonSerializableValue(action, "", isSerializable, getEntries, ignoredActionPaths, cache);
          if (foundActionNonSerializableValue) {
            const {
              keyPath,
              value
            } = foundActionNonSerializableValue;
            console.error(`A non-serializable value was detected in an action, in the path: \`${keyPath}\`. Value:`, value, "\nTake a look at the logic that dispatched this action: ", action, "\n(See https://redux.js.org/faq/actions#why-should-type-be-a-string-or-at-least-serializable-why-should-my-action-types-be-constants)", "\n(To allow non-serializable values see: https://redux-toolkit.js.org/usage/usage-guide#working-with-non-serializable-data)");
          }
        });
      }
      if (!ignoreState) {
        measureUtils.measureTime(() => {
          const state = storeAPI.getState();
          const foundStateNonSerializableValue = findNonSerializableValue(state, "", isSerializable, getEntries, ignoredPaths, cache);
          if (foundStateNonSerializableValue) {
            const {
              keyPath,
              value
            } = foundStateNonSerializableValue;
            console.error(`A non-serializable value was detected in the state, in the path: \`${keyPath}\`. Value:`, value, `
Take a look at the reducer(s) handling this action type: ${action.type}.
(See https://redux.js.org/faq/organizing-state#can-i-put-functions-promises-or-other-non-serializable-items-in-my-store-state)`);
          }
        });
        measureUtils.warnIfExceeded();
      }
      return result;
    };
  }
}
function isBoolean$2(x) {
  return typeof x === "boolean";
}
var buildGetDefaultMiddleware = () => function getDefaultMiddleware(options) {
  const {
    thunk: thunk$1 = true,
    immutableCheck = true,
    serializableCheck = true,
    actionCreatorCheck = true
  } = options ?? {};
  let middlewareArray = new Tuple();
  if (thunk$1) {
    if (isBoolean$2(thunk$1)) {
      middlewareArray.push(thunk);
    } else {
      middlewareArray.push(withExtraArgument(thunk$1.extraArgument));
    }
  }
  if (false) {
    if (immutableCheck) {
      let immutableOptions = {};
      if (!isBoolean$2(immutableCheck)) {
        immutableOptions = immutableCheck;
      }
      middlewareArray.unshift(createImmutableStateInvariantMiddleware(immutableOptions));
    }
    if (serializableCheck) {
      let serializableOptions = {};
      if (!isBoolean$2(serializableCheck)) {
        serializableOptions = serializableCheck;
      }
      middlewareArray.push(createSerializableStateInvariantMiddleware(serializableOptions));
    }
    if (actionCreatorCheck) {
      let actionCreatorOptions = {};
      if (!isBoolean$2(actionCreatorCheck)) {
        actionCreatorOptions = actionCreatorCheck;
      }
      middlewareArray.unshift(createActionCreatorInvariantMiddleware(actionCreatorOptions));
    }
  }
  return middlewareArray;
};
var SHOULD_AUTOBATCH = "RTK_autoBatch";
var prepareAutoBatched = () => (payload) => ({
  payload,
  meta: {
    [SHOULD_AUTOBATCH]: true
  }
});
var createQueueWithTimer = (timeout) => {
  return (notify) => {
    setTimeout(notify, timeout);
  };
};
var autoBatchEnhancer = (options = {
  type: "raf"
}) => (next) => (...args) => {
  const store = next(...args);
  let notifying = true;
  let shouldNotifyAtEndOfTick = false;
  let notificationQueued = false;
  const listeners = /* @__PURE__ */ new Set();
  const queueCallback = options.type === "tick" ? queueMicrotask : options.type === "raf" ? (
    // requestAnimationFrame won't exist in SSR environments. Fall back to a vague approximation just to keep from erroring.
    typeof window !== "undefined" && window.requestAnimationFrame ? window.requestAnimationFrame : createQueueWithTimer(10)
  ) : options.type === "callback" ? options.queueNotification : createQueueWithTimer(options.timeout);
  const notifyListeners = () => {
    notificationQueued = false;
    if (shouldNotifyAtEndOfTick) {
      shouldNotifyAtEndOfTick = false;
      listeners.forEach((l) => l());
    }
  };
  return Object.assign({}, store, {
    // Override the base `store.subscribe` method to keep original listeners
    // from running if we're delaying notifications
    subscribe(listener2) {
      const wrappedListener = () => notifying && listener2();
      const unsubscribe = store.subscribe(wrappedListener);
      listeners.add(listener2);
      return () => {
        unsubscribe();
        listeners.delete(listener2);
      };
    },
    // Override the base `store.dispatch` method so that we can check actions
    // for the `shouldAutoBatch` flag and determine if batching is active
    dispatch(action) {
      try {
        notifying = !action?.meta?.[SHOULD_AUTOBATCH];
        shouldNotifyAtEndOfTick = !notifying;
        if (shouldNotifyAtEndOfTick) {
          if (!notificationQueued) {
            notificationQueued = true;
            queueCallback(notifyListeners);
          }
        }
        return store.dispatch(action);
      } finally {
        notifying = true;
      }
    }
  });
};
var buildGetDefaultEnhancers = (middlewareEnhancer) => function getDefaultEnhancers(options) {
  const {
    autoBatch = true
  } = options ?? {};
  let enhancerArray = new Tuple(middlewareEnhancer);
  if (autoBatch) {
    enhancerArray.push(autoBatchEnhancer(typeof autoBatch === "object" ? autoBatch : void 0));
  }
  return enhancerArray;
};
function configureStore(options) {
  const getDefaultMiddleware = buildGetDefaultMiddleware();
  const {
    reducer = void 0,
    middleware,
    devTools = true,
    duplicateMiddlewareCheck = true,
    preloadedState = void 0,
    enhancers = void 0
  } = options || {};
  let rootReducer;
  if (typeof reducer === "function") {
    rootReducer = reducer;
  } else if (isPlainObject$2(reducer)) {
    rootReducer = combineReducers(reducer);
  } else {
    throw new Error(true ? formatProdErrorMessage(1) : "`reducer` is a required argument, and must be a function or an object of functions that can be passed to combineReducers");
  }
  if (false) {
    throw new Error(true ? formatProdErrorMessage(2) : "`middleware` field must be a callback");
  }
  let finalMiddleware;
  if (typeof middleware === "function") {
    finalMiddleware = middleware(getDefaultMiddleware);
    if (false) {
      throw new Error(true ? formatProdErrorMessage(3) : "when using a middleware builder function, an array of middleware must be returned");
    }
  } else {
    finalMiddleware = getDefaultMiddleware();
  }
  if (false) {
    throw new Error(true ? formatProdErrorMessage(4) : "each middleware provided to configureStore must be a function");
  }
  if (false) {
    let middlewareReferences = /* @__PURE__ */ new Set();
    finalMiddleware.forEach((middleware2) => {
      if (middlewareReferences.has(middleware2)) {
        throw new Error(true ? formatProdErrorMessage(42) : "Duplicate middleware references found when creating the store. Ensure that each middleware is only included once.");
      }
      middlewareReferences.add(middleware2);
    });
  }
  let finalCompose = compose;
  if (devTools) {
    finalCompose = composeWithDevTools({
      // Enable capture of stack traces for dispatched Redux actions
      trace: false,
      ...typeof devTools === "object" && devTools
    });
  }
  const middlewareEnhancer = applyMiddleware(...finalMiddleware);
  const getDefaultEnhancers = buildGetDefaultEnhancers(middlewareEnhancer);
  if (false) {
    throw new Error(true ? formatProdErrorMessage(5) : "`enhancers` field must be a callback");
  }
  let storeEnhancers = typeof enhancers === "function" ? enhancers(getDefaultEnhancers) : getDefaultEnhancers();
  if (false) {
    throw new Error(true ? formatProdErrorMessage(6) : "`enhancers` callback must return an array");
  }
  if (false) {
    throw new Error(true ? formatProdErrorMessage(7) : "each enhancer provided to configureStore must be a function");
  }
  if (false) {
    console.error("middlewares were provided, but middleware enhancer was not included in final enhancers - make sure to call `getDefaultEnhancers`");
  }
  const composedEnhancer = finalCompose(...storeEnhancers);
  return createStore(rootReducer, preloadedState, composedEnhancer);
}
function executeReducerBuilderCallback(builderCallback) {
  const actionsMap = {};
  const actionMatchers = [];
  let defaultCaseReducer;
  const builder = {
    addCase(typeOrActionCreator, reducer) {
      if (false) {
        if (actionMatchers.length > 0) {
          throw new Error(true ? formatProdErrorMessage(26) : "`builder.addCase` should only be called before calling `builder.addMatcher`");
        }
        if (defaultCaseReducer) {
          throw new Error(true ? formatProdErrorMessage(27) : "`builder.addCase` should only be called before calling `builder.addDefaultCase`");
        }
      }
      const type = typeof typeOrActionCreator === "string" ? typeOrActionCreator : typeOrActionCreator.type;
      if (!type) {
        throw new Error(true ? formatProdErrorMessage(28) : "`builder.addCase` cannot be called with an empty action type");
      }
      if (type in actionsMap) {
        throw new Error(true ? formatProdErrorMessage(29) : `\`builder.addCase\` cannot be called with two reducers for the same action type '${type}'`);
      }
      actionsMap[type] = reducer;
      return builder;
    },
    addMatcher(matcher, reducer) {
      if (false) {
        if (defaultCaseReducer) {
          throw new Error(true ? formatProdErrorMessage(30) : "`builder.addMatcher` should only be called before calling `builder.addDefaultCase`");
        }
      }
      actionMatchers.push({
        matcher,
        reducer
      });
      return builder;
    },
    addDefaultCase(reducer) {
      if (false) {
        if (defaultCaseReducer) {
          throw new Error(true ? formatProdErrorMessage(31) : "`builder.addDefaultCase` can only be called once");
        }
      }
      defaultCaseReducer = reducer;
      return builder;
    }
  };
  builderCallback(builder);
  return [actionsMap, actionMatchers, defaultCaseReducer];
}
function isStateFunction(x) {
  return typeof x === "function";
}
function createReducer(initialState, mapOrBuilderCallback) {
  if (false) {
    if (typeof mapOrBuilderCallback === "object") {
      throw new Error(true ? formatProdErrorMessage(8) : "The object notation for `createReducer` has been removed. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createReducer");
    }
  }
  let [actionsMap, finalActionMatchers, finalDefaultCaseReducer] = executeReducerBuilderCallback(mapOrBuilderCallback);
  let getInitialState;
  if (isStateFunction(initialState)) {
    getInitialState = () => freezeDraftable(initialState());
  } else {
    const frozenInitialState = freezeDraftable(initialState);
    getInitialState = () => frozenInitialState;
  }
  function reducer(state = getInitialState(), action) {
    let caseReducers = [actionsMap[action.type], ...finalActionMatchers.filter(({
      matcher
    }) => matcher(action)).map(({
      reducer: reducer2
    }) => reducer2)];
    if (caseReducers.filter((cr) => !!cr).length === 0) {
      caseReducers = [finalDefaultCaseReducer];
    }
    return caseReducers.reduce((previousState, caseReducer) => {
      if (caseReducer) {
        if (isDraft(previousState)) {
          const draft = previousState;
          const result = caseReducer(draft, action);
          if (result === void 0) {
            return previousState;
          }
          return result;
        } else if (!isDraftable(previousState)) {
          const result = caseReducer(previousState, action);
          if (result === void 0) {
            if (previousState === null) {
              return previousState;
            }
            throw Error("A case reducer on a non-draftable value must not return undefined");
          }
          return result;
        } else {
          return produce(previousState, (draft) => {
            return caseReducer(draft, action);
          });
        }
      }
      return previousState;
    }, state);
  }
  reducer.getInitialState = getInitialState;
  return reducer;
}
var matches = (matcher, action) => {
  if (hasMatchFunction(matcher)) {
    return matcher.match(action);
  } else {
    return matcher(action);
  }
};
function isAnyOf(...matchers) {
  return (action) => {
    return matchers.some((matcher) => matches(matcher, action));
  };
}
function isAllOf(...matchers) {
  return (action) => {
    return matchers.every((matcher) => matches(matcher, action));
  };
}
function hasExpectedRequestMetadata(action, validStatus) {
  if (!action || !action.meta) return false;
  const hasValidRequestId = typeof action.meta.requestId === "string";
  const hasValidRequestStatus = validStatus.indexOf(action.meta.requestStatus) > -1;
  return hasValidRequestId && hasValidRequestStatus;
}
function isAsyncThunkArray(a) {
  return typeof a[0] === "function" && "pending" in a[0] && "fulfilled" in a[0] && "rejected" in a[0];
}
function isPending(...asyncThunks) {
  if (asyncThunks.length === 0) {
    return (action) => hasExpectedRequestMetadata(action, ["pending"]);
  }
  if (!isAsyncThunkArray(asyncThunks)) {
    return isPending()(asyncThunks[0]);
  }
  return isAnyOf(...asyncThunks.map((asyncThunk) => asyncThunk.pending));
}
function isRejected(...asyncThunks) {
  if (asyncThunks.length === 0) {
    return (action) => hasExpectedRequestMetadata(action, ["rejected"]);
  }
  if (!isAsyncThunkArray(asyncThunks)) {
    return isRejected()(asyncThunks[0]);
  }
  return isAnyOf(...asyncThunks.map((asyncThunk) => asyncThunk.rejected));
}
function isRejectedWithValue(...asyncThunks) {
  const hasFlag = (action) => {
    return action && action.meta && action.meta.rejectedWithValue;
  };
  if (asyncThunks.length === 0) {
    return isAllOf(isRejected(...asyncThunks), hasFlag);
  }
  if (!isAsyncThunkArray(asyncThunks)) {
    return isRejectedWithValue()(asyncThunks[0]);
  }
  return isAllOf(isRejected(...asyncThunks), hasFlag);
}
function isFulfilled(...asyncThunks) {
  if (asyncThunks.length === 0) {
    return (action) => hasExpectedRequestMetadata(action, ["fulfilled"]);
  }
  if (!isAsyncThunkArray(asyncThunks)) {
    return isFulfilled()(asyncThunks[0]);
  }
  return isAnyOf(...asyncThunks.map((asyncThunk) => asyncThunk.fulfilled));
}
function isAsyncThunkAction(...asyncThunks) {
  if (asyncThunks.length === 0) {
    return (action) => hasExpectedRequestMetadata(action, ["pending", "fulfilled", "rejected"]);
  }
  if (!isAsyncThunkArray(asyncThunks)) {
    return isAsyncThunkAction()(asyncThunks[0]);
  }
  return isAnyOf(...asyncThunks.flatMap((asyncThunk) => [asyncThunk.pending, asyncThunk.rejected, asyncThunk.fulfilled]));
}
var urlAlphabet = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW";
var nanoid = (size = 21) => {
  let id = "";
  let i = size;
  while (i--) {
    id += urlAlphabet[Math.random() * 64 | 0];
  }
  return id;
};
var commonProperties = ["name", "message", "stack", "code"];
var RejectWithValue = class {
  constructor(payload, meta) {
    this.payload = payload;
    this.meta = meta;
  }
  /*
  type-only property to distinguish between RejectWithValue and FulfillWithMeta
  does not exist at runtime
  */
  _type;
};
var FulfillWithMeta = class {
  constructor(payload, meta) {
    this.payload = payload;
    this.meta = meta;
  }
  /*
  type-only property to distinguish between RejectWithValue and FulfillWithMeta
  does not exist at runtime
  */
  _type;
};
var miniSerializeError = (value) => {
  if (typeof value === "object" && value !== null) {
    const simpleError = {};
    for (const property of commonProperties) {
      if (typeof value[property] === "string") {
        simpleError[property] = value[property];
      }
    }
    return simpleError;
  }
  return {
    message: String(value)
  };
};
var externalAbortMessage = "External signal was aborted";
var createAsyncThunk = /* @__PURE__ */ (() => {
  function createAsyncThunk2(typePrefix, payloadCreator, options) {
    const fulfilled = createAction(typePrefix + "/fulfilled", (payload, requestId, arg, meta) => ({
      payload,
      meta: {
        ...meta || {},
        arg,
        requestId,
        requestStatus: "fulfilled"
      }
    }));
    const pending = createAction(typePrefix + "/pending", (requestId, arg, meta) => ({
      payload: void 0,
      meta: {
        ...meta || {},
        arg,
        requestId,
        requestStatus: "pending"
      }
    }));
    const rejected = createAction(typePrefix + "/rejected", (error, requestId, arg, payload, meta) => ({
      payload,
      error: (options && options.serializeError || miniSerializeError)(error || "Rejected"),
      meta: {
        ...meta || {},
        arg,
        requestId,
        rejectedWithValue: !!payload,
        requestStatus: "rejected",
        aborted: error?.name === "AbortError",
        condition: error?.name === "ConditionError"
      }
    }));
    function actionCreator(arg, {
      signal
    } = {}) {
      return (dispatch, getState, extra) => {
        const requestId = options?.idGenerator ? options.idGenerator(arg) : nanoid();
        const abortController = new AbortController();
        let abortHandler;
        let abortReason;
        function abort(reason) {
          abortReason = reason;
          abortController.abort();
        }
        if (signal) {
          if (signal.aborted) {
            abort(externalAbortMessage);
          } else {
            signal.addEventListener("abort", () => abort(externalAbortMessage), {
              once: true
            });
          }
        }
        const promise = async function() {
          let finalAction;
          try {
            let conditionResult = options?.condition?.(arg, {
              getState,
              extra
            });
            if (isThenable$1(conditionResult)) {
              conditionResult = await conditionResult;
            }
            if (conditionResult === false || abortController.signal.aborted) {
              throw {
                name: "ConditionError",
                message: "Aborted due to condition callback returning false."
              };
            }
            const abortedPromise = new Promise((_, reject) => {
              abortHandler = () => {
                reject({
                  name: "AbortError",
                  message: abortReason || "Aborted"
                });
              };
              abortController.signal.addEventListener("abort", abortHandler);
            });
            dispatch(pending(requestId, arg, options?.getPendingMeta?.({
              requestId,
              arg
            }, {
              getState,
              extra
            })));
            finalAction = await Promise.race([abortedPromise, Promise.resolve(payloadCreator(arg, {
              dispatch,
              getState,
              extra,
              requestId,
              signal: abortController.signal,
              abort,
              rejectWithValue: (value, meta) => {
                return new RejectWithValue(value, meta);
              },
              fulfillWithValue: (value, meta) => {
                return new FulfillWithMeta(value, meta);
              }
            })).then((result) => {
              if (result instanceof RejectWithValue) {
                throw result;
              }
              if (result instanceof FulfillWithMeta) {
                return fulfilled(result.payload, requestId, arg, result.meta);
              }
              return fulfilled(result, requestId, arg);
            })]);
          } catch (err) {
            finalAction = err instanceof RejectWithValue ? rejected(null, requestId, arg, err.payload, err.meta) : rejected(err, requestId, arg);
          } finally {
            if (abortHandler) {
              abortController.signal.removeEventListener("abort", abortHandler);
            }
          }
          const skipDispatch = options && !options.dispatchConditionRejection && rejected.match(finalAction) && finalAction.meta.condition;
          if (!skipDispatch) {
            dispatch(finalAction);
          }
          return finalAction;
        }();
        return Object.assign(promise, {
          abort,
          requestId,
          arg,
          unwrap() {
            return promise.then(unwrapResult);
          }
        });
      };
    }
    return Object.assign(actionCreator, {
      pending,
      rejected,
      fulfilled,
      settled: isAnyOf(rejected, fulfilled),
      typePrefix
    });
  }
  createAsyncThunk2.withTypes = () => createAsyncThunk2;
  return createAsyncThunk2;
})();
function unwrapResult(action) {
  if (action.meta && action.meta.rejectedWithValue) {
    throw action.payload;
  }
  if (action.error) {
    throw action.error;
  }
  return action.payload;
}
function isThenable$1(value) {
  return value !== null && typeof value === "object" && typeof value.then === "function";
}
var asyncThunkSymbol = /* @__PURE__ */ Symbol.for("rtk-slice-createasyncthunk");
var asyncThunkCreator = {
  [asyncThunkSymbol]: createAsyncThunk
};
var ReducerType = /* @__PURE__ */ ((ReducerType2) => {
  ReducerType2["reducer"] = "reducer";
  ReducerType2["reducerWithPrepare"] = "reducerWithPrepare";
  ReducerType2["asyncThunk"] = "asyncThunk";
  return ReducerType2;
})(ReducerType || {});
function getType(slice, actionKey) {
  return `${slice}/${actionKey}`;
}
function buildCreateSlice({
  creators
} = {}) {
  const cAT = creators?.asyncThunk?.[asyncThunkSymbol];
  return function createSlice2(options) {
    const {
      name,
      reducerPath = name
    } = options;
    if (!name) {
      throw new Error(true ? formatProdErrorMessage(11) : "`name` is a required option for createSlice");
    }
    if (typeof process !== "undefined" && false) {
      if (options.initialState === void 0) {
        console.error("You must provide an `initialState` value that is not `undefined`. You may have misspelled `initialState`");
      }
    }
    const reducers = (typeof options.reducers === "function" ? options.reducers(buildReducerCreators()) : options.reducers) || {};
    const reducerNames = Object.keys(reducers);
    const context = {
      sliceCaseReducersByName: {},
      sliceCaseReducersByType: {},
      actionCreators: {},
      sliceMatchers: []
    };
    const contextMethods = {
      addCase(typeOrActionCreator, reducer2) {
        const type = typeof typeOrActionCreator === "string" ? typeOrActionCreator : typeOrActionCreator.type;
        if (!type) {
          throw new Error(true ? formatProdErrorMessage(12) : "`context.addCase` cannot be called with an empty action type");
        }
        if (type in context.sliceCaseReducersByType) {
          throw new Error(true ? formatProdErrorMessage(13) : "`context.addCase` cannot be called with two reducers for the same action type: " + type);
        }
        context.sliceCaseReducersByType[type] = reducer2;
        return contextMethods;
      },
      addMatcher(matcher, reducer2) {
        context.sliceMatchers.push({
          matcher,
          reducer: reducer2
        });
        return contextMethods;
      },
      exposeAction(name2, actionCreator) {
        context.actionCreators[name2] = actionCreator;
        return contextMethods;
      },
      exposeCaseReducer(name2, reducer2) {
        context.sliceCaseReducersByName[name2] = reducer2;
        return contextMethods;
      }
    };
    reducerNames.forEach((reducerName) => {
      const reducerDefinition = reducers[reducerName];
      const reducerDetails = {
        reducerName,
        type: getType(name, reducerName),
        createNotation: typeof options.reducers === "function"
      };
      if (isAsyncThunkSliceReducerDefinition(reducerDefinition)) {
        handleThunkCaseReducerDefinition(reducerDetails, reducerDefinition, contextMethods, cAT);
      } else {
        handleNormalReducerDefinition(reducerDetails, reducerDefinition, contextMethods);
      }
    });
    function buildReducer() {
      if (false) {
        if (typeof options.extraReducers === "object") {
          throw new Error(true ? formatProdErrorMessage(14) : "The object notation for `createSlice.extraReducers` has been removed. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createSlice");
        }
      }
      const [extraReducers = {}, actionMatchers = [], defaultCaseReducer = void 0] = typeof options.extraReducers === "function" ? executeReducerBuilderCallback(options.extraReducers) : [options.extraReducers];
      const finalCaseReducers = {
        ...extraReducers,
        ...context.sliceCaseReducersByType
      };
      return createReducer(options.initialState, (builder) => {
        for (let key in finalCaseReducers) {
          builder.addCase(key, finalCaseReducers[key]);
        }
        for (let sM of context.sliceMatchers) {
          builder.addMatcher(sM.matcher, sM.reducer);
        }
        for (let m of actionMatchers) {
          builder.addMatcher(m.matcher, m.reducer);
        }
        if (defaultCaseReducer) {
          builder.addDefaultCase(defaultCaseReducer);
        }
      });
    }
    const selectSelf = (state) => state;
    const injectedSelectorCache = /* @__PURE__ */ new Map();
    const injectedStateCache = /* @__PURE__ */ new WeakMap();
    let _reducer;
    function reducer(state, action) {
      if (!_reducer) _reducer = buildReducer();
      return _reducer(state, action);
    }
    function getInitialState() {
      if (!_reducer) _reducer = buildReducer();
      return _reducer.getInitialState();
    }
    function makeSelectorProps(reducerPath2, injected = false) {
      function selectSlice(state) {
        let sliceState = state[reducerPath2];
        if (typeof sliceState === "undefined") {
          if (injected) {
            sliceState = getOrInsertComputed(injectedStateCache, selectSlice, getInitialState);
          } else if (false) {
            throw new Error(true ? formatProdErrorMessage(15) : "selectSlice returned undefined for an uninjected slice reducer");
          }
        }
        return sliceState;
      }
      function getSelectors(selectState = selectSelf) {
        const selectorCache = getOrInsertComputed(injectedSelectorCache, injected, () => /* @__PURE__ */ new WeakMap());
        return getOrInsertComputed(selectorCache, selectState, () => {
          const map = {};
          for (const [name2, selector] of Object.entries(options.selectors ?? {})) {
            map[name2] = wrapSelector(selector, selectState, () => getOrInsertComputed(injectedStateCache, selectState, getInitialState), injected);
          }
          return map;
        });
      }
      return {
        reducerPath: reducerPath2,
        getSelectors,
        get selectors() {
          return getSelectors(selectSlice);
        },
        selectSlice
      };
    }
    const slice = {
      name,
      reducer,
      actions: context.actionCreators,
      caseReducers: context.sliceCaseReducersByName,
      getInitialState,
      ...makeSelectorProps(reducerPath),
      injectInto(injectable, {
        reducerPath: pathOpt,
        ...config
      } = {}) {
        const newReducerPath = pathOpt ?? reducerPath;
        injectable.inject({
          reducerPath: newReducerPath,
          reducer
        }, config);
        return {
          ...slice,
          ...makeSelectorProps(newReducerPath, true)
        };
      }
    };
    return slice;
  };
}
function wrapSelector(selector, selectState, getInitialState, injected) {
  function wrapper(rootState, ...args) {
    let sliceState = selectState(rootState);
    if (typeof sliceState === "undefined") {
      if (injected) {
        sliceState = getInitialState();
      } else if (false) {
        throw new Error(true ? formatProdErrorMessage(16) : "selectState returned undefined for an uninjected slice reducer");
      }
    }
    return selector(sliceState, ...args);
  }
  wrapper.unwrapped = selector;
  return wrapper;
}
var createSlice = /* @__PURE__ */ buildCreateSlice();
function buildReducerCreators() {
  function asyncThunk(payloadCreator, config) {
    return {
      _reducerDefinitionType: "asyncThunk",
      payloadCreator,
      ...config
    };
  }
  asyncThunk.withTypes = () => asyncThunk;
  return {
    reducer(caseReducer) {
      return Object.assign({
        // hack so the wrapping function has the same name as the original
        // we need to create a wrapper so the `reducerDefinitionType` is not assigned to the original
        [caseReducer.name](...args) {
          return caseReducer(...args);
        }
      }[caseReducer.name], {
        _reducerDefinitionType: "reducer"
        /* reducer */
      });
    },
    preparedReducer(prepare, reducer) {
      return {
        _reducerDefinitionType: "reducerWithPrepare",
        prepare,
        reducer
      };
    },
    asyncThunk
  };
}
function handleNormalReducerDefinition({
  type,
  reducerName,
  createNotation
}, maybeReducerWithPrepare, context) {
  let caseReducer;
  let prepareCallback;
  if ("reducer" in maybeReducerWithPrepare) {
    if (createNotation && !isCaseReducerWithPrepareDefinition(maybeReducerWithPrepare)) {
      throw new Error(true ? formatProdErrorMessage(17) : "Please use the `create.preparedReducer` notation for prepared action creators with the `create` notation.");
    }
    caseReducer = maybeReducerWithPrepare.reducer;
    prepareCallback = maybeReducerWithPrepare.prepare;
  } else {
    caseReducer = maybeReducerWithPrepare;
  }
  context.addCase(type, caseReducer).exposeCaseReducer(reducerName, caseReducer).exposeAction(reducerName, prepareCallback ? createAction(type, prepareCallback) : createAction(type));
}
function isAsyncThunkSliceReducerDefinition(reducerDefinition) {
  return reducerDefinition._reducerDefinitionType === "asyncThunk";
}
function isCaseReducerWithPrepareDefinition(reducerDefinition) {
  return reducerDefinition._reducerDefinitionType === "reducerWithPrepare";
}
function handleThunkCaseReducerDefinition({
  type,
  reducerName
}, reducerDefinition, context, cAT) {
  if (!cAT) {
    throw new Error(true ? formatProdErrorMessage(18) : "Cannot use `create.asyncThunk` in the built-in `createSlice`. Use `buildCreateSlice({ creators: { asyncThunk: asyncThunkCreator } })` to create a customised version of `createSlice`.");
  }
  const {
    payloadCreator,
    fulfilled,
    pending,
    rejected,
    settled,
    options
  } = reducerDefinition;
  const thunk = cAT(type, payloadCreator, options);
  context.exposeAction(reducerName, thunk);
  if (fulfilled) {
    context.addCase(thunk.fulfilled, fulfilled);
  }
  if (pending) {
    context.addCase(thunk.pending, pending);
  }
  if (rejected) {
    context.addCase(thunk.rejected, rejected);
  }
  if (settled) {
    context.addMatcher(thunk.settled, settled);
  }
  context.exposeCaseReducer(reducerName, {
    fulfilled: fulfilled || noop$1,
    pending: pending || noop$1,
    rejected: rejected || noop$1,
    settled: settled || noop$1
  });
}
function noop$1() {
}
function getInitialEntityState() {
  return {
    ids: [],
    entities: {}
  };
}
function createInitialStateFactory(stateAdapter) {
  function getInitialState(additionalState = {}, entities) {
    const state = Object.assign(getInitialEntityState(), additionalState);
    return entities ? stateAdapter.setAll(state, entities) : state;
  }
  return {
    getInitialState
  };
}
function createSelectorsFactory() {
  function getSelectors(selectState, options = {}) {
    const {
      createSelector: createSelector2 = createDraftSafeSelector
    } = options;
    const selectIds = (state) => state.ids;
    const selectEntities = (state) => state.entities;
    const selectAll = createSelector2(selectIds, selectEntities, (ids, entities) => ids.map((id) => entities[id]));
    const selectId = (_, id) => id;
    const selectById = (entities, id) => entities[id];
    const selectTotal = createSelector2(selectIds, (ids) => ids.length);
    if (!selectState) {
      return {
        selectIds,
        selectEntities,
        selectAll,
        selectTotal,
        selectById: createSelector2(selectEntities, selectId, selectById)
      };
    }
    const selectGlobalizedEntities = createSelector2(selectState, selectEntities);
    return {
      selectIds: createSelector2(selectState, selectIds),
      selectEntities: selectGlobalizedEntities,
      selectAll: createSelector2(selectState, selectAll),
      selectTotal: createSelector2(selectState, selectTotal),
      selectById: createSelector2(selectGlobalizedEntities, selectId, selectById)
    };
  }
  return {
    getSelectors
  };
}
var isDraftTyped = isDraft;
function createSingleArgumentStateOperator(mutator) {
  const operator = createStateOperator((_, state) => mutator(state));
  return function operation(state) {
    return operator(state, void 0);
  };
}
function createStateOperator(mutator) {
  return function operation(state, arg) {
    function isPayloadActionArgument(arg2) {
      return isFSA(arg2);
    }
    const runMutator = (draft) => {
      if (isPayloadActionArgument(arg)) {
        mutator(arg.payload, draft);
      } else {
        mutator(arg, draft);
      }
    };
    if (isDraftTyped(state)) {
      runMutator(state);
      return state;
    }
    return produce(state, runMutator);
  };
}
function selectIdValue(entity, selectId) {
  const key = selectId(entity);
  if (false) {
    console.warn("The entity passed to the `selectId` implementation returned undefined.", "You should probably provide your own `selectId` implementation.", "The entity that was passed:", entity, "The `selectId` implementation:", selectId.toString());
  }
  return key;
}
function ensureEntitiesArray(entities) {
  if (!Array.isArray(entities)) {
    entities = Object.values(entities);
  }
  return entities;
}
function getCurrent(value) {
  return isDraft(value) ? current(value) : value;
}
function splitAddedUpdatedEntities(newEntities, selectId, state) {
  newEntities = ensureEntitiesArray(newEntities);
  const existingIdsArray = getCurrent(state.ids);
  const existingIds = new Set(existingIdsArray);
  const added = [];
  const addedIds = /* @__PURE__ */ new Set([]);
  const updated = [];
  for (const entity of newEntities) {
    const id = selectIdValue(entity, selectId);
    if (existingIds.has(id) || addedIds.has(id)) {
      updated.push({
        id,
        changes: entity
      });
    } else {
      addedIds.add(id);
      added.push(entity);
    }
  }
  return [added, updated, existingIdsArray];
}
function createUnsortedStateAdapter(selectId) {
  function addOneMutably(entity, state) {
    const key = selectIdValue(entity, selectId);
    if (key in state.entities) {
      return;
    }
    state.ids.push(key);
    state.entities[key] = entity;
  }
  function addManyMutably(newEntities, state) {
    newEntities = ensureEntitiesArray(newEntities);
    for (const entity of newEntities) {
      addOneMutably(entity, state);
    }
  }
  function setOneMutably(entity, state) {
    const key = selectIdValue(entity, selectId);
    if (!(key in state.entities)) {
      state.ids.push(key);
    }
    ;
    state.entities[key] = entity;
  }
  function setManyMutably(newEntities, state) {
    newEntities = ensureEntitiesArray(newEntities);
    for (const entity of newEntities) {
      setOneMutably(entity, state);
    }
  }
  function setAllMutably(newEntities, state) {
    newEntities = ensureEntitiesArray(newEntities);
    state.ids = [];
    state.entities = {};
    addManyMutably(newEntities, state);
  }
  function removeOneMutably(key, state) {
    return removeManyMutably([key], state);
  }
  function removeManyMutably(keys, state) {
    let didMutate = false;
    keys.forEach((key) => {
      if (key in state.entities) {
        delete state.entities[key];
        didMutate = true;
      }
    });
    if (didMutate) {
      state.ids = state.ids.filter((id) => id in state.entities);
    }
  }
  function removeAllMutably(state) {
    Object.assign(state, {
      ids: [],
      entities: {}
    });
  }
  function takeNewKey(keys, update, state) {
    const original3 = state.entities[update.id];
    if (original3 === void 0) {
      return false;
    }
    const updated = Object.assign({}, original3, update.changes);
    const newKey = selectIdValue(updated, selectId);
    const hasNewKey = newKey !== update.id;
    if (hasNewKey) {
      keys[update.id] = newKey;
      delete state.entities[update.id];
    }
    ;
    state.entities[newKey] = updated;
    return hasNewKey;
  }
  function updateOneMutably(update, state) {
    return updateManyMutably([update], state);
  }
  function updateManyMutably(updates, state) {
    const newKeys = {};
    const updatesPerEntity = {};
    updates.forEach((update) => {
      if (update.id in state.entities) {
        updatesPerEntity[update.id] = {
          id: update.id,
          // Spreads ignore falsy values, so this works even if there isn't
          // an existing update already at this key
          changes: {
            ...updatesPerEntity[update.id]?.changes,
            ...update.changes
          }
        };
      }
    });
    updates = Object.values(updatesPerEntity);
    const didMutateEntities = updates.length > 0;
    if (didMutateEntities) {
      const didMutateIds = updates.filter((update) => takeNewKey(newKeys, update, state)).length > 0;
      if (didMutateIds) {
        state.ids = Object.values(state.entities).map((e) => selectIdValue(e, selectId));
      }
    }
  }
  function upsertOneMutably(entity, state) {
    return upsertManyMutably([entity], state);
  }
  function upsertManyMutably(newEntities, state) {
    const [added, updated] = splitAddedUpdatedEntities(newEntities, selectId, state);
    addManyMutably(added, state);
    updateManyMutably(updated, state);
  }
  return {
    removeAll: createSingleArgumentStateOperator(removeAllMutably),
    addOne: createStateOperator(addOneMutably),
    addMany: createStateOperator(addManyMutably),
    setOne: createStateOperator(setOneMutably),
    setMany: createStateOperator(setManyMutably),
    setAll: createStateOperator(setAllMutably),
    updateOne: createStateOperator(updateOneMutably),
    updateMany: createStateOperator(updateManyMutably),
    upsertOne: createStateOperator(upsertOneMutably),
    upsertMany: createStateOperator(upsertManyMutably),
    removeOne: createStateOperator(removeOneMutably),
    removeMany: createStateOperator(removeManyMutably)
  };
}
function findInsertIndex(sortedItems, item, comparisonFunction) {
  let lowIndex = 0;
  let highIndex = sortedItems.length;
  while (lowIndex < highIndex) {
    let middleIndex = lowIndex + highIndex >>> 1;
    const currentItem = sortedItems[middleIndex];
    const res = comparisonFunction(item, currentItem);
    if (res >= 0) {
      lowIndex = middleIndex + 1;
    } else {
      highIndex = middleIndex;
    }
  }
  return lowIndex;
}
function insert(sortedItems, item, comparisonFunction) {
  const insertAtIndex = findInsertIndex(sortedItems, item, comparisonFunction);
  sortedItems.splice(insertAtIndex, 0, item);
  return sortedItems;
}
function createSortedStateAdapter(selectId, comparer) {
  const {
    removeOne,
    removeMany,
    removeAll
  } = createUnsortedStateAdapter(selectId);
  function addOneMutably(entity, state) {
    return addManyMutably([entity], state);
  }
  function addManyMutably(newEntities, state, existingIds) {
    newEntities = ensureEntitiesArray(newEntities);
    const existingKeys = new Set(existingIds ?? getCurrent(state.ids));
    const models = newEntities.filter((model) => !existingKeys.has(selectIdValue(model, selectId)));
    if (models.length !== 0) {
      mergeFunction(state, models);
    }
  }
  function setOneMutably(entity, state) {
    return setManyMutably([entity], state);
  }
  function setManyMutably(newEntities, state) {
    newEntities = ensureEntitiesArray(newEntities);
    if (newEntities.length !== 0) {
      for (const item of newEntities) {
        delete state.entities[selectId(item)];
      }
      mergeFunction(state, newEntities);
    }
  }
  function setAllMutably(newEntities, state) {
    newEntities = ensureEntitiesArray(newEntities);
    state.entities = {};
    state.ids = [];
    addManyMutably(newEntities, state, []);
  }
  function updateOneMutably(update, state) {
    return updateManyMutably([update], state);
  }
  function updateManyMutably(updates, state) {
    let appliedUpdates = false;
    let replacedIds = false;
    for (let update of updates) {
      const entity = state.entities[update.id];
      if (!entity) {
        continue;
      }
      appliedUpdates = true;
      Object.assign(entity, update.changes);
      const newId = selectId(entity);
      if (update.id !== newId) {
        replacedIds = true;
        delete state.entities[update.id];
        const oldIndex = state.ids.indexOf(update.id);
        state.ids[oldIndex] = newId;
        state.entities[newId] = entity;
      }
    }
    if (appliedUpdates) {
      mergeFunction(state, [], appliedUpdates, replacedIds);
    }
  }
  function upsertOneMutably(entity, state) {
    return upsertManyMutably([entity], state);
  }
  function upsertManyMutably(newEntities, state) {
    const [added, updated, existingIdsArray] = splitAddedUpdatedEntities(newEntities, selectId, state);
    if (added.length) {
      addManyMutably(added, state, existingIdsArray);
    }
    if (updated.length) {
      updateManyMutably(updated, state);
    }
  }
  function areArraysEqual(a, b) {
    if (a.length !== b.length) {
      return false;
    }
    for (let i = 0; i < a.length; i++) {
      if (a[i] === b[i]) {
        continue;
      }
      return false;
    }
    return true;
  }
  const mergeFunction = (state, addedItems, appliedUpdates, replacedIds) => {
    const currentEntities = getCurrent(state.entities);
    const currentIds = getCurrent(state.ids);
    const stateEntities = state.entities;
    let ids = currentIds;
    if (replacedIds) {
      ids = new Set(currentIds);
    }
    let sortedEntities = [];
    for (const id of ids) {
      const entity = currentEntities[id];
      if (entity) {
        sortedEntities.push(entity);
      }
    }
    const wasPreviouslyEmpty = sortedEntities.length === 0;
    for (const item of addedItems) {
      stateEntities[selectId(item)] = item;
      if (!wasPreviouslyEmpty) {
        insert(sortedEntities, item, comparer);
      }
    }
    if (wasPreviouslyEmpty) {
      sortedEntities = addedItems.slice().sort(comparer);
    } else if (appliedUpdates) {
      sortedEntities.sort(comparer);
    }
    const newSortedIds = sortedEntities.map(selectId);
    if (!areArraysEqual(currentIds, newSortedIds)) {
      state.ids = newSortedIds;
    }
  };
  return {
    removeOne,
    removeMany,
    removeAll,
    addOne: createStateOperator(addOneMutably),
    updateOne: createStateOperator(updateOneMutably),
    upsertOne: createStateOperator(upsertOneMutably),
    setOne: createStateOperator(setOneMutably),
    setMany: createStateOperator(setManyMutably),
    setAll: createStateOperator(setAllMutably),
    addMany: createStateOperator(addManyMutably),
    updateMany: createStateOperator(updateManyMutably),
    upsertMany: createStateOperator(upsertManyMutably)
  };
}
function createEntityAdapter(options = {}) {
  const {
    selectId,
    sortComparer
  } = {
    sortComparer: false,
    selectId: (instance) => instance.id,
    ...options
  };
  const stateAdapter = sortComparer ? createSortedStateAdapter(selectId, sortComparer) : createUnsortedStateAdapter(selectId);
  const stateFactory = createInitialStateFactory(stateAdapter);
  const selectorsFactory = createSelectorsFactory();
  return {
    selectId,
    sortComparer,
    ...stateFactory,
    ...selectorsFactory,
    ...stateAdapter
  };
}
var task = "task";
var listener = "listener";
var completed = "completed";
var cancelled = "cancelled";
var taskCancelled = `task-${cancelled}`;
var taskCompleted = `task-${completed}`;
var listenerCancelled = `${listener}-${cancelled}`;
var listenerCompleted = `${listener}-${completed}`;
var TaskAbortError = class {
  constructor(code) {
    this.code = code;
    this.message = `${task} ${cancelled} (reason: ${code})`;
  }
  name = "TaskAbortError";
  message;
};
var assertFunction = (func, expected) => {
  if (typeof func !== "function") {
    throw new TypeError(true ? formatProdErrorMessage(32) : `${expected} is not a function`);
  }
};
var noop2 = () => {
};
var catchRejection = (promise, onError = noop2) => {
  promise.catch(onError);
  return promise;
};
var addAbortSignalListener = (abortSignal, callback) => {
  abortSignal.addEventListener("abort", callback, {
    once: true
  });
  return () => abortSignal.removeEventListener("abort", callback);
};
var abortControllerWithReason = (abortController, reason) => {
  const signal = abortController.signal;
  if (signal.aborted) {
    return;
  }
  if (!("reason" in signal)) {
    Object.defineProperty(signal, "reason", {
      enumerable: true,
      value: reason,
      configurable: true,
      writable: true
    });
  }
  ;
  abortController.abort(reason);
};
var validateActive = (signal) => {
  if (signal.aborted) {
    const {
      reason
    } = signal;
    throw new TaskAbortError(reason);
  }
};
function raceWithSignal(signal, promise) {
  let cleanup = noop2;
  return new Promise((resolve, reject) => {
    const notifyRejection = () => reject(new TaskAbortError(signal.reason));
    if (signal.aborted) {
      notifyRejection();
      return;
    }
    cleanup = addAbortSignalListener(signal, notifyRejection);
    promise.finally(() => cleanup()).then(resolve, reject);
  }).finally(() => {
    cleanup = noop2;
  });
}
var runTask = async (task2, cleanUp) => {
  try {
    await Promise.resolve();
    const value = await task2();
    return {
      status: "ok",
      value
    };
  } catch (error) {
    return {
      status: error instanceof TaskAbortError ? "cancelled" : "rejected",
      error
    };
  } finally {
    cleanUp?.();
  }
};
var createPause = (signal) => {
  return (promise) => {
    return catchRejection(raceWithSignal(signal, promise).then((output) => {
      validateActive(signal);
      return output;
    }));
  };
};
var createDelay = (signal) => {
  const pause = createPause(signal);
  return (timeoutMs) => {
    return pause(new Promise((resolve) => setTimeout(resolve, timeoutMs)));
  };
};
var {
  assign
} = Object;
var INTERNAL_NIL_TOKEN = {};
var alm = "listenerMiddleware";
var createFork = (parentAbortSignal, parentBlockingPromises) => {
  const linkControllers = (controller) => addAbortSignalListener(parentAbortSignal, () => abortControllerWithReason(controller, parentAbortSignal.reason));
  return (taskExecutor, opts) => {
    assertFunction(taskExecutor, "taskExecutor");
    const childAbortController = new AbortController();
    linkControllers(childAbortController);
    const result = runTask(async () => {
      validateActive(parentAbortSignal);
      validateActive(childAbortController.signal);
      const result2 = await taskExecutor({
        pause: createPause(childAbortController.signal),
        delay: createDelay(childAbortController.signal),
        signal: childAbortController.signal
      });
      validateActive(childAbortController.signal);
      return result2;
    }, () => abortControllerWithReason(childAbortController, taskCompleted));
    if (opts?.autoJoin) {
      parentBlockingPromises.push(result.catch(noop2));
    }
    return {
      result: createPause(parentAbortSignal)(result),
      cancel() {
        abortControllerWithReason(childAbortController, taskCancelled);
      }
    };
  };
};
var createTakePattern = (startListening, signal) => {
  const take = async (predicate, timeout) => {
    validateActive(signal);
    let unsubscribe = () => {
    };
    const tuplePromise = new Promise((resolve, reject) => {
      let stopListening = startListening({
        predicate,
        effect: (action, listenerApi) => {
          listenerApi.unsubscribe();
          resolve([action, listenerApi.getState(), listenerApi.getOriginalState()]);
        }
      });
      unsubscribe = () => {
        stopListening();
        reject();
      };
    });
    const promises = [tuplePromise];
    if (timeout != null) {
      promises.push(new Promise((resolve) => setTimeout(resolve, timeout, null)));
    }
    try {
      const output = await raceWithSignal(signal, Promise.race(promises));
      validateActive(signal);
      return output;
    } finally {
      unsubscribe();
    }
  };
  return (predicate, timeout) => catchRejection(take(predicate, timeout));
};
var getListenerEntryPropsFrom = (options) => {
  let {
    type,
    actionCreator,
    matcher,
    predicate,
    effect
  } = options;
  if (type) {
    predicate = createAction(type).match;
  } else if (actionCreator) {
    type = actionCreator.type;
    predicate = actionCreator.match;
  } else if (matcher) {
    predicate = matcher;
  } else if (predicate) {
  } else {
    throw new Error(true ? formatProdErrorMessage(21) : "Creating or removing a listener requires one of the known fields for matching an action");
  }
  assertFunction(effect, "options.listener");
  return {
    predicate,
    type,
    effect
  };
};
var createListenerEntry = /* @__PURE__ */ assign((options) => {
  const {
    type,
    predicate,
    effect
  } = getListenerEntryPropsFrom(options);
  const entry = {
    id: nanoid(),
    effect,
    type,
    predicate,
    pending: /* @__PURE__ */ new Set(),
    unsubscribe: () => {
      throw new Error(true ? formatProdErrorMessage(22) : "Unsubscribe not initialized");
    }
  };
  return entry;
}, {
  withTypes: () => createListenerEntry
});
var findListenerEntry = (listenerMap, options) => {
  const {
    type,
    effect,
    predicate
  } = getListenerEntryPropsFrom(options);
  return Array.from(listenerMap.values()).find((entry) => {
    const matchPredicateOrType = typeof type === "string" ? entry.type === type : entry.predicate === predicate;
    return matchPredicateOrType && entry.effect === effect;
  });
};
var cancelActiveListeners = (entry) => {
  entry.pending.forEach((controller) => {
    abortControllerWithReason(controller, listenerCancelled);
  });
};
var createClearListenerMiddleware = (listenerMap) => {
  return () => {
    listenerMap.forEach(cancelActiveListeners);
    listenerMap.clear();
  };
};
var safelyNotifyError = (errorHandler, errorToNotify, errorInfo) => {
  try {
    errorHandler(errorToNotify, errorInfo);
  } catch (errorHandlerError) {
    setTimeout(() => {
      throw errorHandlerError;
    }, 0);
  }
};
var addListener = /* @__PURE__ */ assign(/* @__PURE__ */ createAction(`${alm}/add`), {
  withTypes: () => addListener
});
var clearAllListeners = /* @__PURE__ */ createAction(`${alm}/removeAll`);
var removeListener = /* @__PURE__ */ assign(/* @__PURE__ */ createAction(`${alm}/remove`), {
  withTypes: () => removeListener
});
var defaultErrorHandler = (...args) => {
  console.error(`${alm}/error`, ...args);
};
var createListenerMiddleware = (middlewareOptions = {}) => {
  const listenerMap = /* @__PURE__ */ new Map();
  const {
    extra,
    onError = defaultErrorHandler
  } = middlewareOptions;
  assertFunction(onError, "onError");
  const insertEntry = (entry) => {
    entry.unsubscribe = () => listenerMap.delete(entry.id);
    listenerMap.set(entry.id, entry);
    return (cancelOptions) => {
      entry.unsubscribe();
      if (cancelOptions?.cancelActive) {
        cancelActiveListeners(entry);
      }
    };
  };
  const startListening = (options) => {
    const entry = findListenerEntry(listenerMap, options) ?? createListenerEntry(options);
    return insertEntry(entry);
  };
  assign(startListening, {
    withTypes: () => startListening
  });
  const stopListening = (options) => {
    const entry = findListenerEntry(listenerMap, options);
    if (entry) {
      entry.unsubscribe();
      if (options.cancelActive) {
        cancelActiveListeners(entry);
      }
    }
    return !!entry;
  };
  assign(stopListening, {
    withTypes: () => stopListening
  });
  const notifyListener = async (entry, action, api, getOriginalState) => {
    const internalTaskController = new AbortController();
    const take = createTakePattern(startListening, internalTaskController.signal);
    const autoJoinPromises = [];
    try {
      entry.pending.add(internalTaskController);
      await Promise.resolve(entry.effect(
        action,
        // Use assign() rather than ... to avoid extra helper functions added to bundle
        assign({}, api, {
          getOriginalState,
          condition: (predicate, timeout) => take(predicate, timeout).then(Boolean),
          take,
          delay: createDelay(internalTaskController.signal),
          pause: createPause(internalTaskController.signal),
          extra,
          signal: internalTaskController.signal,
          fork: createFork(internalTaskController.signal, autoJoinPromises),
          unsubscribe: entry.unsubscribe,
          subscribe: () => {
            listenerMap.set(entry.id, entry);
          },
          cancelActiveListeners: () => {
            entry.pending.forEach((controller, _, set) => {
              if (controller !== internalTaskController) {
                abortControllerWithReason(controller, listenerCancelled);
                set.delete(controller);
              }
            });
          },
          cancel: () => {
            abortControllerWithReason(internalTaskController, listenerCancelled);
            entry.pending.delete(internalTaskController);
          },
          throwIfCancelled: () => {
            validateActive(internalTaskController.signal);
          }
        })
      ));
    } catch (listenerError) {
      if (!(listenerError instanceof TaskAbortError)) {
        safelyNotifyError(onError, listenerError, {
          raisedBy: "effect"
        });
      }
    } finally {
      await Promise.all(autoJoinPromises);
      abortControllerWithReason(internalTaskController, listenerCompleted);
      entry.pending.delete(internalTaskController);
    }
  };
  const clearListenerMiddleware = createClearListenerMiddleware(listenerMap);
  const middleware = (api) => (next) => (action) => {
    if (!isAction(action)) {
      return next(action);
    }
    if (addListener.match(action)) {
      return startListening(action.payload);
    }
    if (clearAllListeners.match(action)) {
      clearListenerMiddleware();
      return;
    }
    if (removeListener.match(action)) {
      return stopListening(action.payload);
    }
    let originalState = api.getState();
    const getOriginalState = () => {
      if (originalState === INTERNAL_NIL_TOKEN) {
        throw new Error(true ? formatProdErrorMessage(23) : `${alm}: getOriginalState can only be called synchronously`);
      }
      return originalState;
    };
    let result;
    try {
      result = next(action);
      if (listenerMap.size > 0) {
        const currentState = api.getState();
        const listenerEntries = Array.from(listenerMap.values());
        for (const entry of listenerEntries) {
          let runListener = false;
          try {
            runListener = entry.predicate(action, currentState, originalState);
          } catch (predicateError) {
            runListener = false;
            safelyNotifyError(onError, predicateError, {
              raisedBy: "predicate"
            });
          }
          if (!runListener) {
            continue;
          }
          notifyListener(entry, action, api, getOriginalState);
        }
      }
    } finally {
      originalState = INTERNAL_NIL_TOKEN;
    }
    return result;
  };
  return {
    middleware,
    startListening,
    stopListening,
    clearListeners: clearListenerMiddleware
  };
};
var createMiddlewareEntry = (middleware) => ({
  middleware,
  applied: /* @__PURE__ */ new Map()
});
var matchInstance = (instanceId) => (action) => action?.meta?.instanceId === instanceId;
var createDynamicMiddleware = () => {
  const instanceId = nanoid();
  const middlewareMap = /* @__PURE__ */ new Map();
  const withMiddleware = Object.assign(createAction("dynamicMiddleware/add", (...middlewares) => ({
    payload: middlewares,
    meta: {
      instanceId
    }
  })), {
    withTypes: () => withMiddleware
  });
  const addMiddleware = Object.assign(function addMiddleware2(...middlewares) {
    middlewares.forEach((middleware2) => {
      getOrInsertComputed(middlewareMap, middleware2, createMiddlewareEntry);
    });
  }, {
    withTypes: () => addMiddleware
  });
  const getFinalMiddleware = (api) => {
    const appliedMiddleware = Array.from(middlewareMap.values()).map((entry) => getOrInsertComputed(entry.applied, api, entry.middleware));
    return compose(...appliedMiddleware);
  };
  const isWithMiddleware = isAllOf(withMiddleware, matchInstance(instanceId));
  const middleware = (api) => (next) => (action) => {
    if (isWithMiddleware(action)) {
      addMiddleware(...action.payload);
      return api.dispatch;
    }
    return getFinalMiddleware(api)(next)(action);
  };
  return {
    middleware,
    addMiddleware,
    withMiddleware,
    instanceId
  };
};
var isSliceLike = (maybeSliceLike) => "reducerPath" in maybeSliceLike && typeof maybeSliceLike.reducerPath === "string";
var getReducers = (slices) => slices.flatMap((sliceOrMap) => isSliceLike(sliceOrMap) ? [[sliceOrMap.reducerPath, sliceOrMap.reducer]] : Object.entries(sliceOrMap));
var ORIGINAL_STATE = Symbol.for("rtk-state-proxy-original");
var isStateProxy = (value) => !!value && !!value[ORIGINAL_STATE];
var stateProxyMap = /* @__PURE__ */ new WeakMap();
var createStateProxy = (state, reducerMap, initialStateCache) => getOrInsertComputed(stateProxyMap, state, () => new Proxy(state, {
  get: (target, prop, receiver) => {
    if (prop === ORIGINAL_STATE) return target;
    const result = Reflect.get(target, prop, receiver);
    if (typeof result === "undefined") {
      const cached = initialStateCache[prop];
      if (typeof cached !== "undefined") return cached;
      const reducer = reducerMap[prop];
      if (reducer) {
        const reducerResult = reducer(void 0, {
          type: nanoid()
        });
        if (typeof reducerResult === "undefined") {
          throw new Error(true ? formatProdErrorMessage(24) : `The slice reducer for key "${prop.toString()}" returned undefined when called for selector(). If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.`);
        }
        initialStateCache[prop] = reducerResult;
        return reducerResult;
      }
    }
    return result;
  }
}));
var original = (state) => {
  if (!isStateProxy(state)) {
    throw new Error(true ? formatProdErrorMessage(25) : "original must be used on state Proxy");
  }
  return state[ORIGINAL_STATE];
};
var emptyObject = {};
var noopReducer = (state = emptyObject) => state;
function combineSlices(...slices) {
  const reducerMap = Object.fromEntries(getReducers(slices));
  const getReducer = () => Object.keys(reducerMap).length ? combineReducers(reducerMap) : noopReducer;
  let reducer = getReducer();
  function combinedReducer(state, action) {
    return reducer(state, action);
  }
  combinedReducer.withLazyLoadedSlices = () => combinedReducer;
  const initialStateCache = {};
  const inject = (slice, config = {}) => {
    const {
      reducerPath,
      reducer: reducerToInject
    } = slice;
    const currentReducer = reducerMap[reducerPath];
    if (!config.overrideExisting && currentReducer && currentReducer !== reducerToInject) {
      if (typeof process !== "undefined" && false) {
        console.error(`called \`inject\` to override already-existing reducer ${reducerPath} without specifying \`overrideExisting: true\``);
      }
      return combinedReducer;
    }
    if (config.overrideExisting && currentReducer !== reducerToInject) {
      delete initialStateCache[reducerPath];
    }
    reducerMap[reducerPath] = reducerToInject;
    reducer = getReducer();
    return combinedReducer;
  };
  const selector = Object.assign(function makeSelector(selectorFn, selectState) {
    return function selector2(state, ...args) {
      return selectorFn(createStateProxy(selectState ? selectState(state, ...args) : state, reducerMap, initialStateCache), ...args);
    };
  }, {
    original
  });
  return Object.assign(combinedReducer, {
    inject,
    selector
  });
}
function formatProdErrorMessage(code) {
  return `Minified Redux Toolkit error #${code}; visit https://redux-toolkit.js.org/Errors?code=${code} for the full message or use the non-minified dev environment for full errors. `;
}

'use strict';

function bind(fn, thisArg) {
  return function wrap() {
    return fn.apply(thisArg, arguments);
  };
}

'use strict';

// utils is a library of generic helper functions non-specific to axios

const {toString} = Object.prototype;
const {getPrototypeOf} = Object;

const kindOf = (cache => thing => {
    const str = toString.call(thing);
    return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
})(Object.create(null));

const kindOfTest = (type) => {
  type = type.toLowerCase();
  return (thing) => kindOf(thing) === type
};

const typeOfTest = type => thing => typeof thing === type;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 *
 * @returns {boolean} True if value is an Array, otherwise false
 */
const {isArray: isArray$1} = Array;

/**
 * Determine if a value is undefined
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if the value is undefined, otherwise false
 */
const isUndefined$1 = typeOfTest('undefined');

/**
 * Determine if a value is a Buffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer(val) {
  return val !== null && !isUndefined$1(val) && val.constructor !== null && !isUndefined$1(val.constructor)
    && isFunction$1(val.constructor.isBuffer) && val.constructor.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
const isArrayBuffer = kindOfTest('ArrayBuffer');


/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  let result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (isArrayBuffer(val.buffer));
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a String, otherwise false
 */
const isString$1 = typeOfTest('string');

/**
 * Determine if a value is a Function
 *
 * @param {*} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
const isFunction$1 = typeOfTest('function');

/**
 * Determine if a value is a Number
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Number, otherwise false
 */
const isNumber$1 = typeOfTest('number');

/**
 * Determine if a value is an Object
 *
 * @param {*} thing The value to test
 *
 * @returns {boolean} True if value is an Object, otherwise false
 */
const isObject$1 = (thing) => thing !== null && typeof thing === 'object';

/**
 * Determine if a value is a Boolean
 *
 * @param {*} thing The value to test
 * @returns {boolean} True if value is a Boolean, otherwise false
 */
const isBoolean$1 = thing => thing === true || thing === false;

/**
 * Determine if a value is a plain Object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a plain Object, otherwise false
 */
const isPlainObject = (val) => {
  if (kindOf(val) !== 'object') {
    return false;
  }

  const prototype = getPrototypeOf(val);
  return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) && !(Symbol.toStringTag in val) && !(Symbol.iterator in val);
};

/**
 * Determine if a value is a Date
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Date, otherwise false
 */
const isDate$1 = kindOfTest('Date');

/**
 * Determine if a value is a File
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a File, otherwise false
 */
const isFile = kindOfTest('File');

/**
 * Determine if a value is a Blob
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Blob, otherwise false
 */
const isBlob = kindOfTest('Blob');

/**
 * Determine if a value is a FileList
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a File, otherwise false
 */
const isFileList = kindOfTest('FileList');

/**
 * Determine if a value is a Stream
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Stream, otherwise false
 */
const isStream = (val) => isObject$1(val) && isFunction$1(val.pipe);

/**
 * Determine if a value is a FormData
 *
 * @param {*} thing The value to test
 *
 * @returns {boolean} True if value is an FormData, otherwise false
 */
const isFormData = (thing) => {
  let kind;
  return thing && (
    (typeof FormData === 'function' && thing instanceof FormData) || (
      isFunction$1(thing.append) && (
        (kind = kindOf(thing)) === 'formdata' ||
        // detect form-data instance
        (kind === 'object' && isFunction$1(thing.toString) && thing.toString() === '[object FormData]')
      )
    )
  )
};

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
const isURLSearchParams = kindOfTest('URLSearchParams');

const [isReadableStream, isRequest, isResponse, isHeaders] = ['ReadableStream', 'Request', 'Response', 'Headers'].map(kindOfTest);

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 *
 * @returns {String} The String freed of excess whitespace
 */
const trim$1 = (str) => str.trim ?
  str.trim() : str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 *
 * @param {Boolean} [allOwnKeys = false]
 * @returns {any}
 */
function forEach$1(obj, fn, {allOwnKeys = false} = {}) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  let i;
  let l;

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray$1(obj)) {
    // Iterate over array values
    for (i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    const keys = allOwnKeys ? Object.getOwnPropertyNames(obj) : Object.keys(obj);
    const len = keys.length;
    let key;

    for (i = 0; i < len; i++) {
      key = keys[i];
      fn.call(null, obj[key], key, obj);
    }
  }
}

function findKey(obj, key) {
  key = key.toLowerCase();
  const keys = Object.keys(obj);
  let i = keys.length;
  let _key;
  while (i-- > 0) {
    _key = keys[i];
    if (key === _key.toLowerCase()) {
      return _key;
    }
  }
  return null;
}

const _global = (() => {
  /*eslint no-undef:0*/
  if (typeof globalThis !== "undefined") return globalThis;
  return typeof self !== "undefined" ? self : (typeof window !== 'undefined' ? window : global)
})();

const isContextDefined = (context) => !isUndefined$1(context) && context !== _global;

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 *
 * @returns {Object} Result of all merge properties
 */
function merge$2(/* obj1, obj2, obj3, ... */) {
  const {caseless} = isContextDefined(this) && this || {};
  const result = {};
  const assignValue = (val, key) => {
    const targetKey = caseless && findKey(result, key) || key;
    if (isPlainObject(result[targetKey]) && isPlainObject(val)) {
      result[targetKey] = merge$2(result[targetKey], val);
    } else if (isPlainObject(val)) {
      result[targetKey] = merge$2({}, val);
    } else if (isArray$1(val)) {
      result[targetKey] = val.slice();
    } else {
      result[targetKey] = val;
    }
  };

  for (let i = 0, l = arguments.length; i < l; i++) {
    arguments[i] && forEach$1(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 *
 * @param {Boolean} [allOwnKeys]
 * @returns {Object} The resulting value of object a
 */
const extend = (a, b, thisArg, {allOwnKeys}= {}) => {
  forEach$1(b, (val, key) => {
    if (thisArg && isFunction$1(val)) {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  }, {allOwnKeys});
  return a;
};

/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 *
 * @returns {string} content value without BOM
 */
const stripBOM = (content) => {
  if (content.charCodeAt(0) === 0xFEFF) {
    content = content.slice(1);
  }
  return content;
};

/**
 * Inherit the prototype methods from one constructor into another
 * @param {function} constructor
 * @param {function} superConstructor
 * @param {object} [props]
 * @param {object} [descriptors]
 *
 * @returns {void}
 */
const inherits = (constructor, superConstructor, props, descriptors) => {
  constructor.prototype = Object.create(superConstructor.prototype, descriptors);
  constructor.prototype.constructor = constructor;
  Object.defineProperty(constructor, 'super', {
    value: superConstructor.prototype
  });
  props && Object.assign(constructor.prototype, props);
};

/**
 * Resolve object with deep prototype chain to a flat object
 * @param {Object} sourceObj source object
 * @param {Object} [destObj]
 * @param {Function|Boolean} [filter]
 * @param {Function} [propFilter]
 *
 * @returns {Object}
 */
const toFlatObject = (sourceObj, destObj, filter, propFilter) => {
  let props;
  let i;
  let prop;
  const merged = {};

  destObj = destObj || {};
  // eslint-disable-next-line no-eq-null,eqeqeq
  if (sourceObj == null) return destObj;

  do {
    props = Object.getOwnPropertyNames(sourceObj);
    i = props.length;
    while (i-- > 0) {
      prop = props[i];
      if ((!propFilter || propFilter(prop, sourceObj, destObj)) && !merged[prop]) {
        destObj[prop] = sourceObj[prop];
        merged[prop] = true;
      }
    }
    sourceObj = filter !== false && getPrototypeOf(sourceObj);
  } while (sourceObj && (!filter || filter(sourceObj, destObj)) && sourceObj !== Object.prototype);

  return destObj;
};

/**
 * Determines whether a string ends with the characters of a specified string
 *
 * @param {String} str
 * @param {String} searchString
 * @param {Number} [position= 0]
 *
 * @returns {boolean}
 */
const endsWith$1 = (str, searchString, position) => {
  str = String(str);
  if (position === undefined || position > str.length) {
    position = str.length;
  }
  position -= searchString.length;
  const lastIndex = str.indexOf(searchString, position);
  return lastIndex !== -1 && lastIndex === position;
};


/**
 * Returns new array from array like object or null if failed
 *
 * @param {*} [thing]
 *
 * @returns {?Array}
 */
const toArray$1 = (thing) => {
  if (!thing) return null;
  if (isArray$1(thing)) return thing;
  let i = thing.length;
  if (!isNumber$1(i)) return null;
  const arr = new Array(i);
  while (i-- > 0) {
    arr[i] = thing[i];
  }
  return arr;
};

/**
 * Checking if the Uint8Array exists and if it does, it returns a function that checks if the
 * thing passed in is an instance of Uint8Array
 *
 * @param {TypedArray}
 *
 * @returns {Array}
 */
// eslint-disable-next-line func-names
const isTypedArray = (TypedArray => {
  // eslint-disable-next-line func-names
  return thing => {
    return TypedArray && thing instanceof TypedArray;
  };
})(typeof Uint8Array !== 'undefined' && getPrototypeOf(Uint8Array));

/**
 * For each entry in the object, call the function with the key and value.
 *
 * @param {Object<any, any>} obj - The object to iterate over.
 * @param {Function} fn - The function to call for each entry.
 *
 * @returns {void}
 */
const forEachEntry = (obj, fn) => {
  const generator = obj && obj[Symbol.iterator];

  const iterator = generator.call(obj);

  let result;

  while ((result = iterator.next()) && !result.done) {
    const pair = result.value;
    fn.call(obj, pair[0], pair[1]);
  }
};

/**
 * It takes a regular expression and a string, and returns an array of all the matches
 *
 * @param {string} regExp - The regular expression to match against.
 * @param {string} str - The string to search.
 *
 * @returns {Array<boolean>}
 */
const matchAll = (regExp, str) => {
  let matches;
  const arr = [];

  while ((matches = regExp.exec(str)) !== null) {
    arr.push(matches);
  }

  return arr;
};

/* Checking if the kindOfTest function returns true when passed an HTMLFormElement. */
const isHTMLForm = kindOfTest('HTMLFormElement');

const toCamelCase = str => {
  return str.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,
    function replacer(m, p1, p2) {
      return p1.toUpperCase() + p2;
    }
  );
};

/* Creating a function that will check if an object has a property. */
const hasOwnProperty = (({hasOwnProperty}) => (obj, prop) => hasOwnProperty.call(obj, prop))(Object.prototype);

/**
 * Determine if a value is a RegExp object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a RegExp object, otherwise false
 */
const isRegExp = kindOfTest('RegExp');

const reduceDescriptors = (obj, reducer) => {
  const descriptors = Object.getOwnPropertyDescriptors(obj);
  const reducedDescriptors = {};

  forEach$1(descriptors, (descriptor, name) => {
    let ret;
    if ((ret = reducer(descriptor, name, obj)) !== false) {
      reducedDescriptors[name] = ret || descriptor;
    }
  });

  Object.defineProperties(obj, reducedDescriptors);
};

/**
 * Makes all methods read-only
 * @param {Object} obj
 */

const freezeMethods = (obj) => {
  reduceDescriptors(obj, (descriptor, name) => {
    // skip restricted props in strict mode
    if (isFunction$1(obj) && ['arguments', 'caller', 'callee'].indexOf(name) !== -1) {
      return false;
    }

    const value = obj[name];

    if (!isFunction$1(value)) return;

    descriptor.enumerable = false;

    if ('writable' in descriptor) {
      descriptor.writable = false;
      return;
    }

    if (!descriptor.set) {
      descriptor.set = () => {
        throw Error('Can not rewrite read-only method \'' + name + '\'');
      };
    }
  });
};

const toObjectSet = (arrayOrString, delimiter) => {
  const obj = {};

  const define = (arr) => {
    arr.forEach(value => {
      obj[value] = true;
    });
  };

  isArray$1(arrayOrString) ? define(arrayOrString) : define(String(arrayOrString).split(delimiter));

  return obj;
};

const noop = () => {};

const toFiniteNumber = (value, defaultValue) => {
  return value != null && Number.isFinite(value = +value) ? value : defaultValue;
};

/**
 * If the thing is a FormData object, return true, otherwise return false.
 *
 * @param {unknown} thing - The thing to check.
 *
 * @returns {boolean}
 */
function isSpecCompliantForm(thing) {
  return !!(thing && isFunction$1(thing.append) && thing[Symbol.toStringTag] === 'FormData' && thing[Symbol.iterator]);
}

const toJSONObject = (obj) => {
  const stack = new Array(10);

  const visit = (source, i) => {

    if (isObject$1(source)) {
      if (stack.indexOf(source) >= 0) {
        return;
      }

      if(!('toJSON' in source)) {
        stack[i] = source;
        const target = isArray$1(source) ? [] : {};

        forEach$1(source, (value, key) => {
          const reducedValue = visit(value, i + 1);
          !isUndefined$1(reducedValue) && (target[key] = reducedValue);
        });

        stack[i] = undefined;

        return target;
      }
    }

    return source;
  };

  return visit(obj, 0);
};

const isAsyncFn = kindOfTest('AsyncFunction');

const isThenable = (thing) =>
  thing && (isObject$1(thing) || isFunction$1(thing)) && isFunction$1(thing.then) && isFunction$1(thing.catch);

// original code
// https://github.com/DigitalBrainJS/AxiosPromise/blob/16deab13710ec09779922131f3fa5954320f83ab/lib/utils.js#L11-L34

const _setImmediate = ((setImmediateSupported, postMessageSupported) => {
  if (setImmediateSupported) {
    return setImmediate;
  }

  return postMessageSupported ? ((token, callbacks) => {
    _global.addEventListener("message", ({source, data}) => {
      if (source === _global && data === token) {
        callbacks.length && callbacks.shift()();
      }
    }, false);

    return (cb) => {
      callbacks.push(cb);
      _global.postMessage(token, "*");
    }
  })(`axios@${Math.random()}`, []) : (cb) => setTimeout(cb);
})(
  typeof setImmediate === 'function',
  isFunction$1(_global.postMessage)
);

const asap = typeof queueMicrotask !== 'undefined' ?
  queueMicrotask.bind(_global) : ( typeof process !== 'undefined' && process.nextTick || _setImmediate);

// *********************

const utils$1 = {
  isArray: isArray$1,
  isArrayBuffer,
  isBuffer,
  isFormData,
  isArrayBufferView,
  isString: isString$1,
  isNumber: isNumber$1,
  isBoolean: isBoolean$1,
  isObject: isObject$1,
  isPlainObject,
  isReadableStream,
  isRequest,
  isResponse,
  isHeaders,
  isUndefined: isUndefined$1,
  isDate: isDate$1,
  isFile,
  isBlob,
  isRegExp,
  isFunction: isFunction$1,
  isStream,
  isURLSearchParams,
  isTypedArray,
  isFileList,
  forEach: forEach$1,
  merge: merge$2,
  extend,
  trim: trim$1,
  stripBOM,
  inherits,
  toFlatObject,
  kindOf,
  kindOfTest,
  endsWith: endsWith$1,
  toArray: toArray$1,
  forEachEntry,
  matchAll,
  isHTMLForm,
  hasOwnProperty,
  hasOwnProp: hasOwnProperty, // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors,
  freezeMethods,
  toObjectSet,
  toCamelCase,
  noop,
  toFiniteNumber,
  findKey,
  global: _global,
  isContextDefined,
  isSpecCompliantForm,
  toJSONObject,
  isAsyncFn,
  isThenable,
  setImmediate: _setImmediate,
  asap
};

'use strict';

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [config] The config.
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 *
 * @returns {Error} The created error.
 */
function AxiosError$1(message, code, config, request, response) {
  Error.call(this);

  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, this.constructor);
  } else {
    this.stack = (new Error()).stack;
  }

  this.message = message;
  this.name = 'AxiosError';
  code && (this.code = code);
  config && (this.config = config);
  request && (this.request = request);
  if (response) {
    this.response = response;
    this.status = response.status ? response.status : null;
  }
}

utils$1.inherits(AxiosError$1, Error, {
  toJSON: function toJSON() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: utils$1.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});

const prototype$1 = AxiosError$1.prototype;
const descriptors = {};

[
  'ERR_BAD_OPTION_VALUE',
  'ERR_BAD_OPTION',
  'ECONNABORTED',
  'ETIMEDOUT',
  'ERR_NETWORK',
  'ERR_FR_TOO_MANY_REDIRECTS',
  'ERR_DEPRECATED',
  'ERR_BAD_RESPONSE',
  'ERR_BAD_REQUEST',
  'ERR_CANCELED',
  'ERR_NOT_SUPPORT',
  'ERR_INVALID_URL'
// eslint-disable-next-line func-names
].forEach(code => {
  descriptors[code] = {value: code};
});

Object.defineProperties(AxiosError$1, descriptors);
Object.defineProperty(prototype$1, 'isAxiosError', {value: true});

// eslint-disable-next-line func-names
AxiosError$1.from = (error, code, config, request, response, customProps) => {
  const axiosError = Object.create(prototype$1);

  utils$1.toFlatObject(error, axiosError, function filter(obj) {
    return obj !== Error.prototype;
  }, prop => {
    return prop !== 'isAxiosError';
  });

  AxiosError$1.call(axiosError, error.message, code, config, request, response);

  axiosError.cause = error;

  axiosError.name = error.name;

  customProps && Object.assign(axiosError, customProps);

  return axiosError;
};

// eslint-disable-next-line strict
const httpAdapter = null;

'use strict';

/**
 * Determines if the given thing is a array or js object.
 *
 * @param {string} thing - The object or array to be visited.
 *
 * @returns {boolean}
 */
function isVisitable(thing) {
  return utils$1.isPlainObject(thing) || utils$1.isArray(thing);
}

/**
 * It removes the brackets from the end of a string
 *
 * @param {string} key - The key of the parameter.
 *
 * @returns {string} the key without the brackets.
 */
function removeBrackets(key) {
  return utils$1.endsWith(key, '[]') ? key.slice(0, -2) : key;
}

/**
 * It takes a path, a key, and a boolean, and returns a string
 *
 * @param {string} path - The path to the current key.
 * @param {string} key - The key of the current object being iterated over.
 * @param {string} dots - If true, the key will be rendered with dots instead of brackets.
 *
 * @returns {string} The path to the current key.
 */
function renderKey(path, key, dots) {
  if (!path) return key;
  return path.concat(key).map(function each(token, i) {
    // eslint-disable-next-line no-param-reassign
    token = removeBrackets(token);
    return !dots && i ? '[' + token + ']' : token;
  }).join(dots ? '.' : '');
}

/**
 * If the array is an array and none of its elements are visitable, then it's a flat array.
 *
 * @param {Array<any>} arr - The array to check
 *
 * @returns {boolean}
 */
function isFlatArray(arr) {
  return utils$1.isArray(arr) && !arr.some(isVisitable);
}

const predicates = utils$1.toFlatObject(utils$1, {}, null, function filter(prop) {
  return /^is[A-Z]/.test(prop);
});

/**
 * Convert a data object to FormData
 *
 * @param {Object} obj
 * @param {?Object} [formData]
 * @param {?Object} [options]
 * @param {Function} [options.visitor]
 * @param {Boolean} [options.metaTokens = true]
 * @param {Boolean} [options.dots = false]
 * @param {?Boolean} [options.indexes = false]
 *
 * @returns {Object}
 **/

/**
 * It converts an object into a FormData object
 *
 * @param {Object<any, any>} obj - The object to convert to form data.
 * @param {string} formData - The FormData object to append to.
 * @param {Object<string, any>} options
 *
 * @returns
 */
function toFormData$1(obj, formData, options) {
  if (!utils$1.isObject(obj)) {
    throw new TypeError('target must be an object');
  }

  // eslint-disable-next-line no-param-reassign
  formData = formData || new (httpAdapter || FormData)();

  // eslint-disable-next-line no-param-reassign
  options = utils$1.toFlatObject(options, {
    metaTokens: true,
    dots: false,
    indexes: false
  }, false, function defined(option, source) {
    // eslint-disable-next-line no-eq-null,eqeqeq
    return !utils$1.isUndefined(source[option]);
  });

  const metaTokens = options.metaTokens;
  // eslint-disable-next-line no-use-before-define
  const visitor = options.visitor || defaultVisitor;
  const dots = options.dots;
  const indexes = options.indexes;
  const _Blob = options.Blob || typeof Blob !== 'undefined' && Blob;
  const useBlob = _Blob && utils$1.isSpecCompliantForm(formData);

  if (!utils$1.isFunction(visitor)) {
    throw new TypeError('visitor must be a function');
  }

  function convertValue(value) {
    if (value === null) return '';

    if (utils$1.isDate(value)) {
      return value.toISOString();
    }

    if (!useBlob && utils$1.isBlob(value)) {
      throw new AxiosError$1('Blob is not supported. Use a Buffer instead.');
    }

    if (utils$1.isArrayBuffer(value) || utils$1.isTypedArray(value)) {
      return useBlob && typeof Blob === 'function' ? new Blob([value]) : Buffer.from(value);
    }

    return value;
  }

  /**
   * Default visitor.
   *
   * @param {*} value
   * @param {String|Number} key
   * @param {Array<String|Number>} path
   * @this {FormData}
   *
   * @returns {boolean} return true to visit the each prop of the value recursively
   */
  function defaultVisitor(value, key, path) {
    let arr = value;

    if (value && !path && typeof value === 'object') {
      if (utils$1.endsWith(key, '{}')) {
        // eslint-disable-next-line no-param-reassign
        key = metaTokens ? key : key.slice(0, -2);
        // eslint-disable-next-line no-param-reassign
        value = JSON.stringify(value);
      } else if (
        (utils$1.isArray(value) && isFlatArray(value)) ||
        ((utils$1.isFileList(value) || utils$1.endsWith(key, '[]')) && (arr = utils$1.toArray(value))
        )) {
        // eslint-disable-next-line no-param-reassign
        key = removeBrackets(key);

        arr.forEach(function each(el, index) {
          !(utils$1.isUndefined(el) || el === null) && formData.append(
            // eslint-disable-next-line no-nested-ternary
            indexes === true ? renderKey([key], index, dots) : (indexes === null ? key : key + '[]'),
            convertValue(el)
          );
        });
        return false;
      }
    }

    if (isVisitable(value)) {
      return true;
    }

    formData.append(renderKey(path, key, dots), convertValue(value));

    return false;
  }

  const stack = [];

  const exposedHelpers = Object.assign(predicates, {
    defaultVisitor,
    convertValue,
    isVisitable
  });

  function build(value, path) {
    if (utils$1.isUndefined(value)) return;

    if (stack.indexOf(value) !== -1) {
      throw Error('Circular reference detected in ' + path.join('.'));
    }

    stack.push(value);

    utils$1.forEach(value, function each(el, key) {
      const result = !(utils$1.isUndefined(el) || el === null) && visitor.call(
        formData, el, utils$1.isString(key) ? key.trim() : key, path, exposedHelpers
      );

      if (result === true) {
        build(el, path ? path.concat(key) : [key]);
      }
    });

    stack.pop();
  }

  if (!utils$1.isObject(obj)) {
    throw new TypeError('data must be an object');
  }

  build(obj);

  return formData;
}

'use strict';

/**
 * It encodes a string by replacing all characters that are not in the unreserved set with
 * their percent-encoded equivalents
 *
 * @param {string} str - The string to encode.
 *
 * @returns {string} The encoded string.
 */
function encode$1(str) {
  const charMap = {
    '!': '%21',
    "'": '%27',
    '(': '%28',
    ')': '%29',
    '~': '%7E',
    '%20': '+',
    '%00': '\x00'
  };
  return encodeURIComponent(str).replace(/[!'()~]|%20|%00/g, function replacer(match) {
    return charMap[match];
  });
}

/**
 * It takes a params object and converts it to a FormData object
 *
 * @param {Object<string, any>} params - The parameters to be converted to a FormData object.
 * @param {Object<string, any>} options - The options object passed to the Axios constructor.
 *
 * @returns {void}
 */
function AxiosURLSearchParams(params, options) {
  this._pairs = [];

  params && toFormData$1(params, this, options);
}

const prototype = AxiosURLSearchParams.prototype;

prototype.append = function append(name, value) {
  this._pairs.push([name, value]);
};

prototype.toString = function toString(encoder) {
  const _encode = encoder ? function(value) {
    return encoder.call(this, value, encode$1);
  } : encode$1;

  return this._pairs.map(function each(pair) {
    return _encode(pair[0]) + '=' + _encode(pair[1]);
  }, '').join('&');
};

'use strict';

/**
 * It replaces all instances of the characters `:`, `$`, `,`, `+`, `[`, and `]` with their
 * URI encoded counterparts
 *
 * @param {string} val The value to be encoded.
 *
 * @returns {string} The encoded value.
 */
function encode(val) {
  return encodeURIComponent(val).
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @param {?(object|Function)} options
 *
 * @returns {string} The formatted url
 */
function buildURL(url, params, options) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }
  
  const _encode = options && options.encode || encode;

  if (utils$1.isFunction(options)) {
    options = {
      serialize: options
    };
  } 

  const serializeFn = options && options.serialize;

  let serializedParams;

  if (serializeFn) {
    serializedParams = serializeFn(params, options);
  } else {
    serializedParams = utils$1.isURLSearchParams(params) ?
      params.toString() :
      new AxiosURLSearchParams(params, options).toString(_encode);
  }

  if (serializedParams) {
    const hashmarkIndex = url.indexOf("#");

    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
}

'use strict';

class InterceptorManager {
  constructor() {
    this.handlers = [];
  }

  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(fulfilled, rejected, options) {
    this.handlers.push({
      fulfilled,
      rejected,
      synchronous: options ? options.synchronous : false,
      runWhen: options ? options.runWhen : null
    });
    return this.handlers.length - 1;
  }

  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(id) {
    if (this.handlers[id]) {
      this.handlers[id] = null;
    }
  }

  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    if (this.handlers) {
      this.handlers = [];
    }
  }

  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(fn) {
    utils$1.forEach(this.handlers, function forEachHandler(h) {
      if (h !== null) {
        fn(h);
      }
    });
  }
}

'use strict';

const transitionalDefaults = {
  silentJSONParsing: true,
  forcedJSONParsing: true,
  clarifyTimeoutError: false
};

'use strict';
const URLSearchParams$1 = typeof URLSearchParams !== 'undefined' ? URLSearchParams : AxiosURLSearchParams;

'use strict';

const FormData$1 = typeof FormData !== 'undefined' ? FormData : null;

'use strict';

const Blob$1 = typeof Blob !== 'undefined' ? Blob : null;

const platform$1 = {
  isBrowser: true,
  classes: {
    URLSearchParams: URLSearchParams$1,
    FormData: FormData$1,
    Blob: Blob$1
  },
  protocols: ['http', 'https', 'file', 'blob', 'url', 'data']
};

const hasBrowserEnv = typeof window !== 'undefined' && typeof document !== 'undefined';

const _navigator = typeof navigator === 'object' && navigator || undefined;

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 *
 * @returns {boolean}
 */
const hasStandardBrowserEnv = hasBrowserEnv &&
  (!_navigator || ['ReactNative', 'NativeScript', 'NS'].indexOf(_navigator.product) < 0);

/**
 * Determine if we're running in a standard browser webWorker environment
 *
 * Although the `isStandardBrowserEnv` method indicates that
 * `allows axios to run in a web worker`, the WebWorker will still be
 * filtered out due to its judgment standard
 * `typeof window !== 'undefined' && typeof document !== 'undefined'`.
 * This leads to a problem when axios post `FormData` in webWorker
 */
const hasStandardBrowserWebWorkerEnv = (() => {
  return (
    typeof WorkerGlobalScope !== 'undefined' &&
    // eslint-disable-next-line no-undef
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts === 'function'
  );
})();

const origin = hasBrowserEnv && window.location.href || 'http://localhost';

const utils = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  hasBrowserEnv,
  hasStandardBrowserEnv,
  hasStandardBrowserWebWorkerEnv,
  navigator: _navigator,
  origin
}, Symbol.toStringTag, { value: 'Module' }));

const platform = {
  ...utils,
  ...platform$1
};

'use strict';

function toURLEncodedForm(data, options) {
  return toFormData$1(data, new platform.classes.URLSearchParams(), Object.assign({
    visitor: function(value, key, path, helpers) {
      if (platform.isNode && utils$1.isBuffer(value)) {
        this.append(key, value.toString('base64'));
        return false;
      }

      return helpers.defaultVisitor.apply(this, arguments);
    }
  }, options));
}

'use strict';

/**
 * It takes a string like `foo[x][y][z]` and returns an array like `['foo', 'x', 'y', 'z']
 *
 * @param {string} name - The name of the property to get.
 *
 * @returns An array of strings.
 */
function parsePropPath(name) {
  // foo[x][y][z]
  // foo.x.y.z
  // foo-x-y-z
  // foo x y z
  return utils$1.matchAll(/\w+|\[(\w*)]/g, name).map(match => {
    return match[0] === '[]' ? '' : match[1] || match[0];
  });
}

/**
 * Convert an array to an object.
 *
 * @param {Array<any>} arr - The array to convert to an object.
 *
 * @returns An object with the same keys and values as the array.
 */
function arrayToObject(arr) {
  const obj = {};
  const keys = Object.keys(arr);
  let i;
  const len = keys.length;
  let key;
  for (i = 0; i < len; i++) {
    key = keys[i];
    obj[key] = arr[key];
  }
  return obj;
}

/**
 * It takes a FormData object and returns a JavaScript object
 *
 * @param {string} formData The FormData object to convert to JSON.
 *
 * @returns {Object<string, any> | null} The converted object.
 */
function formDataToJSON(formData) {
  function buildPath(path, value, target, index) {
    let name = path[index++];

    if (name === '__proto__') return true;

    const isNumericKey = Number.isFinite(+name);
    const isLast = index >= path.length;
    name = !name && utils$1.isArray(target) ? target.length : name;

    if (isLast) {
      if (utils$1.hasOwnProp(target, name)) {
        target[name] = [target[name], value];
      } else {
        target[name] = value;
      }

      return !isNumericKey;
    }

    if (!target[name] || !utils$1.isObject(target[name])) {
      target[name] = [];
    }

    const result = buildPath(path, value, target[name], index);

    if (result && utils$1.isArray(target[name])) {
      target[name] = arrayToObject(target[name]);
    }

    return !isNumericKey;
  }

  if (utils$1.isFormData(formData) && utils$1.isFunction(formData.entries)) {
    const obj = {};

    utils$1.forEachEntry(formData, (name, value) => {
      buildPath(parsePropPath(name), value, obj, 0);
    });

    return obj;
  }

  return null;
}

'use strict';

/**
 * It takes a string, tries to parse it, and if it fails, it returns the stringified version
 * of the input
 *
 * @param {any} rawValue - The value to be stringified.
 * @param {Function} parser - A function that parses a string into a JavaScript object.
 * @param {Function} encoder - A function that takes a value and returns a string.
 *
 * @returns {string} A stringified version of the rawValue.
 */
function stringifySafely(rawValue, parser, encoder) {
  if (utils$1.isString(rawValue)) {
    try {
      (parser || JSON.parse)(rawValue);
      return utils$1.trim(rawValue);
    } catch (e) {
      if (e.name !== 'SyntaxError') {
        throw e;
      }
    }
  }

  return (encoder || JSON.stringify)(rawValue);
}

const defaults = {

  transitional: transitionalDefaults,

  adapter: ['xhr', 'http', 'fetch'],

  transformRequest: [function transformRequest(data, headers) {
    const contentType = headers.getContentType() || '';
    const hasJSONContentType = contentType.indexOf('application/json') > -1;
    const isObjectPayload = utils$1.isObject(data);

    if (isObjectPayload && utils$1.isHTMLForm(data)) {
      data = new FormData(data);
    }

    const isFormData = utils$1.isFormData(data);

    if (isFormData) {
      return hasJSONContentType ? JSON.stringify(formDataToJSON(data)) : data;
    }

    if (utils$1.isArrayBuffer(data) ||
      utils$1.isBuffer(data) ||
      utils$1.isStream(data) ||
      utils$1.isFile(data) ||
      utils$1.isBlob(data) ||
      utils$1.isReadableStream(data)
    ) {
      return data;
    }
    if (utils$1.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils$1.isURLSearchParams(data)) {
      headers.setContentType('application/x-www-form-urlencoded;charset=utf-8', false);
      return data.toString();
    }

    let isFileList;

    if (isObjectPayload) {
      if (contentType.indexOf('application/x-www-form-urlencoded') > -1) {
        return toURLEncodedForm(data, this.formSerializer).toString();
      }

      if ((isFileList = utils$1.isFileList(data)) || contentType.indexOf('multipart/form-data') > -1) {
        const _FormData = this.env && this.env.FormData;

        return toFormData$1(
          isFileList ? {'files[]': data} : data,
          _FormData && new _FormData(),
          this.formSerializer
        );
      }
    }

    if (isObjectPayload || hasJSONContentType ) {
      headers.setContentType('application/json', false);
      return stringifySafely(data);
    }

    return data;
  }],

  transformResponse: [function transformResponse(data) {
    const transitional = this.transitional || defaults.transitional;
    const forcedJSONParsing = transitional && transitional.forcedJSONParsing;
    const JSONRequested = this.responseType === 'json';

    if (utils$1.isResponse(data) || utils$1.isReadableStream(data)) {
      return data;
    }

    if (data && utils$1.isString(data) && ((forcedJSONParsing && !this.responseType) || JSONRequested)) {
      const silentJSONParsing = transitional && transitional.silentJSONParsing;
      const strictJSONParsing = !silentJSONParsing && JSONRequested;

      try {
        return JSON.parse(data);
      } catch (e) {
        if (strictJSONParsing) {
          if (e.name === 'SyntaxError') {
            throw AxiosError$1.from(e, AxiosError$1.ERR_BAD_RESPONSE, this, null, this.response);
          }
          throw e;
        }
      }
    }

    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,
  maxBodyLength: -1,

  env: {
    FormData: platform.classes.FormData,
    Blob: platform.classes.Blob
  },

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  },

  headers: {
    common: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': undefined
    }
  }
};

utils$1.forEach(['delete', 'get', 'head', 'post', 'put', 'patch'], (method) => {
  defaults.headers[method] = {};
});

'use strict';

// RawAxiosHeaders whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
const ignoreDuplicateOf = utils$1.toObjectSet([
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
]);

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} rawHeaders Headers needing to be parsed
 *
 * @returns {Object} Headers parsed into an object
 */
const parseHeaders = rawHeaders => {
  const parsed = {};
  let key;
  let val;
  let i;

  rawHeaders && rawHeaders.split('\n').forEach(function parser(line) {
    i = line.indexOf(':');
    key = line.substring(0, i).trim().toLowerCase();
    val = line.substring(i + 1).trim();

    if (!key || (parsed[key] && ignoreDuplicateOf[key])) {
      return;
    }

    if (key === 'set-cookie') {
      if (parsed[key]) {
        parsed[key].push(val);
      } else {
        parsed[key] = [val];
      }
    } else {
      parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
    }
  });

  return parsed;
};

'use strict';

const $internals = Symbol('internals');

function normalizeHeader(header) {
  return header && String(header).trim().toLowerCase();
}

function normalizeValue(value) {
  if (value === false || value == null) {
    return value;
  }

  return utils$1.isArray(value) ? value.map(normalizeValue) : String(value);
}

function parseTokens(str) {
  const tokens = Object.create(null);
  const tokensRE = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let match;

  while ((match = tokensRE.exec(str))) {
    tokens[match[1]] = match[2];
  }

  return tokens;
}

const isValidHeaderName = (str) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(str.trim());

function matchHeaderValue(context, value, header, filter, isHeaderNameFilter) {
  if (utils$1.isFunction(filter)) {
    return filter.call(this, value, header);
  }

  if (isHeaderNameFilter) {
    value = header;
  }

  if (!utils$1.isString(value)) return;

  if (utils$1.isString(filter)) {
    return value.indexOf(filter) !== -1;
  }

  if (utils$1.isRegExp(filter)) {
    return filter.test(value);
  }
}

function formatHeader(header) {
  return header.trim()
    .toLowerCase().replace(/([a-z\d])(\w*)/g, (w, char, str) => {
      return char.toUpperCase() + str;
    });
}

function buildAccessors(obj, header) {
  const accessorName = utils$1.toCamelCase(' ' + header);

  ['get', 'set', 'has'].forEach(methodName => {
    Object.defineProperty(obj, methodName + accessorName, {
      value: function(arg1, arg2, arg3) {
        return this[methodName].call(this, header, arg1, arg2, arg3);
      },
      configurable: true
    });
  });
}

let AxiosHeaders$1 = class AxiosHeaders {
  constructor(headers) {
    headers && this.set(headers);
  }

  set(header, valueOrRewrite, rewrite) {
    const self = this;

    function setHeader(_value, _header, _rewrite) {
      const lHeader = normalizeHeader(_header);

      if (!lHeader) {
        throw new Error('header name must be a non-empty string');
      }

      const key = utils$1.findKey(self, lHeader);

      if(!key || self[key] === undefined || _rewrite === true || (_rewrite === undefined && self[key] !== false)) {
        self[key || _header] = normalizeValue(_value);
      }
    }

    const setHeaders = (headers, _rewrite) =>
      utils$1.forEach(headers, (_value, _header) => setHeader(_value, _header, _rewrite));

    if (utils$1.isPlainObject(header) || header instanceof this.constructor) {
      setHeaders(header, valueOrRewrite);
    } else if(utils$1.isString(header) && (header = header.trim()) && !isValidHeaderName(header)) {
      setHeaders(parseHeaders(header), valueOrRewrite);
    } else if (utils$1.isHeaders(header)) {
      for (const [key, value] of header.entries()) {
        setHeader(value, key, rewrite);
      }
    } else {
      header != null && setHeader(valueOrRewrite, header, rewrite);
    }

    return this;
  }

  get(header, parser) {
    header = normalizeHeader(header);

    if (header) {
      const key = utils$1.findKey(this, header);

      if (key) {
        const value = this[key];

        if (!parser) {
          return value;
        }

        if (parser === true) {
          return parseTokens(value);
        }

        if (utils$1.isFunction(parser)) {
          return parser.call(this, value, key);
        }

        if (utils$1.isRegExp(parser)) {
          return parser.exec(value);
        }

        throw new TypeError('parser must be boolean|regexp|function');
      }
    }
  }

  has(header, matcher) {
    header = normalizeHeader(header);

    if (header) {
      const key = utils$1.findKey(this, header);

      return !!(key && this[key] !== undefined && (!matcher || matchHeaderValue(this, this[key], key, matcher)));
    }

    return false;
  }

  delete(header, matcher) {
    const self = this;
    let deleted = false;

    function deleteHeader(_header) {
      _header = normalizeHeader(_header);

      if (_header) {
        const key = utils$1.findKey(self, _header);

        if (key && (!matcher || matchHeaderValue(self, self[key], key, matcher))) {
          delete self[key];

          deleted = true;
        }
      }
    }

    if (utils$1.isArray(header)) {
      header.forEach(deleteHeader);
    } else {
      deleteHeader(header);
    }

    return deleted;
  }

  clear(matcher) {
    const keys = Object.keys(this);
    let i = keys.length;
    let deleted = false;

    while (i--) {
      const key = keys[i];
      if(!matcher || matchHeaderValue(this, this[key], key, matcher, true)) {
        delete this[key];
        deleted = true;
      }
    }

    return deleted;
  }

  normalize(format) {
    const self = this;
    const headers = {};

    utils$1.forEach(this, (value, header) => {
      const key = utils$1.findKey(headers, header);

      if (key) {
        self[key] = normalizeValue(value);
        delete self[header];
        return;
      }

      const normalized = format ? formatHeader(header) : String(header).trim();

      if (normalized !== header) {
        delete self[header];
      }

      self[normalized] = normalizeValue(value);

      headers[normalized] = true;
    });

    return this;
  }

  concat(...targets) {
    return this.constructor.concat(this, ...targets);
  }

  toJSON(asStrings) {
    const obj = Object.create(null);

    utils$1.forEach(this, (value, header) => {
      value != null && value !== false && (obj[header] = asStrings && utils$1.isArray(value) ? value.join(', ') : value);
    });

    return obj;
  }

  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }

  toString() {
    return Object.entries(this.toJSON()).map(([header, value]) => header + ': ' + value).join('\n');
  }

  get [Symbol.toStringTag]() {
    return 'AxiosHeaders';
  }

  static from(thing) {
    return thing instanceof this ? thing : new this(thing);
  }

  static concat(first, ...targets) {
    const computed = new this(first);

    targets.forEach((target) => computed.set(target));

    return computed;
  }

  static accessor(header) {
    const internals = this[$internals] = (this[$internals] = {
      accessors: {}
    });

    const accessors = internals.accessors;
    const prototype = this.prototype;

    function defineAccessor(_header) {
      const lHeader = normalizeHeader(_header);

      if (!accessors[lHeader]) {
        buildAccessors(prototype, _header);
        accessors[lHeader] = true;
      }
    }

    utils$1.isArray(header) ? header.forEach(defineAccessor) : defineAccessor(header);

    return this;
  }
};

AxiosHeaders$1.accessor(['Content-Type', 'Content-Length', 'Accept', 'Accept-Encoding', 'User-Agent', 'Authorization']);

// reserved names hotfix
utils$1.reduceDescriptors(AxiosHeaders$1.prototype, ({value}, key) => {
  let mapped = key[0].toUpperCase() + key.slice(1); // map `set` => `Set`
  return {
    get: () => value,
    set(headerValue) {
      this[mapped] = headerValue;
    }
  }
});

utils$1.freezeMethods(AxiosHeaders$1);

'use strict';

/**
 * Transform the data for a request or a response
 *
 * @param {Array|Function} fns A single function or Array of functions
 * @param {?Object} response The response object
 *
 * @returns {*} The resulting transformed data
 */
function transformData(fns, response) {
  const config = this || defaults;
  const context = response || config;
  const headers = AxiosHeaders$1.from(context.headers);
  let data = context.data;

  utils$1.forEach(fns, function transform(fn) {
    data = fn.call(config, data, headers.normalize(), response ? response.status : undefined);
  });

  headers.normalize();

  return data;
}

'use strict';

function isCancel$1(value) {
  return !!(value && value.__CANCEL__);
}

'use strict';

/**
 * A `CanceledError` is an object that is thrown when an operation is canceled.
 *
 * @param {string=} message The message.
 * @param {Object=} config The config.
 * @param {Object=} request The request.
 *
 * @returns {CanceledError} The created error.
 */
function CanceledError$1(message, config, request) {
  // eslint-disable-next-line no-eq-null,eqeqeq
  AxiosError$1.call(this, message == null ? 'canceled' : message, AxiosError$1.ERR_CANCELED, config, request);
  this.name = 'CanceledError';
}

utils$1.inherits(CanceledError$1, AxiosError$1, {
  __CANCEL__: true
});

'use strict';

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 *
 * @returns {object} The response.
 */
function settle(resolve, reject, response) {
  const validateStatus = response.config.validateStatus;
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(new AxiosError$1(
      'Request failed with status code ' + response.status,
      [AxiosError$1.ERR_BAD_REQUEST, AxiosError$1.ERR_BAD_RESPONSE][Math.floor(response.status / 100) - 4],
      response.config,
      response.request,
      response
    ));
  }
}

'use strict';

function parseProtocol(url) {
  const match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
  return match && match[1] || '';
}

'use strict';

/**
 * Calculate data maxRate
 * @param {Number} [samplesCount= 10]
 * @param {Number} [min= 1000]
 * @returns {Function}
 */
function speedometer(samplesCount, min) {
  samplesCount = samplesCount || 10;
  const bytes = new Array(samplesCount);
  const timestamps = new Array(samplesCount);
  let head = 0;
  let tail = 0;
  let firstSampleTS;

  min = min !== undefined ? min : 1000;

  return function push(chunkLength) {
    const now = Date.now();

    const startedAt = timestamps[tail];

    if (!firstSampleTS) {
      firstSampleTS = now;
    }

    bytes[head] = chunkLength;
    timestamps[head] = now;

    let i = tail;
    let bytesCount = 0;

    while (i !== head) {
      bytesCount += bytes[i++];
      i = i % samplesCount;
    }

    head = (head + 1) % samplesCount;

    if (head === tail) {
      tail = (tail + 1) % samplesCount;
    }

    if (now - firstSampleTS < min) {
      return;
    }

    const passed = startedAt && now - startedAt;

    return passed ? Math.round(bytesCount * 1000 / passed) : undefined;
  };
}

/**
 * Throttle decorator
 * @param {Function} fn
 * @param {Number} freq
 * @return {Function}
 */
function throttle$1(fn, freq) {
  let timestamp = 0;
  let threshold = 1000 / freq;
  let lastArgs;
  let timer;

  const invoke = (args, now = Date.now()) => {
    timestamp = now;
    lastArgs = null;
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    fn.apply(null, args);
  };

  const throttled = (...args) => {
    const now = Date.now();
    const passed = now - timestamp;
    if ( passed >= threshold) {
      invoke(args, now);
    } else {
      lastArgs = args;
      if (!timer) {
        timer = setTimeout(() => {
          timer = null;
          invoke(lastArgs);
        }, threshold - passed);
      }
    }
  };

  const flush = () => lastArgs && invoke(lastArgs);

  return [throttled, flush];
}

const progressEventReducer = (listener, isDownloadStream, freq = 3) => {
  let bytesNotified = 0;
  const _speedometer = speedometer(50, 250);

  return throttle$1(e => {
    const loaded = e.loaded;
    const total = e.lengthComputable ? e.total : undefined;
    const progressBytes = loaded - bytesNotified;
    const rate = _speedometer(progressBytes);
    const inRange = loaded <= total;

    bytesNotified = loaded;

    const data = {
      loaded,
      total,
      progress: total ? (loaded / total) : undefined,
      bytes: progressBytes,
      rate: rate ? rate : undefined,
      estimated: rate && total && inRange ? (total - loaded) / rate : undefined,
      event: e,
      lengthComputable: total != null,
      [isDownloadStream ? 'download' : 'upload']: true
    };

    listener(data);
  }, freq);
};

const progressEventDecorator = (total, throttled) => {
  const lengthComputable = total != null;

  return [(loaded) => throttled[0]({
    lengthComputable,
    total,
    loaded
  }), throttled[1]];
};

const asyncDecorator = (fn) => (...args) => utils$1.asap(() => fn(...args));

const isURLSameOrigin = platform.hasStandardBrowserEnv ? ((origin, isMSIE) => (url) => {
  url = new URL(url, platform.origin);

  return (
    origin.protocol === url.protocol &&
    origin.host === url.host &&
    (isMSIE || origin.port === url.port)
  );
})(
  new URL(platform.origin),
  platform.navigator && /(msie|trident)/i.test(platform.navigator.userAgent)
) : () => true;

const cookies = platform.hasStandardBrowserEnv ?

  // Standard browser envs support document.cookie
  {
    write(name, value, expires, path, domain, secure) {
      const cookie = [name + '=' + encodeURIComponent(value)];

      utils$1.isNumber(expires) && cookie.push('expires=' + new Date(expires).toGMTString());

      utils$1.isString(path) && cookie.push('path=' + path);

      utils$1.isString(domain) && cookie.push('domain=' + domain);

      secure === true && cookie.push('secure');

      document.cookie = cookie.join('; ');
    },

    read(name) {
      const match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
      return (match ? decodeURIComponent(match[3]) : null);
    },

    remove(name) {
      this.write(name, '', Date.now() - 86400000);
    }
  }

  :

  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {},
    read() {
      return null;
    },
    remove() {}
  };

'use strict';

/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 *
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
}

'use strict';

/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 *
 * @returns {string} The combined URL
 */
function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/?\/$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
}

'use strict';

/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 *
 * @returns {string} The combined full path
 */
function buildFullPath(baseURL, requestedURL, allowAbsoluteUrls) {
  let isRelativeUrl = !isAbsoluteURL(requestedURL);
  if (baseURL && (isRelativeUrl || allowAbsoluteUrls == false)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
}

'use strict';

const headersToObject = (thing) => thing instanceof AxiosHeaders$1 ? { ...thing } : thing;

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 *
 * @returns {Object} New object resulting from merging config2 to config1
 */
function mergeConfig$1(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  const config = {};

  function getMergedValue(target, source, prop, caseless) {
    if (utils$1.isPlainObject(target) && utils$1.isPlainObject(source)) {
      return utils$1.merge.call({caseless}, target, source);
    } else if (utils$1.isPlainObject(source)) {
      return utils$1.merge({}, source);
    } else if (utils$1.isArray(source)) {
      return source.slice();
    }
    return source;
  }

  // eslint-disable-next-line consistent-return
  function mergeDeepProperties(a, b, prop , caseless) {
    if (!utils$1.isUndefined(b)) {
      return getMergedValue(a, b, prop , caseless);
    } else if (!utils$1.isUndefined(a)) {
      return getMergedValue(undefined, a, prop , caseless);
    }
  }

  // eslint-disable-next-line consistent-return
  function valueFromConfig2(a, b) {
    if (!utils$1.isUndefined(b)) {
      return getMergedValue(undefined, b);
    }
  }

  // eslint-disable-next-line consistent-return
  function defaultToConfig2(a, b) {
    if (!utils$1.isUndefined(b)) {
      return getMergedValue(undefined, b);
    } else if (!utils$1.isUndefined(a)) {
      return getMergedValue(undefined, a);
    }
  }

  // eslint-disable-next-line consistent-return
  function mergeDirectKeys(a, b, prop) {
    if (prop in config2) {
      return getMergedValue(a, b);
    } else if (prop in config1) {
      return getMergedValue(undefined, a);
    }
  }

  const mergeMap = {
    url: valueFromConfig2,
    method: valueFromConfig2,
    data: valueFromConfig2,
    baseURL: defaultToConfig2,
    transformRequest: defaultToConfig2,
    transformResponse: defaultToConfig2,
    paramsSerializer: defaultToConfig2,
    timeout: defaultToConfig2,
    timeoutMessage: defaultToConfig2,
    withCredentials: defaultToConfig2,
    withXSRFToken: defaultToConfig2,
    adapter: defaultToConfig2,
    responseType: defaultToConfig2,
    xsrfCookieName: defaultToConfig2,
    xsrfHeaderName: defaultToConfig2,
    onUploadProgress: defaultToConfig2,
    onDownloadProgress: defaultToConfig2,
    decompress: defaultToConfig2,
    maxContentLength: defaultToConfig2,
    maxBodyLength: defaultToConfig2,
    beforeRedirect: defaultToConfig2,
    transport: defaultToConfig2,
    httpAgent: defaultToConfig2,
    httpsAgent: defaultToConfig2,
    cancelToken: defaultToConfig2,
    socketPath: defaultToConfig2,
    responseEncoding: defaultToConfig2,
    validateStatus: mergeDirectKeys,
    headers: (a, b , prop) => mergeDeepProperties(headersToObject(a), headersToObject(b),prop, true)
  };

  utils$1.forEach(Object.keys(Object.assign({}, config1, config2)), function computeConfigValue(prop) {
    const merge = mergeMap[prop] || mergeDeepProperties;
    const configValue = merge(config1[prop], config2[prop], prop);
    (utils$1.isUndefined(configValue) && merge !== mergeDirectKeys) || (config[prop] = configValue);
  });

  return config;
}

const resolveConfig = (config) => {
  const newConfig = mergeConfig$1({}, config);

  let {data, withXSRFToken, xsrfHeaderName, xsrfCookieName, headers, auth} = newConfig;

  newConfig.headers = headers = AxiosHeaders$1.from(headers);

  newConfig.url = buildURL(buildFullPath(newConfig.baseURL, newConfig.url, newConfig.allowAbsoluteUrls), config.params, config.paramsSerializer);

  // HTTP basic authentication
  if (auth) {
    headers.set('Authorization', 'Basic ' +
      btoa((auth.username || '') + ':' + (auth.password ? unescape(encodeURIComponent(auth.password)) : ''))
    );
  }

  let contentType;

  if (utils$1.isFormData(data)) {
    if (platform.hasStandardBrowserEnv || platform.hasStandardBrowserWebWorkerEnv) {
      headers.setContentType(undefined); // Let the browser set it
    } else if ((contentType = headers.getContentType()) !== false) {
      // fix semicolon duplication issue for ReactNative FormData implementation
      const [type, ...tokens] = contentType ? contentType.split(';').map(token => token.trim()).filter(Boolean) : [];
      headers.setContentType([type || 'multipart/form-data', ...tokens].join('; '));
    }
  }

  // Add xsrf header
  // This is only done if running in a standard browser environment.
  // Specifically not if we're in a web worker, or react-native.

  if (platform.hasStandardBrowserEnv) {
    withXSRFToken && utils$1.isFunction(withXSRFToken) && (withXSRFToken = withXSRFToken(newConfig));

    if (withXSRFToken || (withXSRFToken !== false && isURLSameOrigin(newConfig.url))) {
      // Add xsrf header
      const xsrfValue = xsrfHeaderName && xsrfCookieName && cookies.read(xsrfCookieName);

      if (xsrfValue) {
        headers.set(xsrfHeaderName, xsrfValue);
      }
    }
  }

  return newConfig;
};

const isXHRAdapterSupported = typeof XMLHttpRequest !== 'undefined';

const xhrAdapter = isXHRAdapterSupported && function (config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    const _config = resolveConfig(config);
    let requestData = _config.data;
    const requestHeaders = AxiosHeaders$1.from(_config.headers).normalize();
    let {responseType, onUploadProgress, onDownloadProgress} = _config;
    let onCanceled;
    let uploadThrottled, downloadThrottled;
    let flushUpload, flushDownload;

    function done() {
      flushUpload && flushUpload(); // flush events
      flushDownload && flushDownload(); // flush events

      _config.cancelToken && _config.cancelToken.unsubscribe(onCanceled);

      _config.signal && _config.signal.removeEventListener('abort', onCanceled);
    }

    let request = new XMLHttpRequest();

    request.open(_config.method.toUpperCase(), _config.url, true);

    // Set the request timeout in MS
    request.timeout = _config.timeout;

    function onloadend() {
      if (!request) {
        return;
      }
      // Prepare the response
      const responseHeaders = AxiosHeaders$1.from(
        'getAllResponseHeaders' in request && request.getAllResponseHeaders()
      );
      const responseData = !responseType || responseType === 'text' || responseType === 'json' ?
        request.responseText : request.response;
      const response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config,
        request
      };

      settle(function _resolve(value) {
        resolve(value);
        done();
      }, function _reject(err) {
        reject(err);
        done();
      }, response);

      // Clean up request
      request = null;
    }

    if ('onloadend' in request) {
      // Use onloadend if available
      request.onloadend = onloadend;
    } else {
      // Listen for ready state to emulate onloadend
      request.onreadystatechange = function handleLoad() {
        if (!request || request.readyState !== 4) {
          return;
        }

        // The request errored out and we didn't get a response, this will be
        // handled by onerror instead
        // With one exception: request that using file: protocol, most browsers
        // will return status as 0 even though it's a successful request
        if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
          return;
        }
        // readystate handler is calling before onerror or ontimeout handlers,
        // so we should call onloadend on the next 'tick'
        setTimeout(onloadend);
      };
    }

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(new AxiosError$1('Request aborted', AxiosError$1.ECONNABORTED, config, request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(new AxiosError$1('Network Error', AxiosError$1.ERR_NETWORK, config, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      let timeoutErrorMessage = _config.timeout ? 'timeout of ' + _config.timeout + 'ms exceeded' : 'timeout exceeded';
      const transitional = _config.transitional || transitionalDefaults;
      if (_config.timeoutErrorMessage) {
        timeoutErrorMessage = _config.timeoutErrorMessage;
      }
      reject(new AxiosError$1(
        timeoutErrorMessage,
        transitional.clarifyTimeoutError ? AxiosError$1.ETIMEDOUT : AxiosError$1.ECONNABORTED,
        config,
        request));

      // Clean up request
      request = null;
    };

    // Remove Content-Type if data is undefined
    requestData === undefined && requestHeaders.setContentType(null);

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils$1.forEach(requestHeaders.toJSON(), function setRequestHeader(val, key) {
        request.setRequestHeader(key, val);
      });
    }

    // Add withCredentials to request if needed
    if (!utils$1.isUndefined(_config.withCredentials)) {
      request.withCredentials = !!_config.withCredentials;
    }

    // Add responseType to request if needed
    if (responseType && responseType !== 'json') {
      request.responseType = _config.responseType;
    }

    // Handle progress if needed
    if (onDownloadProgress) {
      ([downloadThrottled, flushDownload] = progressEventReducer(onDownloadProgress, true));
      request.addEventListener('progress', downloadThrottled);
    }

    // Not all browsers support upload events
    if (onUploadProgress && request.upload) {
      ([uploadThrottled, flushUpload] = progressEventReducer(onUploadProgress));

      request.upload.addEventListener('progress', uploadThrottled);

      request.upload.addEventListener('loadend', flushUpload);
    }

    if (_config.cancelToken || _config.signal) {
      // Handle cancellation
      // eslint-disable-next-line func-names
      onCanceled = cancel => {
        if (!request) {
          return;
        }
        reject(!cancel || cancel.type ? new CanceledError$1(null, config, request) : cancel);
        request.abort();
        request = null;
      };

      _config.cancelToken && _config.cancelToken.subscribe(onCanceled);
      if (_config.signal) {
        _config.signal.aborted ? onCanceled() : _config.signal.addEventListener('abort', onCanceled);
      }
    }

    const protocol = parseProtocol(_config.url);

    if (protocol && platform.protocols.indexOf(protocol) === -1) {
      reject(new AxiosError$1('Unsupported protocol ' + protocol + ':', AxiosError$1.ERR_BAD_REQUEST, config));
      return;
    }


    // Send the request
    request.send(requestData || null);
  });
};

const composeSignals = (signals, timeout) => {
  const {length} = (signals = signals ? signals.filter(Boolean) : []);

  if (timeout || length) {
    let controller = new AbortController();

    let aborted;

    const onabort = function (reason) {
      if (!aborted) {
        aborted = true;
        unsubscribe();
        const err = reason instanceof Error ? reason : this.reason;
        controller.abort(err instanceof AxiosError$1 ? err : new CanceledError$1(err instanceof Error ? err.message : err));
      }
    };

    let timer = timeout && setTimeout(() => {
      timer = null;
      onabort(new AxiosError$1(`timeout ${timeout} of ms exceeded`, AxiosError$1.ETIMEDOUT));
    }, timeout);

    const unsubscribe = () => {
      if (signals) {
        timer && clearTimeout(timer);
        timer = null;
        signals.forEach(signal => {
          signal.unsubscribe ? signal.unsubscribe(onabort) : signal.removeEventListener('abort', onabort);
        });
        signals = null;
      }
    };

    signals.forEach((signal) => signal.addEventListener('abort', onabort));

    const {signal} = controller;

    signal.unsubscribe = () => utils$1.asap(unsubscribe);

    return signal;
  }
};

const streamChunk = function* (chunk, chunkSize) {
  let len = chunk.byteLength;

  if (!chunkSize || len < chunkSize) {
    yield chunk;
    return;
  }

  let pos = 0;
  let end;

  while (pos < len) {
    end = pos + chunkSize;
    yield chunk.slice(pos, end);
    pos = end;
  }
};

const readBytes = async function* (iterable, chunkSize) {
  for await (const chunk of readStream(iterable)) {
    yield* streamChunk(chunk, chunkSize);
  }
};

const readStream = async function* (stream) {
  if (stream[Symbol.asyncIterator]) {
    yield* stream;
    return;
  }

  const reader = stream.getReader();
  try {
    for (;;) {
      const {done, value} = await reader.read();
      if (done) {
        break;
      }
      yield value;
    }
  } finally {
    await reader.cancel();
  }
};

const trackStream = (stream, chunkSize, onProgress, onFinish) => {
  const iterator = readBytes(stream, chunkSize);

  let bytes = 0;
  let done;
  let _onFinish = (e) => {
    if (!done) {
      done = true;
      onFinish && onFinish(e);
    }
  };

  return new ReadableStream({
    async pull(controller) {
      try {
        const {done, value} = await iterator.next();

        if (done) {
         _onFinish();
          controller.close();
          return;
        }

        let len = value.byteLength;
        if (onProgress) {
          let loadedBytes = bytes += len;
          onProgress(loadedBytes);
        }
        controller.enqueue(new Uint8Array(value));
      } catch (err) {
        _onFinish(err);
        throw err;
      }
    },
    cancel(reason) {
      _onFinish(reason);
      return iterator.return();
    }
  }, {
    highWaterMark: 2
  })
};

const isFetchSupported = typeof fetch === 'function' && typeof Request === 'function' && typeof Response === 'function';
const isReadableStreamSupported = isFetchSupported && typeof ReadableStream === 'function';

// used only inside the fetch adapter
const encodeText = isFetchSupported && (typeof TextEncoder === 'function' ?
    ((encoder) => (str) => encoder.encode(str))(new TextEncoder()) :
    async (str) => new Uint8Array(await new Response(str).arrayBuffer())
);

const test = (fn, ...args) => {
  try {
    return !!fn(...args);
  } catch (e) {
    return false
  }
};

const supportsRequestStream = isReadableStreamSupported && test(() => {
  let duplexAccessed = false;

  const hasContentType = new Request(platform.origin, {
    body: new ReadableStream(),
    method: 'POST',
    get duplex() {
      duplexAccessed = true;
      return 'half';
    },
  }).headers.has('Content-Type');

  return duplexAccessed && !hasContentType;
});

const DEFAULT_CHUNK_SIZE = 64 * 1024;

const supportsResponseStream = isReadableStreamSupported &&
  test(() => utils$1.isReadableStream(new Response('').body));


const resolvers = {
  stream: supportsResponseStream && ((res) => res.body)
};

isFetchSupported && (((res) => {
  ['text', 'arrayBuffer', 'blob', 'formData', 'stream'].forEach(type => {
    !resolvers[type] && (resolvers[type] = utils$1.isFunction(res[type]) ? (res) => res[type]() :
      (_, config) => {
        throw new AxiosError$1(`Response type '${type}' is not supported`, AxiosError$1.ERR_NOT_SUPPORT, config);
      });
  });
})(new Response));

const getBodyLength = async (body) => {
  if (body == null) {
    return 0;
  }

  if(utils$1.isBlob(body)) {
    return body.size;
  }

  if(utils$1.isSpecCompliantForm(body)) {
    const _request = new Request(platform.origin, {
      method: 'POST',
      body,
    });
    return (await _request.arrayBuffer()).byteLength;
  }

  if(utils$1.isArrayBufferView(body) || utils$1.isArrayBuffer(body)) {
    return body.byteLength;
  }

  if(utils$1.isURLSearchParams(body)) {
    body = body + '';
  }

  if(utils$1.isString(body)) {
    return (await encodeText(body)).byteLength;
  }
};

const resolveBodyLength = async (headers, body) => {
  const length = utils$1.toFiniteNumber(headers.getContentLength());

  return length == null ? getBodyLength(body) : length;
};

const fetchAdapter = isFetchSupported && (async (config) => {
  let {
    url,
    method,
    data,
    signal,
    cancelToken,
    timeout,
    onDownloadProgress,
    onUploadProgress,
    responseType,
    headers,
    withCredentials = 'same-origin',
    fetchOptions
  } = resolveConfig(config);

  responseType = responseType ? (responseType + '').toLowerCase() : 'text';

  let composedSignal = composeSignals([signal, cancelToken && cancelToken.toAbortSignal()], timeout);

  let request;

  const unsubscribe = composedSignal && composedSignal.unsubscribe && (() => {
      composedSignal.unsubscribe();
  });

  let requestContentLength;

  try {
    if (
      onUploadProgress && supportsRequestStream && method !== 'get' && method !== 'head' &&
      (requestContentLength = await resolveBodyLength(headers, data)) !== 0
    ) {
      let _request = new Request(url, {
        method: 'POST',
        body: data,
        duplex: "half"
      });

      let contentTypeHeader;

      if (utils$1.isFormData(data) && (contentTypeHeader = _request.headers.get('content-type'))) {
        headers.setContentType(contentTypeHeader);
      }

      if (_request.body) {
        const [onProgress, flush] = progressEventDecorator(
          requestContentLength,
          progressEventReducer(asyncDecorator(onUploadProgress))
        );

        data = trackStream(_request.body, DEFAULT_CHUNK_SIZE, onProgress, flush);
      }
    }

    if (!utils$1.isString(withCredentials)) {
      withCredentials = withCredentials ? 'include' : 'omit';
    }

    // Cloudflare Workers throws when credentials are defined
    // see https://github.com/cloudflare/workerd/issues/902
    const isCredentialsSupported = "credentials" in Request.prototype;
    request = new Request(url, {
      ...fetchOptions,
      signal: composedSignal,
      method: method.toUpperCase(),
      headers: headers.normalize().toJSON(),
      body: data,
      duplex: "half",
      credentials: isCredentialsSupported ? withCredentials : undefined
    });

    let response = await fetch(request);

    const isStreamResponse = supportsResponseStream && (responseType === 'stream' || responseType === 'response');

    if (supportsResponseStream && (onDownloadProgress || (isStreamResponse && unsubscribe))) {
      const options = {};

      ['status', 'statusText', 'headers'].forEach(prop => {
        options[prop] = response[prop];
      });

      const responseContentLength = utils$1.toFiniteNumber(response.headers.get('content-length'));

      const [onProgress, flush] = onDownloadProgress && progressEventDecorator(
        responseContentLength,
        progressEventReducer(asyncDecorator(onDownloadProgress), true)
      ) || [];

      response = new Response(
        trackStream(response.body, DEFAULT_CHUNK_SIZE, onProgress, () => {
          flush && flush();
          unsubscribe && unsubscribe();
        }),
        options
      );
    }

    responseType = responseType || 'text';

    let responseData = await resolvers[utils$1.findKey(resolvers, responseType) || 'text'](response, config);

    !isStreamResponse && unsubscribe && unsubscribe();

    return await new Promise((resolve, reject) => {
      settle(resolve, reject, {
        data: responseData,
        headers: AxiosHeaders$1.from(response.headers),
        status: response.status,
        statusText: response.statusText,
        config,
        request
      });
    })
  } catch (err) {
    unsubscribe && unsubscribe();

    if (err && err.name === 'TypeError' && /fetch/i.test(err.message)) {
      throw Object.assign(
        new AxiosError$1('Network Error', AxiosError$1.ERR_NETWORK, config, request),
        {
          cause: err.cause || err
        }
      )
    }

    throw AxiosError$1.from(err, err && err.code, config, request);
  }
});

const knownAdapters = {
  http: httpAdapter,
  xhr: xhrAdapter,
  fetch: fetchAdapter
};

utils$1.forEach(knownAdapters, (fn, value) => {
  if (fn) {
    try {
      Object.defineProperty(fn, 'name', {value});
    } catch (e) {
      // eslint-disable-next-line no-empty
    }
    Object.defineProperty(fn, 'adapterName', {value});
  }
});

const renderReason = (reason) => `- ${reason}`;

const isResolvedHandle = (adapter) => utils$1.isFunction(adapter) || adapter === null || adapter === false;

const adapters = {
  getAdapter: (adapters) => {
    adapters = utils$1.isArray(adapters) ? adapters : [adapters];

    const {length} = adapters;
    let nameOrAdapter;
    let adapter;

    const rejectedReasons = {};

    for (let i = 0; i < length; i++) {
      nameOrAdapter = adapters[i];
      let id;

      adapter = nameOrAdapter;

      if (!isResolvedHandle(nameOrAdapter)) {
        adapter = knownAdapters[(id = String(nameOrAdapter)).toLowerCase()];

        if (adapter === undefined) {
          throw new AxiosError$1(`Unknown adapter '${id}'`);
        }
      }

      if (adapter) {
        break;
      }

      rejectedReasons[id || '#' + i] = adapter;
    }

    if (!adapter) {

      const reasons = Object.entries(rejectedReasons)
        .map(([id, state]) => `adapter ${id} ` +
          (state === false ? 'is not supported by the environment' : 'is not available in the build')
        );

      let s = length ?
        (reasons.length > 1 ? 'since :\n' + reasons.map(renderReason).join('\n') : ' ' + renderReason(reasons[0])) :
        'as no adapter specified';

      throw new AxiosError$1(
        `There is no suitable adapter to dispatch the request ` + s,
        'ERR_NOT_SUPPORT'
      );
    }

    return adapter;
  },
  adapters: knownAdapters
};

'use strict';

/**
 * Throws a `CanceledError` if cancellation has been requested.
 *
 * @param {Object} config The config that is to be used for the request
 *
 * @returns {void}
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }

  if (config.signal && config.signal.aborted) {
    throw new CanceledError$1(null, config);
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 *
 * @returns {Promise} The Promise to be fulfilled
 */
function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  config.headers = AxiosHeaders$1.from(config.headers);

  // Transform request data
  config.data = transformData.call(
    config,
    config.transformRequest
  );

  if (['post', 'put', 'patch'].indexOf(config.method) !== -1) {
    config.headers.setContentType('application/x-www-form-urlencoded', false);
  }

  const adapter = adapters.getAdapter(config.adapter || defaults.adapter);

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData.call(
      config,
      config.transformResponse,
      response
    );

    response.headers = AxiosHeaders$1.from(response.headers);

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel$1(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData.call(
          config,
          config.transformResponse,
          reason.response
        );
        reason.response.headers = AxiosHeaders$1.from(reason.response.headers);
      }
    }

    return Promise.reject(reason);
  });
}

const VERSION$1 = "1.8.4";

'use strict';

const validators$1 = {};

// eslint-disable-next-line func-names
['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach((type, i) => {
  validators$1[type] = function validator(thing) {
    return typeof thing === type || 'a' + (i < 1 ? 'n ' : ' ') + type;
  };
});

const deprecatedWarnings = {};

/**
 * Transitional option validator
 *
 * @param {function|boolean?} validator - set to false if the transitional option has been removed
 * @param {string?} version - deprecated version / removed since version
 * @param {string?} message - some message with additional info
 *
 * @returns {function}
 */
validators$1.transitional = function transitional(validator, version, message) {
  function formatMessage(opt, desc) {
    return '[Axios v' + VERSION$1 + '] Transitional option \'' + opt + '\'' + desc + (message ? '. ' + message : '');
  }

  // eslint-disable-next-line func-names
  return (value, opt, opts) => {
    if (validator === false) {
      throw new AxiosError$1(
        formatMessage(opt, ' has been removed' + (version ? ' in ' + version : '')),
        AxiosError$1.ERR_DEPRECATED
      );
    }

    if (version && !deprecatedWarnings[opt]) {
      deprecatedWarnings[opt] = true;
      // eslint-disable-next-line no-console
      console.warn(
        formatMessage(
          opt,
          ' has been deprecated since v' + version + ' and will be removed in the near future'
        )
      );
    }

    return validator ? validator(value, opt, opts) : true;
  };
};

validators$1.spelling = function spelling(correctSpelling) {
  return (value, opt) => {
    // eslint-disable-next-line no-console
    console.warn(`${opt} is likely a misspelling of ${correctSpelling}`);
    return true;
  }
};

/**
 * Assert object's properties type
 *
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 *
 * @returns {object}
 */

function assertOptions(options, schema, allowUnknown) {
  if (typeof options !== 'object') {
    throw new AxiosError$1('options must be an object', AxiosError$1.ERR_BAD_OPTION_VALUE);
  }
  const keys = Object.keys(options);
  let i = keys.length;
  while (i-- > 0) {
    const opt = keys[i];
    const validator = schema[opt];
    if (validator) {
      const value = options[opt];
      const result = value === undefined || validator(value, opt, options);
      if (result !== true) {
        throw new AxiosError$1('option ' + opt + ' must be ' + result, AxiosError$1.ERR_BAD_OPTION_VALUE);
      }
      continue;
    }
    if (allowUnknown !== true) {
      throw new AxiosError$1('Unknown option ' + opt, AxiosError$1.ERR_BAD_OPTION);
    }
  }
}

const validator = {
  assertOptions,
  validators: validators$1
};

'use strict';

const validators = validator.validators;

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 *
 * @return {Axios} A new instance of Axios
 */
let Axios$1 = class Axios {
  constructor(instanceConfig) {
    this.defaults = instanceConfig;
    this.interceptors = {
      request: new InterceptorManager(),
      response: new InterceptorManager()
    };
  }

  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(configOrUrl, config) {
    try {
      return await this._request(configOrUrl, config);
    } catch (err) {
      if (err instanceof Error) {
        let dummy = {};

        Error.captureStackTrace ? Error.captureStackTrace(dummy) : (dummy = new Error());

        // slice off the Error: ... line
        const stack = dummy.stack ? dummy.stack.replace(/^.+\n/, '') : '';
        try {
          if (!err.stack) {
            err.stack = stack;
            // match without the 2 top stack lines
          } else if (stack && !String(err.stack).endsWith(stack.replace(/^.+\n.+\n/, ''))) {
            err.stack += '\n' + stack;
          }
        } catch (e) {
          // ignore the case where "stack" is an un-writable property
        }
      }

      throw err;
    }
  }

  _request(configOrUrl, config) {
    /*eslint no-param-reassign:0*/
    // Allow for axios('example/url'[, config]) a la fetch API
    if (typeof configOrUrl === 'string') {
      config = config || {};
      config.url = configOrUrl;
    } else {
      config = configOrUrl || {};
    }

    config = mergeConfig$1(this.defaults, config);

    const {transitional, paramsSerializer, headers} = config;

    if (transitional !== undefined) {
      validator.assertOptions(transitional, {
        silentJSONParsing: validators.transitional(validators.boolean),
        forcedJSONParsing: validators.transitional(validators.boolean),
        clarifyTimeoutError: validators.transitional(validators.boolean)
      }, false);
    }

    if (paramsSerializer != null) {
      if (utils$1.isFunction(paramsSerializer)) {
        config.paramsSerializer = {
          serialize: paramsSerializer
        };
      } else {
        validator.assertOptions(paramsSerializer, {
          encode: validators.function,
          serialize: validators.function
        }, true);
      }
    }

    // Set config.allowAbsoluteUrls
    if (config.allowAbsoluteUrls !== undefined) {
      // do nothing
    } else if (this.defaults.allowAbsoluteUrls !== undefined) {
      config.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls;
    } else {
      config.allowAbsoluteUrls = true;
    }

    validator.assertOptions(config, {
      baseUrl: validators.spelling('baseURL'),
      withXsrfToken: validators.spelling('withXSRFToken')
    }, true);

    // Set config.method
    config.method = (config.method || this.defaults.method || 'get').toLowerCase();

    // Flatten headers
    let contextHeaders = headers && utils$1.merge(
      headers.common,
      headers[config.method]
    );

    headers && utils$1.forEach(
      ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
      (method) => {
        delete headers[method];
      }
    );

    config.headers = AxiosHeaders$1.concat(contextHeaders, headers);

    // filter out skipped interceptors
    const requestInterceptorChain = [];
    let synchronousRequestInterceptors = true;
    this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
      if (typeof interceptor.runWhen === 'function' && interceptor.runWhen(config) === false) {
        return;
      }

      synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;

      requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
    });

    const responseInterceptorChain = [];
    this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
      responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
    });

    let promise;
    let i = 0;
    let len;

    if (!synchronousRequestInterceptors) {
      const chain = [dispatchRequest.bind(this), undefined];
      chain.unshift.apply(chain, requestInterceptorChain);
      chain.push.apply(chain, responseInterceptorChain);
      len = chain.length;

      promise = Promise.resolve(config);

      while (i < len) {
        promise = promise.then(chain[i++], chain[i++]);
      }

      return promise;
    }

    len = requestInterceptorChain.length;

    let newConfig = config;

    i = 0;

    while (i < len) {
      const onFulfilled = requestInterceptorChain[i++];
      const onRejected = requestInterceptorChain[i++];
      try {
        newConfig = onFulfilled(newConfig);
      } catch (error) {
        onRejected.call(this, error);
        break;
      }
    }

    try {
      promise = dispatchRequest.call(this, newConfig);
    } catch (error) {
      return Promise.reject(error);
    }

    i = 0;
    len = responseInterceptorChain.length;

    while (i < len) {
      promise = promise.then(responseInterceptorChain[i++], responseInterceptorChain[i++]);
    }

    return promise;
  }

  getUri(config) {
    config = mergeConfig$1(this.defaults, config);
    const fullPath = buildFullPath(config.baseURL, config.url, config.allowAbsoluteUrls);
    return buildURL(fullPath, config.params, config.paramsSerializer);
  }
};

// Provide aliases for supported request methods
utils$1.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios$1.prototype[method] = function(url, config) {
    return this.request(mergeConfig$1(config || {}, {
      method,
      url,
      data: (config || {}).data
    }));
  };
});

utils$1.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/

  function generateHTTPMethod(isForm) {
    return function httpMethod(url, data, config) {
      return this.request(mergeConfig$1(config || {}, {
        method,
        headers: isForm ? {
          'Content-Type': 'multipart/form-data'
        } : {},
        url,
        data
      }));
    };
  }

  Axios$1.prototype[method] = generateHTTPMethod();

  Axios$1.prototype[method + 'Form'] = generateHTTPMethod(true);
});

'use strict';

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @param {Function} executor The executor function.
 *
 * @returns {CancelToken}
 */
let CancelToken$1 = class CancelToken {
  constructor(executor) {
    if (typeof executor !== 'function') {
      throw new TypeError('executor must be a function.');
    }

    let resolvePromise;

    this.promise = new Promise(function promiseExecutor(resolve) {
      resolvePromise = resolve;
    });

    const token = this;

    // eslint-disable-next-line func-names
    this.promise.then(cancel => {
      if (!token._listeners) return;

      let i = token._listeners.length;

      while (i-- > 0) {
        token._listeners[i](cancel);
      }
      token._listeners = null;
    });

    // eslint-disable-next-line func-names
    this.promise.then = onfulfilled => {
      let _resolve;
      // eslint-disable-next-line func-names
      const promise = new Promise(resolve => {
        token.subscribe(resolve);
        _resolve = resolve;
      }).then(onfulfilled);

      promise.cancel = function reject() {
        token.unsubscribe(_resolve);
      };

      return promise;
    };

    executor(function cancel(message, config, request) {
      if (token.reason) {
        // Cancellation has already been requested
        return;
      }

      token.reason = new CanceledError$1(message, config, request);
      resolvePromise(token.reason);
    });
  }

  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason) {
      throw this.reason;
    }
  }

  /**
   * Subscribe to the cancel signal
   */

  subscribe(listener) {
    if (this.reason) {
      listener(this.reason);
      return;
    }

    if (this._listeners) {
      this._listeners.push(listener);
    } else {
      this._listeners = [listener];
    }
  }

  /**
   * Unsubscribe from the cancel signal
   */

  unsubscribe(listener) {
    if (!this._listeners) {
      return;
    }
    const index = this._listeners.indexOf(listener);
    if (index !== -1) {
      this._listeners.splice(index, 1);
    }
  }

  toAbortSignal() {
    const controller = new AbortController();

    const abort = (err) => {
      controller.abort(err);
    };

    this.subscribe(abort);

    controller.signal.unsubscribe = () => this.unsubscribe(abort);

    return controller.signal;
  }

  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let cancel;
    const token = new CancelToken(function executor(c) {
      cancel = c;
    });
    return {
      token,
      cancel
    };
  }
};

'use strict';

/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 *
 * @returns {Function}
 */
function spread$1(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
}

'use strict';

/**
 * Determines whether the payload is an error thrown by Axios
 *
 * @param {*} payload The value to test
 *
 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
 */
function isAxiosError$1(payload) {
  return utils$1.isObject(payload) && (payload.isAxiosError === true);
}

const HttpStatusCode$1 = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};

Object.entries(HttpStatusCode$1).forEach(([key, value]) => {
  HttpStatusCode$1[value] = key;
});

'use strict';

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 *
 * @returns {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  const context = new Axios$1(defaultConfig);
  const instance = bind(Axios$1.prototype.request, context);

  // Copy axios.prototype to instance
  utils$1.extend(instance, Axios$1.prototype, context, {allOwnKeys: true});

  // Copy context to instance
  utils$1.extend(instance, context, null, {allOwnKeys: true});

  // Factory for creating new instances
  instance.create = function create(instanceConfig) {
    return createInstance(mergeConfig$1(defaultConfig, instanceConfig));
  };

  return instance;
}

// Create the default instance to be exported
const axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios$1;

// Expose Cancel & CancelToken
axios.CanceledError = CanceledError$1;
axios.CancelToken = CancelToken$1;
axios.isCancel = isCancel$1;
axios.VERSION = VERSION$1;
axios.toFormData = toFormData$1;

// Expose AxiosError class
axios.AxiosError = AxiosError$1;

// alias for CanceledError for backward compatibility
axios.Cancel = axios.CanceledError;

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};

axios.spread = spread$1;

// Expose isAxiosError
axios.isAxiosError = isAxiosError$1;

// Expose mergeConfig
axios.mergeConfig = mergeConfig$1;

axios.AxiosHeaders = AxiosHeaders$1;

axios.formToJSON = thing => formDataToJSON(utils$1.isHTMLForm(thing) ? new FormData(thing) : thing);

axios.getAdapter = adapters.getAdapter;

axios.HttpStatusCode = HttpStatusCode$1;

axios.default = axios;

// This module is intended to unwrap Axios default export as named.
// Keep top-level export same with static properties
// so that it can keep same with es module or cjs
const {
  Axios,
  AxiosError,
  CanceledError,
  isCancel,
  CancelToken,
  VERSION,
  all: all$1,
  Cancel,
  isAxiosError,
  spread,
  toFormData,
  AxiosHeaders,
  HttpStatusCode,
  formToJSON,
  getAdapter,
  mergeConfig
} = axios;

const API_BASE = "http://localhost:8000/api";

const defaultErrorConfig = {
    withStackTrace: false,
};
// Custom error object
// Context / discussion: https://github.com/supermacro/neverthrow/pull/215
const createNeverThrowError = (message, result, config = defaultErrorConfig) => {
    const data = result.isOk()
        ? { type: 'Ok', value: result.value }
        : { type: 'Err', value: result.error };
    const maybeStack = config.withStackTrace ? new Error().stack : undefined;
    return {
        data,
        message,
        stack: maybeStack,
    };
};

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */


function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function () { return this; }, i;
    function awaitReturn(f) { return function (v) { return Promise.resolve(v).then(f, reject); }; }
    function verb(n, f) { if (g[n]) { i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; if (f) i[n] = f(i[n]); } }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: false } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

class ResultAsync {
    constructor(res) {
        this._promise = res;
    }
    static fromSafePromise(promise) {
        const newPromise = promise.then((value) => new Ok$1(value));
        return new ResultAsync(newPromise);
    }
    static fromPromise(promise, errorFn) {
        const newPromise = promise
            .then((value) => new Ok$1(value))
            .catch((e) => new Err(errorFn(e)));
        return new ResultAsync(newPromise);
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    static fromThrowable(fn, errorFn) {
        return (...args) => {
            return new ResultAsync((() => __awaiter(this, void 0, void 0, function* () {
                try {
                    return new Ok$1(yield fn(...args));
                }
                catch (error) {
                    return new Err(errorFn ? errorFn(error) : error);
                }
            }))());
        };
    }
    static combine(asyncResultList) {
        return combineResultAsyncList(asyncResultList);
    }
    static combineWithAllErrors(asyncResultList) {
        return combineResultAsyncListWithAllErrors(asyncResultList);
    }
    map(f) {
        return new ResultAsync(this._promise.then((res) => __awaiter(this, void 0, void 0, function* () {
            if (res.isErr()) {
                return new Err(res.error);
            }
            return new Ok$1(yield f(res.value));
        })));
    }
    andThrough(f) {
        return new ResultAsync(this._promise.then((res) => __awaiter(this, void 0, void 0, function* () {
            if (res.isErr()) {
                return new Err(res.error);
            }
            const newRes = yield f(res.value);
            if (newRes.isErr()) {
                return new Err(newRes.error);
            }
            return new Ok$1(res.value);
        })));
    }
    andTee(f) {
        return new ResultAsync(this._promise.then((res) => __awaiter(this, void 0, void 0, function* () {
            if (res.isErr()) {
                return new Err(res.error);
            }
            try {
                yield f(res.value);
            }
            catch (e) {
                // Tee does not care about the error
            }
            return new Ok$1(res.value);
        })));
    }
    orTee(f) {
        return new ResultAsync(this._promise.then((res) => __awaiter(this, void 0, void 0, function* () {
            if (res.isOk()) {
                return new Ok$1(res.value);
            }
            try {
                yield f(res.error);
            }
            catch (e) {
                // Tee does not care about the error
            }
            return new Err(res.error);
        })));
    }
    mapErr(f) {
        return new ResultAsync(this._promise.then((res) => __awaiter(this, void 0, void 0, function* () {
            if (res.isOk()) {
                return new Ok$1(res.value);
            }
            return new Err(yield f(res.error));
        })));
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
    andThen(f) {
        return new ResultAsync(this._promise.then((res) => {
            if (res.isErr()) {
                return new Err(res.error);
            }
            const newValue = f(res.value);
            return newValue instanceof ResultAsync ? newValue._promise : newValue;
        }));
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
    orElse(f) {
        return new ResultAsync(this._promise.then((res) => __awaiter(this, void 0, void 0, function* () {
            if (res.isErr()) {
                return f(res.error);
            }
            return new Ok$1(res.value);
        })));
    }
    match(ok, _err) {
        return this._promise.then((res) => res.match(ok, _err));
    }
    unwrapOr(t) {
        return this._promise.then((res) => res.unwrapOr(t));
    }
    /**
     * @deprecated will be removed in 9.0.0.
     *
     * You can use `safeTry` without this method.
     * @example
     * ```typescript
     * safeTry(async function* () {
     *   const okValue = yield* yourResult
     * })
     * ```
     * Emulates Rust's `?` operator in `safeTry`'s body. See also `safeTry`.
     */
    safeUnwrap() {
        return __asyncGenerator(this, arguments, function* safeUnwrap_1() {
            return yield __await(yield __await(yield* __asyncDelegator(__asyncValues(yield __await(this._promise.then((res) => res.safeUnwrap()))))));
        });
    }
    // Makes ResultAsync implement PromiseLike<Result>
    then(successCallback, failureCallback) {
        return this._promise.then(successCallback, failureCallback);
    }
    [Symbol.asyncIterator]() {
        return __asyncGenerator(this, arguments, function* _a() {
            const result = yield __await(this._promise);
            if (result.isErr()) {
                // @ts-expect-error -- This is structurally equivalent and safe
                yield yield __await(errAsync(result.error));
            }
            // @ts-expect-error -- This is structurally equivalent and safe
            return yield __await(result.value);
        });
    }
}
function okAsync(value) {
    return new ResultAsync(Promise.resolve(new Ok$1(value)));
}
function errAsync(err) {
    return new ResultAsync(Promise.resolve(new Err(err)));
}
const fromPromise$2 = ResultAsync.fromPromise;
const fromSafePromise = ResultAsync.fromSafePromise;
const fromAsyncThrowable = ResultAsync.fromThrowable;

/**
 * Short circuits on the FIRST Err value that we find
 */
const combineResultList = (resultList) => {
    let acc = ok([]);
    for (const result of resultList) {
        if (result.isErr()) {
            acc = err(result.error);
            break;
        }
        else {
            acc.map((list) => list.push(result.value));
        }
    }
    return acc;
};
/* This is the typesafe version of Promise.all
 *
 * Takes a list of ResultAsync<T, E> and success if all inner results are Ok values
 * or fails if one (or more) of the inner results are Err values
 */
const combineResultAsyncList = (asyncResultList) => ResultAsync.fromSafePromise(Promise.all(asyncResultList)).andThen(combineResultList);
/**
 * Give a list of all the errors we find
 */
const combineResultListWithAllErrors = (resultList) => {
    let acc = ok([]);
    for (const result of resultList) {
        if (result.isErr() && acc.isErr()) {
            acc.error.push(result.error);
        }
        else if (result.isErr() && acc.isOk()) {
            acc = err([result.error]);
        }
        else if (result.isOk() && acc.isOk()) {
            acc.value.push(result.value);
        }
        // do nothing when result.isOk() && acc.isErr()
    }
    return acc;
};
const combineResultAsyncListWithAllErrors = (asyncResultList) => ResultAsync.fromSafePromise(Promise.all(asyncResultList)).andThen(combineResultListWithAllErrors);

// eslint-disable-next-line @typescript-eslint/no-namespace
var Result;
(function (Result) {
    /**
     * Wraps a function with a try catch, creating a new function with the same
     * arguments but returning `Ok` if successful, `Err` if the function throws
     *
     * @param fn function to wrap with ok on success or err on failure
     * @param errorFn when an error is thrown, this will wrap the error result if provided
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function fromThrowable(fn, errorFn) {
        return (...args) => {
            try {
                const result = fn(...args);
                return ok(result);
            }
            catch (e) {
                return err(errorFn ? errorFn(e) : e);
            }
        };
    }
    Result.fromThrowable = fromThrowable;
    function combine(resultList) {
        return combineResultList(resultList);
    }
    Result.combine = combine;
    function combineWithAllErrors(resultList) {
        return combineResultListWithAllErrors(resultList);
    }
    Result.combineWithAllErrors = combineWithAllErrors;
})(Result || (Result = {}));
function ok(value) {
    return new Ok$1(value);
}
function err(err) {
    return new Err(err);
}
function safeTry(body) {
    const n = body().next();
    if (n instanceof Promise) {
        return new ResultAsync(n.then((r) => r.value));
    }
    return n.value;
}
let Ok$1 = class Ok {
    constructor(value) {
        this.value = value;
    }
    isOk() {
        return true;
    }
    isErr() {
        return !this.isOk();
    }
    map(f) {
        return ok(f(this.value));
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    mapErr(_f) {
        return ok(this.value);
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
    andThen(f) {
        return f(this.value);
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
    andThrough(f) {
        return f(this.value).map((_value) => this.value);
    }
    andTee(f) {
        try {
            f(this.value);
        }
        catch (e) {
            // Tee doesn't care about the error
        }
        return ok(this.value);
    }
    orTee(_f) {
        return ok(this.value);
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
    orElse(_f) {
        return ok(this.value);
    }
    asyncAndThen(f) {
        return f(this.value);
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
    asyncAndThrough(f) {
        return f(this.value).map(() => this.value);
    }
    asyncMap(f) {
        return ResultAsync.fromSafePromise(f(this.value));
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    unwrapOr(_v) {
        return this.value;
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    match(ok, _err) {
        return ok(this.value);
    }
    safeUnwrap() {
        const value = this.value;
        /* eslint-disable-next-line require-yield */
        return (function* () {
            return value;
        })();
    }
    _unsafeUnwrap(_) {
        return this.value;
    }
    _unsafeUnwrapErr(config) {
        throw createNeverThrowError('Called `_unsafeUnwrapErr` on an Ok', this, config);
    }
    // eslint-disable-next-line @typescript-eslint/no-this-alias, require-yield
    *[Symbol.iterator]() {
        return this.value;
    }
};
class Err {
    constructor(error) {
        this.error = error;
    }
    isOk() {
        return false;
    }
    isErr() {
        return !this.isOk();
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    map(_f) {
        return err(this.error);
    }
    mapErr(f) {
        return err(f(this.error));
    }
    andThrough(_f) {
        return err(this.error);
    }
    andTee(_f) {
        return err(this.error);
    }
    orTee(f) {
        try {
            f(this.error);
        }
        catch (e) {
            // Tee doesn't care about the error
        }
        return err(this.error);
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
    andThen(_f) {
        return err(this.error);
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
    orElse(f) {
        return f(this.error);
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    asyncAndThen(_f) {
        return errAsync(this.error);
    }
    asyncAndThrough(_f) {
        return errAsync(this.error);
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    asyncMap(_f) {
        return errAsync(this.error);
    }
    unwrapOr(v) {
        return v;
    }
    match(_ok, err) {
        return err(this.error);
    }
    safeUnwrap() {
        const error = this.error;
        return (function* () {
            yield err(error);
            throw new Error('Do not use this generator out of `safeTry`');
        })();
    }
    _unsafeUnwrap(config) {
        throw createNeverThrowError('Called `_unsafeUnwrap` on an Err', this, config);
    }
    _unsafeUnwrapErr(_) {
        return this.error;
    }
    *[Symbol.iterator]() {
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const self = this;
        // @ts-expect-error -- This is structurally equivalent and safe
        yield self;
        // @ts-expect-error -- This is structurally equivalent and safe
        return self;
    }
}
const fromThrowable = Result.fromThrowable;

function mapAxiosError(error) {
  const e = error;
  if (e.response !== void 0) {
    const data = e.response.data;
    const messageText = typeof data?.message === "string" ? data.message : e.message;
    return { message: messageText, status: e.response.status };
  }
  return { message: e.message };
}

const getTracks = async (params = {}) => {
  const cleanedParams = Object.fromEntries(
    Object.entries(params).filter(([, v]) => v !== void 0 && v !== "")
  );
  const axiosResult = await fromPromise$2(
    axios.get(`${API_BASE}/tracks`, {
      params: cleanedParams
    }),
    mapAxiosError
  );
  return axiosResult.map((response) => {
    const { data, meta } = response.data;
    return {
      data,
      page: meta.page,
      limit: meta.limit,
      totalCount: meta.total,
      totalPages: meta.totalPages
    };
  });
};
const createTrack$1 = async (payload) => {
  const result = await fromPromise$2(
    axios.post(`${API_BASE}/tracks`, payload),
    mapAxiosError
  );
  return result.map(() => void 0);
};
const editTrack$1 = async (payload) => {
  const result = await fromPromise$2(
    axios.put(`${API_BASE}/tracks/${payload.id}`, payload),
    mapAxiosError
  );
  return result.map((r) => r.data);
};
const deleteTrack$1 = async (id) => {
  const result = await fromPromise$2(
    axios.delete(`${API_BASE}/tracks/${id}`),
    mapAxiosError
  );
  return result.map(() => void 0);
};
const uploadTrackFile$1 = async (id, file) => {
  const result = await fromPromise$2(
    axios.post(`${API_BASE}/tracks/${id}/upload`, file),
    mapAxiosError
  );
  return result.map((r) => r.data);
};
const removeTrackFile$1 = async (id) => {
  const result = await fromPromise$2(
    axios.delete(`${API_BASE}/tracks/${id}/file`),
    mapAxiosError
  );
  return result.map(() => void 0);
};

const fetchTracks = createAsyncThunk(
  "tracks/fetchTracks",
  async (params, { rejectWithValue }) => {
    const result = await getTracks(params);
    if (result.isErr()) {
      return rejectWithValue(result.error);
    }
    return result.value;
  }
);
const createTrack = createAsyncThunk("tracks/createTrack", async (payload, { dispatch, rejectWithValue }) => {
  const result = await createTrack$1(payload);
  if (result.isErr()) {
    return rejectWithValue(result.error);
  }
  await dispatch(fetchTracks({}));
});
const editTrack = createAsyncThunk("tracks/editTrack", async (payload, { rejectWithValue }) => {
  const result = await editTrack$1(payload);
  if (result.isErr()) {
    return rejectWithValue(result.error);
  }
  return result.value;
});
const deleteTrack = createAsyncThunk("tracks/deleteTrack", async (id, { rejectWithValue }) => {
  const result = await deleteTrack$1(id);
  if (result.isErr()) {
    return rejectWithValue(result.error);
  }
  return id;
});
const uploadTrackFile = createAsyncThunk("tracks/uploadTrackFile", async ({ id, file }, { rejectWithValue }) => {
  const result = await uploadTrackFile$1(id, file);
  if (result.isErr()) {
    return rejectWithValue(result.error);
  }
  return result.value;
});
const removeTrackFile = createAsyncThunk("tracks/removeTrackFile", async (id, { rejectWithValue }) => {
  const result = await removeTrackFile$1(id);
  if (result.isErr()) {
    return rejectWithValue(result.error);
  }
  return id;
});
const initialState$1 = {
  items: [],
  status: "idle",
  error: null,
  page: 1,
  limit: 10,
  totalCount: 0,
  totalPages: 1
};
const tracksSlice = createSlice({
  name: "tracks",
  initialState: initialState$1,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTracks.pending, (state) => {
      state.status = "loading";
      state.error = null;
    }).addCase(fetchTracks.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.items = action.payload.data;
      state.page = action.payload.page;
      state.limit = action.payload.limit;
      state.totalCount = action.payload.totalCount;
      state.totalPages = action.payload.totalPages;
    }).addCase(fetchTracks.rejected, (state, action) => {
      state.status = "failed";
      if (action.payload !== void 0) {
        state.error = action.payload.message ?? "Unknown error";
      } else {
        state.error = action.error.message ?? "Failed to load tracks";
      }
    }).addCase(createTrack.pending, (state, action) => {
      state.status = "loading";
      const tempId = "temp-" + Date.now();
      const newTrack = {
        id: tempId,
        title: action.meta.arg.title,
        artist: action.meta.arg.artist,
        album: action.meta.arg.album,
        genres: action.meta.arg.genres,
        coverImage: action.meta.arg.coverImage ?? "",
        audioFile: "",
        slug: "",
        createdAt: (/* @__PURE__ */ new Date()).toISOString(),
        updatedAt: (/* @__PURE__ */ new Date()).toISOString()
      };
      state.items.unshift(newTrack);
    }).addCase(createTrack.fulfilled, (state) => {
      state.status = "succeeded";
      state.items = state.items.filter((t) => !t.id.startsWith("temp-"));
    }).addCase(createTrack.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.payload?.message ?? action.error.message ?? "Create track failed";
      state.items = state.items.filter((t) => !t.id.startsWith("temp-"));
    }).addCase(editTrack.fulfilled, (state, action) => {
      const idx = state.items.findIndex((t) => t.id === action.payload.id);
      if (idx !== -1) state.items[idx] = action.payload;
    }).addCase(editTrack.rejected, (state, action) => {
      state.error = action.payload !== void 0 ? action.payload.message : action.error.message ?? "Edit failed";
    }).addCase(deleteTrack.pending, (state, action) => {
      state.items = state.items.filter((t) => t.id !== action.meta.arg);
    }).addCase(deleteTrack.rejected, (state, action) => {
      console.error(
        "Failed to delete track:",
        action.payload ?? action.error.message
      );
    }).addCase(uploadTrackFile.fulfilled, (state, action) => {
      const updated = action.payload;
      const idx = state.items.findIndex((t) => t.id === updated.id);
      if (idx !== -1) state.items[idx] = updated;
    }).addCase(uploadTrackFile.rejected, (state, action) => {
      console.error(
        "Failed to upload file:",
        action.payload ?? action.error.message
      );
    }).addCase(removeTrackFile.fulfilled, (state, action) => {
      const idx = state.items.findIndex((t) => t.id === action.payload);
      if (idx !== -1) state.items[idx].audioFile = "";
    }).addCase(removeTrackFile.rejected, (state, action) => {
      console.error(
        "Failed to remove file:",
        action.payload ?? action.error.message
      );
    });
  }
});
const trackSlice = tracksSlice.reducer;

const button$2 = "_button_1f5sw_1";
const primary = "_primary_1f5sw_18";
const danger = "_danger_1f5sw_27";
const outline = "_outline_1f5sw_37";
const sm = "_sm_1f5sw_50";
const md = "_md_1f5sw_55";
const lg = "_lg_1f5sw_60";
const icon = "_icon_1f5sw_69";
const styles$3 = {
	button: button$2,
	primary: primary,
	danger: danger,
	outline: outline,
	sm: sm,
	md: md,
	lg: lg,
	icon: icon
};

var classnames$1 = {exports: {}};

/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var classnames = classnames$1.exports;

var hasRequiredClassnames;

function requireClassnames () {
	if (hasRequiredClassnames) return classnames$1.exports;
	hasRequiredClassnames = 1;
	(function (module) {
		/* global define */

		(function () {
			'use strict';

			var hasOwn = {}.hasOwnProperty;

			function classNames () {
				var classes = '';

				for (var i = 0; i < arguments.length; i++) {
					var arg = arguments[i];
					if (arg) {
						classes = appendClass(classes, parseValue(arg));
					}
				}

				return classes;
			}

			function parseValue (arg) {
				if (typeof arg === 'string' || typeof arg === 'number') {
					return arg;
				}

				if (typeof arg !== 'object') {
					return '';
				}

				if (Array.isArray(arg)) {
					return classNames.apply(null, arg);
				}

				if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
					return arg.toString();
				}

				var classes = '';

				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes = appendClass(classes, key);
					}
				}

				return classes;
			}

			function appendClass (value, newClass) {
				if (!newClass) {
					return value;
				}
			
				if (value) {
					return value + ' ' + newClass;
				}
			
				return value + newClass;
			}

			if ('object' !== 'undefined' && module.exports) {
				classNames.default = classNames;
				module.exports = classNames;
			} else if (typeof undefined === 'function' && typeof undefined.amd === 'object' && undefined.amd) {
				// register as 'classnames', consistent with npm package name
				undefined('classnames', [], function () {
					return classNames;
				});
			} else {
				window.classNames = classNames;
			}
		}()); 
	} (classnames$1));
	return classnames$1.exports;
}

var classnamesExports = requireClassnames();
const classNames = /*@__PURE__*/getDefaultExportFromCjs(classnamesExports);

const Button = ({
  children,
  variant = "primary",
  size = "md",
  className,
  icon,
  iconPosition,
  ...rest
}) => {
  const hasIcon = icon != null;
  const showLeftIcon = hasIcon && iconPosition === "left";
  const showRightIcon = hasIcon && iconPosition === "right";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "button",
    {
      className: classNames(
        styles$3.button,
        styles$3[variant],
        styles$3[size],
        className
      ),
      ...rest,
      children: [
        showLeftIcon && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: styles$3.icon, children: icon }),
        children,
        showRightIcon && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: styles$3.icon, children: icon })
      ]
    }
  );
};

function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}

"use client";
function Mt(t){if(!t||typeof document=="undefined")return;let o=document.head||document.getElementsByTagName("head")[0],e=document.createElement("style");e.type="text/css",o.firstChild?o.insertBefore(e,o.firstChild):o.appendChild(e),e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t));}Mt(`:root{--toastify-color-light: #fff;--toastify-color-dark: #121212;--toastify-color-info: #3498db;--toastify-color-success: #07bc0c;--toastify-color-warning: #f1c40f;--toastify-color-error: hsl(6, 78%, 57%);--toastify-color-transparent: rgba(255, 255, 255, .7);--toastify-icon-color-info: var(--toastify-color-info);--toastify-icon-color-success: var(--toastify-color-success);--toastify-icon-color-warning: var(--toastify-color-warning);--toastify-icon-color-error: var(--toastify-color-error);--toastify-container-width: fit-content;--toastify-toast-width: 320px;--toastify-toast-offset: 16px;--toastify-toast-top: max(var(--toastify-toast-offset), env(safe-area-inset-top));--toastify-toast-right: max(var(--toastify-toast-offset), env(safe-area-inset-right));--toastify-toast-left: max(var(--toastify-toast-offset), env(safe-area-inset-left));--toastify-toast-bottom: max(var(--toastify-toast-offset), env(safe-area-inset-bottom));--toastify-toast-background: #fff;--toastify-toast-padding: 14px;--toastify-toast-min-height: 64px;--toastify-toast-max-height: 800px;--toastify-toast-bd-radius: 6px;--toastify-toast-shadow: 0px 4px 12px rgba(0, 0, 0, .1);--toastify-font-family: sans-serif;--toastify-z-index: 9999;--toastify-text-color-light: #757575;--toastify-text-color-dark: #fff;--toastify-text-color-info: #fff;--toastify-text-color-success: #fff;--toastify-text-color-warning: #fff;--toastify-text-color-error: #fff;--toastify-spinner-color: #616161;--toastify-spinner-color-empty-area: #e0e0e0;--toastify-color-progress-light: linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #ff2d55);--toastify-color-progress-dark: #bb86fc;--toastify-color-progress-info: var(--toastify-color-info);--toastify-color-progress-success: var(--toastify-color-success);--toastify-color-progress-warning: var(--toastify-color-warning);--toastify-color-progress-error: var(--toastify-color-error);--toastify-color-progress-bgo: .2}.Toastify__toast-container{z-index:var(--toastify-z-index);-webkit-transform:translate3d(0,0,var(--toastify-z-index));position:fixed;width:var(--toastify-container-width);box-sizing:border-box;color:#fff;display:flex;flex-direction:column}.Toastify__toast-container--top-left{top:var(--toastify-toast-top);left:var(--toastify-toast-left)}.Toastify__toast-container--top-center{top:var(--toastify-toast-top);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--top-right{top:var(--toastify-toast-top);right:var(--toastify-toast-right);align-items:end}.Toastify__toast-container--bottom-left{bottom:var(--toastify-toast-bottom);left:var(--toastify-toast-left)}.Toastify__toast-container--bottom-center{bottom:var(--toastify-toast-bottom);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--bottom-right{bottom:var(--toastify-toast-bottom);right:var(--toastify-toast-right);align-items:end}.Toastify__toast{--y: 0;position:relative;touch-action:none;width:var(--toastify-toast-width);min-height:var(--toastify-toast-min-height);box-sizing:border-box;margin-bottom:1rem;padding:var(--toastify-toast-padding);border-radius:var(--toastify-toast-bd-radius);box-shadow:var(--toastify-toast-shadow);max-height:var(--toastify-toast-max-height);font-family:var(--toastify-font-family);z-index:0;display:flex;flex:1 auto;align-items:center;word-break:break-word}@media only screen and (max-width: 480px){.Toastify__toast-container{width:100vw;left:env(safe-area-inset-left);margin:0}.Toastify__toast-container--top-left,.Toastify__toast-container--top-center,.Toastify__toast-container--top-right{top:env(safe-area-inset-top);transform:translate(0)}.Toastify__toast-container--bottom-left,.Toastify__toast-container--bottom-center,.Toastify__toast-container--bottom-right{bottom:env(safe-area-inset-bottom);transform:translate(0)}.Toastify__toast-container--rtl{right:env(safe-area-inset-right);left:initial}.Toastify__toast{--toastify-toast-width: 100%;margin-bottom:0;border-radius:0}}.Toastify__toast-container[data-stacked=true]{width:var(--toastify-toast-width)}.Toastify__toast--stacked{position:absolute;width:100%;transform:translate3d(0,var(--y),0) scale(var(--s));transition:transform .3s}.Toastify__toast--stacked[data-collapsed] .Toastify__toast-body,.Toastify__toast--stacked[data-collapsed] .Toastify__close-button{transition:opacity .1s}.Toastify__toast--stacked[data-collapsed=false]{overflow:visible}.Toastify__toast--stacked[data-collapsed=true]:not(:last-child)>*{opacity:0}.Toastify__toast--stacked:after{content:"";position:absolute;left:0;right:0;height:calc(var(--g) * 1px);bottom:100%}.Toastify__toast--stacked[data-pos=top]{top:0}.Toastify__toast--stacked[data-pos=bot]{bottom:0}.Toastify__toast--stacked[data-pos=bot].Toastify__toast--stacked:before{transform-origin:top}.Toastify__toast--stacked[data-pos=top].Toastify__toast--stacked:before{transform-origin:bottom}.Toastify__toast--stacked:before{content:"";position:absolute;left:0;right:0;bottom:0;height:100%;transform:scaleY(3);z-index:-1}.Toastify__toast--rtl{direction:rtl}.Toastify__toast--close-on-click{cursor:pointer}.Toastify__toast-icon{margin-inline-end:10px;width:22px;flex-shrink:0;display:flex}.Toastify--animate{animation-fill-mode:both;animation-duration:.5s}.Toastify--animate-icon{animation-fill-mode:both;animation-duration:.3s}.Toastify__toast-theme--dark{background:var(--toastify-color-dark);color:var(--toastify-text-color-dark)}.Toastify__toast-theme--light,.Toastify__toast-theme--colored.Toastify__toast--default{background:var(--toastify-color-light);color:var(--toastify-text-color-light)}.Toastify__toast-theme--colored.Toastify__toast--info{color:var(--toastify-text-color-info);background:var(--toastify-color-info)}.Toastify__toast-theme--colored.Toastify__toast--success{color:var(--toastify-text-color-success);background:var(--toastify-color-success)}.Toastify__toast-theme--colored.Toastify__toast--warning{color:var(--toastify-text-color-warning);background:var(--toastify-color-warning)}.Toastify__toast-theme--colored.Toastify__toast--error{color:var(--toastify-text-color-error);background:var(--toastify-color-error)}.Toastify__progress-bar-theme--light{background:var(--toastify-color-progress-light)}.Toastify__progress-bar-theme--dark{background:var(--toastify-color-progress-dark)}.Toastify__progress-bar--info{background:var(--toastify-color-progress-info)}.Toastify__progress-bar--success{background:var(--toastify-color-progress-success)}.Toastify__progress-bar--warning{background:var(--toastify-color-progress-warning)}.Toastify__progress-bar--error{background:var(--toastify-color-progress-error)}.Toastify__progress-bar-theme--colored.Toastify__progress-bar--info,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--success,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--warning,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--error{background:var(--toastify-color-transparent)}.Toastify__close-button{color:#fff;position:absolute;top:6px;right:6px;background:transparent;outline:none;border:none;padding:0;cursor:pointer;opacity:.7;transition:.3s ease;z-index:1}.Toastify__toast--rtl .Toastify__close-button{left:6px;right:unset}.Toastify__close-button--light{color:#000;opacity:.3}.Toastify__close-button>svg{fill:currentColor;height:16px;width:14px}.Toastify__close-button:hover,.Toastify__close-button:focus{opacity:1}@keyframes Toastify__trackProgress{0%{transform:scaleX(1)}to{transform:scaleX(0)}}.Toastify__progress-bar{position:absolute;bottom:0;left:0;width:100%;height:100%;z-index:1;opacity:.7;transform-origin:left}.Toastify__progress-bar--animated{animation:Toastify__trackProgress linear 1 forwards}.Toastify__progress-bar--controlled{transition:transform .2s}.Toastify__progress-bar--rtl{right:0;left:initial;transform-origin:right;border-bottom-left-radius:initial}.Toastify__progress-bar--wrp{position:absolute;overflow:hidden;bottom:0;left:0;width:100%;height:5px;border-bottom-left-radius:var(--toastify-toast-bd-radius);border-bottom-right-radius:var(--toastify-toast-bd-radius)}.Toastify__progress-bar--wrp[data-hidden=true]{opacity:0}.Toastify__progress-bar--bg{opacity:var(--toastify-color-progress-bgo);width:100%;height:100%}.Toastify__spinner{width:20px;height:20px;box-sizing:border-box;border:2px solid;border-radius:100%;border-color:var(--toastify-spinner-color-empty-area);border-right-color:var(--toastify-spinner-color);animation:Toastify__spin .65s linear infinite}@keyframes Toastify__bounceInRight{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(3000px,0,0)}60%{opacity:1;transform:translate3d(-25px,0,0)}75%{transform:translate3d(10px,0,0)}90%{transform:translate3d(-5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutRight{20%{opacity:1;transform:translate3d(-20px,var(--y),0)}to{opacity:0;transform:translate3d(2000px,var(--y),0)}}@keyframes Toastify__bounceInLeft{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(-3000px,0,0)}60%{opacity:1;transform:translate3d(25px,0,0)}75%{transform:translate3d(-10px,0,0)}90%{transform:translate3d(5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutLeft{20%{opacity:1;transform:translate3d(20px,var(--y),0)}to{opacity:0;transform:translate3d(-2000px,var(--y),0)}}@keyframes Toastify__bounceInUp{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,3000px,0)}60%{opacity:1;transform:translate3d(0,-20px,0)}75%{transform:translate3d(0,10px,0)}90%{transform:translate3d(0,-5px,0)}to{transform:translateZ(0)}}@keyframes Toastify__bounceOutUp{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,-2000px,0)}}@keyframes Toastify__bounceInDown{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,-3000px,0)}60%{opacity:1;transform:translate3d(0,25px,0)}75%{transform:translate3d(0,-10px,0)}90%{transform:translate3d(0,5px,0)}to{transform:none}}@keyframes Toastify__bounceOutDown{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,2000px,0)}}.Toastify__bounce-enter--top-left,.Toastify__bounce-enter--bottom-left{animation-name:Toastify__bounceInLeft}.Toastify__bounce-enter--top-right,.Toastify__bounce-enter--bottom-right{animation-name:Toastify__bounceInRight}.Toastify__bounce-enter--top-center{animation-name:Toastify__bounceInDown}.Toastify__bounce-enter--bottom-center{animation-name:Toastify__bounceInUp}.Toastify__bounce-exit--top-left,.Toastify__bounce-exit--bottom-left{animation-name:Toastify__bounceOutLeft}.Toastify__bounce-exit--top-right,.Toastify__bounce-exit--bottom-right{animation-name:Toastify__bounceOutRight}.Toastify__bounce-exit--top-center{animation-name:Toastify__bounceOutUp}.Toastify__bounce-exit--bottom-center{animation-name:Toastify__bounceOutDown}@keyframes Toastify__zoomIn{0%{opacity:0;transform:scale3d(.3,.3,.3)}50%{opacity:1}}@keyframes Toastify__zoomOut{0%{opacity:1}50%{opacity:0;transform:translate3d(0,var(--y),0) scale3d(.3,.3,.3)}to{opacity:0}}.Toastify__zoom-enter{animation-name:Toastify__zoomIn}.Toastify__zoom-exit{animation-name:Toastify__zoomOut}@keyframes Toastify__flipIn{0%{transform:perspective(400px) rotateX(90deg);animation-timing-function:ease-in;opacity:0}40%{transform:perspective(400px) rotateX(-20deg);animation-timing-function:ease-in}60%{transform:perspective(400px) rotateX(10deg);opacity:1}80%{transform:perspective(400px) rotateX(-5deg)}to{transform:perspective(400px)}}@keyframes Toastify__flipOut{0%{transform:translate3d(0,var(--y),0) perspective(400px)}30%{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(-20deg);opacity:1}to{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(90deg);opacity:0}}.Toastify__flip-enter{animation-name:Toastify__flipIn}.Toastify__flip-exit{animation-name:Toastify__flipOut}@keyframes Toastify__slideInRight{0%{transform:translate3d(110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInLeft{0%{transform:translate3d(-110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInUp{0%{transform:translate3d(0,110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInDown{0%{transform:translate3d(0,-110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideOutRight{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(110%,var(--y),0)}}@keyframes Toastify__slideOutLeft{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(-110%,var(--y),0)}}@keyframes Toastify__slideOutDown{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,500px,0)}}@keyframes Toastify__slideOutUp{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,-500px,0)}}.Toastify__slide-enter--top-left,.Toastify__slide-enter--bottom-left{animation-name:Toastify__slideInLeft}.Toastify__slide-enter--top-right,.Toastify__slide-enter--bottom-right{animation-name:Toastify__slideInRight}.Toastify__slide-enter--top-center{animation-name:Toastify__slideInDown}.Toastify__slide-enter--bottom-center{animation-name:Toastify__slideInUp}.Toastify__slide-exit--top-left,.Toastify__slide-exit--bottom-left{animation-name:Toastify__slideOutLeft;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-right,.Toastify__slide-exit--bottom-right{animation-name:Toastify__slideOutRight;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-center{animation-name:Toastify__slideOutUp;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--bottom-center{animation-name:Toastify__slideOutDown;animation-timing-function:ease-in;animation-duration:.3s}@keyframes Toastify__spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}
`);var L=t=>typeof t=="number"&&!isNaN(t),N=t=>typeof t=="string",P=t=>typeof t=="function",mt=t=>N(t)||L(t),B=t=>N(t)||P(t)?t:null,pt=(t,o)=>t===!1||L(t)&&t>0?t:o,z=t=>reactExports.isValidElement(t)||N(t)||P(t)||L(t);function Z(t,o,e=300){let{scrollHeight:r,style:s}=t;requestAnimationFrame(()=>{s.minHeight="initial",s.height=r+"px",s.transition=`all ${e}ms`,requestAnimationFrame(()=>{s.height="0",s.padding="0",s.margin="0",setTimeout(o,e);});});}function $({enter:t,exit:o,appendPosition:e=!1,collapse:r=!0,collapseDuration:s=300}){return function({children:a,position:d,preventExitTransition:c,done:T,nodeRef:g,isIn:v,playToast:x}){let C=e?`${t}--${d}`:t,S=e?`${o}--${d}`:o,E=reactExports.useRef(0);return reactExports.useLayoutEffect(()=>{let f=g.current,p=C.split(" "),b=n=>{n.target===g.current&&(x(),f.removeEventListener("animationend",b),f.removeEventListener("animationcancel",b),E.current===0&&n.type!=="animationcancel"&&f.classList.remove(...p));};(()=>{f.classList.add(...p),f.addEventListener("animationend",b),f.addEventListener("animationcancel",b);})();},[]),reactExports.useEffect(()=>{let f=g.current,p=()=>{f.removeEventListener("animationend",p),r?Z(f,T,s):T();};v||(c?p():(()=>{E.current=1,f.className+=` ${S}`,f.addEventListener("animationend",p);})());},[v]),ct.createElement(ct.Fragment,null,a)}}function J(t,o){return {content:tt(t.content,t.props),containerId:t.props.containerId,id:t.props.toastId,theme:t.props.theme,type:t.props.type,data:t.props.data||{},isLoading:t.props.isLoading,icon:t.props.icon,reason:t.removalReason,status:o}}function tt(t,o,e=!1){return reactExports.isValidElement(t)&&!N(t.type)?reactExports.cloneElement(t,{closeToast:o.closeToast,toastProps:o,data:o.data,isPaused:e}):P(t)?t({closeToast:o.closeToast,toastProps:o,data:o.data,isPaused:e}):t}function yt({closeToast:t,theme:o,ariaLabel:e="close"}){return ct.createElement("button",{className:`Toastify__close-button Toastify__close-button--${o}`,type:"button",onClick:r=>{r.stopPropagation(),t(!0);},"aria-label":e},ct.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},ct.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function gt$1({delay:t,isRunning:o,closeToast:e,type:r="default",hide:s,className:l,controlledProgress:a,progress:d,rtl:c,isIn:T,theme:g}){let v=s||a&&d===0,x={animationDuration:`${t}ms`,animationPlayState:o?"running":"paused"};a&&(x.transform=`scaleX(${d})`);let C=clsx("Toastify__progress-bar",a?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${g}`,`Toastify__progress-bar--${r}`,{["Toastify__progress-bar--rtl"]:c}),S=P(l)?l({rtl:c,type:r,defaultClassName:C}):clsx(C,l),E={[a&&d>=1?"onTransitionEnd":"onAnimationEnd"]:a&&d<1?null:()=>{T&&e();}};return ct.createElement("div",{className:"Toastify__progress-bar--wrp","data-hidden":v},ct.createElement("div",{className:`Toastify__progress-bar--bg Toastify__progress-bar-theme--${g} Toastify__progress-bar--${r}`}),ct.createElement("div",{role:"progressbar","aria-hidden":v?"true":"false","aria-label":"notification timer",className:S,style:x,...E}))}var Xt=1,at$1=()=>`${Xt++}`;function _t(t,o,e){let r=1,s=0,l=[],a=[],d=o,c=new Map,T=new Set,g=i=>(T.add(i),()=>T.delete(i)),v=()=>{a=Array.from(c.values()),T.forEach(i=>i());},x=({containerId:i,toastId:n,updateId:u})=>{let h=i?i!==t:t!==1,m=c.has(n)&&u==null;return h||m},C=(i,n)=>{c.forEach(u=>{var h;(n==null||n===u.props.toastId)&&((h=u.toggle)==null||h.call(u,i));});},S=i=>{var n,u;(u=(n=i.props)==null?void 0:n.onClose)==null||u.call(n,i.removalReason),i.isActive=!1;},E=i=>{if(i==null)c.forEach(S);else {let n=c.get(i);n&&S(n);}v();},f=()=>{s-=l.length,l=[];},p=i=>{var m,_;let{toastId:n,updateId:u}=i.props,h=u==null;i.staleId&&c.delete(i.staleId),i.isActive=!0,c.set(n,i),v(),e(J(i,h?"added":"updated")),h&&((_=(m=i.props).onOpen)==null||_.call(m));};return {id:t,props:d,observe:g,toggle:C,removeToast:E,toasts:c,clearQueue:f,buildToast:(i,n)=>{if(x(n))return;let{toastId:u,updateId:h,data:m,staleId:_,delay:k}=n,M=h==null;M&&s++;let A={...d,style:d.toastStyle,key:r++,...Object.fromEntries(Object.entries(n).filter(([D,Y])=>Y!=null)),toastId:u,updateId:h,data:m,isIn:!1,className:B(n.className||d.toastClassName),progressClassName:B(n.progressClassName||d.progressClassName),autoClose:n.isLoading?!1:pt(n.autoClose,d.autoClose),closeToast(D){c.get(u).removalReason=D,E(u);},deleteToast(){let D=c.get(u);if(D!=null){if(e(J(D,"removed")),c.delete(u),s--,s<0&&(s=0),l.length>0){p(l.shift());return}v();}}};A.closeButton=d.closeButton,n.closeButton===!1||z(n.closeButton)?A.closeButton=n.closeButton:n.closeButton===!0&&(A.closeButton=z(d.closeButton)?d.closeButton:!0);let R={content:i,props:A,staleId:_};d.limit&&d.limit>0&&s>d.limit&&M?l.push(R):L(k)?setTimeout(()=>{p(R);},k):p(R);},setProps(i){d=i;},setToggle:(i,n)=>{let u=c.get(i);u&&(u.toggle=n);},isToastActive:i=>{var n;return (n=c.get(i))==null?void 0:n.isActive},getSnapshot:()=>a}}var I=new Map,F=[],st=new Set,Vt=t=>st.forEach(o=>o(t)),bt=()=>I.size>0;function Qt(){F.forEach(t=>nt(t.content,t.options)),F=[];}var vt=(t,{containerId:o})=>{var e;return (e=I.get(o||1))==null?void 0:e.toasts.get(t)};function X(t,o){var r;if(o)return !!((r=I.get(o))!=null&&r.isToastActive(t));let e=!1;return I.forEach(s=>{s.isToastActive(t)&&(e=!0);}),e}function ht(t){if(!bt()){F=F.filter(o=>t!=null&&o.options.toastId!==t);return}if(t==null||mt(t))I.forEach(o=>{o.removeToast(t);});else if(t&&("containerId"in t||"id"in t)){let o=I.get(t.containerId);o?o.removeToast(t.id):I.forEach(e=>{e.removeToast(t.id);});}}var Ct=(t={})=>{I.forEach(o=>{o.props.limit&&(!t.containerId||o.id===t.containerId)&&o.clearQueue();});};function nt(t,o){z(t)&&(bt()||F.push({content:t,options:o}),I.forEach(e=>{e.buildToast(t,o);}));}function xt(t){var o;(o=I.get(t.containerId||1))==null||o.setToggle(t.id,t.fn);}function rt(t,o){I.forEach(e=>{(o==null||!(o!=null&&o.containerId)||(o==null?void 0:o.containerId)===e.id)&&e.toggle(t,o==null?void 0:o.id);});}function Et(t){let o=t.containerId||1;return {subscribe(e){let r=_t(o,t,Vt);I.set(o,r);let s=r.observe(e);return Qt(),()=>{s(),I.delete(o);}},setProps(e){var r;(r=I.get(o))==null||r.setProps(e);},getSnapshot(){var e;return (e=I.get(o))==null?void 0:e.getSnapshot()}}}function Pt(t){return st.add(t),()=>{st.delete(t);}}function Wt(t){return t&&(N(t.toastId)||L(t.toastId))?t.toastId:at$1()}function U(t,o){return nt(t,o),o.toastId}function V(t,o){return {...o,type:o&&o.type||t,toastId:Wt(o)}}function Q(t){return (o,e)=>U(o,V(t,e))}function y(t,o){return U(t,V("default",o))}y.loading=(t,o)=>U(t,V("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...o}));function Gt(t,{pending:o,error:e,success:r},s){let l;o&&(l=N(o)?y.loading(o,s):y.loading(o.render,{...s,...o}));let a={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},d=(T,g,v)=>{if(g==null){y.dismiss(l);return}let x={type:T,...a,...s,data:v},C=N(g)?{render:g}:g;return l?y.update(l,{...x,...C}):y(C.render,{...x,...C}),v},c=P(t)?t():t;return c.then(T=>d("success",r,T)).catch(T=>d("error",e,T)),c}y.promise=Gt;y.success=Q("success");y.info=Q("info");y.error=Q("error");y.warning=Q("warning");y.warn=y.warning;y.dark=(t,o)=>U(t,V("default",{theme:"dark",...o}));function qt(t){ht(t);}y.dismiss=qt;y.clearWaitingQueue=Ct;y.isActive=X;y.update=(t,o={})=>{let e=vt(t,o);if(e){let{props:r,content:s}=e,l={delay:100,...r,...o,toastId:o.toastId||t,updateId:at$1()};l.toastId!==t&&(l.staleId=t);let a=l.render||s;delete l.render,U(a,l);}};y.done=t=>{y.update(t,{progress:1});};y.onChange=Pt;y.play=t=>rt(!0,t);y.pause=t=>rt(!1,t);function It(t){var a;let{subscribe:o,getSnapshot:e,setProps:r}=reactExports.useRef(Et(t)).current;r(t);let s=(a=reactExports.useSyncExternalStore(o,e,e))==null?void 0:a.slice();function l(d){if(!s)return [];let c=new Map;return t.newestOnTop&&s.reverse(),s.forEach(T=>{let{position:g}=T.props;c.has(g)||c.set(g,[]),c.get(g).push(T);}),Array.from(c,T=>d(T[0],T[1]))}return {getToastToRender:l,isToastActive:X,count:s==null?void 0:s.length}}function At(t){let[o,e]=reactExports.useState(!1),[r,s]=reactExports.useState(!1),l=reactExports.useRef(null),a=reactExports.useRef({start:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,didMove:!1}).current,{autoClose:d,pauseOnHover:c,closeToast:T,onClick:g,closeOnClick:v}=t;xt({id:t.toastId,containerId:t.containerId,fn:e}),reactExports.useEffect(()=>{if(t.pauseOnFocusLoss)return x(),()=>{C();}},[t.pauseOnFocusLoss]);function x(){document.hasFocus()||p(),window.addEventListener("focus",f),window.addEventListener("blur",p);}function C(){window.removeEventListener("focus",f),window.removeEventListener("blur",p);}function S(m){if(t.draggable===!0||t.draggable===m.pointerType){b();let _=l.current;a.canCloseOnClick=!0,a.canDrag=!0,_.style.transition="none",t.draggableDirection==="x"?(a.start=m.clientX,a.removalDistance=_.offsetWidth*(t.draggablePercent/100)):(a.start=m.clientY,a.removalDistance=_.offsetHeight*(t.draggablePercent===80?t.draggablePercent*1.5:t.draggablePercent)/100);}}function E(m){let{top:_,bottom:k,left:M,right:A}=l.current.getBoundingClientRect();m.nativeEvent.type!=="touchend"&&t.pauseOnHover&&m.clientX>=M&&m.clientX<=A&&m.clientY>=_&&m.clientY<=k?p():f();}function f(){e(!0);}function p(){e(!1);}function b(){a.didMove=!1,document.addEventListener("pointermove",n),document.addEventListener("pointerup",u);}function i(){document.removeEventListener("pointermove",n),document.removeEventListener("pointerup",u);}function n(m){let _=l.current;if(a.canDrag&&_){a.didMove=!0,o&&p(),t.draggableDirection==="x"?a.delta=m.clientX-a.start:a.delta=m.clientY-a.start,a.start!==m.clientX&&(a.canCloseOnClick=!1);let k=t.draggableDirection==="x"?`${a.delta}px, var(--y)`:`0, calc(${a.delta}px + var(--y))`;_.style.transform=`translate3d(${k},0)`,_.style.opacity=`${1-Math.abs(a.delta/a.removalDistance)}`;}}function u(){i();let m=l.current;if(a.canDrag&&a.didMove&&m){if(a.canDrag=!1,Math.abs(a.delta)>a.removalDistance){s(!0),t.closeToast(!0),t.collapseAll();return}m.style.transition="transform 0.2s, opacity 0.2s",m.style.removeProperty("transform"),m.style.removeProperty("opacity");}}let h={onPointerDown:S,onPointerUp:E};return d&&c&&(h.onMouseEnter=p,t.stacked||(h.onMouseLeave=f)),v&&(h.onClick=m=>{g&&g(m),a.canCloseOnClick&&T(!0);}),{playToast:f,pauseToast:p,isRunning:o,preventExitTransition:r,toastRef:l,eventHandlers:h}}var Ot=typeof window!="undefined"?reactExports.useLayoutEffect:reactExports.useEffect;var G=({theme:t,type:o,isLoading:e,...r})=>ct.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:t==="colored"?"currentColor":`var(--toastify-icon-color-${o})`,...r});function ao(t){return ct.createElement(G,{...t},ct.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))}function so(t){return ct.createElement(G,{...t},ct.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))}function no(t){return ct.createElement(G,{...t},ct.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))}function ro(t){return ct.createElement(G,{...t},ct.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))}function io(){return ct.createElement("div",{className:"Toastify__spinner"})}var W={info:so,warning:ao,success:no,error:ro,spinner:io},lo=t=>t in W;function Nt({theme:t,type:o,isLoading:e,icon:r}){let s=null,l={theme:t,type:o};return r===!1||(P(r)?s=r({...l,isLoading:e}):reactExports.isValidElement(r)?s=reactExports.cloneElement(r,l):e?s=W.spinner():lo(o)&&(s=W[o](l))),s}var wt=t=>{let{isRunning:o,preventExitTransition:e,toastRef:r,eventHandlers:s,playToast:l}=At(t),{closeButton:a,children:d,autoClose:c,onClick:T,type:g,hideProgressBar:v,closeToast:x,transition:C,position:S,className:E,style:f,progressClassName:p,updateId:b,role:i,progress:n,rtl:u,toastId:h,deleteToast:m,isIn:_,isLoading:k,closeOnClick:M,theme:A,ariaLabel:R}=t,D=clsx("Toastify__toast",`Toastify__toast-theme--${A}`,`Toastify__toast--${g}`,{["Toastify__toast--rtl"]:u},{["Toastify__toast--close-on-click"]:M}),Y=P(E)?E({rtl:u,position:S,type:g,defaultClassName:D}):clsx(D,E),ft=Nt(t),dt=!!n||!c,j={closeToast:x,type:g,theme:A},H=null;return a===!1||(P(a)?H=a(j):reactExports.isValidElement(a)?H=reactExports.cloneElement(a,j):H=yt(j)),ct.createElement(C,{isIn:_,done:m,position:S,preventExitTransition:e,nodeRef:r,playToast:l},ct.createElement("div",{id:h,tabIndex:0,onClick:T,"data-in":_,className:Y,...s,style:f,ref:r,..._&&{role:i,"aria-label":R}},ft!=null&&ct.createElement("div",{className:clsx("Toastify__toast-icon",{["Toastify--animate-icon Toastify__zoom-enter"]:!k})},ft),tt(d,t,!o),H,!t.customProgressBar&&ct.createElement(gt$1,{...b&&!dt?{key:`p-${b}`}:{},rtl:u,theme:A,delay:c,isRunning:o,isIn:_,closeToast:x,hide:v,type:g,className:p,controlledProgress:dt,progress:n||0})))};var K=(t,o=!1)=>({enter:`Toastify--animate Toastify__${t}-enter`,exit:`Toastify--animate Toastify__${t}-exit`,appendPosition:o}),lt$1=$(K("bounce",!0)),mo=$(K("slide",!0)),po=$(K("zoom")),uo=$(K("flip"));var _o={position:"top-right",transition:lt$1,autoClose:5e3,closeButton:!0,pauseOnHover:!0,pauseOnFocusLoss:!0,draggable:"touch",draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light","aria-label":"Notifications Alt+T",hotKeys:t=>t.altKey&&t.code==="KeyT"};function Lt(t){let o={..._o,...t},e=t.stacked,[r,s]=reactExports.useState(!0),l=reactExports.useRef(null),{getToastToRender:a,isToastActive:d,count:c}=It(o),{className:T,style:g,rtl:v,containerId:x,hotKeys:C}=o;function S(f){let p=clsx("Toastify__toast-container",`Toastify__toast-container--${f}`,{["Toastify__toast-container--rtl"]:v});return P(T)?T({position:f,rtl:v,defaultClassName:p}):clsx(p,B(T))}function E(){e&&(s(!0),y.play());}return Ot(()=>{var f;if(e){let p=l.current.querySelectorAll('[data-in="true"]'),b=12,i=(f=o.position)==null?void 0:f.includes("top"),n=0,u=0;Array.from(p).reverse().forEach((h,m)=>{let _=h;_.classList.add("Toastify__toast--stacked"),m>0&&(_.dataset.collapsed=`${r}`),_.dataset.pos||(_.dataset.pos=i?"top":"bot");let k=n*(r?.2:1)+(r?0:b*m);_.style.setProperty("--y",`${i?k:k*-1}px`),_.style.setProperty("--g",`${b}`),_.style.setProperty("--s",`${1-(r?u:0)}`),n+=_.offsetHeight,u+=.025;});}},[r,c,e]),reactExports.useEffect(()=>{function f(p){var i;let b=l.current;C(p)&&((i=b.querySelector('[tabIndex="0"]'))==null||i.focus(),s(!1),y.pause()),p.key==="Escape"&&(document.activeElement===b||b!=null&&b.contains(document.activeElement))&&(s(!0),y.play());}return document.addEventListener("keydown",f),()=>{document.removeEventListener("keydown",f);}},[C]),ct.createElement("section",{ref:l,className:"Toastify",id:x,onMouseEnter:()=>{e&&(s(!1),y.pause());},onMouseLeave:E,"aria-live":"polite","aria-atomic":"false","aria-relevant":"additions text","aria-label":o["aria-label"]},a((f,p)=>{let b=p.length?{...g}:{...g,pointerEvents:"none"};return ct.createElement("div",{tabIndex:-1,className:S(f),"data-stacked":e,style:b,key:`c-${f}`},p.map(({content:i,props:n})=>ct.createElement(wt,{...n,stacked:e,collapseAll:E,isIn:d(n.toastId,n.containerId),key:`t-${n.key}`},i)))}))}

const useAppDispatch = () => useDispatch();

const overlay = "_overlay_14mpd_1";
const dialog = "_dialog_14mpd_14";
const actions = "_actions_14mpd_24";
const styles$2 = {
	overlay: overlay,
	dialog: dialog,
	actions: actions
};

const ConfirmDialog = ({ message, onConfirm, onCancel }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$2.overlay, "data-testid": "confirm-dialog", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$2.dialog, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: message }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$2.actions, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: onConfirm, "data-testid": "confirm-delete", children: "Delete" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: onCancel, "data-testid": "cancel-delete", children: "Cancel" })
    ] })
  ] }) });
};

const ToastMessage = ({ message, type }) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "data-testid": `toast-${type}`, children: message });

const TrackUpload = ({ trackId }) => {
  const dispatch = useAppDispatch();
  const inputRef = reactExports.useRef(null);
  const [uploading, setUploading] = reactExports.useState(false);
  const [showConfirm, setShowConfirm] = reactExports.useState(false);
  const track = useSelector(
    (state) => state.tracks.items.find((t) => t.id === trackId)
  );
  if (!track) return null;
  const handleFileChange = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const validTypes = ["audio/mpeg", "audio/wav", "audio/x-wav", "audio/mp3"];
    if (!validTypes.includes(file.type)) {
      alert("Invalid file type. Allowed: MP3, WAV.");
      return;
    }
    const maxSize = 10 * 1024 * 1024;
    if (file.size > maxSize) {
      alert("The file is too large. Maximum 10 MB.");
      return;
    }
    const formData = new FormData();
    formData.append("file", file);
    console.log("Selected file:", e.target.files?.[0]);
    console.log("Uploading file:", formData.get("file"));
    setUploading(true);
    try {
      await dispatch(uploadTrackFile({ id: trackId, file: formData }));
      y.success(
        /* @__PURE__ */ jsxRuntimeExports.jsx(ToastMessage, { message: "File successfully uploaded!", type: "success" })
      );
    } catch (err) {
      console.error("Upload error:", err);
      y.error(
        /* @__PURE__ */ jsxRuntimeExports.jsx(ToastMessage, { message: "Error while uploading file", type: "error" })
      );
    } finally {
      setUploading(false);
      if (inputRef.current) {
        inputRef.current.value = "";
      }
    }
  };
  const handleRemove = async () => {
    setUploading(true);
    try {
      await dispatch(removeTrackFile(trackId));
      y.success("File deleted");
    } catch (err) {
      console.error("Error deleting file:", err);
      y.error("Error deleting track");
    } finally {
      setUploading(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$4.wrapper, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        type: "file",
        accept: "audio/*",
        ref: inputRef,
        style: { display: "none" },
        onChange: handleFileChange
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Button,
      {
        variant: "outline",
        size: "sm",
        onClick: () => inputRef.current?.click(),
        disabled: uploading,
        "data-loading": uploading,
        "aria-disabled": uploading,
        "data-testid": `upload-track-${trackId}`,
        children: uploading ? "Loading..." : "Upload the audio file"
      }
    ),
    track.audioFile && /* @__PURE__ */ jsxRuntimeExports.jsx(
      Button,
      {
        variant: "danger",
        size: "sm",
        onClick: () => setShowConfirm(true),
        "data-testid": `remove-track-file-${track.id}`,
        children: "Delete the audio file"
      }
    ),
    showConfirm && /* @__PURE__ */ jsxRuntimeExports.jsx(
      ConfirmDialog,
      {
        message: "Are you sure you want to delete this track?",
        onConfirm: async () => {
          try {
            await handleRemove();
          } catch (err) {
            console.error("Delete error in ConfirmDialog:", err);
          }
          setShowConfirm(false);
        },
        onCancel: () => setShowConfirm(false)
      }
    )
  ] });
};

const TrackPlayer = ({
  trackId,
  audioFile,
  isActive,
  onTogglePlay,
  onTrackEnd,
  updatedAt
}) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$6.player, children: [
  audioFile && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$6.audioWrapper, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    CustomAudioPlayer,
    {
      src: `${API_BASE}/files/${audioFile}?v=${updatedAt}`,
      isActive,
      onTogglePlay,
      onEndedNext: onTrackEnd
    }
  ) }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$6.actions, children: /* @__PURE__ */ jsxRuntimeExports.jsx(TrackUpload, { trackId }) })
] });

const Dots = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M9.5%2013C9.5%2013.3978%209.34196%2013.7794%209.06066%2014.0607C8.77936%2014.342%208.39782%2014.5%208%2014.5C7.60218%2014.5%207.22064%2014.342%206.93934%2014.0607C6.65804%2013.7794%206.5%2013.3978%206.5%2013C6.5%2012.6022%206.65804%2012.2206%206.93934%2011.9393C7.22064%2011.658%207.60218%2011.5%208%2011.5C8.39782%2011.5%208.77936%2011.658%209.06066%2011.9393C9.34196%2012.2206%209.5%2012.6022%209.5%2013ZM9.5%208C9.5%208.39782%209.34196%208.77936%209.06066%209.06066C8.77936%209.34196%208.39782%209.5%208%209.5C7.60218%209.5%207.22064%209.34196%206.93934%209.06066C6.65804%208.77936%206.5%208.39782%206.5%208C6.5%207.60218%206.65804%207.22064%206.93934%206.93934C7.22064%206.65804%207.60218%206.5%208%206.5C8.39782%206.5%208.77936%206.65804%209.06066%206.93934C9.34196%207.22064%209.5%207.60218%209.5%208ZM9.5%203C9.5%203.39782%209.34196%203.77936%209.06066%204.06066C8.77936%204.34196%208.39782%204.5%208%204.5C7.60218%204.5%207.22064%204.34196%206.93934%204.06066C6.65804%203.77936%206.5%203.39782%206.5%203C6.5%202.60218%206.65804%202.22064%206.93934%201.93934C7.22064%201.65804%207.60218%201.5%208%201.5C8.39782%201.5%208.77936%201.65804%209.06066%201.93934C9.34196%202.22064%209.5%202.60218%209.5%203Z'%20fill='white'/%3e%3c/svg%3e";

const TrackActions = ({
  onEdit,
  showCheckbox,
  checked,
  onCheckboxChange,
  trackId
}) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$6.mainActions, children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: onEdit, "data-testid": `edit-track-${trackId}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Dots, { className: styles$6.dots }) }),
  showCheckbox && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$6.checkboxWrapper, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    "input",
    {
      type: "checkbox",
      checked,
      onChange: onCheckboxChange,
      className: styles$6.checkbox
    }
  ) })
] });

const TrackItem = ({
  track,
  isActive,
  onEdit,
  onTogglePlay,
  onTrackEnd,
  selectionMode,
  selected,
  onToggleSelect
}) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: styles$6.trackItem, "data-testid": `track-item-${track.id}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$6.trackInfo, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TrackCover, { src: track.coverImage, alt: track.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        TrackInfo,
        {
          title: track.title,
          artist: track.artist,
          album: track.album,
          genres: track.genres,
          id: track.id
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      TrackPlayer,
      {
        trackId: track.id,
        audioFile: track.audioFile,
        isActive,
        onTogglePlay,
        onTrackEnd,
        updatedAt: track.updatedAt
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      TrackActions,
      {
        onEdit: () => onEdit(track),
        showCheckbox: selectionMode,
        checked: selected,
        onCheckboxChange: onToggleSelect,
        trackId: track.id
      }
    )
  ] });
};

const TrackListContent = ({
  tracks,
  startIndex,
  currentPlayingIndex,
  setCurrentPlayingIndex,
  onEditTrack,
  onDeleteTrack,
  onTrackEnd,
  selectionMode,
  selectedTracks,
  toggleTrackSelection
}) => {
  if (tracks.length === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: styles$a.noResults, children: "Nothing found" });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: `${styles$a.list} ${styles$a.fadeIn}`, children: tracks.map((track, index) => {
    const globalIndex = startIndex + index;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      TrackItem,
      {
        track,
        isActive: currentPlayingIndex === globalIndex,
        onEdit: () => onEditTrack(track),
        onTogglePlay: () => setCurrentPlayingIndex(
          currentPlayingIndex === globalIndex ? null : globalIndex
        ),
        onTrackEnd: () => onTrackEnd(globalIndex),
        selectionMode,
        selected: selectedTracks.includes(track.id),
        onToggleSelect: () => toggleTrackSelection(track.id)
      },
      track.id
    );
  }) });
};

const pagination = "_pagination_qfd5v_1";
const button$1 = "_button_qfd5v_10";
const pageInfo = "_pageInfo_qfd5v_30";
const styles$1 = {
	pagination: pagination,
	button: button$1,
	pageInfo: pageInfo
};

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange
}) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$1.pagination, "data-testid": "pagination", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        className: styles$1.button,
        onClick: () => onPageChange(1),
        disabled: currentPage === 1,
        children: "⏮ Fitst"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        className: styles$1.button,
        onClick: () => onPageChange(currentPage - 1),
        disabled: currentPage === 1,
        "data-testid": "pagination-prev",
        children: "← Back"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: styles$1.pageInfo, children: [
      "Page ",
      currentPage,
      " from ",
      totalPages
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        className: styles$1.button,
        onClick: () => onPageChange(currentPage + 1),
        disabled: currentPage === totalPages,
        "data-testid": "pagination-next",
        children: "Forward →"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        className: styles$1.button,
        onClick: () => onPageChange(totalPages),
        disabled: currentPage === totalPages,
        children: "The last ⏭"
      }
    )
  ] });
};

const TrackListPagination = ({
  currentPage,
  totalPages,
  onPageChange
}) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$a.paginationWrapper, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    Pagination,
    {
      currentPage,
      totalPages,
      onPageChange
    }
  ) });
};

const useTracks = () => {
  const { items, status, page, limit, totalCount, totalPages, error } = useSelector((state) => state.tracks);
  return { items, status, page, limit, totalCount, totalPages, error };
};

const wrapper = "_wrapper_1njsd_1";
const controls = "_controls_1njsd_9";
const button = "_button_1njsd_18";
const dangerButton = "_dangerButton_1njsd_33";
const styles = {
	wrapper: wrapper,
	controls: controls,
	button: button,
	dangerButton: dangerButton
};

const TrackBulkActions = ({
  selectionMode,
  selectedCount,
  totalCount,
  onToggleMode,
  onSelectAll,
  onBulkDelete
}) => {
  const [showConfirm, setShowConfirm] = reactExports.useState(false);
  const handleConfirmDelete = async () => {
    try {
      await onBulkDelete();
      y.success(
        /* @__PURE__ */ jsxRuntimeExports.jsx(ToastMessage, { message: "Tracks deleted successfully", type: "success" })
      );
    } catch (err) {
      console.error("Failed to delete tracks", err);
      y.error(
        /* @__PURE__ */ jsxRuntimeExports.jsx(ToastMessage, { message: "Failed to delete tracks", type: "error" })
      );
    } finally {
      setShowConfirm(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles.wrapper, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: onToggleMode,
        className: styles.button,
        "data-testid": "toggle-selection-mode",
        children: selectionMode ? "Cancel" : "Bulk select"
      }
    ),
    selectionMode && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles.controls, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { "data-testid": "selection-count", children: [
        "Selected: ",
        selectedCount,
        " / ",
        totalCount
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: onSelectAll,
          className: styles.button,
          "data-testid": "select-all",
          children: "Select all"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => setShowConfirm(true),
          disabled: selectedCount === 0,
          "data-loading": selectedCount === 0,
          "aria-disabled": selectedCount === 0,
          "data-testid": "delete-selected",
          className: styles.dangerButton,
          children: "Delete selected"
        }
      ),
      showConfirm && /* @__PURE__ */ jsxRuntimeExports.jsx(
        ConfirmDialog,
        {
          message: "Are you sure you want to delete these tracks?",
          onConfirm: handleConfirmDelete,
          onCancel: () => setShowConfirm(false)
        }
      )
    ] })
  ] });
};

function pipe() {
  let x = arguments[0];
  for (let i = 1, l = arguments.length; i < l; i++) {
    x = arguments[i](x);
  }
  return x;
}

function flow() {
  let fns = arguments;
  return function() {
    let x = fns[0].apply(null, arguments);
    for (let i = 1, l = fns.length; i < l; i++) {
      x = fns[i](x);
    }
    return x;
  };
}

// node_modules/rescript/lib/es6/caml_option.js
function some$5(x) {
  if (x === void 0) {
    return {
      BS_PRIVATE_NESTED_SOME_NONE: 0
    };
  } else if (x !== null && x.BS_PRIVATE_NESTED_SOME_NONE !== void 0) {
    return {
      BS_PRIVATE_NESTED_SOME_NONE: x.BS_PRIVATE_NESTED_SOME_NONE + 1 | 0
    };
  } else {
    return x;
  }
}
function valFromOption$2(x) {
  if (!(x !== null && x.BS_PRIVATE_NESTED_SOME_NONE !== void 0)) {
    return x;
  }
  var depth = x.BS_PRIVATE_NESTED_SOME_NONE;
  if (depth === 0) {
    return;
  } else {
    return {
      BS_PRIVATE_NESTED_SOME_NONE: depth - 1 | 0
    };
  }
}

// node_modules/rescript/lib/es6/caml_exceptions.js
var id$1 = {
  contents: 0
};
function create$1(str) {
  id$1.contents = id$1.contents + 1 | 0;
  return str + ("/" + id$1.contents);
}
function caml_is_extension$1(e) {
  if (e == null) {
    return false;
  } else {
    return typeof e.RE_EXN_ID === "string";
  }
}

// node_modules/rescript/lib/es6/caml_js_exceptions.js
var $$Error$2 = /* @__PURE__ */ create$1("Caml_js_exceptions.Error");
function internalToOCamlException$1(e) {
  if (caml_is_extension$1(e)) {
    return e;
  } else {
    return {
      RE_EXN_ID: $$Error$2,
      _1: e
    };
  }
}

// node_modules/rescript/lib/es6/js_exn.js
var $$Error$1$1 = $$Error$2;

// node_modules/rescript/lib/es6/caml_obj.js
var for_in$3 = function(o, foo) {
  for (var x in o) {
    foo(x);
  }
};
function caml_equal$3(a, b) {
  if (a === b) {
    return true;
  }
  var a_type = typeof a;
  if (a_type === "string" || a_type === "number" || a_type === "boolean" || a_type === "undefined" || a === null) {
    return false;
  }
  var b_type = typeof b;
  if (a_type === "function" || b_type === "function") {
    throw {
      RE_EXN_ID: "Invalid_argument",
      _1: "equal: functional value",
      Error: new Error()
    };
  }
  if (b_type === "number" || b_type === "undefined" || b === null) {
    return false;
  }
  var tag_a = a.TAG | 0;
  var tag_b = b.TAG | 0;
  if (tag_a === 248) {
    return a[1] === b[1];
  }
  if (tag_a === 251) {
    throw {
      RE_EXN_ID: "Invalid_argument",
      _1: "equal: abstract value",
      Error: new Error()
    };
  }
  if (tag_a !== tag_b) {
    return false;
  }
  var len_a = a.length | 0;
  var len_b = b.length | 0;
  if (len_a === len_b) {
    if (Array.isArray(a)) {
      var _i = 0;
      while (true) {
        var i = _i;
        if (i === len_a) {
          return true;
        }
        if (!caml_equal$3(a[i], b[i])) {
          return false;
        }
        _i = i + 1 | 0;
        continue;
      }
      ;
    } else if (a instanceof Date && b instanceof Date) {
      return !(a > b || a < b);
    } else {
      var result = {
        contents: true
      };
      var do_key_a = function(key) {
        if (!Object.prototype.hasOwnProperty.call(b, key)) {
          result.contents = false;
          return;
        }
      };
      var do_key_b = function(key) {
        if (!Object.prototype.hasOwnProperty.call(a, key) || !caml_equal$3(b[key], a[key])) {
          result.contents = false;
          return;
        }
      };
      for_in$3(a, do_key_a);
      if (result.contents) {
        for_in$3(b, do_key_b);
      }
      return result.contents;
    }
  } else {
    return false;
  }
}

// node_modules/rescript/lib/es6/belt_Array.js
function everyU$1(arr, b) {
  var len = arr.length;
  var _i = 0;
  while (true) {
    var i = _i;
    if (i === len) {
      return true;
    }
    if (!b(arr[i])) {
      return false;
    }
    _i = i + 1 | 0;
    continue;
  }
  ;
}
function someU$1(arr, b) {
  var len = arr.length;
  var _i = 0;
  while (true) {
    var i = _i;
    if (i === len) {
      return false;
    }
    if (b(arr[i])) {
      return true;
    }
    _i = i + 1 | 0;
    continue;
  }
  ;
}

// node_modules/rescript/lib/es6/belt_Option.js
function mapWithDefaultU$2(opt, $$default, f) {
  if (opt !== void 0) {
    return f(valFromOption$2(opt));
  } else {
    return $$default;
  }
}
function isSome$1(param) {
  return param !== void 0;
}

// node_modules/rescript/lib/es6/belt_internalAVLtree.js
function treeHeight(n) {
  if (n !== void 0) {
    return n.h;
  } else {
    return 0;
  }
}
function create2(l, x, d, r) {
  var hl = treeHeight(l);
  var hr = treeHeight(r);
  return {
    k: x,
    v: d,
    h: hl >= hr ? hl + 1 | 0 : hr + 1 | 0,
    l,
    r
  };
}
function singleton(x, d) {
  return {
    k: x,
    v: d,
    h: 1,
    l: void 0,
    r: void 0
  };
}
function updateValue(n, newValue) {
  if (n.v === newValue) {
    return n;
  } else {
    return {
      k: n.k,
      v: newValue,
      h: n.h,
      l: n.l,
      r: n.r
    };
  }
}
function bal(l, x, d, r) {
  var hl = l !== void 0 ? l.h : 0;
  var hr = r !== void 0 ? r.h : 0;
  if (hl > (hr + 2 | 0)) {
    var ll = l.l;
    var lr = l.r;
    if (treeHeight(ll) >= treeHeight(lr)) {
      return create2(ll, l.k, l.v, create2(lr, x, d, r));
    } else {
      return create2(create2(ll, l.k, l.v, lr.l), lr.k, lr.v, create2(lr.r, x, d, r));
    }
  }
  if (hr <= (hl + 2 | 0)) {
    return {
      k: x,
      v: d,
      h: hl >= hr ? hl + 1 | 0 : hr + 1 | 0,
      l,
      r
    };
  }
  var rl = r.l;
  var rr = r.r;
  if (treeHeight(rr) >= treeHeight(rl)) {
    return create2(create2(l, x, d, rl), r.k, r.v, rr);
  } else {
    return create2(create2(l, x, d, rl.l), rl.k, rl.v, create2(rl.r, r.k, r.v, rr));
  }
}

// node_modules/rescript/lib/es6/belt_internalMapString.js
function get$3(_n, x) {
  while (true) {
    var n = _n;
    if (n === void 0) {
      return;
    }
    var v = n.k;
    if (x === v) {
      return some$5(n.v);
    }
    _n = x < v ? n.l : n.r;
    continue;
  }
  ;
}

// node_modules/rescript/lib/es6/belt_MapString.js
function set$1(t, newK, newD) {
  if (t === void 0) {
    return singleton(newK, newD);
  }
  var k = t.k;
  if (newK === k) {
    return updateValue(t, newD);
  }
  var v = t.v;
  if (newK < k) {
    return bal(set$1(t.l, newK, newD), k, v, t.r);
  } else {
    return bal(t.l, k, v, set$1(t.r, newK, newD));
  }
}
var get2$1 = get$3;

// src/Function/Function.bs.js
function placeholder$7(param) {
}
function identity(value) {
  return value;
}
var _equals = caml_equal$3;
function equals() {
  if (arguments.length === 1) {
    const args = arguments;
    return function fn(data) {
      return _equals(data, args[0]);
    };
  }
  return _equals(arguments[0], arguments[1]);
}
function _both(value, fn0, fn1) {
  if (fn0(value)) {
    return fn1(value);
  } else {
    return false;
  }
}
function both() {
  if (arguments.length === 2) {
    const args = arguments;
    return function fn(data) {
      return _both(data, args[0], args[1]);
    };
  }
  return _both(arguments[0], arguments[1], arguments[2]);
}
function _either(value, fn0, fn1) {
  if (fn0(value)) {
    return true;
  } else {
    return fn1(value);
  }
}
function either() {
  if (arguments.length === 2) {
    const args = arguments;
    return function fn(data) {
      return _either(data, args[0], args[1]);
    };
  }
  return _either(arguments[0], arguments[1], arguments[2]);
}
function always(value) {
  return function() {
    return value;
  };
}
function _defaultTo(value, defaultValue) {
  if (value == null) {
    return defaultValue;
  } else {
    return value;
  }
}
function defaultTo() {
  if (arguments.length === 1) {
    const args = arguments;
    return function fn(data) {
      return _defaultTo(data, args[0]);
    };
  }
  return _defaultTo(arguments[0], arguments[1]);
}
function falsy() {
  return false;
}
function truthy() {
  return true;
}
function _ifElse$1(value, predicateFn, truthyFn, falsyFn) {
  if (predicateFn(value)) {
    return truthyFn(value);
  } else {
    return falsyFn(value);
  }
}
function ifElse$1() {
  if (arguments.length === 3) {
    const args = arguments;
    return function fn(data) {
      return _ifElse$1(data, args[0], args[1], args[2]);
    };
  }
  return _ifElse$1(arguments[0], arguments[1], arguments[2], arguments[3]);
}
function ignore(param) {
}
function _unless(value, predicateFn, falsyFn) {
  if (predicateFn(value)) {
    return value;
  } else {
    return falsyFn(value);
  }
}
function unless() {
  if (arguments.length === 2) {
    const args = arguments;
    return function fn(data) {
      return _unless(data, args[0], args[1]);
    };
  }
  return _unless(arguments[0], arguments[1], arguments[2]);
}
function _when_(value, predicateFn, truthyFn) {
  if (predicateFn(value)) {
    return truthyFn(value);
  } else {
    return value;
  }
}
function when() {
  if (arguments.length === 2) {
    const args = arguments;
    return function fn(data) {
      return _when_(data, args[0], args[1]);
    };
  }
  return _when_(arguments[0], arguments[1], arguments[2]);
}
function _allPass(value, fns) {
  return everyU$1(fns, function(fn) {
    return fn(value);
  });
}
function allPass() {
  if (arguments.length === 1) {
    const args = arguments;
    return function fn(data) {
      return _allPass(data, args[0]);
    };
  }
  return _allPass(arguments[0], arguments[1]);
}
function _anyPass(value, fns) {
  return someU$1(fns, function(fn) {
    return fn(value);
  });
}
function anyPass() {
  if (arguments.length === 1) {
    const args = arguments;
    return function fn(data) {
      return _anyPass(data, args[0]);
    };
  }
  return _anyPass(arguments[0], arguments[1]);
}
function _tap$3(value, fn) {
  fn(value);
  return value;
}
function tap$3() {
  if (arguments.length === 1) {
    const args = arguments;
    return function fn(data) {
      return _tap$3(data, args[0]);
    };
  }
  return _tap$3(arguments[0], arguments[1]);
}
function _makeControlledThrottle(fn, options) {
  var isThrottled = {
    contents: false
  };
  var timer = {
    contents: void 0
  };
  var cancel = function(param) {
    mapWithDefaultU$2(timer.contents, void 0, function(timer2) {
      clearTimeout(timer2);
    });
    timer.contents = void 0;
  };
  var invoke = function(...restArgs) {
    cancel(void 0);
    return fn(...restArgs);
  };
  var isScheduled = function(param) {
    return isThrottled.contents;
  };
  var isLeading = {
    contents: options.leading
  };
  var make = function(...restArgs) {
    if (isLeading.contents) {
      isLeading.contents = false;
      return fn(...restArgs);
    } else {
      if (isThrottled.contents) {
        return;
      }
      cancel(void 0);
      isThrottled.contents = true;
      fn(...restArgs);
      var timeout = setTimeout(function(param) {
        isThrottled.contents = false;
        timer.contents = void 0;
      }, options.delay);
      timer.contents = some$5(timeout);
      return;
    }
  };
  return {
    cancel,
    invoke,
    isScheduled,
    schedule: make
  };
}
function makeControlledThrottle() {
  if (arguments.length === 1) {
    const args = arguments;
    return function fn(data) {
      return _makeControlledThrottle(data, args[0]);
    };
  }
  return _makeControlledThrottle(arguments[0], arguments[1]);
}
function _throttle(fn, delay) {
  return makeControlledThrottle(fn, {
    delay,
    leading: false
  }).schedule;
}
function throttle() {
  if (arguments.length === 1) {
    const args = arguments;
    return function fn(data) {
      return _throttle(data, args[0]);
    };
  }
  return _throttle(arguments[0], arguments[1]);
}
function _makeControlledDebounce(fn, options) {
  var timer = {
    contents: void 0
  };
  var cancel = function(param) {
    mapWithDefaultU$2(timer.contents, void 0, function(timer2) {
      clearTimeout(timer2);
    });
    timer.contents = void 0;
  };
  var invoke = function(...restArgs) {
    cancel(void 0);
    return fn(...restArgs);
  };
  var isScheduled = function(param) {
    return isSome$1(timer.contents);
  };
  var isLeading = {
    contents: options.leading
  };
  var make = function(...restArgs) {
    if (isLeading.contents) {
      isLeading.contents = false;
      return fn(...restArgs);
    } else {
      cancel(void 0);
      var timeout = setTimeout(function(param) {
        fn(...restArgs);
        timer.contents = void 0;
      }, options.delay);
      timer.contents = some$5(timeout);
      return;
    }
  };
  return {
    cancel,
    invoke,
    isScheduled,
    schedule: make
  };
}
function makeControlledDebounce() {
  if (arguments.length === 1) {
    const args = arguments;
    return function fn(data) {
      return _makeControlledDebounce(data, args[0]);
    };
  }
  return _makeControlledDebounce(arguments[0], arguments[1]);
}
function _debounce(fn, delay) {
  return makeControlledDebounce(fn, {
    delay,
    leading: false
  }).schedule;
}
function debounce() {
  if (arguments.length === 1) {
    const args = arguments;
    return function fn(data) {
      return _debounce(data, args[0]);
    };
  }
  return _debounce(arguments[0], arguments[1]);
}
function _tryCatch(value, fn) {
  try {
    return {
      TAG: 0,
      _0: fn(value)
    };
  } catch (raw_obj) {
    var obj = internalToOCamlException$1(raw_obj);
    if (obj.RE_EXN_ID === $$Error$1$1) {
      var message = obj._1.message;
      if (message !== void 0) {
        return {
          TAG: 1,
          _0: message
        };
      } else {
        return {
          TAG: 1,
          _0: "F.tryCatch: unknown error"
        };
      }
    }
    throw obj;
  }
}
function tryCatch() {
  if (arguments.length === 1) {
    const args = arguments;
    return function fn(data) {
      return _tryCatch(data, args[0]);
    };
  }
  return _tryCatch(arguments[0], arguments[1]);
}
function _before(times, fn) {
  var count = {
    contents: 0
  };
  var lastResult = {
    contents: void 0
  };
  return function(...restArgs) {
    var result = lastResult.contents;
    if (result !== void 0) {
      if (count.contents >= times) {
        return valFromOption$2(result);
      }
      var result$1 = fn(...restArgs);
      lastResult.contents = some$5(result$1);
      count.contents = count.contents + 1 | 0;
      return result$1;
    }
    var result$2 = fn(...restArgs);
    lastResult.contents = some$5(result$2);
    count.contents = count.contents + 1 | 0;
    return result$2;
  };
}
function before() {
  if (arguments.length === 1) {
    const args = arguments;
    return function fn(data) {
      return _before(data, args[0]);
    };
  }
  return _before(arguments[0], arguments[1]);
}
function _after(times, fn) {
  var count = {
    contents: 0
  };
  return function(...restArgs) {
    if (count.contents < times) {
      count.contents = count.contents + 1 | 0;
      return;
    } else {
      return some$5(fn(...restArgs));
    }
  };
}
function after() {
  if (arguments.length === 1) {
    const args = arguments;
    return function fn(data) {
      return _after(data, args[0]);
    };
  }
  return _after(arguments[0], arguments[1]);
}
function once(fn) {
  var lastResult = {
    contents: void 0
  };
  return function(...restArgs) {
    var result = lastResult.contents;
    if (result !== void 0) {
      return valFromOption$2(result);
    }
    var result$1 = fn(...restArgs);
    lastResult.contents = some$5(result$1);
    return result$1;
  };
}
var memoize = once;
function _memoizeWithKey(makeKeyFn, fn) {
  var cache = {
    contents: void 0
  };
  return function(...restArgs) {
    var key = makeKeyFn(...restArgs);
    var result = get2$1(cache.contents, key);
    if (result !== void 0) {
      return valFromOption$2(result);
    }
    var result$1 = fn(...restArgs);
    cache.contents = set$1(cache.contents, key, result$1);
    return result$1;
  };
}
function memoizeWithKey() {
  if (arguments.length === 1) {
    const args = arguments;
    return function fn(data) {
      return _memoizeWithKey(data, args[0]);
    };
  }
  return _memoizeWithKey(arguments[0], arguments[1]);
}
function toMutable(value) {
  return value;
}
function coerce(value) {
  return value;
}

const index$8 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  after,
  allPass,
  always,
  anyPass,
  before,
  both,
  coerce,
  debounce,
  defaultTo,
  either,
  equals,
  falsy,
  identity,
  ifElse: ifElse$1,
  ignore,
  makeControlledDebounce,
  makeControlledThrottle,
  memoize,
  memoizeWithKey,
  once,
  placeholder: placeholder$7,
  tap: tap$3,
  throttle,
  toMutable,
  truthy,
  tryCatch,
  unless,
  when
}, Symbol.toStringTag, { value: 'Module' }));

// node_modules/rescript/lib/es6/caml_option.js
function some$4(x) {
  if (x === void 0) {
    return {
      BS_PRIVATE_NESTED_SOME_NONE: 0
    };
  } else if (x !== null && x.BS_PRIVATE_NESTED_SOME_NONE !== void 0) {
    return {
      BS_PRIVATE_NESTED_SOME_NONE: x.BS_PRIVATE_NESTED_SOME_NONE + 1 | 0
    };
  } else {
    return x;
  }
}
function valFromOption$1(x) {
  if (!(x !== null && x.BS_PRIVATE_NESTED_SOME_NONE !== void 0)) {
    return x;
  }
  var depth = x.BS_PRIVATE_NESTED_SOME_NONE;
  if (depth === 0) {
    return;
  } else {
    return {
      BS_PRIVATE_NESTED_SOME_NONE: depth - 1 | 0
    };
  }
}

// node_modules/rescript/lib/es6/js_dict.js
function get$2(dict, k) {
  if (k in dict) {
    return some$4(dict[k]);
  }
}

// node_modules/rescript/lib/es6/caml.js
function caml_int_compare(x, y) {
  if (x < y) {
    return -1;
  } else if (x === y) {
    return 0;
  } else {
    return 1;
  }
}
function caml_bool_compare(x, y) {
  if (x) {
    if (y) {
      return 0;
    } else {
      return 1;
    }
  } else if (y) {
    return -1;
  } else {
    return 0;
  }
}
function caml_string_compare(s1, s2) {
  if (s1 === s2) {
    return 0;
  } else if (s1 < s2) {
    return -1;
  } else {
    return 1;
  }
}
function caml_int_max(x, y) {
  if (x > y) {
    return x;
  } else {
    return y;
  }
}

// node_modules/rescript/lib/es6/caml_obj.js
var for_in$2 = function(o, foo) {
  for (var x in o) {
    foo(x);
  }
};
function caml_compare(a, b) {
  if (a === b) {
    return 0;
  }
  var a_type = typeof a;
  var b_type = typeof b;
  switch (a_type) {
    case "boolean":
      if (b_type === "boolean") {
        return caml_bool_compare(a, b);
      }
      break;
    case "function":
      if (b_type === "function") {
        throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "compare: functional value",
          Error: new Error()
        };
      }
      break;
    case "number":
      if (b_type === "number") {
        return caml_int_compare(a, b);
      }
      break;
    case "string":
      if (b_type === "string") {
        return caml_string_compare(a, b);
      } else {
        return 1;
      }
    case "undefined":
      return -1;
    default:
  }
  switch (b_type) {
    case "string":
      return -1;
    case "undefined":
      return 1;
    default:
      if (a_type === "boolean") {
        return 1;
      }
      if (b_type === "boolean") {
        return -1;
      }
      if (a_type === "function") {
        return 1;
      }
      if (b_type === "function") {
        return -1;
      }
      if (a_type === "number") {
        if (b === null || b.BS_PRIVATE_NESTED_SOME_NONE !== void 0) {
          return 1;
        } else {
          return -1;
        }
      }
      if (b_type === "number") {
        if (a === null || a.BS_PRIVATE_NESTED_SOME_NONE !== void 0) {
          return -1;
        } else {
          return 1;
        }
      }
      if (a === null) {
        if (b.BS_PRIVATE_NESTED_SOME_NONE !== void 0) {
          return 1;
        } else {
          return -1;
        }
      }
      if (b === null) {
        if (a.BS_PRIVATE_NESTED_SOME_NONE !== void 0) {
          return -1;
        } else {
          return 1;
        }
      }
      if (a.BS_PRIVATE_NESTED_SOME_NONE !== void 0) {
        if (b.BS_PRIVATE_NESTED_SOME_NONE !== void 0) {
          return aux_obj_compare(a, b);
        } else {
          return -1;
        }
      }
      var tag_a = a.TAG | 0;
      var tag_b = b.TAG | 0;
      if (tag_a === 248) {
        return caml_int_compare(a[1], b[1]);
      }
      if (tag_a === 251) {
        throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "equal: abstract value",
          Error: new Error()
        };
      }
      if (tag_a !== tag_b) {
        if (tag_a < tag_b) {
          return -1;
        } else {
          return 1;
        }
      }
      var len_a = a.length | 0;
      var len_b = b.length | 0;
      if (len_a === len_b) {
        if (Array.isArray(a)) {
          var _i = 0;
          while (true) {
            var i = _i;
            if (i === len_a) {
              return 0;
            }
            var res = caml_compare(a[i], b[i]);
            if (res !== 0) {
              return res;
            }
            _i = i + 1 | 0;
            continue;
          }
          ;
        } else if (a instanceof Date && b instanceof Date) {
          return a - b;
        } else {
          return aux_obj_compare(a, b);
        }
      } else if (len_a < len_b) {
        var _i$1 = 0;
        while (true) {
          var i$1 = _i$1;
          if (i$1 === len_a) {
            return -1;
          }
          var res$1 = caml_compare(a[i$1], b[i$1]);
          if (res$1 !== 0) {
            return res$1;
          }
          _i$1 = i$1 + 1 | 0;
          continue;
        }
        ;
      } else {
        var _i$2 = 0;
        while (true) {
          var i$2 = _i$2;
          if (i$2 === len_b) {
            return 1;
          }
          var res$2 = caml_compare(a[i$2], b[i$2]);
          if (res$2 !== 0) {
            return res$2;
          }
          _i$2 = i$2 + 1 | 0;
          continue;
        }
        ;
      }
  }
}
function aux_obj_compare(a, b) {
  var min_key_lhs = {
    contents: void 0
  };
  var min_key_rhs = {
    contents: void 0
  };
  var do_key = function(param, key) {
    var min_key = param[2];
    var b2 = param[1];
    if (!(!Object.prototype.hasOwnProperty.call(b2, key) || caml_compare(param[0][key], b2[key]) > 0)) {
      return;
    }
    var mk = min_key.contents;
    if (mk !== void 0 && key >= mk) {
      return;
    } else {
      min_key.contents = key;
      return;
    }
  };
  var partial_arg = [
    a,
    b,
    min_key_rhs
  ];
  var do_key_a = function(param) {
    return do_key(partial_arg, param);
  };
  var partial_arg$1 = [
    b,
    a,
    min_key_lhs
  ];
  var do_key_b = function(param) {
    return do_key(partial_arg$1, param);
  };
  for_in$2(a, do_key_a);
  for_in$2(b, do_key_b);
  var match = min_key_lhs.contents;
  var match$1 = min_key_rhs.contents;
  if (match !== void 0) {
    if (match$1 !== void 0) {
      return caml_string_compare(match, match$1);
    } else {
      return -1;
    }
  } else if (match$1 !== void 0) {
    return 1;
  } else {
    return 0;
  }
}
function caml_equal$2(a, b) {
  if (a === b) {
    return true;
  }
  var a_type = typeof a;
  if (a_type === "string" || a_type === "number" || a_type === "boolean" || a_type === "undefined" || a === null) {
    return false;
  }
  var b_type = typeof b;
  if (a_type === "function" || b_type === "function") {
    throw {
      RE_EXN_ID: "Invalid_argument",
      _1: "equal: functional value",
      Error: new Error()
    };
  }
  if (b_type === "number" || b_type === "undefined" || b === null) {
    return false;
  }
  var tag_a = a.TAG | 0;
  var tag_b = b.TAG | 0;
  if (tag_a === 248) {
    return a[1] === b[1];
  }
  if (tag_a === 251) {
    throw {
      RE_EXN_ID: "Invalid_argument",
      _1: "equal: abstract value",
      Error: new Error()
    };
  }
  if (tag_a !== tag_b) {
    return false;
  }
  var len_a = a.length | 0;
  var len_b = b.length | 0;
  if (len_a === len_b) {
    if (Array.isArray(a)) {
      var _i = 0;
      while (true) {
        var i = _i;
        if (i === len_a) {
          return true;
        }
        if (!caml_equal$2(a[i], b[i])) {
          return false;
        }
        _i = i + 1 | 0;
        continue;
      }
      ;
    } else if (a instanceof Date && b instanceof Date) {
      return !(a > b || a < b);
    } else {
      var result = {
        contents: true
      };
      var do_key_a = function(key) {
        if (!Object.prototype.hasOwnProperty.call(b, key)) {
          result.contents = false;
          return;
        }
      };
      var do_key_b = function(key) {
        if (!Object.prototype.hasOwnProperty.call(a, key) || !caml_equal$2(b[key], a[key])) {
          result.contents = false;
          return;
        }
      };
      for_in$2(a, do_key_a);
      if (result.contents) {
        for_in$2(b, do_key_b);
      }
      return result.contents;
    }
  } else {
    return false;
  }
}
function caml_lessthan(a, b) {
  return caml_compare(a, b) < 0;
}

// node_modules/rescript/lib/es6/js_int.js
var max = 2147483647;
var min = -2147483648;

// node_modules/rescript/lib/es6/js_math.js
function floor_int(f) {
  if (f > max) {
    return max;
  } else if (f < min) {
    return min;
  } else {
    return Math.floor(f);
  }
}
function random_int(min2, max2) {
  return floor_int(Math.random() * (max2 - min2 | 0)) + min2 | 0;
}

// node_modules/rescript/lib/es6/belt_Array.js
function get2(arr, i) {
  if (i >= 0 && i < arr.length) {
    return some$4(arr[i]);
  }
}
function getExn$2(arr, i) {
  if (!(i >= 0 && i < arr.length)) {
    throw {
      RE_EXN_ID: "Assert_failure",
      _1: [
        "belt_Array.ml",
        27,
        4
      ],
      Error: new Error()
    };
  }
  return arr[i];
}
function swapUnsafe(xs, i, j) {
  var tmp = xs[i];
  xs[i] = xs[j];
  xs[j] = tmp;
}
function shuffleInPlace(xs) {
  var len = xs.length;
  for (var i = 0; i < len; ++i) {
    swapUnsafe(xs, i, random_int(i, len));
  }
}
function shuffle(xs) {
  var result = xs.slice(0);
  shuffleInPlace(result);
  return result;
}
function reverse(xs) {
  var len = xs.length;
  var result = new Array(len);
  for (var i = 0; i < len; ++i) {
    result[i] = xs[(len - 1 | 0) - i | 0];
  }
  return result;
}
function make$1(l, f) {
  if (l <= 0) {
    return [];
  }
  var res = new Array(l);
  for (var i = 0; i < l; ++i) {
    res[i] = f;
  }
  return res;
}
function makeByU$1(l, f) {
  if (l <= 0) {
    return [];
  }
  var res = new Array(l);
  for (var i = 0; i < l; ++i) {
    res[i] = f(i);
  }
  return res;
}
function range(start, finish) {
  var cut = finish - start | 0;
  if (cut < 0) {
    return [];
  }
  var arr = new Array(cut + 1 | 0);
  for (var i = 0; i <= cut; ++i) {
    arr[i] = start + i | 0;
  }
  return arr;
}
function rangeBy(start, finish, step) {
  var cut = finish - start | 0;
  if (cut < 0 || step <= 0) {
    return [];
  }
  var nb = (cut / step | 0) + 1 | 0;
  var arr = new Array(nb);
  var cur = start;
  for (var i = 0; i < nb; ++i) {
    arr[i] = cur;
    cur = cur + step | 0;
  }
  return arr;
}
function zip$1(xs, ys) {
  var lenx = xs.length;
  var leny = ys.length;
  var len = lenx < leny ? lenx : leny;
  var s = new Array(len);
  for (var i = 0; i < len; ++i) {
    s[i] = [
      xs[i],
      ys[i]
    ];
  }
  return s;
}
function zipByU(xs, ys, f) {
  var lenx = xs.length;
  var leny = ys.length;
  var len = lenx < leny ? lenx : leny;
  var s = new Array(len);
  for (var i = 0; i < len; ++i) {
    s[i] = f(xs[i], ys[i]);
  }
  return s;
}
function concat$2(a1, a2) {
  var l1 = a1.length;
  var l2 = a2.length;
  var a1a2 = new Array(l1 + l2 | 0);
  for (var i = 0; i < l1; ++i) {
    a1a2[i] = a1[i];
  }
  for (var i$1 = 0; i$1 < l2; ++i$1) {
    a1a2[l1 + i$1 | 0] = a2[i$1];
  }
  return a1a2;
}
function concatMany(arrs) {
  var lenArrs = arrs.length;
  var totalLen = 0;
  for (var i = 0; i < lenArrs; ++i) {
    totalLen = totalLen + arrs[i].length | 0;
  }
  var result = new Array(totalLen);
  totalLen = 0;
  for (var j = 0; j < lenArrs; ++j) {
    var cur = arrs[j];
    for (var k = 0, k_finish = cur.length; k < k_finish; ++k) {
      result[totalLen] = cur[k];
      totalLen = totalLen + 1 | 0;
    }
  }
  return result;
}
function slice$1(a, offset, len) {
  if (len <= 0) {
    return [];
  }
  var lena = a.length;
  var ofs = offset < 0 ? caml_int_max(lena + offset | 0, 0) : offset;
  var hasLen = lena - ofs | 0;
  var copyLength = hasLen < len ? hasLen : len;
  if (copyLength <= 0) {
    return [];
  }
  var result = new Array(copyLength);
  for (var i = 0; i < copyLength; ++i) {
    result[i] = a[ofs + i | 0];
  }
  return result;
}
function sliceToEnd$1(a, offset) {
  var lena = a.length;
  var ofs = offset < 0 ? caml_int_max(lena + offset | 0, 0) : offset;
  var len = lena - ofs | 0;
  var result = new Array(len);
  for (var i = 0; i < len; ++i) {
    result[i] = a[ofs + i | 0];
  }
  return result;
}
function blitUnsafe(a1, srcofs1, a2, srcofs2, blitLength) {
  if (srcofs2 <= srcofs1) {
    for (var j = 0; j < blitLength; ++j) {
      a2[j + srcofs2 | 0] = a1[j + srcofs1 | 0];
    }
    return;
  }
  for (var j$1 = blitLength - 1 | 0; j$1 >= 0; --j$1) {
    a2[j$1 + srcofs2 | 0] = a1[j$1 + srcofs1 | 0];
  }
}
function forEachU$1(a, f) {
  for (var i = 0, i_finish = a.length; i < i_finish; ++i) {
    f(a[i]);
  }
}
function mapU$3(a, f) {
  var l = a.length;
  var r = new Array(l);
  for (var i = 0; i < l; ++i) {
    r[i] = f(a[i]);
  }
  return r;
}
function getByU(a, p) {
  var l = a.length;
  var i = 0;
  var r;
  while (r === void 0 && i < l) {
    var v = a[i];
    if (p(v)) {
      r = some$4(v);
    }
    i = i + 1 | 0;
  }
  ;
  return r;
}
function getIndexByU(a, p) {
  var l = a.length;
  var i = 0;
  var r;
  while (r === void 0 && i < l) {
    var v = a[i];
    if (p(v)) {
      r = i;
    }
    i = i + 1 | 0;
  }
  ;
  return r;
}
function keepMapU(a, f) {
  var l = a.length;
  var r = new Array(l);
  var j = 0;
  for (var i = 0; i < l; ++i) {
    var v = a[i];
    var v$1 = f(v);
    if (v$1 !== void 0) {
      r[j] = valFromOption$1(v$1);
      j = j + 1 | 0;
    }
  }
  r.length = j;
  return r;
}
function forEachWithIndexU(a, f) {
  for (var i = 0, i_finish = a.length; i < i_finish; ++i) {
    f(i, a[i]);
  }
}
function mapWithIndexU(a, f) {
  var l = a.length;
  var r = new Array(l);
  for (var i = 0; i < l; ++i) {
    r[i] = f(i, a[i]);
  }
  return r;
}
function reduceU$1(a, x, f) {
  var r = x;
  for (var i = 0, i_finish = a.length; i < i_finish; ++i) {
    r = f(r, a[i]);
  }
  return r;
}
function reduceReverseU(a, x, f) {
  var r = x;
  for (var i = a.length - 1 | 0; i >= 0; --i) {
    r = f(r, a[i]);
  }
  return r;
}
function reduceWithIndexU$1(a, x, f) {
  var r = x;
  for (var i = 0, i_finish = a.length; i < i_finish; ++i) {
    r = f(r, a[i], i);
  }
  return r;
}
function everyU(arr, b) {
  var len = arr.length;
  var _i = 0;
  while (true) {
    var i = _i;
    if (i === len) {
      return true;
    }
    if (!b(arr[i])) {
      return false;
    }
    _i = i + 1 | 0;
    continue;
  }
  ;
}
function someU(arr, b) {
  var len = arr.length;
  var _i = 0;
  while (true) {
    var i = _i;
    if (i === len) {
      return false;
    }
    if (b(arr[i])) {
      return true;
    }
    _i = i + 1 | 0;
    continue;
  }
  ;
}
function everyAux2(arr1, arr2, _i, b, len) {
  while (true) {
    var i = _i;
    if (i === len) {
      return true;
    }
    if (!b(arr1[i], arr2[i])) {
      return false;
    }
    _i = i + 1 | 0;
    continue;
  }
  ;
}
function eqU(a, b, p) {
  var lena = a.length;
  var lenb = b.length;
  if (lena === lenb) {
    return everyAux2(a, b, 0, p, lena);
  } else {
    return false;
  }
}
function partitionU(a, f) {
  var l = a.length;
  var i = 0;
  var j = 0;
  var a1 = new Array(l);
  var a2 = new Array(l);
  for (var ii = 0; ii < l; ++ii) {
    var v = a[ii];
    if (f(v)) {
      a1[i] = v;
      i = i + 1 | 0;
    } else {
      a2[j] = v;
      j = j + 1 | 0;
    }
  }
  a1.length = i;
  a2.length = j;
  return [
    a1,
    a2
  ];
}
function unzip(a) {
  var l = a.length;
  var a1 = new Array(l);
  var a2 = new Array(l);
  for (var i = 0; i < l; ++i) {
    var match = a[i];
    a1[i] = match[0];
    a2[i] = match[1];
  }
  return [
    a1,
    a2
  ];
}

// node_modules/rescript/lib/es6/belt_SortArray.js
function merge$1(src, src1ofs, src1len, src2, src2ofs, src2len, dst, dstofs, cmp) {
  var src1r = src1ofs + src1len | 0;
  var src2r = src2ofs + src2len | 0;
  var _i1 = src1ofs;
  var _s1 = src[src1ofs];
  var _i2 = src2ofs;
  var _s2 = src2[src2ofs];
  var _d = dstofs;
  while (true) {
    var d = _d;
    var s2 = _s2;
    var i2 = _i2;
    var s1 = _s1;
    var i1 = _i1;
    if (cmp(s1, s2) <= 0) {
      dst[d] = s1;
      var i1$1 = i1 + 1 | 0;
      if (i1$1 >= src1r) {
        return blitUnsafe(src2, i2, dst, d + 1 | 0, src2r - i2 | 0);
      }
      _d = d + 1 | 0;
      _s1 = src[i1$1];
      _i1 = i1$1;
      continue;
    }
    dst[d] = s2;
    var i2$1 = i2 + 1 | 0;
    if (i2$1 >= src2r) {
      return blitUnsafe(src, i1, dst, d + 1 | 0, src1r - i1 | 0);
    }
    _d = d + 1 | 0;
    _s2 = src2[i2$1];
    _i2 = i2$1;
    continue;
  }
  ;
}
function insertionSort(src, srcofs, dst, dstofs, len, cmp) {
  for (var i = 0; i < len; ++i) {
    var e = src[srcofs + i | 0];
    var j = (dstofs + i | 0) - 1 | 0;
    while (j >= dstofs && cmp(dst[j], e) > 0) {
      dst[j + 1 | 0] = dst[j];
      j = j - 1 | 0;
    }
    ;
    dst[j + 1 | 0] = e;
  }
}
function sortTo(src, srcofs, dst, dstofs, len, cmp) {
  if (len <= 5) {
    return insertionSort(src, srcofs, dst, dstofs, len, cmp);
  }
  var l1 = len / 2 | 0;
  var l2 = len - l1 | 0;
  sortTo(src, srcofs + l1 | 0, dst, dstofs + l1 | 0, l2, cmp);
  sortTo(src, srcofs, src, srcofs + l2 | 0, l1, cmp);
  return merge$1(src, srcofs + l2 | 0, l1, dst, dstofs + l1 | 0, l2, dst, dstofs, cmp);
}
function stableSortInPlaceByU(a, cmp) {
  var l = a.length;
  if (l <= 5) {
    return insertionSort(a, 0, a, 0, l, cmp);
  }
  var l1 = l / 2 | 0;
  var l2 = l - l1 | 0;
  var t = new Array(l2);
  sortTo(a, l1, t, 0, l2, cmp);
  sortTo(a, 0, a, l2, l1, cmp);
  return merge$1(a, l2, l1, t, 0, l2, a, 0, cmp);
}
function stableSortByU(a, cmp) {
  var b = a.slice(0);
  stableSortInPlaceByU(b, cmp);
  return b;
}

// src/Array/Array.bs.js
function placeholder$6(param) {
}
function makeEmpty$1(param) {
  return [];
}
var _makeWithIndex = makeByU$1;
function makeWithIndex() {
  if (arguments.length === 1) {
    const args = arguments;
    return function fn(data) {
      return _makeWithIndex(data, args[0]);
    };
  }
  return _makeWithIndex(arguments[0], arguments[1]);
}
var _make = make$1;
function make2() {
  if (arguments.length === 1) {
    const args = arguments;
    return function fn(data) {
      return _make(data, args[0]);
    };
  }
  return _make(arguments[0], arguments[1]);
}
var _repeat$1 = make$1;
function repeat$1() {
  if (arguments.length === 1) {
    const args = arguments;
    return function fn(data) {
      return _repeat$1(data, args[0]);
    };
  }
  return _repeat$1(arguments[0], arguments[1]);
}
function length$1(xs) {
  return xs.length;
}
function isEmpty$2(xs) {
  return xs.length === 0;
}
function isNotEmpty$2(xs) {
  return xs.length !== 0;
}
var reverse2 = reverse;
function _append$2(xs, element) {
  return concat$2(xs, [element]);
}
function append$2() {
  if (arguments.length === 1) {
    const args = arguments;
    return function fn(data) {
      return _append$2(data, args[0]);
    };
  }
  return _append$2(arguments[0], arguments[1]);
}
function _prepend$1(xs, element) {
  return concat$2([element], xs);
}
function prepend$1() {
  if (arguments.length === 1) {
    const args = arguments;
    return function fn(data) {
      return _prepend$1(data, args[0]);
    };
  }
  return _prepend$1(arguments[0], arguments[1]);
}
function _prependToAll(xs, delimiter) {
  return reduceU$1(xs, [], function(acc, value) {
    return concat$2(acc, [
      delimiter,
      value
    ]);
  });
}
function prependToAll() {
  if (arguments.length === 1) {
    const args = arguments;
    return function fn(data) {
      return _prependToAll(data, args[0]);
    };
  }
  return _prependToAll(arguments[0], arguments[1]);
}
function _intersperse(xs, delimiter) {
  return reduceWithIndexU$1(xs, [], function(acc, value, index) {
    if ((xs.length - 1 | 0) === index) {
      acc.push(value);
    } else {
      acc.push(value, delimiter);
    }
    return acc;
  });
}
function intersperse() {
  if (arguments.length === 1) {
    const args = arguments;
    return function fn(data) {
      return _intersperse(data, args[0]);
    };
  }
  return _intersperse(arguments[0], arguments[1]);
}
var _get$2 = get2;
function get3$1() {
  if (arguments.length === 1) {
    const args = arguments;
    return function fn(data) {
      return _get$2(data, args[0]);
    };
  }
  return _get$2(arguments[0], arguments[1]);
}
var _at = get2;
function at() {
  if (arguments.length === 1) {
    const args = arguments;
    return function fn(data) {
      return _at(data, args[0]);
    };
  }
  return _at(arguments[0], arguments[1]);
}
function _getUnsafe$2(xs, index) {
  return xs[index];
}
function getUnsafe$2() {
  if (arguments.length === 1) {
    const args = arguments;
    return function fn(data) {
      return _getUnsafe$2(data, args[0]);
    };
  }
  return _getUnsafe$2(arguments[0], arguments[1]);
}
function _getUndefined(xs, index) {
  return xs[index];
}
function getUndefined() {
  if (arguments.length === 1) {
    const args = arguments;
    return function fn(data) {
      return _getUndefined(data, args[0]);
    };
  }
  return _getUndefined(arguments[0], arguments[1]);
}
var _getBy = getByU;
function getBy() {
  if (arguments.length === 1) {
    const args = arguments;
    return function fn(data) {
      return _getBy(data, args[0]);
    };
  }
  return _getBy(arguments[0], arguments[1]);
}
var _find = getByU;
function find() {
  if (arguments.length === 1) {
    const args = arguments;
    return function fn(data) {
      return _find(data, args[0]);
    };
  }
  return _find(arguments[0], arguments[1]);
}
function head$1(xs) {
  return get2(xs, 0);
}
function last$1(xs) {
  var l = xs.length;
  if (l === 0) {
    return;
  } else {
    return get2(xs, l - 1 | 0);
  }
}
function tail(xs) {
  var l = xs.length;
  if (l === 1) {
    return [];
  }
  if (l === 0) {
    return;
  }
  var xs$1 = sliceToEnd$1(xs, 1);
  if (xs$1.length !== 0) {
    return xs$1;
  }
}
function tailOrEmpty(xs) {
  var xs$1 = tail(xs);
  if (xs$1 !== void 0) {
    return xs$1;
  } else {
    return [];
  }
}
function init(xs) {
  var l = xs.length;
  if (l === 0) {
    return;
  } else {
    return slice$1(xs, 0, l - 1 | 0);
  }
}
function initOrEmpty(xs) {
  var xs$1 = init(xs);
  if (xs$1 !== void 0) {
    return xs$1;
  } else {
    return [];
  }
}
function _take(xs, n) {
  var l = xs.length;
  var len = n < 0 ? 0 : l < n ? l : n;
  return slice$1(xs, 0, len);
}
function take() {
  if (arguments.length === 1) {
    const args = arguments;
    return function fn(data) {
      return _take(data, args[0]);
    };
  }
  return _take(arguments[0], arguments[1]);
}
function _takeExactly(xs, n) {
  if (n < 0 || n > xs.length) {
    return;
  } else {
    return slice$1(xs, 0, n);
  }
}
function takeExactly() {
  if (arguments.length === 1) {
    const args = arguments;
    return function fn(data) {
      return _takeExactly(data, args[0]);
    };
  }
  return _takeExactly(arguments[0], arguments[1]);
}
function _takeWhile(xs, predicateFn) {
  return reduceU$1(xs, [], function(acc, element) {
    if (predicateFn(element)) {
      acc.push(element);
    }
    return acc;
  });
}
function takeWhile() {
  if (arguments.length === 1) {
    const args = arguments;
    return function fn(data) {
      return _takeWhile(data, args[0]);
    };
  }
  return _takeWhile(arguments[0], arguments[1]);
}
function _drop(xs, n) {
  var l = xs.length;
  var start = n < 0 ? 0 : l < n ? l : n;
  return sliceToEnd$1(xs, start);
}
function drop() {
  if (arguments.length === 1) {
    const args = arguments;
    return function fn(data) {
      return _drop(data, args[0]);
    };
  }
  return _drop(arguments[0], arguments[1]);
}
function _dropExactly(xs, n) {
  if (n < 0 || n > xs.length) {
    return;
  } else {
    return sliceToEnd$1(xs, n);
  }
}
function dropExactly() {
  if (arguments.length === 1) {
    const args = arguments;
    return function fn(data) {
      return _dropExactly(data, args[0]);
    };
  }
  return _dropExactly(arguments[0], arguments[1]);
}
function _dropWhile(xs, predicateFn) {
  return reduceU$1(xs, [], function(acc, element) {
    if (!predicateFn(element)) {
      acc.push(element);
    }
    return acc;
  });
}
function dropWhile() {
  if (arguments.length === 1) {
    const args = arguments;
    return function fn(data) {
      return _dropWhile(data, args[0]);
    };
  }
  return _dropWhile(arguments[0], arguments[1]);
}
function uncons(xs) {
  if (xs.length !== 0) {
    return [
      getExn$2(xs, 0),
      sliceToEnd$1(xs, 1)
    ];
  }
}
function _map$3(xs, mapFn) {
  return mapU$3(xs, mapFn);
}
function map$3() {
  if (arguments.length === 1) {
    const args = arguments;
    return function fn(data) {
      return _map$3(data, args[0]);
    };
  }
  return _map$3(arguments[0], arguments[1]);
}
var _mapWithIndex = mapWithIndexU;
function mapWithIndex() {
  if (arguments.length === 1) {
    const args = arguments;
    return function fn(data) {
      return _mapWithIndex(data, args[0]);
    };
  }
  return _mapWithIndex(arguments[0], arguments[1]);
}
function _filter$2(xs, predicateFn) {
  var index = 0;
  var arr = [];
  while (index < xs.length) {
    var value = xs[index];
    if (predicateFn(value)) {
      arr.push(value);
    }
    index = index + 1 | 0;
  }
  ;
  return arr;
}
function filter$2() {
  if (arguments.length === 1) {
    const args = arguments;
    return function fn(data) {
      return _filter$2(data, args[0]);
    };
  }
  return _filter$2(arguments[0], arguments[1]);
}
var keep = filter$2;
function _filterWithIndex(xs, predicateFn) {
  var index = 0;
  var arr = [];
  while (index < xs.length) {
    var value = xs[index];
    if (predicateFn(index, value)) {
      arr.push(value);
    }
    index = index + 1 | 0;
  }
  ;
  return arr;
}
function filterWithIndex() {
  if (arguments.length === 1) {
    const args = arguments;
    return function fn(data) {
      return _filterWithIndex(data, args[0]);
    };
  }
  return _filterWithIndex(arguments[0], arguments[1]);
}
var keepWithIndex = filterWithIndex;
function _reject$1(xs, predicateFn) {
  return filter$2(xs, function(el) {
    return !predicateFn(el);
  });
}
function reject$1() {
  if (arguments.length === 1) {
    const args = arguments;
    return function fn(data) {
      return _reject$1(data, args[0]);
    };
  }
  return _reject$1(arguments[0], arguments[1]);
}
function _rejectWithIndex(xs, predicateFn) {
  return filterWithIndex(xs, function(index, el) {
    return !predicateFn(index, el);
  });
}
function rejectWithIndex() {
  if (arguments.length === 1) {
    const args = arguments;
    return function fn(data) {
      return _rejectWithIndex(data, args[0]);
    };
  }
  return _rejectWithIndex(arguments[0], arguments[1]);
}
var _reduce = reduceU$1;
function reduce() {
  if (arguments.length === 2) {
    const args = arguments;
    return function fn(data) {
      return _reduce(data, args[0], args[1]);
    };
  }
  return _reduce(arguments[0], arguments[1], arguments[2]);
}
var _reduceReverse = reduceReverseU;
function reduceReverse() {
  if (arguments.length === 2) {
    const args = arguments;
    return function fn(data) {
      return _reduceReverse(data, args[0], args[1]);
    };
  }
  return _reduceReverse(arguments[0], arguments[1], arguments[2]);
}
var _reduceWithIndex = reduceWithIndexU$1;
function reduceWithIndex() {
  if (arguments.length === 2) {
    const args = arguments;
    return function fn(data) {
      return _reduceWithIndex(data, args[0], args[1]);
    };
  }
  return _reduceWithIndex(arguments[0], arguments[1], arguments[2]);
}
function _splitAt$1(xs, offset) {
  if (offset < 0 || offset > xs.length) {
    return;
  } else {
    return [
      slice$1(xs, 0, offset),
      sliceToEnd$1(xs, offset)
    ];
  }
}
function splitAt$1() {
  if (arguments.length === 1) {
    const args = arguments;
    return function fn(data) {
      return _splitAt$1(data, args[0]);
    };
  }
  return _splitAt$1(arguments[0], arguments[1]);
}
function _splitEvery(xs, size) {
  if (size < 1 || xs.length <= size) {
    return [xs];
  }
  var offset = 0;
  var arr = [];
  while (offset < xs.length) {
    var len = offset + size | 0;
    arr.push(slice$1(xs, offset, size));
    offset = len;
  }
  ;
  return arr;
}
function splitEvery() {
  if (arguments.length === 1) {
    const args = arguments;
    return function fn(data) {
      return _splitEvery(data, args[0]);
    };
  }
  return _splitEvery(arguments[0], arguments[1]);
}
var shuffle2 = shuffle;
var _partition = partitionU;
function partition() {
  if (arguments.length === 1) {
    const args = arguments;
    return function fn(data) {
      return _partition(data, args[0]);
    };
  }
  return _partition(arguments[0], arguments[1]);
}
var _concat$1 = concat$2;
function concat2() {
  if (arguments.length === 1) {
    const args = arguments;
    return function fn(data) {
      return _concat$1(data, args[0]);
    };
  }
  return _concat$1(arguments[0], arguments[1]);
}
var concatMany2 = concatMany;
var _every = everyU;
function every() {
  if (arguments.length === 1) {
    const args = arguments;
    return function fn(data) {
      return _every(data, args[0]);
    };
  }
  return _every(arguments[0], arguments[1]);
}
var _some = someU;
function some2() {
  if (arguments.length === 1) {
    const args = arguments;
    return function fn(data) {
      return _some(data, args[0]);
    };
  }
  return _some(arguments[0], arguments[1]);
}
var _slice$1 = slice$1;
function slice2() {
  if (arguments.length === 2) {
    const args = arguments;
    return function fn(data) {
      return _slice$1(data, args[0], args[1]);
    };
  }
  return _slice$1(arguments[0], arguments[1], arguments[2]);
}
var _sliceToEnd$1 = sliceToEnd$1;
function sliceToEnd2() {
  if (arguments.length === 1) {
    const args = arguments;
    return function fn(data) {
      return _sliceToEnd$1(data, args[0]);
    };
  }
  return _sliceToEnd$1(arguments[0], arguments[1]);
}
var _eq = eqU;
function eq() {
  if (arguments.length === 2) {
    const args = arguments;
    return function fn(data) {
      return _eq(data, args[0], args[1]);
    };
  }
  return _eq(arguments[0], arguments[1], arguments[2]);
}
var _range = range;
function range2() {
  if (arguments.length === 1) {
    const args = arguments;
    return function fn(data) {
      return _range(data, args[0]);
    };
  }
  return _range(arguments[0], arguments[1]);
}
var _rangeBy = rangeBy;
function rangeBy2() {
  if (arguments.length === 2) {
    const args = arguments;
    return function fn(data) {
      return _rangeBy(data, args[0], args[1]);
    };
  }
  return _rangeBy(arguments[0], arguments[1], arguments[2]);
}
function copy(xs) {
  return xs.slice(0);
}
var _zip$1 = zip$1;
function zip2() {
  if (arguments.length === 1) {
    const args = arguments;
    return function fn(data) {
      return _zip$1(data, args[0]);
    };
  }
  return _zip$1(arguments[0], arguments[1]);
}
var _zipWith$1 = zipByU;
function zipWith$1() {
  if (arguments.length === 2) {
    const args = arguments;
    return function fn(data) {
      return _zipWith$1(data, args[0], args[1]);
    };
  }
  return _zipWith$1(arguments[0], arguments[1], arguments[2]);
}
var unzip2 = unzip;
function _replaceAt(xs, targetIndex, element) {
  return mapWithIndexU(xs, function(currentIndex, current) {
    if (currentIndex === targetIndex) {
      return element;
    } else {
      return current;
    }
  });
}
function replaceAt() {
  if (arguments.length === 2) {
    const args = arguments;
    return function fn(data) {
      return _replaceAt(data, args[0], args[1]);
    };
  }
  return _replaceAt(arguments[0], arguments[1], arguments[2]);
}
function _insertAt(xs, targetIndex, element) {
  var match = splitAt$1(xs, targetIndex);
  if (match !== void 0) {
    return concat$2(match[0], concat$2([element], match[1]));
  } else {
    return xs;
  }
}
function insertAt() {
  if (arguments.length === 2) {
    const args = arguments;
    return function fn(data) {
      return _insertAt(data, args[0], args[1]);
    };
  }
  return _insertAt(arguments[0], arguments[1], arguments[2]);
}
function _updateAt(xs, targetIndex, fn) {
  return mapWithIndexU(xs, function(index, el) {
    if (index === targetIndex) {
      return fn(el);
    } else {
      return el;
    }
  });
}
function updateAt() {
  if (arguments.length === 2) {
    const args = arguments;
    return function fn(data) {
      return _updateAt(data, args[0], args[1]);
    };
  }
  return _updateAt(arguments[0], arguments[1], arguments[2]);
}
function _swapAt(xs, targetIndex, swapIndex) {
  var match = get2(xs, targetIndex);
  var match$1 = get2(xs, swapIndex);
  if (match === void 0) {
    return xs;
  }
  if (match$1 === void 0) {
    return xs;
  }
  var b = valFromOption$1(match$1);
  var a = valFromOption$1(match);
  return mapWithIndexU(xs, function(k, x) {
    if (targetIndex === k) {
      return b;
    } else if (swapIndex === k) {
      return a;
    } else {
      return x;
    }
  });
}
function swapAt() {
  if (arguments.length === 2) {
    const args = arguments;
    return function fn(data) {
      return _swapAt(data, args[0], args[1]);
    };
  }
  return _swapAt(arguments[0], arguments[1], arguments[2]);
}
function _removeAt(xs, targetIndex) {
  return filterWithIndex(xs, function(index, param) {
    return index !== targetIndex;
  });
}
function removeAt() {
  if (arguments.length === 1) {
    const args = arguments;
    return function fn(data) {
      return _removeAt(data, args[0]);
    };
  }
  return _removeAt(arguments[0], arguments[1]);
}
function _uniqBy(xs, uniqFn) {
  var index = 0;
  var arr = [];
  while (index < xs.length) {
    var value = xs[index];
    var alreadyAdded = someU(arr, function(value2) {
      return function(x) {
        return caml_equal$2(uniqFn(x), uniqFn(value2));
      };
    }(value));
    if (!alreadyAdded) {
      arr.push(value);
    }
    index = index + 1 | 0;
  }
  ;
  return arr;
}
function uniqBy() {
  if (arguments.length === 1) {
    const args = arguments;
    return function fn(data) {
      return _uniqBy(data, args[0]);
    };
  }
  return _uniqBy(arguments[0], arguments[1]);
}
function uniq(xs) {
  return uniqBy(xs, function(element) {
    return element;
  });
}
var _forEach = forEachU$1;
function forEach() {
  if (arguments.length === 1) {
    const args = arguments;
    return function fn(data) {
      return _forEach(data, args[0]);
    };
  }
  return _forEach(arguments[0], arguments[1]);
}
var _forEachWithIndex = forEachWithIndexU;
function forEachWithIndex() {
  if (arguments.length === 1) {
    const args = arguments;
    return function fn(data) {
      return _forEachWithIndex(data, args[0]);
    };
  }
  return _forEachWithIndex(arguments[0], arguments[1]);
}
var _getIndexBy = getIndexByU;
function getIndexBy() {
  if (arguments.length === 1) {
    const args = arguments;
    return function fn(data) {
      return _getIndexBy(data, args[0]);
    };
  }
  return _getIndexBy(arguments[0], arguments[1]);
}
function _includes$1(xs, value) {
  return someU(xs, function(x) {
    return caml_equal$2(x, value);
  });
}
function includes$1() {
  if (arguments.length === 1) {
    const args = arguments;
    return function fn(data) {
      return _includes$1(data, args[0]);
    };
  }
  return _includes$1(arguments[0], arguments[1]);
}
function _join(xs, delimiter) {
  return xs.join(delimiter);
}
function join() {
  if (arguments.length === 1) {
    const args = arguments;
    return function fn(data) {
      return _join(data, args[0]);
    };
  }
  return _join(arguments[0], arguments[1]);
}
var _sort = stableSortByU;
function sort() {
  if (arguments.length === 1) {
    const args = arguments;
    return function fn(data) {
      return _sort(data, args[0]);
    };
  }
  return _sort(arguments[0], arguments[1]);
}
function _sortBy(xs, sortFn) {
  return stableSortByU(xs, function(a, b) {
    var a$1 = sortFn(a);
    var b$1 = sortFn(b);
    if (a$1 === b$1) {
      return 0;
    } else if (caml_lessthan(a$1, b$1)) {
      return -1;
    } else {
      return 1;
    }
  });
}
function sortBy() {
  if (arguments.length === 1) {
    const args = arguments;
    return function fn(data) {
      return _sortBy(data, args[0]);
    };
  }
  return _sortBy(arguments[0], arguments[1]);
}
function _groupBy(xs, groupFn) {
  return reduceU$1(xs, {}, function(acc, element) {
    var key = groupFn(element);
    var value = get$2(acc, key);
    if (value !== void 0) {
      value.push(element);
    } else {
      acc[key] = [element];
    }
    return acc;
  });
}
function groupBy() {
  if (arguments.length === 1) {
    const args = arguments;
    return function fn(data) {
      return _groupBy(data, args[0]);
    };
  }
  return _groupBy(arguments[0], arguments[1]);
}
function flat(xs) {
  return reduceU$1(xs, [], function(acc, value) {
    if (Array.isArray(value)) {
      forEachU$1(value, function(element) {
        acc.push(element);
      });
    } else {
      acc.push(value);
    }
    return acc;
  });
}
function _flatten(xs, arr) {
  var index = 0;
  while (index < xs.length) {
    var value = xs[index];
    if (Array.isArray(value)) {
      flatten(value, arr);
    } else {
      arr.push(value);
    }
    index = index + 1 | 0;
  }
  ;
  return arr;
}
function flatten() {
  if (arguments.length === 1) {
    const args = arguments;
    return function fn(data) {
      return _flatten(data, args[0]);
    };
  }
  return _flatten(arguments[0], arguments[1]);
}
function deepFlat(xs) {
  return flatten(xs, []);
}
function toTuple(xs) {
  return xs;
}
function _tap$2(xs, fn) {
  forEachU$1(xs, fn);
  return xs;
}
function tap$2() {
  if (arguments.length === 1) {
    const args = arguments;
    return function fn(data) {
      return _tap$2(data, args[0]);
    };
  }
  return _tap$2(arguments[0], arguments[1]);
}
function flip$1(xs) {
  return [
    xs[1],
    xs[0]
  ];
}
var _filterMap = keepMapU;
function filterMap() {
  if (arguments.length === 1) {
    const args = arguments;
    return function fn(data) {
      return _filterMap(data, args[0]);
    };
  }
  return _filterMap(arguments[0], arguments[1]);
}
var _keepMap = keepMapU;
function keepMap() {
  if (arguments.length === 1) {
    const args = arguments;
    return function fn(data) {
      return _keepMap(data, args[0]);
    };
  }
  return _keepMap(arguments[0], arguments[1]);
}
function _removeFirstBy(xs, value, predicateFn) {
  return reduceU$1(xs, [
    false,
    []
  ], function(acc, v) {
    var ys = acc[1];
    if (acc[0]) {
      ys.push(v);
      return [
        true,
        ys
      ];
    } else if (predicateFn(v, value)) {
      return [
        true,
        ys
      ];
    } else {
      ys.push(v);
      return [
        false,
        ys
      ];
    }
  })[1];
}
function removeFirstBy() {
  if (arguments.length === 2) {
    const args = arguments;
    return function fn(data) {
      return _removeFirstBy(data, args[0], args[1]);
    };
  }
  return _removeFirstBy(arguments[0], arguments[1], arguments[2]);
}
function _removeFirst(xs, value) {
  return removeFirstBy(xs, value, caml_equal$2);
}
function removeFirst() {
  if (arguments.length === 1) {
    const args = arguments;
    return function fn(data) {
      return _removeFirst(data, args[0]);
    };
  }
  return _removeFirst(arguments[0], arguments[1]);
}
function zipWithIndex(xs) {
  return reduceWithIndexU$1(xs, [], function(acc, value, index) {
    acc.push([
      value,
      index
    ]);
    return acc;
  });
}
function _all(xs, predicateFn) {
  return everyU(xs, predicateFn);
}
function all() {
  if (arguments.length === 1) {
    const args = arguments;
    return function fn(data) {
      return _all(data, args[0]);
    };
  }
  return _all(arguments[0], arguments[1]);
}
function _any(xs, predicateFn) {
  return someU(xs, predicateFn);
}
function any() {
  if (arguments.length === 1) {
    const args = arguments;
    return function fn(data) {
      return _any(data, args[0]);
    };
  }
  return _any(arguments[0], arguments[1]);
}
function _difference(xs, ys) {
  return reject$1(uniqBy(xs, function(element) {
    return element;
  }), function(value) {
    return includes$1(ys, value);
  });
}
function difference() {
  if (arguments.length === 1) {
    const args = arguments;
    return function fn(data) {
      return _difference(data, args[0]);
    };
  }
  return _difference(arguments[0], arguments[1]);
}
function _union(xs, ys) {
  var xs$1 = concat$2(xs, ys);
  return uniqBy(xs$1, function(element) {
    return element;
  });
}
function union() {
  if (arguments.length === 1) {
    const args = arguments;
    return function fn(data) {
      return _union(data, args[0]);
    };
  }
  return _union(arguments[0], arguments[1]);
}
function _intersection(xs, ys) {
  var match = xs.length > ys.length ? [
    xs,
    ys
  ] : [
    ys,
    xs
  ];
  var ys$1 = match[1];
  var xs$1 = filter$2(match[0], function(value) {
    return includes$1(ys$1, value);
  });
  return uniqBy(xs$1, function(element) {
    return element;
  });
}
function intersection() {
  if (arguments.length === 1) {
    const args = arguments;
    return function fn(data) {
      return _intersection(data, args[0]);
    };
  }
  return _intersection(arguments[0], arguments[1]);
}

const index$7 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  all,
  any,
  append: append$2,
  at,
  concat: concat2,
  concatMany: concatMany2,
  copy,
  deepFlat,
  difference,
  drop,
  dropExactly,
  dropWhile,
  eq,
  every,
  filter: filter$2,
  filterMap,
  filterWithIndex,
  find,
  flat,
  flatten,
  flip: flip$1,
  forEach,
  forEachWithIndex,
  get: get3$1,
  getBy,
  getIndexBy,
  getUndefined,
  getUnsafe: getUnsafe$2,
  groupBy,
  head: head$1,
  includes: includes$1,
  init,
  initOrEmpty,
  insertAt,
  intersection,
  intersperse,
  isEmpty: isEmpty$2,
  isNotEmpty: isNotEmpty$2,
  join,
  keep,
  keepMap,
  keepWithIndex,
  last: last$1,
  length: length$1,
  make: make2,
  makeEmpty: makeEmpty$1,
  makeWithIndex,
  map: map$3,
  mapWithIndex,
  partition,
  placeholder: placeholder$6,
  prepend: prepend$1,
  prependToAll,
  range: range2,
  rangeBy: rangeBy2,
  reduce,
  reduceReverse,
  reduceWithIndex,
  reject: reject$1,
  rejectWithIndex,
  removeAt,
  removeFirst,
  removeFirstBy,
  repeat: repeat$1,
  replaceAt,
  reverse: reverse2,
  shuffle: shuffle2,
  slice: slice2,
  sliceToEnd: sliceToEnd2,
  some: some2,
  sort,
  sortBy,
  splitAt: splitAt$1,
  splitEvery,
  swapAt,
  tail,
  tailOrEmpty,
  take,
  takeExactly,
  takeWhile,
  tap: tap$2,
  toTuple,
  uncons,
  union,
  uniq,
  uniqBy,
  unzip: unzip2,
  updateAt,
  zip: zip2,
  zipWith: zipWith$1,
  zipWithIndex
}, Symbol.toStringTag, { value: 'Module' }));

// node_modules/rescript/lib/es6/caml_array.js
function sub$1(x, offset, len) {
  var result = new Array(len);
  var j = 0;
  var i = offset;
  while (j < len) {
    result[j] = x[i];
    j = j + 1 | 0;
    i = i + 1 | 0;
  }
  ;
  return result;
}

// node_modules/rescript/lib/es6/curry.js
function app$1(_f, _args) {
  while (true) {
    var args = _args;
    var f = _f;
    var init_arity = f.length;
    var arity = init_arity === 0 ? 1 : init_arity;
    var len = args.length;
    var d = arity - len | 0;
    if (d === 0) {
      return f.apply(null, args);
    }
    if (d >= 0) {
      return function(f2, args2) {
        return function(x) {
          return app$1(f2, args2.concat([x]));
        };
      }(f, args);
    }
    _args = sub$1(args, arity, -d | 0);
    _f = f.apply(null, sub$1(args, 0, arity));
    continue;
  }
  ;
}
function _1$1(o, a0) {
  var arity = o.length;
  if (arity === 1) {
    return o(a0);
  } else {
    switch (arity) {
      case 1:
        return o(a0);
      case 2:
        return function(param) {
          return o(a0, param);
        };
      case 3:
        return function(param, param$1) {
          return o(a0, param, param$1);
        };
      case 4:
        return function(param, param$1, param$2) {
          return o(a0, param, param$1, param$2);
        };
      case 5:
        return function(param, param$1, param$2, param$3) {
          return o(a0, param, param$1, param$2, param$3);
        };
      case 6:
        return function(param, param$1, param$2, param$3, param$4) {
          return o(a0, param, param$1, param$2, param$3, param$4);
        };
      case 7:
        return function(param, param$1, param$2, param$3, param$4, param$5) {
          return o(a0, param, param$1, param$2, param$3, param$4, param$5);
        };
      default:
        return app$1(o, [a0]);
    }
  }
}
function __1$1(o) {
  var arity = o.length;
  if (arity === 1) {
    return o;
  } else {
    return function(a0) {
      return _1$1(o, a0);
    };
  }
}

// node_modules/rescript/lib/es6/caml_option.js
function some$3(x) {
  if (x === void 0) {
    return {
      BS_PRIVATE_NESTED_SOME_NONE: 0
    };
  } else if (x !== null && x.BS_PRIVATE_NESTED_SOME_NONE !== void 0) {
    return {
      BS_PRIVATE_NESTED_SOME_NONE: x.BS_PRIVATE_NESTED_SOME_NONE + 1 | 0
    };
  } else {
    return x;
  }
}

// node_modules/rescript/lib/es6/caml_exceptions.js
var id = {
  contents: 0
};
function create(str) {
  id.contents = id.contents + 1 | 0;
  return str + ("/" + id.contents);
}
function caml_is_extension(e) {
  if (e == null) {
    return false;
  } else {
    return typeof e.RE_EXN_ID === "string";
  }
}

// node_modules/rescript/lib/es6/caml_js_exceptions.js
var $$Error = /* @__PURE__ */ create("Caml_js_exceptions.Error");
function internalToOCamlException(e) {
  if (caml_is_extension(e)) {
    return e;
  } else {
    return {
      RE_EXN_ID: $$Error,
      _1: e
    };
  }
}

// node_modules/rescript/lib/es6/js_exn.js
var $$Error$1 = $$Error;

// node_modules/rescript/lib/es6/belt_Result.js
function getExn$1(x) {
  if (x.TAG === 0) {
    return x._0;
  }
  throw {
    RE_EXN_ID: "Not_found",
    Error: new Error()
  };
}
function mapWithDefaultU$1(opt, $$default, f) {
  if (opt.TAG === 0) {
    return f(opt._0);
  } else {
    return $$default;
  }
}
function mapU$2(opt, f) {
  if (opt.TAG === 0) {
    return {
      TAG: 0,
      _0: f(opt._0)
    };
  } else {
    return {
      TAG: 1,
      _0: opt._0
    };
  }
}
function flatMapU$1(opt, f) {
  if (opt.TAG === 0) {
    return f(opt._0);
  } else {
    return {
      TAG: 1,
      _0: opt._0
    };
  }
}
function flatMap$1(opt, f) {
  return flatMapU$1(opt, __1$1(f));
}
function getWithDefault$1(opt, $$default) {
  if (opt.TAG === 0) {
    return opt._0;
  } else {
    return $$default;
  }
}
function isOk(param) {
  if (param.TAG === 0) {
    return true;
  } else {
    return false;
  }
}
function isError$1(param) {
  if (param.TAG === 0) {
    return false;
  } else {
    return true;
  }
}

// src/Result/Result.bs.js
function placeholder$5(param) {
}
function _fromNullable(value, errorValue) {
  if (value == null) {
    return {
      TAG: 1,
      _0: errorValue
    };
  } else {
    return {
      TAG: 0,
      _0: value
    };
  }
}
function fromNullable$1() {
  if (arguments.length === 1) {
    const args = arguments;
    return function fn(data) {
      return _fromNullable(data, args[0]);
    };
  }
  return _fromNullable(arguments[0], arguments[1]);
}
function _fromFalsy(value, errorValue) {
  if (value) {
    return {
      TAG: 0,
      _0: value
    };
  } else {
    return {
      TAG: 1,
      _0: errorValue
    };
  }
}
function fromFalsy$1() {
  if (arguments.length === 1) {
    const args = arguments;
    return function fn(data) {
      return _fromFalsy(data, args[0]);
    };
  }
  return _fromFalsy(arguments[0], arguments[1]);
}
function _fromPredicate$1(value, predicateFn, errorValue) {
  return flatMap$1(fromNullable$1(value, errorValue), function(value2) {
    if (predicateFn(value2)) {
      return {
        TAG: 0,
        _0: value2
      };
    } else {
      return {
        TAG: 1,
        _0: errorValue
      };
    }
  });
}
function fromPredicate$1() {
  if (arguments.length === 2) {
    const args = arguments;
    return function fn(data) {
      return _fromPredicate$1(data, args[0], args[1]);
    };
  }
  return _fromPredicate$1(arguments[0], arguments[1], arguments[2]);
}
function fromExecution$1(fn) {
  try {
    return {
      TAG: 0,
      _0: fn(void 0)
    };
  } catch (raw_err) {
    var err = internalToOCamlException(raw_err);
    if (err.RE_EXN_ID === $$Error$1) {
      return {
        TAG: 1,
        _0: err._1
      };
    }
    throw err;
  }
}
function fromPromise$1(promise) {
  var __x = promise.then(function(value) {
    return Promise.resolve({
      TAG: 0,
      _0: value
    });
  });
  return __x.catch(function(err) {
    return Promise.resolve({
      TAG: 1,
      _0: err
    });
  });
}
var _map$2 = mapU$2;
function map$2() {
  if (arguments.length === 1) {
    const args = arguments;
    return function fn(data) {
      return _map$2(data, args[0]);
    };
  }
  return _map$2(arguments[0], arguments[1]);
}
var _mapWithDefault$1 = mapWithDefaultU$1;
function mapWithDefault$1() {
  if (arguments.length === 2) {
    const args = arguments;
    return function fn(data) {
      return _mapWithDefault$1(data, args[0], args[1]);
    };
  }
  return _mapWithDefault$1(arguments[0], arguments[1], arguments[2]);
}
var _flatMap$1 = flatMapU$1;
function flatMap2$1() {
  if (arguments.length === 1) {
    const args = arguments;
    return function fn(data) {
      return _flatMap$1(data, args[0]);
    };
  }
  return _flatMap$1(arguments[0], arguments[1]);
}
var getExn2$1 = getExn$1;
var _getWithDefault$1 = getWithDefault$1;
function getWithDefault2$1() {
  if (arguments.length === 1) {
    const args = arguments;
    return function fn(data) {
      return _getWithDefault$1(data, args[0]);
    };
  }
  return _getWithDefault$1(arguments[0], arguments[1]);
}
function toUndefined$1(result) {
  return getWithDefault$1(result, void 0);
}
function toNullable$1(result) {
  return getWithDefault$1(result, null);
}
function toOption(result) {
  if (result.TAG === 0) {
    return some$3(result._0);
  }
}
function _match$2(result, okFn, errorFn) {
  if (result.TAG === 0) {
    return okFn(result._0);
  } else {
    return errorFn(result._0);
  }
}
function match$2() {
  if (arguments.length === 2) {
    const args = arguments;
    return function fn(data) {
      return _match$2(data, args[0], args[1]);
    };
  }
  return _match$2(arguments[0], arguments[1], arguments[2]);
}
var isError2 = isError$1;
var isOk2 = isOk;
function _tap$1(result, okFn) {
  if (result.TAG !== 0) {
    return result;
  }
  okFn(result._0);
  return result;
}
function tap$1() {
  if (arguments.length === 1) {
    const args = arguments;
    return function fn(data) {
      return _tap$1(data, args[0]);
    };
  }
  return _tap$1(arguments[0], arguments[1]);
}
function _tapError(result, errorFn) {
  if (result.TAG === 0) {
    return result;
  }
  errorFn(result._0);
  return result;
}
function tapError() {
  if (arguments.length === 1) {
    const args = arguments;
    return function fn(data) {
      return _tapError(data, args[0]);
    };
  }
  return _tapError(arguments[0], arguments[1]);
}
function _handleError(result, mapFn) {
  if (result.TAG === 0) {
    return result;
  } else {
    return {
      TAG: 0,
      _0: mapFn(result._0)
    };
  }
}
function handleError() {
  if (arguments.length === 1) {
    const args = arguments;
    return function fn(data) {
      return _handleError(data, args[0]);
    };
  }
  return _handleError(arguments[0], arguments[1]);
}
function _mapError(result, mapFn) {
  if (result.TAG === 0) {
    return result;
  } else {
    return {
      TAG: 1,
      _0: mapFn(result._0)
    };
  }
}
function mapError() {
  if (arguments.length === 1) {
    const args = arguments;
    return function fn(data) {
      return _mapError(data, args[0]);
    };
  }
  return _mapError(arguments[0], arguments[1]);
}
function _catchError(result, mapFn) {
  if (result.TAG === 0) {
    return result;
  } else {
    return mapFn(result._0);
  }
}
function catchError() {
  if (arguments.length === 1) {
    const args = arguments;
    return function fn(data) {
      return _catchError(data, args[0]);
    };
  }
  return _catchError(arguments[0], arguments[1]);
}
function _recover(result, defaultValue) {
  return catchError(result, function(param) {
    return {
      TAG: 0,
      _0: defaultValue
    };
  });
}
function recover() {
  if (arguments.length === 1) {
    const args = arguments;
    return function fn(data) {
      return _recover(data, args[0]);
    };
  }
  return _recover(arguments[0], arguments[1]);
}
function flip(result) {
  if (result.TAG === 0) {
    return {
      TAG: 1,
      _0: result._0
    };
  } else {
    return {
      TAG: 0,
      _0: result._0
    };
  }
}

// src/Result/index.js
var Ok = (value) => {
  return {
    TAG: 0,
    _0: value
  };
};
var Error2 = (value) => {
  return {
    TAG: 1,
    _0: value
  };
};

const index$6 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Error: Error2,
  Ok,
  catchError,
  flatMap: flatMap2$1,
  flip,
  fromExecution: fromExecution$1,
  fromFalsy: fromFalsy$1,
  fromNullable: fromNullable$1,
  fromPredicate: fromPredicate$1,
  fromPromise: fromPromise$1,
  getExn: getExn2$1,
  getWithDefault: getWithDefault2$1,
  handleError,
  isError: isError2,
  isOk: isOk2,
  map: map$2,
  mapError,
  mapWithDefault: mapWithDefault$1,
  match: match$2,
  placeholder: placeholder$5,
  recover,
  tap: tap$1,
  tapError,
  toNullable: toNullable$1,
  toOption,
  toUndefined: toUndefined$1
}, Symbol.toStringTag, { value: 'Module' }));

// src/Guards/Guards.bs.js
function _is(value, type_) {
  return typeof value === type_;
}
function is() {
  if (arguments.length === 1) {
    const args = arguments;
    return function fn(data) {
      return _is(data, args[0]);
    };
  }
  return _is(arguments[0], arguments[1]);
}
function isString(value) {
  return typeof value === "string";
}
function isNumber(value) {
  if (typeof value === "number") {
    return !Number.isNaN(value);
  } else {
    return false;
  }
}
function isBoolean(value) {
  return typeof value === "boolean";
}
var isPromise = (value) => value instanceof Promise;
function isArray(value) {
  return Array.isArray(value);
}
function isObject(value) {
  if (!!value && !Array.isArray(value)) {
    return typeof value === "object";
  } else {
    return false;
  }
}
function isFunction(value) {
  return typeof value === "function";
}
var isError = (value) => value instanceof Error;
var isDate = (value) => value instanceof Date;
function isNullable(value) {
  return value == null;
}
function isNotNullable(value) {
  return !(value == null);
}
var isNull = (value) => value === null;
var isUndefined = (value) => value === void 0;
function _isNot(value, predicateFn) {
  return !predicateFn(value);
}
function isNot() {
  if (arguments.length === 1) {
    const args = arguments;
    return function fn(data) {
      return _isNot(data, args[0]);
    };
  }
  return _isNot(arguments[0], arguments[1]);
}

const index$5 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  is,
  isArray,
  isBoolean,
  isDate,
  isError,
  isFunction,
  isNot,
  isNotNullable,
  isNull,
  isNullable,
  isNumber,
  isObject,
  isPromise,
  isString,
  isUndefined
}, Symbol.toStringTag, { value: 'Module' }));

// node_modules/rescript/lib/es6/caml_array.js
function sub(x, offset, len) {
  var result = new Array(len);
  var j = 0;
  var i = offset;
  while (j < len) {
    result[j] = x[i];
    j = j + 1 | 0;
    i = i + 1 | 0;
  }
  ;
  return result;
}

// node_modules/rescript/lib/es6/curry.js
function app(_f, _args) {
  while (true) {
    var args = _args;
    var f = _f;
    var init_arity = f.length;
    var arity = init_arity === 0 ? 1 : init_arity;
    var len = args.length;
    var d = arity - len | 0;
    if (d === 0) {
      return f.apply(null, args);
    }
    if (d >= 0) {
      return function(f2, args2) {
        return function(x) {
          return app(f2, args2.concat([x]));
        };
      }(f, args);
    }
    _args = sub(args, arity, -d | 0);
    _f = f.apply(null, sub(args, 0, arity));
    continue;
  }
  ;
}
function _1(o, a0) {
  var arity = o.length;
  if (arity === 1) {
    return o(a0);
  } else {
    switch (arity) {
      case 1:
        return o(a0);
      case 2:
        return function(param) {
          return o(a0, param);
        };
      case 3:
        return function(param, param$1) {
          return o(a0, param, param$1);
        };
      case 4:
        return function(param, param$1, param$2) {
          return o(a0, param, param$1, param$2);
        };
      case 5:
        return function(param, param$1, param$2, param$3) {
          return o(a0, param, param$1, param$2, param$3);
        };
      case 6:
        return function(param, param$1, param$2, param$3, param$4) {
          return o(a0, param, param$1, param$2, param$3, param$4);
        };
      case 7:
        return function(param, param$1, param$2, param$3, param$4, param$5) {
          return o(a0, param, param$1, param$2, param$3, param$4, param$5);
        };
      default:
        return app(o, [a0]);
    }
  }
}
function __1(o) {
  var arity = o.length;
  if (arity === 1) {
    return o;
  } else {
    return function(a0) {
      return _1(o, a0);
    };
  }
}

// node_modules/rescript/lib/es6/caml_obj.js
var for_in$1 = function(o, foo) {
  for (var x in o) {
    foo(x);
  }
};
function caml_equal$1(a, b) {
  if (a === b) {
    return true;
  }
  var a_type = typeof a;
  if (a_type === "string" || a_type === "number" || a_type === "boolean" || a_type === "undefined" || a === null) {
    return false;
  }
  var b_type = typeof b;
  if (a_type === "function" || b_type === "function") {
    throw {
      RE_EXN_ID: "Invalid_argument",
      _1: "equal: functional value",
      Error: new Error()
    };
  }
  if (b_type === "number" || b_type === "undefined" || b === null) {
    return false;
  }
  var tag_a = a.TAG | 0;
  var tag_b = b.TAG | 0;
  if (tag_a === 248) {
    return a[1] === b[1];
  }
  if (tag_a === 251) {
    throw {
      RE_EXN_ID: "Invalid_argument",
      _1: "equal: abstract value",
      Error: new Error()
    };
  }
  if (tag_a !== tag_b) {
    return false;
  }
  var len_a = a.length | 0;
  var len_b = b.length | 0;
  if (len_a === len_b) {
    if (Array.isArray(a)) {
      var _i = 0;
      while (true) {
        var i = _i;
        if (i === len_a) {
          return true;
        }
        if (!caml_equal$1(a[i], b[i])) {
          return false;
        }
        _i = i + 1 | 0;
        continue;
      }
      ;
    } else if (a instanceof Date && b instanceof Date) {
      return !(a > b || a < b);
    } else {
      var result = {
        contents: true
      };
      var do_key_a = function(key) {
        if (!Object.prototype.hasOwnProperty.call(b, key)) {
          result.contents = false;
          return;
        }
      };
      var do_key_b = function(key) {
        if (!Object.prototype.hasOwnProperty.call(a, key) || !caml_equal$1(b[key], a[key])) {
          result.contents = false;
          return;
        }
      };
      for_in$1(a, do_key_a);
      if (result.contents) {
        for_in$1(b, do_key_b);
      }
      return result.contents;
    }
  } else {
    return false;
  }
}

// node_modules/rescript/lib/es6/caml_option.js
function some$2(x) {
  if (x === void 0) {
    return {
      BS_PRIVATE_NESTED_SOME_NONE: 0
    };
  } else if (x !== null && x.BS_PRIVATE_NESTED_SOME_NONE !== void 0) {
    return {
      BS_PRIVATE_NESTED_SOME_NONE: x.BS_PRIVATE_NESTED_SOME_NONE + 1 | 0
    };
  } else {
    return x;
  }
}
function nullable_to_opt(x) {
  if (x == null) {
    return;
  } else {
    return some$2(x);
  }
}
function valFromOption(x) {
  if (!(x !== null && x.BS_PRIVATE_NESTED_SOME_NONE !== void 0)) {
    return x;
  }
  var depth = x.BS_PRIVATE_NESTED_SOME_NONE;
  if (depth === 0) {
    return;
  } else {
    return {
      BS_PRIVATE_NESTED_SOME_NONE: depth - 1 | 0
    };
  }
}

// node_modules/rescript/lib/es6/belt_Option.js
function getExn(x) {
  if (x !== void 0) {
    return valFromOption(x);
  }
  throw {
    RE_EXN_ID: "Not_found",
    Error: new Error()
  };
}
function mapWithDefaultU(opt, $$default, f) {
  if (opt !== void 0) {
    return f(valFromOption(opt));
  } else {
    return $$default;
  }
}
function mapU$1(opt, f) {
  if (opt !== void 0) {
    return some$2(f(valFromOption(opt)));
  }
}
function flatMapU(opt, f) {
  if (opt !== void 0) {
    return f(valFromOption(opt));
  }
}
function flatMap(opt, f) {
  return flatMapU(opt, __1(f));
}
function getWithDefault(opt, $$default) {
  if (opt !== void 0) {
    return valFromOption(opt);
  } else {
    return $$default;
  }
}
function isSome(param) {
  return param !== void 0;
}
function isNone(x) {
  return x === void 0;
}

// src/Option/Option.bs.js
function placeholder$4(param) {
}
function fromNullable(value) {
  if (value == null) {
    return;
  } else {
    return some$2(value);
  }
}
function fromFalsy(value) {
  if (value) {
    return value;
  }
}
function _fromPredicate(value, predicateFn) {
  return flatMap(value == null ? void 0 : some$2(value), function(value2) {
    if (predicateFn(value2)) {
      return some$2(value2);
    }
  });
}
function fromPredicate() {
  if (arguments.length === 1) {
    const args = arguments;
    return function fn(data) {
      return _fromPredicate(data, args[0]);
    };
  }
  return _fromPredicate(arguments[0], arguments[1]);
}
function fromExecution(fn) {
  try {
    return some$2(fn(void 0));
  } catch (exn) {
    return;
  }
}
function fromPromise(promise) {
  var __x = promise.then(function(value) {
    return Promise.resolve(some$2(value));
  });
  return __x.catch(function(param) {
    return Promise.resolve(void 0);
  });
}
var _map$1 = mapU$1;
function map$1() {
  if (arguments.length === 1) {
    const args = arguments;
    return function fn(data) {
      return _map$1(data, args[0]);
    };
  }
  return _map$1(arguments[0], arguments[1]);
}
var _flatMap = flatMapU;
function flatMap2() {
  if (arguments.length === 1) {
    const args = arguments;
    return function fn(data) {
      return _flatMap(data, args[0]);
    };
  }
  return _flatMap(arguments[0], arguments[1]);
}
var _mapWithDefault = mapWithDefaultU;
function mapWithDefault() {
  if (arguments.length === 2) {
    const args = arguments;
    return function fn(data) {
      return _mapWithDefault(data, args[0], args[1]);
    };
  }
  return _mapWithDefault(arguments[0], arguments[1], arguments[2]);
}
function _mapNullable(option, mapFn) {
  if (option !== void 0) {
    return nullable_to_opt(mapFn(valFromOption(option)));
  }
}
function mapNullable() {
  if (arguments.length === 1) {
    const args = arguments;
    return function fn(data) {
      return _mapNullable(data, args[0]);
    };
  }
  return _mapNullable(arguments[0], arguments[1]);
}
function _filter$1(option, predicateFn) {
  return flatMapU(option, function(value) {
    if (predicateFn(value)) {
      return some$2(value);
    }
  });
}
function filter$1() {
  if (arguments.length === 1) {
    const args = arguments;
    return function fn(data) {
      return _filter$1(data, args[0]);
    };
  }
  return _filter$1(arguments[0], arguments[1]);
}
var _getWithDefault = getWithDefault;
function getWithDefault2() {
  if (arguments.length === 1) {
    const args = arguments;
    return function fn(data) {
      return _getWithDefault(data, args[0]);
    };
  }
  return _getWithDefault(arguments[0], arguments[1]);
}
var getExn2 = getExn;
function toNullable(option) {
  return getWithDefault(option, null);
}
function toUndefined(option) {
  return getWithDefault(option, void 0);
}
function _toResult(option, errorValue) {
  if (option !== void 0) {
    return {
      TAG: 0,
      _0: valFromOption(option)
    };
  } else {
    return {
      TAG: 1,
      _0: errorValue
    };
  }
}
function toResult() {
  if (arguments.length === 1) {
    const args = arguments;
    return function fn(data) {
      return _toResult(data, args[0]);
    };
  }
  return _toResult(arguments[0], arguments[1]);
}
function _match$1(option, someFn, noneFn) {
  if (option !== void 0) {
    return someFn(valFromOption(option));
  } else {
    return noneFn(void 0);
  }
}
function match$1() {
  if (arguments.length === 2) {
    const args = arguments;
    return function fn(data) {
      return _match$1(data, args[0], args[1]);
    };
  }
  return _match$1(arguments[0], arguments[1], arguments[2]);
}
var isNone2 = isNone;
var isSome2 = isSome;
function _tap(option, someFn) {
  if (option !== void 0) {
    someFn(valFromOption(option));
    return option;
  } else {
    return option;
  }
}
function tap() {
  if (arguments.length === 1) {
    const args = arguments;
    return function fn(data) {
      return _tap(data, args[0]);
    };
  }
  return _tap(arguments[0], arguments[1]);
}
function _contains(option, value) {
  return mapWithDefaultU(option, false, function(someValue) {
    return caml_equal$1(someValue, value);
  });
}
function contains() {
  if (arguments.length === 1) {
    const args = arguments;
    return function fn(data) {
      return _contains(data, args[0]);
    };
  }
  return _contains(arguments[0], arguments[1]);
}
function _zip(fstOption, sndOption) {
  if (fstOption !== void 0 && sndOption !== void 0) {
    return [
      valFromOption(fstOption),
      valFromOption(sndOption)
    ];
  }
}
function zip() {
  if (arguments.length === 1) {
    const args = arguments;
    return function fn(data) {
      return _zip(data, args[0]);
    };
  }
  return _zip(arguments[0], arguments[1]);
}
function _zipWith(fstOption, sndOption, mapFn) {
  if (fstOption !== void 0 && sndOption !== void 0) {
    return some$2(mapFn(valFromOption(fstOption), valFromOption(sndOption)));
  }
}
function zipWith() {
  if (arguments.length === 2) {
    const args = arguments;
    return function fn(data) {
      return _zipWith(data, args[0], args[1]);
    };
  }
  return _zipWith(arguments[0], arguments[1], arguments[2]);
}

// src/Option/index.js
var Some = (value) => value;
var None = void 0;

const index$4 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  None,
  Some,
  contains,
  filter: filter$1,
  flatMap: flatMap2,
  fromExecution,
  fromFalsy,
  fromNullable,
  fromPredicate,
  fromPromise,
  getExn: getExn2,
  getWithDefault: getWithDefault2,
  isNone: isNone2,
  isSome: isSome2,
  map: map$1,
  mapNullable,
  mapWithDefault,
  match: match$1,
  placeholder: placeholder$4,
  tap,
  toNullable,
  toResult,
  toUndefined,
  zip,
  zipWith
}, Symbol.toStringTag, { value: 'Module' }));

// node_modules/rescript/lib/es6/caml_option.js
function some$1(x) {
  if (x === void 0) {
    return {
      BS_PRIVATE_NESTED_SOME_NONE: 0
    };
  } else if (x !== null && x.BS_PRIVATE_NESTED_SOME_NONE !== void 0) {
    return {
      BS_PRIVATE_NESTED_SOME_NONE: x.BS_PRIVATE_NESTED_SOME_NONE + 1 | 0
    };
  } else {
    return x;
  }
}
function undefined_to_opt(x) {
  if (x === void 0) {
    return;
  } else {
    return some$1(x);
  }
}
function null_to_opt(x) {
  if (x === null) {
    return;
  } else {
    return some$1(x);
  }
}

// node_modules/rescript/lib/es6/belt_Array.js
function makeByU(l, f) {
  if (l <= 0) {
    return [];
  }
  var res = new Array(l);
  for (var i = 0; i < l; ++i) {
    res[i] = f(i);
  }
  return res;
}
function reduceWithIndexU(a, x, f) {
  var r = x;
  for (var i = 0, i_finish = a.length; i < i_finish; ++i) {
    r = f(r, a[i], i);
  }
  return r;
}

// src/String/String.bs.js
function placeholder$3(param) {
}
function make(value) {
  return String(value);
}
function length(str) {
  return str.length;
}
function _concat(str, appendValue) {
  return str.concat(appendValue);
}
function concat$1() {
  if (arguments.length === 1) {
    const args = arguments;
    return function fn(data) {
      return _concat(data, args[0]);
    };
  }
  return _concat(arguments[0], arguments[1]);
}
function _append$1(str, appendValue) {
  return str.concat(appendValue);
}
function append$1() {
  if (arguments.length === 1) {
    const args = arguments;
    return function fn(data) {
      return _append$1(data, args[0]);
    };
  }
  return _append$1(arguments[0], arguments[1]);
}
function _prepend(str, prependValue) {
  return prependValue.concat(str);
}
function prepend() {
  if (arguments.length === 1) {
    const args = arguments;
    return function fn(data) {
      return _prepend(data, args[0]);
    };
  }
  return _prepend(arguments[0], arguments[1]);
}
function _slice(str, start, end) {
  return str.slice(start, end);
}
function slice() {
  if (arguments.length === 2) {
    const args = arguments;
    return function fn(data) {
      return _slice(data, args[0], args[1]);
    };
  }
  return _slice(arguments[0], arguments[1], arguments[2]);
}
function _sliceToEnd(str, start) {
  return str.slice(start);
}
function sliceToEnd() {
  if (arguments.length === 1) {
    const args = arguments;
    return function fn(data) {
      return _sliceToEnd(data, args[0]);
    };
  }
  return _sliceToEnd(arguments[0], arguments[1]);
}
function toLowerCase(str) {
  return str.toLowerCase();
}
function toUpperCase(str) {
  return str.toUpperCase();
}
function trim(str) {
  return str.trim();
}
function trimStart(str) {
  return str.trimStart();
}
function trimEnd(str) {
  return str.trimEnd();
}
function isEmpty$1(str) {
  return str.length === 0;
}
function isNotEmpty$1(str) {
  return str.length > 0;
}
function _split(str, delimiter) {
  return str.split(delimiter);
}
function split() {
  if (arguments.length === 1) {
    const args = arguments;
    return function fn(data) {
      return _split(data, args[0]);
    };
  }
  return _split(arguments[0], arguments[1]);
}
function _splitByRe(str, regex) {
  return str.split(regex);
}
function splitByRe() {
  if (arguments.length === 1) {
    const args = arguments;
    return function fn(data) {
      return _splitByRe(data, args[0]);
    };
  }
  return _splitByRe(arguments[0], arguments[1]);
}
function _splitAt(str, index) {
  return [
    str.slice(0, index),
    str.slice(index)
  ];
}
function splitAt() {
  if (arguments.length === 1) {
    const args = arguments;
    return function fn(data) {
      return _splitAt(data, args[0]);
    };
  }
  return _splitAt(arguments[0], arguments[1]);
}
function _includes(str, searchValue) {
  return str.includes(searchValue);
}
function includes() {
  if (arguments.length === 1) {
    const args = arguments;
    return function fn(data) {
      return _includes(data, args[0]);
    };
  }
  return _includes(arguments[0], arguments[1]);
}
function _replace(str, oldValue, newValue) {
  return str.replace(oldValue, newValue);
}
function replace() {
  if (arguments.length === 2) {
    const args = arguments;
    return function fn(data) {
      return _replace(data, args[0], args[1]);
    };
  }
  return _replace(arguments[0], arguments[1], arguments[2]);
}
function _replaceAll(str, oldValue, newValue) {
  var xs = str.split(oldValue);
  return reduceWithIndexU(xs, "", function(acc, str2, index) {
    var value = index < (xs.length - 1 | 0) ? str2.concat(newValue) : str2;
    return acc.concat(value);
  });
}
function replaceAll() {
  if (arguments.length === 2) {
    const args = arguments;
    return function fn(data) {
      return _replaceAll(data, args[0], args[1]);
    };
  }
  return _replaceAll(arguments[0], arguments[1], arguments[2]);
}
function _replaceByRe(str, regex, value) {
  return str.replace(regex, value);
}
function replaceByRe() {
  if (arguments.length === 2) {
    const args = arguments;
    return function fn(data) {
      return _replaceByRe(data, args[0], args[1]);
    };
  }
  return _replaceByRe(arguments[0], arguments[1], arguments[2]);
}
function _remove(str, value) {
  return str.replace(value, "");
}
function remove() {
  if (arguments.length === 1) {
    const args = arguments;
    return function fn(data) {
      return _remove(data, args[0]);
    };
  }
  return _remove(arguments[0], arguments[1]);
}
function _removeAll(str, value) {
  return replaceAll(str, value, "");
}
function removeAll() {
  if (arguments.length === 1) {
    const args = arguments;
    return function fn(data) {
      return _removeAll(data, args[0]);
    };
  }
  return _removeAll(arguments[0], arguments[1]);
}
function _search(str, regex) {
  var index = str.search(regex);
  if (index < 0) {
    return;
  } else {
    return index;
  }
}
function search() {
  if (arguments.length === 1) {
    const args = arguments;
    return function fn(data) {
      return _search(data, args[0]);
    };
  }
  return _search(arguments[0], arguments[1]);
}
function _match(str, regex) {
  return null_to_opt(str.match(regex));
}
function match() {
  if (arguments.length === 1) {
    const args = arguments;
    return function fn(data) {
      return _match(data, args[0]);
    };
  }
  return _match(arguments[0], arguments[1]);
}
function _repeat(str, n) {
  return str.repeat(n);
}
function repeat() {
  if (arguments.length === 1) {
    const args = arguments;
    return function fn(data) {
      return _repeat(data, args[0]);
    };
  }
  return _repeat(arguments[0], arguments[1]);
}
function _indexOf(str, searchValue) {
  var index = str.indexOf(searchValue);
  if (index < 0) {
    return;
  } else {
    return index;
  }
}
function indexOf() {
  if (arguments.length === 1) {
    const args = arguments;
    return function fn(data) {
      return _indexOf(data, args[0]);
    };
  }
  return _indexOf(arguments[0], arguments[1]);
}
function _lastIndexOf(str, searchValue) {
  var index = str.lastIndexOf(searchValue);
  if (index < 0) {
    return;
  } else {
    return index;
  }
}
function lastIndexOf() {
  if (arguments.length === 1) {
    const args = arguments;
    return function fn(data) {
      return _lastIndexOf(data, args[0]);
    };
  }
  return _lastIndexOf(arguments[0], arguments[1]);
}
function _endsWith(str, substr) {
  return str.endsWith(substr);
}
function endsWith() {
  if (arguments.length === 1) {
    const args = arguments;
    return function fn(data) {
      return _endsWith(data, args[0]);
    };
  }
  return _endsWith(arguments[0], arguments[1]);
}
function _startsWith(str, substr) {
  return str.startsWith(substr);
}
function startsWith() {
  if (arguments.length === 1) {
    const args = arguments;
    return function fn(data) {
      return _startsWith(data, args[0]);
    };
  }
  return _startsWith(arguments[0], arguments[1]);
}
function _getUnsafe$1(str, n) {
  return str[n];
}
function getUnsafe$1() {
  if (arguments.length === 1) {
    const args = arguments;
    return function fn(data) {
      return _getUnsafe$1(data, args[0]);
    };
  }
  return _getUnsafe$1(arguments[0], arguments[1]);
}
function _get$1(str, n) {
  return undefined_to_opt(str[n]);
}
function get$1() {
  if (arguments.length === 1) {
    const args = arguments;
    return function fn(data) {
      return _get$1(data, args[0]);
    };
  }
  return _get$1(arguments[0], arguments[1]);
}
function toArray(str) {
  return makeByU(str.length, function(index) {
    return str[index];
  });
}
function head(str) {
  return undefined_to_opt(str[0]);
}
function last(str) {
  var n = str.length - 1 | 0;
  return undefined_to_opt(str[n]);
}

const index$3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  append: append$1,
  concat: concat$1,
  endsWith,
  get: get$1,
  getUnsafe: getUnsafe$1,
  head,
  includes,
  indexOf,
  isEmpty: isEmpty$1,
  isNotEmpty: isNotEmpty$1,
  last,
  lastIndexOf,
  length,
  make,
  match,
  placeholder: placeholder$3,
  prepend,
  remove,
  removeAll,
  repeat,
  replace,
  replaceAll,
  replaceByRe,
  search,
  slice,
  sliceToEnd,
  split,
  splitAt,
  splitByRe,
  startsWith,
  toArray,
  toLowerCase,
  toUpperCase,
  trim,
  trimEnd,
  trimStart
}, Symbol.toStringTag, { value: 'Module' }));

// node_modules/rescript/lib/es6/caml_option.js
function some(x) {
  if (x === void 0) {
    return {
      BS_PRIVATE_NESTED_SOME_NONE: 0
    };
  } else if (x !== null && x.BS_PRIVATE_NESTED_SOME_NONE !== void 0) {
    return {
      BS_PRIVATE_NESTED_SOME_NONE: x.BS_PRIVATE_NESTED_SOME_NONE + 1 | 0
    };
  } else {
    return x;
  }
}

// node_modules/rescript/lib/es6/js_dict.js
function get(dict, k) {
  if (k in dict) {
    return some(dict[k]);
  }
}
var unsafeDeleteKey = function(dict, key) {
  delete dict[key];
};
function values(dict) {
  var keys2 = Object.keys(dict);
  var l = keys2.length;
  var values$1 = new Array(l);
  for (var i = 0; i < l; ++i) {
    values$1[i] = dict[keys2[i]];
  }
  return values$1;
}
function fromArray(entries) {
  var dict = {};
  var l = entries.length;
  for (var i = 0; i < l; ++i) {
    var match = entries[i];
    dict[match[0]] = match[1];
  }
  return dict;
}

// node_modules/rescript/lib/es6/caml_obj.js
var for_in = function(o, foo) {
  for (var x in o) {
    foo(x);
  }
};
function caml_equal(a, b) {
  if (a === b) {
    return true;
  }
  var a_type = typeof a;
  if (a_type === "string" || a_type === "number" || a_type === "boolean" || a_type === "undefined" || a === null) {
    return false;
  }
  var b_type = typeof b;
  if (a_type === "function" || b_type === "function") {
    throw {
      RE_EXN_ID: "Invalid_argument",
      _1: "equal: functional value",
      Error: new Error()
    };
  }
  if (b_type === "number" || b_type === "undefined" || b === null) {
    return false;
  }
  var tag_a = a.TAG | 0;
  var tag_b = b.TAG | 0;
  if (tag_a === 248) {
    return a[1] === b[1];
  }
  if (tag_a === 251) {
    throw {
      RE_EXN_ID: "Invalid_argument",
      _1: "equal: abstract value",
      Error: new Error()
    };
  }
  if (tag_a !== tag_b) {
    return false;
  }
  var len_a = a.length | 0;
  var len_b = b.length | 0;
  if (len_a === len_b) {
    if (Array.isArray(a)) {
      var _i = 0;
      while (true) {
        var i = _i;
        if (i === len_a) {
          return true;
        }
        if (!caml_equal(a[i], b[i])) {
          return false;
        }
        _i = i + 1 | 0;
        continue;
      }
      ;
    } else if (a instanceof Date && b instanceof Date) {
      return !(a > b || a < b);
    } else {
      var result = {
        contents: true
      };
      var do_key_a = function(key) {
        if (!Object.prototype.hasOwnProperty.call(b, key)) {
          result.contents = false;
          return;
        }
      };
      var do_key_b = function(key) {
        if (!Object.prototype.hasOwnProperty.call(a, key) || !caml_equal(b[key], a[key])) {
          result.contents = false;
          return;
        }
      };
      for_in(a, do_key_a);
      if (result.contents) {
        for_in(b, do_key_b);
      }
      return result.contents;
    }
  } else {
    return false;
  }
}

// node_modules/rescript/lib/es6/belt_Array.js
function concat(a1, a2) {
  var l1 = a1.length;
  var l2 = a2.length;
  var a1a2 = new Array(l1 + l2 | 0);
  for (var i = 0; i < l1; ++i) {
    a1a2[i] = a1[i];
  }
  for (var i$1 = 0; i$1 < l2; ++i$1) {
    a1a2[l1 + i$1 | 0] = a2[i$1];
  }
  return a1a2;
}
function forEachU(a, f) {
  for (var i = 0, i_finish = a.length; i < i_finish; ++i) {
    f(a[i]);
  }
}
function mapU(a, f) {
  var l = a.length;
  var r = new Array(l);
  for (var i = 0; i < l; ++i) {
    r[i] = f(a[i]);
  }
  return r;
}
function reduceU(a, x, f) {
  var r = x;
  for (var i = 0, i_finish = a.length; i < i_finish; ++i) {
    r = f(r, a[i]);
  }
  return r;
}

// src/Array/Array.bs.js
function _append(xs, element) {
  return concat(xs, [element]);
}
function append() {
  if (arguments.length === 1) {
    const args = arguments;
    return function fn(data) {
      return _append(data, args[0]);
    };
  }
  return _append(arguments[0], arguments[1]);
}

// src/Dict/Dict.bs.js
function placeholder$2(param) {
}
function makeEmpty(prim) {
  return {};
}
function _getUnsafe(dict, key) {
  return dict[key];
}
function getUnsafe() {
  if (arguments.length === 1) {
    const args = arguments;
    return function fn(data) {
      return _getUnsafe(data, args[0]);
    };
  }
  return _getUnsafe(arguments[0], arguments[1]);
}
var _get = get;
function get3() {
  if (arguments.length === 1) {
    const args = arguments;
    return function fn(data) {
      return _get(data, args[0]);
    };
  }
  return _get(arguments[0], arguments[1]);
}
function _prop(dict, key) {
  return dict[key];
}
function prop() {
  if (arguments.length === 1) {
    const args = arguments;
    return function fn(data) {
      return _prop(data, args[0]);
    };
  }
  return _prop(arguments[0], arguments[1]);
}
function toPairs(dict) {
  return Object.entries(dict);
}
var values2 = values;
function keys(dict) {
  return Object.keys(dict);
}
var fromPairs = fromArray;
function _merge(fst, snd) {
  return Object.assign({}, fst, snd);
}
function merge() {
  if (arguments.length === 1) {
    const args = arguments;
    return function fn(data) {
      return _merge(data, args[0]);
    };
  }
  return _merge(arguments[0], arguments[1]);
}
function _set(dict, key, value) {
  var obj = merge({}, dict);
  obj[key] = value;
  return obj;
}
function set() {
  if (arguments.length === 2) {
    const args = arguments;
    return function fn(data) {
      return _set(data, args[0], args[1]);
    };
  }
  return _set(arguments[0], arguments[1], arguments[2]);
}
function _update(dict, key, fn) {
  var optionalValue = get(dict, key);
  return set(dict, key, fn(optionalValue));
}
function update() {
  if (arguments.length === 2) {
    const args = arguments;
    return function fn(data) {
      return _update(data, args[0], args[1]);
    };
  }
  return _update(arguments[0], arguments[1], arguments[2]);
}
function _updateUnsafe(dict, key, fn) {
  var value = dict[key];
  return set(dict, key, fn(value));
}
function updateUnsafe() {
  if (arguments.length === 2) {
    const args = arguments;
    return function fn(data) {
      return _updateUnsafe(data, args[0], args[1]);
    };
  }
  return _updateUnsafe(arguments[0], arguments[1], arguments[2]);
}
function _deleteKey(dict, key) {
  var obj = merge({}, dict);
  unsafeDeleteKey(obj, key);
  return obj;
}
function deleteKey() {
  if (arguments.length === 1) {
    const args = arguments;
    return function fn(data) {
      return _deleteKey(data, args[0]);
    };
  }
  return _deleteKey(arguments[0], arguments[1]);
}
function _deleteKeys(dict, keys2) {
  var obj = merge({}, dict);
  forEachU(keys2, function(key) {
    return unsafeDeleteKey(obj, key);
  });
  return obj;
}
function deleteKeys() {
  if (arguments.length === 1) {
    const args = arguments;
    return function fn(data) {
      return _deleteKeys(data, args[0]);
    };
  }
  return _deleteKeys(arguments[0], arguments[1]);
}
function _map(dict, mapFn) {
  return fromArray(mapU(Object.keys(dict), function(key) {
    var value = mapFn(dict[key]);
    return [
      key,
      value
    ];
  }));
}
function map() {
  if (arguments.length === 1) {
    const args = arguments;
    return function fn(data) {
      return _map(data, args[0]);
    };
  }
  return _map(arguments[0], arguments[1]);
}
function _mapWithKey(dict, mapFn) {
  return fromArray(mapU(Object.keys(dict), function(key) {
    var value = mapFn(key, dict[key]);
    return [
      key,
      value
    ];
  }));
}
function mapWithKey() {
  if (arguments.length === 1) {
    const args = arguments;
    return function fn(data) {
      return _mapWithKey(data, args[0]);
    };
  }
  return _mapWithKey(arguments[0], arguments[1]);
}
function _filter(dict, predicateFn) {
  return fromArray(reduceU(Object.keys(dict), [], function(acc, key) {
    var value = dict[key];
    if (predicateFn(value)) {
      return append(acc, [
        key,
        value
      ]);
    } else {
      return acc;
    }
  }));
}
function filter() {
  if (arguments.length === 1) {
    const args = arguments;
    return function fn(data) {
      return _filter(data, args[0]);
    };
  }
  return _filter(arguments[0], arguments[1]);
}
function _filterWithKey(dict, predicateFn) {
  return fromArray(reduceU(Object.keys(dict), [], function(acc, key) {
    var value = dict[key];
    if (predicateFn(key, value)) {
      return append(acc, [
        key,
        value
      ]);
    } else {
      return acc;
    }
  }));
}
function filterWithKey() {
  if (arguments.length === 1) {
    const args = arguments;
    return function fn(data) {
      return _filterWithKey(data, args[0]);
    };
  }
  return _filterWithKey(arguments[0], arguments[1]);
}
function _reject(dict, predicateFn) {
  return filter(dict, function(value) {
    return !predicateFn(value);
  });
}
function reject() {
  if (arguments.length === 1) {
    const args = arguments;
    return function fn(data) {
      return _reject(data, args[0]);
    };
  }
  return _reject(arguments[0], arguments[1]);
}
function _rejectWithKey(dict, predicateFn) {
  return filterWithKey(dict, function(key, value) {
    return !predicateFn(key, value);
  });
}
function rejectWithKey() {
  if (arguments.length === 1) {
    const args = arguments;
    return function fn(data) {
      return _rejectWithKey(data, args[0]);
    };
  }
  return _rejectWithKey(arguments[0], arguments[1]);
}
function _selectKeys(dict, keys2) {
  return filterWithKey(dict, function(key, param) {
    return keys2.includes(key);
  });
}
function selectKeys() {
  if (arguments.length === 1) {
    const args = arguments;
    return function fn(data) {
      return _selectKeys(data, args[0]);
    };
  }
  return _selectKeys(arguments[0], arguments[1]);
}
function isEmpty(dict) {
  return caml_equal(dict, {});
}
function isNotEmpty(dict) {
  return !caml_equal(dict, {});
}

const index$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  deleteKey,
  deleteKeys,
  filter,
  filterWithKey,
  fromPairs,
  get: get3,
  getUnsafe,
  isEmpty,
  isNotEmpty,
  keys,
  makeEmpty,
  map,
  mapWithKey,
  merge,
  placeholder: placeholder$2,
  prop,
  reject,
  rejectWithKey,
  selectKeys,
  set,
  toPairs,
  update,
  updateUnsafe,
  values: values2
}, Symbol.toStringTag, { value: 'Module' }));

// src/Bool/Bool.bs.js
function placeholder$1(param) {
}
function _ifElse(value, truthyFn, falsyFn) {
  if (value) {
    return truthyFn(void 0);
  } else {
    return falsyFn(void 0);
  }
}
function ifElse() {
  if (arguments.length === 2) {
    const args = arguments;
    return function fn(data) {
      return _ifElse(data, args[0], args[1]);
    };
  }
  return _ifElse(arguments[0], arguments[1], arguments[2]);
}
function inverse(value) {
  return !value;
}
function not(value) {
  return !value;
}
function _and_(a, b) {
  if (a) {
    return b;
  } else {
    return false;
  }
}
function and() {
  if (arguments.length === 1) {
    const args = arguments;
    return function fn(data) {
      return _and_(data, args[0]);
    };
  }
  return _and_(arguments[0], arguments[1]);
}
function _or_(a, b) {
  if (a) {
    return true;
  } else {
    return b;
  }
}
function or() {
  if (arguments.length === 1) {
    const args = arguments;
    return function fn(data) {
      return _or_(data, args[0]);
    };
  }
  return _or_(arguments[0], arguments[1]);
}
function _nand(a, b) {
  return !(a && b);
}
function nand() {
  if (arguments.length === 1) {
    const args = arguments;
    return function fn(data) {
      return _nand(data, args[0]);
    };
  }
  return _nand(arguments[0], arguments[1]);
}
function _nor(a, b) {
  return !(a || b);
}
function nor() {
  if (arguments.length === 1) {
    const args = arguments;
    return function fn(data) {
      return _nor(data, args[0]);
    };
  }
  return _nor(arguments[0], arguments[1]);
}
function _xor(a, b) {
  if (!a && b) {
    return true;
  } else if (a) {
    return !b;
  } else {
    return false;
  }
}
function xor() {
  if (arguments.length === 1) {
    const args = arguments;
    return function fn(data) {
      return _xor(data, args[0]);
    };
  }
  return _xor(arguments[0], arguments[1]);
}
function _xnor(a, b) {
  return !xor(a, b);
}
function xnor() {
  if (arguments.length === 1) {
    const args = arguments;
    return function fn(data) {
      return _xnor(data, args[0]);
    };
  }
  return _xnor(arguments[0], arguments[1]);
}
function _implies(a, b) {
  if (a) {
    return b;
  } else {
    return true;
  }
}
function implies() {
  if (arguments.length === 1) {
    const args = arguments;
    return function fn(data) {
      return _implies(data, args[0]);
    };
  }
  return _implies(arguments[0], arguments[1]);
}

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  and,
  ifElse,
  implies,
  inverse,
  nand,
  nor,
  not,
  or,
  placeholder: placeholder$1,
  xnor,
  xor
}, Symbol.toStringTag, { value: 'Module' }));

// node_modules/rescript/lib/es6/caml_int32.js
function mod_(x, y) {
  if (y === 0) {
    throw {
      RE_EXN_ID: "Division_by_zero",
      Error: new Error()
    };
  }
  return x % y;
}

// src/Number/Number.bs.js
function placeholder(param) {
}
function pred(n) {
  return n - 1 | 0;
}
function succ(n) {
  return n + 1 | 0;
}
function _add(a, b) {
  return a + b;
}
function add() {
  if (arguments.length === 1) {
    const args = arguments;
    return function fn(data) {
      return _add(data, args[0]);
    };
  }
  return _add(arguments[0], arguments[1]);
}
function _subtract(a, b) {
  return a - b;
}
function subtract() {
  if (arguments.length === 1) {
    const args = arguments;
    return function fn(data) {
      return _subtract(data, args[0]);
    };
  }
  return _subtract(arguments[0], arguments[1]);
}
function _multiply(a, b) {
  return a * b;
}
function multiply() {
  if (arguments.length === 1) {
    const args = arguments;
    return function fn(data) {
      return _multiply(data, args[0]);
    };
  }
  return _multiply(arguments[0], arguments[1]);
}
function _divide(a, b) {
  return a / b;
}
function divide() {
  if (arguments.length === 1) {
    const args = arguments;
    return function fn(data) {
      return _divide(data, args[0]);
    };
  }
  return _divide(arguments[0], arguments[1]);
}
var _modulo = mod_;
function modulo() {
  if (arguments.length === 1) {
    const args = arguments;
    return function fn(data) {
      return _modulo(data, args[0]);
    };
  }
  return _modulo(arguments[0], arguments[1]);
}
function _divideWithModulo(a, b) {
  return [
    a / b,
    mod_(a | 0, b | 0)
  ];
}
function divideWithModulo() {
  if (arguments.length === 1) {
    const args = arguments;
    return function fn(data) {
      return _divideWithModulo(data, args[0]);
    };
  }
  return _divideWithModulo(arguments[0], arguments[1]);
}
function _gt(a, b) {
  return a > b;
}
function gt() {
  if (arguments.length === 1) {
    const args = arguments;
    return function fn(data) {
      return _gt(data, args[0]);
    };
  }
  return _gt(arguments[0], arguments[1]);
}
function _gte(a, b) {
  return a >= b;
}
function gte() {
  if (arguments.length === 1) {
    const args = arguments;
    return function fn(data) {
      return _gte(data, args[0]);
    };
  }
  return _gte(arguments[0], arguments[1]);
}
function _lt(a, b) {
  return a < b;
}
function lt() {
  if (arguments.length === 1) {
    const args = arguments;
    return function fn(data) {
      return _lt(data, args[0]);
    };
  }
  return _lt(arguments[0], arguments[1]);
}
function _lte(a, b) {
  return a <= b;
}
function lte() {
  if (arguments.length === 1) {
    const args = arguments;
    return function fn(data) {
      return _lte(data, args[0]);
    };
  }
  return _lte(arguments[0], arguments[1]);
}
function _clamp(num, min, max) {
  return Math.min(Math.max(num, min), max);
}
function clamp() {
  if (arguments.length === 2) {
    const args = arguments;
    return function fn(data) {
      return _clamp(data, args[0], args[1]);
    };
  }
  return _clamp(arguments[0], arguments[1], arguments[2]);
}

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  add,
  clamp,
  divide,
  divideWithModulo,
  gt,
  gte,
  lt,
  lte,
  modulo,
  multiply,
  placeholder,
  pred,
  subtract,
  succ
}, Symbol.toStringTag, { value: 'Module' }));

function useTrackQueryParams() {
  const { search } = useLocation();
  const navigate = useNavigate();
  const params = reactExports.useMemo(() => new URLSearchParams(search), [search]);
  const page = pipe(
    params.get("page"),
    fromNullable,
    map$1((s) => parseInt(s, 10)),
    filter$1(Number.isFinite),
    getWithDefault2(1)
  );
  const limit = pipe(
    params.get("limit"),
    fromNullable,
    map$1((s) => parseInt(s, 10)),
    filter$1(Number.isFinite),
    getWithDefault2(10)
  );
  const sort = pipe(
    params.get("sort"),
    fromNullable,
    getWithDefault2("")
  );
  const order = pipe(
    params.get("order"),
    fromNullable,
    getWithDefault2("asc")
  );
  const searchText = pipe(
    params.get("search"),
    fromNullable,
    getWithDefault2("")
  );
  const genre = pipe(
    params.get("genre"),
    fromNullable,
    getWithDefault2("")
  );
  const query = reactExports.useMemo(
    () => ({
      page,
      limit,
      sort,
      order,
      search: searchText || void 0,
      genre: genre || void 0
    }),
    [page, limit, sort, order, searchText, genre]
  );
  const setParams = reactExports.useCallback(
    (updates) => {
      const p = new URLSearchParams(window.location.search);
      Object.entries(updates).forEach(([key, value]) => {
        if (value == null || value === "") {
          p.delete(key);
        } else {
          p.set(key, String(value));
        }
      });
      void navigate({ search: p.toString() }, { replace: true });
    },
    [navigate]
  );
  return { query, setParams };
}

function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = reactExports.useState(value);
  reactExports.useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => clearTimeout(timeout);
  }, [value, delay]);
  return debouncedValue;
}

const useTrackSelection = () => {
  const dispatch = useAppDispatch();
  const [selectionMode, setSelectionMode] = reactExports.useState(false);
  const [selectedTracks, setSelectedTracks] = reactExports.useState([]);
  const toggleSelectionMode = () => {
    setSelectionMode((prev) => !prev);
    setSelectedTracks([]);
  };
  const toggleTrackSelection = (id) => {
    setSelectedTracks(
      (prev) => prev.includes(id) ? prev.filter((tid) => tid !== id) : [...prev, id]
    );
  };
  const handleSelectAll = (ids) => {
    setSelectedTracks(ids);
  };
  const handleBulkDelete = async (selectedIds, params) => {
    await Promise.all(selectedIds.map((id) => dispatch(deleteTrack(id))));
    await dispatch(fetchTracks(params)).unwrap().catch((error) => console.error("Failed to fetch tracks:", error));
    setSelectedTracks([]);
    setSelectionMode(false);
  };
  return {
    selectionMode,
    selectedTracks,
    toggleSelectionMode,
    toggleTrackSelection,
    handleSelectAll,
    handleBulkDelete
  };
};

const getGenres = async () => {
  const result = await fromPromise$2(
    axios.get(`${API_BASE}/genres`),
    mapAxiosError
  );
  return result.map((res) => res.data);
};

const fetchGenres = createAsyncThunk("genres/fetchGenres", async (_, thunkAPI) => {
  const result = await getGenres();
  if (result.isOk()) {
    return result.value;
  } else {
    return thunkAPI.rejectWithValue(result.error);
  }
});
const initialState = {
  items: [],
  status: "idle",
  error: void 0
};
const genresSlice = createSlice({
  name: "genres",
  initialState,
  reducers: {},
  extraReducers: (builder) => builder.addCase(fetchGenres.pending, (state) => {
    state.status = "loading";
    state.error = void 0;
  }).addCase(fetchGenres.fulfilled, (state, action) => {
    state.items = action.payload;
    state.status = "succeeded";
  }).addCase(fetchGenres.rejected, (state, action) => {
    state.status = "failed";
    state.error = action.payload ? action.payload.message : action.error.message;
  })
});
const genresSlice$1 = genresSlice.reducer;

function useTrackList(searchQuery) {
  const dispatch = useAppDispatch();
  const { query: params, setParams } = useTrackQueryParams();
  const debouncedSearch = useDebounce(searchQuery, 500);
  const selection = useTrackSelection();
  const onBulkDelete = reactExports.useCallback(
    () => selection.handleBulkDelete(selection.selectedTracks, params),
    [selection, params]
  );
  reactExports.useEffect(() => {
    dispatch(fetchGenres()).unwrap().catch((err) => {
      y.error(
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          ToastMessage,
          {
            message: `Failed to load genres: ${err.message}`,
            type: "error"
          }
        )
      );
    });
  }, [dispatch]);
  reactExports.useEffect(() => {
    if (debouncedSearch !== params.search) {
      setParams({ search: debouncedSearch || void 0, page: 1 });
    }
  }, [debouncedSearch, params.search, setParams]);
  reactExports.useEffect(() => {
    dispatch(fetchTracks(params)).unwrap().catch((err) => {
      y.error(
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          ToastMessage,
          {
            message: `Failed to load tracks: ${err.message}`,
            type: "error"
          }
        )
      );
    });
  }, [dispatch, params]);
  reactExports.useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0 });
    }
  }, [params.page]);
  const onDelete = reactExports.useCallback(
    (id) => dispatch(deleteTrack(id)).unwrap(),
    [dispatch]
  );
  const onGenreChange = reactExports.useCallback(
    (genre) => {
      setParams({ genre: genre || void 0, page: 1 });
    },
    [setParams]
  );
  const onSortChange = reactExports.useCallback(
    (field) => {
      setParams({
        sort: field,
        order: params.sort === field && params.order === "asc" ? "desc" : "asc",
        page: 1
      });
    },
    [params.sort, params.order, setParams]
  );
  const onDirectionToggle = reactExports.useCallback(() => {
    setParams({ order: params.order === "asc" ? "desc" : "asc", page: 1 });
  }, [params.order, setParams]);
  const onPageChange = reactExports.useCallback(
    (newPage) => setParams({ page: newPage }),
    [setParams]
  );
  return {
    params,
    debouncedSearch,
    selectionMode: selection.selectionMode,
    selectedTracks: selection.selectedTracks,
    toggleSelectionMode: selection.toggleSelectionMode,
    toggleTrackSelection: selection.toggleTrackSelection,
    handleSelectAll: selection.handleSelectAll,
    onBulkDelete,
    onDelete,
    onGenreChange,
    onSortChange,
    onDirectionToggle,
    onPageChange
  };
}

const TrackList = ({ onEditTrack, searchQuery }) => {
  const { items, status, limit, totalPages, error } = useTracks();
  const {
    params,
    onDelete,
    onGenreChange,
    onSortChange,
    onDirectionToggle,
    onPageChange,
    selectionMode,
    selectedTracks,
    toggleSelectionMode,
    toggleTrackSelection,
    handleSelectAll,
    onBulkDelete
  } = useTrackList(searchQuery);
  const { items: genres } = useSelector((s) => s.genres);
  const [currentPlayingIndex, setCurrentPlayingIndex] = reactExports.useState(
    null
  );
  const handleTrackEnd = (localIndex) => {
    if (localIndex + 1 < items.length) {
      setCurrentPlayingIndex(localIndex + 1);
    } else {
      setCurrentPlayingIndex(null);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$a.trackList, children: [
    status === "loading" && items.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Preloader, {}),
    status === "failed" && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
      "Error: ",
      error
    ] }),
    items.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        TrackListControls,
        {
          sortBy: params.sort ?? "",
          sortDirection: params.order ?? "asc",
          onSortChange,
          onToggleDirection: onDirectionToggle,
          selectedGenre: params.genre ?? "",
          onGenreChange,
          genres,
          setCurrentPage: onPageChange
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        TrackBulkActions,
        {
          selectionMode,
          selectedCount: selectedTracks.length,
          totalCount: items.length,
          onToggleMode: toggleSelectionMode,
          onSelectAll: () => handleSelectAll(items.map((t) => t.id)),
          onBulkDelete
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        TrackListContent,
        {
          tracks: items,
          startIndex: ((params.page ?? 1) - 1) * limit,
          currentPlayingIndex,
          setCurrentPlayingIndex,
          onEditTrack,
          onDeleteTrack: onDelete,
          onTrackEnd: handleTrackEnd,
          selectionMode,
          selectedTracks,
          toggleTrackSelection
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        TrackListPagination,
        {
          currentPage: params.page ?? 1,
          totalPages,
          onPageChange
        }
      )
    ] })
  ] });
};

export { TrackList as default };
//# sourceMappingURL=TrackList-25tADTRk.js.map

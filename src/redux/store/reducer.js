import { applyMiddleware, createStore, combineReducers } from "redux";
import { thunk } from "redux-thunk";
import { defaultState } from "./defaultState";

const initialState = [
  {
    description:
      "Человечество на грани уничтожения. На этот раз людям угрожает Альтрон — искусственный интеллект, ранее созданный для того, чтобы защищать Землю от любых угроз. Однако, главной угрозой он посчитал человечество. Международная организация Щ.И.Т. распалась, и теперь мир не способен справиться с таким мощным врагом, потому люди вновь обращаются за помощью к Величайшим Героям Земли — Мстителям. Однако Альтрон слишком силен, и есть большая вероятность, что даже им не удастся остановить начало надвигающейся Эры Альтрона, где нет места для людей…",
    filmId: 679830,
    filmLength: "02:21",
    genres: [{ genre: "детектив" }],
    nameEn: "Avengers: Age of Ultron",
    nameRu: "Мстители: Эра Альтрона",
    posterUrl:
      "https://kinopoiskapiunofficial.tech/images/posters/kp/679830.jpg",
    posterUrlPreview:
      "https://kinopoiskapiunofficial.tech/images/posters/kp_small/679830.jpg",
    rating: "7.3",
    ratingVoteCount: 451712,
    type: "FILM",
    year: "2015",
  },
];

const ID = "ID";
const idReducer = (state = initialState, action) => {
  switch (action.type) {
    case ID:
      return [action.payload];
    default:
      return state;
  }
};
export const getCurrentObj = (payload) => ({ type: ID, payload });

//////////////////////////////////////////////////

const CUSTOM = "CUSTOM";
export const dataReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CUSTOM:
      return [action.payload];
    default:
      return state;
  }
};
export const customAction = (payload) => ({ type: CUSTOM, payload });

////////////////////////////////////////////////////////////
const rootReducer = combineReducers({
  id: idReducer,
  data: dataReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

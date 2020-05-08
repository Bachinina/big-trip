import AbstractComponent from "./abstract-component.js";
import {MONTHS} from "../const.js";

const MAX_DESTINATIONS_TO_SHOW = 3;


const formatDestInterval = (arr) => {
  if (arr) {
    if (arr.length > MAX_DESTINATIONS_TO_SHOW) {
      return `${arr[0] + ` &mdash; ... &mdash; ` + arr[arr.length - 1]}`;
    } else {
      return `${arr.map((el, index) => {
        return index !== arr.length - 1 ? `${el + ` &mdash; `}` : el;
      }).join(`\n`)}`;
    }
  } return ``;
};

const createInfoTemplate = (destinations, dates) => {
  let datesTemplate = ``;

  if (dates) {
    const {start, finish} = dates;
    datesTemplate = `
    ${MONTHS[start.getMonth()] === MONTHS[finish.getMonth()]
    ? `${MONTHS[start.getMonth()]} ${start.getDate()}&nbsp;&mdash;&nbsp; ${finish.getDate()}`
    : `${MONTHS[start.getMonth()]} ${start.getDate()}&nbsp;&mdash;&nbsp; ${MONTHS[finish.getMonth()]} ${finish.getDate()}`}
    `;
  }

  return `<section class="trip-main__trip-info  trip-info">
      <div class="trip-info__main">
        <h1 class="trip-info__title">${formatDestInterval(destinations)}</h1>

        <p class="trip-info__dates">
          ${datesTemplate}
        </p>
      </div>
    </section>`;
};

export default class Info extends AbstractComponent {
  constructor(destinations, dates) {
    super();
    this._destinations = destinations;
    this._dates = dates;
  }

  getTemplate() {
    return createInfoTemplate(this._destinations, this._dates);
  }
}

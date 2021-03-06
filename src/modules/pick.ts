import { IBusinessListProp } from "../interface/IBusiness";

const ADD = "counter/ADD" as const;
const REMOVE = "counter/REMOVE" as const;
const CLEAR = "counter/CLEAR" as const;

export const add = (diff: IBusinessListProp) => ({ type: ADD, payload: diff });
export const remove = (diff: IBusinessListProp) => ({
  type: REMOVE,
  payload: diff,
});
export const clear = () => ({
  type: CLEAR,
});

type PickAction =
  | ReturnType<typeof add>
  | ReturnType<typeof remove>
  | ReturnType<typeof clear>;

type PickState = {
  picked: IBusinessListProp[];
};

const initialState: PickState = {
  picked: Array.from({ length: 0 }),
};

function pick(state: PickState = initialState, action: PickAction) {
  switch (action.type) {
    case ADD:
      return { picked: [...state.picked, action.payload] };
    case REMOVE:
      return {
        picked: state.picked.filter((item) => {
          return action.payload.businessCode !== item.businessCode;
        }),
      };
    case CLEAR:
      return { picked: [] };
    default:
      return state;
  }
}

export default pick;

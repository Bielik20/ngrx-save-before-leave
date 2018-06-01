import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { User } from '../../models/user';
import { UserActionsUnion, UserActionTypes } from '../actions/user';
import { CollectionActionsUnion, CollectionActionTypes } from '../actions/collection';

export interface State extends EntityState<User> {
  selectedUserId: number | null;
}

export const adapter: EntityAdapter<User> = createEntityAdapter<User>({
  selectId: (user: User) => user.id,
  sortComparer: false,
});

export const initialState: State = adapter.getInitialState({
  selectedUserId: null,
});

export function reducer(state: State = initialState, action: UserActionsUnion | CollectionActionsUnion): State {
  switch (action.type) {
    case UserActionTypes.UpdateSuccess: {
      const data = {
        id: action.payload.id,
        changes: action.payload
      };
      return adapter.updateOne(data, state);
    }
    case UserActionTypes.SelectUser: {
      return { ...state, selectedUserId: action.payload };
    }
    case CollectionActionTypes.LoadSuccess: {
      return adapter.addMany(action.payload, state);
    }
    default: {
      return state;
    }
  }
}

export const getSelectedId = (state: State) => state.selectedUserId;

const initialState = {
  ListPlayer: [],
  isLoading: false,
  isFulfilled: false,
  isRejected: false,
};

const buku = (state = initialState, action) => {
  switch (action.type) {
/////////////////////////////////////////////////////    
  case 'GET_PLAYERS_PENDING':
    return {
      ...state,
      isLoading: true,
      isFulfilled: false,
      isRejected: false,
    };
  case 'GET_PLAYERS_REJECTED':
    return {
      ...state,
      isLoading: false,
      isRejected: true,
    };
  case 'GET_PLAYERS_FULFILLED':
    return {
      ...state,
      isLoading: false,
      isFulfilled: true,
      ListPlayer: action.payload.data,
    };
///////////POST////////////////////////////////////////////
    case "POST_PLAYER_PENDING":
        return {
          ...state,
          isLoading: true,
          isRejected: false,
          isFulfilled: false
        };
    case "POST_PLAYER_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true
      };
    case "POST_PLAYER_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        ListPlayer: action.payload.data
      };
/////////////GET1//////////////////////////////////////////
    case 'GET_PLAYER1_PENDING': // in case when loading post data
      return {
        ...state,
        isLoading: true,
        isFulFilled: false,
        isRejected: false
        }
    case 'GET_PLAYER1_REJECTED': // in case error network/else
        return {
            ...state,
            isLoading: false,
            isRejected: true,
        }
    case 'GET_PLAYER1_FULFILLED': // in case successfuly post data
        return {
            ...state,
            isLoading: false,
            isFulFilled: true,
            ListPlayer: action.payload.data,
        }
///////////////DELETE////////////////////////////////////////        
      case 'DELETE_PLAYER_PENDING': // in case when loading post data
          return {
              ...state,
              isLoading: true,
              isFulFilled: false,
              isRejected: false
          }
      case 'DELETE_PLAYER_REJECTED': // in case error network/else
          return {
              ...state,
              isLoading: false,
              isRejected: true,
          }
      case 'DELETE_PLAYER_FULFILLED': // in case successfuly post data
          return {
              ...state,
              isLoading: false,
              isFulFilled: true,
              ListPlayer: [state.ListPlayer, action.payload.data[0]],
          }
//////////////UPDATE/////////////////////////////////////////          
      case 'UPDATE_PLAYER_PENDING': // in case when loading post data
          return {
              ...state,
              isLoading: true,
              isFulFilled: false,
              isRejected: false
          }
      case 'UPDATE_PLAYER_REJECTED': // in case error network/else
          return {
              ...state,
              isLoading: false,
              isRejected: true,
          }
      case 'UPDATE_PLAYER_FULFILLED': // in case successfuly post data
          return {
              ...state,
              isLoading: false,
              isFulFilled: true,
              ListPlayer: [state.ListPlayer, action.payload.data[0]],
          }
    default:
      return state;
  }
};

export default buku;

import callApi from '../../util/apiCaller';

export const ADD_ACCOUNT = 'ADD_ACCOUNT';
export const EDIT_ACCOUNT = 'EDIT_ACCOUNT';
export const SET_ERROR = 'SET_ERROR';

export const addAccount = account => {
  return {
    type: ADD_ACCOUNT,
    account,
  };
};

export const setAccountError = () => {
  return {
    type: SET_ERROR,
  };
};

export const fetchAccountsByPatientID = patientID => dispatch =>
  callApi(`account/${patientID}`).then(res => {
    res.accounts[0] ? dispatch(addAccount(res.accounts[0])) : dispatch(setAccountError());
  });

export const addAccountRequest = account => {
  return dispatch => {
    return callApi('accounts', 'post', {
      account: {
        userName: account.userName,
        password: account.password,
        patientID: account.patientID,
      },
    }).then(res => dispatch(addAccount(res.account)));
  };
};

export const editAccount = account => {
  return {
    type: EDIT_ACCOUNT,
    account,
  };
};

export const editAccountRequest = (isActiveAccount, _id) => {
  return (dispatch) => {
    return callApi(`accounts/${_id}`, 'post', {
      account: { isActiveAccount },
    }).then(res => dispatch(editAccount(res.account)));
  };
};

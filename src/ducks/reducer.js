// --------- INITIAL STATE --------- //

const initialState = {
  // first view
  loanType: 'Home Purchase',
  propertyType: 'Single Family Home',
  //second view
  city: '',
  //third view
  propToBeUsedOn: '',
  //fourth view
  found: "false",
  //fifth view
  realEstateAgent: "false",
  //sixth view
  downPayment: 0,
  cost: 0,
  //seventh view
  credit: '',
  //eigth view
  history: '',
  //ninth view
  addressOne: '',
  addressTwo: '',
  addressThree: '',
  //tenth view
  firstName: '',
  lastName: '',
  email: ''
}

// --------- ACTIONS --------- //

      // ------ 1 ------ //
const UPDATE_LOAN_TYPE = 'UPDATE_LOAN_TYPE',
      UPDATE_PROPERTY_TYPE = 'UPDATE_PROPERTY_TYPE',
      // ------ 2 ------ //
      UPDATE_CITY = 'UPDATE_CITY',
      // ------ 3 ------ //
      UPDATE_PROP_TO_BE_USED_ON = 'UPDATE_PROP_TO_BE_USED_ON',
      // ------ 4 ------ //
      UPDATE_FOUND_HOME = 'UPDATE_FOUND_HOME',
      // ------ 5 ------ //
      UPDATE_REAL_ESTATE_AGENT = 'UPDATE_REAL_ESTATE_AGENT',
      // ------ 6 ------ //
      UPDATE_DOWN_PAYMENT = 'UPDATE_DOWN_PAYMENT',
      UPDATE_COST = 'UPDATE_COST',
      // ------ 7 ------ //
      UPDATE_CREDIT = 'UPDATE_CREDIT',
      // ------ 8 ------ //
      UPDATE_HISTORY = 'UPDATE_HISTORT',
      // ------ 9 ------ //
      UPDATE_ADDRESS_ONE = 'UPDATE_ADDRESS_ONE',
      UPDATE_ADDRESS_TWO = 'UPDATE_ADDRESS_TWO',
      UPDATE_ADDRESS_THREE = 'UPDATE_ADDRESS_THREE',
      // ------ 10 ------ //
      UPDATE_FIRST_NAME = 'UPDATE_FIRST_NAME',
      UPDATE_LAST_NAME = 'UPDATE_LAST_NAME',
      UPDATE_EMAIL = 'UPDATE_EMAIL'


// --------- REDUCER  --------- //

function reducer(state=initialState, action){
  switch(action.type) {
    case UPDATE_LOAN_TYPE:
      return Object.assign({}, state, { loanType: action.payload })

    case UPDATE_PROPERTY_TYPE:
      return Object.assign({}, state, { propertyType: action.payload })

    case UPDATE_CITY:
      return Object.assign({}, state, { city: action.payload })

    case UPDATE_PROP_TO_BE_USED_ON:
      return Object.assign({}, state, { propToBeUsedOn: action.payload })

    case UPDATE_FOUND_HOME:
      return Object.assign({}, state, { found: action.payload })

    case UPDATE_REAL_ESTATE_AGENT:
      return Object.assign({}, state, { realEstateAgent: action.payload })

    case UPDATE_DOWN_PAYMENT:
      return Object.assign({}, state, { downPayment: action.payload })

    case UPDATE_COST:
      return Object.assign({}, state, { cost: action.payload })

    case UPDATE_CREDIT:
      return Object.assign({}, state, { credit: action.payload })

    case UPDATE_HISTORY:
      return Object.assign({}, state, { history: action.payload })

    case UPDATE_ADDRESS_ONE:
      return Object.assign({}, state, { addressOne: action.payload })

    case UPDATE_ADDRESS_TWO:
      return Object.assign({}, state, { addressTwo: action.payload })

    case UPDATE_ADDRESS_THREE:
      return Object.assign({}, state, { addressThree: action.payload })

    case UPDATE_FIRST_NAME:
      return Object.assign({}, state, { firstName: action.payload })

    case UPDATE_LAST_NAME:
      return Object.assign({}, state, { lastName: action.payload })

    case UPDATE_EMAIL:
      return Object.assign({}, state, { email: action.payload })

    default:
      return state
  }
}

// --------- ACTION CREATORS --------- //

export function updateLoanType(loanType) {
  return {
    type: UPDATE_LOAN_TYPE,
    payload: loanType
  }
}
export function updatePropertyType(propertyType) {
  return {
    type: UPDATE_PROPERTY_TYPE,
    payload: propertyType
  }
}
export function updateCity(city) {
  return {
    type: UPDATE_CITY,
    payload: city
  }
}
export function updatePropToBeUsedOn(property) {
  return {
    type: UPDATE_PROP_TO_BE_USED_ON,
    // add a space to property name
    payload: property.split(/(?=[A-Z])/).join(" ")
  }
}
export function updateFoundHome(value) {
  return {
    type: UPDATE_FOUND_HOME,
    payload: value
  }
}
export function updateRealEstateAgent(value) {
  return {
    type: UPDATE_REAL_ESTATE_AGENT,
    payload: value
  }
}
export function updateCost(amount) {
  return {
    type: UPDATE_COST,
    payload: amount
  }
}
export function updateDownPayment(amount) {
  return {
    type: UPDATE_DOWN_PAYMENT,
    payload: amount
  }
}

export default reducer;
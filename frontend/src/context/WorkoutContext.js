import { createContext, useReducer } from "react";

export const WorkoutContext = createContext();

export const workoutReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_WORKOUTS":
      return {
        workouts: action.payload,
      };
    case "ADD_WORKOUT":
      return {
        workouts: [...state.workouts, action.payload],
      };
    case "DELETE_WORKOUT":
      return {
        workouts: state.workouts.filter(
          (workout) => workout._id !== action.payload._id
        ),
      };
    case "UPDATE_WORKOUT":
      return {
        workouts: state.workouts.map((workout) => {
          if (workout.id === action.payload.id) {
            return action.payload;
          } else {
            return workout;
          }
        }),
      };

    default:
      return state;
  }
};

const WorkoutContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(workoutReducer, {
    workouts: null,
  });

  // dispatch({ type: "FETCH_WORKOUTS", payload: [{}, {}] });

  return (
    <WorkoutContext.Provider value={{ ...state, dispatch }}>
      {children}
    </WorkoutContext.Provider>
  );
};

export default WorkoutContextProvider;

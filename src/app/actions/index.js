
// export const events = {
//   INPUT_CHANGED: "INPUT_CHANGED",
//   CREATE_TIMER: "CREATE_TIMER",
//   PAUSE_TIMER: "PAUSE_TIMER",
//   RESUME_TIMER: "RESUME_TIMER",
//   DELETE_TIMER: "DELETE_TIMER",
// }

export function inputChanged(value) {
  return {
    type: "INPUT_CHANGED",
    value,
  }
}

export function createTimer() {
  return {
    type: "CREATE_TIMER",
    id: Date.now(),
  }
}

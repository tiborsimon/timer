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

export function pauseTimer(id) {
  return {
    type: "PAUSE_TIMER",
    id,
  }
}

export function resumeTimer(id) {
  return {
    type: "RESUME_TIMER",
    id,
  }
}

export function deleteTimer(id) {
  return {
    type: "DELETE_TIMER",
    id,
  }
}

export function timerTick(id) {
  return {
    type: "TICK",
    id,
  }
}

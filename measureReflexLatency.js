function createReflexTracker() {
  let stimulusStart = null;

  return {
    triggerStimulus() {
      stimulusStart = performance.now();
    },
    recordResponse() {
      if (stimulusStart === null) return null;
      const latencyMs = Number((performance.now() - stimulusStart).toFixed(2));
      stimulusStart = null;
      return latencyMs;
    }
  };
}
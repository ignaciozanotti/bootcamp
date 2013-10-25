var MathAPI = (function() {

  function round(value, radix){
    radix = radix;
    if (radix == 0) {
    throw new Error('denominator can`t be zero');
    }
    return Math.round(value / radix) * radix;
  }

  function ceil(val, step){
    step = Math.abs(step);
        if (step == 0) {
    throw new Error('denominator can`t be zero');
    }
    return Math.ceil(val / step) * step;
  }

  function clamp(val, min, max){
            if (min > max) {
    throw new Error('min can`t be bigger than max');
    }
    return val < min? min : (val > max? max : val);
  }

  function countSteps(val, step, overflow){
    val = Math.floor(val / step);

    if (overflow) {
      return val % overflow;
    }

    return val;
  }

  function floor(val, step){
    step = Math.abs(step);
    return Math.floor(val / step) * step;
  }

  function inRange(val, min, max, threshold){
    return (val + threshold >= min && val - threshold <= max);
  }

  function lerp(ratio, start, end){

    if (start > end) {
    throw new Error('start cant be bigger than end');
    }

    return start + (end - start) * ratio;
  }

  function loop(val, min, max){
    return val < min? max : (val > max? min : val);
  }

  function norm(val, min, max){

    if (min > max) {
    throw new Error('min can`t be bigger than max');
    }
    if (min == max) {
    throw new Error('denominator can`t be zero');
    }

    return (val - min) / (max - min);
  }

  return {
    round: round,
    ceil: ceil,
    clamp: clamp,
    countSteps: countSteps,
    floor: floor,
    inRange: inRange,
    lerp: lerp,
    loop: loop,
    norm: norm
  }

}());
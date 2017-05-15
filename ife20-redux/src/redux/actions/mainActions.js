//action类型

export const LEFT_IN = 'LEFT_IN';
export const RIGHT_IN = 'RIGHT_IN';
export const LEFT_OUT = 'LEFT_OUT';
export const RIGHT_OUT = 'RIGHT_OUT';

//点击清除
export const CLICK_OUT = 'CLICK_OUT';

//动画样式
export const TOOGLE_CLASS = 'TOOGLE_CLASS';


// action创建函数
export const leftIn  = (value) => {
    return {
      type: LEFT_IN,
      value,
      finished: false
    }
}

export const leftOut  = () => {
    return {
      type: LEFT_OUT
    }
}
export const rightIn  = (value) => {
    return {
      type: RIGHT_IN,
      value,
      finished: false
    }
}
export const rightOut  = () => {
    return {
      type: RIGHT_OUT
    }
}

export const clickOut = (index) => {
    return {
      type: CLICK_OUT,
      index
    }
}

export const toogleClass = (index) => {
    return {
      type: TOOGLE_CLASS,
      index
    }
}
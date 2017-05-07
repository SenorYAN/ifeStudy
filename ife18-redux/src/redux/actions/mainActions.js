//action类型

export const LEFT_IN = 'LEFT_IN';
export const RIGHT_IN = 'RIGHT_IN';
export const LEFT_OUT = 'LEFT_OUT';
export const RIGHT_OUT = 'RIGHT_OUT';


// action创建函数
export const leftIn  = (value) => {
    return {
      type: LEFT_IN,
      value
    }
}

export const leftOut  = (value) => {
    return {
      type: LEFT_OUT,
      value
    }
}
export const rightIn  = (value) => {
    return {
      type: RIGHT_IN,
      value
    }
}
export const rightOut  = (value) => {
    return {
      type: RIGHT_OUT,
      value
    }
}
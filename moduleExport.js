//Using ES Module

export const a = 1; //Named Export


export const b = {
    name: 'abc'
} //Named Export but with named export you can export multiple times

let c;
export default c = 2; //Default Export - You can use only one default export in a file otherwise it will give error

// let d;
// export default d =4; //it will give error because we are not allowed to use multiple export
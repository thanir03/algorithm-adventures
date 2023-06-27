// function flatten(value: any) {
//   if (typeof value !== "object" || value === null) return value;
//   const isValueArray = Array.isArray(value);
//   const obj: any[] | { [key: string]: any } = isValueArray ? [] : {};
//   for (let key in value) {
//     const flattenedValue = flatten(value[key]);
//     const isFlattendValueArray = Array.isArray(flattenedValue);
//     if (isValueArray) {
//       if (isFlattendValueArray) {
//         obj.push(...flattenedValue);
//       } else {
//         obj.push(flattenedValue);
//       }
//     } else {
//       if (
//         typeof flattenedValue !== "object" ||
//         flattenedValue === null ||
//         isFlattendValueArray
//       ) {
//         obj[key] = flattenedValue;
//       } else if (!isFlattendValueArray) {
//         for (let i in flattenedValue) {
//           obj[i] = flattenedValue[i];
//         }
//       }
//     }
//   }
//   return obj;
// }

// Redo again
// type error

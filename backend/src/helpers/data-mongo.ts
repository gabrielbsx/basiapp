export const dataMongo = (data: any & { _id: string, __v: number }) => ({
  ...data,
  id: data._id,
  _id: undefined, 
  __v: undefined,
});

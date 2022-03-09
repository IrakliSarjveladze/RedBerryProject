export const serializeSkills = (data) => {
  return data.map(({ id, title }) => {
    return {
      value: id,
      label: title,
    };
  });
};
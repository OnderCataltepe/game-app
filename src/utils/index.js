// Rating Color

export const ratingColor = (point) => {
  if (point >= 4.5) {
    return 'text-green-700';
  } else if (point >= 4) {
    return 'text-green-400';
  } else if (point >= 3.5) {
    return 'text-orange-500';
  } else {
    return 'text-red-700';
  }
};

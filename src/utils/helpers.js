
export const generateId = () => Math.floor(Math.random()*1000000)

const invalidIndex = (array, index) => {
	return index >= array.length || index < 0; 
}

export const swapArrayPosition = (array, fromIndex, toIndex) => {
	var result = array.slice();
	
	var absDif = Math.abs(fromIndex - toIndex);
	if(absDif != 1 || invalidIndex(result, fromIndex) || invalidIndex(result, toIndex)) return result;

    result.splice(toIndex, 0, result.splice(fromIndex, 1)[0]);
	return result;
};

export const findIndexOfPlaceToVisit = (array, id) => {
  return array.map((place) => { return place.id}).indexOf(id);
};

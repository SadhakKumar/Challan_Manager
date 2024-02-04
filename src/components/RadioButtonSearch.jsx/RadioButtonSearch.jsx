import React, { useEffect , useState} from 'react';
import { useDispatch } from 'react-redux';
import { setRadio } from '../../features/Search/SearchSlice';

function RadioButtonSearch() {
  const dispatch = useDispatch();
  const [searchType, setSearchType] = useState('vehicle');

  useEffect(() => {
    console.log(searchType);
  }, [searchType]);

  const setSearchTypeRedux = (item) => {
    setSearchType(item);
    dispatch(setRadio(item));
  }

  return (
    <>
      <div className="radio-group">
        <label>
          <input
            type="radio"
            name="searchType"
            value="vehicle"
            checked={searchType === 'vehicle'}
            onChange={() => setSearchTypeRedux('vehicle')}
          />
          Vehicle No.
        </label>
        <label>
          <input
            type="radio"
            name="searchType"
            value="challan"
            checked={searchType === 'challan'}
            onChange={() => setSearchTypeRedux('challan')}
          />
          Challan No.
        </label>
      </div>
    </>
  );
}

export default RadioButtonSearch;

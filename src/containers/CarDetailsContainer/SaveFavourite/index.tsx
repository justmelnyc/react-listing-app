import React from 'react';
import Button from '../../../components/Button';
import { IFavouriteProps } from './SaveFavourite';
const SaveFavourite: React.FunctionComponent<IFavouriteProps> = (props: IFavouriteProps) => {
  const { favourite, saveFavourite } = props;
  return (
    <div className="details-wrapper-right">
      <div className="favourite-item">
        If you like this car, click the button and save it in your collection of favourite items.
      </div>
      <Button label={favourite ? 'Saved' : 'Save'} isPressed={favourite} onClick={saveFavourite} />
    </div>
  );
};

export default SaveFavourite;

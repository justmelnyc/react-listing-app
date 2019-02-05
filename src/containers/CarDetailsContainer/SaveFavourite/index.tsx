import React from 'react';
import Button from '../../../components/Button';
import { TextConstants } from '../../../constants/textConstants';
import { IFavouriteProps } from './SaveFavourite';
const SaveFavourite: React.FunctionComponent<IFavouriteProps> = React.memo((props: IFavouriteProps) => {
  const { favourite, saveFavourite } = props;
  return (
    <div className="details-wrapper-right">
      <div className="favourite-item">{TextConstants.saveFaourite}</div>
      <Button label={favourite ? 'Saved' : 'Save'} isPressed={favourite} onClick={saveFavourite} />
    </div>
  );
});

export default SaveFavourite;

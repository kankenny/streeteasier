import React from 'react'

import Card from '../../ui/Card'
import Heading from '../../ui/Heading'
import SolidButton from '../../ui/buttons/SolidButton'

function SortingMenu({ apartments ,setApartments }) {

  const sortByKey = (key) => {
    const compare = (a, b) => {
      if (a[key] < b[key]) {
        return -1;
      } else if (a[key] > b[key]) {
        return 1;
      }
      return 0;
    };
    setApartments([...apartments.sort(compare)]);
  };

  return (
    <Card className="flex flex-col">
      <Heading heading="Sort by:" />
      <div className="flex-flex-row mx-auto">
        <SolidButton
          buttonText="Price"
          className="bg-primary w-50"
          onClick={() => sortByKey('pricePerMonth')}
        />
        <SolidButton
          buttonText="Number of People Interested"
          className="bg-primary w-50"
          onClick={() => sortByKey('numPeopleInterested')}
        />
      </div>
    </Card>
  )
}

export default SortingMenu

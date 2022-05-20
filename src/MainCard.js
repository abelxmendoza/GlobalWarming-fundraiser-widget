import React, { useEffect, useState } from 'react';
import { Thermometer } from './Thermometer';

const mockedData = {
  id: 1,
  goal: 2000,
  raised: 200,
  title: 'Fight Global Warming',
  logo: 'https://www.designfreelogoonline.com/wp-content/uploads/2016/03/000707-online-digital-eye-logo-free-logo-maker-02.png',
};

function MainCard(props) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState(mockedData);

  useEffect(() => {
    //mock AJAX call here
      fetch(`/api/fundraiser/:id`)
      .then((res) => res.json())
      .then((result) => {
        setIsLoaded(true);
        setData(result.data);
      });
  }, []);


  
  return (
    <div className='card'>
      <div className='card-header'>
        <div className='logo'>
          <img src={data.logo} alt='' width='100%' />
        </div>
      </div>
      <div className='card-body'>
        <h4 className='title'>{data.title}</h4>
        <Thermometer goal={data.goal} title={data.title} raised={data.raised} /> 
      </div>
    </div>
  );
   
}
export default MainCard;
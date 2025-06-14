import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateLabelChart } from '../../redux/chart.actions';

function User() {
  // const [tab, setTab] = React.useState('information');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [labelChart, setLabelChart] = React.useState('');

  function updateTitleChart() {
    dispatch(updateLabelChart(labelChart))
  }


  return (
    <div>
      First Name: Tony <br />
      Last Name: Nguyen <br />
      Label Chart: <input type="text" onChange={e => setLabelChart(e.target.value)} /> 
      <button type="button" onClick={updateTitleChart}>Update Title Chart</button> <br />
      <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200">
        <li className="me-2">
          <div
            aria-current="page"
            className="inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg"
            onClick={() => navigate('information')}
          >
            Information
          </div>
        </li>
        <li className="me-2">
          <div
            className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50"
            onClick={() => navigate('cart')}
          >
            Cart
          </div>
        </li>
        <li className="me-2">
          <div
            className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50"
            onClick={() => navigate('setting')}
          >
            Settings
          </div>
        </li>
      </ul>

      <div>
        <Outlet />
        {/* {tab === 'information' && (
          <UserInformation />
        )}

        {tab === 'cart' && (
          <UserCart />
        )}

        {tab === 'setting' && (
          <UserSetting />
        )} */}
      </div>

    </div>
  )
}

export default User
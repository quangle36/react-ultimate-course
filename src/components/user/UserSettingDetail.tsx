import React from 'react'
import { useParams } from 'react-router-dom'

function UserSettingDetail() {
  const params = useParams();
  const settingId = params.settingId;

  React.useEffect(() => {
    if (!settingId) return;

    // fetch id with setting Id -> set data -> show data detail
  }, [settingId])


  return (
    <div>UserSettingDetail</div>
  )
}

export default UserSettingDetail
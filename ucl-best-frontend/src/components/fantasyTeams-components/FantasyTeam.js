
import React, {useState} from 'react'
import EditForm from './EditForm'


const FantasyTeam = ({fantasyTeam}) => {
    const [showInfo, setShowInfo] = useState(false)
    const [showEditForm, setShowEditForm] = useState(false)


    const onClick = () => {

        setShowInfo(!showInfo)
    }

    const onEdit = () => {
            setShowEditForm(!showEditForm)
        }
    
    return (
        <>
        <p onClick={onClick}>
            {fantasyTeam.name}
        </p>

        {showInfo && <> 
            <p> {fantasyTeam.nickname}</p>
            <p> {fantasyTeam.color}</p>
            <p> {fantasyTeam.country}</p>
            </>}
            <button onClick={onEdit}> Edit Team </button>

            {showEditForm && <EditForm fantasyTeam={fantasyTeam} setShowEditForm={setShowEditForm}/>}
        </>
    )
  
}

export default FantasyTeam

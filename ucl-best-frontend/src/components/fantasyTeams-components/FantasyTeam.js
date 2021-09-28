
import React, {useState} from 'react'
import EditForm from './EditForm'
// import fantasyTeamAction from '../actions/fantasyTeamAction'

// console.log({fantasyTeam})
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
        <React.Fragment>
        <p onClick={onClick}>
            {/* {console.log({fantasyTeam})} */}
            {fantasyTeam.name}
        </p>

            {showInfo && <React.Fragment>
            <p> {fantasyTeam.nickname}</p>
            <p> {fantasyTeam.color}</p>
            <p> {fantasyTeam.country}</p>
                </React.Fragment>}
            <button onClick={onEdit}> Edit Team </button>

            {showEditForm && <EditForm fantasyTeam={fantasyTeam} setShowEditForm={setShowEditForm}/>}
        </React.Fragment>
    )
  
}

export default FantasyTeam
